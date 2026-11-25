// Right-Triangulated Irregular Network (RTIN) terrain simplification for a (2^k+1)^2 tile.
// Algorithm after "Martini" (Vladimir Agafonkin, ISC) — reimplemented here.

export class RtinTile {
  constructor(size) {
    // size = 2^k + 1
    this.size = size;
    const tileSize = size - 1;
    if (tileSize & (tileSize - 1)) throw new Error('size must be 2^k+1');
    this.numTriangles = tileSize * tileSize * 2 - 2;
    this.numParentTriangles = this.numTriangles - tileSize * tileSize;
    this.coords = new Uint16Array(this.numTriangles * 4);
    for (let i = 0; i < this.numTriangles; i++) {
      let id = i + 2, ax = 0, ay = 0, bx = 0, by = 0, cx = 0, cy = 0;
      if (id & 1) { bx = by = cx = tileSize; } else { ax = ay = cy = tileSize; }
      while ((id >>= 1) > 1) {
        const mx = (ax + bx) >> 1, my = (ay + by) >> 1;
        if (id & 1) { bx = ax; by = ay; ax = cx; ay = cy; } else { ax = bx; ay = by; bx = cx; by = cy; }
        cx = mx; cy = my;
      }
      const k = i * 4;
      this.coords[k] = ax; this.coords[k + 1] = ay; this.coords[k + 2] = bx; this.coords[k + 3] = by;
    }
  }

  /** heights: Float32Array size*size (row-major, y rows). Returns errors array. */
  errors(heights, force = null) {
    const size = this.size, tileSize = size - 1, errors = new Float32Array(size * size);
    for (let i = this.numTriangles - 1; i >= 0; i--) {
      const k = i * 4;
      const ax = this.coords[k], ay = this.coords[k + 1], bx = this.coords[k + 2], by = this.coords[k + 3];
      const mx = (ax + bx) >> 1, my = (ay + by) >> 1;
      const cx = mx + my - ay, cy = my + ax - mx;
      const interp = (heights[ay * size + ax] + heights[by * size + bx]) / 2;
      const mid = my * size + mx;
      const e = force && force[mid] ? 1e6 : Math.abs(interp - heights[mid]);
      errors[mid] = Math.max(errors[mid], e);
      if (i < this.numParentTriangles) {
        const lc = ((ay + cy) >> 1) * size + ((ax + cx) >> 1);
        const rc = ((by + cy) >> 1) * size + ((bx + cx) >> 1);
        errors[mid] = Math.max(errors[mid], errors[lc], errors[rc]);
      }
    }
    return errors;
  }

  /** Returns {vertices: Uint16Array (x,y pairs), triangles: Uint32Array}. */
  mesh(errors, maxError) {
    const size = this.size, max = size - 1;
    const indices = new Uint32Array(size * size);
    let numVertices = 0, numTriangles = 0;
    const countElements = (ax, ay, bx, by, cx, cy) => {
      const mx = (ax + bx) >> 1, my = (ay + by) >> 1;
      if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
        countElements(cx, cy, ax, ay, mx, my);
        countElements(bx, by, cx, cy, mx, my);
      } else {
        if (!indices[ay * size + ax]) indices[ay * size + ax] = ++numVertices;
        if (!indices[by * size + bx]) indices[by * size + bx] = ++numVertices;
        if (!indices[cy * size + cx]) indices[cy * size + cx] = ++numVertices;
        numTriangles++;
      }
    };
    countElements(0, 0, max, max, max, 0);
    countElements(max, max, 0, 0, 0, max);
    const vertices = new Uint16Array(numVertices * 2);
    const triangles = new Uint32Array(numTriangles * 3);
    let triIndex = 0;
    const processTriangle = (ax, ay, bx, by, cx, cy) => {
      const mx = (ax + bx) >> 1, my = (ay + by) >> 1;
      if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
        processTriangle(cx, cy, ax, ay, mx, my);
        processTriangle(bx, by, cx, cy, mx, my);
      } else {
        const a = indices[ay * size + ax] - 1, b = indices[by * size + bx] - 1, c = indices[cy * size + cx] - 1;
        vertices[2 * a] = ax; vertices[2 * a + 1] = ay;
        vertices[2 * b] = bx; vertices[2 * b + 1] = by;
        vertices[2 * c] = cx; vertices[2 * c + 1] = cy;
        triangles[triIndex++] = a; triangles[triIndex++] = b; triangles[triIndex++] = c;
      }
    };
    processTriangle(0, 0, max, max, max, 0);
    processTriangle(max, max, 0, 0, 0, max);
    return { vertices, triangles };
  }
}
