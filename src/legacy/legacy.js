// AUTO-GERADO por tools/extract-legacy.mjs a partir do app.js v4 (minificado).
// Contém os construtores feitos à mão dos marcos da cidade. Os nomes curtos são do
// minificador original; as partes novas do projeto ficam em src/*.js.
/* eslint-disable */
import * as THREE from 'three';
const Fe = (i, t) => () => (i && (t = i(i = 0)), t);
const Ne = () => {};
const F = THREE.Vector3;
const _t = THREE.Vector2;
const ue = THREE.Matrix4;
const ze = THREE.Quaternion;
const Qt = THREE.Color;
const wn = THREE.Euler;
const fi = THREE.Spherical;
const Pt = THREE.Mesh;
const Ve = THREE.InstancedMesh;
const he = THREE.Group;
const Po = THREE.Line;
const pe = THREE.BufferGeometry;
const Jt = THREE.Float32BufferAttribute;
const ae = THREE.BufferAttribute;
const He = THREE.BoxGeometry;
const be = THREE.CylinderGeometry;
const ci = THREE.ShapeUtils;
const Is = THREE.ExtrudeGeometry;
const Bo = THREE.LatheGeometry;
const In = THREE.SphereGeometry;
const Ls = THREE.IcosahedronGeometry;
const Ai = THREE.PlaneGeometry;
const Gi = THREE.Shape;
const Ho = THREE.TubeGeometry;
const yr = THREE.CatmullRomCurve3;
const Ps = THREE.ConeGeometry;
const Xi = THREE.TorusGeometry;
const zo = THREE.CircleGeometry;
const ko = THREE.RingGeometry;
const Tt = THREE.MeshStandardMaterial;
const As = THREE.MeshBasicMaterial;
const Sr = THREE.MeshLambertMaterial;
const fn = THREE.ShaderMaterial;
const pr = THREE.MeshDepthMaterial;
const Vo = THREE.LineDashedMaterial;
const gr = THREE.DataTexture;
const pn = THREE.CanvasTexture;
const wr = THREE.TextureLoader;
const dn = THREE.Box3;
const Jn = THREE.Sphere;
const Us = THREE.Raycaster;
const Yo = THREE.Clock;
const Ar = THREE.MathUtils;
const Vl = THREE.UniformsUtils;
const Xt = THREE.DoubleSide;
const Ke = THREE.BackSide;
const bn = THREE.RepeatWrapping;
const Zn = THREE.ClampToEdgeWrapping;
const kn = THREE.LinearMipmapLinearFilter;
const Cn = THREE.LinearFilter;
const En = THREE.RGBAFormat;
const Ce = THREE.SRGBColorSpace;
const zl = THREE.RGBADepthPacking;
const mn = THREE.TOUCH;
var Os, Ku = Fe(() => {
  Ne();
  Os = class i extends Pt {
    constructor() {
      let t = i.SkyShader,
        e = new fn({
          name: t.name,
          uniforms: Vl.clone(t.uniforms),
          vertexShader: t.vertexShader,
          fragmentShader: t.fragmentShader,
          side: Ke,
          depthWrite: !1
        });
      super(new He(1, 1, 1), e), this.isSky = !0
    }
  };
  Os.SkyShader = {
    name: "SkyShader",
    uniforms: {
      turbidity: {
        value: 2
      },
      rayleigh: {
        value: 1
      },
      mieCoefficient: {
        value: .005
      },
      mieDirectionalG: {
        value: .8
      },
      sunPosition: {
        value: new F
      },
      up: {
        value: new F(0, 1, 0)
      }
    },
    vertexShader: `
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,
    fragmentShader: `
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
  }
});

function Ln(i) {
  let t = i >>> 0 || 1;
  return () => (t ^= t << 13, t >>>= 0, t ^= t >> 17, t ^= t << 5, t >>>= 0, t / 4294967296)
}

function Ri(i, t) {
  let e = document.createElement("canvas");
  return e.width = i, e.height = t, [e, e.getContext("2d")]
}

function Le(i, t) {
  let e = Ln(t),
    n = new Float32Array(i * i);
  for (let s = 0; s < i * i; s++) n[s] = e();
  return (s, r) => {
    s = (s % i + i) % i, r = (r % i + i) % i;
    let o = Math.floor(s),
      a = Math.floor(r),
      c = (o + 1) % i,
      l = (a + 1) % i,
      h = s - o,
      u = r - a,
      d = h * h * (3 - 2 * h),
      f = u * u * (3 - 2 * u),
      m = n[a * i + o],
      x = n[a * i + c],
      g = n[l * i + o],
      p = n[l * i + c];
    return (m * (1 - d) + x * d) * (1 - f) + (g * (1 - d) + p * d) * f
  }
}

function _n(i, t, e, n = 4) {
  let s = 0,
    r = .5,
    o = 1,
    a = 0;
  for (let c = 0; c < n; c++) s += r * i(t * o, e * o), a += r, r *= .5, o *= 2;
  return s / a
}

function Qu(i, t) {
  return i.wrapS = i.wrapT = bn, i.anisotropy = 8, i.generateMipmaps = !0, i.minFilter = kn, i.magFilter = Cn, t && (i.colorSpace = Ce), i.needsUpdate = !0, i
}

function Rr(i, t, e, n = !0) {
  let s = new gr(i, t, e, En);
  return Qu(s, n)
}

function na(i, t = !0) {
  return Qu(new pn(i), t)
}

function ia(i, t, e, n = 2) {
  let s = new Uint8Array(t * e * 4);
  for (let r = 0; r < e; r++)
    for (let o = 0; o < t; o++) {
      let a = i[r * t + (o - 1 + t) % t],
        c = i[r * t + (o + 1) % t],
        l = i[(r - 1 + e) % e * t + o],
        h = i[(r + 1) % e * t + o],
        u = (a - c) * n,
        d = (h - l) * n,
        f = 1,
        m = Math.hypot(u, d, f);
      u /= m, d /= m, f /= m;
      let x = (r * t + o) * 4;
      s[x] = (u * .5 + .5) * 255, s[x + 1] = (d * .5 + .5) * 255, s[x + 2] = (f * .5 + .5) * 255, s[x + 3] = 255
    }
  return Rr(s, t, e, !1)
}

function Gn(i, t, e, n, s = !1) {
  let r = new Uint8Array(i * t * 4),
    o = new Float32Array(i * t);
  for (let a = 0; a < t; a++)
    for (let c = 0; c < i; c++) {
      let l = e(c, a),
        h = (a * i + c) * 4;
      r[h] = Math.max(0, Math.min(255, l[0])), r[h + 1] = Math.max(0, Math.min(255, l[1])), r[h + 2] = Math.max(0, Math.min(255, l[2])), r[h + 3] = s ? Math.max(0, Math.min(255, (l[4] ?? 1) * 255)) : 255, o[a * i + c] = l[3] || 0
    }
  return {
    map: Rr(r, i, t, !0),
    normalMap: n ? ia(o, i, t, n) : null
  }
}

function je(i, t) {
  return ju[i] || (ju[i] = t())
}

function td() {
  return je("cer", () => {
    let i = ln,
      t = Ln(5),
      e = Le(16, 7),
      n = Le(64, 9),
      s = 8,
      r = 3,
      o = [];
    for (let a = 0; a < s * r * 4; a++) o.push(t());
    return Gn(i, i, (a, c) => {
      let l = a / i * s,
        h = c / i * r,
        u = Math.floor(l),
        d = Math.floor(h),
        f = l - u,
        m = h - d,
        x = u % 2 === 1,
        g = Math.sin(Math.PI * f),
        p = x ? .55 + .45 * g : .35 - .3 * g;
      p += (1 - m) * .35;
      let v = o[(d * s + u) % o.length],
        y = .8 + .2 * v;
      v > .95 && (y *= .78), v < .04 && (y *= 1.12);
      let _ = x ? .86 + .18 * g : .74 + .12 * (1 - g),
        P = m > .9 ? .6 + (1 - m) * 4 : 1,
        M = _n(e, a / i * 16, c / i * 16, 3),
        b = Math.max(0, _n(n, a / i * 64 * .25, c / i * 64 * .25, 3) - .58) * 2.2,
        w = 255 * y * _ * P * (.92 + .16 * M),
        S = w * (.92 - .05 * v),
        E = w * (.88 - .08 * v);
      return w = w * (1 - b) + b * 70, S = S * (1 - b) + b * 68, E = E * (1 - b) + b * 58, [w, S, E, p]
    }, 3.5)
  })
}

function ed() {
  return je("fib", () => {
    let i = ln,
      t = Le(32, 11),
      e = Le(16, 13),
      n = Le(128, 15);
    return Gn(i, i, (s, r) => {
      let o = s / i,
        a = r / i,
        c = Math.sin(o * 12 * Math.PI * 2),
        l = .5 + .5 * c,
        h = a * 2.2 / 1.22 % 1;
      h < .025 && (l += .6);
      let d = o * 2 % 1 < .02 ? .9 : 1,
        f = _n(t, o * 8, a * 8, 4),
        m = _n(e, o * 40, a * 3, 3),
        x = n(o * 128, a * 128),
        g = 228 * (.86 + .3 * (f - .5)) * (.94 + .12 * m) * (.97 + .06 * x) * (.92 + .08 * c) * d;
      return f < .34 && (g *= .88), h < .025 && (g *= .8), [g, g * .995, g * .97, l]
    }, 1.3)
  })
}

function nd() {
  return je("met", () => {
    let i = ln >> 1,
      t = Le(16, 17),
      e = Le(64, 19);
    return Gn(i, i, (n, s) => {
      let r = n / i * 4,
        o = s / i,
        a = r - Math.floor(r),
        c = a < .12 ? a / .12 : a < .3 ? 1 : a < .42 ? 1 - (a - .3) / .12 : 0;
      c += .15 * Math.sin(a * Math.PI * 8) * (a > .45 ? 1 : 0);
      let l = _n(t, n / i * 4, s / i * 6, 3),
        h = e(n / i * 64, s / i * 8),
        u = 225 * (.86 + .2 * l) * (.95 + .08 * h) * (c > .9 ? 1.04 : .97),
        d = Math.max(0, l - .72) * 3;
      return [u * (1 - d * .25) + d * 40, u * (1 - d * .35) + d * 14, u * (1 - d * .5), c]
    }, 2)
  })
}

function id() {
  return je("slab", () => {
    let i = ln,
      t = Le(16, 21),
      e = Le(128, 23),
      n = Le(8, 25);
    return Gn(i, i, (s, r) => {
      let o = s / i,
        a = r / i,
        c = _n(t, o * 16, a * 16, 4),
        l = e(o * 128, a * 128),
        h = _n(n, o * 8, a * 8, 2),
        u = 200 * (.8 + .3 * (c - .5)) * (.93 + .12 * l);
      return h > .66 && (u *= .62), c < .32 && (u *= .8), [u, u * .98, u * .95, l * .3]
    }, 1)
  })
}

function sd() {
  return je("fac", () => {
    let i = Bs ? 512 : 1024,
      t = Bs ? 128 : 256,
      e = i / 1024,
      [n, s] = Ri(i, t),
      [r, o] = Ri(i, t);
    s.scale(e, e), o.scale(e, e);
    let a = Ln(77);
    s.fillStyle = "#f4f2ee", s.fillRect(0, 0, 1024, 256), o.fillStyle = "#fff", o.fillRect(0, 0, 1024, 256);
    for (let y = 0; y < 9e3; y++) {
      let _ = 225 + a() * 30;
      s.fillStyle = `rgba(${_},${_},${_-3},0.35)`, s.fillRect(a() * 1024, a() * 256, 1 + a() * 3, 1 + a() * 3)
    }
    let c = s.createLinearGradient(0, 200, 0, 256);
    c.addColorStop(0, "rgba(120,105,85,0)"), c.addColorStop(1, "rgba(110,95,75,0.35)"), s.fillStyle = c, s.fillRect(0, 200, 1024, 56), s.fillStyle = "rgba(150,145,138,0.55)", s.fillRect(0, 232, 1024, 24);
    let l = y => {
        y(s, !1), y(o, !0)
      },
      h = (y, _, P, M, b, w, S) => {
        y.fillStyle = S ? "#000" : _, y.fillRect(P, M, b, w)
      },
      u = (y, _, P, M) => l((b, w) => {
        if (h(b, "#e9e7e2", y - 7, _ - 7, P + 14, M + 14, w), h(b, "#2a3036", y, _, P, M, w), !w) {
          let S = b.createLinearGradient(y, _, y + P, _ + M);
          S.addColorStop(0, "rgba(170,195,215,0.55)"), S.addColorStop(.5, "rgba(60,75,90,0.2)"), S.addColorStop(1, "rgba(150,175,195,0.45)"), b.fillStyle = S, b.fillRect(y + 3, _ + 3, P - 6, M - 6), b.fillStyle = "#c9ccce", b.fillRect(y + P / 2 - 2, _, 4, M), b.fillRect(y, _ + M * .42, P, 3), b.strokeStyle = "rgba(25,25,25,0.85)", b.lineWidth = 2.2;
          for (let E = y + 8; E < y + P; E += 11) b.beginPath(), b.moveTo(E, _), b.lineTo(E, _ + M), b.stroke();
          b.beginPath(), b.moveTo(y, _ + M / 2), b.lineTo(y + P, _ + M / 2), b.stroke(), b.fillStyle = "#d8d6d0", b.fillRect(y - 12, _ + M + 6, P + 24, 7), b.fillStyle = "rgba(80,70,60,0.18)", b.fillRect(y - 6, _ + M + 13, P + 12, 26)
        }
      }),
      d = (y, _, P, M, b) => l((w, S) => {
        if (h(w, "#ecebe6", y - 7, _ - 7, P + 14, M + 14, S), !S) {
          w.fillStyle = b, w.fillRect(y, _, P, M), w.fillStyle = "rgba(0,0,0,0.25)";
          for (let E = _ + 4; E < _ + M; E += 6) w.fillRect(y + 2, E, P - 4, 2);
          w.fillStyle = "rgba(0,0,0,0.4)", w.fillRect(y + P / 2 - 1.5, _, 3, M), w.fillStyle = "#d8d6d0", w.fillRect(y - 12, _ + M + 6, P + 24, 7)
        }
      }),
      f = (y, _, P, M) => l((b, w) => {
        if (h(b, "#e9e7e2", y - 5, _ - 5, P + 10, M + 10, w), h(b, "#3a4148", y, _, P, M, w), !w) {
          b.fillStyle = "rgba(200,210,215,0.7)";
          for (let S = _ + 3; S < _ + M - 2; S += 8) b.fillRect(y + 3, S, P - 6, 5)
        }
      }),
      m = (y, _, P, M) => l((b, w) => {
        if (h(b, "#e4e2dc", y - 8, 54, _ + 16, 202, w), !w) {
          if (b.fillStyle = P, b.fillRect(y, 62, _, 194), M === 0) b.fillStyle = "rgba(0,0,0,0.22)", b.fillRect(y + 8, 74, _ - 16, 194 * .38), b.fillRect(y + 8, 62 + 194 * .5, _ - 16, 194 * .42);
          else {
            b.fillStyle = "rgba(255,255,255,0.18)";
            for (let A = 68; A < 256; A += 10) b.fillRect(y + 3, A, _ - 6, 4)
          }
          b.fillStyle = "#caa64a", b.fillRect(y + _ - 14, 62 + 194 * .52, 5, 10)
        }
      });
    u(64, 70, 128, 104), m(300, 84, ["#6b4a2e", "#7c5a3a", "#4a5560", "#8a8d90"][Math.floor(a() * 4)], 0), f(430, 70, 52, 40), d(576, 70, 120, 104, "#7a5a3c"), u(832, 78, 112, 96);
    for (let y = 0; y < 40; y++) {
      let _ = a() * 1024;
      s.fillStyle = `rgba(90,80,70,${.04+a()*.06})`, s.fillRect(_, 190 + a() * 20, 2 + a() * 4, 30 + a() * 40)
    }
    let x = s.getImageData(0, 0, i, t).data,
      g = o.getImageData(0, 0, i, t).data,
      p = new Uint8Array(i * t * 4);
    for (let y = 0; y < i * t; y++) p[y * 4] = x[y * 4], p[y * 4 + 1] = x[y * 4 + 1], p[y * 4 + 2] = x[y * 4 + 2], p[y * 4 + 3] = g[y * 4];
    let v = new Uint8Array(i * t * 4);
    for (let y = 0; y < t; y++) v.set(p.subarray((t - 1 - y) * i * 4, (t - y) * i * 4), y * i * 4);
    return Rr(v, i, t, !0)
  })
}

function sa() {
  return je("wall", () => {
    let i = ln,
      t = ln >> 2,
      e = Le(64, 31),
      n = Le(16, 33),
      s = new Uint8Array(i * t * 4),
      r = new Float32Array(i * t);
    for (let o = 0; o < t; o++)
      for (let a = 0; a < i; a++) {
        let c = a / i,
          l = o / t,
          h = e(c * 64 * 3, l * 64 * .5 * 2),
          u = _n(n, c * 16, l * 4, 3),
          d = 235 * (.9 + .12 * h) * (.88 + .2 * u),
          f = 1;
        l < .12 && (d *= .82 + l), l > .93 && (d *= .92);
        let m = (o * i + a) * 4;
        s[m] = d, s[m + 1] = d, s[m + 2] = d * .98, s[m + 3] = 255 * f, r[o * i + a] = h * .6
      }
    return {
      map: Rr(s, i, t, !0),
      normalMap: ia(r, i, t, 1.5)
    }
  })
}

function rd() {
  return je("brick", () => {
    let i = ln,
      t = Ln(41),
      e = Le(64, 43),
      n = i / 6,
      s = i / 16,
      r = [];
    for (let o = 0; o < 200; o++) r.push(t());
    return Gn(i, i, (o, a) => {
      let c = Math.floor(a / s),
        l = c % 2 * n / 2,
        h = Math.floor((o + l) / n),
        u = (o + l) % n / n,
        d = a % s / s,
        f = u < .05 || d < .12,
        m = r[(c * 7 + h * 13) % 200],
        x = e(o / i * 64, a / i * 64);
      if (f) return [175 + x * 20, 165 + x * 20, 150 + x * 20, 0, 0];
      let g = .75 + .3 * m;
      return [196 * g * (.9 + .15 * x), 104 * g * (.9 + .15 * x), 66 * g * (.9 + .15 * x), 1, 0]
    }, 2, !0)
  })
}

function zs() {
  return je("asph", () => {
    let i = ln,
      t = Le(256, 51),
      e = Le(16, 53),
      n = Le(8, 55);
    return Gn(i, i, (s, r) => {
      let o = s / i,
        a = r / i,
        c = t(o * 256, a * 256),
        l = _n(e, o * 16, a * 16, 4),
        h = _n(n, o * 8, a * 8, 2),
        u = 72 * (.84 + .32 * c) * (.92 + .16 * l);
      h > .7 && (u *= .92), h < .22 && (u *= 1.05);
      let d = Math.abs(o * 8 / 3.5 % 1 - .5);
      return u *= 1 - .06 * Math.exp(-Math.pow((d - .22) / .06, 2)), c > .93 && (u *= 1.6), [u, u, u * 1.02, c * .5]
    }, 1.6)
  })
}

function od() {
  return je("pav", () => {
    let i = ln,
      t = Ln(61),
      e = Le(128, 63),
      n = Le(16, 65),
      s = 12,
      r = 20,
      o = [];
    for (let a = 0; a < s * r * 2; a++) o.push([t(), t(), t()]);
    return Gn(i, i, (a, c) => {
      let l = a / i * s,
        h = c / i * r,
        u = Math.floor(h),
        d = l + u % 2 * .5 + o[u * s % o.length][2] * .3,
        f = Math.floor(d),
        m = d - f,
        x = h - u,
        g = Math.min(m, 1 - m) / .5,
        p = Math.min(x, 1 - x) / .5,
        v = Math.min(g * 2.2, p * 1.4, 1),
        y = Math.sqrt(Math.max(0, v)),
        _ = o[(u * s + f % s) % o.length],
        P = e(a / i * 128, c / i * 128),
        M = _n(n, a / i * 16, c / i * 16, 3);
      if (v < .18) {
        let S = .55 + .3 * M;
        return [92 * S + 20, 84 * S + 18, 70 * S + 12, 0]
      }
      let b = (.68 + .36 * _[0]) * (.85 + .25 * P) * (.85 + .25 * M),
        w = _[1];
      return [150 * b + (w > .8 ? 18 : 0), 142 * b + (w > .8 ? 8 : 0), 132 * b, y * .9 + P * .1]
    }, 3.2)
  })
}

function ra() {
  return je("dirt", () => {
    let i = ln,
      t = Le(128, 71),
      e = Le(16, 73),
      n = Ln(75),
      s = [];
    for (let o = 0; o < 500; o++) s.push([n() * i, n() * i, 1 + n() * 2.5, n()]);
    return Gn(i, i, (o, a) => {
      let c = o / i,
        l = a / i,
        h = t(c * 128, l * 128),
        u = _n(e, c * 16, l * 16, 4),
        d = Math.abs(c * 6 / 3 % 1 - .5),
        f = Math.exp(-Math.pow((d - .25) / .07, 2)),
        m = (.8 + .3 * u) * (.9 + .2 * h);
      return m *= 1 - .1 * f, [184 * m, 154 * m, 120 * m, h * .5 + u * .8 - f * .4]
    }, 2.5)
  })
}

function ks() {
  return je("side", () => {
    let i = ln,
      t = Le(128, 81),
      e = Le(8, 83),
      n = Ln(85),
      s = [];
    for (let r = 0; r < 64; r++) s.push(n());
    return Gn(i, i, (r, o) => {
      let a = r / i * 2,
        c = o / i * 2,
        l = a % 1,
        h = c % 1,
        u = l < .012 || h < .012 || l > .988 || h > .988,
        d = (Math.floor(a) + Math.floor(c) * 2) % 64,
        f = t(r / i * 128, o / i * 128),
        m = _n(e, r / i * 8, o / i * 8, 3),
        x = 192 * (.93 + .07 * s[d]) * (.92 + .1 * f) * (.88 + .2 * m);
      return u && (x *= .78), [x, x * .975, x * .94, u ? 0 : .4 + f * .2]
    }, 1.6)
  })
}

function oa() {
  return je("gd", () => {
    let i = ln,
      t = Ln(91),
      [e, n] = Ri(i, i);
    n.fillStyle = "rgb(118,118,118)", n.fillRect(0, 0, i, i);
    let s = i / 512;
    for (let u = 0; u < 26e3 * s * s; u++) {
      let d = 60 + t() * 140;
      n.strokeStyle = `rgba(${d},${d},${d},0.55)`, n.lineWidth = .8 + t() * 1.2;
      let f = t() * i,
        m = t() * i,
        x = t() * Math.PI * 2,
        g = (2 + t() * 5) * s;
      n.beginPath(), n.moveTo(f, m), n.lineTo(f + Math.cos(x) * g, m + Math.sin(x) * g), n.stroke()
    }
    let r = n.getImageData(0, 0, i, i).data,
      [o, a] = Ri(i, i);
    a.fillStyle = "rgb(128,128,128)", a.fillRect(0, 0, i, i);
    for (let u = 0; u < 9e3 * s * s; u++) {
      let d = 70 + t() * 130;
      a.fillStyle = `rgba(${d},${d},${d},${.4+t()*.5})`, a.beginPath(), a.ellipse(t() * i, t() * i, (.6 + t() * 2.2) * s, (.5 + t() * 1.8) * s, t() * 3, 0, 7), a.fill()
    }
    let c = a.getImageData(0, 0, i, i).data,
      l = new Uint8Array(i * i * 4),
      h = new Float32Array(i * i);
    for (let u = 0; u < i * i; u++) l[u * 4] = r[u * 4], l[u * 4 + 1] = c[u * 4], l[u * 4 + 2] = 128, l[u * 4 + 3] = 255, h[u] = (r[u * 4] * .5 + c[u * 4] * .5) / 255;
    return {
      map: Rr(l, i, i, !1),
      normalMap: ia(h, i, i, 2.5)
    }
  })
}

function $l(i = 0) {
  return je("leaf" + i, () => {
    let t = Bs ? 128 : 256,
      [e, n] = Ri(t, t),
      s = Ln(101 + i);
    n.clearRect(0, 0, t, t);
    let r = i === 1 ? 520 : 700,
      o = t / 256;
    n.fillStyle = i === 1 ? "rgb(130,150,70)" : "rgb(170,195,140)", n.beginPath(), n.arc(t / 2, t / 2, 9 * o, 0, 7), n.fill();
    for (let c = 0; c < r; c++) {
      let l = s() * Math.PI * 2,
        h = Math.pow(s(), .6) * t * .46,
        u = t / 2 + Math.cos(l) * h,
        d = t / 2 + Math.sin(l) * h,
        f = s(),
        m = i === 1 ? [120 + f * 60, 140 + f * 60, 60 + f * 30] : [150 + f * 80, 175 + f * 70, 120 + f * 60];
      n.fillStyle = `rgb(${m[0]|0},${m[1]|0},${m[2]|0})`, n.save(), n.translate(u, d), n.rotate(s() * Math.PI * 2), n.beginPath(), n.ellipse(0, 0, (i === 1 ? 7 : 6) * o * (.7 + s() * .6), (i === 1 ? 3.2 : 3) * o * (.7 + s() * .5), 0, 0, 7), n.fill(), n.restore()
    }
    let a = na(e, !0);
    return a.wrapS = a.wrapT = Zn, a
  })
}

function Jl() {
  return je("frond", () => {
    let i = Bs ? 64 : 128,
      t = Bs ? 256 : 512,
      [e, n] = Ri(i, t);
    n.clearRect(0, 0, i, t);
    let s = Ln(111);
    n.strokeStyle = "#7a8a4a", n.lineWidth = 3 * i / 128, n.beginPath(), n.moveTo(i / 2, 0), n.lineTo(i / 2, t), n.stroke();
    for (let o = 6; o < t; o += 5 * t / 512) {
      let a = i * .48 * Math.sin(Math.min(1, o / t * 1.15) * Math.PI * .95 + .15);
      for (let c of [-1, 1]) {
        let l = s();
        n.strokeStyle = `rgb(${70+l*40|0},${110+l*45|0},${40+l*25|0})`, n.lineWidth = (2.4 + s()) * i / 128, n.beginPath(), n.moveTo(i / 2, o), n.quadraticCurveTo(i / 2 + c * a * .5, o + 6 * t / 512, i / 2 + c * a, o + 16 * t / 512 + s() * 6), n.stroke()
      }
    }
    let r = na(e, !0);
    return r.wrapS = r.wrapT = Zn, r
  })
}

function aa() {
  return je("ta", () => {
    let i = ln,
      t = Le(64, 121),
      e = Ln(123),
      n = [];
    for (let s = 0; s < 32; s++) n.push(e());
    return Gn(i, i, (s, r) => {
      let o = s / i * 2,
        a = r / i * 2,
        c = Math.floor(a),
        l = o + c % 2 * .5,
        h = Math.floor(l),
        u = l - h,
        d = a - c,
        f = u < .015 || d < .015,
        m = n[(c * 5 + h * 3) % 32],
        x = t(s / i * 64, r / i * 64),
        g = f ? .72 : (.9 + .07 * m) * (.95 + .06 * x);
      return [205 * g, 192 * g, 170 * g, f ? 0 : .6 + .1 * x]
    }, 2)
  })
}

function Ci() {
  return je("conc", () => {
    let i = ln,
      t = Le(128, 131),
      e = Le(8, 133);
    return Gn(i, i, (n, s) => {
      let r = n / i,
        o = s / i,
        a = t(r * 128, o * 128),
        c = _n(e, r * 8, o * 8, 3),
        l = r < .004 || o < .006,
        h = 200 * (.94 + .06 * a) * (.93 + .1 * c);
      return l && (h *= .88), [h, h * .985, h * .96, a * .3 + (l ? -.4 : 0)]
    }, 1)
  })
}

function ad() {
  return je("bal", () => {
    let i = ln,
      t = Ln(141),
      [e, n] = Ri(i, i);
    n.fillStyle = "#5b5650", n.fillRect(0, 0, i, i);
    let s = i / 512;
    for (let a = 0; a < 14e3 * s * s; a++) {
      let c = 70 + t() * 110;
      n.fillStyle = `rgb(${c+8|0},${c|0},${c-8|0})`, n.beginPath(), n.ellipse(t() * i, t() * i, (1.5 + t() * 3) * s, (1.2 + t() * 2.5) * s, t() * 3, 0, 7), n.fill()
    }
    let r = n.getImageData(0, 0, i, i).data,
      o = new Float32Array(i * i);
    for (let a = 0; a < i * i; a++) o[a] = r[a * 4] / 255;
    return {
      map: na(e, !0),
      normalMap: ia(o, i, i, 3)
    }
  })
}

function cd() {
  return je("gate", () => {
    let [e, n] = Ri(256, 256);
    n.clearRect(0, 0, 256, 256), n.fillStyle = "#fff", n.fillRect(0, 128, 256, 10), n.fillRect(0, 246, 256, 10), n.fillRect(0, 186, 256, 5);
    for (let r = 0; r < 256; r += 12) n.fillRect(r, 128, 4, 128);
    n.fillRect(0, 128, 6, 128), n.fillRect(256 / 2 - 3, 128, 6, 128), n.fillStyle = "#f0f0f0", n.fillRect(0, 0, 256, 128), n.fillStyle = "rgba(0,0,0,0.18)";
    for (let r = 4; r < 128; r += 8) n.fillRect(0, r, 256, 2);
    n.clearRect(0, 6, 256, 18), n.fillStyle = "#fff";
    for (let r = 0; r < 256; r += 10) n.fillRect(r, 6, 3, 18);
    n.fillStyle = "rgba(0,0,0,0.3)", n.fillRect(256 / 2 - 1, 0, 2, 128);
    let s = na(e, !0);
    return s.flipY = !0, s
  })
}
var Bs, ln, ju, Kn = Fe(() => {
  Ne();
  Bs = (() => {
    try {
      let i = new URLSearchParams(location.search).get("q") || localStorage.getItem("aimores3d_q");
      return i === "low" || i === "medium" || !i && (/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) || Math.min(innerWidth, innerHeight) < 700)
    } catch {
      return !1
    }
  })(), ln = Bs ? 256 : 512;
  ju = {}
});

function la(i) {
  let t = atob(i),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e.buffer
}

function ld(i, t, e) {
  let n = i.GW,
    s = i.GH,
    r = new Float32Array(n * s * 3),
    o = new Float32Array(n * s * 2);
  for (let M = 0; M < s; M++)
    for (let b = 0; b < n; b++) {
      let w = M * n + b,
        S = i.XMIN + b * i.G,
        E = i.ZMIN + M * i.G;
      r[w * 3] = S, r[w * 3 + 1] = i.raw(M, b), r[w * 3 + 2] = E, o[w * 2] = (S - i.XMIN) / (i.XMAX - i.XMIN), o[w * 2 + 1] = 1 - (E - i.ZMIN) / (i.ZMAX - i.ZMIN)
    }
  let a = new Uint32Array((n - 1) * (s - 1) * 6),
    c = 0;
  for (let M = 0; M < s - 1; M++)
    for (let b = 0; b < n - 1; b++) {
      let w = M * n + b,
        S = w + 1,
        E = w + n,
        A = E + 1;
      a[c++] = w, a[c++] = E, a[c++] = S, a[c++] = S, a[c++] = E, a[c++] = A
    }
  let l = new pe;
  l.setAttribute("position", new ae(r, 3)), l.setAttribute("uv", new ae(o, 2)), l.setIndex(new ae(a, 1)), l.computeVertexNormals();
  let h = new Float32Array(n * s * 2);
  for (let M = 0; M < n * s; M++) h[M * 2] = r[M * 3] / 3.5, h[M * 2 + 1] = r[M * 3 + 2] / 3.5;
  l.setAttribute("uv1", new ae(h, 2));
  let u = oa();
  u.normalMap.channel = 1;
  let d = new Tt({
    map: t,
    roughness: .97,
    metalness: 0,
    normalMap: e === "low" ? null : u.normalMap,
    normalScale: new _t(.9, .9)
  });
  e !== "low" && (d.onBeforeCompile = M => {
    M.uniforms.gDetail = {
      value: u.map
    }, M.vertexShader = M.vertexShader.replace("#include <common>", `#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>", `#include <worldpos_vertex>
vWPos=(modelMatrix*vec4(transformed,1.0)).xyz;`), M.fragmentShader = M.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vWPos;uniform sampler2D gDetail;`).replace("#include <map_fragment>", `#include <map_fragment>
    vec3 base=diffuseColor.rgb;
    float veg=smoothstep(0.004,0.035,base.g-max(base.r,base.b)*0.93);
    vec4 d1=texture2D(gDetail,vWPos.xz/3.5); vec4 d2=texture2D(gDetail,vWPos.xz/13.0+0.37); vec4 d3=texture2D(gDetail,vWPos.xz/71.0+0.11);
    float gr=(d1.r*0.65+d2.r*0.35)*2.0; float dr=(d1.g*0.65+d2.g*0.35)*2.0;
    float det=mix(dr,gr,veg);
    float dist=length(vWPos-cameraPosition);
    float fade=1.0-smoothstep(120.0,1100.0,dist);
    diffuseColor.rgb=base*mix(1.0,det,0.25+0.6*fade);
    // near field: extra fine grass blades / soil grain so the 0.6 m imagery does not read as a blur
    float near=1.0-smoothstep(12.0,110.0,dist);
    vec4 d0=texture2D(gDetail,vWPos.xz/1.15+0.71);vec4 d0b=texture2D(gDetail,vWPos.xz/0.47+0.23);
    float fine=mix((d0.g*0.6+d0b.g*0.4)*2.0,(d0.r*0.6+d0b.r*0.4)*2.0,veg);
    diffuseColor.rgb*=mix(1.0,fine,0.55*near);
    vec3 grassTint=vec3(0.36,0.45,0.20)*(0.8+0.4*d2.r);float lb=dot(base,vec3(0.3,0.59,0.11));
    diffuseColor.rgb=mix(diffuseColor.rgb,grassTint*(lb/0.40)*fine,veg*near*0.35);
    float mac=(d3.r*0.5+d3.g*0.5)*2.0; diffuseColor.rgb*=mix(1.0,mac,0.22);
    // grass: patchy yellow/green hue shifts; dirt: reddish laterite variation
    float hp=d2.g*2.0-1.0;
    diffuseColor.rgb*=mix(vec3(1.0+0.10*hp,1.0+0.04*hp,1.0-0.12*hp), vec3(1.0+0.06*hp,1.0-0.02*hp,1.0-0.06*hp), 1.0-veg);`)
  });
  let f = new Pt(l, d);
  f.receiveShadow = !0, f.name = "terrain";
  let m = [],
    x = M => {
      for (let b = 0; b < M.length - 1; b++) {
        let [w, S] = M[b], [E, A] = M[b + 1], N = i.at(w, S), D = i.at(E, A);
        m.push(w, N, S, E, D, A, w, N - 60, S, E, D, A, E, D - 60, A, w, N - 60, S)
      }
    },
    g = [];
  for (let M = 0; M < n; M++) g.push([i.XMIN + M * i.G, i.ZMIN]);
  x(g);
  let p = [];
  for (let M = n - 1; M >= 0; M--) p.push([i.XMIN + M * i.G, i.ZMIN + (s - 1) * i.G]);
  x(p);
  let v = [];
  for (let M = s - 1; M >= 0; M--) v.push([i.XMIN, i.ZMIN + M * i.G]);
  x(v);
  let y = [];
  for (let M = 0; M < s; M++) y.push([i.XMIN + (n - 1) * i.G, i.ZMIN + M * i.G]);
  x(y);
  let _ = new pe;
  _.setAttribute("position", new Jt(m, 3)), _.computeVertexNormals();
  let P = new Pt(_, new Tt({
    color: 5662010,
    roughness: 1,
    side: Xt
  }));
  return f.add(P), f
}

function hd(i, t, e, n, s = !1) {
  let r = new Uint16Array(t),
    o = i.BG,
    a = i.BR,
    c = 2 * a / (o - 1),
    l = (A, N) => (A = Math.max(0, Math.min(o - 1, A)), N = Math.max(0, Math.min(o - 1, N)), i.HB + r[A * o + N] / 10),
    h = (A, N) => {
      let D = (A + a) / c,
        O = (N + a) / c,
        H = Math.floor(D),
        U = Math.floor(O),
        z = D - H,
        C = O - U;
      return (l(U, H) * (1 - z) + l(U, H + 1) * z) * (1 - C) + (l(U + 1, H) * (1 - z) + l(U + 1, H + 1) * z) * C
    },
    u = (A, N, D) => {
      let O = Math.max(e.XMIN, Math.min(e.XMAX, A)),
        H = Math.max(e.ZMIN, Math.min(e.ZMAX, N)),
        U = Math.hypot(A - O, N - H);
      if (U < .5) return e.at(O, H) - 6;
      let z = Math.min(1, U / 700),
        C = z * z * (3 - 2 * z);
      return (e.at(O, H) - .6) * (1 - C) + D * C
    },
    d = new he;
  d.name = "backdrop";
  let f = 3600,
    m = s ? 91 : 181,
    x = [],
    g = [];
  for (let A = 0; A < m; A++)
    for (let N = 0; N < m; N++) {
      let D = -f + N * 2 * f / (m - 1),
        O = -f + A * 2 * f / (m - 1);
      x.push(D, u(D, O, h(D, O)), O), g.push((D + f) / (2 * f), 1 - (O + f) / (2 * f))
    }
  let p = [];
  for (let A = 0; A < m - 1; A++)
    for (let N = 0; N < m - 1; N++) {
      let D = A * m + N;
      p.push(D, D + m, D + 1, D + 1, D + m, D + m + 1)
    }
  let v = new pe;
  v.setAttribute("position", new Jt(x, 3)), v.setAttribute("uv", new Jt(g, 2)), v.setIndex(p), v.computeVertexNormals();
  let y = new Pt(v, new Tt({
    map: n,
    roughness: 1
  }));
  y.receiveShadow = !0, d.add(y);
  let _ = [],
    P = [],
    M = new Qt;
  for (let A = 0; A < o; A++)
    for (let N = 0; N < o; N++) {
      let D = -a + N * c,
        O = -a + A * c,
        H = l(A, N);
      Math.abs(D) < f - 50 && Math.abs(O) < f - 50 && (H -= 60), _.push(D, H, O)
    }
  let b = [],
    w = s ? 2 : 1;
  for (let A = 0; A < o - w; A += w)
    for (let N = 0; N < o - w; N += w) {
      let D = A * o + N,
        O = w * o;
      b.push(D, D + O, D + w, D + w, D + O, D + O + w)
    }
  let S = new pe;
  S.setAttribute("position", new Jt(_, 3)), S.setIndex(b), S.computeVertexNormals();
  let E = S.attributes.normal;
  for (let A = 0; A < _.length / 3; A++) {
    let D = 1 - E.getY(A),
      O = Math.min(1, Math.max(0, (D - .3) * 3)),
      H = Math.random() * .04;
    M.setRGB(.2 + H, .27 + H, .13), M.lerp(new Qt(.36, .33, .28), O * .8), P.push(M.r, M.g, M.b)
  }
  return S.setAttribute("color", new Jt(P, 3)), d.add(new Pt(S, new Tt({
    vertexColors: !0,
    roughness: 1
  }))), d
}
var ca, ud = Fe(() => {
  Ne();
  Kn();
  ca = class {
    constructor(t, e) {
      Object.assign(this, t), this.a = new Uint16Array(e)
    }
    raw(t, e) {
      return t = Math.max(0, Math.min(this.GH - 1, t)), e = Math.max(0, Math.min(this.GW - 1, e)), this.HB + this.a[t * this.GW + e] / 100
    }
    at(t, e) {
      let n = (t - this.XMIN) / this.G,
        s = (e - this.ZMIN) / this.G,
        r = Math.floor(n),
        o = Math.floor(s),
        a = n - r,
        c = s - o,
        l = this.raw(o, r),
        h = this.raw(o, r + 1),
        u = this.raw(o + 1, r),
        d = this.raw(o + 1, r + 1);
      return a + c <= 1 ? l + (h - l) * a + (u - l) * c : d + (u - d) * (1 - a) + (h - d) * (1 - c)
    }
  }
});

function bt(i, t, e) {
  let n = new Qt;
  return n.setRGB(i / 255, t / 255, e / 255, Ce), [n.r, n.g, n.b]
}

function qt(i) {
  let t = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return t - Math.floor(t)
}

function ha(i) {
  let t = null;
  for (let e = 0; e < i.length; e++) {
    let n = i[e],
      s = i[(e + 1) % i.length],
      r = s[0] - n[0],
      o = s[1] - n[1],
      a = Math.hypot(r, o);
    if (a < .01) continue;
    r /= a, o /= a;
    let c = -o,
      l = r,
      h = 1e9,
      u = -1e9,
      d = 1e9,
      f = -1e9;
    for (let x of i) {
      let g = x[0] * r + x[1] * o,
        p = x[0] * c + x[1] * l;
      h = Math.min(h, g), u = Math.max(u, g), d = Math.min(d, p), f = Math.max(f, p)
    }
    let m = (u - h) * (f - d);
    if (!t || m < t.area) {
      let x = (h + u) / 2,
        g = (d + f) / 2;
      t = {
        area: m,
        cx: x * r + g * c,
        cz: x * o + g * l,
        ux: r,
        uz: o,
        a: (u - h) / 2,
        b: (f - d) / 2
      }
    }
  }
  if (t.a < t.b) {
    let e = t.a;
    t.a = t.b, t.b = e;
    let n = t.ux;
    t.ux = -t.uz, t.uz = n
  }
  return t
}

function Kl(i) {
  let t = 0;
  for (let e = 0; e < i.length; e++) {
    let n = i[(e + 1) % i.length];
    t += i[e][0] * n[1] - n[0] * i[e][1]
  }
  return t / 2
}
var Kt, Wn = Fe(() => {
  Ne();
  Kt = class {
    constructor() {
      this.p = [], this.n = [], this.u = [], this.c = []
    }
    tri(t, e, n, s, r, o, a, c, l) {
      let h, u, d;
      if (c)[h, u, d] = c;
      else {
        let f = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
          m = [n[0] - t[0], n[1] - t[1], n[2] - t[2]];
        h = f[1] * m[2] - f[2] * m[1], u = f[2] * m[0] - f[0] * m[2], d = f[0] * m[1] - f[1] * m[0];
        let x = Math.hypot(h, u, d) || 1;
        h /= x, u /= x, d /= x
      }
      if (this.p.push(...t, ...e, ...n), this.n.push(h, u, d, h, u, d, h, u, d), this.u.push(...s, ...r, ...o), l) this.c.push(...l[0], ...l[1], ...l[2]);
      else {
        let f = a || [1, 1, 1];
        this.c.push(...f, ...f, ...f)
      }
    }
    quad(t, e, n, s, r, o, a, c, l, h, u) {
      this.tri(t, e, n, r, o, a, l, h, u ? [u[0], u[1], u[2]] : null), this.tri(t, n, s, r, a, c, l, h, u ? [u[0], u[2], u[3]] : null)
    }
    geometry() {
      let t = new pe;
      return t.setAttribute("position", new Jt(this.p, 3)), t.setAttribute("normal", new Jt(this.n, 3)), t.setAttribute("uv", new Jt(this.u, 2)), t.setAttribute("color", new Jt(this.c, 3)), t.computeBoundingSphere(), t
    }
    get count() {
      return this.p.length / 9
    }
  }
});

function ua(i) {
  let t = i >>> 0 || 1;
  return () => (t ^= t << 13, t >>>= 0, t ^= t >> 17, t ^= t << 5, t >>>= 0, t / 4294967296)
}

function Cr(i, t) {
  let e = document.createElement("canvas");
  return e.width = i, e.height = t, [e, e.getContext("2d")]
}

function n1(i, t, e, n, s, r, o = 1) {
  let a = i.getImageData(0, 0, t, e),
    c = a.data;
  for (let l = 0; l < e; l += o)
    for (let h = 0; h < t; h += o) {
      let u = (r() - .5) * s;
      for (let d = 0; d < o; d++)
        for (let f = 0; f < o; f++) {
          let m = ((l + d) * t + (h + f)) * 4;
          c[m] = n[0] + u, c[m + 1] = n[1] + u, c[m + 2] = n[2] + u, c[m + 3] = 255
        }
    }
  i.putImageData(a, 0, 0)
}

function Pr(i, t = !0, e = !0) {
  let n = new pn(i);
  return t && (n.wrapS = n.wrapT = bn), n.anisotropy = 8, e && (n.colorSpace = Ce), n.generateMipmaps = !0, n.minFilter = kn, n
}

function dd() {
  let [i, t] = Cr(256, 256), e = ua(9);
  n1(t, 256, 256, [196, 192, 184], 16, e), t.strokeStyle = "rgba(110,105,98,0.55)", t.lineWidth = 2;
  for (let n = 0; n <= 256; n += 64) t.beginPath(), t.moveTo(n, 0), t.lineTo(n, 256), t.stroke(), t.beginPath(), t.moveTo(0, n), t.lineTo(256, n), t.stroke();
  for (let n = 0; n < 60; n++) t.fillStyle = `rgba(90,85,80,${e()*.08})`, t.fillRect(e() * 256, e() * 256, 10 + e() * 30, 10 + e() * 30);
  return Pr(i)
}

function fd() {
  let [t, e] = Cr(512, 512), n = ua(21);
  e.fillStyle = "#8f8a86", e.fillRect(0, 0, 512, 512);
  let s = 16;
  e.save(), e.translate(512 / 2, 512 / 2), e.rotate(Math.PI / 4), e.translate(-512, -512);
  for (let r = -2; r < 2 * 512 / s + 2; r++)
    for (let o = -2; o < 2 * 512 / s + 2; o++) {
      let a = n() * 22 - 11,
        c = n() < .5 ? 6 : 0;
      e.fillStyle = `rgb(${176+a+c|0},${168+a|0},${162+a-c/2|0})`;
      let l = r * s,
        h = o * s;
      (r + o) % 2 === 0 ? e.fillRect(l + 1, h + 1, 2 * s - 2, s - 2) : e.fillRect(l + 1, h + 1, s - 2, 2 * s - 2)
    }
  return e.restore(), Pr(t)
}

function jl() {
  let [i, t] = Cr(128, 128), e = ua(41);
  t.fillStyle = "#fff", t.fillRect(0, 0, 128, 128);
  for (let n = 0; n < 800; n++) {
    let s = 220 + e() * 35;
    t.fillStyle = `rgba(${s},${s},${s},0.6)`, t.fillRect(e() * 128, e() * 128, 2, 2)
  }
  return t.fillStyle = "rgba(140,140,140,0.3)", t.fillRect(0, 116, 128, 12), Pr(i)
}

function pd() {
  let [i, t] = Cr(256, 256), e = ua(51);
  t.fillStyle = "#fff", t.fillRect(0, 0, 256, 256);
  let n = 8,
    s = 10;
  for (let r = 0; r < n; r++) {
    for (let o = 0; o < s; o++) {
      let a = .82 + e() * .18,
        c = Math.floor(255 * a),
        l = o * 256 / s,
        h = r * 256 / n,
        u = t.createLinearGradient(l, 0, l + 256 / s, 0);
      u.addColorStop(0, `rgb(${c*.78|0},${c*.78|0},${c*.78|0})`), u.addColorStop(.5, `rgb(${c},${c},${c})`), u.addColorStop(1, `rgb(${c*.72|0},${c*.72|0},${c*.72|0})`), t.fillStyle = u, t.fillRect(l, h, 256 / s, 256 / n)
    }
    t.fillStyle = "rgba(0,0,0,0.28)", t.fillRect(0, (r + 1) * 256 / n - 4, 256, 4)
  }
  for (let r = 0; r < 40; r++) t.fillStyle = `rgba(40,30,20,${e()*.12})`, t.fillRect(e() * 256, e() * 256, 20 + e() * 40, 10 + e() * 20);
  return Pr(i)
}

function md() {
  let [i, t] = Cr(128, 128);
  for (let e = 0; e < 128; e++) {
    let n = 200 + 40 * Math.sin(e / 128 * Math.PI * 2 * 8);
    t.fillStyle = `rgb(${n},${n},${n})`, t.fillRect(e, 0, 1, 128)
  }
  return Pr(i)
}
var da = Fe(() => {
  Ne()
});

function i1(i) {
  let t = Ql.reduce((e, n) => e + n, 0) * i;
  for (let e = 0; e < Ql.length; e++)
    if (t -= Ql[e], t <= 0) return gd[e];
  return gd[0]
}

function fa(i) {
  let t = new Tt(i);
  return t.onBeforeCompile = e => {
    e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", `#if defined( USE_COLOR ) && defined( USE_MAP )
  diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor.rgb;
#endif
diffuseColor.a = 1.0;`)
  }, t.customProgramCacheKey = () => "paintmask", t
}

function s1(i) {
  let [t, e, n] = i.rc, s = .3 * t + .59 * e + .11 * n;
  if (i.rm === "ceramic") {
    let o = $i(165 / Math.max(60, s), .75, 1.35),
      a = [t * o, e * o * .97, n * o * .92],
      c = (a[0] + a[1] + a[2]) / 3;
    return a = a.map(h => c + (h - c) * .9), qt(i.p[0][0] * 3.3 + i.p[0][1]) < .25 && (a = a.map(h => h * .82)), bt($i(a[0] * 1.18, 0, 255), $i(a[1] * 1.12, 0, 255), $i(a[2] * 1.1, 0, 255))
  }
  if (i.rm === "fiber") {
    let o = $i(s * 1.05, 170, 225);
    return bt(o, o * .99, o * .97)
  }
  if (i.rm === "metal") {
    let o = $i(s * 1, 185, 250),
      a = qt(i.p[0][1] * 1.7);
    return a < .06 ? bt(120, 150, 175) : a < .09 ? bt(170, 70, 60) : bt(o, o, o * 1.01)
  }
  let r = $i(s * 1.02, 140, 225);
  return bt(r, r * .985, r * .96)
}

function _d(i, t, e, n, s) {
  let r = new Kt,
    o = new Kt,
    a = new Kt,
    c = new Kt,
    l = new Kt,
    h = new Kt,
    u = new Kt,
    d = [],
    f = [],
    m = [],
    x = Math.tan(24 * Math.PI / 180),
    g = Math.tan(12 * Math.PI / 180),
    p = Math.tan(8 * Math.PI / 180),
    v = s === "low";
  for (let D = 0; D < i.buildings.length; D++) {
    let O = i.buildings[D];
    if (n && n(O)) continue;
    let H = O.p.slice();
    Kl(H) < 0 && H.reverse();
    let U = 1e9,
      z = -1e9;
    for (let [at, q] of H) {
      let R = t.at(at, q);
      U = Math.min(U, R), z = Math.max(z, R)
    }
    let C = z + O.h,
      B = U - .5,
      V = Math.abs(Kl(H)),
      $ = O.osm && /Esta|train/i.test(O.osm),
      ht = $ ? [250, 250, 246] : i1(O.hv),
      ft = bt(...ht),
      J = V >= 450 || O.r === "shed" || O.rm === "metal" && V > 220,
      et = !J && V >= 30 || $ ? r : o,
      dt = Math.floor(qt(D * 1.37) * 4),
      ot = ft.map(at => at * .62),
      vt = Math.min(C, z + 1.3);
    for (let at = 0; at < H.length; at++) {
      let [q, R] = H[at], [T, k] = H[(at + 1) % H.length], tt = Math.hypot(T - q, k - R);
      if (tt < .05) continue;
      let rt = tt / 3.2,
        it = (B - z) / 3,
        mt = (vt - z) / 3,
        ut = O.h / 3;
      et.quad([q, B, R], [q, vt, R], [T, vt, k], [T, B, k], [dt, it], [dt, mt], [dt + rt, mt], [dt + rt, it], ot, null, [ot, ft, ft, ot]), et.quad([q, vt, R], [q, C, R], [T, C, k], [T, vt, k], [dt, mt], [dt, ut], [dt + rt, ut], [dt + rt, mt], ft), dt += rt
    }
    let xt = s1(O),
      nt = ha(H),
      St = nt.ux,
      W = nt.uz,
      X = -W,
      L = St,
      st = (at, q, R) => [nt.cx + St * at + X * q, R, nt.cz + W * at + L * q],
      G = (at, q, R, T) => {
        u.quad([at[0], at[1] - R, at[2]], [q[0], q[1] - R, q[2]], q, at, [0, 0], [1, 0], [1, 1], [0, 1], T)
      },
      Y = qt(D * 7.7) < .6 ? bt(236, 234, 228) : bt(120, 86, 60),
      Q = O.rm;
    if (Q === "ceramic" && O.r === "flat" && V > 300 && (Q = "fiber"), Q === "ceramic") {
      let q = nt.a + .55,
        R = nt.b + .55,
        T = 1.2;
      if (O.r === "gable" || V > 500 || nt.a > 2.6 * nt.b) {
        let k = C + R * x * .85,
          tt = st(-q, -R, C),
          rt = st(q, -R, C),
          it = st(q, R, C),
          mt = st(-q, R, C),
          ut = st(-q, 0, k),
          yt = st(q, 0, k),
          Ct = Math.hypot(R, k - C);
        a.quad(tt, ut, yt, rt, [0, 0], [0, Ct / T], [2 * q / T, Ct / T], [2 * q / T, 0], xt), a.quad(it, yt, ut, mt, [0, 0], [0, Ct / T], [2 * q / T, Ct / T], [2 * q / T, 0], xt), o.tri(st(-nt.a, -nt.b, C), st(-nt.a, nt.b, C), st(-nt.a, 0, k - .55 * x * .85), [0, 0], [1, 0], [.5, 1], ft), o.tri(st(nt.a, nt.b, C), st(nt.a, -nt.b, C), st(nt.a, 0, k - .55 * x * .85), [0, 0], [1, 0], [.5, 1], ft), G(tt, rt, .2, Y), G(it, mt, .2, Y), Ji(a, ut, yt, xt)
      } else {
        let k = C + R * x,
          tt = Math.max(0, q - R),
          rt = st(-q, -R, C),
          it = st(q, -R, C),
          mt = st(q, R, C),
          ut = st(-q, R, C),
          yt = st(-tt, 0, k),
          Ct = st(tt, 0, k),
          Mt = Math.hypot(R, k - C);
        a.quad(rt, yt, Ct, it, [0, 0], [(q - tt) / T, Mt / T], [(q + tt) / T, Mt / T], [2 * q / T, 0], xt), a.quad(mt, Ct, yt, ut, [0, 0], [(q - tt) / T, Mt / T], [(q + tt) / T, Mt / T], [2 * q / T, 0], xt), a.tri(ut, yt, rt, [0, 0], [R / T, Mt / T], [2 * R / T, 0], xt), a.tri(it, Ct, mt, [0, 0], [R / T, Mt / T], [2 * R / T, 0], xt), G(rt, it, .2, Y), G(it, mt, .2, Y), G(mt, ut, .2, Y), G(ut, rt, .2, Y), tt > .2 && Ji(a, yt, Ct, xt), Ji(a, yt, rt, xt, .08), Ji(a, yt, ut, xt, .08), Ji(a, Ct, it, xt, .08), Ji(a, Ct, mt, xt, .08)
      }
      h.quad(st(-q, -R, C - .03), st(q, -R, C - .03), st(q, R, C - .03), st(-q, R, C - .03), [0, 0], [0, 0], [0, 0], [0, 0], bt(150, 140, 128))
    } else if (Q === "fiber" || Q === "metal") {
      let at = Q === "metal" ? .3 : .4,
        q = nt.a + at,
        R = nt.b + at,
        T = Q === "metal" ? l : c,
        k = Q === "metal" ? 1 : 2.2,
        tt = nt.a * nt.b * 4 < V * 1.3;
      if (Q === "metal" && V > 120 || tt && V > 70 && qt(D * 2.9) < .55 || J) {
        let it = Q === "metal" ? p : g,
          mt = C + R * it,
          ut = st(-q, -R, C),
          yt = st(q, -R, C),
          Ct = st(q, R, C),
          Mt = st(-q, R, C),
          Ut = st(-q, 0, mt),
          Vt = st(q, 0, mt),
          Yt = Math.hypot(R, mt - C);
        T.quad(ut, Ut, Vt, yt, [0, 0], [0, Yt / k], [2 * q / k, Yt / k], [2 * q / k, 0], xt), T.quad(Ct, Vt, Ut, Mt, [0, 0], [0, Yt / k], [2 * q / k, Yt / k], [2 * q / k, 0], xt), o.tri(st(-nt.a, -nt.b, C), st(-nt.a, nt.b, C), st(-nt.a, 0, mt - at * it), [0, 0], [1, 0], [.5, 1], ft), o.tri(st(nt.a, nt.b, C), st(nt.a, -nt.b, C), st(nt.a, 0, mt - at * it), [0, 0], [1, 0], [.5, 1], ft), Ji(T, Ut, Vt, xt.map(Lt => Lt * .92), .18), G(ut, yt, .08, xt.map(Lt => Lt * .8)), G(Ct, Mt, .08, xt.map(Lt => Lt * .8))
      } else {
        let it = g * .9,
          mt = C + 2 * R * it,
          ut = st(-q, -R, C + .05),
          yt = st(q, -R, C + .05),
          Ct = st(q, R, mt),
          Mt = st(-q, R, mt),
          Ut = Math.hypot(2 * R, mt - C);
        T.quad(ut, Mt, Ct, yt, [0, 0], [0, Ut / k], [2 * q / k, Ut / k], [2 * q / k, 0], xt), o.tri(st(-nt.a, -nt.b, C), st(-nt.a, nt.b, C), st(-nt.a, nt.b, mt - at * it), [0, 0], [1, 0], [1, 1], ft), o.tri(st(nt.a, nt.b, C), st(nt.a, -nt.b, C), st(nt.a, nt.b, mt - at * it), [0, 0], [1, 0], [1, 1], ft), o.quad(st(-nt.a, nt.b, C), st(nt.a, nt.b, C), st(nt.a, nt.b, mt - at * it), st(-nt.a, nt.b, mt - at * it), [0, 0], [1, 0], [1, 1], [0, 1], ft), G(ut, yt, .06, xt.map(Vt => Vt * .8))
      }
      h.quad(st(-q, -R, C), st(q, -R, C), st(q, R, C), st(-q, R, C), [0, 0], [0, 0], [0, 0], [0, 0], bt(130, 126, 120)), Q === "fiber" && !J && qt(D * 5.3) < .35 && d.push([nt.cx + St * nt.a * .5, C + .15 + R * .1, nt.cz + W * nt.a * .5, qt(D)])
    } else {
      let at = ci.triangulateShape(H.map(rt => new _t(rt[0], rt[1])), []);
      for (let [rt, it, mt] of at) {
        let ut = H[rt],
          yt = H[it],
          Ct = H[mt];
        h.tri([ut[0], C, ut[1]], [Ct[0], C, Ct[1]], [yt[0], C, yt[1]], [ut[0] / 6, ut[1] / 6], [Ct[0] / 6, Ct[1] / 6], [yt[0] / 6, yt[1] / 6], xt, [0, 1, 0])
      }
      let q = .55 + .4 * qt(D * 3.1),
        R = C + q,
        T = .15,
        k = H.length;
      for (let rt = 0; rt < k; rt++) {
        let [it, mt] = H[rt], [ut, yt] = H[(rt + 1) % k], Ct = Math.hypot(ut - it, yt - mt);
        if (Ct < .05) continue;
        let Mt = (yt - mt) / Ct,
          Ut = -(ut - it) / Ct;
        o.quad([it, C, mt], [it, R, mt], [ut, R, yt], [ut, C, yt], [0, 0], [0, .2], [1, .2], [1, 0], ft);
        let Vt = it - Mt * T,
          Yt = mt - Ut * T,
          Lt = ut - Mt * T,
          ce = yt - Ut * T;
        o.quad([Lt, C, ce], [Lt, R, ce], [Vt, R, Yt], [Vt, C, Yt], [0, 0], [0, .2], [1, .2], [1, 0], ft.map(re => re * .85)), u.quad([it, R + .04, mt], [Vt, R + .04, Yt], [Lt, R + .04, ce], [ut, R + .04, yt], [0, 0], [0, 0], [0, 0], [0, 0], bt(205, 202, 196))
      }
      let tt = qt(D * 4.1);
      if (V > 22 && tt < .82) {
        let rt = [nt.cx + St * nt.a * (.25 + .3 * qt(D * 1.1)) + X * nt.b * .3 * (qt(D * 1.9) - .5), C, nt.cz + W * nt.a * (.25 + .3 * qt(D * 1.1)) + L * nt.b * .3 * (qt(D * 1.9) - .5), qt(D * 6.6)];
        if ((tt < .62 ? d : f).push(rt), O.h > 5 && V > 70 && qt(D * 8.8) < .5) {
          let it = [rt[0] - St * 1.6, rt[2] - W * 1.6],
            mt = 1.3,
            ut = [
              [-mt, -mt],
              [mt, -mt],
              [mt, mt],
              [-mt, mt]
            ].map(([yt, Ct]) => [it[0] + St * yt + X * Ct, it[1] + W * yt + L * Ct]);
          for (let yt = 0; yt < 4; yt++) {
            let Ct = ut[yt],
              Mt = ut[(yt + 1) % 4];
            o.quad([Ct[0], C, Ct[1]], [Ct[0], C + 2.3, Ct[1]], [Mt[0], C + 2.3, Mt[1]], [Mt[0], C, Mt[1]], [0, 0], [0, .76], [.8, .76], [.8, 0], ft)
          }
          h.quad([ut[0][0], C + 2.35, ut[0][1]], [ut[3][0], C + 2.35, ut[3][1]], [ut[2][0], C + 2.35, ut[2][1]], [ut[1][0], C + 2.35, ut[1][1]], [0, 0], [0, 1], [1, 1], [1, 0], xt, [0, 1, 0]), rt[1] = C + 2.35, rt[0] = it[0], rt[2] = it[1]
        }
      }
      qt(D * 9.4) < .12 && V > 30 && m.push([nt.cx - St * nt.a * .6, R, nt.cz - W * nt.a * .6, qt(D)])
    }
  }
  let y = new he;
  y.name = "buildings";
  let _ = sd(),
    P = (D, O, H = !0) => {
      let U = new Pt(D.geometry(), O);
      return U.castShadow = H, U.receiveShadow = !0, y.add(U), U
    };
  P(r, fa({
    vertexColors: !0,
    map: _,
    roughness: .88,
    side: Xt
  }));
  let M = sa();
  P(o, new Tt({
    vertexColors: !0,
    map: M.map,
    normalMap: M.normalMap,
    normalScale: new _t(.4, .4),
    roughness: .92,
    side: Xt
  }));
  let b = td(),
    w = ed(),
    S = nd(),
    E = id();
  P(a, new Tt({
    vertexColors: !0,
    map: b.map,
    normalMap: b.normalMap,
    normalScale: new _t(1, 1),
    roughness: .78,
    side: Xt
  })), P(c, new Tt({
    vertexColors: !0,
    map: w.map,
    normalMap: w.normalMap,
    normalScale: new _t(1.1, 1.1),
    roughness: .86,
    side: Xt
  })), P(l, new Tt({
    vertexColors: !0,
    map: S.map,
    normalMap: S.normalMap,
    normalScale: new _t(1.2, 1.2),
    roughness: .38,
    metalness: .55,
    side: Xt
  })), P(h, new Tt({
    vertexColors: !0,
    map: E.map,
    normalMap: E.normalMap,
    roughness: .95,
    side: Xt
  })), P(u, new Tt({
    vertexColors: !0,
    roughness: .8,
    side: Xt
  }));
  let A = (() => {
      let D = [new _t(0, 0), new _t(.62, 0), new _t(.72, .75), new _t(.76, .8), new _t(.74, .86), new _t(.5, 1), new _t(.15, 1.06), new _t(0, 1.07)];
      return new Bo(D, v ? 8 : 16)
    })(),
    N = (D, O, H, U = 1) => {
      if (!D.length) return;
      let z = new Ve(O, H, D.length),
        C = new ue,
        B = new ze,
        V = new F,
        $ = new F,
        ht = new F(0, 1, 0);
      D.forEach((ft, J) => {
        let et = (.85 + .35 * ft[3]) * U;
        V.set(et, et, et), B.setFromAxisAngle(ht, ft[3] * 6.28), $.set(ft[0], ft[1], ft[2]), C.compose($, B, V), z.setMatrixAt(J, C)
      }), z.castShadow = !0, z.receiveShadow = !0, y.add(z)
    };
  if (N(d, A, new Tt({
      color: 2057136,
      roughness: .45
    })), N(f, new be(.7, .62, 1, v ? 8 : 14).translate(0, .5, 0), new Tt({
      color: 10131600,
      roughness: .9
    })), m.length) {
    let D = new In(.45, 10, 6, 0, Math.PI * 2, 0, .9).rotateX(-1.1).translate(0, .7, 0);
    N(m, D, new Tt({
      color: 14211284,
      roughness: .6,
      side: Xt
    }))
  }
  return e.add(y), y
}

function Ji(i, t, e, n, s = .14) {
  let r = e[0] - t[0],
    o = e[2] - t[2],
    a = Math.hypot(r, o) || 1,
    c = -o / a * s,
    l = r / a * s,
    h = n.map(u => u * .85);
  i.quad([t[0] + c, t[1], t[2] + l], [e[0] + c, e[1], e[2] + l], [e[0], e[1] + .09, e[2]], [t[0], t[1] + .09, t[2]], [0, 0], [0, 0], [0, .1], [0, .1], h), i.quad([t[0], t[1] + .09, t[2]], [e[0], e[1] + .09, e[2]], [e[0] - c, e[1], e[2] - l], [t[0] - c, t[1], t[2] - l], [0, .1], [0, .1], [0, 0], [0, 0], h)
}
var gd, Ql, $i, th = Fe(() => {
  Ne();
  Wn();
  Kn();
  gd = [
    [240, 236, 226],
    [246, 240, 220],
    [238, 224, 180],
    [244, 214, 170],
    [232, 196, 160],
    [206, 224, 236],
    [200, 226, 204],
    [236, 190, 170],
    [226, 170, 130],
    [214, 214, 210],
    [190, 186, 178],
    [230, 210, 120],
    [250, 250, 248],
    [180, 206, 226],
    [224, 200, 216],
    [200, 120, 90],
    [160, 190, 150],
    [245, 230, 160],
    [210, 160, 150]
  ], Ql = [14, 10, 8, 7, 6, 5, 5, 5, 3, 6, 4, 3, 10, 3, 1.5, 2, 2, 3, 1.5];
  $i = (i, t, e) => Math.max(t, Math.min(e, i))
});

function xd(i, t, e, n, s) {
  let r = i.meshes,
    o = {
      asphalt: zs(),
      paver: od(),
      dirt: ra(),
      sidewalk: ks()
    },
    a = {
      asphalt: 8,
      paver: 2.4,
      dirt: 6,
      sidewalk: 2
    },
    c = {
      asphalt: .09,
      paver: .09,
      dirt: .05,
      sidewalk: .24
    },
    l = {
      asphalt: -3,
      paver: -3,
      dirt: -2,
      sidewalk: -4
    },
    h = {
      asphalt: .9,
      paver: .82,
      dirt: 1,
      sidewalk: .9
    },
    u = {
      asphalt: .5,
      paver: 1.4,
      dirt: .8,
      sidewalk: .6
    },
    d = new he,
    f = s && s.exclude;
  for (let M of ["asphalt", "paver", "dirt", "sidewalk"]) {
    let [b, w] = r["m_" + M];
    if (!w) continue;
    let S = new Float32Array(e, b, w),
      E = r["a_" + M] ? new Float32Array(e, r["a_" + M][0], r["a_" + M][1]) : null;
    if (f) {
      let z = [],
        C = [];
      for (let B = 0; B < w / 6; B++) {
        let V = (S[B * 6] + S[B * 6 + 2] + S[B * 6 + 4]) / 3,
          $ = (S[B * 6 + 1] + S[B * 6 + 3] + S[B * 6 + 5]) / 3;
        if (!f(V, $)) {
          for (let ht = 0; ht < 6; ht++) z.push(S[B * 6 + ht]);
          E && C.push(E[B])
        }
      }
      S = new Float32Array(z), E && (E = new Float32Array(C))
    }
    let A = S.length / 2,
      N = new Float32Array(A * 3),
      D = new Float32Array(A * 2);
    for (let z = 0; z < A; z++) {
      let C = S[z * 2],
        B = S[z * 2 + 1];
      if (N[z * 3] = C, N[z * 3 + 1] = t.at(C, B) + c[M], N[z * 3 + 2] = B, E) {
        let V = E[Math.floor(z / 3)],
          $ = Math.cos(V),
          ht = Math.sin(V);
        D[z * 2] = (-C * ht + B * $) / a[M], D[z * 2 + 1] = (C * $ + B * ht) / a[M]
      } else D[z * 2] = C / a[M], D[z * 2 + 1] = B / a[M]
    }
    let O = new pe;
    O.setAttribute("position", new ae(N, 3)), O.setAttribute("uv", new ae(D, 2)), O.computeVertexNormals();
    let H = new Tt({
        map: o[M].map,
        normalMap: o[M].normalMap,
        normalScale: new _t(u[M], u[M]),
        roughness: h[M],
        polygonOffset: !0,
        polygonOffsetFactor: l[M],
        polygonOffsetUnits: l[M] * 2
      }),
      U = new Pt(O, H);
    U.receiveShadow = !0, U.name = "road_" + M, d.add(U)
  }
  let m = new Kt;
  for (let [M, b, w, S] of i.curbs) {
    let E = Math.hypot(w - M, S - b);
    if (E < .05 || f && f((M + w) / 2, (b + S) / 2)) continue;
    let A = -(S - b) / E * .07,
      N = (w - M) / E * .07,
      D = t.at(M, b),
      O = t.at(w, S),
      H = qt(M * .37 + b * .11),
      U = H < .55 ? bt(226, 225, 219) : H < .85 ? bt(196, 194, 188) : bt(214, 200, 120),
      z = U.map(C => C * .82);
    m.quad([M - A, D + .04, b - N], [w - A, O + .04, S - N], [w - A, O + .26, S - N], [M - A, D + .26, b - N], [0, 0], [E, 0], [E, .2], [0, .2], z), m.quad([w + A, O + .04, S + N], [M + A, D + .04, b + N], [M + A, D + .26, b + N], [w + A, O + .26, S + N], [0, 0], [E, 0], [E, .2], [0, .2], z), m.quad([M - A, D + .26, b - N], [w - A, O + .26, S - N], [w + A, O + .26, S + N], [M + A, D + .26, b + N], [0, 0], [E, 0], [E, .15], [0, .15], U, [0, 1, 0])
  }
  let x = Ci(),
    g = new Pt(m.geometry(), new Tt({
      vertexColors: !0,
      map: x.map,
      roughness: .85,
      side: Xt
    }));
  g.receiveShadow = !0, g.castShadow = !1, d.add(g);
  let p = new Kt,
    v = bt(232, 232, 226),
    y = bt(236, 186, 40);
  for (let M of i.roads) {
    if (M.s !== "asphalt" || M.b || M.id === 1314627854 || M.id === 1314627855 || s && s.skipIds && s.skipIds.has(M.id) || !["trunk", "tertiary", "trunk_link", "residential", "primary", "secondary"].includes(M.hw) || M.w < 7) continue;
    let b = M.hw === "trunk",
      w = M.p,
      S = 0;
    for (let E = 0; E < w.length - 1; E++) {
      let [A, N] = w[E], [D, O] = w[E + 1], H = Math.hypot(D - A, O - N);
      if (H < .1) continue;
      let U = (D - A) / H,
        z = (O - N) / H,
        C = -z,
        B = U;
      for (let V = 0; V < H; V += 1.5) {
        let $ = Math.min(H, V + 1.5),
          ft = (S + V) % 8 < 4,
          J = A + U * V,
          et = N + z * V,
          dt = A + U * $,
          ot = N + z * $,
          vt = t.at(J, et) + .13,
          xt = t.at(dt, ot) + .13,
          nt = (St, W, X) => {
            p.quad([J + C * (St - W), vt, et + B * (St - W)], [J + C * (St + W), vt, et + B * (St + W)], [dt + C * (St + W), xt, ot + B * (St + W)], [dt + C * (St - W), xt, ot + B * (St - W)], [0, 0], [1, 0], [1, 1], [0, 1], X, [0, 1, 0])
          };
        if (b) {
          nt(-.12, .06, y), nt(.12, .06, y);
          let St = M.w / 2 - .4;
          nt(St, .07, v), nt(-St, .07, v)
        } else !M.o && ft && nt(0, .06, M.hw === "residential" ? v : y)
      }
      S += H
    }
  }
  let _ = new Tt({
      vertexColors: !0,
      roughness: .75,
      polygonOffset: !0,
      polygonOffsetFactor: -6,
      polygonOffsetUnits: -12,
      side: Xt
    }),
    P = new Pt(p.geometry(), _);
  return P.receiveShadow = !0, d.add(P), n.add(d), d
}

function yd(i, t, e, n) {
  let [s, r] = i.meshes.m_water;
  if (!r) return null;
  let o = new Float32Array(e, s, r),
    a = r / 2,
    c = new Float32Array(a * 3),
    l = i.meta.WL;
  for (let v = 0; v < a; v++) c[v * 3] = o[v * 2], c[v * 3 + 1] = l, c[v * 3 + 2] = o[v * 2 + 1];
  let h = new pe;
  h.setAttribute("position", new ae(c, 3)), h.computeVertexNormals();
  let u = document.createElement("canvas");
  u.width = u.height = 256;
  let d = u.getContext("2d"),
    f = d.createImageData(256, 256);
  for (let v = 0; v < 256; v++)
    for (let y = 0; y < 256; y++) {
      let _ = Math.sin(v / 256 * Math.PI * 8 + Math.sin(y / 256 * Math.PI * 4) * 2) * .5 + Math.sin(y / 256 * Math.PI * 10 + v / 40) * .5,
        P = Math.cos(y / 256 * Math.PI * 6 + Math.sin(v / 256 * Math.PI * 6)) * .5,
        M = (v * 256 + y) * 4;
      f.data[M] = 128 + _ * 40, f.data[M + 1] = 128 + P * 40, f.data[M + 2] = 255, f.data[M + 3] = 255
    }
  d.putImageData(f, 0, 0);
  let m = new pn(u);
  m.wrapS = m.wrapT = bn, m.repeat.set(1, 1);
  let x = new Float32Array(a * 2);
  for (let v = 0; v < a; v++) x[v * 2] = o[v * 2] / 40, x[v * 2 + 1] = o[v * 2 + 1] / 40;
  h.setAttribute("uv", new ae(x, 2));
  let g = new Tt({
      color: 3103322,
      roughness: .12,
      metalness: .1,
      normalMap: m,
      normalScale: new _t(.35, .35),
      transparent: !0,
      opacity: .92
    }),
    p = new Pt(h, g);
  return p.receiveShadow = !0, p.userData.tick = v => {
    m.offset.set(v * .01, v * .004)
  }, n.add(p), p
}

function vd(i, t, e) {
  let n = new Kt,
    s = new Kt,
    r = new Kt,
    o = new Kt,
    a = i.wallc.map(p => bt(...p)),
    c = i.gatec.map(p => bt(...p)),
    l = .09;
  for (let [p, v, y, _, P, M] of i.walls) {
    let b = Math.hypot(y - p, _ - v);
    if (b < .05) continue;
    let w = -(_ - v) / b * l,
      S = (y - p) / b * l,
      E = t.at(p, v),
      A = t.at(y, _),
      N = E - .4,
      D = A - .4,
      O = E + P,
      H = A + P,
      U = a[M],
      z = qt(Math.round(p * 3) * .71 + Math.round(v * 3) * 1.37) < .2,
      C = z ? s : n,
      B = z ? [1, 1, 1] : U,
      V = [p + w, N, v + S],
      $ = [y + w, D, _ + S],
      ht = [y + w, H, _ + S],
      ft = [p + w, O, v + S],
      J = [p - w, N, v - S],
      et = [y - w, D, _ - S],
      dt = [y - w, H, _ - S],
      ot = [p - w, O, v - S],
      vt = b / 3,
      xt = -.4 / (z ? 2 : 1),
      nt = P / (z ? 2 : 1),
      St = B.map(st => st * .7);
    C.quad(V, $, ht, ft, [0, xt], [vt, xt], [vt, nt], [0, nt], B, null, [St, St, B, B]), C.quad(et, J, ot, dt, [vt, xt], [0, xt], [0, nt], [vt, nt], B, null, [St, St, B, B]);
    let W = z ? bt(190, 188, 182) : U.map(st => st * .9),
      X = w * 1.6,
      L = S * 1.6;
    n.quad([p + X, O + .05, v + L], [y + X, H + .05, _ + L], [y - X, H + .05, _ - L], [p - X, O + .05, v - L], [0, 1], [vt, 1], [vt, 1], [0, 1], W, [0, 1, 0]), n.quad([p + X, O - .02, v + L], [y + X, H - .02, _ + L], [y + X, H + .05, _ + L], [p + X, O + .05, v + L], [0, 1], [vt, 1], [vt, 1], [0, 1], W), n.quad([y - X, H - .02, _ - L], [p - X, O - .02, v - L], [p - X, O + .05, v - L], [y - X, H + .05, _ - L], [0, 1], [vt, 1], [vt, 1], [0, 1], W), C.quad(J, V, ft, ot, [0, 0], [.05, 0], [.05, 1], [0, 1], B), C.quad($, et, dt, ht, [0, 0], [.05, 0], [.05, 1], [0, 1], B)
  }
  for (let [p, v, y, _, P, M] of i.gates) {
    let b = Math.hypot(y - p, _ - v),
      w = t.at(p, v),
      S = t.at(y, _),
      E = Math.min(w, S),
      A = c[M],
      N = -(_ - v) / b * .03,
      D = (y - p) / b * .03,
      H = (qt(p * 1.3 + _ * .7) < .5 ? 0 : 1) * .5;
    r.quad([p + N, E, v + D], [y + N, E, _ + D], [y + N, E + P, _ + D], [p + N, E + P, v + D], [0, H], [b / 1.5, H], [b / 1.5, H + .5], [0, H + .5], A), r.quad([y - N, E, _ - D], [p - N, E, v - D], [p - N, E + P, v - D], [y - N, E + P, _ - D], [0, H], [b / 1.5, H], [b / 1.5, H + .5], [0, H + .5], A);
    for (let [U, z, C] of [
        [p, v, w],
        [y, _, S]
      ]) {
      let V = C + P + .2,
        $ = a[(M + 1) % a.length],
        ht = (ft, J, et, dt, ot) => o.quad(ft, J, et, dt, [0, 0], [.1, 0], [.1, 1], [0, 1], $, ot);
      ht([U - .17, C - .3, z - .17], [U + .17, C - .3, z - .17], [U + .17, V, z - .17], [U - .17, V, z - .17]), ht([U + .17, C - .3, z + .17], [U - .17, C - .3, z + .17], [U - .17, V, z + .17], [U + .17, V, z + .17]), ht([U - .17, C - .3, z + .17], [U - .17, C - .3, z - .17], [U - .17, V, z - .17], [U - .17, V, z + .17]), ht([U + .17, C - .3, z - .17], [U + .17, C - .3, z + .17], [U + .17, V, z + .17], [U + .17, V, z - .17]), ht([U - .17 - .03, V, z - .17 - .03], [U + .17 + .03, V, z - .17 - .03], [U + .17 + .03, V, z + .17 + .03], [U - .17 - .03, V, z + .17 + .03], [0, 1, 0])
    }
  }
  let h = new he,
    u = sa(),
    d = rd(),
    f = new Pt(n.geometry(), fa({
      vertexColors: !0,
      map: u.map,
      normalMap: u.normalMap,
      normalScale: new _t(.6, .6),
      roughness: .95,
      side: Xt
    }));
  f.castShadow = !0, f.receiveShadow = !0, h.add(f);
  let m = new Pt(o.geometry(), fa({
    vertexColors: !0,
    map: u.map,
    roughness: .95,
    side: Xt
  }));
  m.castShadow = !0, m.receiveShadow = !0, h.add(m);
  let x = new Pt(s.geometry(), new Tt({
    vertexColors: !0,
    map: d.map,
    normalMap: d.normalMap,
    roughness: .95,
    side: Xt
  }));
  x.castShadow = !0, x.receiveShadow = !0, h.add(x);
  let g = new Pt(r.geometry(), new Tt({
    vertexColors: !0,
    map: cd(),
    roughness: .5,
    metalness: .4,
    side: Xt,
    alphaTest: .4
  }));
  return g.castShadow = !0, h.add(g), h.name = "walls", e.add(h), h
}
var Md = Fe(() => {
  Ne();
  Wn();
  da();
  Kn();
  th()
});

function wd(i) {
  let t = 0;
  for (let c of i) {
    let l = c.index ? c.toNonIndexed() : c;
    c._ni = l, t += l.attributes.position.count
  }
  let e = new Float32Array(t * 3),
    n = new Float32Array(t * 3),
    r = i.every(c => c._ni.attributes.uv) ? new Float32Array(t * 2) : null,
    o = 0;
  for (let c of i) {
    let l = c._ni;
    e.set(l.attributes.position.array, o * 3), l.attributes.normal && n.set(l.attributes.normal.array, o * 3), r && r.set(l.attributes.uv.array, o * 2), o += l.attributes.position.count
  }
  let a = new pe;
  return a.setAttribute("position", new ae(e, 3)), a.setAttribute("normal", new ae(n, 3)), r && a.setAttribute("uv", new ae(r, 2)), a
}

function pa(i) {
  let t = i;
  return () => (t = t * 16807 % 2147483647, (t - 1) / 2147483646)
}

function Ed(i, t, e) {
  let n = pa(i * 7919 + 13),
    s = [],
    r = [],
    o = [],
    a = [],
    c = new F,
    l = new F,
    h = new F,
    u = new F,
    d = new ze;
  for (let m = 0; m < t; m++) {
    let x = n() * Math.PI * 2,
      g = Math.acos(2 * n() - 1) * (e.flat || 1),
      p = .55 + .45 * Math.pow(n(), .5);
    c.set(Math.sin(g) * Math.cos(x) * p, Math.cos(g) * p * e.ry, Math.sin(g) * Math.sin(x) * p), c.y += e.dy || 0, l.set(c.x, c.y / (e.ry * e.ry), c.z).normalize();
    let v = e.card * (.75 + .5 * n());
    h.set(n() - .5, n() - .5, n() - .5).normalize(), d.setFromAxisAngle(h, n() * Math.PI);
    let y = new F(1, 0, 0).applyQuaternion(d),
      _ = new F(0, 1, 0).applyQuaternion(d),
      P = [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1]
      ],
      M = P.map(([S, E]) => new F().copy(c).addScaledVector(y, S * v / 2).addScaledVector(_, E * v / 2)),
      b = .62 + .38 * Math.min(1, Math.max(0, (c.y / e.ry + .6) / 1.4)),
      w = .9 + .2 * n();
    for (let S of [0, 1, 2, 0, 2, 3]) {
      let E = M[S];
      s.push(E.x, E.y, E.z);
      let A = new F(E.x, (E.y - (e.dy || 0)) / (e.ry * e.ry), E.z).normalize().lerp(l, .3).normalize();
      r.push(A.x, A.y, A.z), o.push((P[S][0] + 1) / 2, (P[S][1] + 1) / 2), a.push(b * w, b * w, b * w)
    }
  }
  let f = new pe;
  return f.setAttribute("position", new Jt(s, 3)), f.setAttribute("normal", new Jt(r, 3)), f.setAttribute("uv", new Jt(o, 2)), f.setAttribute("color", new Jt(a, 3)), f
}

function Sd(i, t, e) {
  let n = new Ls(.62, t),
    s = n.attributes.position,
    r = pa(i);
  for (let u = 0; u < s.count; u++) {
    let d = s.getX(u),
      f = s.getY(u),
      m = s.getZ(u),
      x = .85 + .25 * qt(i * 3 + Math.round(d * 50) * 1.3 + Math.round(f * 50) * 2.1 + Math.round(m * 50) * 3.7);
    s.setXYZ(u, d * x, f * x * e, m * x)
  }
  let o = n.index ? n.toNonIndexed() : n;
  o.computeVertexNormals();
  let a = o.attributes.normal,
    c = o.attributes.position,
    l = [];
  for (let u = 0; u < c.count; u++) {
    let d = new F(c.getX(u), c.getY(u), c.getZ(u)).normalize(),
      f = new F(a.getX(u), a.getY(u), a.getZ(u)).lerp(d, .8).normalize();
    a.setXYZ(u, f.x, f.y, f.z);
    let m = .3 + .22 * Math.min(1, Math.max(0, (c.getY(u) / e + .8) / 1.6));
    l.push(m, m, m)
  }
  o.setAttribute("color", new Jt(l, 3));
  let h = new Float32Array(c.count * 2).fill(.5);
  return o.setAttribute("uv", new ae(h, 2)), o
}

function bd(i) {
  let t = i.reduce((c, l) => c + l.attributes.position.count, 0),
    e = new Float32Array(t * 3),
    n = new Float32Array(t * 3),
    s = new Float32Array(t * 2),
    r = new Float32Array(t * 3),
    o = 0;
  for (let c of i) e.set(c.attributes.position.array, o * 3), n.set(c.attributes.normal.array, o * 3), s.set(c.attributes.uv.array, o * 2), r.set(c.attributes.color.array, o * 3), o += c.attributes.position.count;
  let a = new pe;
  return a.setAttribute("position", new ae(e, 3)), a.setAttribute("normal", new ae(n, 3)), a.setAttribute("uv", new ae(s, 2)), a.setAttribute("color", new ae(r, 3)), a
}

function r1(i, t) {
  let e = pa(i + 5),
    n = [],
    s = t ? 5 : 7,
    r = new be(.11, .19, 1, s, 1, !0);
  r.translate(0, .5, 0), n.push(r);
  let o = t ? 2 : 4;
  for (let a = 0; a < o; a++) {
    let c = new be(.035, .08, .75, s - 2, 1, !0);
    c.translate(0, .375, 0), c.rotateZ(.5 + .4 * e()), c.rotateY(a / o * Math.PI * 2 + e()), c.translate(0, .85 + .1 * e(), 0), n.push(c)
  }
  return wd(n)
}

function o1(i) {
  let t = [],
    e = i ? 9 : 14,
    n = pa(77);
  for (let a = 0; a < e; a++) {
    let c = a / e * Math.PI * 2 + n() * .3,
      l = a % 3 === 0 ? .5 : a % 3 === 1 ? 0 : -.35,
      h = 2.6 + n() * .8,
      u = new Ai(1, h, 1, 6),
      d = u.attributes.position;
    for (let f = 0; f < d.count; f++) {
      let m = d.getY(f) + h / 2,
        x = m / h,
        g = d.getX(f) * (.35 + .65 * Math.sin(Math.min(1, x * 1.2) * Math.PI * .9 + .1)),
        p = m * Math.cos(l),
        v = m * Math.sin(l) - .55 * x * x * h * .45;
      d.setXYZ(f, g, v, p)
    }
    u.rotateY(c), t.push(u)
  }
  let s = wd(t);
  s.computeVertexNormals();
  let r = s.attributes.normal;
  for (let a = 0; a < r.count; a++) {
    let c = new F(r.getX(a), Math.abs(r.getY(a)) + .6, r.getZ(a)).normalize();
    r.setXYZ(a, c.x, c.y, c.z)
  }
  let o = new Float32Array(s.attributes.position.count * 3).fill(1);
  return s.setAttribute("color", new ae(o, 3)), s
}

function Td(i, t, e, n, s) {
  let r = [],
    o = [],
    a = i.extras.fountains || [];
  for (let $ of i.trees) a.some(ht => Math.hypot(ht[0] - $[0], ht[1] - $[1]) < 7.5) || ($[3] >= 1e3 ? o : r).push($);
  let c = n === "low" || n === "medium",
    l = {
      low: 2
    } [n] || 1,
    h = new he;
  h.name = "trees";
  let u = $l(0),
    d = $l(1),
    f = $ => new Tt({
      map: $,
      alphaTest: .42,
      vertexColors: !0,
      roughness: .85,
      side: Xt
    }),
    m = f(u),
    x = f(d),
    g = $ => new pr({
      depthPacking: zl,
      map: $,
      alphaTest: .42
    }),
    p = new Tt({
      vertexColors: !0,
      roughness: .95,
      map: null
    }),
    v = n === "low" ? 12 : c ? 18 : 44,
    y = [{
      ry: .78,
      card: 1.2,
      dy: 0
    }, {
      ry: .62,
      card: 1.3,
      dy: -.05,
      flat: .9
    }, {
      ry: 1.05,
      card: 1.1,
      dy: .05
    }],
    _ = y.map(($, ht) => bd([Sd(ht + 3, c ? 0 : 1, $.ry * .9), Ed(ht + 1, v, $)])),
    P = bd([Sd(9, 0, .7), Ed(9, c ? 10 : 18, {
      ry: .7,
      card: 1.35,
      dy: 0
    })]),
    M = new ue,
    b = new ze,
    w = new F,
    S = new F,
    E = new Qt,
    A = new F(0, 1, 0),
    N = [
      [.34, .5, .2],
      [.4, .56, .22],
      [.3, .44, .18],
      [.44, .58, .26],
      [.36, .54, .27],
      [.48, .58, .28],
      [.28, .42, .2]
    ],
    D = [
      [.98, .82, .18],
      [.88, .45, .66],
      [.92, .4, .18]
    ],
    O = [],
    H = _.map(() => []);
  r.forEach(($, ht) => {
    qt($[3] + ht * .37) < .06 && $[2] < 3.5 ? O.push($) : H[Math.floor(qt($[3] * 3.1 + ht) * 3) % 3].push($)
  });
  let U = [];
  H.forEach(($, ht) => {
    if (!$.length) return;
    let ft = new Ve(_[ht], ht === 1 ? x : m, $.length);
    $.forEach((J, et) => {
      let [dt, ot, vt] = J, xt = t.at(dt, ot), nt = Math.max(1.6, vt * .95) * (.9 + .2 * qt(et * 3.3 + ht)), St = nt * y[ht].ry * .9 + 1.6 + qt(et + ht * 999) * 1;
      b.setFromAxisAngle(A, qt(et * 7 + ht) * 6.28), w.set(nt, nt, nt), S.set(dt, xt + St, ot), M.compose(S, b, w), ft.setMatrixAt(et, M);
      let W = qt(J[3] * 1.7 + et),
        X = N[Math.floor(W * N.length) % N.length];
      qt(et * 13.3 + ht) < .012 && (X = D[Math.floor(qt(et) * 3) % 3]), E.setRGB(X[0], X[1], X[2]), ft.setColorAt(et, E), U.push([dt, xt, ot, St - nt * y[ht].ry * .35, nt])
    }), ft.castShadow = !0, ft.receiveShadow = !0, ft.customDepthMaterial = g(ht === 1 ? d : u), h.add(ft)
  });
  let z = o.filter(($, ht) => ht % l === 0 || $[3] >= 4e6 && $[3] < 5e6);
  if (z.length) {
    let $ = new Ve(P, x, z.length);
    z.forEach((ht, ft) => {
      let [J, et, dt] = ht, ot = t.at(J, et), vt = dt * 1.15 * (c && l > 1 ? 1.15 : 1), xt = vt * .7 + 1.5 + qt(ft) * 2.5 + (ht[3] >= 2e6 && ht[3] < 4e6 ? 2.5 + qt(ft * 1.7) * 3 : 0);
      b.setFromAxisAngle(A, qt(ft * 3) * 6.28), w.set(vt, vt, vt), S.set(J, ot + xt, et), M.compose(S, b, w), $.setMatrixAt(ft, M);
      let nt = N[Math.floor(qt(ft * 1.3) * N.length) % N.length],
        St = .78 + .15 * qt(ft * 2.7),
        W = qt(ft * 5.1) < .2;
      if (ht[3] >= 4e6 && ht[3] < 5e6) {
        let X = qt(ht[3] * .37);
        X < .18 ? (nt = [.5, .44, .36], St = .9, W = !0, w.multiplyScalar(.72), M.compose(S, b, w), $.setMatrixAt(ft, M)) : X < .42 && (nt = [
          [.58, .52, .28],
          [.52, .5, .26],
          [.62, .48, .24]
        ][Math.floor(X * 30) % 3], St = .85)
      }
      E.setRGB(nt[0] * St, nt[1] * St, nt[2] * St), $.setColorAt(ft, E), !c && W && U.push([J, ot, et, xt - vt * .3, vt])
    }), $.castShadow = !c, $.receiveShadow = !0, $.customDepthMaterial = g(d), h.add($)
  }
  let C = r1(3, c),
    B = new Ve(C, new Tt({
      color: 6179384,
      roughness: 1
    }), U.length);
  U.forEach(([$, ht, ft, J, et], dt) => {
    let ot = .7 + et * .12;
    w.set(ot, J, ot), b.setFromAxisAngle(A, qt(dt * 1.9) * 6.28), S.set($, ht - .2, ft), M.compose(S, b, w), B.setMatrixAt(dt, M)
  }), B.castShadow = !0, h.add(B);
  let V = O.concat(s || []);
  if (V.length) {
    let $ = o1(c),
      ht = new Tt({
        map: Jl(),
        alphaTest: .4,
        vertexColors: !0,
        side: Xt,
        roughness: .85
      }),
      ft = new Ve($, ht, V.length);
    ft.customDepthMaterial = g(Jl());
    let J = new be(.16, .24, 1, c ? 6 : 10, 1, !0);
    J.translate(0, .5, 0);
    let et = new Ve(J, new Tt({
      color: 10261898,
      roughness: .95
    }), V.length);
    V.forEach((dt, ot) => {
      let [vt, xt] = dt, nt = t.at(vt, xt), St = 7 + qt(ot * 9.1) * 7;
      b.setFromAxisAngle(A, qt(ot) * 6.28), w.set(1.25, 1.25, 1.25), S.set(vt, nt + St, xt), M.compose(S, b, w), ft.setMatrixAt(ot, M), E.setRGB(.75 + .2 * qt(ot * 2.2), .85, .7), ft.setColorAt(ot, E), w.set(1, St, 1), S.set(vt, nt, xt), M.compose(S, b, w), et.setMatrixAt(ot, M)
    }), ft.castShadow = et.castShadow = !0, h.add(ft), h.add(et)
  }
  return e.add(h), h
}
var Ad = Fe(() => {
  Ne();
  Wn();
  Kn()
});

function Cd(i, t = !1) {
  let e = i[0].index !== null,
    n = new Set(Object.keys(i[0].attributes)),
    s = new Set(Object.keys(i[0].morphAttributes)),
    r = {},
    o = {},
    a = i[0].morphTargetsRelative,
    c = new pe,
    l = 0;
  for (let h = 0; h < i.length; ++h) {
    let u = i[h],
      d = 0;
    if (e !== (u.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (let f in u.attributes) {
      if (!n.has(f)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + f + '" attribute exists among all geometries, or in none of them.'), null;
      r[f] === void 0 && (r[f] = []), r[f].push(u.attributes[f]), d++
    }
    if (d !== n.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."), null;
    if (a !== u.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (let f in u.morphAttributes) {
      if (!s.has(f)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."), null;
      o[f] === void 0 && (o[f] = []), o[f].push(u.morphAttributes[f])
    }
    if (t) {
      let f;
      if (e) f = u.index.count;
      else if (u.attributes.position !== void 0) f = u.attributes.position.count;
      else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"), null;
      c.addGroup(l, f, h), l += f
    }
  }
  if (e) {
    let h = 0,
      u = [];
    for (let d = 0; d < i.length; ++d) {
      let f = i[d].index;
      for (let m = 0; m < f.count; ++m) u.push(f.getX(m) + h);
      h += i[d].attributes.position.count
    }
    c.setIndex(u)
  }
  for (let h in r) {
    let u = Rd(r[h]);
    if (!u) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " attribute."), null;
    c.setAttribute(h, u)
  }
  for (let h in o) {
    let u = o[h][0].length;
    if (u === 0) break;
    c.morphAttributes = c.morphAttributes || {}, c.morphAttributes[h] = [];
    for (let d = 0; d < u; ++d) {
      let f = [];
      for (let x = 0; x < o[h].length; ++x) f.push(o[h][x][d]);
      let m = Rd(f);
      if (!m) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " morphAttribute."), null;
      c.morphAttributes[h].push(m)
    }
  }
  return c
}

function Rd(i) {
  let t, e, n, s = -1,
    r = 0;
  for (let l = 0; l < i.length; ++l) {
    let h = i[l];
    if (t === void 0 && (t = h.array.constructor), t !== h.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (e === void 0 && (e = h.itemSize), e !== h.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (n === void 0 && (n = h.normalized), n !== h.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (s === -1 && (s = h.gpuType), s !== h.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    r += h.count * e
  }
  let o = new t(r),
    a = new ae(o, e, n),
    c = 0;
  for (let l = 0; l < i.length; ++l) {
    let h = i[l];
    if (h.isInterleavedBufferAttribute) {
      let u = c / e;
      for (let d = 0, f = h.count; d < f; d++)
        for (let m = 0; m < e; m++) {
          let x = h.getComponent(d, m);
          a.setComponent(d + u, m, x)
        }
    } else o.set(h.array, c);
    c += h.count * e
  }
  return s !== void 0 && (a.gpuType = s), a
}
var Pd = Fe(() => {
  Ne()
});

function ma(i, t, e, n, s, r, o, a = 1) {
  for (let c = 0; c < t.L; c += e) {
    let l = Math.min(t.L, c + e),
      h = t.at(c),
      u = t.at(l),
      d = u[0] - h[0],
      f = u[2] - h[2],
      m = Math.hypot(d, f) || 1,
      x = -f / m,
      g = d / m,
      p = r(h, c),
      v = r(u, l);
    i.quad([h[0] + x * n, p, h[2] + g * n], [u[0] + x * n, v, u[2] + g * n], [u[0] + x * s, v, u[2] + g * s], [h[0] + x * s, p, h[2] + g * s], [c / a, 0], [l / a, 0], [l / a, 1], [c / a, 1], o)
  }
}

function Id(i, t, e, n, s, r, o, a) {
  for (let c = 0; c < t.L; c += e) {
    let l = Math.min(t.L, c + e),
      h = t.at(c),
      u = t.at(l),
      d = u[0] - h[0],
      f = u[2] - h[2],
      m = Math.hypot(d, f) || 1,
      x = -f / m,
      g = d / m;
    i.quad([h[0] + x * n, h[1] + r, h[2] + g * n], [u[0] + x * n, u[1] + r, u[2] + g * n], [u[0] + x * s, u[1] + o, u[2] + g * s], [h[0] + x * s, h[1] + o, h[2] + g * s], [c / 3.4, 0], [l / 3.4, 0], [l / 3.4, .3], [c / 3.4, .3], a)
  }
}

function Vs(i, t, e, n, s, r, o, a = 0, c = null) {
  c = c ?? t.L;
  for (let l = a; l < c; l += e) {
    let h = Math.min(c, l + e),
      u = t.at(l),
      d = t.at(h),
      f = d[0] - u[0],
      m = d[2] - u[2],
      x = Math.hypot(f, m) || 1,
      g = -m / x,
      p = f / x,
      v = [u[0] + g * n, s(u, l), u[2] + p * n],
      y = [d[0] + g * n, s(d, h), d[2] + p * n],
      _ = [d[0] + g * n, r(d, h), d[2] + p * n],
      P = [u[0] + g * n, r(u, l), u[2] + p * n];
    i.quad(v, y, _, P, [l, 0], [h, 0], [h, 1], [l, 1], o)
  }
}

function Dd(i, t, e) {
  let n = new he;
  n.name = "rail";
  let s = new Kt,
    r = new Kt,
    o = [],
    a = _ => _[0] > t.XMIN - 40 && _[0] < t.XMAX + 40 && _[1] > t.ZMIN - 40 && _[1] < t.ZMAX + 40;
  for (let _ of i.rail) {
    let P = [],
      M = [];
    if (_.pts.forEach((E, A) => {
        a(E) && (P.push(E), M.push(_.h[A]))
      }), P.length < 2) continue;
    let b = new Tn(P, M);
    o.push(b);
    let w = bt(255, 228, 205);
    ma(s, b, 3, -1.7, 1.7, E => E[1] + .35, w, 3.4), Id(s, b, 3, -1.7, -2.6, .35, -.25, bt(225, 195, 170)), Id(s, b, 3, 2.6, 1.7, -.25, .35, bt(225, 195, 170));
    let S = bt(150, 150, 155);
    for (let E of [-.5, .5]) ma(r, b, 3, E - .04, E + .04, A => A[1] + .62, S), Vs(r, b, 3, E - .04, A => A[1] + .47, A => A[1] + .62, bt(90, 80, 70)), Vs(r, b, 3, E + .04, A => A[1] + .62, A => A[1] + .47, bt(90, 80, 70))
  }
  let c = ad(),
    l = new Pt(s.geometry(), new Tt({
      vertexColors: !0,
      map: c.map,
      normalMap: c.normalMap,
      side: Xt,
      roughness: 1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -4
    }));
  l.receiveShadow = !0, n.add(l);
  let h = new Pt(r.geometry(), new Tt({
    vertexColors: !0,
    roughness: .35,
    metalness: .8
  }));
  n.add(h);
  let u = 0;
  for (let _ of o) u += Math.floor(_.L / .65);
  let d = new He(2, .14, .24),
    f = new Ve(d, new Tt({
      color: 10657430,
      roughness: .9
    }), u),
    m = new ue,
    x = new ze,
    g = new F,
    p = new F(1, 1, 1),
    v = new F(0, 1, 0),
    y = 0;
  for (let _ of o)
    for (let P = 0; P < _.L - .65; P += .65) {
      let M = _.at(P),
        b = _.at(P + .6),
        w = Math.atan2(b[2] - M[2], b[0] - M[0]);
      x.setFromAxisAngle(v, -w + Math.PI / 2), g.set(M[0], M[1] + .42, M[2]), m.compose(g, x, p), f.setMatrixAt(y++, m)
    }
  return f.count = y, f.receiveShadow = !0, n.add(f), e.add(n), {
    group: n,
    paths: o
  }
}

function Ud(i) {
  let t = [];
  for (let [e, n] of i) {
    let s = e.attributes.position.count,
      r = new Float32Array(s * 3);
    for (let o = 0; o < s; o++) r[o * 3] = n[0], r[o * 3 + 1] = n[1], r[o * 3 + 2] = n[2];
    e.setAttribute("color", new ae(r, 3)), e.attributes.uv || e.setAttribute("uv", new ae(new Float32Array(s * 2), 2)), t.push(e.index ? e.toNonIndexed() : e)
  }
  return Cd(t, !1)
}

function _e(i, t, e, n, s, r) {
  let o = new He(i, t, e);
  return o.translate(n, s + t / 2, r), o
}

function Ld(i, t, e = .5) {
  let n = new be(e, e, .14, 14);
  return n.rotateX(Math.PI / 2), n.translate(i, e, t), n
}

function ga(i, t, e, n, s) {
  i.push([_e(n * (e - 1) + 1.6, .55, .22, t, .45, 1.18), s], [_e(n * (e - 1) + 1.6, .55, .22, t, .45, -1.18), s]);
  for (let r = 0; r < e; r++) {
    let o = t + (r - (e - 1) / 2) * n;
    i.push([Ld(o, .72, .48), s], [Ld(o, -.72, .48), s])
  }
  i.push([_e(.5, .35, 2.2, t, .62, 0), s])
}

function a1() {
  let i = bt(232, 186, 40),
    t = bt(20, 110, 88),
    e = bt(52, 54, 58),
    n = bt(26, 30, 34),
    s = bt(235, 235, 230),
    r = bt(120, 124, 128),
    o = [];
  o.push([_e(21.6, .38, 3.14, 0, 1.42, 0), e]), o.push([_e(21.8, .12, 3.18, 0, 1.8, 0), bt(200, 160, 30)]), ga(o, 6.9, 3, 1.75, n), ga(o, -6.9, 3, 1.75, n), o.push([_e(7, 1, 2.5, 0, .55, 0), e]), o.push([_e(13.2, 2.65, 2.5, -3, 1.92, 0), i]), o.push([_e(13.25, .32, 2.54, -3, 2.55, 0), t]), o.push([_e(3.4, .35, 3, -8.4, 4.55, 0), i]), o.push([_e(3.2, .2, 2.9, -8.4, 4.9, 0), r]);
  for (let a of [-7.5, -9.3]) {
    let c = new be(.62, .62, .06, 16);
    c.translate(a, 5.12, 0), o.push([c, n])
  }
  for (let a of [-1, -3.2]) {
    let c = new be(.5, .5, .06, 14);
    c.translate(a, 4.6, 0), o.push([c, n])
  }
  o.push([_e(1.2, .4, .8, -5, 4.57, 0), e]), o.push([_e(3.4, 3, 3.1, 5.4, 1.92, 0), i]), o.push([_e(3.45, .32, 3.14, 5.4, 2.55, 0), t]), o.push([_e(3.5, .18, 3.16, 5.4, 4.92, 0), bt(210, 170, 36)]), o.push([_e(.06, .95, 2.5, 7.13, 3.72, 0), n]), o.push([_e(1.6, .85, .06, 5.6, 3.75, 1.56), n]), o.push([_e(1.6, .85, .06, 5.6, 3.75, -1.56), n]), o.push([_e(2.6, 1.55, 2.6, 8.4, 1.92, 0), i]), o.push([_e(2.62, .32, 2.64, 8.4, 2.55, 0), t]), o.push([_e(.1, .25, .5, 9.74, 3, 0), s]), o.push([_e(.1, .18, .3, 9.74, 2.2, .9), s]), o.push([_e(.1, .18, .3, 9.74, 2.2, -.9), s]);
  for (let a of [1.52, -1.52]) {
    o.push([_e(20.6, .05, .05, -.5, 2.85, a), s]);
    for (let c = -10; c <= 9.8; c += 2.2) o.push([_e(.05, 1, .05, c, 1.86, a), s])
  }
  return o.push([_e(.4, .5, .9, 10.6, 1, 0), e]), o.push([_e(.4, .5, .9, -10.6, 1, 0), e]), o.push([_e(.6, .5, 3, 10.2, .6, 0), i]), o.push([_e(.6, .5, 3, -10.6, .6, 0), i]), Ud(o)
}

function c1() {
  let i = bt(110, 70, 52),
    t = bt(86, 54, 40),
    e = bt(30, 30, 32),
    n = bt(70, 44, 36),
    s = [];
  ga(s, 3.5, 2, 1.75, e), ga(s, -3.5, 2, 1.75, e), s.push([_e(9.9, .3, 2.4, 0, 1.15, 0), e]), s.push([_e(9.6, 2.5, 3.05, 0, 1.42, 0), i]);
  for (let a = 0; a < 9; a++) {
    let c = -4.4 + a * 1.1;
    s.push([_e(.12, 2.5, 3.17, c, 1.42, 0), t])
  }
  s.push([_e(9.7, .12, 3.15, 0, 3.85, 0), t]);
  let r = new Gi;
  r.moveTo(-1.42, 0), r.lineTo(-1, .35), r.lineTo(-.3, .62), r.lineTo(.3, .62), r.lineTo(1, .35), r.lineTo(1.42, 0);
  let o = new Is(r, {
    depth: 8.8,
    bevelEnabled: !1
  });
  return o.rotateY(Math.PI / 2), o.translate(-4.4, 3.86, 0), s.push([o, n]), s.push([_e(.5, .3, .4, 5.2, 1, 0), e]), s.push([_e(.5, .3, .4, -5.2, 1, 0), e]), Ud(s)
}

function Nd(i, t) {
  let e = i.slice().sort((M, b) => b.L - M.L).slice(0, 2),
    n = new he;
  n.name = "train";
  let s = 10.5,
    r = 22,
    o = 60,
    a = new Tt({
      vertexColors: !0,
      roughness: .7,
      metalness: .15
    }),
    c = new Ve(c1(), a, o);
  c.castShadow = !0, c.receiveShadow = !0, n.add(c);
  let l = a1(),
    h = new Tt({
      vertexColors: !0,
      roughness: .45,
      metalness: .25
    }),
    u = [];
  for (let M = 0; M < 2; M++) {
    let b = new he,
      w = new Pt(l, h);
    w.castShadow = !0, w.receiveShadow = !0, b.add(w), n.add(b), u.push(b)
  }
  t.add(n);
  let d = new ue,
    f = new ze,
    m = new F,
    x = new F(1, 1, 1),
    g = new F(0, 1, 0),
    p = -200,
    v = 1,
    y = 0,
    _ = 0;

  function P(M, b, w) {
    let S = M.at(b - w / 2 * .8),
      E = M.at(b + w / 2 * .8),
      A = M.at(b),
      N = Math.atan2(E[2] - S[2], E[0] - S[0]);
    return f.setFromAxisAngle(g, -N), m.set(A[0], A[1] + .62, A[2]), N
  }
  return {
    group: n,
    placeNear(M, b) {
      let w = e[0],
        S = 0,
        E = 1e9;
      for (let A = 0; A < w.L; A += 5) {
        let N = w.at(A),
          D = Math.hypot(N[0] - M, N[2] - b);
        D < E && (E = D, S = A)
      }
      y = 0, v = 1, _ = 0, p = S + r * 1.5
    },
    tick(M) {
      let b = e[y];
      if (!b) return;
      if (_ > 0) {
        _ -= M, n.visible = !1;
        return
      }
      n.visible = !0, p += M * 13 * v;
      let w = p;
      for (let A = 0; A < 2; A++) P(b, w - r / 2 * v, r), u[A].position.copy(m), u[A].quaternion.copy(f), v < 0 && u[A].rotateY(Math.PI), w -= r * v;
      for (let A = 0; A < o; A++) {
        let N = w - s / 2 * v;
        P(b, N, s), d.compose(m, f, x), c.setMatrixAt(A, d), w -= s * v
      }
      c.instanceMatrix.needsUpdate = !0;
      let S = w;
      (v > 0 ? S > b.L + 50 : S < -50) && (_ = 40, y = (y + 1) % e.length, v = -v, p = v > 0 ? -50 : b.L + 50)
    }
  }
}

function Fd(i, t, e, n) {
  let s = new he;
  s.name = "passarelas";
  let r = new Kt,
    o = new Kt,
    a = bt(40, 110, 140),
    c = bt(150, 150, 150);
  for (let m of i.extras.footbridges) {
    let x = new Tn(m, m.map(() => 0)),
      g = t.at(m[0][0], m[0][1]),
      p = t.at(m[m.length - 1][0], m[m.length - 1][1]),
      v = x.at(x.L / 2),
      y = t.at(v[0], v[2]) + 7.2,
      _ = x.s[1],
      P = x.s[x.s.length - 2],
      M = m.map((A, N) => N === 0 ? g + .2 : N === m.length - 1 ? p + .2 : y),
      b = new Tn(m, M),
      w = 1.2;
    ma(r, b, 1, -w, w, A => A[1], c), ma(r, b, 1, w, -w, A => A[1] - .35, a), Vs(r, b, 1, -w, A => A[1] - .35, A => A[1], a), Vs(r, b, 1, w, A => A[1], A => A[1] - .35, a);
    for (let A of [-w, w]) Vs(o, b, 1, A, N => N[1], N => N[1] + 1.1, a);
    for (let A of [-w, w]) Vs(o, b, 1, A, N => N[1] + 1.1, N => N[1] + 2.6, a, _, P);
    let S = new He(.35, 1, .35),
      E = new Tt({
        color: 2780812,
        roughness: .6,
        metalness: .4
      });
    for (let A = 4; A < b.L - 2; A += 7) {
      let N = b.at(A),
        D = t.at(N[0], N[2]),
        O = N[1] - .35 - D;
      if (!(O < .8))
        for (let H of [-1, 1]) {
          let U = new Pt(S, E);
          U.scale.y = O, U.position.set(N[0], D + O / 2, N[2]), s.add(U), U.castShadow = !0
        }
    }
  }
  let l = new Pt(r.geometry(), new Tt({
    vertexColors: !0,
    roughness: .6,
    metalness: .3,
    side: Xt
  }));
  l.castShadow = l.receiveShadow = !0;
  let h = document.createElement("canvas");
  h.width = h.height = 64;
  let u = h.getContext("2d");
  u.clearRect(0, 0, 64, 64), u.strokeStyle = "#2c6f8e", u.lineWidth = 3, u.strokeRect(0, 0, 64, 64), u.beginPath(), u.moveTo(0, 32), u.lineTo(64, 32), u.moveTo(32, 0), u.lineTo(32, 64), u.stroke();
  let d = new pn(h);
  d.wrapS = d.wrapT = bn, d.repeat.set(1, 4), d.colorSpace = Ce;
  let f = new Pt(o.geometry(), new Tt({
    map: d,
    transparent: !0,
    alphaTest: .3,
    side: Xt,
    metalness: .4,
    roughness: .5
  }));
  return s.add(l, f), e.add(s), s
}
var Tn, _a = Fe(() => {
  Ne();
  Wn();
  Pd();
  Kn();
  Tn = class {
    constructor(t, e) {
      this.p = t, this.h = e, this.s = [0];
      for (let n = 1; n < t.length; n++) this.s.push(this.s[n - 1] + Math.hypot(t[n][0] - t[n - 1][0], t[n][1] - t[n - 1][1]));
      this.L = this.s[this.s.length - 1]
    }
    at(t) {
      t = Math.max(0, Math.min(this.L, t));
      let e = 0,
        n = this.s.length - 1;
      for (; n - e > 1;) {
        let a = e + n >> 1;
        this.s[a] <= t ? e = a : n = a
      }
      let s = (t - this.s[e]) / Math.max(1e-6, this.s[n] - this.s[e]),
        r = this.p[e],
        o = this.p[n];
      return [r[0] + (o[0] - r[0]) * s, this.h[e] + (this.h[n] - this.h[e]) * s, r[1] + (o[1] - r[1]) * s]
    }
  }
});

function eh(i, t, e, n = 1) {
  let s = [],
    r = [];
  for (let a = t; a < e + 1e-6; a += n) {
    let c = i.at(Math.min(a, e));
    s.push([c[0], c[2]]), r.push(c[1])
  }
  let o = i.at(e);
  return Math.hypot(s[s.length - 1][0] - o[0], s[s.length - 1][1] - o[2]) > .05 && (s.push([o[0], o[2]]), r.push(o[1])), new Tn(s, r)
}

function $e(i, t) {
  let e = i.at(Math.max(0, t - .5)),
    n = i.at(Math.min(i.L, t + .5)),
    s = n[0] - e[0],
    r = n[2] - e[2],
    o = Math.hypot(s, r) || 1;
  return {
    c: i.at(t),
    ux: s / o,
    uz: r / o,
    nx: -r / o,
    nz: s / o
  }
}

function xn(i, t, e, n, s, r, o, a, c, l = 1, h = null) {
  for (let u = e; u < n - 1e-6; u += s) {
    let d = Math.min(n, u + s),
      f = $e(t, u),
      m = $e(t, d),
      x = (g, p, v) => [g.c[0] + g.nx * p, a(g.c[1], p, v), g.c[2] + g.nz * p];
    i.quad(x(f, r, u), x(m, r, d), x(m, o, d), x(f, o, u), [r / l, u / l], [r / l, d / l], [o / l, d / l], [o / l, u / l], c, h)
  }
}

function Gs(i, t, e, n, s, r, o, a, c, l = 1, h = !1) {
  for (let u = e; u < n - 1e-6; u += s) {
    let d = Math.min(n, u + s),
      f = $e(t, u),
      m = $e(t, d),
      x = [f.c[0] + f.nx * r, o(f.c, u), f.c[2] + f.nz * r],
      g = [m.c[0] + m.nx * r, o(m.c, d), m.c[2] + m.nz * r],
      p = [m.c[0] + m.nx * r, a(m.c, d), m.c[2] + m.nz * r],
      v = [f.c[0] + f.nx * r, a(f.c, u), f.c[2] + f.nz * r];
    h ? i.quad(g, x, v, p, [d / l, g[1] / l], [u / l, x[1] / l], [u / l, v[1] / l], [d / l, p[1] / l], c) : i.quad(x, g, p, v, [u / l, x[1] / l], [d / l, g[1] / l], [d / l, p[1] / l], [u / l, v[1] / l], c)
  }
}

function Dn(i, t, e, n, s, r, o, a = 1) {
  for (let c = e; c < n - 1e-6; c += s) {
    let l = Math.min(n, c + s),
      h = $e(t, c),
      u = $e(t, l);
    for (let d = 0; d < r.length - 1; d++) {
      let [f, m] = r[d], [x, g] = r[d + 1], p = (v, y, _) => [v.c[0] + v.nx * y, v.c[1] + _, v.c[2] + v.nz * y];
      i.quad(p(h, f, m), p(u, f, m), p(u, x, g), p(h, x, g), [c / a, m / a], [l / a, m / a], [l / a, g / a], [c / a, g / a], o)
    }
  }
}

function hn(i, t, e, n, s, r, o, a, c, l = 1) {
  let h = (g, p, v) => [t.c[0] + t.ux * (e + g) + t.nx * (n + p), v, t.c[2] + t.uz * (e + g) + t.nz * (n + p)],
    u = s / 2,
    d = r / 2,
    f = a,
    m = a + o,
    x = (g, p, v, y, _, P) => i.quad(g, p, v, y, [0, 0], [_ / l, 0], [_ / l, P / l], [0, P / l], c);
  x(h(-u, -d, f), h(u, -d, f), h(u, -d, m), h(-u, -d, m), s, o), x(h(u, d, f), h(-u, d, f), h(-u, d, m), h(u, d, m), s, o), x(h(u, -d, f), h(u, d, f), h(u, d, m), h(u, -d, m), r, o), x(h(-u, d, f), h(-u, -d, f), h(-u, -d, m), h(-u, d, m), r, o), x(h(-u, -d, m), h(u, -d, m), h(u, d, m), h(-u, d, m), s, r), x(h(-u, d, f), h(u, d, f), h(u, -d, f), h(-u, -d, f), s, r)
}

function Od(i, t, e, n) {
  let s = i.viaduct,
    r = new he;
  r.name = "viaduto";
  let o = new Kt,
    a = new Kt,
    c = new Kt,
    l = new Kt,
    h = new Kt,
    u = new Kt,
    d = new Kt,
    f = bt(214, 210, 202),
    m = bt(188, 184, 176),
    x = bt(228, 225, 218),
    [g, p] = s.deck,
    v = s.ramps.find(G => Math.hypot(G.pts[0][0] - g[0], G.pts[0][1] - g[1]) < 1) || s.ramps[1],
    y = s.ramps.find(G => G !== v),
    _ = [...v.pts.slice().reverse(), ...y.pts.slice(1)],
    P = [...v.h.slice().reverse(), ...y.h.slice(1)],
    M = new Tn(_, P),
    b = 0;
  {
    let G = 0;
    for (let Y = 1; Y < v.pts.length; Y++) G += Math.hypot(v.pts[Y][0] - v.pts[Y - 1][0], v.pts[Y][1] - v.pts[Y - 1][1]);
    b = G
  }
  let w = [];
  for (let G of n || [])
    for (let Y = b - 5; Y < b + 40; Y += .25) {
      let Q = M.at(Y),
        at = 1e9;
      for (let q = 0; q < G.L; q += 2) {
        let R = G.at(q),
          T = Math.hypot(Q[0] - R[0], Q[2] - R[2]);
        T < at && (at = T)
      }
      at < .6 && (w.push(Y), Y += 3)
    }
  w.length || (w = [b + 13.5, b + 18.1]), w.sort((G, Y) => G - Y);
  let S = b + 7.5,
    E = b + 24.5,
    A = b + 44,
    N = b + 62,
    D = eh(M, S - .6, N + .6, 1),
    O = S - .6,
    H = -6.3,
    U = 6.3,
    z = 0,
    C = 8;
  xn(a, D, 0, D.L, 1, -5.85, 3.55, G => G + .02, [1, 1, 1], C, [0, 1, 0]), xn(c, D, 0, D.L, 1, 4.05, 6, G => G + .17, [1, 1, 1], 2, [0, 1, 0]), Gs(o, D, 0, D.L, 1, 4.05, G => G[1] + .02, G => G[1] + .17, f, 2, !0), xn(o, D, 0, D.L, 1, U, H, G => G - .3, m, 2, [0, -1, 0]);
  for (let [G, Y] of [
      [H, !1],
      [U, !0]
    ]) Gs(o, D, 0, D.L, 1, G, Q => Q[1] - .75, Q => Q[1] + .25, x, 2, Y);
  xn(o, D, 0, D.L, 1, H, H + .25, G => G + .25, x, 2, [0, 1, 0]), xn(o, D, 0, D.L, 1, U - .2, U, G => G + .25, x, 2, [0, 1, 0]);
  let B = (G, Y) => [
      [G, .02],
      [G + Y * .04, .1],
      [G + Y * .17, .33],
      [G + Y * .31, .85],
      [G + Y * .42, .85],
      [G + Y * .42, .02]
    ].map(([Q, at]) => [Q, at]),
    V = B(-6.27, 1),
    $ = [
      [3.55, .02],
      [3.59, .1],
      [3.72, .33],
      [3.86, .85],
      [3.97, .85],
      [4.05, .17]
    ];
  Dn(o, D, 0, D.L, 1, V, x, 2), Dn(o, D, 0, D.L, 1, $.slice().reverse(), x, 2), Dn(o, D, 0, D.L, 1, [
    [6, .17],
    [6, .75],
    [6.3, .75],
    [6.3, .25]
  ], x, 2);
  let ht = bt(246, 196, 18);
  for (let [G, Y] of [
      [-6.1, .85],
      [6.15, .75]
    ]) {
    for (let Q = .3; Q < D.L; Q += .22) {
      let at = $e(D, Q),
        q = at.c[0] + at.nx * G,
        R = at.c[2] + at.nz * G,
        T = at.c[1] + Y,
        k = .025;
      u.quad([q - at.ux * k, T, R - at.uz * k], [q + at.ux * k, T, R + at.uz * k], [q + at.ux * k, T + 1.9, R + at.uz * k], [q - at.ux * k, T + 1.9, R - at.uz * k], [0, 0], [1, 0], [1, 1], [0, 1], ht), u.quad([q - at.nx * k, T, R - at.nz * k], [q + at.nx * k, T, R + at.nz * k], [q + at.nx * k, T + 1.9, R + at.nz * k], [q - at.nx * k, T + 1.9, R - at.nz * k], [0, 0], [1, 0], [1, 1], [0, 1], ht)
    }
    for (let Q of [.06, 1.86]) Dn(u, D, 0, D.L, 1, [
      [G - .03, Y + Q],
      [G + .03, Y + Q],
      [G + .03, Y + Q + .06],
      [G - .03, Y + Q + .06],
      [G - .03, Y + Q]
    ], ht);
    for (let Q = .3; Q < D.L; Q += 2.5) {
      let at = $e(D, Q);
      hn(u, at, 0, G, .08, .08, 1.95, at.c[1] + Y, ht)
    }
  }
  let ft = bt(236, 236, 230);
  for (let [G, Y, Q, at] of [
      [-1.25, .06, ht, !1],
      [-1.05, .06, ht, !1],
      [-5.5, .07, ft, !1],
      [3.2, .07, ft, !1]
    ]) xn(h, D, 0, D.L, 1, G - Y, G + Y, q => q + .04, Q, 1, [0, 1, 0]);
  let J = [
    [S, E],
    [E, A],
    [A, N]
  ];
  for (let [G, Y] of J) {
    let Q = G - O + .4,
      at = Y - O - .4;
    for (let q of [-4.6, -1.55, 1.55, 4.6]) Dn(o, D, Q, at, 1, [
      [q - .17, -.3],
      [q - .17, -1.45],
      [q - .38, -1.6],
      [q - .38, -1.82],
      [q + .38, -1.82],
      [q + .38, -1.6],
      [q + .17, -1.45],
      [q + .17, -.3]
    ], m, 2);
    for (let q of [.03, .5, .97]) {
      let R = Q + (at - Q) * q,
        T = $e(D, R);
      hn(o, T, 0, 0, .25, 9, 1.2, T.c[1] - 1.55, m, 2)
    }
  }
  let et = new be(.55, .55, 1, 24, 1, !0),
    dt = Ci(),
    ot = new Tt({
      color: 14078666,
      map: dt.map,
      normalMap: dt.normalMap,
      roughness: .85
    }),
    vt = (G, Y) => {
      let Q = t.at(G, Y);
      for (let at of n || [])
        for (let q = 0; q < at.L; q += 3) {
          let R = at.at(q);
          Math.hypot(R[0] - G, R[2] - Y) < 6 && (Q = Math.min(Q, R[1] + .2))
        }
      return Q
    };
  for (let G of [E, A]) {
    let Y = $e(D, G - O),
      Q = Y.c[1] - 1.82,
      at = 1.5,
      q = [
        [-6, 0],
        [6, 0],
        [6, -.6],
        [4.6, -at],
        [-4.6, -at],
        [-6, -.6]
      ],
      R = (T, k, tt) => [Y.c[0] + Y.nx * T + Y.ux * tt, Q + k, Y.c[2] + Y.nz * T + Y.uz * tt];
    for (let T = 0; T < q.length; T++) {
      let [k, tt] = q[T], [rt, it] = q[(T + 1) % q.length];
      o.quad(R(k, tt, -.85), R(rt, it, -.85), R(rt, it, .85), R(k, tt, .85), [0, 0], [1, 0], [1, .5], [0, .5], m)
    }
    for (let T of [-.85, .85]) {
      let k = q.map(([tt, rt]) => R(tt, rt, T));
      o.tri(k[0], k[1], k[2], [0, 0], [1, 0], [1, 1], m), o.tri(k[0], k[2], k[3], [0, 0], [1, 0], [1, 1], m), o.tri(k[0], k[3], k[4], [0, 0], [1, 0], [1, 1], m), o.tri(k[0], k[4], k[5], [0, 0], [1, 0], [1, 1], m)
    }
    for (let T of [-3.2, 3.2]) {
      let k = Y.c[0] + Y.nx * T,
        tt = Y.c[2] + Y.nz * T,
        rt = vt(k, tt) - .3,
        it = Q - at - rt + .05,
        mt = new Pt(et, ot);
      mt.scale.set(1, it, 1), mt.position.set(k, rt + it / 2, tt), mt.castShadow = !0, mt.receiveShadow = !0, r.add(mt);
      let ut = new Pt(new be(.75, .8, .5, 20), ot);
      ut.position.set(k, rt + .25, tt), r.add(ut)
    }
  }
  for (let [G, Y] of [
      [S, -1],
      [N, 1]
    ]) {
    let Q = $e(M, G),
      at = Q.c[1] - 1.82;
    hn(o, Q, Y * .6, 0, 1.4, 13, 1.3, at - 1.3, m, 2);
    let q = 14;
    for (let R = 0; R < q; R++) {
      let T = -6.6 + 13.2 * R / q,
        k = -6.6 + 13.2 * (R + 1) / q,
        tt = [Q.c[0] + Q.nx * T + Q.ux * Y * 1.3, 0, Q.c[2] + Q.nz * T + Q.uz * Y * 1.3],
        rt = [Q.c[0] + Q.nx * k + Q.ux * Y * 1.3, 0, Q.c[2] + Q.nz * k + Q.uz * Y * 1.3],
        it = vt(tt[0], tt[2]) - .5,
        mt = vt(rt[0], rt[2]) - .5,
        ut = at - 1.3,
        yt = ut,
        Ct = Y < 0 ? [
          [rt[0], mt, rt[2]],
          [tt[0], it, tt[2]],
          [tt[0], ut, tt[2]],
          [rt[0], yt, rt[2]]
        ] : [
          [tt[0], it, tt[2]],
          [rt[0], mt, rt[2]],
          [rt[0], yt, rt[2]],
          [tt[0], ut, tt[2]]
        ];
      l.quad(Ct[0], Ct[1], Ct[2], Ct[3], [T / 3, it / 3], [k / 3, mt / 3], [k / 3, yt / 3], [T / 3, ut / 3], [1, 1, 1])
    }
  }
  let xt = eh(M, 0, S + 1.5, 1),
    nt = eh(M, N - 1.5, M.L, 1);
  for (let [G, Y] of [
      [xt, "N"],
      [nt, "S"]
    ]) {
    xn(a, G, 0, G.L, 1, -5.85, 5.85, ut => ut + .12, [1, 1, 1], C, [0, 1, 0]);
    for (let [ut, yt, Ct] of [
        [-.12, .06, ht],
        [.12, .06, ht],
        [-5.5, .07, ft],
        [5.5, .07, ft]
      ]) xn(h, G, 0, G.L, 1, ut - yt, ut + yt, Mt => Mt + .14, Ct, 1, [0, 1, 0]);
    Dn(o, G, 0, G.L, 1, B(-6.27, 1), x, 2), Dn(o, G, 0, G.L, 1, B(6.27, -1).slice().reverse(), x, 2);
    let at = ut => ut[1] - t.at(ut[0], ut[2]),
      q = 0;
    for (let ut = 0; ut < G.L; ut += 1) {
      let yt = $e(G, ut);
      at(yt.c) > .25 && (q = ut)
    }
    let R = Math.min(G.L, q + 2),
      T = 0,
      k = Y === "N" ? G.L : R,
      tt = Y === "N" ? Math.max(0, G.L - R) : 0,
      rt = Y === "N" ? (() => {
        let ut = G.L;
        for (let yt = G.L; yt >= 0; yt -= 1) {
          let Ct = $e(G, yt);
          if (at(Ct.c) > .25) ut = yt;
          else break
        }
        return Math.max(0, ut - 2)
      })() : 0,
      it = Y === "N" ? rt : 0,
      mt = Y === "N" ? G.L : R;
    for (let [ut, yt] of [
        [-6.3, !0],
        [6.3, !1]
      ]) Gs(l, G, it, mt, 1, ut, Ct => Math.min(t.at(Ct[0] + 0, Ct[2]), Ct[1]) - .6, Ct => Ct[1] + .02, [1, 1, 1], 3, yt);
    xn(o, G, it, mt, 1, -6.3, -6.3 + 1e-4, ut => ut, x)
  }
  for (let G of [6, D.L / 2, D.L - 6]) {
    let Y = $e(D, G),
      Q = Y.c[0] + Y.nx * 5.8,
      at = Y.c[2] + Y.nz * 5.8,
      q = Y.c[1] + .17;
    hn(d, Y, 0, 5.8, .16, .16, 8.5, q, bt(150, 152, 156)), hn(d, Y, 0, 4.6, .12, 2.4, .12, q + 8.4, bt(150, 152, 156)), hn(d, Y, 0, 3.4, .5, .25, .12, q + 8.3, bt(230, 230, 225))
  }
  let St = zs(),
    W = ks(),
    X = aa(),
    L = (G, Y, Q = !0) => {
      let at = new Pt(G.geometry(), Y);
      return at.castShadow = Q, at.receiveShadow = !0, r.add(at), at
    };
  L(o, new Tt({
    vertexColors: !0,
    map: dt.map,
    normalMap: dt.normalMap,
    normalScale: new _t(.5, .5),
    roughness: .85,
    side: Xt
  })), L(a, new Tt({
    map: St.map,
    normalMap: St.normalMap,
    normalScale: new _t(.5, .5),
    roughness: .9,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4
  }), !1), L(c, new Tt({
    map: W.map,
    normalMap: W.normalMap,
    roughness: .9,
    side: Xt
  }), !1), L(l, new Tt({
    map: X.map,
    normalMap: X.normalMap,
    roughness: .92,
    side: Xt
  })), L(h, new Tt({
    vertexColors: !0,
    roughness: .6,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -6,
    polygonOffsetUnits: -12
  }), !1), L(u, new Tt({
    vertexColors: !0,
    roughness: .45,
    metalness: .3,
    side: Xt
  })), L(d, new Tt({
    vertexColors: !0,
    roughness: .5,
    metalness: .5
  })), e.add(r);
  let st = D.at(D.L / 2);
  return {
    group: r,
    deck: D,
    center: st,
    supports: {
      sAN: S,
      sP1: E,
      sP2: A,
      sAS: N
    },
    cross: w
  }
}
var nh = Fe(() => {
  Ne();
  Wn();
  _a();
  Kn()
});

function Bd(i) {
  let t = new fn({
      depthWrite: !1,
      side: Ke,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        sunDir: {
          value: new F(0, 1, 0)
        },
        zen: {
          value: new Qt(.045, .17, .55)
        },
        hor: {
          value: new Qt(.5, .62, .8)
        },
        day: {
          value: 1
        },
        clouds: {
          value: i === "low" ? 0 : 1
        }
      },
      vertexShader: "varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*0.99999;}",
      fragmentShader: `uniform vec3 sunDir,zen,hor;uniform float day,clouds;varying vec3 vW;
    float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
    float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
    float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p=p*2.03+vec2(17.1,9.3);a*=.5;}return s;}
    void main(){vec3 d=normalize(vW);float h=max(d.y,0.);
      vec3 col=mix(hor,zen,pow(h,0.42));col=mix(col,hor*1.08,exp(-h*28.)*0.6);
      float sd=max(dot(d,normalize(sunDir)),0.);col+=vec3(1.,.9,.7)*(pow(sd,8.)*0.18+pow(sd,180.)*1.2)*day;
      if(clouds>0.5&&d.y>0.01){vec2 uv=d.xz/(d.y+0.12)*1.6;float n=fbm(uv+vec2(3.,1.));float c=smoothstep(0.56,0.78,n)*smoothstep(0.01,0.12,d.y);
        float sh=fbm(uv*1.03+normalize(sunDir).xz*0.05+vec2(3.,1.));vec3 cc=mix(vec3(0.95,0.96,1.0),vec3(0.62,0.66,0.74),smoothstep(0.55,0.85,sh))*(0.6+0.4*day);
        col=mix(col,cc,c*0.9);}
      col*=0.25+0.75*day;
      gl_FragColor=vec4(col,1.);
      #include <colorspace_fragment>
    }`
    }),
    e = new Pt(new In(3e4, 48, 24), t);
  return e.frustumCulled = !1, e.renderOrder = -10, e.name = "ceu", e
}
var zd = Fe(() => {
  Ne()
});

function kd(i, t, e) {
  let n = (i.extras || {}).pools;
  if (!n || !n.length) return null;
  let s = new he;
  s.name = "clube";
  let r = new Kt,
    o = new Kt,
    a = new Kt,
    c = new Tt({
      color: 3127e3,
      roughness: .06,
      metalness: .1,
      emissive: 674394,
      emissiveIntensity: .35,
      transparent: !0,
      opacity: .92
    });
  n.forEach(([u, d, f, m, x], g) => {
    f < m && ([f, m] = [m, f], x += Math.PI / 2);
    let p = Math.cos(x),
      v = Math.sin(x),
      y = (U, z, C) => [u + U * p - z * v, C, d + U * v + z * p],
      _ = f / 2,
      P = m / 2,
      M = 1.8,
      b = 1.2,
      w = -1e9;
    for (let [U, z] of [
        [-_ - 2, -P - 2],
        [_ + 2, -P - 2],
        [_ + 2, P + 2],
        [-_ - 2, P + 2],
        [0, 0]
      ]) {
      let C = y(U, z, 0);
      w = Math.max(w, t.at(C[0], C[2]))
    }
    w += .1;
    {
      let U = M + 3.5,
        z = [
          [-_ - U, -P - U],
          [_ + U, -P - U],
          [_ + U, P + U],
          [-_ - U, P + U]
        ];
      for (let C = 0; C < 4; C++) {
        let [B, V] = z[C], [$, ht] = z[(C + 1) % 4];
        o.quad(y(B, V, w - 3.5), y($, ht, w - 3.5), y($, ht, w + .12), y(B, V, w + .12), [0, 0], [1, 0], [1, 1], [0, 1], bt(200, 194, 180))
      }
    }
    let S = bt(214, 206, 190),
      E = bt(240, 238, 232),
      A = (U, z, C, B) => {
        let V = ($, ht, ft, J) => r.quad(y($, ht, C), y(ft, ht, C), y(ft, J, C), y($, J, C), [$ / 2, ht / 2], [ft / 2, ht / 2], [ft / 2, J / 2], [$ / 2, J / 2], B, [0, 1, 0]);
        V(-_ - z, -P - z, _ + z, -P - U), V(-_ - z, P + U, _ + z, P + z), V(-_ - z, -P - U, -_ - U, P + U), V(_ + U, -P - U, _ + z, P + U)
      };
    A(0, .45, w + .18, E), A(.45, M + 3.5, w + .12, S);
    let N = bt(120, 200, 225),
      D = [
        [-_, -P],
        [_, -P],
        [_, P],
        [-_, P]
      ];
    for (let U = 0; U < 4; U++) {
      let [z, C] = D[U], [B, V] = D[(U + 1) % 4];
      o.quad(y(z, C, w - b), y(B, V, w - b), y(B, V, w + .18), y(z, C, w + .18), [0, 0], [1, 0], [1, 1], [0, 1], N)
    }
    o.quad(y(-_, -P, w - b), y(-_, P, w - b), y(_, P, w - b), y(_, -P, w - b), [0, 0], [1, 0], [1, 1], [0, 1], bt(90, 180, 210), [0, 1, 0]);
    let O = new Ai(f, m);
    O.rotateX(-Math.PI / 2);
    let H = new Pt(O, c);
    if (H.position.set(u, w - .05, d), H.rotation.y = -x, H.receiveShadow = !0, s.add(H), g === 0) {
      let U = _ + 1.2,
        z = -P - 1.2,
        C = y(U, z, w),
        B = new Pt(new He(2.2, 5.2, 2.2), new Tt({
          color: 14210252,
          roughness: .8
        }));
      B.position.set(C[0], w + 2.6, C[2]), B.rotation.y = -x, B.castShadow = !0, s.add(B), [
        [1994704, 1],
        [15905815, -1]
      ].forEach(([V, $], ht) => {
        let ft = [];
        for (let et = 0; et <= 24; et++) {
          let dt = et / 24,
            ot = dt * Math.PI * 1.3 * $,
            xt = U - 1.2 - dt * 6.5 + Math.sin(ot) * 3.2 * .4,
            nt = z + .8 + dt * 4.5 * $ * .6 + (1 - Math.cos(ot)) * 1.2 * $,
            St = y(xt, nt, w + 5 - dt * 4.8);
          ft.push(new F(St[0], St[1], St[2]))
        }
        let J = new Pt(new Ho(new yr(ft), 48, .55, 10, !1), new Tt({
          color: V,
          roughness: .35,
          side: Xt
        }));
        J.castShadow = !0, s.add(J)
      });
      for (let V = 0; V < 5; V++) {
        let $ = -_ + 2 + V * (f - 4) / 4,
          ht = P + 2.6,
          ft = y($, ht, w + .12),
          J = new Pt(new be(.04, .04, 2.4, 6), new Tt({
            color: 15658734
          }));
        J.position.set(ft[0], w + 1.3, ft[2]), s.add(J);
        let et = new Pt(new Ps(1.5, .5, 8, 1, !0), new Tt({
          color: [14826286, 2784737, 16106776, 16777215, 2864755][V],
          side: Xt,
          roughness: .7
        }));
        et.position.set(ft[0], w + 2.55, ft[2]), et.castShadow = !0, s.add(et);
        let dt = new Pt(new He(1.8, .3, .6), new Tt({
            color: 16053488
          })),
          ot = y($ + 1.2, ht + .6, 0);
        dt.position.set(ot[0], w + .35, ot[2]), dt.rotation.y = -x, s.add(dt)
      }
    }
  });
  let l = (u, d) => {
    let f = new Pt(u.geometry(), d);
    f.receiveShadow = !0, s.add(f)
  };
  l(r, new Tt({
    vertexColors: !0,
    roughness: .8,
    polygonOffset: !0,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -8
  })), l(o, new Tt({
    vertexColors: !0,
    roughness: .3,
    side: Xt
  })), e.add(s);
  let h = n[0];
  return {
    group: s,
    center: [h[0], t.at(h[0], h[1]), h[1]]
  }
}
var Hd = Fe(() => {
  Ne();
  Wn()
});

function Vd(i) {
  return new Set(((i.viaduct2 || {}).ways || []).map(t => t.id))
}

function xa(i, t = 0) {
  let e = i.viaduct2;
  if (!e) return null;
  let n = [];
  for (let c of e.ways) {
    let l = c.w / 2 + 2.2 + t;
    for (let h = 0; h < c.pts.length - 1; h++) n.push([c.pts[h][0], c.pts[h][1], c.pts[h + 1][0], c.pts[h + 1][1], l])
  }
  let s = 1e9,
    r = -1e9,
    o = 1e9,
    a = -1e9;
  for (let c of n) s = Math.min(s, c[0], c[2]), r = Math.max(r, c[0], c[2]), o = Math.min(o, c[1], c[3]), a = Math.max(a, c[1], c[3]);
  return (c, l) => {
    if (c < s - 8 || c > r + 8 || l < o - 8 || l > a + 8) return !1;
    for (let [h, u, d, f, m] of n) {
      let x = d - h,
        g = f - u,
        p = x * x + g * g || 1,
        v = ((c - h) * x + (l - u) * g) / p;
      v = Math.max(0, Math.min(1, v));
      let y = h + x * v - c,
        _ = u + g * v - l;
      if (y * y + _ * _ < m * m) return !0
    }
    return !1
  }
}

function Gd(i) {
  let t = i.viaduct2;
  if (!t) return null;
  let e = new Map;
  for (let n of t.ways) e.set(n.id, new Tn(n.pts, n.h));
  return (n, s, r) => {
    let o = e.get(n);
    if (!o) return null;
    let a = 1e9,
      c = null;
    for (let l = 0; l <= o.L; l += 1) {
      let h = o.at(l),
        u = (h[0] - s) ** 2 + (h[2] - r) ** 2;
      u < a && (a = u, c = h[1])
    }
    return c
  }
}

function Wd(i, t, e, n) {
  let s = i.viaduct2;
  if (!s) return null;
  let r = new he;
  r.name = "viaduto_centro";
  let o = new Kt,
    a = new Kt,
    c = new Kt,
    l = new Kt,
    h = new Kt,
    u = new Kt,
    d = bt(222, 218, 208),
    f = bt(196, 192, 184),
    m = bt(236, 233, 226),
    x = bt(232, 226, 214),
    g = (n || []).filter(O => {
      let H = O.at(O.L / 2);
      return !0
    }),
    p = (O, H) => {
      let U = 1e9;
      for (let z of g)
        for (let C = 0; C < z.L; C += 2) {
          let B = z.at(C),
            V = Math.hypot(B[0] - O, B[2] - H);
          V < U && (U = V)
        }
      return U
    },
    v = [],
    y = [];
  for (let O of s.ways) {
    let H = Math.min(3.6, O.w / 2 - .4) + 1.4;
    for (let U = 0; U < O.pts.length - 1; U++) y.push([O.id, O.pts[U][0], O.pts[U][1], O.pts[U + 1][0], O.pts[U + 1][1], H])
  }
  let _ = (O, H, U, z = .05) => {
    for (let [C, B, V, $, ht, ft] of y) {
      if (C === O) continue;
      let J = $ - B,
        et = ht - V,
        dt = J * J + et * et || 1,
        ot = ((H - B) * J + (U - V) * et) / dt;
      ot = Math.max(0, Math.min(1, ot));
      let vt = B + J * ot - H,
        xt = V + et * ot - U;
      if (vt * vt + xt * xt < (ft + z) * (ft + z)) return !0
    }
    return !1
  };
  for (let O of s.ways) {
    let H = new Tn(O.pts, O.h),
      U = Math.min(3.6, O.w / 2 - .4),
      z = .45,
      C = U + z,
      B = .62,
      V = H.L,
      $ = dt => {
        let ot = H.at(dt);
        return ot[1] - t.at(ot[0], ot[2])
      },
      ht = dt => {
        let ot = H.at(dt);
        return p(ot[0], ot[2]) < 8.5
      },
      ft = dt => ot => ot + dt;
    xn(a, H, 0, V, 1, -C, C, ft(.06), [1, 1, 1], 8, [0, 1, 0]);
    for (let dt = 1; dt < V - 1; dt += 7) xn(h, H, dt, Math.min(V, dt + 3.5), 1, -.07, .07, ft(.09), bt(236, 186, 40), 1, [0, 1, 0]);
    for (let dt of [-1, 1]) xn(h, H, 0, V, 1, dt * (C - .2), dt * (C - .1), ft(.09), bt(236, 232, 222), 1, [0, 1, 0]);
    let J = [],
      et = null;
    for (let dt = 0; dt <= V; dt += 1) {
      let ot = $(dt) > .3;
      ot && !et && (et = [Math.max(0, dt - 1), dt]), ot && (et[1] = Math.min(V, dt + 1)), !ot && et && (J.push(et), et = null)
    }
    et && J.push(et);
    for (let [dt, ot] of J) {
      for (let xt = dt; xt < ot - 1e-6; xt += 1) {
        let nt = Math.min(ot, xt + 1),
          St = $e(H, (xt + nt) / 2);
        for (let W of [1, -1]) {
          let X = St.c[0] + St.nx * W * (C + .1),
            L = St.c[2] + St.nz * W * (C + .1),
            st = St.c[0] + St.nx * W * (U + .3),
            G = St.c[2] + St.nz * W * (U + .3);
          if (_(O.id, X, L)) continue;
          let Y = k => W * (C + k),
            Q = [
              [Y(0), .06],
              [Y(0), .14],
              [Y(.18), .32],
              [Y(.39), .86],
              [Y(.62 - 0), .86],
              [Y(.62), -.25]
            ],
            at = W > 0 ? Q : Q.slice().reverse();
          Dn(o, H, xt, nt, 1, at, m, 2);
          let q = W * (C + .5),
            R = bt(208, 150, 42),
            T = (k, tt) => {
              let rt = [];
              for (let it = 0; it <= 8; it++) {
                let mt = it / 8 * 6.283;
                rt.push([q + Math.cos(mt) * tt, k + Math.sin(mt) * tt])
              }
              return rt
            };
          Dn(u, H, xt, nt, 1, T(1.32, .045), R), Dn(u, H, xt, nt, 1, T(1.06, .03), R), Math.round(xt) % 2 === 0 && hn(u, St, 0, q, .05, .05, .48, St.c[1] + .86, R), ht((xt + nt) / 2) || Gs(l, H, xt, nt, 1, W * (C + B), k => Math.min(t.at(k[0], k[2]), k[1]) - .5, k => k[1] - .25, [1, 1, 1], 3, W < 0)
        }
      }
      let vt = null;
      for (let xt = dt; xt <= ot; xt += 1) {
        let nt = ht(xt);
        nt && vt === null && (vt = xt), (!nt || xt + 1 > ot) && vt !== null && (P(H, vt, xt, C + B), vt = null)
      }
      for (let xt = dt + 12; xt < ot - 6; xt += 32) v.push([H, xt, C + .3])
    }
  }

  function P(O, H, U, z) {
    xn(o, O, H, U, 1, z, -z, C => C - .35, f, 2, [0, -1, 0]);
    for (let [C, B] of [
        [z, !0],
        [-z, !1]
      ]) Gs(o, O, H, U, 1, C, V => V[1] - 1.25, V => V[1] - .25, m, 2, B);
    for (let C of [-2.8, 0, 2.8]) Dn(o, O, H + .3, U - .3, 1, [
      [C - .2, -.35],
      [C - .2, -1.15],
      [C - .35, -1.3],
      [C + .35, -1.3],
      [C + .2, -1.15],
      [C + .2, -.35]
    ], f, 2);
    for (let C of [H, U]) {
      let B = $e(O, C),
        V = Math.min(t.at(B.c[0], B.c[2]), B.c[1] - 2) - .6,
        $ = B.c[1] - .35 - V;
      hn(l, B, 0, 0, .8, 2 * z + .4, $, V, [1, 1, 1], 3)
    }
    if (U - H > 18) {
      let C = (H + U) / 2,
        B = $e(O, C),
        V = B.c[1] - 1.3;
      hn(o, B, 0, 0, 1.2, 2 * z, .9, V - .9, f, 2);
      for (let $ of [-z * .55, z * .55]) {
        let ht = B.c[0] + B.nx * $,
          ft = B.c[2] + B.nz * $,
          J = t.at(ht, ft) - .3,
          et = new Pt(new be(.45, .45, V - .9 - J, 18), M);
        et.position.set(ht, (V - .9 + J) / 2, ft), et.castShadow = !0, r.add(et)
      }
    }
  }
  var M = new Tt({
    color: 14473423,
    roughness: .85
  });
  for (let [O, H, U] of v) {
    let z = $e(O, H),
      C = z.c[1] + .86,
      B = bt(190, 188, 182);
    hn(o, z, 0, U, .26, .26, 2.5, C, B, 2), hn(o, z, 0, U, .2, .2, 4.2, C + 2.5, B, 2), hn(o, z, 0, U, .14, .14, 2.6, C + 6.7, B, 2), hn(u, z, 0, U - 1, .08, 2, .08, C + 9.1, bt(150, 152, 156)), hn(u, z, 0, U - 2.1, .5, .24, .14, C + 9, bt(235, 235, 228))
  }
  let b = Ci(),
    w = zs(),
    S = ks(),
    E = aa(),
    A = (O, H, U = !0) => {
      let z = new Pt(O.geometry(), H);
      return z.castShadow = U, z.receiveShadow = !0, r.add(z), z
    };
  A(o, new Tt({
    vertexColors: !0,
    map: b.map,
    normalMap: b.normalMap,
    normalScale: new _t(.4, .4),
    roughness: .85,
    side: Xt
  })), A(a, new Tt({
    map: w.map,
    normalMap: w.normalMap,
    normalScale: new _t(.5, .5),
    roughness: .9,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -6
  }), !1), A(c, new Tt({
    map: S.map,
    normalMap: S.normalMap,
    roughness: .9,
    side: Xt
  }), !1), A(l, new Tt({
    color: 14210252,
    map: b.map,
    normalMap: b.normalMap,
    normalScale: new _t(.5, .5),
    roughness: .92,
    side: Xt
  })), A(h, new Tt({
    vertexColors: !0,
    roughness: .6,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -6,
    polygonOffsetUnits: -12
  }), !1), A(u, new Tt({
    vertexColors: !0,
    roughness: .5,
    metalness: .5
  })), e.add(r);
  let N = s.ways.find(O => O.lab === "tabuleiro"),
    D = N.pts[Math.floor(N.pts.length / 2)];
  return {
    group: r,
    center: [D[0], s.T, D[1]]
  }
}
var Xd = Fe(() => {
  Ne();
  Wn();
  _a();
  nh();
  Kn()
});

function Qe(i, t, e, n, s, r, o, a, c, l, h, u) {
  let d = (_, P, M) => [t[0] + n[0] * (s + _) + e[0] * (o + P), M, t[1] + n[1] * (s + _) + e[1] * (o + P)],
    f = -a / 2,
    m = a / 2,
    x = -c / 2,
    g = c / 2,
    p = h + r,
    v = h + r + l,
    y = (_, P, M, b) => i.quad(_, P, M, b, [0, 0], [1, 0], [1, 1], [0, 1], u);
  y(d(f, g, p), d(m, g, p), d(m, g, v), d(f, g, v)), y(d(m, x, p), d(f, x, p), d(f, x, v), d(m, x, v)), y(d(m, g, p), d(m, x, p), d(m, x, v), d(m, g, v)), y(d(f, x, p), d(f, g, p), d(f, g, v), d(f, x, v)), y(d(f, x, v), d(f, g, v), d(m, g, v), d(m, x, v))
}

function ya(i, t, e, n, s, r, o, a, c, l) {
  let h = (m, x, g) => [t[0] + n[0] * (s + m) + e[0] * (r + x), g, t[1] + n[1] * (s + m) + e[1] * (r + x)],
    u = o / 2,
    d = h(0, 0, a + c),
    f = [h(-u, -u, a), h(u, -u, a), h(u, u, a), h(-u, u, a)];
  for (let m = 0; m < 4; m++) i.tri(f[m], f[(m + 1) % 4], d, [0, 0], [1, 0], [.5, 1], l)
}

function qd(i, t, e) {
  let n = i.extras.church,
    s = 1e9,
    r = null;
  for (let W of i.roads)
    if (!(W.hw === "footway" || W.hw === "path"))
      for (let X = 0; X < W.p.length - 1; X++) {
        let L = W.p[X],
          st = W.p[X + 1],
          G = st[0] - L[0],
          Y = st[1] - L[1],
          Q = G * G + Y * Y,
          at = ((n[0] - L[0]) * G + (n[1] - L[1]) * Y) / (Q || 1);
        at = Math.max(0, Math.min(1, at));
        let q = L[0] + G * at,
          R = L[1] + Y * at,
          T = Math.hypot(q - n[0], R - n[1]);
        T < s && (s = T, r = [q, R])
      }
  let o = [r[0] - n[0], r[1] - n[1]],
    a = Math.hypot(...o);
  o = [o[0] / a, o[1] / a];
  let c = [-o[1], o[0]],
    l = Math.max(0, s - 22),
    h = [n[0] + o[0] * l, n[1] + o[1] * l],
    u = t.at(h[0], h[1]) - .2,
    d = new he;
  d.name = "igreja";
  let f = new Kt,
    m = new Kt,
    x = new Kt,
    g = new Kt,
    p = new Kt,
    v = bt(246, 236, 206),
    y = bt(226, 192, 118),
    _ = bt(40, 34, 30),
    P = bt(160, 82, 58),
    M = bt(240, 234, 214),
    b = bt(52, 46, 44),
    w = 12,
    S = 28,
    E = 9.5;
  Qe(f, h, o, c, 0, 0, -4, w, S, E, u, v);
  for (let W = 0; W <= 7; W++) {
    let X = -4 - S / 2 + W * S / 7;
    Qe(m, h, o, c, w / 2, 0, X, .5, .6, E, u, y), Qe(m, h, o, c, -w / 2, 0, X, .5, .6, E, u, y)
  }
  Qe(m, h, o, c, 0, E - .5, -4, w + .6, S + .6, .6, u, y), Qe(m, h, o, c, 0, 0, -4, w + .4, S + .4, .8, u, y);
  for (let W = 0; W < 7; W++) {
    let X = -4 - S / 2 + (W + .5) * S / 7;
    for (let L of [-1, 1]) {
      let st = (G, Y, Q) => [h[0] + c[0] * (L * (w / 2 + .03)) + o[0] * (X + G), u + Q, h[1] + c[1] * (L * (w / 2 + .03)) + o[1] * (X + G)];
      x.quad(st(-.8, 0, 2.5), st(.8, 0, 2.5), st(.8, 0, 6.6), st(-.8, 0, 6.6), [0, 0], [1, 0], [1, 1], [0, 1], bt(60, 70, 95)), x.tri(st(-.8, 0, 6.6), st(.8, 0, 6.6), st(0, 0, 7.8), [0, 0], [1, 0], [.5, 1], bt(60, 70, 95))
    }
  }
  let A = (W, X, L) => [h[0] + c[0] * W + o[0] * X, L, h[1] + c[1] * W + o[1] * X],
    N = E + w / 2 * .75,
    D = -4 - S / 2 - .6,
    O = -4 + S / 2 + .3;
  g.quad(A(-w / 2 - .6, D, u + E), A(-w / 2 - .6, O, u + E), A(0, O, u + N), A(0, D, u + N), [0, 0], [S / 2.4, 0], [S / 2.4, 4], [0, 4], P), g.quad(A(w / 2 + .6, O, u + E), A(w / 2 + .6, D, u + E), A(0, D, u + N), A(0, O, u + N), [0, 0], [S / 2.4, 0], [S / 2.4, 4], [0, 4], P), f.tri(A(-w / 2, O - .3, u + E), A(w / 2, O - .3, u + E), A(0, O - .3, u + N), [0, 0], [1, 0], [.5, 1], v), f.tri(A(w / 2, D + .6, u + E), A(-w / 2, D + .6, u + E), A(0, D + .6, u + N), [0, 0], [1, 0], [.5, 1], v), Qe(f, h, o, c, 0, 0, -4 - S / 2 - 2.5, 8, 5, 7.5, u, v), ya(g, h, o, c, 0, -4 - S / 2 - 2.5, 8.6, u + 7.5, 2.5, P);
  let H = -4 + S / 2 + 1.8,
    U = 5.4;
  Qe(f, h, o, c, 0, 0, H, U, U, 23.6, u, v);
  for (let [W, X] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1]
    ]) Qe(m, h, o, c, W * (U / 2 - .05), 0, H + X * (U / 2 - .05), .7, .7, 23.8, u, y);
  for (let [W, X] of [
      [10.6, .7],
      [17.6, .6],
      [23.4, .7]
    ]) Qe(m, h, o, c, 0, W, H, U + .7, U + .7, X, u, y), Qe(m, h, o, c, 0, W - .25, H, U + .35, U + .35, .25, u, y);
  let z = (W, X, L = 0) => A(W, H + U / 2 + .03 + L, u + X),
    C = (W, X, L, st, G, Y, Q = 0) => {
      let at = st / 2,
        q = [];
      for (let T = 0; T <= 8; T++) {
        let tt = T / 8 * Math.PI / 3;
        q.push([X - at + st * (1 - Math.cos(tt)) * .5 / (1 - Math.cos(Math.PI / 3)) * .5 * 2 * .5 + 0, L + G + Math.sin(tt) * at * 1.15])
      }
      W.quad(z(X - at, L, Q), z(X + at, L, Q), z(X + at, L + G, Q), z(X - at, L + G, Q), [0, 0], [1, 0], [1, 1], [0, 1], Y);
      let R = 10;
      for (let T = 0; T < R; T++) {
        let k = T / R,
          tt = (T + 1) / R,
          rt = X - at + at * k,
          it = X - at + at * tt,
          mt = L + G + Math.sqrt(Math.max(0, 1 - (1 - k) ** 2)) * at * 1.25,
          ut = L + G + Math.sqrt(Math.max(0, 1 - (1 - tt) ** 2)) * at * 1.25;
        W.quad(z(rt, L + G, Q), z(it, L + G, Q), z(it, ut, Q), z(rt, mt, Q), [0, 0], [1, 0], [1, 1], [0, 1], Y), W.quad(z(2 * X - it, L + G, Q), z(2 * X - rt, L + G, Q), z(2 * X - rt, mt, Q), z(2 * X - it, ut, Q), [0, 0], [1, 0], [1, 1], [0, 1], Y)
      }
    };
  C(m, 0, 0, 3.4, 3.6, y, .01), C(x, 0, 0, 2.6, 3.3, b, .03);
  for (let W of [-1, 1]) {
    let X = A(W * 1.75, H + U / 2 + .35, 0),
      L = new Pt(new be(.22, .24, 3.6, 14), new Tt({
        color: 16052714,
        roughness: .6
      }));
    L.position.set(X[0], u + 1.8, X[2]), L.castShadow = !0, d.add(L);
    let st = new Pt(new He(.6, .25, .6), new Tt({
      color: 16052714
    }));
    st.position.set(X[0], u + 3.7, X[2]), d.add(st)
  }
  let B = (W, X, L, st, G, Y) => {
    for (let Q = 0; Q < 18; Q++) {
      let at = Q / 18 * Math.PI * 2,
        q = (Q + 1) / 18 * Math.PI * 2;
      W.tri(z(X, L, Y), z(X + Math.cos(at) * st, L + Math.sin(at) * st, Y), z(X + Math.cos(q) * st, L + Math.sin(q) * st, Y), [0, 0], [1, 0], [1, 1], G)
    }
  };
  for (let [W, X] of [
      [0, .55],
      [0, -.55],
      [.55, 0],
      [-.55, 0]
    ]) B(m, W, 7.4 + X, .78, y, .02);
  for (let [W, X] of [
      [0, .5],
      [0, -.5],
      [.5, 0],
      [-.5, 0]
    ]) B(x, W, 7.4 + X, .55, b, .04);
  Qe(m, h, o, c, 0, 4.9, H + U / 2 + .06, .22, .12, 1.4, u, y), Qe(m, h, o, c, 0, 5.8, H + U / 2 + .06, .9, .12, .22, u, y), C(m, 0, 12.6, 1.5, 2.6, y, .01), C(x, 0, 12.75, 1.1, 2.4, b, .03);
  for (let W of [-1, 1]) {
    let X = (L, st) => A(W * (U / 2 + .03), H + L, u + st);
    x.quad(X(-.55, 12.75), X(.55, 12.75), X(.55, 15.2), X(-.55, 15.2), [0, 0], [1, 0], [1, 1], [0, 1], b), x.tri(X(-.55, 15.2), X(.55, 15.2), X(0, 16.1), [0, 0], [1, 0], [.5, 1], b)
  }
  B(m, 0, 20.6, .85, y, .02), B(x, 0, 20.6, .6, b, .04), ya(p, h, o, c, 0, H, U - .4, u + 24.1, 10.5, M);
  for (let [W, X] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1]
    ]) Qe(p, h, o, c, W * (U / 2 - .1), 24.1, H + X * (U / 2 - .1), .7, .7, 1, u, M), ya(p, h, o, c, W * (U / 2 - .1), H + X * (U / 2 - .1), .75, u + 25.1, 2.4, M);
  for (let W of [-1, 1]) {
    let X = W * 4,
      L = (st, G) => A(X + st, -4 + S / 2 + .03, u + G);
    x.quad(L(-.75, 2.2), L(.75, 2.2), L(.75, 6.4), L(-.75, 6.4), [0, 0], [1, 0], [1, 1], [0, 1], bt(70, 52, 40)), x.tri(L(-.75, 6.4), L(.75, 6.4), L(0, 7.6), [0, 0], [1, 0], [.5, 1], bt(70, 52, 40)), Qe(m, h, o, c, W * (w / 2 - .3), E, -4 + S / 2 - .3, .8, .8, 1.2, u, y), ya(m, h, o, c, W * (w / 2 - .3), -4 + S / 2 - .3, .85, u + E + 1.2, 1.6, y)
  }
  Qe(m, h, o, c, 0, 34.5, H, .18, .18, 2.2, u, bt(240, 240, 236)), Qe(m, h, o, c, 0, 35.7, H, 1.1, .18, .18, u, bt(240, 240, 236)), Qe(m, h, o, c, 0, 0, H + 5, 9, 4, .35, u, bt(200, 196, 188));
  let V = new Kt,
    $ = new Kt,
    ht = bt(240, 240, 240),
    ft = 10,
    J = -4 - S / 2 - 5,
    et = H + 8,
    dt = [
      [-ft, J],
      [-ft, et],
      [-1.8, et],
      [1.8, et],
      [ft, et],
      [ft, J]
    ];
  for (let W = 0; W < dt.length - 1; W++) {
    if (W === 1) continue;
    let X = dt[W],
      L = dt[W + 1],
      st = Math.hypot(L[0] - X[0], L[1] - X[1]);
    for (let q = 0; q <= st; q += .25) {
      let R = q / st,
        T = X[0] + (L[0] - X[0]) * R,
        k = X[1] + (L[1] - X[1]) * R,
        tt = A(T, k, 0),
        rt = t.at(tt[0], tt[2]);
      V.quad([tt[0] - .012, rt + .95, tt[2]], [tt[0] + .012, rt + .95, tt[2]], [tt[0] + .012, rt + 2.2, tt[2]], [tt[0] - .012, rt + 2.2, tt[2]], [0, 0], [1, 0], [1, 1], [0, 1], ht)
    }
    let G = A(X[0], X[1], 0),
      Y = A(L[0], L[1], 0),
      Q = t.at(G[0], G[2]),
      at = t.at(Y[0], Y[2]);
    for (let q of [1, 2.15]) V.quad([G[0], Q + q, G[2]], [Y[0], at + q, Y[2]], [Y[0], at + q + .06, Y[2]], [G[0], Q + q + .06, G[2]], [0, 0], [1, 0], [1, 1], [0, 1], ht);
    $.quad([G[0], Q - .3, G[2]], [Y[0], at - .3, Y[2]], [Y[0], at + .85, Y[2]], [G[0], Q + .85, G[2]], [0, 0], [st / 1.5, 0], [st / 1.5, .8], [0, .8], bt(150, 150, 148)), V.quad([G[0], Q + .85, G[2]], [Y[0], at + .85, Y[2]], [Y[0], at + .98, Y[2]], [G[0], Q + .98, G[2]], [0, 0], [1, 0], [1, 1], [0, 1], bt(245, 245, 242))
  }
  let ot = (W, X, L = {}) => {
    let st = new Pt(W.geometry(), new Tt(Object.assign({
      vertexColors: !0,
      map: X,
      roughness: .85,
      side: Xt
    }, L)));
    st.castShadow = !0, st.receiveShadow = !0, d.add(st)
  };
  ot(f, jl()), ot(m, null), ot(x, null, {
    roughness: .3,
    metalness: .2
  }), ot(g, pd()), ot(p, jl(), {
    roughness: .8,
    metalness: 0
  }), ot(V, null), ot($, void 0 ? (void 0)() : null, {
    roughness: .6
  });
  let vt = new Kt,
    xt = bt(205, 200, 190),
    nt = [A(-ft, J, 0), A(ft, J, 0), A(ft, et, 0), A(-ft, et, 0)];
  for (let W = 0; W < 10; W++)
    for (let X = 0; X < 10; X++) {
      let L = (st, G) => {
        let Y = [nt[0][0] + (nt[1][0] - nt[0][0]) * st + (nt[3][0] - nt[0][0]) * G, 0, nt[0][2] + (nt[1][2] - nt[0][2]) * st + (nt[3][2] - nt[0][2]) * G];
        return Y[1] = t.at(Y[0], Y[2]) + .12, Y
      };
      vt.quad(L(W / 10, X / 10), L(W / 10, (X + 1) / 10), L((W + 1) / 10, (X + 1) / 10), L((W + 1) / 10, X / 10), [0, 0], [0, 1], [1, 1], [1, 0], xt)
    }
  let St = new Pt(vt.geometry(), new Tt({
    vertexColors: !0,
    map: dd(),
    roughness: .9,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -5,
    polygonOffsetUnits: -10
  }));
  return St.receiveShadow = !0, d.add(St), e.add(d), {
    group: d,
    center: h,
    radius: Math.hypot(ft, (et - J) / 2) + 2,
    front: o,
    frame: {
      C: h,
      f: o,
      r: c,
      fz0: J,
      fz1: et,
      fx: ft
    }
  }
}

function Yd(i, t, e) {
  let n = new he;
  n.name = "praca";
  let s = i.extras.park;
  if (!s) return null;
  let r = s.slice();
  r.length > 2 && r[0][0] === r[r.length - 1][0] && r[0][1] === r[r.length - 1][1] && r.pop();
  let o = ci.triangulateShape(r.map(C => new _t(C[0], C[1])), []),
    a = new Kt,
    c = -1e9;
  for (let C of r) c = Math.max(c, t.at(C[0], C[1]));
  let l = (C, B) => t.at(C, B) + .3,
    h = 0,
    u = 0;
  for (let C of r) h += C[0], u += C[1];
  h /= r.length, u /= r.length;
  let d = 0,
    f = [1, 0];
  for (let C = 0; C < r.length; C++) {
    let B = r[C],
      V = r[(C + 1) % r.length],
      $ = Math.hypot(V[0] - B[0], V[1] - B[1]);
    $ > d && (d = $, f = [(V[0] - B[0]) / $, (V[1] - B[1]) / $])
  }
  let m = (C, B) => {
      let V = 1e9;
      for (let $ = 0; $ < r.length; $++) {
        let ht = r[$],
          ft = r[($ + 1) % r.length],
          J = ft[0] - ht[0],
          et = ft[1] - ht[1],
          dt = J * J + et * et,
          ot = ((C - ht[0]) * J + (B - ht[1]) * et) / dt;
        ot = Math.max(0, Math.min(1, ot)), V = Math.min(V, Math.hypot(ht[0] + J * ot - C, ht[1] + et * ot - B))
      }
      return V
    },
    x = i.extras.fountains || [],
    g = (C, B) => {
      if (m(C, B) < 3.2) return !1;
      let V = C - h,
        $ = B - u,
        ht = V * f[0] + $ * f[1],
        ft = -V * f[1] + $ * f[0];
      if (Math.abs(ht) < 1.8 || Math.abs(ft) < 1.8) return !1;
      for (let J of x)
        if (Math.hypot(J[0] - C, J[1] - B) < 8) return !1;
      return !0
    },
    p = new Kt,
    v = (C, B, V, $) => {
      if (Math.max(Math.hypot(C[0] - B[0], C[1] - B[1]), Math.hypot(B[0] - V[0], B[1] - V[1]), Math.hypot(C[0] - V[0], C[1] - V[1])) < .7 || $ > 11) {
        let dt = [C[0], l(C[0], C[1]), C[1]],
          ot = [B[0], l(B[0], B[1]), B[1]],
          vt = [V[0], l(V[0], V[1]), V[1]],
          xt = (C[0] + B[0] + V[0]) / 3,
          nt = (C[1] + B[1] + V[1]) / 3;
        g(xt, nt) ? (dt[1] += .08, ot[1] += .08, vt[1] += .08, p.tri(dt, vt, ot, [C[0] / 3, C[1] / 3], [V[0] / 3, V[1] / 3], [B[0] / 3, B[1] / 3], bt(118, 148, 74))) : a.tri(dt, vt, ot, [C[0] / 4, C[1] / 4], [V[0] / 4, V[1] / 4], [B[0] / 4, B[1] / 4], [1, 1, 1]);
        return
      }
      let ft = [(C[0] + B[0]) / 2, (C[1] + B[1]) / 2],
        J = [(B[0] + V[0]) / 2, (B[1] + V[1]) / 2],
        et = [(V[0] + C[0]) / 2, (V[1] + C[1]) / 2];
      v(C, ft, et, $ + 1), v(ft, B, J, $ + 1), v(et, J, V, $ + 1), v(ft, J, et, $ + 1)
    };
  for (let [C, B, V] of o) v(r[C], r[B], r[V], 0);
  for (let C = 0; C < r.length; C++) {
    let B = r[C],
      V = r[(C + 1) % r.length];
    a.quad([B[0], t.at(B[0], B[1]) - .2, B[1]], [V[0], t.at(V[0], V[1]) - .2, V[1]], [V[0], l(V[0], V[1]), V[1]], [B[0], l(B[0], B[1]), B[1]], [0, 0], [1, 0], [1, .1], [0, .1], bt(170, 166, 160))
  }
  let y = new Pt(a.geometry(), new Tt({
    vertexColors: !0,
    map: fd(),
    roughness: .85,
    side: Xt,
    polygonOffset: !0,
    polygonOffsetFactor: -6,
    polygonOffsetUnits: -12
  }));
  y.receiveShadow = !0, n.add(y);
  {
    let C = oa(),
      B = new Pt(p.geometry(), new Tt({
        vertexColors: !0,
        map: C.map,
        roughness: 1,
        side: Xt,
        polygonOffset: !0,
        polygonOffsetFactor: -7,
        polygonOffsetUnits: -14
      }));
    B.receiveShadow = !0, n.add(B)
  }
  let _ = new Tt({
      color: 4169672,
      roughness: .3
    }),
    P = new Tt({
      color: 8376544,
      roughness: .05,
      metalness: .1,
      transparent: !0,
      opacity: .85
    }),
    M = new Tt({
      color: 15921906,
      roughness: .6
    }),
    b = new Tt({
      color: 2845872,
      roughness: .5
    });
  for (let [C, B] of i.extras.fountains) {
    let V = l(C, B),
      $ = new Pt(new be(5.2, 5.2, .7, 40, 1, !0), _);
    $.position.set(C, V + .3, B), n.add($);
    let ht = new Pt(new Xi(5.2, .22, 8, 40), new Tt({
      color: 15263976
    }));
    ht.rotation.x = Math.PI / 2, ht.position.set(C, V + .62, B), n.add(ht);
    let ft = new Pt(new zo(5.1, 40), P);
    ft.rotation.x = -Math.PI / 2, ft.position.set(C, V + .4, B), n.add(ft);
    let J = new Pt(new Ps(.35, 1.6, 12), new Tt({
      color: 14743295,
      transparent: !0,
      opacity: .6
    }));
    J.position.set(C, V + 1.2, B), n.add(J);
    let et = new he,
      dt = new Xi(5.2, .12, 6, 24, Math.PI);
    for (let vt of [-.8, .8]) {
      let xt = new Pt(dt, b);
      xt.position.set(0, -4.2, vt), xt.scale.set(1, .25, 1), et.add(xt);
      let nt = new Pt(new Xi(5.2, .08, 6, 24, Math.PI), b);
      nt.position.set(0, -3.4, vt), nt.scale.set(1, .25, 1), et.add(nt)
    }
    let ot = new Pt(new Xi(5.2, .18, 4, 24, Math.PI), M);
    ot.scale.set(1, .25, 8), ot.position.set(0, -4.3, 0), et.add(ot), et.position.set(C, V + 4.6, B), et.rotation.y = qt(C) * 3, n.add(et)
  }
  let w = new He(1.8, .45, .5),
    S = new Tt({
      color: 8018492,
      roughness: .8
    }),
    E = new be(.06, .09, 4, 6),
    A = new Tt({
      color: 3355443
    }),
    N = new In(.28, 10, 8),
    D = new Tt({
      color: 16777215,
      emissive: 16773836,
      emissiveIntensity: .3
    }),
    O = 0;
  for (let C = 0; C < r.length; C++) {
    let B = r[C],
      V = r[(C + 1) % r.length],
      $ = Math.hypot(V[0] - B[0], V[1] - B[1]),
      ht = (V[0] - B[0]) / $,
      ft = (V[1] - B[1]) / $,
      J = 0,
      et = 0;
    for (let dt of r) J += dt[0], et += dt[1];
    J /= r.length, et /= r.length;
    for (let dt = 4; dt < $ - 2; dt += 9) {
      let ot = B[0] + ht * dt,
        vt = B[1] + ft * dt,
        xt = J - ot,
        nt = et - vt,
        St = Math.hypot(xt, nt),
        W = ot + xt / St * 2.2,
        X = vt + nt / St * 2.2,
        L = l(W, X);
      if (O++ % 2 === 0) {
        let st = new Pt(w, S);
        st.position.set(W, L + .45, X), st.rotation.y = -Math.atan2(ft, ht), st.castShadow = !0, n.add(st)
      } else {
        let st = new Pt(E, A);
        st.position.set(W, L + 2, X), n.add(st);
        let G = new Pt(N, D);
        G.position.set(W, L + 4.1, X), n.add(G)
      }
    }
  }
  e.add(n);
  let H = [],
    U = 0,
    z = 0;
  for (let C of r) U += C[0], z += C[1];
  U /= r.length, z /= r.length;
  for (let C = 0; C < r.length; C += Math.max(1, Math.floor(r.length / 6))) {
    let B = r[C];
    H.push([B[0] + (U - B[0]) * .2, B[1] + (z - B[1]) * .2])
  }
  return {
    group: n,
    palms: H,
    center: [U, z]
  }
}

function Zd(i, t, e) {
  let n = new he;
  n.name = "campos";
  for (let s of i.extras.pitches) {
    if (s.k === "track" || s.k === "cemetery") continue;
    let r = s.p.slice();
    r[0][0] === r[r.length - 1][0] && r.pop();
    let o = ha(r),
      a = o.ux,
      c = o.uz,
      l = -c,
      h = a,
      u = 5212730,
      d = null;
    if (s.k === "pitch") {
      let p = document.createElement("canvas");
      p.width = 512, p.height = 320;
      let v = p.getContext("2d");
      for (let y = 0; y < 10; y++) v.fillStyle = y % 2 ? "#4f8f3c" : "#579a42", v.fillRect(y * 51.2, 0, 51.2, 320);
      v.strokeStyle = "#f4f4f4", v.lineWidth = 4, v.strokeRect(12, 12, 488, 296), v.beginPath(), v.moveTo(256, 12), v.lineTo(256, 308), v.stroke(), v.beginPath(), v.arc(256, 160, 40, 0, 7), v.stroke(), v.strokeRect(12, 95, 60, 130), v.strokeRect(440, 95, 60, 130), d = new pn(p), d.colorSpace = Ce, u = 16777215
    } else s.k === "swimming_pool" ? u = 4175584 : s.k === "cemetery" ? u = 12169892 : s.k === "track" && (u = 10507578);
    let f = new Kt,
      m = 12,
      x = (p, v) => {
        let y = o.cx + a * o.a * p + l * o.b * v,
          _ = o.cz + c * o.a * p + h * o.b * v;
        return [y, t.at(y, _) + .16, _]
      };
    for (let p = 0; p < m; p++)
      for (let v = 0; v < m; v++) {
        let y = -1 + 2 * p / m,
          _ = -1 + 2 * (p + 1) / m,
          P = -1 + 2 * v / m,
          M = -1 + 2 * (v + 1) / m;
        f.quad(x(y, P), x(y, M), x(_, M), x(_, P), [(y + 1) / 2, (P + 1) / 2], [(y + 1) / 2, (M + 1) / 2], [(_ + 1) / 2, (M + 1) / 2], [(_ + 1) / 2, (P + 1) / 2], [1, 1, 1])
      }
    let g = new Pt(f.geometry(), new Tt({
      color: u,
      map: d,
      roughness: s.k === "swimming_pool" ? .1 : .95,
      side: Xt,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -8
    }));
    if (g.receiveShadow = !0, n.add(g), s.k === "cemetery") {
      let p = new He(1, .8, 2.2),
        v = Math.floor(o.a * o.b * 4 / 9),
        y = new Ve(p, new Tt({
          color: 15789800,
          roughness: .8
        }), v),
        _ = new ue,
        P = 0;
      for (let M = -o.a + 2; M < o.a - 2 && P < v; M += 2.2)
        for (let b = -o.b + 2; b < o.b - 2 && P < v; b += 3.4) {
          if (qt(M * 7 + b) < .15) continue;
          let w = o.cx + a * M + l * b,
            S = o.cz + c * M + h * b;
          _.makeRotationY(-Math.atan2(c, a)), _.setPosition(w, t.at(w, S) + .4, S), y.setMatrixAt(P++, _)
        }
      y.count = P, y.castShadow = !0, n.add(y)
    }
  }
  return e.add(n), n
}
var $d = Fe(() => {
  Ne();
  Wn();
  da();
  Kn()
});

function l1(i) {
  let t = new Gi;
  t.moveTo(i[0][0], i[0][1]);
  for (let e = 1; e < i.length; e++) t.lineTo(i[e][0], i[e][1]);
  return t.closePath(), t
}

function Dr(i, t) {
  let e = i.attributes.position.count,
    n = new Float32Array(e * 3);
  for (let s = 0; s < e; s++) n[s * 3] = t[0], n[s * 3 + 1] = t[1], n[s * 3 + 2] = t[2];
  return i.setAttribute("color", new ae(n, 3)), i
}

function Ea(i) {
  i = i.map(a => a.index ? a.toNonIndexed() : a);
  let t = i.reduce((a, c) => a + c.attributes.position.count, 0),
    e = new Float32Array(t * 3),
    n = new Float32Array(t * 3),
    s = new Float32Array(t * 3),
    r = 0;
  for (let a of i) a.attributes.normal || a.computeVertexNormals(), e.set(a.attributes.position.array, r * 3), n.set(a.attributes.normal.array, r * 3), s.set(a.attributes.color.array, r * 3), r += a.attributes.position.count;
  let o = new pe;
  return o.setAttribute("position", new ae(e, 3)), o.setAttribute("normal", new ae(n, 3)), o.setAttribute("color", new ae(s, 3)), o
}

function jn(i, t, e, n) {
  let s = new Is(l1(i), {
    depth: t - 2 * e,
    bevelEnabled: e > 0,
    bevelThickness: e,
    bevelSize: e,
    bevelSegments: 2,
    curveSegments: 2,
    steps: 1
  });
  return s.translate(0, 0, -(t - 2 * e) / 2), Dr(s, n)
}

function Sa(i, t, e, n, s, r) {
  for (let o of t)
    for (let a of [-s, s]) {
      let c = new be(e, e, n, r ? 8 : 14);
      c.rotateX(Math.PI / 2), c.translate(o, e, a), i.push(Dr(c, h1));
      let l = new be(e * .62, e * .62, n + .02, r ? 6 : 10);
      l.rotateX(Math.PI / 2), l.translate(o, e, a), i.push(Dr(l, u1))
    }
}

function tn(i, t, e, n, s, r, o, a) {
  let c = new He(t, e, n);
  c.translate(s, r, o), i.push(Dr(c, a))
}

function f1(i) {
  let t = [];
  return t.push(jn([
    [-1.95, .32],
    [1.92, .32],
    [1.98, .55],
    [1.9, .82],
    [1.2, .95],
    [.55, 1],
    [-1.9, 1.02],
    [-1.98, .7]
  ], 1.68, .06, Ki)), t.push(jn([
    [.62, .98],
    [-.25, 1.42],
    [-1.55, 1.43],
    [-1.86, 1]
  ], 1.68 - .12, .05, ih)), t.push(jn([
    [.5, 1.06],
    [-.28, 1.45],
    [-1.5, 1.46],
    [-1.5, 1.4],
    [-.3, 1.39],
    [.4, 1.04]
  ], 1.68 - .06, .03, Ki)), Sa(t, [1.25, -1.25], .31, .2, .72, i), tn(t, .04, .12, 1.3, 1.99, .7, 0, sh), tn(t, .04, .14, 1.4, -2, .82, 0, va), tn(t, .03, .12, .5, -2.01, .55, 0, d1), tn(t, .06, .16, 1.6, 1.98, .42, 0, Ws), Ea(t)
}

function p1(i) {
  let t = [];
  return t.push(jn([
    [-2.25, .33],
    [2.15, .33],
    [2.22, .56],
    [2.12, .8],
    [1.2, .92],
    [-1.6, .98],
    [-2.22, .95],
    [-2.28, .62]
  ], 1.74, .06, Ki)), t.push(jn([
    [.95, .93],
    [.15, 1.38],
    [-.95, 1.39],
    [-1.62, .97]
  ], 1.74 - .12, .05, ih)), t.push(jn([
    [.82, 1],
    [.12, 1.41],
    [-.92, 1.42],
    [-.92, 1.36],
    [.1, 1.35],
    [.74, .98]
  ], 1.74 - .06, .03, Ki)), Sa(t, [1.38, -1.4], .31, .2, .75, i), tn(t, .04, .12, 1.3, 2.23, .7, 0, sh), tn(t, .04, .12, 1.5, -2.29, .84, 0, va), tn(t, .06, .16, 1.6, 2.2, .42, 0, Ws), Ea(t)
}

function m1(i) {
  let t = [];
  return t.push(jn([
    [-2.5, .42],
    [2.4, .42],
    [2.46, .7],
    [2.35, 1],
    [1.4, 1.08],
    [-2.5, 1.08]
  ], 1.8, .06, Ki)), t.push(jn([
    [1.3, 1.06],
    [.7, 1.62],
    [-.6, 1.64],
    [-.75, 1.06]
  ], 1.8 - .1, .05, ih)), t.push(jn([
    [1.18, 1.1],
    [.66, 1.66],
    [-.58, 1.67],
    [-.58, 1.6],
    [.62, 1.59],
    [1.1, 1.08]
  ], 1.8 - .04, .03, Ki)), tn(t, 1.65, .08, 1.6, -1.65, 1, 0, Ws), Sa(t, [1.55, -1.6], .38, .24, .78, i), tn(t, .04, .14, 1.4, 2.47, .85, 0, sh), tn(t, .04, .2, .2, -2.51, .9, .72, va), tn(t, .04, .2, .2, -2.51, .9, -.72, va), tn(t, .08, .2, 1.7, 2.44, .52, 0, Ws), Ea(t)
}

function g1(i) {
  let t = [];
  Sa(t, [.68, -.68], .3, .1, 0, i), t.push(jn([
    [-.75, .55],
    [.55, .62],
    [.7, .95],
    [.3, .95],
    [-.1, .82],
    [-.8, .85]
  ], .32, .04, Ki)), tn(t, .5, .12, .3, -.35, .92, 0, Ws), tn(t, .06, .06, .7, .62, 1.1, 0, Ws), tn(t, .3, .55, .38, -.25, 1.25, 0, [.25, .3, .4]);
  let e = new In(.15, i ? 6 : 10, i ? 5 : 8);
  return e.translate(-.18, 1.68, 0), t.push(Dr(e, [.9, .9, .9])), tn(t, .4, .12, .12, 0, 1.15, .18, [.25, .3, .4]), tn(t, .4, .12, .12, 0, 1.15, -.18, [.25, .3, .4]), Ea(t)
}
var Ki, ih, h1, u1, sh, va, Ws, d1, Lr, Ma, Jd = Fe(() => {
  Ne();
  Wn();
  Ki = [1, 1, 1], ih = [.05, .06, .07], h1 = [.035, .035, .035], u1 = [.55, .55, .56], sh = [2.2, 2.2, 2], va = [.5, .03, .03], Ws = [.08, .08, .08], d1 = [2, 2, 2];
  Lr = [
    [.92, .92, .92],
    [.92, .92, .92],
    [.92, .92, .92],
    [.62, .63, .66],
    [.62, .63, .66],
    [.04, .04, .05],
    [.04, .04, .05],
    [.32, .33, .35],
    [.5, .05, .04],
    [.06, .14, .36],
    [.78, .76, .7],
    [.2, .24, .2]
  ], Ma = class {
    constructor(t, e, n, s, r, o = .13, a = "high") {
      this.H = e, this.hf = s;
      let c = a === "low" || a === "medium";
      this.roads = t.roads.filter(v => !["footway", "path", "track", "cycleway", "steps"].includes(v.hw) && v.s !== "dirt" && v.p.length > 1);
      let l = v => Math.round(v[0] * 2) + "," + Math.round(v[1] * 2);
      this.key = l, this.idx = new Map, this.roads.forEach((v, y) => {
        v.len = [];
        for (let _ = 0; _ < v.p.length - 1; _++) v.len.push(Math.hypot(v.p[_ + 1][0] - v.p[_][0], v.p[_ + 1][1] - v.p[_][1]));
        v.p.forEach((_, P) => {
          let M = l(_);
          this.idx.has(M) || this.idx.set(M, []), this.idx.get(M).push([y, P])
        })
      });
      let h = this.roads.map(v => (v.s === "asphalt" ? 3 : 1) * v.len.reduce((y, _) => y + _, 0)),
        u = h.reduce((v, y) => v + y, 0);
      this.geos = [f1(c), p1(c), m1(c), g1(c)];
      let d = [.42, .2, .16, .22],
        f = v => {
          let y = 0;
          for (let _ = 0; _ < 4; _++)
            if (y += d[_], v < y) return _;
          return 0
        };
      this.cars = [];
      for (let v = 0; v < r; v++) {
        let y = qt(v * 3.7 + 1) * u,
          _ = 0;
        for (; y > h[_] && _ < h.length - 1;) y -= h[_], _++;
        let P = this.roads[_],
          M = Math.floor(qt(v * 9.1) * (P.p.length - 1)),
          b = P.o || qt(v * 1.3) < .5 ? 1 : -1;
        this.cars.push({
          ri: _,
          i: b > 0 ? M : M + 1,
          t: qt(v * 5.5),
          dir: b,
          v: 0,
          type: f(qt(v * 4.4)),
          col: Lr[Math.floor(qt(v * 2.2) * Lr.length)]
        })
      }
      let m = new Tt({
        vertexColors: !0,
        roughness: .3,
        metalness: .45
      });
      this.mat = m, this.mesh = new he, this.mesh.name = "carros", n.add(this.mesh), this.meshes = this.geos.map((v, y) => {
        let _ = this.cars.filter(M => M.type === y).length,
          P = new Ve(v, m, Math.max(1, _));
        return P.count = _, P.castShadow = !0, P.receiveShadow = !0, this.mesh.add(P), P
      });
      let x = new Qt,
        g = [0, 0, 0, 0];
      this.cars.forEach(v => {
        v.slot = g[v.type]++, x.setRGB(...v.type === 3 ? [.6 + .4 * qt(v.slot), .1, .1] : v.col), this.meshes[v.type].setColorAt(v.slot, x)
      }), this.M = new ue, this.Q = new ze, this.P = new F, this.S = new F(1, 1, 1), this.Y = new F(0, 1, 0), this.E = new wn, this.tick(.01);
      let p = [
        [],
        [],
        []
      ];
      this.roads.forEach((v, y) => {
        if (!(!["residential", "tertiary", "unclassified"].includes(v.hw) || v.b || v.id === 1314627854 || v.id === 1314627855))
          for (let _ = 0; _ < v.p.length - 1; _++) {
            let P = v.len[_],
              M = v.p[_],
              b = v.p[_ + 1],
              w = (b[0] - M[0]) / P,
              S = (b[1] - M[1]) / P;
            for (let E = 8; E < P - 8; E += 6)
              for (let A of [-1, 1]) {
                if (qt(y * 31 + _ * 7 + E * 1.7 + A) > o) continue;
                let N = A * (v.w / 2 - 1.1),
                  D = M[0] + w * E - S * N,
                  O = M[1] + S * E + w * N;
                if (globalThis.__noPark && globalThis.__noPark(D, O)) continue;
                let H = qt(y + E * .3 + A);
                p[H < .55 ? 0 : H < .8 ? 1 : 2].push([D, O, Math.atan2(S, w) + (qt(E + y) < .5 ? 0 : Math.PI), qt(y + E)])
              }
          }
      }), this.parked = new he, p.forEach((v, y) => {
        if (!v.length) return;
        let _ = new Ve(this.geos[y], m, v.length);
        v.forEach(([P, M, b, w], S) => {
          this.Q.setFromAxisAngle(this.Y, -b), this.P.set(P, e.at(P, M) + .1, M), this.M.compose(this.P, this.Q, this.S), _.setMatrixAt(S, this.M), x.setRGB(...Lr[Math.floor(w * Lr.length) % Lr.length]), _.setColorAt(S, x)
        }), _.castShadow = !0, _.receiveShadow = !0, this.parked.add(_)
      }), n.add(this.parked)
    }
    speed(t, e) {
      return (e && e.type === 3 ? 1.1 : 1) * (t.hw === "trunk" ? 15 : t.hw === "tertiary" || t.hw === "trunk_link" ? 10 : 7)
    }
    tick(t) {
      let e = this.M;
      this.cars.forEach((n, s) => {
        let r = this.roads[n.ri],
          o = this.speed(r, n) * (.8 + .4 * qt(s));
        n.v += (o - n.v) * Math.min(1, t * .8);
        let a = n.v * t,
          c = 0;
        for (; a > 0 && c++ < 20;) {
          let w = n.i,
            S = n.i + n.dir;
          if (S < 0 || S >= r.p.length) {
            this.junction(n), r = this.roads[n.ri];
            continue
          }
          let E = r.len[Math.min(w, S)],
            A = (1 - n.t) * E;
          a < A ? (n.t += a / E, a = 0) : (a -= A, n.i = S, n.t = 0, this.junction(n, !0), r = this.roads[n.ri])
        }
        r = this.roads[n.ri];
        let l = n.i,
          h = n.i + n.dir;
        (h < 0 || h >= r.p.length) && (h = l, l = l - n.dir);
        let u = r.p[l],
          d = r.p[h],
          f = u[0] + (d[0] - u[0]) * n.t,
          m = u[1] + (d[1] - u[1]) * n.t,
          x = d[0] - u[0],
          g = d[1] - u[1],
          p = Math.hypot(x, g) || 1,
          v = r.o ? 0 : Math.min(1.8, r.w / 4) * (n.type === 3 ? 1.25 : 1),
          y = f - g / p * v,
          _ = m + x / p * v,
          P = this.hf(r, y, _),
          M = this.hf(r, y + x / p * 2, _ + g / p * 2),
          b = this.hf(r, y - x / p * 2, _ - g / p * 2);
        this.E.set(0, -Math.atan2(g, x), Math.atan2(M - b, 4), "YXZ"), this.Q.setFromEuler(this.E), this.P.set(y, P, _), e.compose(this.P, this.Q, this.S), this.meshes[n.type].setMatrixAt(n.slot, e)
      }), this.meshes.forEach(n => n.instanceMatrix.needsUpdate = !0)
    }
    junction(t, e) {
      let n = this.roads[t.ri],
        s = n.p[t.i],
        r = this.idx.get(this.key(s)) || [],
        o = [];
      for (let [c, l] of r) {
        let h = this.roads[c];
        l + 1 < h.p.length && !(c === t.ri && t.dir < 0 && l === t.i) && o.push([c, l, 1]), l - 1 >= 0 && !h.o && !(c === t.ri && t.dir > 0 && l === t.i) && o.push([c, l, -1])
      }
      if (e) {
        let c = t.i + t.dir;
        if (c >= 0 && c < n.p.length && (o.length <= 1 || Math.random() < .7)) return
      }
      if (!o.length) {
        t.dir = n.o ? 1 : -t.dir, n.o && (t.i = 0);
        return
      }
      let a = o[Math.floor(Math.random() * o.length)];
      t.ri = a[0], t.i = a[1], t.dir = a[2], t.t = 0
    }
  }
});
var ba, Kd = Fe(() => {
  Ne();
  ba = class {
    constructor(t) {
      this.root = t, this.items = [], this.v = new F
    }
    add(t, e, n = "lbl", s = 4e3, r = null) {
      let o = document.createElement("div");
      o.className = n, o.textContent = t, this.root.appendChild(o);
      let a = {
        el: o,
        pos: e.clone ? e : new F(...e),
        maxDist: s,
        visible: !0,
        group: n
      };
      return r && (o.style.pointerEvents = "auto", o.style.cursor = "pointer", o.addEventListener("click", c => {
        c.stopPropagation(), r()
      })), this.items.push(a), a
    }
    remove(t) {
      t.el.remove(), this.items = this.items.filter(e => e !== t)
    }
    _set(t, e, n, s) {
      t._d !== e && (t.el.style.display = e, t._d = e), e !== "none" && (t._t !== n && (t.el.style.transform = n, t._t = n), t._o !== s && (t.el.style.opacity = s, t._o = s))
    }
    update(t, e, n) {
      let s = [],
        r = [];
      for (let o of this.items) {
        if (!o.visible) {
          this._set(o, "none");
          continue
        }
        this.v.copy(o.pos);
        let a = this.v.distanceTo(t.position);
        if (this.v.project(t), this.v.z > 1 || a > o.maxDist || Math.abs(this.v.x) > 1.1 || Math.abs(this.v.y) > 1.1) {
          this._set(o, "none");
          continue
        }
        r.push({
          it: o,
          d: a,
          x: (this.v.x * .5 + .5) * e,
          y: (-this.v.y * .5 + .5) * n
        })
      }
      r.sort((o, a) => (a.it.group === "lbl mark") - (o.it.group === "lbl mark") || o.d - a.d);
      for (let o of r) {
        let a = (o.it.el.textContent.length * 6.6 + 18) / 2,
          l = [o.x - a, o.y - 22, o.x + a, o.y];
        if (o.it.group !== "lbl mark" && s.some(u => l[0] < u[2] && l[2] > u[0] && l[1] < u[3] && l[3] > u[1])) {
          this._set(o.it, "none");
          continue
        }
        s.push(l);
        let h = o.it;
        this._set(h, "block", `translate(-50%,-100%) translate(${Math.round(o.x)}px,${Math.round(o.y)}px)`, String(Math.round(Math.max(.35, Math.min(1, 1.6 - o.d / h.maxDist)) * 20) / 20))
      }
    }
    setGroupVisible(t, e) {
      for (let n of this.items) n.group === t && (n.visible = e)
    }
  }
});
var jd, _1, wa, Ta, Qd = Fe(() => {
  Ne();
  jd = "aimores3d_marcadores_v1", _1 = [
    ["Verde", "#22c55e"],
    ["Roxo", "#a855f7"],
    ["Azul", "#3b82f6"],
    ["Vermelho", "#ef4444"],
    ["Laranja", "#f97316"],
    ["Amarelo", "#eab308"],
    ["Rosa", "#ec4899"],
    ["Ciano", "#06b6d4"],
    ["Branco", "#f8fafc"],
    ["Preto", "#111827"]
  ], wa = () => Math.random().toString(36).slice(2, 10), Ta = class {
    constructor(t) {
      Object.assign(this, t), this.group = new he, this.group.name = "marcadores", this.scene.add(this.group), this.state = this.load(), this.mode = "nav", this.selCat = this.state.cats[0]?.id || null, this.objs = new Map, this.ray = new Us, this.mouse = new _t, this.headGeo = new In(1, 20, 14), this.stickGeo = new be(.09, .09, 1, 8), this.stickGeo.translate(0, .5, 0), this.ringGeo = new ko(.8, 1.2, 24), this.ringGeo.rotateX(-Math.PI / 2), this.state.marks.forEach(e => this.makeObj(e)), this.bindCanvas(), this.render()
    }
    load() {
      try {
        let t = JSON.parse(localStorage.getItem(jd));
        if (t && t.cats && t.marks) return t
      } catch {}
      return {
        cats: [{
          id: wa(),
          name: "Ponto cego",
          color: "#ef4444",
          limit: null
        }, {
          id: wa(),
          name: "Ponto de interesse",
          color: "#3b82f6",
          limit: null
        }],
        marks: []
      }
    }
    save() {
      localStorage.setItem(jd, JSON.stringify(this.state))
    }
    cat(t) {
      return this.state.cats.find(e => e.id === t)
    }
    count(t) {
      return this.state.marks.filter(e => e.cat === t).length
    }
    makeObj(t) {
      let e = this.cat(t.cat);
      if (!e) return;
      let n = new Qt(e.color),
        s = new he,
        r = new Tt({
          color: n,
          emissive: n,
          emissiveIntensity: .35,
          roughness: .4
        }),
        o = new Pt(this.headGeo, r);
      o.position.y = 7, o.userData.markId = t.id;
      let a = new Pt(this.stickGeo, new Tt({
        color: 16777215,
        roughness: .5
      }));
      a.scale.y = 6.2;
      let c = new Pt(this.ringGeo, new As({
        color: n,
        transparent: !0,
        opacity: .85,
        depthWrite: !1
      }));
      c.position.y = .3, s.add(o, a, c), s.position.set(t.x, t.y, t.z), s.userData.markId = t.id, o.castShadow = !0, this.group.add(s);
      let l = this.labels.add(t.name, new F(t.x, t.y + 9, t.z), "lbl mark", 6e3, () => this.select(t.id));
      l.el.style.borderColor = e.color, this.objs.set(t.id, {
        g: s,
        head: o,
        lbl: l,
        mat: r,
        ring: c
      })
    }
    removeObj(t) {
      let e = this.objs.get(t);
      e && (this.group.remove(e.g), this.labels.remove(e.lbl), this.objs.delete(t))
    }
    refreshObj(t) {
      this.removeObj(t.id), this.makeObj(t)
    }
    tickScale(t) {
      for (let [e, n] of this.objs) {
        let s = t.position.distanceTo(n.g.position),
          r = Math.max(.5, Math.min(8, s / 160));
        n.g.scale.setScalar(r), n.lbl.pos.set(n.g.position.x, n.g.position.y + 8.3 * r, n.g.position.z)
      }
    }
    pick(t, e) {
      let n = this.renderer.domElement.getBoundingClientRect();
      return this.mouse.set((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), this.ray.setFromCamera(this.mouse, this.camera), this.ray.intersectObjects(e, !0)[0]
    }
    bindCanvas() {
      let t = this.renderer.domElement,
        e = null,
        n = null;
      t.addEventListener("pointerdown", s => {
        if (e = {
            x: s.clientX,
            y: s.clientY
          }, this.mode === "move") {
          let r = this.pick(s, [...this.objs.values()].map(o => o.head));
          r && (n = r.object.userData.markId, this.controls.enabled = !1, t.setPointerCapture(s.pointerId))
        }
      }), t.addEventListener("pointermove", s => {
        if (!n) return;
        let r = this.pick(s, this.pickTargets());
        if (r) {
          let o = this.state.marks.find(a => a.id === n);
          o.x = r.point.x, o.y = r.point.y, o.z = r.point.z, this.objs.get(n).g.position.copy(r.point)
        }
      }), t.addEventListener("pointerup", s => {
        if (n) {
          n = null, this.controls.enabled = !0, this.save(), this.render();
          return
        }
        if (!(!e || Math.hypot(s.clientX - e.x, s.clientY - e.y) > 6))
          if (this.mode === "place") {
            let r = this.cat(this.selCat);
            if (!r) {
              this.toast("Escolha uma categoria primeiro");
              return
            }
            if (r.limit && this.count(r.id) >= r.limit) {
              this.toast(`Limite de ${r.limit} marcador(es) para "${r.name}" atingido`);
              return
            }
            let o = this.pick(s, this.pickTargets());
            if (!o) return;
            let a = this.count(r.id) + 1,
              c = {
                id: wa(),
                cat: r.id,
                name: `${r.name} ${a}`,
                x: +o.point.x.toFixed(2),
                y: +o.point.y.toFixed(2),
                z: +o.point.z.toFixed(2),
                note: "",
                ts: Date.now()
              };
            this.state.marks.push(c), this.makeObj(c), this.save(), this.render(), this.selMark = c.id, this.render()
          } else {
            let r = this.pick(s, [...this.objs.values()].map(o => o.head));
            r && this.select(r.object.userData.markId)
          }
      })
    }
    select(t) {
      this.selMark = t, this.render();
      let e = this.objs.get(t);
      e && (e.mat.emissiveIntensity = 1, setTimeout(() => e.mat.emissiveIntensity = .35, 600))
    }
    setMode(t) {
      this.mode = t, this.onMode && setTimeout(() => this.onMode(t), 0), this.renderer.domElement.style.cursor = t === "place" ? "crosshair" : t === "move" ? "grab" : "", this.render()
    }
    toast(t) {
      let e = document.getElementById("toast");
      e.textContent = t, e.classList.add("show"), clearTimeout(this._tt), this._tt = setTimeout(() => e.classList.remove("show"), 2600)
    }
    latlon(t) {
      let e = this.H;
      return [(e.LAT0 - t.z / e.KZ).toFixed(6), (e.LON0 + t.x / e.KX).toFixed(6)]
    }
    render() {
      let t = this.panel,
        e = this.state,
        n = c => String(c).replace(/[&<>"]/g, l => "&#" + l.charCodeAt(0) + ";"),
        s = `<div class="modes"><button data-mode="nav" class="${this.mode==="nav"?"on":""}">\u{1F590} Navegar</button><button data-mode="place" class="${this.mode==="place"?"on":""}">\u{1F4CD} Colocar</button><button data-mode="move" class="${this.mode==="move"?"on":""}">\u2725 Mover</button></div>`;
      s += `<div class="hint">${this.mode==="place"?innerWidth<=760?"Escolha a categoria e toque no mapa para colocar.":"Escolha a categoria e clique no mapa para colocar.":this.mode==="move"?"Arraste a bolinha do marcador para mudar de lugar.":"Clique num marcador para ver/editar."}</div>`, s += '<h3>Categorias</h3><div class="cats">';
      for (let c of e.cats) {
        let l = this.count(c.id);
        s += `<div class="cat ${c.id===this.selCat?"sel":""}" data-cat="${c.id}"><span class="sw" style="background:${c.color}"></span><span class="nm">${n(c.name)}</span><span class="ct">${l}${c.limit?"/"+c.limit:""}</span><button class="ic" data-editcat="${c.id}" title="Editar">\u270E</button><button class="ic" data-delcat="${c.id}" title="Apagar">\u{1F5D1}</button></div>`, this.editCat === c.id && (s += `<div class="form"><input id="ec_name" value="${n(c.name)}" placeholder="Nome"><input id="ec_color" type="color" value="${c.color}"><input id="ec_limit" type="number" min="1" value="${c.limit||""}" placeholder="Qtd. m\xE1x (opcional)"><button id="ec_ok">Salvar</button></div>`)
      }
      s += `</div><details ${this.openNew?"open":""} id="newcat"><summary>+ Nova categoria</summary><div class="form"><div class="presets">${_1.map(([c,l])=>`<span class="sw pick" title="${c}" data-color="${l}" style="background:${l}"></span>`).join("")}</div>
    <input id="nc_name" placeholder="Nome (ex.: ferreiro)"><input id="nc_color" type="color" value="#22c55e"><input id="nc_limit" type="number" min="1" placeholder="Quantos? (vazio = sem limite)"><button id="nc_ok">Criar categoria</button></div></details>`, s += `<h3>Marcadores (${e.marks.length})</h3><div class="marks">`;
      for (let c of e.cats) {
        let l = e.marks.filter(h => h.cat === c.id);
        if (l.length) {
          s += `<div class="mgrp"><span class="sw" style="background:${c.color}"></span>${n(c.name)}</div>`;
          for (let h of l)
            if (s += `<div class="mk ${h.id===this.selMark?"sel":""}" data-mark="${h.id}"><span class="nm">${n(h.name)}</span><button class="ic" data-fly="${h.id}" title="Ir at\xE9">\u{1F441}</button><button class="ic" data-delmark="${h.id}" title="Apagar">\u{1F5D1}</button></div>`, h.id === this.selMark) {
              let [u, d] = this.latlon(h);
              s += `<div class="form"><input id="em_name" value="${n(h.name)}"><select id="em_cat">${e.cats.map(f=>`<option value="${f.id}" ${f.id===h.cat?"selected":""}>${n(f.name)}</option>`).join("")}</select><textarea id="em_note" placeholder="Observa\xE7\xE3o">${n(h.note||"")}</textarea><div class="coord">${u}, ${d}</div><button id="em_ok">Salvar</button></div>`
            }
        }
      }
      s += '</div><div class="io"><button id="exp">\u2B07 Exportar</button><label class="btn">\u2B06 Importar<input id="imp" type="file" accept=".json,application/json" hidden></label><button id="clr">Limpar</button></div>', t.innerHTML = s;
      let r = document.getElementById("mkstatus");
      if (r) {
        let c = this.cat(this.selCat);
        r.textContent = this.mode === "place" && c ? `Colocando: ${c.name}` : this.mode === "move" ? "Modo mover" : `${e.marks.length} marcador(es)`
      }
      t.querySelectorAll("[data-mode]").forEach(c => c.onclick = () => this.setMode(c.dataset.mode)), t.querySelectorAll(".cat").forEach(c => c.onclick = l => {
        l.target.closest("button") || (this.selCat = c.dataset.cat, this.mode === "nav" ? this.setMode("place") : this.render())
      }), t.querySelectorAll("[data-editcat]").forEach(c => c.onclick = () => {
        this.editCat = this.editCat === c.dataset.editcat ? null : c.dataset.editcat, this.render()
      }), t.querySelectorAll("[data-delcat]").forEach(c => c.onclick = () => {
        let l = this.cat(c.dataset.delcat),
          h = this.count(l.id);
        confirm(`Apagar a categoria "${l.name}"${h?` e seus ${h} marcador(es)`:""}?`) && (e.marks.filter(u => u.cat === l.id).forEach(u => this.removeObj(u.id)), e.marks = e.marks.filter(u => u.cat !== l.id), e.cats = e.cats.filter(u => u !== l), this.selCat === l.id && (this.selCat = e.cats[0]?.id), this.save(), this.render())
      });
      let o = t.querySelector("#ec_ok");
      o && (o.onclick = () => {
        let c = this.cat(this.editCat);
        c.name = t.querySelector("#ec_name").value.trim() || c.name, c.color = t.querySelector("#ec_color").value;
        let l = parseInt(t.querySelector("#ec_limit").value);
        c.limit = l > 0 ? l : null, this.editCat = null, e.marks.filter(h => h.cat === c.id).forEach(h => this.refreshObj(h)), this.save(), this.render()
      }), t.querySelectorAll(".pick").forEach(c => c.onclick = () => {
        t.querySelector("#nc_color").value = c.dataset.color;
        let l = t.querySelector("#nc_name");
        l.value || (l.placeholder = `Nome (cor ${c.title.toLowerCase()})`)
      }), t.querySelector("#newcat").ontoggle = c => {
        this.openNew = c.target.open
      }, t.querySelector("#nc_ok").onclick = () => {
        let c = t.querySelector("#nc_name").value.trim();
        if (!c) {
          this.toast("D\xEA um nome para a categoria");
          return
        }
        let l = parseInt(t.querySelector("#nc_limit").value),
          h = {
            id: wa(),
            name: c,
            color: t.querySelector("#nc_color").value,
            limit: l > 0 ? l : null
          };
        e.cats.push(h), this.selCat = h.id, this.openNew = !1, this.save(), this.setMode("place"), this.toast(`Categoria "${c}" criada. Clique no mapa para colocar.`)
      }, t.querySelectorAll(".mk").forEach(c => c.onclick = l => {
        l.target.closest("button") || (this.selMark = this.selMark === c.dataset.mark ? null : c.dataset.mark, this.render())
      }), t.querySelectorAll("[data-fly]").forEach(c => c.onclick = () => {
        let l = e.marks.find(h => h.id === c.dataset.fly);
        this.flyTo(new F(l.x, l.y, l.z), 120), this.select(l.id)
      }), t.querySelectorAll("[data-delmark]").forEach(c => c.onclick = () => {
        let l = c.dataset.delmark;
        this.removeObj(l), e.marks = e.marks.filter(h => h.id !== l), this.save(), this.render()
      });
      let a = t.querySelector("#em_ok");
      a && (a.onclick = () => {
        let c = e.marks.find(l => l.id === this.selMark);
        c.name = t.querySelector("#em_name").value.trim() || c.name, c.cat = t.querySelector("#em_cat").value, c.note = t.querySelector("#em_note").value, this.refreshObj(c), this.save(), this.render(), this.toast("Marcador salvo")
      }), t.querySelector("#exp").onclick = () => {
        let c = JSON.parse(JSON.stringify(e));
        c.marks.forEach(u => {
          let [d, f] = this.latlon(u);
          u.lat = +d, u.lon = +f
        });
        let l = new Blob([JSON.stringify({
            app: "aimores-3d",
            version: 1,
            exported: new Date().toISOString(),
            ...c
          }, null, 2)], {
            type: "application/json"
          }),
          h = document.createElement("a");
        h.href = URL.createObjectURL(l), h.download = "marcadores-aimores.json", h.click()
      }, t.querySelector("#imp").onchange = c => {
        let l = c.target.files[0];
        l && l.text().then(h => {
          try {
            let u = JSON.parse(h);
            if (!u.cats || !u.marks) throw 0;
            confirm("Substituir os marcadores atuais? (Cancelar = juntar com os atuais)") && (e.marks.forEach(x => this.removeObj(x.id)), e.cats = [], e.marks = []);
            let f = new Set(e.cats.map(x => x.id));
            u.cats.forEach(x => {
              f.has(x.id) || e.cats.push({
                id: x.id,
                name: x.name,
                color: x.color,
                limit: x.limit || null
              })
            });
            let m = new Set(e.marks.map(x => x.id));
            u.marks.forEach(x => {
              if (m.has(x.id)) return;
              let g = {
                id: x.id,
                cat: x.cat,
                name: x.name,
                x: x.x,
                y: x.y,
                z: x.z,
                note: x.note || "",
                ts: x.ts || Date.now()
              };
              e.marks.push(g), this.makeObj(g)
            }), this.selCat = e.cats[0]?.id, this.save(), this.render(), this.toast("Importado!")
          } catch {
            this.toast("Arquivo inv\xE1lido")
          }
        })
      }, t.querySelector("#clr").onclick = () => {
        confirm("Apagar TODOS os marcadores? (as categorias ficam)") && (e.marks.forEach(c => this.removeObj(c.id)), e.marks = [], this.save(), this.render())
      }
    }
  }
});

function Xs(i, t, e, n, s, r, o, a, c, l) {
  let h = -r,
    u = s,
    d = (v, y, _) => [t + s * v + h * y, _, e + r * v + u * y],
    f = o / 2,
    m = a / 2,
    x = [d(-f, -m, n), d(f, -m, n), d(f, m, n), d(-f, m, n), d(-f, -m, n + c), d(f, -m, n + c), d(f, m, n + c), d(-f, m, n + c)],
    g = [0, 0],
    p = [
      [4, 5, 6, 7],
      [0, 1, 5, 4],
      [1, 2, 6, 5],
      [2, 3, 7, 6],
      [3, 0, 4, 7]
    ];
  for (let v of p) i.quad(x[v[0]], x[v[1]], x[v[2]], x[v[3]], [0, 0], [1, 0], [1, 1], [0, 1], l)
}

function tf(i, t, e) {
  let n = i.extras.station;
  if (!n) return null;
  let s = n.slice(0, 4),
    r = [s[1][0] - s[0][0], s[1][1] - s[0][1]],
    o = [s[2][0] - s[1][0], s[2][1] - s[1][1]],
    a = Math.hypot(...r),
    c = Math.hypot(...o),
    [l, h, u] = c > a ? [o, c, a] : [r, a, c],
    d = l[0] / h,
    f = l[1] / h,
    m = (s[0][0] + s[1][0] + s[2][0] + s[3][0]) / 4,
    x = (s[0][1] + s[1][1] + s[2][1] + s[3][1]) / 4,
    g = -f,
    p = d,
    v = 1e9;
  for (let B = -h / 2; B <= h / 2; B += 6)
    for (let V of [-u / 2, 0, u / 2]) v = Math.min(v, t.at(m + d * B + g * V, x + f * B + p * V));
  let y = new he;
  y.name = "estacao";
  let _ = new Kt,
    P = new Kt,
    M = new Kt,
    b = v + .95;
  Xs(_, m, x, v - .6, d, f, h, u * .82, b - v + .6, bt(200, 196, 188)), Xs(_, m + g * u * .41, x + p * u * .41, b - .02, d, f, h, .4, .04, bt(236, 200, 40));
  let w = bt(226, 178, 30),
    S = 4.4,
    E = u * .62;
  for (let B = -h / 2 + 3; B <= h / 2 - 3; B += 8) {
    let V = m + d * B,
      $ = x + f * B;
    Xs(P, V, $, b, d, f, .3, .3, S, w), Xs(P, V, $, b + S - .35, g, p, E, .22, .35, w)
  }
  for (let B of [-1, 1]) Xs(P, m + g * B * E * .45, x + p * B * E * .45, b + S - .25, d, f, h - 4, .18, .25, w);
  let A = (B, V, $) => [m + d * B + g * V, $, x + f * B + p * V],
    N = h / 2 - 1.5,
    D = E / 2 + .6,
    O = b + S + .55,
    H = b + S + .1;
  for (let B of [-1, 1]) {
    let V = [A(-N, 0, O), A(N, 0, O), A(N, B * D, H), A(-N, B * D, H)];
    B > 0 ? M.quad(V[0], V[3], V[2], V[1], [0, 0], [0, 1], [h / 2, 1], [h / 2, 0], bt(150, 154, 158)) : M.quad(V[0], V[1], V[2], V[3], [0, 0], [h / 2, 0], [h / 2, 1], [0, 1], bt(150, 154, 158))
  }
  for (let B of [-1, 1]) Xs(P, m + g * B * D, x + p * B * D, H - .25, d, f, 2 * N, .08, .35, bt(170, 172, 170));
  let U = (B, V) => {
      let $ = new Pt(B.geometry(), V);
      $.castShadow = !0, $.receiveShadow = !0, y.add($)
    },
    z = Ci();
  U(_, new Tt({
    vertexColors: !0,
    map: z.map,
    roughness: .9
  })), U(P, new Tt({
    vertexColors: !0,
    roughness: .5,
    metalness: .3
  }));
  let C = md();
  return C && (C.wrapS = C.wrapT = bn), U(M, new Tt({
    vertexColors: !0,
    roughness: .45,
    metalness: .4,
    side: Xt,
    map: C || null
  })), e.add(y), y
}

function ef(i, t, e) {
  let n = i.extras.lote;
  if (!n) return null;
  let s = new Kt,
    r = n.w / 2;
  for (let c of n.streets)
    for (let l = 0; l < c.length - 1; l++) {
      let [h, u] = c[l], [d, f] = c[l + 1], m = Math.hypot(d - h, f - u), x = (d - h) / m, g = (f - u) / m, p = -g, v = x;
      for (let y = 0; y < m; y += 3) {
        let _ = Math.min(m, y + 3),
          P = [
            [y, -r],
            [_, -r],
            [_, r],
            [y, r]
          ].map(([b, w]) => {
            let S = h + x * b + p * w,
              E = u + g * b + v * w;
            return [S, t.at(S, E) + .07, E]
          }),
          M = P.map(b => [b[0] / 6, b[2] / 6]);
        s.quad(P[0], P[3], P[2], P[1], M[0], M[3], M[2], M[1], bt(255, 236, 214), x1)
      }
    }
  let o = ra(),
    a = new Pt(s.geometry(), new Tt({
      vertexColors: !0,
      map: o.map,
      normalMap: o.normalMap,
      roughness: 1,
      side: Xt,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -4
    }));
  return a.receiveShadow = !0, a.name = "loteamento", e.add(a), a
}
var x1, nf = Fe(() => {
  Ne();
  Wn();
  Kn();
  da();
  x1 = [0, 1, 0]
});

function rf(i, t) {
  let e = i.geometry,
    n = e.index ? e.toNonIndexed() : e,
    s = n.attributes.position,
    r = s.count / 3,
    o = new Map;
  for (let l = 0; l < r; l++) {
    let h = (s.getX(l * 3) + s.getX(l * 3 + 1) + s.getX(l * 3 + 2)) / 3,
      u = (s.getZ(l * 3) + s.getZ(l * 3 + 1) + s.getZ(l * 3 + 2)) / 3,
      d = sf(h, u, t),
      f = o.get(d);
    f || o.set(d, f = []), f.push(l)
  }
  let a = new he;
  a.name = i.name;
  let c = Object.keys(n.attributes);
  for (let [l, h] of o) {
    let u = new pe;
    for (let f of c) {
      let m = n.attributes[f],
        x = m.itemSize,
        g = new m.array.constructor(h.length * 3 * x),
        p = 0;
      for (let v of h)
        for (let y = 0; y < 3; y++) {
          let _ = (v * 3 + y) * x;
          for (let P = 0; P < x; P++) g[p++] = m.array[_ + P]
        }
      u.setAttribute(f, new ae(g, x, m.normalized))
    }
    u.computeBoundingBox(), u.computeBoundingSphere();
    let d = new Pt(u, i.material);
    d.castShadow = i.castShadow, d.receiveShadow = i.receiveShadow, d.renderOrder = i.renderOrder, d.userData.box = u.boundingBox.clone().applyMatrix4(i.matrixWorld), d.name = i.name, a.add(d)
  }
  return a
}

function oh(i, t, e, n) {
  let s = i.count,
    r = new ue,
    o = new Map;
  for (let h = 0; h < s; h++) {
    i.getMatrixAt(h, r), rh.setFromMatrixPosition(r);
    let u = sf(rh.x, rh.z, t),
      d = o.get(u);
    d || o.set(u, d = []), d.push(h)
  }
  let a = [],
    c = new Qt,
    l = (h, u, d) => {
      let f = new Ve(h, u, d.length);
      return d.forEach((m, x) => {
        i.getMatrixAt(m, r), f.setMatrixAt(x, r), i.instanceColor && (i.getColorAt(m, c), f.setColorAt(x, c))
      }), f.castShadow = i.castShadow, f.receiveShadow = i.receiveShadow, f.customDepthMaterial = i.customDepthMaterial, f.name = i.name, f.computeBoundingSphere(), f.computeBoundingBox(), f.userData.box = f.boundingBox.clone(), f
    };
  for (let [h, u] of o) {
    let d = l(i.geometry, i.material, u),
      f = e ? l(e, n, u) : null;
    f && (f.castShadow = !1, f.userData.box = d.userData.box), a.push({
      near: d,
      far: f
    })
  }
  return a
}

function of(i, t, e, n = 96, s = [450, 1100]) {
  let r = i.geometry,
    o = t.GW,
    a = t.GH,
    c = r.attributes.position.array,
    l = [];
  for (let _ = 0; _ < a - 1; _ += n)
    for (let P = 0; P < o - 1; P += n) {
      let M = [];
      for (let b of [1, 2, 4]) {
        let w = [],
          S = Math.min(a - 1, _ + n),
          E = Math.min(o - 1, P + n);
        for (let U = _; U < S; U += b)
          for (let z = P; z < E; z += b) {
            let C = Math.min(U + b, S),
              B = Math.min(z + b, E),
              V = U * o + z,
              $ = U * o + B,
              ht = C * o + z,
              ft = C * o + B;
            w.push(V, ht, $, $, ht, ft)
          }
        let A = new pe;
        for (let U of Object.keys(r.attributes)) A.setAttribute(U, r.attributes[U]);
        A.setIndex(w);
        let N = 1e9,
          D = -1e9;
        for (let U = _; U <= S; U += 2)
          for (let z = P; z <= E; z += 2) {
            let C = c[(U * o + z) * 3 + 1];
            C < N && (N = C), C > D && (D = C)
          }
        let O = new dn(new F(t.XMIN + P * t.G, N, t.ZMIN + _ * t.G), new F(t.XMIN + E * t.G, D, t.ZMIN + S * t.G));
        A.boundingBox = O, A.boundingSphere = O.getBoundingSphere(new Jn);
        let H = new Pt(A, i.material);
        H.receiveShadow = !0, H.userData.box = O, H.name = "terrain", M.push(H)
      }
      l.push(M)
    }
  let h = 8,
    u = [],
    d = [],
    f = [],
    m = [],
    x = Math.floor((a - 1) / h) + 1,
    g = Math.floor((o - 1) / h) + 1;
  for (let _ = 0; _ < x; _++)
    for (let P = 0; P < g; P++) {
      let M = Math.min(a - 1, _ * h),
        b = Math.min(o - 1, P * h),
        w = M * o + b;
      u.push(c[w * 3], c[w * 3 + 1] - 1.2, c[w * 3 + 2]), d.push(r.attributes.uv.array[w * 2], r.attributes.uv.array[w * 2 + 1]), f.push(r.attributes.uv1.array[w * 2], r.attributes.uv1.array[w * 2 + 1])
    }
  for (let _ = 0; _ < x - 1; _++)
    for (let P = 0; P < g - 1; P++) {
      let M = _ * g + P;
      m.push(M, M + g, M + 1, M + 1, M + g, M + g + 1)
    }
  let p = new pe;
  p.setAttribute("position", new Jt(u, 3)), p.setAttribute("uv", new Jt(d, 2)), p.setAttribute("uv1", new Jt(f, 2)), p.setIndex(m), p.computeVertexNormals();
  let v = i.geometry;
  i.geometry = p, i.userData.fullGeometry = v;
  for (let _ of l) {
    for (let P of _) i.add(P);
    e.lods.push({
      tiles: _
    })
  }
  e.terrainD = s;
  let y = e.update.bind(e);
  return e.update = (_, P) => {
    let M = _.position,
      b = P || M.distanceToSquared(e.last) >= 4;
    if (y(_, P), !!b)
      for (let w of e.lods) {
        if (!w.tiles) continue;
        let S = w.tiles[0].userData.box.distanceToPoint(M),
          E = e.scale,
          A = S < s[0] * E ? 0 : S < s[1] * E ? 1 : 2;
        w.tiles.forEach((N, D) => N.visible = D === A)
      }
  }, i
}
var rh, Aa, sf, af = Fe(() => {
  Ne();
  rh = new F, Aa = class {
    constructor() {
      this.items = [], this.lods = [], this.last = new F(1e9, 0, 0), this.scale = 1
    }
    add(t, e) {
      t.userData.maxD = e, this.items.push(t)
    }
    addLod(t, e, n, s = 1e9) {
      this.lods.push({
        near: t,
        far: e,
        switchD: n,
        maxD: s
      })
    }
    update(t, e) {
      let n = t.position;
      if (!e && n.distanceToSquared(this.last) < 4) return;
      this.last.copy(n);
      let s = this.scale;
      for (let r of this.items) {
        let o = r.userData.box.distanceToPoint(n);
        r.visible = o < r.userData.maxD * s
      }
      for (let r of this.lods) {
        if (r.tiles) continue;
        let o = r.near.userData.box.distanceToPoint(n),
          a = o < r.switchD * s;
        r.near.visible = a, r.far && (r.far.visible = !a && o < r.maxD * s)
      }
    }
  }, sf = (i, t, e) => Math.floor(i / e) + "," + Math.floor(t / e)
});
Ku(); ud(); Md(); th(); Ad(); _a(); nh(); zd(); Hd(); Xd(); $d(); Jd(); Kd(); Qd(); nf(); af();
export const legacy = {
  Sky: Os, PathSampler: Tn, GeoBuilder: Kt,
  buildChurch: qd, buildPraca: Yd, buildFields: Zd, buildClub: kd, buildStation: tf, buildLote: ef,
  buildFootbridges: Fd, buildViaductVale: Od, buildViaductCentro: Wd, viaductCentroIds: Vd,
  viaductCentroExclusion: xa, viaductCentroHeight: Gd, buildRail: Dd, Train: Nd,
  Labels: ba, Markers: Ta, Traffic: Ma, buildWalls: vd, buildBuildings: _d, buildRoads: xd, buildWater: yd,
  buildTrees: Td, buildTerrain: ld, buildBackdrop: hd, TerrainSampler: ca, decodeB64: la, cloudDome: Bd,
  srgb: bt, hash: qt, locoGeo: a1, wagonGeo: c1,
};
