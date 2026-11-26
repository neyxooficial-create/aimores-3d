"""Download the Overture Maps features that fall inside the Aimorés map area.

Reads only the parquet row groups whose bounding box intersects the map (HTTP range requests),
so it never downloads the full multi-GB files.

Output: source/overture_<theme>_<type>.json (list of dicts, geometry as WKB hex + bbox)
Usage:  SSL_CERT_FILE=... python3 tools/fetch-overture.py places/place transportation/segment ...
"""
import json, os, sys, re, urllib.request
import fsspec, pyarrow.parquet as pq

RELEASE = os.environ.get('OVERTURE_RELEASE', '2026-11-18.0')
BUCKET = 'https://overturemaps-us-west-2.s3.us-west-2.amazonaws.com'
# map area (see data/city.json meta): lon -41.0652..-41.0410, lat -19.5040..-19.4860, plus a margin
LON0, LON1, LAT0, LAT1 = -41.072, -41.034, -19.510, -19.480


def list_keys(prefix):
    keys, token = [], None
    while True:
        url = f'{BUCKET}/?list-type=2&prefix={prefix}' + (f'&continuation-token={urllib.request.quote(token)}' if token else '')
        x = urllib.request.urlopen(url, timeout=60).read().decode()
        keys += re.findall(r'<Key>([^<]+\.parquet)</Key>', x)
        m = re.search(r'<NextContinuationToken>([^<]+)</NextContinuationToken>', x)
        if not m:
            return keys
        token = m.group(1)


def rg_bbox(md, names):
    """bbox of a row group from column statistics, or None if unavailable."""
    out = {}
    for i in range(md.num_columns):
        c = md.column(i)
        p = c.path_in_schema
        if p in names and c.statistics is not None and c.statistics.has_min_max:
            out[p] = (c.statistics.min, c.statistics.max)
    try:
        return out['bbox.xmin'][0], out['bbox.ymin'][0], out['bbox.xmax'][1], out['bbox.ymax'][1]
    except KeyError:
        return None


def main():
    fs = fsspec.filesystem('http', client_kwargs={'trust_env': True}, block_size=2 ** 20)
    for spec in sys.argv[1:]:
        theme, typ = spec.split('/')
        keys = list_keys(f'release/{RELEASE}/theme={theme}/type={typ}/')
        print(spec, len(keys), 'files', flush=True)
        rows = []
        for k in keys:
            f = fs.open(f'{BUCKET}/{k}', 'rb')
            pf = pq.ParquetFile(f)
            hits = []
            for g in range(pf.metadata.num_row_groups):
                bb = rg_bbox(pf.metadata.row_group(g), {'bbox.xmin', 'bbox.ymin', 'bbox.xmax', 'bbox.ymax'})
                if bb is None:
                    continue
                if bb[0] <= LON1 and bb[2] >= LON0 and bb[1] <= LAT1 and bb[3] >= LAT0:
                    hits.append(g)
            print('  ', k.split('/')[-1][:20], pf.metadata.num_row_groups, 'row groups ->', len(hits), flush=True)
            for g in hits:
                t = pf.read_row_group(g).to_pylist()
                for r in t:
                    b = r.get('bbox') or {}
                    if b and b['xmin'] <= LON1 and b['xmax'] >= LON0 and b['ymin'] <= LAT1 and b['ymax'] >= LAT0:
                        if isinstance(r.get('geometry'), (bytes, bytearray)):
                            r['geometry'] = r['geometry'].hex()
                        rows.append(r)
            f.close()
        os.makedirs('source', exist_ok=True)
        out = f'source/overture_{theme}_{typ}.json'
        json.dump(rows, open(out, 'w'), default=str, ensure_ascii=False)
        print('  ->', out, len(rows), 'features', flush=True)


if __name__ == '__main__':
    main()
