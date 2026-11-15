(()=>{var Fe=(i,t)=>()=>(i&&(t=i(i=0)),t);var lf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $f(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function Jf(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function Kf(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ep(i,t){return i+Math.random()*(t-i)}function np(i){return i*(.5-Math.random())}function ip(i){i!==void 0&&(xh=i);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sp(i){return i*sr}function rp(i){return i*hr}function op(i){return(i&i-1)===0&&i!==0}function ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hp(){let i=ur("canvas");return i.style.display="block",i}function nr(i){i in yh||(yh[i]=!0,console.warn(i))}function up(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ua(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function wp(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ti,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,qr),i.getVertexPosition(c,Yr),i.getVertexPosition(l,Zr);let h=wp(i,t,e,n,qr,Yr,Zr,Fh);if(h){let u=new F;zi.getBarycoord(Fh,qr,Yr,Zr,u),s&&(h.uv=zi.getInterpolatedAttribute(s,a,c,l,u,new _t)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,c,l,u,new _t)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};zi.getNormal(qr,Yr,Zr,d.normal),h.face=d,h.barycoord=u}return h}function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Tp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}function Bu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function dg(i,t,e,n,s,r,o){let a=new Qt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=m(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===$o)?(h===void 0&&(h=new Pt(new He(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Rs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Ni)),h.material.toneMapped=xe.getTransfer(_.colorSpace)!==we,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Ai(2,2),new fn({name:"BackgroundMaterial",uniforms:Rs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xe.getTransfer(_.colorSpace)!==we,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Qr,Ou(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:g}}function fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,A,N,D,O){let H=!1,U=u(D,N,A);r!==U&&(r=U,l(r.object)),H=f(E,D,N,O),H&&m(E,D,N,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(E,A,N,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,A,N){let D=N.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let H=O[A.id];H===void 0&&(H={},O[A.id]=H);let U=H[D];return U===void 0&&(U=d(c()),H[D]=U),U}function d(E){let A=[],N=[],D=[];for(let O=0;O<e;O++)A[O]=0,N[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:D,object:E,attributes:{},index:null}}function f(E,A,N,D){let O=r.attributes,H=A.attributes,U=0,z=N.getAttributes();for(let C in z)if(z[C].location>=0){let V=O[C],$=H[C];if($===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function m(E,A,N,D){let O={},H=A.attributes,U=0,z=N.getAttributes();for(let C in z)if(z[C].location>=0){let V=H[C];V===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&(V=E.instanceColor));let $={};$.attribute=V,V&&V.data&&($.data=V.data),O[C]=$,U++}r.attributes=O,r.attributesNum=U,r.index=D}function x(){let E=r.newAttributes;for(let A=0,N=E.length;A<N;A++)E[A]=0}function g(E){p(E,0)}function p(E,A){let N=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;N[E]=1,D[E]===0&&(i.enableVertexAttribArray(E),D[E]=1),O[E]!==A&&(i.vertexAttribDivisor(E,A),O[E]=A)}function v(){let E=r.newAttributes,A=r.enabledAttributes;for(let N=0,D=A.length;N<D;N++)A[N]!==E[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function y(E,A,N,D,O,H,U){U===!0?i.vertexAttribIPointer(E,A,N,O,H):i.vertexAttribPointer(E,A,N,D,O,H)}function _(E,A,N,D){x();let O=D.attributes,H=N.getAttributes(),U=A.defaultAttributeValues;for(let z in H){let C=H[z];if(C.location>=0){let B=O[z];if(B===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(B=E.instanceColor)),B!==void 0){let V=B.normalized,$=B.itemSize,ht=t.get(B);if(ht===void 0)continue;let ft=ht.buffer,J=ht.type,et=ht.bytesPerElement,dt=J===i.INT||J===i.UNSIGNED_INT||B.gpuType===Ll;if(B.isInterleavedBufferAttribute){let ot=B.data,vt=ot.stride,xt=B.offset;if(ot.isInstancedInterleavedBuffer){for(let nt=0;nt<C.locationSize;nt++)p(C.location+nt,ot.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let nt=0;nt<C.locationSize;nt++)g(C.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let nt=0;nt<C.locationSize;nt++)y(C.location+nt,$/C.locationSize,J,V,vt*et,(xt+$/C.locationSize*nt)*et,dt)}else{if(B.isInstancedBufferAttribute){for(let ot=0;ot<C.locationSize;ot++)p(C.location+ot,B.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ot=0;ot<C.locationSize;ot++)g(C.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ot=0;ot<C.locationSize;ot++)y(C.location+ot,$/C.locationSize,J,V,$*et,$/C.locationSize*ot*et,dt)}}else if(U!==void 0){let V=U[z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(C.location,V);break;case 3:i.vertexAttrib3fv(C.location,V);break;case 4:i.vertexAttrib4fv(C.location,V);break;default:i.vertexAttrib1fv(C.location,V)}}}}v()}function P(){w();for(let E in n){let A=n[E];for(let N in A){let D=A[N];for(let O in D)h(D[O].object),delete D[O];delete A[N]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let A=n[E.id];for(let N in A){let D=A[N];for(let O in D)h(D[O].object),delete D[O];delete A[N]}delete n[E.id]}function b(E){for(let A in n){let N=n[A];if(N[E.id]===void 0)continue;let D=N[E.id];for(let O in D)h(D[O].object),delete D[O];delete N[E.id]}}function w(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function pg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==En&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let w=b===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==li&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==$n&&!w)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:M}}function gg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,y=v*4,_=p.clippingState||null;c.value=_,_=h(m,d,y,f);for(let P=0;P!==y;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function _g(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=Ss:a===xc&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_c||a===xc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Kc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function xg(i){let t=[],e=[],n=[],s=i,r=i-gs+1+zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-gs?c=zh[o-i+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let M=0;M<f;M++){let b=M%3*2/3-1,w=M>2?0:-1,S=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(S,x*m*M),y.set(d,g*m*M);let E=[M,M,M,M,M,M];_.set(E,p*m*M)}let P=new pe;P.setAttribute("position",new ae(v,x)),P.setAttribute("uv",new ae(y,g)),P.setAttribute("faceIndex",new ae(_,p)),t.push(P),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vh(i,t,e){let n=new ui(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yg(i,t,e){let n=new Float32Array(ki),s=new F(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Gh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Wh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===_c||c===xc,h=c===Ss||c===bs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Cs(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let P=v[y+0],M=v[y+1],b=v[y+2];d.push(P,M,M,b,b,P)}}else if(m!==void 0){let v=m.array;x=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let P=y+0,M=y+1,b=y+2;d.push(P,M,M,b,b,P)}}else return;let g=new(Nu(d)?vo:yo)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,t,e){let n=new WeakMap,s=new Be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*P*4*u),b=new xo(M,_,P,u);b.type=$n,b.needsUpdate=!0;let w=y*4;for(let E=0;E<u;E++){let A=g[E],N=p[E],D=v[E],O=_*P*4*E;for(let H=0;H<A.count;H++){let U=H*w;f===!0&&(s.fromBufferAttribute(A,H),M[O+U+0]=s.x,M[O+U+1]=s.y,M[O+U+2]=s.z,M[O+U+3]=0),m===!0&&(s.fromBufferAttribute(N,H),M[O+U+4]=s.x,M[O+U+5]=s.y,M[O+U+6]=s.z,M[O+U+7]=0),x===!0&&(s.fromBufferAttribute(D,H),M[O+U+8]=s.x,M[O+U+9]=s.y,M[O+U+10]=s.z,M[O+U+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new _t(_,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Tg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),qe(e,n)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),qe(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),qe(e,n)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=Uu,r=Xh):r=zu,e.setTexture2D(t||r,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hu,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vu,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function $g(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Kg(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jg(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t_(i,t){i.uniform1iv(this.addr,t)}function e_(i,t){i.uniform2iv(this.addr,t)}function n_(i,t){i.uniform3iv(this.addr,t)}function i_(i,t){i.uniform4iv(this.addr,t)}function s_(i,t){i.uniform1uiv(this.addr,t)}function r_(i,t){i.uniform2uiv(this.addr,t)}function o_(i,t){i.uniform3uiv(this.addr,t)}function a_(i,t){i.uniform4uiv(this.addr,t)}function c_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zu,r[o])}function l_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hu,r[o])}function h_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vu,r[o])}function u_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ku,r[o])}function d_(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return $g;case 35666:return Jg;case 35674:return Kg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function Kh(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),o=nc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kh(e,l===void 0?new jc(a,i,t):new Qc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new tl(a),Kh(e,u)),e=u}}}function jh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function g_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function __(i){xe._getMatrix(Qh,xe.workingColorSpace,i);let t=`mat3( ${Qh.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Jo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+g_(i.getShaderSource(t),o)}else return s}function x_(i,t){let e=__(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y_(i,t){let e;switch(t){case Lf:e="Linear";break;case Df:e="Reinhard";break;case Uf:e="Cineon";break;case Il:e="ACESFilmic";break;case Ff:e="AgX";break;case Of:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function v_(){xe.getLuminanceCoefficients(eo);let i=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function E_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ir(i){return i!==""}function eu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function el(i){return i.replace(b_,T_)}function T_(i,t){let e=me[t];if(e===void 0){let n=w_.get(t);if(n!==void 0)e=me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}function iu(i){return i.replace(A_,R_)}function R_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function L_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case If:t="ENVMAP_BLENDING_ADD";break}return t}function D_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=C_(e),l=P_(e),h=I_(e),u=L_(e),d=D_(e),f=M_(e),m=E_(r),x=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(g=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?me.tonemapping_pars_fragment:"",e.toneMapping!==wi?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,x_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=el(o),o=eu(o,e),o=nu(o,e),a=el(a),a=eu(a,e),a=nu(a,e),o=iu(o),a=iu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+g+o,_=v+p+a,P=jh(s,s.VERTEX_SHADER,y),M=jh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(A){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(M).trim(),H=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,M);else{let z=tu(s,P,"vertex"),C=tu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+z+`
`+C)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||O==="")&&(U=!1);U&&(A.diagnostics={runnable:H,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(M),w=new Ms(s,x),S=S_(s,x)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,p_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=M,this}function F_(i,t,e,n,s,r,o){let a=new dr,c=new nl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,E,A,N,D){let O=N.fog,H=D.geometry,U=S.isMeshStandardMaterial?N.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),C=z&&z.mapping===$o?z.image.height:null,B=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$=V!==void 0?V.length:0,ht=0;H.morphAttributes.position!==void 0&&(ht=1),H.morphAttributes.normal!==void 0&&(ht=2),H.morphAttributes.color!==void 0&&(ht=3);let ft,J,et,dt;if(B){let ge=Yn[B];ft=ge.vertexShader,J=ge.fragmentShader}else ft=S.vertexShader,J=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),dt=c.getFragmentShaderID(S);let ot=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),xt=D.isInstancedMesh===!0,nt=D.isBatchedMesh===!0,St=!!S.map,W=!!S.matcap,X=!!z,L=!!S.aoMap,st=!!S.lightMap,G=!!S.bumpMap,Y=!!S.normalMap,Q=!!S.displacementMap,at=!!S.emissiveMap,q=!!S.metalnessMap,R=!!S.roughnessMap,T=S.anisotropy>0,k=S.clearcoat>0,tt=S.dispersion>0,rt=S.iridescence>0,it=S.sheen>0,mt=S.transmission>0,ut=T&&!!S.anisotropyMap,yt=k&&!!S.clearcoatMap,Ct=k&&!!S.clearcoatNormalMap,Mt=k&&!!S.clearcoatRoughnessMap,Ut=rt&&!!S.iridescenceMap,Vt=rt&&!!S.iridescenceThicknessMap,Yt=it&&!!S.sheenColorMap,Lt=it&&!!S.sheenRoughnessMap,ce=!!S.specularMap,re=!!S.specularColorMap,Se=!!S.specularIntensityMap,K=mt&&!!S.transmissionMap,Dt=mt&&!!S.thicknessMap,gt=!!S.gradientMap,Et=!!S.alphaMap,zt=S.alphaTest>0,Ft=!!S.alphaHash,oe=!!S.extensions,De=wi;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(De=i.toneMapping);let ve={shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:ft,fragmentShader:J,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:nt,batchingColor:nt&&D._colorsTexture!==null,instancing:xt,instancingColor:xt&&D.instanceColor!==null,instancingMorph:xt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ns,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:W,envMap:X,envMapMode:X&&z.mapping,envMapCubeUVHeight:C,aoMap:L,lightMap:st,bumpMap:G,normalMap:Y,displacementMap:d&&Q,emissiveMap:at,normalMapObjectSpace:Y&&S.normalMapType===kf,normalMapTangentSpace:Y&&S.normalMapType===kl,metalnessMap:q,roughnessMap:R,anisotropy:T,anisotropyMap:ut,clearcoat:k,clearcoatMap:yt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Mt,dispersion:tt,iridescence:rt,iridescenceMap:Ut,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Yt,sheenRoughnessMap:Lt,specularMap:ce,specularColorMap:re,specularIntensityMap:Se,transmission:mt,transmissionMap:K,thicknessMap:Dt,gradientMap:gt,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:zt,alphaHash:Ft,combine:S.combine,mapUv:St&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:st&&x(S.lightMap.channel),bumpMapUv:G&&x(S.bumpMap.channel),normalMapUv:Y&&x(S.normalMap.channel),displacementMapUv:Q&&x(S.displacementMap.channel),emissiveMapUv:at&&x(S.emissiveMap.channel),metalnessMapUv:q&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:ut&&x(S.anisotropyMap.channel),clearcoatMapUv:yt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(S.sheenRoughnessMap.channel),specularMapUv:ce&&x(S.specularMap.channel),specularColorMapUv:re&&x(S.specularColorMap.channel),specularIntensityMapUv:Se&&x(S.specularIntensityMap.channel),transmissionMapUv:K&&x(S.transmissionMap.channel),thicknessMapUv:Dt&&x(S.thicknessMap.channel),alphaMapUv:Et&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Y||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(St||Et),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&S.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)E.push(A),E.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let E=m[S.type],A;if(E){let N=Yn[E];A=Vl.clone(N.uniforms)}else A=S.uniforms;return A}function P(S,E){let A;for(let N=0,D=h.length;N<D;N++){let O=h[N];if(O.cacheKey===E){A=O,++A.usedTimes;break}}return A===void 0&&(A=new U_(i,E,S,r),h.push(A)),A}function M(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:M,releaseShaderCache:b,programs:h,dispose:w}}function O_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ou(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||B_),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function z_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ou,i.set(n,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Qt};break;case"SpotLight":e={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function G_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W_(i){let t=new k_,e=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,_=0,P=0,M=0,b=0;l.sort(G_);for(let S=0,E=l.length;S<E;S++){let A=l[S],N=A.color,D=A.intensity,O=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*D,u+=N.g*D,d+=N.b*D;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],D);b++}else if(A.isDirectionalLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,C=e.get(A);C.shadowIntensity=z.intensity,C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,n.directionalShadow[f]=C,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=U,f++}else if(A.isSpotLight){let U=t.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(N).multiplyScalar(D),U.distance=O,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[x]=U;let z=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,z.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=z.matrix,A.castShadow){let C=e.get(A);C.shadowIntensity=z.intensity,C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,n.spotShadow[x]=C,n.spotShadowMap[x]=H,_++}x++}else if(A.isRectAreaLight){let U=t.get(A);U.color.copy(N).multiplyScalar(D),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=U,g++}else if(A.isPointLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){let z=A.shadow,C=e.get(A);C.shadowIntensity=z.intensity,C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,C.shadowCameraNear=z.camera.near,C.shadowCameraFar=z.camera.far,n.pointShadow[m]=C,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=A.shadow.matrix,y++}n.point[m]=U,m++}else if(A.isHemisphereLight){let U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(D),U.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[p]=U,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==f||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==v||w.numPointShadows!==y||w.numSpotShadows!==_||w.numSpotMaps!==P||w.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-M,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,w.directionalLength=f,w.pointLength=m,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=v,w.numPointShadows=y,w.numSpotShadows=_,w.numSpotMaps=P,w.numLightProbes=b,n.version=V_++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function au(i){let t=new W_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new au(i),t.set(s,[a])):r>=o.length?(a=new au(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Z_(i,t,e){let n=new fr,s=new _t,r=new _t,o=new Be,a=new pr({depthPacking:zl}),c=new sl,l={},h=e.maxTextureSize,u={[Ti]:Ke,[Ke]:Ti,[Xt]:Xt},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let p=this.type;this.render=function(M,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(bi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=p!==ri&&this.type===ri,O=p===ri&&this.type!==ri;for(let H=0,U=M.length;H<U;H++){let z=M[H],C=z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let B=C.getFrameExtents();if(s.multiply(B),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,C.mapSize.y=r.y)),C.map===null||D===!0||O===!0){let $=this.type!==ri?{minFilter:Sn,magFilter:Sn}:{};C.map!==null&&C.map.dispose(),C.map=new ui(s.x,s.y,$),C.map.texture.name=z.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let V=C.getViewportCount();for(let $=0;$<V;$++){let ht=C.getViewport($);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(o),C.updateMatrices(z,$),n=C.getFrustum(),_(b,w,C.camera,z,this.type)}C.isPointLightShadow!==!0&&this.type===ri&&v(C,w),C.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,A)};function v(M,b){let w=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(b,null,w,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(b,null,w,f,x,null)}function y(M,b,w,S){let E=null,A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=E.uuid,D=b.uuid,O=l[N];O===void 0&&(O={},l[N]=O);let H=O[D];H===void 0&&(H=E.clone(),O[D]=H,b.addEventListener("dispose",P)),E=H}if(E.visible=b.visible,E.wireframe=b.wireframe,S===ri?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=i.properties.get(E);N.light=w}return E}function _(M,b,w,S,E){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let D=t.update(M),O=M.material;if(Array.isArray(O)){let H=D.groups;for(let U=0,z=H.length;U<z;U++){let C=H[U],B=O[C.materialIndex];if(B&&B.visible){let V=y(M,B,S,E);M.onBeforeShadow(i,M,b,w,D,V,C),i.renderBufferDirect(w,null,D,V,M,C),M.onAfterShadow(i,M,b,w,D,V,C)}}}else if(O.visible){let H=y(M,O,S,E);M.onBeforeShadow(i,M,b,w,D,H,null),i.renderBufferDirect(w,null,D,H,M,null),M.onAfterShadow(i,M,b,w,D,H,null)}}let N=M.children;for(let D=0,O=N.length;D<O;D++)_(N[D],b,w,S,E)}function P(M){M.target.removeEventListener("dispose",P);for(let w in l){let S=l[w],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function J_(i,t){function e(){let K=!1,Dt=new Be,gt=null,Et=new Be(0,0,0,0);return{setMask:function(zt){gt!==zt&&!K&&(i.colorMask(zt,zt,zt,zt),gt=zt)},setLocked:function(zt){K=zt},setClear:function(zt,Ft,oe,De,ve){ve===!0&&(zt*=De,Ft*=De,oe*=De),Dt.set(zt,Ft,oe,De),Et.equals(Dt)===!1&&(i.clearColor(zt,Ft,oe,De),Et.copy(Dt))},reset:function(){K=!1,gt=null,Et.set(-1,0,0,0)}}}function n(){let K=!1,Dt=!1,gt=null,Et=null,zt=null;return{setReversed:function(Ft){if(Dt!==Ft){let oe=t.get("EXT_clip_control");Dt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);let De=zt;zt=null,this.setClear(De)}Dt=Ft},getReversed:function(){return Dt},setTest:function(Ft){Ft?ot(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Ft){gt!==Ft&&!K&&(i.depthMask(Ft),gt=Ft)},setFunc:function(Ft){if(Dt&&(Ft=$_[Ft]),Et!==Ft){switch(Ft){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Ft}},setLocked:function(Ft){K=Ft},setClear:function(Ft){zt!==Ft&&(Dt&&(Ft=1-Ft),i.clearDepth(Ft),zt=Ft)},reset:function(){K=!1,gt=null,Et=null,zt=null,Dt=!1}}}function s(){let K=!1,Dt=null,gt=null,Et=null,zt=null,Ft=null,oe=null,De=null,ve=null;return{setTest:function(ge){K||(ge?ot(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ge){Dt!==ge&&!K&&(i.stencilMask(ge),Dt=ge)},setFunc:function(ge,Ge,Un){(gt!==ge||Et!==Ge||zt!==Un)&&(i.stencilFunc(ge,Ge,Un),gt=ge,Et=Ge,zt=Un)},setOp:function(ge,Ge,Un){(Ft!==ge||oe!==Ge||De!==Un)&&(i.stencilOp(ge,Ge,Un),Ft=ge,oe=Ge,De=Un)},setLocked:function(ge){K=ge},setClear:function(ge){ve!==ge&&(i.clearStencil(ge),ve=ge)},reset:function(){K=!1,Dt=null,gt=null,Et=null,zt=null,Ft=null,oe=null,De=null,ve=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,P=null,M=null,b=new Qt(0,0,0),w=0,S=!1,E=null,A=null,N=null,D=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(C)[1]),U=z>=1):C.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),U=z>=2);let B=null,V={},$=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),ft=new Be().fromArray($),J=new Be().fromArray(ht);function et(K,Dt,gt,Et){let zt=new Uint8Array(4),Ft=i.createTexture();i.bindTexture(K,Ft),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<gt;oe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Dt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Ft}let dt={};dt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Es),G(!1),Y(ch),ot(i.CULL_FACE),L(bi);function ot(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function vt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function xt(K,Dt){return u[K]!==Dt?(i.bindFramebuffer(K,Dt),u[K]=Dt,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Dt),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function nt(K,Dt){let gt=f,Et=!1;if(K){gt=d.get(Dt),gt===void 0&&(gt=[],d.set(Dt,gt));let zt=K.textures;if(gt.length!==zt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,oe=zt.length;Ft<oe;Ft++)gt[Ft]=i.COLOR_ATTACHMENT0+Ft;gt.length=zt.length,Et=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(gt)}function St(K){return m!==K?(i.useProgram(K),m=K,!0):!1}let W={[Bi]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};W[mf]=i.MIN,W[gf]=i.MAX;let X={[_f]:i.ZERO,[xf]:i.ONE,[yf]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[Mf]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Tf]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Rf]:i.CONSTANT_ALPHA,[Cf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(K,Dt,gt,Et,zt,Ft,oe,De,ve,ge){if(K===bi){x===!0&&(vt(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),K!==df){if(K!==g||ge!==S){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),ge)switch(K){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,y=null,P=null,M=null,b.set(0,0,0),w=0,g=K,S=ge}return}zt=zt||Dt,Ft=Ft||gt,oe=oe||Et,(Dt!==p||zt!==_)&&(i.blendEquationSeparate(W[Dt],W[zt]),p=Dt,_=zt),(gt!==v||Et!==y||Ft!==P||oe!==M)&&(i.blendFuncSeparate(X[gt],X[Et],X[Ft],X[oe]),v=gt,y=Et,P=Ft,M=oe),(De.equals(b)===!1||ve!==w)&&(i.blendColor(De.r,De.g,De.b,ve),b.copy(De),w=ve),g=K,S=!1}function st(K,Dt){K.side===Xt?vt(i.CULL_FACE):ot(i.CULL_FACE);let gt=K.side===Ke;Dt&&(gt=!gt),G(gt),K.blending===xs&&K.transparent===!1?L(bi):L(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let Et=K.stencilWrite;a.setTest(Et),Et&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),at(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Y(K){K!==hf?(ot(i.CULL_FACE),K!==A&&(K===ch?i.cullFace(i.BACK):K===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),A=K}function Q(K){K!==N&&(U&&i.lineWidth(K),N=K)}function at(K,Dt,gt){K?(ot(i.POLYGON_OFFSET_FILL),(D!==Dt||O!==gt)&&(i.polygonOffset(Dt,gt),D=Dt,O=gt)):vt(i.POLYGON_OFFSET_FILL)}function q(K){K?ot(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function R(K){K===void 0&&(K=i.TEXTURE0+H-1),B!==K&&(i.activeTexture(K),B=K)}function T(K,Dt,gt){gt===void 0&&(B===null?gt=i.TEXTURE0+H-1:gt=B);let Et=V[gt];Et===void 0&&(Et={type:void 0,texture:void 0},V[gt]=Et),(Et.type!==K||Et.texture!==Dt)&&(B!==gt&&(i.activeTexture(gt),B=gt),i.bindTexture(K,Dt||dt[K]),Et.type=K,Et.texture=Dt)}function k(){let K=V[B];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Yt(K){ft.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ft.copy(K))}function Lt(K){J.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),J.copy(K))}function ce(K,Dt){let gt=l.get(Dt);gt===void 0&&(gt=new WeakMap,l.set(Dt,gt));let Et=gt.get(K);Et===void 0&&(Et=i.getUniformBlockIndex(Dt,K.name),gt.set(K,Et))}function re(K,Dt){let Et=l.get(Dt).get(K);c.get(Dt)!==Et&&(i.uniformBlockBinding(Dt,Et,K.__bindingPointIndex),c.set(Dt,Et))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},B=null,V={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,P=null,M=null,b=new Qt(0,0,0),w=0,S=!1,E=null,A=null,N=null,D=null,O=null,ft.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:vt,bindFramebuffer:xt,drawBuffers:nt,useProgram:St,setBlending:L,setMaterial:st,setFlipSided:G,setCullFace:Y,setLineWidth:Q,setPolygonOffset:at,setScissorTest:q,activeTexture:R,bindTexture:T,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:Ut,texImage3D:Vt,updateUBOMapping:ce,uniformBlockBinding:re,texStorage2D:Ct,texStorage3D:Mt,texSubImage2D:it,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:yt,scissor:Yt,viewport:Lt,reset:Se}}function cu(i,t,e,n){let s=K_(n);switch(e){case Ru:return i*t;case Pu:return i*t;case Iu:return i*t*2;case Nl:return i*t/s.components*s.byteLength;case Fl:return i*t/s.components*s.byteLength;case Lu:return i*t*2/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Cu:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case vc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case bc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Du:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(i){switch(i){case li:case wu:return{byteLength:1,components:1};case lr:case Tu:case Tr:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Hi:case Ll:case $n:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function j_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return f?new OffscreenCanvas(R,T):ur("canvas")}function x(R,T,k){let tt=1,rt=q(R);if((rt.width>k||rt.height>k)&&(tt=k/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let it=Math.floor(tt*rt.width),mt=Math.floor(tt*rt.height);u===void 0&&(u=m(it,mt));let ut=T?m(it,mt):u;return ut.width=it,ut.height=mt,ut.getContext("2d").drawImage(R,0,0,it,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+it+"x"+mt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,T,k,tt,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=T;if(T===i.RED&&(k===i.FLOAT&&(it=i.R32F),k===i.HALF_FLOAT&&(it=i.R16F),k===i.UNSIGNED_BYTE&&(it=i.R8)),T===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.R8UI),k===i.UNSIGNED_SHORT&&(it=i.R16UI),k===i.UNSIGNED_INT&&(it=i.R32UI),k===i.BYTE&&(it=i.R8I),k===i.SHORT&&(it=i.R16I),k===i.INT&&(it=i.R32I)),T===i.RG&&(k===i.FLOAT&&(it=i.RG32F),k===i.HALF_FLOAT&&(it=i.RG16F),k===i.UNSIGNED_BYTE&&(it=i.RG8)),T===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RG8UI),k===i.UNSIGNED_SHORT&&(it=i.RG16UI),k===i.UNSIGNED_INT&&(it=i.RG32UI),k===i.BYTE&&(it=i.RG8I),k===i.SHORT&&(it=i.RG16I),k===i.INT&&(it=i.RG32I)),T===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RGB8UI),k===i.UNSIGNED_SHORT&&(it=i.RGB16UI),k===i.UNSIGNED_INT&&(it=i.RGB32UI),k===i.BYTE&&(it=i.RGB8I),k===i.SHORT&&(it=i.RGB16I),k===i.INT&&(it=i.RGB32I)),T===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),k===i.UNSIGNED_INT&&(it=i.RGBA32UI),k===i.BYTE&&(it=i.RGBA8I),k===i.SHORT&&(it=i.RGBA16I),k===i.INT&&(it=i.RGBA32I)),T===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),T===i.RGBA){let mt=rt?Jo:xe.getTransfer(tt);k===i.FLOAT&&(it=i.RGBA32F),k===i.HALF_FLOAT&&(it=i.RGBA16F),k===i.UNSIGNED_BYTE&&(it=mt===we?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(R,T){let k;return R?T===null||T===Hi||T===ws?k=i.DEPTH24_STENCIL8:T===$n?k=i.DEPTH32F_STENCIL8:T===lr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hi||T===ws?k=i.DEPTH_COMPONENT24:T===$n?k=i.DEPTH_COMPONENT32F:T===lr&&(k=i.DEPTH_COMPONENT16),k}function P(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==Cn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function M(R){let T=R.target;T.removeEventListener("dispose",M),w(T),T.isVideoTexture&&h.delete(T)}function b(R){let T=R.target;T.removeEventListener("dispose",b),E(T)}function w(R){let T=n.get(R);if(T.__webglInit===void 0)return;let k=R.source,tt=d.get(k);if(tt){let rt=tt[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(R),Object.keys(tt).length===0&&d.delete(k)}n.remove(R)}function S(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let k=R.source,tt=d.get(k);delete tt[T.__cacheKey],o.memory.textures--}function E(R){let T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let rt=0;rt<T.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let k=R.textures;for(let tt=0,rt=k.length;tt<rt;tt++){let it=n.get(k[tt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(k[tt])}n.remove(R)}let A=0;function N(){A=0}function D(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function O(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function H(R,T){let k=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(k,R,T);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+T)}function U(R,T){let k=n.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+T)}function z(R,T){let k=n.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,T);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+T)}function C(R,T){let k=n.get(R);if(R.version>0&&k.__version!==R.version){et(k,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+T)}let B={[bn]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},V={[Sn]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},$={[Hf]:i.NEVER,[Yf]:i.ALWAYS,[Vf]:i.LESS,[Uu]:i.LEQUAL,[Gf]:i.EQUAL,[qf]:i.GEQUAL,[Wf]:i.GREATER,[Xf]:i.NOTEQUAL};function ht(R,T){if(T.type===$n&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Cn||T.magFilter===Ca||T.magFilter===Nr||T.magFilter===kn||T.minFilter===Cn||T.minFilter===Ca||T.minFilter===Nr||T.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,B[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,B[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,B[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,V[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,V[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==Nr&&T.minFilter!==kn||T.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ft(R,T){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));let tt=T.source,rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));let it=O(T);if(it!==R.__cacheKey){rt[it]===void 0&&(rt[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[it].usedTimes++;let mt=rt[R.__cacheKey];mt!==void 0&&(rt[R.__cacheKey].usedTimes--,mt.usedTimes===0&&S(T)),R.__cacheKey=it,R.__webglTexture=rt[it].texture}return k}function J(R,T,k){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);let rt=ft(R,T),it=T.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+k);let mt=n.get(it);if(it.version!==mt.__version||rt===!0){e.activeTexture(i.TEXTURE0+k);let ut=xe.getPrimaries(xe.workingColorSpace),yt=T.colorSpace===Si?null:xe.getPrimaries(T.colorSpace),Ct=T.colorSpace===Si||ut===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Mt=x(T.image,!1,s.maxTextureSize);Mt=at(T,Mt);let Ut=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type),Yt=y(T.internalFormat,Ut,Vt,T.colorSpace,T.isVideoTexture);ht(tt,T);let Lt,ce=T.mipmaps,re=T.isVideoTexture!==!0,Se=mt.__version===void 0||rt===!0,K=it.dataReady,Dt=P(T,Mt);if(T.isDepthTexture)Yt=_(T.format===Ts,T.type),Se&&(re?e.texStorage2D(i.TEXTURE_2D,1,Yt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Ut,Vt,null));else if(T.isDataTexture)if(ce.length>0){re&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Yt,ce[0].width,ce[0].height);for(let gt=0,Et=ce.length;gt<Et;gt++)Lt=ce[gt],re?K&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Lt.width,Lt.height,Ut,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,gt,Yt,Lt.width,Lt.height,0,Ut,Vt,Lt.data);T.generateMipmaps=!1}else re?(Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Yt,Mt.width,Mt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ut,Vt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Ut,Vt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Yt,ce[0].width,ce[0].height,Mt.depth);for(let gt=0,Et=ce.length;gt<Et;gt++)if(Lt=ce[gt],T.format!==En)if(Ut!==null)if(re){if(K)if(T.layerUpdates.size>0){let zt=cu(Lt.width,Lt.height,T.format,T.type);for(let Ft of T.layerUpdates){let oe=Lt.data.subarray(Ft*zt/Lt.data.BYTES_PER_ELEMENT,(Ft+1)*zt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Ft,Lt.width,Lt.height,1,Ut,oe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Lt.width,Lt.height,Mt.depth,Ut,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Yt,Lt.width,Lt.height,Mt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Lt.width,Lt.height,Mt.depth,Ut,Vt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Yt,Lt.width,Lt.height,Mt.depth,0,Ut,Vt,Lt.data)}else{re&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Yt,ce[0].width,ce[0].height);for(let gt=0,Et=ce.length;gt<Et;gt++)Lt=ce[gt],T.format!==En?Ut!==null?re?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?K&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Lt.width,Lt.height,Ut,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,gt,Yt,Lt.width,Lt.height,0,Ut,Vt,Lt.data)}else if(T.isDataArrayTexture)if(re){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Yt,Mt.width,Mt.height,Mt.depth),K)if(T.layerUpdates.size>0){let gt=cu(Mt.width,Mt.height,T.format,T.type);for(let Et of T.layerUpdates){let zt=Mt.data.subarray(Et*gt/Mt.data.BYTES_PER_ELEMENT,(Et+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,Mt.width,Mt.height,1,Ut,Vt,zt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Vt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,Mt.width,Mt.height,Mt.depth,0,Ut,Vt,Mt.data);else if(T.isData3DTexture)re?(Se&&e.texStorage3D(i.TEXTURE_3D,Dt,Yt,Mt.width,Mt.height,Mt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Vt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,Mt.width,Mt.height,Mt.depth,0,Ut,Vt,Mt.data);else if(T.isFramebufferTexture){if(Se)if(re)e.texStorage2D(i.TEXTURE_2D,Dt,Yt,Mt.width,Mt.height);else{let gt=Mt.width,Et=Mt.height;for(let zt=0;zt<Dt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Yt,gt,Et,0,Ut,Vt,null),gt>>=1,Et>>=1}}else if(ce.length>0){if(re&&Se){let gt=q(ce[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Yt,gt.width,gt.height)}for(let gt=0,Et=ce.length;gt<Et;gt++)Lt=ce[gt],re?K&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ut,Vt,Lt):e.texImage2D(i.TEXTURE_2D,gt,Yt,Ut,Vt,Lt);T.generateMipmaps=!1}else if(re){if(Se){let gt=q(Mt);e.texStorage2D(i.TEXTURE_2D,Dt,Yt,gt.width,gt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,Vt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ut,Vt,Mt);g(T)&&p(tt),mt.__version=it.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function et(R,T,k){if(T.image.length!==6)return;let tt=ft(R,T),rt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let it=n.get(rt);if(rt.version!==it.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);let mt=xe.getPrimaries(xe.workingColorSpace),ut=T.colorSpace===Si?null:xe.getPrimaries(T.colorSpace),yt=T.colorSpace===Si||mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ct=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let Et=0;Et<6;Et++)!Ct&&!Mt?Ut[Et]=x(T.image[Et],!0,s.maxCubemapSize):Ut[Et]=Mt?T.image[Et].image:T.image[Et],Ut[Et]=at(T,Ut[Et]);let Vt=Ut[0],Yt=r.convert(T.format,T.colorSpace),Lt=r.convert(T.type),ce=y(T.internalFormat,Yt,Lt,T.colorSpace),re=T.isVideoTexture!==!0,Se=it.__version===void 0||tt===!0,K=rt.dataReady,Dt=P(T,Vt);ht(i.TEXTURE_CUBE_MAP,T);let gt;if(Ct){re&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ce,Vt.width,Vt.height);for(let Et=0;Et<6;Et++){gt=Ut[Et].mipmaps;for(let zt=0;zt<gt.length;zt++){let Ft=gt[zt];T.format!==En?Yt!==null?re?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt,0,0,Ft.width,Ft.height,Yt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt,ce,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt,0,0,Ft.width,Ft.height,Yt,Lt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt,ce,Ft.width,Ft.height,0,Yt,Lt,Ft.data)}}}else{if(gt=T.mipmaps,re&&Se){gt.length>0&&Dt++;let Et=q(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ce,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Mt){re?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ut[Et].width,Ut[Et].height,Yt,Lt,Ut[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,Ut[Et].width,Ut[Et].height,0,Yt,Lt,Ut[Et].data);for(let zt=0;zt<gt.length;zt++){let oe=gt[zt].image[Et].image;re?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt+1,0,0,oe.width,oe.height,Yt,Lt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt+1,ce,oe.width,oe.height,0,Yt,Lt,oe.data)}}else{re?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Yt,Lt,Ut[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,Yt,Lt,Ut[Et]);for(let zt=0;zt<gt.length;zt++){let Ft=gt[zt];re?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt+1,0,0,Yt,Lt,Ft.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt+1,ce,Yt,Lt,Ft.image[Et])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),it.__version=rt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function dt(R,T,k,tt,rt,it){let mt=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),yt=y(k.internalFormat,mt,ut,k.colorSpace),Ct=n.get(T),Mt=n.get(k);if(Mt.__renderTarget=T,!Ct.__hasExternalTextures){let Ut=Math.max(1,T.width>>it),Vt=Math.max(1,T.height>>it);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,it,yt,Ut,Vt,T.depth,0,mt,ut,null):e.texImage2D(rt,it,yt,Ut,Vt,0,mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Y(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,Mt.__webglTexture,0,G(T)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,T,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){let tt=T.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,it=_(T.stencilBuffer,rt),mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=G(T);Y(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,it,T.width,T.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,it,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,R)}else{let tt=T.textures;for(let rt=0;rt<tt.length;rt++){let it=tt[rt],mt=r.convert(it.format,it.colorSpace),ut=r.convert(it.type),yt=y(it.internalFormat,mt,ut,it.colorSpace),Ct=G(T);k&&Y(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,yt,T.width,T.height):Y(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,yt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,yt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(T.depthTexture);tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);let rt=tt.__webglTexture,it=G(T);if(T.depthTexture.format===ys)Y(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(T.depthTexture.format===Ts)Y(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function xt(R){let T=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let tt=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){let rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),T.__depthDisposeCallback=rt}T.__boundDepthTexture=tt}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,R)}else if(k){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),ot(T.__webglDepthbuffer[tt],R,!1);else{let rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ot(T.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(R,T,k){let tt=n.get(R);T!==void 0&&dt(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&xt(R)}function St(R){let T=R.texture,k=n.get(R),tt=n.get(T);R.addEventListener("dispose",b);let rt=R.textures,it=R.isWebGLCubeRenderTarget===!0,mt=rt.length>1;if(mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,o.memory.textures++),it){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let yt=0;yt<T.mipmaps.length;yt++)k.__webglFramebuffer[ut][yt]=i.createFramebuffer()}else k.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<T.mipmaps.length;ut++)k.__webglFramebuffer[ut]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ut=0,yt=rt.length;ut<yt;ut++){let Ct=n.get(rt[ut]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Y(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<rt.length;ut++){let yt=rt[ut];k.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);let Ct=r.convert(yt.format,yt.colorSpace),Mt=r.convert(yt.type),Ut=y(yt.internalFormat,Ct,Mt,yt.colorSpace,R.isXRRenderTarget===!0),Vt=G(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Ut,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ht(i.TEXTURE_CUBE_MAP,T);for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)dt(k.__webglFramebuffer[ut][yt],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else dt(k.__webglFramebuffer[ut],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,yt=rt.length;ut<yt;ut++){let Ct=rt[ut],Mt=n.get(Ct);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),ht(i.TEXTURE_2D,Ct),dt(k.__webglFramebuffer,R,Ct,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),g(Ct)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),ht(ut,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)dt(k.__webglFramebuffer[yt],R,T,i.COLOR_ATTACHMENT0,ut,yt);else dt(k.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,ut,0);g(T)&&p(ut),e.unbindTexture()}R.depthBuffer&&xt(R)}function W(R){let T=R.textures;for(let k=0,tt=T.length;k<tt;k++){let rt=T[k];if(g(rt)){let it=v(R),mt=n.get(rt).__webglTexture;e.bindTexture(it,mt),p(it),e.unbindTexture()}}}let X=[],L=[];function st(R){if(R.samples>0){if(Y(R)===!1){let T=R.textures,k=R.width,tt=R.height,rt=i.COLOR_BUFFER_BIT,it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(R),ut=T.length>1;if(ut)for(let yt=0;yt<T.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<T.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Ct=n.get(T[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,k,tt,0,0,k,tt,rt,i.NEAREST),c===!0&&(X.length=0,L.length=0,X.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(X.push(it),L.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<T.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Ct=n.get(T[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function G(R){return Math.min(s.maxSamples,R.samples)}function Y(R){let T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Q(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function at(R,T){let k=R.colorSpace,tt=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ns&&k!==Si&&(xe.getTransfer(k)===we?(tt!==En||rt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=C,this.rebindTextures=nt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Y}function Q_(i,t){function e(n,s=Si){let r,o=xe.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return i.BYTE;if(n===Tu)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Cu)return i.RGB;if(n===En)return i.RGBA;if(n===Pu)return i.LUMINANCE;if(n===Iu)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===Lu)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===lo||n===ho||n===uo||n===fo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===Mc||n===Ec||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===wc||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===wc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===Hc||n===Vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Gc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function sx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ou(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Fi.copy(_),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Fi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(m(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let P=y.program;n.updateUBOMapping(v,P);let M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),P=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,b=_.length;M<b;M++){let w=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,E=w.length;S<E;S++){let A=w[S];if(f(A,M,S,P)===!0){let N=A.__offset,D=Array.isArray(A.value)?A.value:[A.value],O=0;for(let H=0;H<D.length;H++){let U=D[H],z=x(U);typeof U=="number"||typeof U=="boolean"?(A.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+O,A.__data)):U.isMatrix3?(A.__data[0]=U.elements[0],A.__data[1]=U.elements[1],A.__data[2]=U.elements[2],A.__data[3]=0,A.__data[4]=U.elements[3],A.__data[5]=U.elements[4],A.__data[6]=U.elements[5],A.__data[7]=0,A.__data[8]=U.elements[6],A.__data[9]=U.elements[7],A.__data[10]=U.elements[8],A.__data[11]=0):(U.toArray(A.__data,O),O+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,P){let M=v.value,b=y+"_"+_;if(P[b]===void 0)return typeof M=="number"||typeof M=="boolean"?P[b]=M:P[b]=M.clone(),!0;{let w=P[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return P[b]=M,!0}else if(w.equals(M)===!1)return w.copy(M),!0}return!1}function m(v){let y=v.uniforms,_=0,P=16;for(let b=0,w=y.length;b<w;b++){let S=Array.isArray(y[b])?y[b]:[y[b]];for(let E=0,A=S.length;E<A;E++){let N=S[E],D=Array.isArray(N.value)?N.value:[N.value];for(let O=0,H=D.length;O<H;O++){let U=D[O],z=x(U),C=_%P,B=C%z.boundary,V=C+B;_+=B,V!==0&&P-V<z.storage&&(_+=P-V),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=z.storage}}}let M=_%P;return M>0&&(_+=P-M),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function so(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Ro.fromBufferAttribute(o,s),Co.fromBufferAttribute(o,r),e.distanceSqToSegment(Ro,Co,ic,du)>n)return;ic.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ic);if(!(c<t.near||c>t.far))return{distance:c,point:du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ax(i,t){let e=1-i;return e*e*t}function cx(i,t){return 2*(1-i)*i*t}function lx(i,t){return i*i*t}function ar(i,t,e,n){return ax(i,t)+cx(i,e)+lx(i,n)}function hx(i,t){let e=1-i;return e*e*e*t}function ux(i,t){let e=1-i;return 3*e*e*i*t}function dx(i,t){return 3*(1-i)*i*i*t}function fx(i,t){return i*i*i*t}function cr(i,t,e,n,s){return hx(i,t)+ux(i,e)+dx(i,n)+fx(i,s)}function Gu(i,t,e,n,s){let r,o;if(s===Px(i,t,e,n)>0)for(r=t;r<e;r+=n)o=pu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=pu(r,i[r],i[r+1],o);return o&&jo(o,o.next)&&(Er(o),o=o.next),o}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jo(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?gx(i,n,s,r):mx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Er(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=_x(Wi(i),t,e),vr(i,t,e,n,s,r,2)):o===2&&xx(i,t,e,n,s,r):vr(Wi(i),t,e,n,s,r,1);break}}}function mx(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&_s(s,a,r,c,o,l,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=fl(f,m,t,e,n),v=fl(x,g,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&_s(a,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,c,u,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&_s(a,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,c,u,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function _x(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!jo(s,r)&&Wu(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Wi(n)}function xx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let c=Xu(o,a);o=Wi(o,o.next),c=Wi(c,c.next),vr(o,t,e,n,s,r,0),vr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Gu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Tx(l));for(s.sort(vx),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function vx(i,t){return i.x-t.x}function Mx(i,t){let e=Ex(i,t);if(!e)return t;let n=Xu(e,i);return Wi(n,n.next),Wi(e,e.next)}function Ex(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&_s(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Sx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Sx(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function bx(i,t,e,n){let s=i;do s.z===0&&(s.z=fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ax(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rx(i,t)&&(Mr(i,t)&&Mr(t,i)&&Cx(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||jo(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jo(i,t){return i.x===t.x&&i.y===t.y}function Wu(i,t,e,n){let s=ao(Oe(i,t,e)),r=ao(Oe(i,t,n)),o=ao(Oe(e,n,i)),a=ao(Oe(e,n,t));return!!(s!==r&&o!==a||s===0&&oo(i,e,t)||r===0&&oo(i,n,t)||o===0&&oo(e,i,n)||a===0&&oo(e,t,n))}function oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ao(i){return i>0?1:i<0?-1:0}function Rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Cx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xu(i,t){let e=new pl(i.i,i.x,i.y),n=new pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pu(i,t,e,n){let s=new pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function mu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Lx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function co(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vu(){return performance.now()}function Eu(i,t){return i.distance-t.distance}function Al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],t,e,!0)}}var Rl,Vn,mn,hf,ch,uf,Su,Cl,ri,Ti,Ke,Xt,bi,xs,lh,hh,uh,df,Bi,ff,pf,mf,gf,_f,xf,yf,vf,cc,lc,Mf,Ef,Sf,bf,wf,Tf,Af,Rf,Cf,hc,uc,dc,Es,fc,pc,mc,gc,Pl,Pf,If,wi,Lf,Df,Uf,Il,Nf,Ff,Of,bu,Ss,bs,_c,xc,$o,bn,Zn,yc,Sn,Bf,Nr,Cn,Ca,kn,li,wu,Tu,lr,Ll,Hi,$n,Tr,Dl,Ul,ws,Au,Ru,Cu,En,Pu,Iu,ys,Ts,Nl,Fl,Lu,Ol,Bl,lo,ho,uo,fo,vc,Mc,Ec,Sc,bc,wc,Tc,Ac,Rc,Cc,Pc,Ic,Lc,Dc,Uc,Nc,Fc,Oc,Bc,zc,kc,po,Hc,Vc,Du,Gc,Wc,Xc,mo,qc,Pa,dh,fh,ph,zf,zl,kl,kf,Si,Ce,Ns,Jo,we,ts,mh,Hf,Vf,Gf,Uu,Wf,Xf,qf,Yf,gh,_h,oi,go,hi,en,xh,sr,hr,Ar,_t,fe,Ia,yh,xe,vh,Mh,Eh,Sh,bh,es,Yc,pp,_o,mp,cn,Be,Zc,ui,xo,$c,ze,F,Da,wh,dn,ti,Fn,Fr,ns,is,ss,_i,xi,Ii,$s,Or,Br,Li,gp,Js,Na,Jn,ei,Fa,zr,yi,Oa,kr,Ba,Vi,ue,rs,On,_p,xp,vi,Hr,vn,Th,Ah,wn,dr,yp,Rh,os,ni,Vr,Ks,vp,Mp,Ch,Ph,Ih,Lh,Ep,as,za,sn,Bn,ii,ka,si,cs,ls,Dh,Ha,Va,Ga,Wa,Xa,qa,zi,Fu,Mi,Gr,Qt,nn,Sp,di,As,ke,Wr,ae,yo,vo,Jt,bp,Rn,Za,hs,Mn,js,Je,pe,Uh,Di,Xr,Nh,qr,Yr,Zr,$a,$r,Fh,Jr,Pt,He,Vl,Ap,Rp,fn,Mo,Ei,Oh,Bh,an,us,ds,Jc,Eo,Kc,Ja,Cp,Pp,zn,Ui,jr,fr,Ai,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Em,Sm,bm,wm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,jm,Qm,t0,e0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,E0,S0,b0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,O0,B0,z0,k0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,J0,K0,j0,Q0,tg,eg,ng,ig,sg,rg,og,ag,cg,lg,hg,me,Nt,Yn,Qr,Ni,ug,So,gs,zh,ki,Ka,kh,ja,Qa,tc,ec,Oi,fs,Hh,Cs,bo,zu,Xh,ku,Hu,Vu,qh,Yh,Zh,$h,Jh,jc,Qc,tl,nc,Ms,p_,m_,Qh,eo,b_,w_,A_,N_,nl,il,V_,pr,sl,q_,Y_,$_,rl,he,tx,or,ex,nx,ol,al,Fi,ix,wo,To,mr,gr,_r,ps,lu,no,hu,ox,Qs,tr,Ve,Ao,Ro,Co,uu,er,io,ic,du,Po,pn,Pn,xr,cl,ro,sc,rc,oc,yr,Io,ll,Lo,hl,Do,Uo,No,Fo,ul,Oo,Bo,zo,be,Ps,dl,Gi,px,ci,Is,Ix,Ls,ko,In,Xi,Ho,Tt,Sr,Vo,Ds,ml,gl,_l,Hn,qi,xl,yl,vl,Go,Yi,Ml,_u,El,Ux,br,Sl,wr,Wo,Xo,ac,xu,yu,bl,wl,qo,Yo,Xl,Nx,ql,Fx,Ox,Bx,zx,kx,Hx,Vx,Tl,Ue,S1,Mu,Us,fi,Zo,Ne=Fe(()=>{Rl="170",Vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,ch=1,uf=2,Su=1,Cl=2,ri=3,Ti=0,Ke=1,Xt=2,bi=0,xs=1,lh=2,hh=3,uh=4,df=5,Bi=100,ff=101,pf=102,mf=103,gf=104,_f=200,xf=201,yf=202,vf=203,cc=204,lc=205,Mf=206,Ef=207,Sf=208,bf=209,wf=210,Tf=211,Af=212,Rf=213,Cf=214,hc=0,uc=1,dc=2,Es=3,fc=4,pc=5,mc=6,gc=7,Pl=0,Pf=1,If=2,wi=0,Lf=1,Df=2,Uf=3,Il=4,Nf=5,Ff=6,Of=7,bu=300,Ss=301,bs=302,_c=303,xc=304,$o=306,bn=1e3,Zn=1001,yc=1002,Sn=1003,Bf=1004,Nr=1005,Cn=1006,Ca=1007,kn=1008,li=1009,wu=1010,Tu=1011,lr=1012,Ll=1013,Hi=1014,$n=1015,Tr=1016,Dl=1017,Ul=1018,ws=1020,Au=35902,Ru=1021,Cu=1022,En=1023,Pu=1024,Iu=1025,ys=1026,Ts=1027,Nl=1028,Fl=1029,Lu=1030,Ol=1031,Bl=1033,lo=33776,ho=33777,uo=33778,fo=33779,vc=35840,Mc=35841,Ec=35842,Sc=35843,bc=36196,wc=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Uc=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,kc=37821,po=36492,Hc=36494,Vc=36495,Du=36283,Gc=36284,Wc=36285,Xc=36286,mo=2300,qc=2301,Pa=2302,dh=2400,fh=2401,ph=2402,zf=3200,zl=3201,kl=0,kf=1,Si="",Ce="srgb",Ns="srgb-linear",Jo="linear",we="srgb",ts=7680,mh=519,Hf=512,Vf=513,Gf=514,Uu=515,Wf=516,Xf=517,qf=518,Yf=519,gh=35044,_h="300 es",oi=2e3,go=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=1234567,sr=Math.PI/180,hr=180/Math.PI;Ar={DEG2RAD:sr,RAD2DEG:hr,generateUUID:Zi,clamp:We,euclideanModulo:Hl,mapLinear:Zf,inverseLerp:$f,lerp:rr,damp:Jf,pingpong:Kf,smoothstep:jf,smootherstep:Qf,randInt:tp,randFloat:ep,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:cp,setQuaternionFromProperEuler:lp,normalize:rn,denormalize:ms},_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],y=s[4],_=s[7],P=s[2],M=s[5],b=s[8];return r[0]=o*x+a*v+c*P,r[3]=o*g+a*y+c*M,r[6]=o*p+a*_+c*b,r[1]=l*x+h*v+u*P,r[4]=l*g+h*y+u*M,r[7]=l*p+h*_+u*b,r[2]=d*x+f*v+m*P,r[5]=d*g+f*y+m*M,r[8]=d*p+f*_+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new fe;yh={};xe={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Jo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};vh=[.64,.33,.3,.6,.15,.06],Mh=[.2126,.7152,.0722],Eh=[.3127,.329],Sh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Ns]:{primaries:vh,whitePoint:Eh,transfer:Jo,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:Mh,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:vh,whitePoint:Eh,transfer:we,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:Mh,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});Yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=ur("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}};mp=0,cn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=Cn,o=kn,a=En,c=li,l=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Zi(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=bu;cn.DEFAULT_ANISOTROPY=1;Be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,P=(p+1)/2,M=(h+d)/4,b=(u+x)/4,w=(m+g)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=b/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=w/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=w/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zc=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},$c=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),M=Math.atan2(P,p*v);g=Math.sin(g*M)/P,a=Math.sin(a*M)/P}let _=a*v;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new F,wh=new ze,dn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Or.subVectors(this.max,$s),ns.subVectors(t.a,$s),is.subVectors(t.b,$s),ss.subVectors(t.c,$s),_i.subVectors(is,ns),xi.subVectors(ss,is),Ii.subVectors(ns,ss);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ii.z,Ii.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ii.z,0,-Ii.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ii.y,Ii.x,0];return!Ua(e,ns,is,ss,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,ns,is,ss,Or))?!1:(Br.crossVectors(_i,xi),e=[Br.x,Br.y,Br.z],Ua(e,ns,is,ss,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Fr=new dn,ns=new F,is=new F,ss=new F,_i=new F,xi=new F,Ii=new F,$s=new F,Or=new F,Br=new F,Li=new F;gp=new dn,Js=new F,Na=new F,Jn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Na)),this.expandByPoint(Js.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new F,Fa=new F,zr=new F,yi=new F,Oa=new F,kr=new F,Ba=new F,Vi=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fa.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=yi.dot(this.direction),c=-yi.dot(zr),l=yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fa).addScaledVector(zr,d),f}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),kr.subVectors(n,t),Ba.crossVectors(Oa,kr);let o=this.direction.dot(Ba),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let c=a*this.direction.dot(kr.crossVectors(yi,kr));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(Ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),vi.crossVectors(n,vn),vi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),vi.crossVectors(n,vn)),vi.normalize(),Hr.crossVectors(vn,vi),s[0]=vi.x,s[4]=Hr.x,s[8]=vn.x,s[1]=vi.y,s[5]=Hr.y,s[9]=vn.y,s[2]=vi.z,s[6]=Hr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],P=n[15],M=s[0],b=s[4],w=s[8],S=s[12],E=s[1],A=s[5],N=s[9],D=s[13],O=s[2],H=s[6],U=s[10],z=s[14],C=s[3],B=s[7],V=s[11],$=s[15];return r[0]=o*M+a*E+c*O+l*C,r[4]=o*b+a*A+c*H+l*B,r[8]=o*w+a*N+c*U+l*V,r[12]=o*S+a*D+c*z+l*$,r[1]=h*M+u*E+d*O+f*C,r[5]=h*b+u*A+d*H+f*B,r[9]=h*w+u*N+d*U+f*V,r[13]=h*S+u*D+d*z+f*$,r[2]=m*M+x*E+g*O+p*C,r[6]=m*b+x*A+g*H+p*B,r[10]=m*w+x*N+g*U+p*V,r[14]=m*S+x*D+g*z+p*$,r[3]=v*M+y*E+_*O+P*C,r[7]=v*b+y*A+_*H+P*B,r[11]=v*w+y*N+_*U+P*V,r[15]=v*S+y*D+_*z+P*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,P=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,M=e*v+n*y+s*_+r*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/M;return t[0]=v*b,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*b,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=y*b,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*b,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=_*b,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*b,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=P*b,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*b,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=c*l,y=c*h,_=c*u,P=n.x,M=n.y,b=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(d+p))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(m+y)*b,s[9]=(g-v)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);let l=1/r,h=1/o,u=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===oi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===go)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,x;if(a===oi)m=(o+r)*u,x=-2*u;else if(a===go)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new F,On=new ue,_p=new F(0,0,0),xp=new F(1,1,1),vi=new F,Hr=new F,vn=new F,Th=new ue,Ah=new ze,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,Rh=new F,os=new ze,ni=new ue,Vr=new F,Ks=new F,vp=new F,Mp=new ze,Ch=new F(1,0,0),Ph=new F(0,1,0),Ih=new F(0,0,1),Lh={type:"added"},Ep={type:"removed"},as={type:"childadded",child:null},za={type:"childremoved",child:null},sn=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new wn,n=new ze,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new fe}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ks,Vr,this.up):ni.lookAt(Vr,Ks,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ni),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Bn=new F,ii=new F,ka=new F,si=new F,cs=new F,ls=new F,Dh=new F,Ha=new F,Va=new F,Ga=new F,Wa=new Be,Xa=new Be,qa=new Be,zi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ii.subVectors(n,e),ka.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(ii),c=Bn.dot(ka),l=ii.dot(ii),h=ii.dot(ka),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ii.subVectors(t,e),Bn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Bn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),ls.subVectors(r,n),Ha.subVectors(t,n);let c=cs.dot(Ha),l=ls.dot(Ha);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,s);let h=cs.dot(Va),u=ls.dot(Va);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(cs,o);Ga.subVectors(t,r);let f=cs.dot(Ga),m=ls.dot(Ga);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ls,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Dh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Dh,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Hl(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return xe.fromWorkingColorSpace(nn.copy(this),t),Math.round(We(nn.r*255,0,255))*65536+Math.round(We(nn.g*255,0,255))*256+Math.round(We(nn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ce){xe.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Gr);let n=rr(Mi.h,Gr.h,e),s=rr(Mi.s,Gr.s,e),r=rr(Mi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Qt;Qt.NAMES=Fu;Sp=0,di=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Zi(),this.name="",this.blending=xs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},As=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ke=new F,Wr=new _t,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gh&&(t.usage=this.usage),t}},yo=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}},vo=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Jt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=0,Rn=new ue,Za=new sn,hs=new F,Mn=new dn,js=new dn,Je=new F,pe=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?vo:yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Mn.min,js.min),Mn.expandByPoint(Je),Je.addVectors(Mn.max,js.max),Mn.expandByPoint(Je)):(Mn.expandByPoint(js.min),Mn.expandByPoint(js.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Je.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Je.add(hs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new F,c[w]=new F;let l=new F,h=new F,u=new F,d=new _t,f=new _t,m=new _t,x=new F,g=new F;function p(w,S,E){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(A),a[w].add(x),a[S].add(x),a[E].add(x),c[w].add(g),c[S].add(g),c[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let w=0,S=v.length;w<S;++w){let E=v[w],A=E.start,N=E.count;for(let D=A,O=A+N;D<O;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new F,_=new F,P=new F,M=new F;function b(w){P.fromBufferAttribute(s,w),M.copy(P);let S=a[w];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(M,S);let A=_.dot(c[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,A)}for(let w=0,S=v.length;w<S;++w){let E=v[w],A=E.start,N=E.count;for(let D=A,O=A+N;D<O;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new ue,Di=new Vi,Xr=new Jn,Nh=new F,qr=new F,Yr=new F,Zr=new F,$a=new F,$r=new F,Fh=new F,Jr=new F,Pt=class extends sn{constructor(t=new pe,e=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&($a.fromBufferAttribute(u,t),o?$r.addScaledVector($a,h):$r.addScaledVector($a.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Xr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Xr,Nh)===null||Di.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let M=a.getX(_),b=a.getX(_+1),w=a.getX(_+2);s=Kr(this,p,t,n,l,h,u,M,b,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Kr(this,o,t,n,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let M=_,b=_+1,w=_+2;s=Kr(this,p,t,n,l,h,u,M,b,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,y=g+1,_=g+2;s=Kr(this,o,t,n,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};He=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function m(x,g,p,v,y,_,P,M,b,w,S){let E=_/b,A=P/w,N=_/2,D=P/2,O=M/2,H=b+1,U=w+1,z=0,C=0,B=new F;for(let V=0;V<U;V++){let $=V*A-D;for(let ht=0;ht<H;ht++){let ft=ht*E-N;B[x]=ft*v,B[g]=$*y,B[p]=O,l.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=M>0?1:-1,h.push(B.x,B.y,B.z),u.push(ht/b),u.push(1-V/w),z+=1}}for(let V=0;V<w;V++)for(let $=0;$<b;$++){let ht=d+$+H*V,ft=d+$+H*(V+1),J=d+($+1)+H*(V+1),et=d+($+1)+H*V;c.push(ht,ft,et),c.push(ft,J,et),C+=6}a.addGroup(f,C,S),f+=C,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Vl={clone:Rs,merge:on},Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new F,Oh=new _t,Bh=new _t,an=class extends Mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,Jc=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new an(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new an(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new an(us,ds,t,e);a.layers=this.layers,this.add(a);let c=new an(us,ds,t,e);c.layers=this.layers,this.add(c);let l=new an(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Eo=class extends cn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kc=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new He(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:bi});r.uniforms.tEquirect.value=e;let o=new Pt(s,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Cn),new Jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ja=new F,Cp=new F,Pp=new fe,zn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ja.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pp.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Jn,jr=new F,fr=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+v).normalize(),n[3].setComponents(c-o,d-h,g-m,_-v).normalize(),n[4].setComponents(c-a,d-u,g-x,_-y).normalize(),e===oi)n[5].setComponents(c+a,d+u,g+x,_+y).normalize();else if(e===go)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ai=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let y=0;y<l;y++){let _=y*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let y=v+l*p,_=v+l*(p+1),P=v+1+l*(p+1),M=v+1+l*p;f.push(y,_,M),f.push(_,P,M)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,im=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:Lp,alphahash_pars_fragment:Dp,alphamap_fragment:Up,alphamap_pars_fragment:Np,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:Bp,aomap_pars_fragment:zp,batching_pars_vertex:kp,batching_vertex:Hp,begin_vertex:Vp,beginnormal_vertex:Gp,bsdfs:Wp,iridescence_fragment:Xp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Jp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:Qp,color_vertex:tm,common:em,cube_uv_reflection_fragment:nm,defaultnormal_vertex:im,displacementmap_pars_vertex:sm,displacementmap_vertex:rm,emissivemap_fragment:om,emissivemap_pars_fragment:am,colorspace_fragment:cm,colorspace_pars_fragment:lm,envmap_fragment:hm,envmap_common_pars_fragment:um,envmap_pars_fragment:dm,envmap_pars_vertex:fm,envmap_physical_pars_fragment:bm,envmap_vertex:pm,fog_vertex:mm,fog_pars_vertex:gm,fog_fragment:_m,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:vm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:Em,lights_pars_begin:Sm,lights_toon_fragment:wm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Am,lights_phong_pars_fragment:Rm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Lm,lights_fragment_end:Dm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Wm,morphcolor_vertex:Xm,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:Zm,normal_fragment_begin:$m,normal_fragment_maps:Jm,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:Qm,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:s0,opaque_fragment:r0,packing:o0,premultiplied_alpha_fragment:a0,project_vertex:c0,dithering_fragment:l0,dithering_pars_fragment:h0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:_0,skinning_pars_vertex:x0,skinning_vertex:y0,skinnormal_vertex:v0,specularmap_fragment:M0,specularmap_pars_fragment:E0,tonemapping_fragment:S0,tonemapping_pars_fragment:b0,transmission_fragment:w0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:R0,uv_vertex:C0,worldpos_vertex:P0,background_vert:I0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:U0,cube_vert:N0,cube_frag:F0,depth_vert:O0,depth_frag:B0,distanceRGBA_vert:z0,distanceRGBA_frag:k0,equirect_vert:H0,equirect_frag:V0,linedashed_vert:G0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:q0,meshlambert_vert:Y0,meshlambert_frag:Z0,meshmatcap_vert:$0,meshmatcap_frag:J0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:Q0,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:og,shadow_vert:ag,shadow_frag:cg,sprite_vert:lg,sprite_frag:hg},Nt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Yn={basic:{uniforms:on([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:on([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:on([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:on([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:on([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:on([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:on([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:on([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:on([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:on([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:on([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:on([Nt.common,Nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:on([Nt.lights,Nt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};Qr={r:0,b:0,g:0},Ni=new wn,ug=new ue;So=class extends Mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,zh=[.125,.215,.35,.446,.526,.582],ki=20,Ka=new So,kh=new Qt,ja=null,Qa=0,tc=0,ec=!1,Oi=(1+Math.sqrt(5))/2,fs=1/Oi,Hh=[new F(-Oi,fs,0),new F(Oi,fs,0),new F(-fs,0,Oi),new F(fs,0,Oi),new F(0,Oi,-fs),new F(0,Oi,fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Qa,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Tr,format:En,colorSpace:Ns,depthBuffer:!1},s=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=yg(r,t,e)}return s}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,s){let a=new an(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kh),h.toneMapping=wi,h.autoClear=!1;let f=new As({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new Pt(new He,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(kh),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;to(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;to(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hh[(s-r-1)%Hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ki;g>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);let p=[],v=0;for(let b=0;b<ki;++b){let w=b/x,S=Math.exp(-w*w/2);p.push(S),b===0?v+=S:b<g&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-gs?s-y+gs:0),M=4*(this._cubeSize-_);to(e,P,M,3*_,2*_),c.setRenderTarget(e),c.render(u,Ka)}};bo=class extends cn{constructor(t,e,n,s,r,o,a,c,l,h=ys){if(h!==ys&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Hi),n===void 0&&h===Ts&&(n=ws),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zu=new cn,Xh=new bo(1,1),ku=new xo,Hu=new $c,Vu=new Eo,qh=[],Yh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},Qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};p_=37297,m_=0;Qh=new fe;eo=new F;b_=/^[ \t]*#include +<([\w\d./]+)>/gm;w_=new Map;A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;N_=0,nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new il(t),e.set(t,n)),n}},il=class{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}};V_=0;pr=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;$_={[hc]:uc,[dc]:mc,[fc]:gc,[Es]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:Es};rl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:ex,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new ol,g=e.getContextAttributes(),p=null,v=null,y=[],_=[],P=new _t,M=null,b=new an;b.viewport=new Be;let w=new an;w.viewport=new Be;let S=[b,w],E=new rl,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=y[J];return et===void 0&&(et=new or,y[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=y[J];return et===void 0&&(et=new or,y[J]=et),et.getGripSpace()},this.getHand=function(J){let et=y[J];return et===void 0&&(et=new or,y[J]=et),et.getHandSpace()};function D(J){let et=_.indexOf(J.inputSource);if(et===-1)return;let dt=y[et];dt!==void 0&&(dt.update(J.inputSource,J.frame,l||o),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let J=0;J<y.length;J++){let et=_[J];et!==null&&(_[J]=null,y[J].disconnect(et))}A=null,N=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ui(f.framebufferWidth,f.framebufferHeight,{format:En,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,dt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Ts:ys,dt=g.stencil?ws:Hi);let vt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ui(d.textureWidth,d.textureHeight,{format:En,type:li,depthTexture:new bo(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(J){for(let et=0;et<J.removed.length;et++){let dt=J.removed[et],ot=_.indexOf(dt);ot>=0&&(_[ot]=null,y[ot].disconnect(dt))}for(let et=0;et<J.added.length;et++){let dt=J.added[et],ot=_.indexOf(dt);if(ot===-1){for(let xt=0;xt<y.length;xt++)if(xt>=_.length){_.push(dt),ot=xt;break}else if(_[xt]===null){_[xt]=dt,ot=xt;break}if(ot===-1)break}let vt=y[ot];vt&&vt.connect(dt)}}let U=new F,z=new F;function C(J,et,dt){U.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(dt.matrixWorld);let ot=U.distanceTo(z),vt=et.projectionMatrix.elements,xt=dt.projectionMatrix.elements,nt=vt[14]/(vt[10]-1),St=vt[14]/(vt[10]+1),W=(vt[9]+1)/vt[5],X=(vt[9]-1)/vt[5],L=(vt[8]-1)/vt[0],st=(xt[8]+1)/xt[0],G=nt*L,Y=nt*st,Q=ot/(-L+st),at=Q*-L;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(at),J.translateZ(Q),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),vt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let q=nt+Q,R=St+Q,T=G-at,k=Y+(ot-at),tt=W*St/R*q,rt=X*St/R*q;J.projectionMatrix.makePerspective(T,k,tt,rt,q,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function B(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,dt=J.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),E.near=w.near=b.near=et,E.far=w.far=b.far=dt,(A!==E.near||N!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,N=E.far),b.layers.mask=J.layers.mask|2,w.layers.mask=J.layers.mask|4,E.layers.mask=b.layers.mask|w.layers.mask;let ot=J.parent,vt=E.cameras;B(E,ot);for(let xt=0;xt<vt.length;xt++)B(vt[xt],ot);vt.length===2?C(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),V(J,E,ot)};function V(J,et,dt){dt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let $=null;function ht(J,et){if(h=et.getViewerPose(l||o),m=et,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;dt.length!==E.cameras.length&&(E.cameras.length=0,ot=!0);for(let xt=0;xt<dt.length;xt++){let nt=dt[xt],St=null;if(f!==null)St=f.getViewport(nt);else{let X=u.getViewSubImage(d,nt);St=X.viewport,xt===0&&(t.setRenderTargetTextures(v,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(v))}let W=S[xt];W===void 0&&(W=new an,W.layers.enable(xt),W.viewport=new Be,S[xt]=W),W.matrix.fromArray(nt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(nt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(St.x,St.y,St.width,St.height),xt===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ot===!0&&E.cameras.push(W)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let xt=u.getDepthInformation(dt[0]);xt&&xt.isValid&&xt.texture&&x.init(t,xt,s.renderState)}}for(let dt=0;dt<y.length;dt++){let ot=_[dt],vt=y[dt];ot!==null&&vt!==void 0&&vt.update(ot,et,l||o)}$&&$(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let ft=new Bu;ft.setAnimationLoop(ht),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}},Fi=new wn,ix=new ue;wo=class{constructor(t={}){let{canvas:e=hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=wi,this.toneMappingExposure=1;let _=this,P=!1,M=0,b=0,w=null,S=-1,E=null,A=new Be,N=new Be,D=null,O=new Qt(0),H=0,U=e.width,z=e.height,C=1,B=null,V=null,$=new Be(0,0,U,z),ht=new Be(0,0,U,z),ft=!1,J=new fr,et=!1,dt=!1,ot=new ue,vt=new ue,xt=new F,nt=new Be,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},W=!1;function X(){return w===null?C:1}let L=n;function st(I,Z){return e.getContext(I,Z)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),L===null){let Z="webgl2";if(L=st(Z,I),L===null)throw st(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let G,Y,Q,at,q,R,T,k,tt,rt,it,mt,ut,yt,Ct,Mt,Ut,Vt,Yt,Lt,ce,re,Se,K;function Dt(){G=new Mg(L),G.init(),re=new Q_(L,G),Y=new mg(L,G,t,re),Q=new J_(L,G),Y.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),at=new bg(L),q=new O_,R=new j_(L,G,Q,q,Y,re,at),T=new _g(_),k=new vg(_),tt=new Ip(L),Se=new fg(L,tt),rt=new Eg(L,tt,at,Se),it=new Tg(L,rt,tt,at),Yt=new wg(L,Y,R),Mt=new gg(q),mt=new F_(_,T,k,G,Y,Se,Mt),ut=new sx(_,q),yt=new z_,Ct=new X_(G),Vt=new dg(_,T,k,Q,it,f,c),Ut=new Z_(_,it,Y),K=new rx(L,at,Y,Q),Lt=new pg(L,G,at),ce=new Sg(L,G,at),at.programs=mt.programs,_.capabilities=Y,_.extensions=G,_.properties=q,_.renderLists=yt,_.shadowMap=Ut,_.state=Q,_.info=at}Dt();let gt=new al(_,L);this.xr=gt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let I=G.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=G.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(I){I!==void 0&&(C=I,this.setSize(U,z,!1))},this.getSize=function(I){return I.set(U,z)},this.setSize=function(I,Z,ct=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=I,z=Z,e.width=Math.floor(I*C),e.height=Math.floor(Z*C),ct===!0&&(e.style.width=I+"px",e.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(U*C,z*C).floor()},this.setDrawingBufferSize=function(I,Z,ct){U=I,z=Z,C=ct,e.width=Math.floor(I*ct),e.height=Math.floor(Z*ct),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy($)},this.setViewport=function(I,Z,ct,lt){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,Z,ct,lt),Q.viewport(A.copy($).multiplyScalar(C).round())},this.getScissor=function(I){return I.copy(ht)},this.setScissor=function(I,Z,ct,lt){I.isVector4?ht.set(I.x,I.y,I.z,I.w):ht.set(I,Z,ct,lt),Q.scissor(N.copy(ht).multiplyScalar(C).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(I){Q.setScissorTest(ft=I)},this.setOpaqueSort=function(I){B=I},this.setTransparentSort=function(I){V=I},this.getClearColor=function(I){return I.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(I=!0,Z=!0,ct=!0){let lt=0;if(I){let j=!1;if(w!==null){let At=w.texture.format;j=At===Bl||At===Ol||At===Fl}if(j){let At=w.texture.type,Bt=At===li||At===Hi||At===lr||At===ws||At===Dl||At===Ul,Wt=Vt.getClearColor(),Zt=Vt.getClearAlpha(),le=Wt.r,de=Wt.g,$t=Wt.b;Bt?(m[0]=le,m[1]=de,m[2]=$t,m[3]=Zt,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=le,x[1]=de,x[2]=$t,x[3]=Zt,L.clearBufferiv(L.COLOR,0,x))}else lt|=L.COLOR_BUFFER_BIT}Z&&(lt|=L.DEPTH_BUFFER_BIT),ct&&(lt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),yt.dispose(),Ct.dispose(),q.dispose(),T.dispose(),k.dispose(),it.dispose(),Se.dispose(),K.dispose(),mt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Xn),gt.removeEventListener("sessionend",ji),pt.stop()};function Et(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let I=at.autoReset,Z=Ut.enabled,ct=Ut.autoUpdate,lt=Ut.needsUpdate,j=Ut.type;Dt(),at.autoReset=I,Ut.enabled=Z,Ut.autoUpdate=ct,Ut.needsUpdate=lt,Ut.type=j}function Ft(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function oe(I){let Z=I.target;Z.removeEventListener("dispose",oe),De(Z)}function De(I){ve(I),q.remove(I)}function ve(I){let Z=q.get(I).programs;Z!==void 0&&(Z.forEach(function(ct){mt.releaseProgram(ct)}),I.isShaderMaterial&&mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,ct,lt,j,At){Z===null&&(Z=St);let Bt=j.isMesh&&j.matrixWorld.determinant()<0,Wt=ne(I,Z,ct,lt,j);Q.setMaterial(lt,Bt);let Zt=ct.index,le=1;if(lt.wireframe===!0){if(Zt=rt.getWireframeAttribute(ct),Zt===void 0)return;le=2}let de=ct.drawRange,$t=ct.attributes.position,ye=de.start*le,Re=(de.start+de.count)*le;At!==null&&(ye=Math.max(ye,At.start*le),Re=Math.min(Re,(At.start+At.count)*le)),Zt!==null?(ye=Math.max(ye,0),Re=Math.min(Re,Zt.count)):$t!=null&&(ye=Math.max(ye,0),Re=Math.min(Re,$t.count));let Pe=Re-ye;if(Pe<0||Pe===1/0)return;Se.setup(j,lt,Wt,ct,Zt);let un,Me=Lt;if(Zt!==null&&(un=tt.get(Zt),Me=ce,Me.setIndex(un)),j.isMesh)lt.wireframe===!0?(Q.setLineWidth(lt.wireframeLinewidth*X()),Me.setMode(L.LINES)):Me.setMode(L.TRIANGLES);else if(j.isLine){let jt=lt.linewidth;jt===void 0&&(jt=1),Q.setLineWidth(jt*X()),j.isLineSegments?Me.setMode(L.LINES):j.isLineLoop?Me.setMode(L.LINE_LOOP):Me.setMode(L.LINE_STRIP)}else j.isPoints?Me.setMode(L.POINTS):j.isSprite&&Me.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Me.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let jt=j._multiDrawStarts,Qn=j._multiDrawCounts,Ee=j._multiDrawCount,Nn=Zt?tt.get(Zt).bytesPerElement:1,Qi=q.get(lt).currentProgram.getUniforms();for(let yn=0;yn<Ee;yn++)Qi.setValue(L,"_gl_DrawID",yn),Me.render(jt[yn]/Nn,Qn[yn])}else if(j.isInstancedMesh)Me.renderInstances(ye,Pe,j.count);else if(ct.isInstancedBufferGeometry){let jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Qn=Math.min(ct.instanceCount,jt);Me.renderInstances(ye,Pe,Qn)}else Me.render(ye,Pe)};function ge(I,Z,ct){I.transparent===!0&&I.side===Xt&&I.forceSinglePass===!1?(I.side=Ke,I.needsUpdate=!0,kt(I,Z,ct),I.side=Ti,I.needsUpdate=!0,kt(I,Z,ct),I.side=Xt):kt(I,Z,ct)}this.compile=function(I,Z,ct=null){ct===null&&(ct=I),p=Ct.get(ct),p.init(Z),y.push(p),ct.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),I!==ct&&I.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();let lt=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let At=j.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let Wt=At[Bt];ge(Wt,ct,j),lt.add(Wt)}else ge(At,ct,j),lt.add(At)}),y.pop(),p=null,lt},this.compileAsync=function(I,Z,ct=null){let lt=this.compile(I,Z,ct);return new Promise(j=>{function At(){if(lt.forEach(function(Bt){q.get(Bt).currentProgram.isReady()&&lt.delete(Bt)}),lt.size===0){j(I);return}setTimeout(At,10)}G.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ge=null;function Un(I){Ge&&Ge(I)}function Xn(){pt.stop()}function ji(){pt.start()}let pt=new Bu;pt.setAnimationLoop(Un),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(I){Ge=I,gt.setAnimationLoop(I),I===null?pt.stop():pt.start()},gt.addEventListener("sessionstart",Xn),gt.addEventListener("sessionend",ji),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(Z),Z=gt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,Z,w),p=Ct.get(I,y.length),p.init(Z),y.push(p),vt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(vt),dt=this.localClippingEnabled,et=Mt.init(this.clippingPlanes,dt),g=yt.get(I,v.length),g.init(),v.push(g),gt.enabled===!0&&gt.isPresenting===!0){let At=_.xr.getDepthSensingMesh();At!==null&&Rt(At,Z,-1/0,_.sortObjects)}Rt(I,Z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(B,V),W=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,W&&Vt.addToRenderList(g,I),this.info.render.frame++,et===!0&&Mt.beginShadows();let ct=p.state.shadowsArray;Ut.render(ct,I,Z),et===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=g.opaque,j=g.transmissive;if(p.setupLights(),Z.isArrayCamera){let At=Z.cameras;if(j.length>0)for(let Bt=0,Wt=At.length;Bt<Wt;Bt++){let Zt=At[Bt];wt(lt,j,I,Zt)}W&&Vt.render(I);for(let Bt=0,Wt=At.length;Bt<Wt;Bt++){let Zt=At[Bt];It(g,I,Zt,Zt.viewport)}}else j.length>0&&wt(lt,j,I,Z),W&&Vt.render(I),It(g,I,Z);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(_,I,Z),Se.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&Mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Rt(I,Z,ct,lt){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)ct=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||J.intersectsSprite(I)){lt&&nt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(vt);let Bt=it.update(I),Wt=I.material;Wt.visible&&g.push(I,Bt,Wt,ct,nt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||J.intersectsObject(I))){let Bt=it.update(I),Wt=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),nt.copy(I.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),nt.copy(Bt.boundingSphere.center)),nt.applyMatrix4(I.matrixWorld).applyMatrix4(vt)),Array.isArray(Wt)){let Zt=Bt.groups;for(let le=0,de=Zt.length;le<de;le++){let $t=Zt[le],ye=Wt[$t.materialIndex];ye&&ye.visible&&g.push(I,Bt,ye,ct,nt.z,$t)}}else Wt.visible&&g.push(I,Bt,Wt,ct,nt.z,null)}}let At=I.children;for(let Bt=0,Wt=At.length;Bt<Wt;Bt++)Rt(At[Bt],Z,ct,lt)}function It(I,Z,ct,lt){let j=I.opaque,At=I.transmissive,Bt=I.transparent;p.setupLightsView(ct),et===!0&&Mt.setGlobalState(_.clippingPlanes,ct),lt&&Q.viewport(A.copy(lt)),j.length>0&&Ht(j,Z,ct),At.length>0&&Ht(At,Z,ct),Bt.length>0&&Ht(Bt,Z,ct),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function wt(I,Z,ct,lt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new ui(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Tr:li,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));let At=p.state.transmissionRenderTarget[lt.id],Bt=lt.viewport||A;At.setSize(Bt.z,Bt.w);let Wt=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(O),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),W&&Vt.render(ct);let Zt=_.toneMapping;_.toneMapping=wi;let le=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),et===!0&&Mt.setGlobalState(_.clippingPlanes,lt),Ht(I,ct,lt),R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At),G.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let $t=0,ye=Z.length;$t<ye;$t++){let Re=Z[$t],Pe=Re.object,un=Re.geometry,Me=Re.material,jt=Re.group;if(Me.side===Xt&&Pe.layers.test(lt.layers)){let Qn=Me.side;Me.side=Ke,Me.needsUpdate=!0,ee(Pe,ct,lt,un,Me,jt),Me.side=Qn,Me.needsUpdate=!0,de=!0}}de===!0&&(R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At))}_.setRenderTarget(Wt),_.setClearColor(O,H),le!==void 0&&(lt.viewport=le),_.toneMapping=Zt}function Ht(I,Z,ct){let lt=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,At=I.length;j<At;j++){let Bt=I[j],Wt=Bt.object,Zt=Bt.geometry,le=lt===null?Bt.material:lt,de=Bt.group;Wt.layers.test(ct.layers)&&ee(Wt,Z,ct,Zt,le,de)}}function ee(I,Z,ct,lt,j,At){I.onBeforeRender(_,Z,ct,lt,j,At),I.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(_,Z,ct,lt,I,At),j.transparent===!0&&j.side===Xt&&j.forceSinglePass===!1?(j.side=Ke,j.needsUpdate=!0,_.renderBufferDirect(ct,Z,lt,j,I,At),j.side=Ti,j.needsUpdate=!0,_.renderBufferDirect(ct,Z,lt,j,I,At),j.side=Xt):_.renderBufferDirect(ct,Z,lt,j,I,At),I.onAfterRender(_,Z,ct,lt,j,At)}function kt(I,Z,ct){Z.isScene!==!0&&(Z=St);let lt=q.get(I),j=p.state.lights,At=p.state.shadowsArray,Bt=j.state.version,Wt=mt.getParameters(I,j.state,At,Z,ct),Zt=mt.getProgramCacheKey(Wt),le=lt.programs;lt.environment=I.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(I.isMeshStandardMaterial?k:T).get(I.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,le===void 0&&(I.addEventListener("dispose",oe),le=new Map,lt.programs=le);let de=le.get(Zt);if(de!==void 0){if(lt.currentProgram===de&&lt.lightsStateVersion===Bt)return se(I,Wt),de}else Wt.uniforms=mt.getUniforms(I),I.onBeforeCompile(Wt,_),de=mt.acquireProgram(Wt,Zt),le.set(Zt,de),lt.uniforms=Wt.uniforms;let $t=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($t.clippingPlanes=Mt.uniform),se(I,Wt),lt.needsLights=ie(I),lt.lightsStateVersion=Bt,lt.needsLights&&($t.ambientLightColor.value=j.state.ambient,$t.lightProbe.value=j.state.probe,$t.directionalLights.value=j.state.directional,$t.directionalLightShadows.value=j.state.directionalShadow,$t.spotLights.value=j.state.spot,$t.spotLightShadows.value=j.state.spotShadow,$t.rectAreaLights.value=j.state.rectArea,$t.ltc_1.value=j.state.rectAreaLTC1,$t.ltc_2.value=j.state.rectAreaLTC2,$t.pointLights.value=j.state.point,$t.pointLightShadows.value=j.state.pointShadow,$t.hemisphereLights.value=j.state.hemi,$t.directionalShadowMap.value=j.state.directionalShadowMap,$t.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$t.spotShadowMap.value=j.state.spotShadowMap,$t.spotLightMatrix.value=j.state.spotLightMatrix,$t.spotLightMap.value=j.state.spotLightMap,$t.pointShadowMap.value=j.state.pointShadowMap,$t.pointShadowMatrix.value=j.state.pointShadowMatrix),lt.currentProgram=de,lt.uniformsList=null,de}function Ot(I){if(I.uniformsList===null){let Z=I.currentProgram.getUniforms();I.uniformsList=Ms.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function se(I,Z){let ct=q.get(I);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function ne(I,Z,ct,lt,j){Z.isScene!==!0&&(Z=St),R.resetTextureUnits();let At=Z.fog,Bt=lt.isMeshStandardMaterial?Z.environment:null,Wt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ns,Zt=(lt.isMeshStandardMaterial?k:T).get(lt.envMap||Bt),le=lt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,de=!!ct.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!ct.morphAttributes.position,ye=!!ct.morphAttributes.normal,Re=!!ct.morphAttributes.color,Pe=wi;lt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let un=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Me=un!==void 0?un.length:0,jt=q.get(lt),Qn=p.state.lights;if(et===!0&&(dt===!0||I!==E)){let An=I===E&&lt.id===S;Mt.setState(lt,I,An)}let Ee=!1;lt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Qn.state.version||jt.outputColorSpace!==Wt||j.isBatchedMesh&&jt.batching===!1||!j.isBatchedMesh&&jt.batching===!0||j.isBatchedMesh&&jt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&jt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&jt.instancing===!1||!j.isInstancedMesh&&jt.instancing===!0||j.isSkinnedMesh&&jt.skinning===!1||!j.isSkinnedMesh&&jt.skinning===!0||j.isInstancedMesh&&jt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&jt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&jt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&jt.instancingMorph===!1&&j.morphTexture!==null||jt.envMap!==Zt||lt.fog===!0&&jt.fog!==At||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Mt.numPlanes||jt.numIntersection!==Mt.numIntersection)||jt.vertexAlphas!==le||jt.vertexTangents!==de||jt.morphTargets!==$t||jt.morphNormals!==ye||jt.morphColors!==Re||jt.toneMapping!==Pe||jt.morphTargetsCount!==Me)&&(Ee=!0):(Ee=!0,jt.__version=lt.version);let Nn=jt.currentProgram;Ee===!0&&(Nn=kt(lt,Z,j));let Qi=!1,yn=!1,Ys=!1,Ie=Nn.getUniforms(),qn=jt.uniforms;if(Q.useProgram(Nn.program)&&(Qi=!0,yn=!0,Ys=!0),lt.id!==S&&(S=lt.id,yn=!0),Qi||E!==I){Q.buffers.depth.getReversed()?(ot.copy(I.projectionMatrix),dp(ot),fp(ot),Ie.setValue(L,"projectionMatrix",ot)):Ie.setValue(L,"projectionMatrix",I.projectionMatrix),Ie.setValue(L,"viewMatrix",I.matrixWorldInverse);let mi=Ie.map.cameraPosition;mi!==void 0&&mi.setValue(L,xt.setFromMatrixPosition(I.matrixWorld)),Y.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,yn=!0,Ys=!0)}if(j.isSkinnedMesh){Ie.setOptional(L,j,"bindMatrix"),Ie.setOptional(L,j,"bindMatrixInverse");let An=j.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ie.setValue(L,"boneTexture",An.boneTexture,R))}j.isBatchedMesh&&(Ie.setOptional(L,j,"batchingTexture"),Ie.setValue(L,"batchingTexture",j._matricesTexture,R),Ie.setOptional(L,j,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",j._indirectTexture,R),Ie.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",j._colorsTexture,R));let Zs=ct.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Yt.update(j,ct,Nn),(yn||jt.receiveShadow!==j.receiveShadow)&&(jt.receiveShadow=j.receiveShadow,Ie.setValue(L,"receiveShadow",j.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(qn.envMap.value=Zt,qn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(qn.envMapIntensity.value=Z.environmentIntensity),yn&&(Ie.setValue(L,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&Gt(qn,Ys),At&&lt.fog===!0&&ut.refreshFogUniforms(qn,At),ut.refreshMaterialUniforms(qn,lt,C,z,p.state.transmissionRenderTarget[I.id]),Ms.upload(L,Ot(jt),qn,R)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ms.upload(L,Ot(jt),qn,R),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ie.setValue(L,"center",j.center),Ie.setValue(L,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(L,"normalMatrix",j.normalMatrix),Ie.setValue(L,"modelMatrix",j.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let An=lt.uniformsGroups;for(let mi=0,gi=An.length;mi<gi;mi++){let ah=An[mi];K.update(ah,Nn),K.bind(ah,Nn)}}return Nn}function Gt(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function ie(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,Z,ct){q.get(I.texture).__webglTexture=Z,q.get(I.depthTexture).__webglTexture=ct;let lt=q.get(I);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ct===void 0,lt.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){let ct=q.get(I);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,ct=0){w=I,M=Z,b=ct;let lt=!0,j=null,At=!1,Bt=!1;if(I){let Zt=q.get(I);if(Zt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),lt=!1;else if(Zt.__webglFramebuffer===void 0)R.setupRenderTarget(I);else if(Zt.__hasExternalTextures)R.rebindTextures(I,q.get(I.texture).__webglTexture,q.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let $t=I.depthTexture;if(Zt.__boundDepthTexture!==$t){if($t!==null&&q.has($t)&&(I.width!==$t.image.width||I.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(I)}}let le=I.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Bt=!0);let de=q.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(de[Z])?j=de[Z][ct]:j=de[Z],At=!0):I.samples>0&&R.useMultisampledRTT(I)===!1?j=q.get(I).__webglMultisampledFramebuffer:Array.isArray(de)?j=de[ct]:j=de,A.copy(I.viewport),N.copy(I.scissor),D=I.scissorTest}else A.copy($).multiplyScalar(C).floor(),N.copy(ht).multiplyScalar(C).floor(),D=ft;if(Q.bindFramebuffer(L.FRAMEBUFFER,j)&&lt&&Q.drawBuffers(I,j),Q.viewport(A),Q.scissor(N),Q.setScissorTest(D),At){let Zt=q.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Zt.__webglTexture,ct)}else if(Bt){let Zt=q.get(I.texture),le=Z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,ct||0,le)}S=-1},this.readRenderTargetPixels=function(I,Z,ct,lt,j,At,Bt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){Q.bindFramebuffer(L.FRAMEBUFFER,Wt);try{let Zt=I.texture,le=Zt.format,de=Zt.type;if(!Y.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-lt&&ct>=0&&ct<=I.height-j&&L.readPixels(Z,ct,lt,j,re.convert(le),re.convert(de),At)}finally{let Zt=w!==null?q.get(w).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(I,Z,ct,lt,j,At,Bt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){let Zt=I.texture,le=Zt.format,de=Zt.type;if(!Y.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-lt&&ct>=0&&ct<=I.height-j){Q.bindFramebuffer(L.FRAMEBUFFER,Wt);let $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,At.byteLength,L.STREAM_READ),L.readPixels(Z,ct,lt,j,re.convert(le),re.convert(de),0);let ye=w!==null?q.get(w).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ye);let Re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await up(L,Re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,At),L.deleteBuffer($t),L.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Z=null,ct=0){I.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);let lt=Math.pow(2,-ct),j=Math.floor(I.image.width*lt),At=Math.floor(I.image.height*lt),Bt=Z!==null?Z.x:0,Wt=Z!==null?Z.y:0;R.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,ct,0,0,Bt,Wt,j,At),Q.unbindTexture()},this.copyTextureToTexture=function(I,Z,ct=null,lt=null,j=0){I.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,I=arguments[1],Z=arguments[2],j=arguments[3]||0,ct=null);let At,Bt,Wt,Zt,le,de,$t,ye,Re,Pe=I.isCompressedTexture?I.mipmaps[j]:I.image;ct!==null?(At=ct.max.x-ct.min.x,Bt=ct.max.y-ct.min.y,Wt=ct.isBox3?ct.max.z-ct.min.z:1,Zt=ct.min.x,le=ct.min.y,de=ct.isBox3?ct.min.z:0):(At=Pe.width,Bt=Pe.height,Wt=Pe.depth||1,Zt=0,le=0,de=0),lt!==null?($t=lt.x,ye=lt.y,Re=lt.z):($t=0,ye=0,Re=0);let un=re.convert(Z.format),Me=re.convert(Z.type),jt;Z.isData3DTexture?(R.setTexture3D(Z,0),jt=L.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(R.setTexture2DArray(Z,0),jt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(Z,0),jt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);let Qn=L.getParameter(L.UNPACK_ROW_LENGTH),Ee=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qi=L.getParameter(L.UNPACK_SKIP_ROWS),yn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,de);let Ys=I.isDataArrayTexture||I.isData3DTexture,Ie=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let qn=q.get(I),Zs=q.get(Z),An=q.get(qn.__renderTarget),mi=q.get(Zs.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,An.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Wt;gi++)Ys&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(I).__webglTexture,j,de+gi),I.isDepthTexture?(Ie&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(Z).__webglTexture,j,Re+gi),L.blitFramebuffer(Zt,le,At,Bt,$t,ye,At,Bt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ie?L.copyTexSubImage3D(jt,j,$t,ye,Re+gi,Zt,le,At,Bt):L.copyTexSubImage2D(jt,j,$t,ye,Re+gi,Zt,le,At,Bt);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ie?I.isDataTexture||I.isData3DTexture?L.texSubImage3D(jt,j,$t,ye,Re,At,Bt,Wt,un,Me,Pe.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(jt,j,$t,ye,Re,At,Bt,Wt,un,Pe.data):L.texSubImage3D(jt,j,$t,ye,Re,At,Bt,Wt,un,Me,Pe):I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,$t,ye,At,Bt,un,Me,Pe.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,$t,ye,Pe.width,Pe.height,un,Pe.data):L.texSubImage2D(L.TEXTURE_2D,j,$t,ye,At,Bt,un,Me,Pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yn),j===0&&Z.generateMipmaps&&L.generateMipmap(jt),Q.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,ct=null,lt=null,j=0){return I.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ct=arguments[0]||null,lt=arguments[1]||null,I=arguments[2],Z=arguments[3],j=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Z,ct,lt,j)},this.initRenderTarget=function(I){q.get(I).__webglFramebuffer===void 0&&R.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?R.setTextureCube(I,0):I.isData3DTexture?R.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?R.setTexture2DArray(I,0):R.setTexture2D(I,0),Q.unbindTexture()},this.resetState=function(){M=0,b=0,w=null,Q.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}},To=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gr=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_r=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new ue,lu=new ue,no=[],hu=new dn,ox=new ue,Qs=new Pt,tr=new Jn,Ve=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),hu.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),tr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),lu.multiplyMatrices(n,ps),Qs.matrixWorld=lu,Qs.raycast(t,no);for(let o=0,a=no.length;o<a;o++){let c=no[o];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,Nl,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ao=class extends di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ro=new F,Co=new F,uu=new ue,er=new Vi,io=new Jn,ic=new F,du=new F,Po=class extends sn{constructor(t=new pe,e=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;uu.copy(s).invert(),er.copy(t.ray).applyMatrix4(uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),v=h.getX(x+1),y=so(this,t,er,c,p,v);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=so(this,t,er,c,x,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=so(this,t,er,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=so(this,t,er,c,m-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};pn=class extends cn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,c=new ue;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cl=class extends xr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};ro=new F,sc=new Wl,rc=new Wl,oc=new Wl,yr=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ro.subVectors(s[0],s[1]).add(s[0]),l=ro);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),oc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),oc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sc.calc(c),rc.calc(c),oc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Io=class extends Pn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends Pn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends Pn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends Pn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Pn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Pn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y),ar(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(fu(a,c.x,l.x,h.x,u.x),fu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:yr,CubicBezierCurve:Io,CubicBezierCurve3:ll,EllipseCurve:xr,LineCurve:Lo,LineCurve3:hl,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Uo,SplineCurve:No}),ul=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fo[s.type]().fromJSON(s))}return this}},Oo=class extends ul{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lo(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Do(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Io(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new No(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new xr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bo=class i extends pe{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new F,d=new _t,f=new F,m=new F,x=new F,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let y=n+v*h*s,_=Math.sin(y),P=Math.cos(y);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*_,u.y=t[M].y,u.z=t[M].x*P,o.push(u.x,u.y,u.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);let b=c[3*M+0]*_,w=c[3*M+1],S=c[3*M+0]*P;l.push(b,w,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,P=_,M=_+t.length,b=_+t.length+1,w=_+1;r.push(P,M,w),r.push(b,w,M)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},zo=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new F,h=new _t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){let _=new F,P=new F,M=0,b=(e-t)/n;for(let w=0;w<=r;w++){let S=[],E=w/r,A=E*(e-t)+t;for(let N=0;N<=s;N++){let D=N/s,O=D*c+a,H=Math.sin(O),U=Math.cos(O);P.x=A*H,P.y=-E*n+g,P.z=A*U,u.push(P.x,P.y,P.z),_.set(H,b,U).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-E),S.push(m++)}x.push(S)}for(let w=0;w<s;w++)for(let S=0;S<r;S++){let E=x[S][w],A=x[S+1][w],N=x[S+1][w+1],D=x[S][w+1];(t>0||S!==0)&&(h.push(E,A,D),M+=3),(e>0||S!==r-1)&&(h.push(A,N,D),M+=3)}l.addGroup(p,M,0),p+=M}function y(_){let P=m,M=new _t,b=new F,w=0,S=_===!0?t:e,E=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let A=m;for(let N=0;N<=s;N++){let O=N/s*c+a,H=Math.cos(O),U=Math.sin(O);b.x=S*U,b.y=g*E,b.z=S*H,u.push(b.x,b.y,b.z),d.push(0,E,0),M.x=H*.5+.5,M.y=U*.5*E+.5,f.push(M.x,M.y),m++}for(let N=0;N<s;N++){let D=P+N,O=A+N;_===!0?h.push(O,O+1,D):h.push(O+1,O,D),w+=3}l.addGroup(p,w,_===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ps=class i extends be{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dl=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new F,_=new F,P=new F;for(let M=0;M<e.length;M+=3)f(e[M+0],y),f(e[M+1],_),f(e[M+2],P),c(y,_,P,v)}function c(v,y,_,P){let M=P+1,b=[];for(let w=0;w<=M;w++){b[w]=[];let S=v.clone().lerp(_,w/M),E=y.clone().lerp(_,w/M),A=M-w;for(let N=0;N<=A;N++)N===0&&w===M?b[w][N]=S:b[w][N]=S.clone().lerp(E,N/A)}for(let w=0;w<M;w++)for(let S=0;S<2*(M-w)-1;S++){let E=Math.floor(S/2);S%2===0?(d(b[w][E+1]),d(b[w+1][E]),d(b[w][E])):(d(b[w][E+1]),d(b[w+1][E+1]),d(b[w+1][E]))}}function l(v){let y=new F;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new F;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(_,1-P)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],P=o[v+4],M=Math.max(y,_,P),b=Math.min(y,_,P);M>.9&&b<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){let v=new F,y=new F,_=new F,P=new F,M=new _t,b=new _t,w=new _t;for(let S=0,E=0;S<r.length;S+=9,E+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),M.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),w.set(o[E+4],o[E+5]),P.copy(v).add(y).add(_).divideScalar(3);let A=g(P);x(M,E+0,v,A),x(b,E+2,y,A),x(w,E+4,_,A)}}function x(v,y,_,P){P<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Gi=class extends Oo{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Oo().fromJSON(s))}return this}},px={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=yx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return vr(r,o,e,a,c,f,0),o}};ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mu(t),gu(n,t);let o=t.length;e.forEach(mu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,gu(n,e[c]);let a=px.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};Is=class i extends pe{constructor(t=new Gi([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ix,y,_=!1,P,M,b,w;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,P=p.computeFrenetFrames(h,!1),M=new F,b=new F,w=new F),d||(g=0,f=0,m=0,x=0);let S=a.extractPoints(l),E=S.shape,A=S.holes;if(!ci.isClockWise(E)){E=E.reverse();for(let W=0,X=A.length;W<X;W++){let L=A[W];ci.isClockWise(L)&&(A[W]=L.reverse())}}let D=ci.triangulateShape(E,A),O=E;for(let W=0,X=A.length;W<X;W++){let L=A[W];E=E.concat(L)}function H(W,X,L){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(X,L)}let U=E.length,z=D.length;function C(W,X,L){let st,G,Y,Q=W.x-X.x,at=W.y-X.y,q=L.x-W.x,R=L.y-W.y,T=Q*Q+at*at,k=Q*R-at*q;if(Math.abs(k)>Number.EPSILON){let tt=Math.sqrt(T),rt=Math.sqrt(q*q+R*R),it=X.x-at/tt,mt=X.y+Q/tt,ut=L.x-R/rt,yt=L.y+q/rt,Ct=((ut-it)*R-(yt-mt)*q)/(Q*R-at*q);st=it+Q*Ct-W.x,G=mt+at*Ct-W.y;let Mt=st*st+G*G;if(Mt<=2)return new _t(st,G);Y=Math.sqrt(Mt/2)}else{let tt=!1;Q>Number.EPSILON?q>Number.EPSILON&&(tt=!0):Q<-Number.EPSILON?q<-Number.EPSILON&&(tt=!0):Math.sign(at)===Math.sign(R)&&(tt=!0),tt?(st=-at,G=Q,Y=Math.sqrt(T)):(st=Q,G=at,Y=Math.sqrt(T/2))}return new _t(st/Y,G/Y)}let B=[];for(let W=0,X=O.length,L=X-1,st=W+1;W<X;W++,L++,st++)L===X&&(L=0),st===X&&(st=0),B[W]=C(O[W],O[L],O[st]);let V=[],$,ht=B.concat();for(let W=0,X=A.length;W<X;W++){let L=A[W];$=[];for(let st=0,G=L.length,Y=G-1,Q=st+1;st<G;st++,Y++,Q++)Y===G&&(Y=0),Q===G&&(Q=0),$[st]=C(L[st],L[Y],L[Q]);V.push($),ht=ht.concat($)}for(let W=0;W<g;W++){let X=W/g,L=f*Math.cos(X*Math.PI/2),st=m*Math.sin(X*Math.PI/2)+x;for(let G=0,Y=O.length;G<Y;G++){let Q=H(O[G],B[G],st);ot(Q.x,Q.y,-L)}for(let G=0,Y=A.length;G<Y;G++){let Q=A[G];$=V[G];for(let at=0,q=Q.length;at<q;at++){let R=H(Q[at],$[at],st);ot(R.x,R.y,-L)}}}let ft=m+x;for(let W=0;W<U;W++){let X=d?H(E[W],ht[W],ft):E[W];_?(b.copy(P.normals[0]).multiplyScalar(X.x),M.copy(P.binormals[0]).multiplyScalar(X.y),w.copy(y[0]).add(b).add(M),ot(w.x,w.y,w.z)):ot(X.x,X.y,0)}for(let W=1;W<=h;W++)for(let X=0;X<U;X++){let L=d?H(E[X],ht[X],ft):E[X];_?(b.copy(P.normals[W]).multiplyScalar(L.x),M.copy(P.binormals[W]).multiplyScalar(L.y),w.copy(y[W]).add(b).add(M),ot(w.x,w.y,w.z)):ot(L.x,L.y,u/h*W)}for(let W=g-1;W>=0;W--){let X=W/g,L=f*Math.cos(X*Math.PI/2),st=m*Math.sin(X*Math.PI/2)+x;for(let G=0,Y=O.length;G<Y;G++){let Q=H(O[G],B[G],st);ot(Q.x,Q.y,u+L)}for(let G=0,Y=A.length;G<Y;G++){let Q=A[G];$=V[G];for(let at=0,q=Q.length;at<q;at++){let R=H(Q[at],$[at],st);_?ot(R.x,R.y+y[h-1].y,y[h-1].x+L):ot(R.x,R.y,u+L)}}}J(),et();function J(){let W=s.length/3;if(d){let X=0,L=U*X;for(let st=0;st<z;st++){let G=D[st];vt(G[2]+L,G[1]+L,G[0]+L)}X=h+g*2,L=U*X;for(let st=0;st<z;st++){let G=D[st];vt(G[0]+L,G[1]+L,G[2]+L)}}else{for(let X=0;X<z;X++){let L=D[X];vt(L[2],L[1],L[0])}for(let X=0;X<z;X++){let L=D[X];vt(L[0]+U*h,L[1]+U*h,L[2]+U*h)}}n.addGroup(W,s.length/3-W,0)}function et(){let W=s.length/3,X=0;dt(O,X),X+=O.length;for(let L=0,st=A.length;L<st;L++){let G=A[L];dt(G,X),X+=G.length}n.addGroup(W,s.length/3-W,1)}function dt(W,X){let L=W.length;for(;--L>=0;){let st=L,G=L-1;G<0&&(G=W.length-1);for(let Y=0,Q=h+g*2;Y<Q;Y++){let at=U*Y,q=U*(Y+1),R=X+st+at,T=X+G+at,k=X+G+q,tt=X+st+q;xt(R,T,k,tt)}}}function ot(W,X,L){c.push(W),c.push(X),c.push(L)}function vt(W,X,L){nt(W),nt(X),nt(L);let st=s.length/3,G=v.generateTopUV(n,s,st-3,st-2,st-1);St(G[0]),St(G[1]),St(G[2])}function xt(W,X,L,st){nt(W),nt(X),nt(st),nt(X),nt(L),nt(st);let G=s.length/3,Y=v.generateSideWallUV(n,s,G-6,G-3,G-2,G-1);St(Y[0]),St(Y[1]),St(Y[3]),St(Y[1]),St(Y[2]),St(Y[3])}function nt(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function St(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fo[s.type]().fromJSON(s)),new i(n,t.options)}},Ix={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _t(o,1-c),new _t(l,1-u),new _t(d,1-m),new _t(x,1-p)]:[new _t(a,1-c),new _t(h,1-u),new _t(f,1-m),new _t(g,1-p)]}};Ls=class i extends dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ko=class i extends pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new F,m=new _t;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,_=v+n+1,P=v+n+2,M=v+1;a.push(y,_,M),a.push(_,P,M)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},In=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,d=new F,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){let M=P/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(M+_,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],_=h[p][v],P=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,M),(p!==n-1||c<Math.PI)&&f.push(_,P,M)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Xi=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new F,u=new F,d=new F;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ho=class i extends pe{constructor(t=new Uo(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,c=new F,l=new _t,h=new F,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);let _=o.normals[y],P=o.binormals[y];for(let M=0;M<=s;M++){let b=M/s*Math.PI*2,w=Math.sin(b),S=-Math.cos(b);c.x=S*_.x+w*P.x,c.y=S*_.y+w*P.y,c.z=S*_.z+w*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let P=(s+1)*(y-1)+(_-1),M=(s+1)*y+(_-1),b=(s+1)*y+_,w=(s+1)*(y-1)+_;m.push(P,M,w),m.push(M,b,w)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Tt=class extends di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sr=class extends di{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vo=class extends Ao{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ml=class extends Ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=t,a=2*e-n;break;case ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,c=2*n-e;break;case ph:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[l+P]+y*o[c+P]+_*o[u+P];return r}},gl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},_l=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ml(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case qc:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=qc;qi=class extends Hn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=mo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends Hn{};xl.prototype.ValueTypeName="color";yl=class extends Hn{};yl.prototype.ValueTypeName="number";vl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ze.slerpFlat(r,0,o,l-a,o,l,c);return r}},Go=class extends Hn{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;Yi=class extends Hn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=mo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Ml=class extends Hn{};Ml.prototype.ValueTypeName="vector";_u={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},El=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Ux=new El,br=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};br.DEFAULT_MATERIAL_NAME="__DEFAULT";Sl=class extends br{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=_u.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ur("img");function c(){h(),_u.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},wr=class extends br{constructor(t){super(t)}load(t,e,n,s){let r=new cn,o=new Sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Wo=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xo=class extends Wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ac=new ue,xu=new F,yu=new F,bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wl=class extends bl{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Yo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Xl="\\[\\]\\.:\\/",Nx=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",Fx="[^"+Xl.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",ql),Bx=/(WCOD+)?/.source.replace("WCOD",Fx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Hx=new RegExp("^"+Ox+Bx+zx+kx+"$"),Vx=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Tl;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];S1=new Float32Array(1),Mu=new ue,Us=class{constructor(t,e,n=0,s=1/0){this.ray=new Vi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mu),this}intersectObject(t,e=!0,n=[]){return Al(t,this,n,e),n.sort(Eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Al(t[s],this,n,e);return n.sort(Eu),n}};fi=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Zo=class extends hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl)});function Wx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Xx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Yx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Vn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Vn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Zl)}function Zx(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $x(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Zl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zu))}function Jx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Kx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case mn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case mn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case mn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Zl)}function jx(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function Qx(i){this.enabled!==!1&&i.preventDefault()}function t1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qu,Zl,Zu,Qo,Yu,Gx,Ze,gn,Te,Yl,ta,$u=Fe(()=>{Ne();qu={type:"change"},Zl={type:"start"},Zu={type:"end"},Qo=new Vi,Yu=new zn,Gx=Math.cos(70*Ar.DEG2RAD),Ze=new F,gn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yl=1e-6,ta=class extends Zo{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:mn.ROTATE,TWO:mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ze,this._lastTargetPosition=new F,this._quat=new ze().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fi,this._sphericalDelta=new fi,this._scale=1,this._panOffset=new F,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new F,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xx.bind(this),this._onPointerDown=Wx.bind(this),this._onPointerUp=qx.bind(this),this._onContextMenu=Qx.bind(this),this._onMouseWheel=$x.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=jx.bind(this),this._onMouseDown=Yx.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=t1.bind(this),this._interceptControlUp=e1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ze.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qo.origin.copy(this.object.position),Qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qo.direction))<Gx?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qo.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yl||this._lastTargetPosition.distanceToSquared(this.target)>Yl?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var ea,Ju=Fe(()=>{Ne();$u();ea=class extends ta{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Vn.PAN,MIDDLE:Vn.DOLLY,RIGHT:Vn.ROTATE},this.touches={ONE:mn.PAN,TWO:mn.DOLLY_ROTATE}}}});var Os,Ku=Fe(()=>{Ne();Os=class i extends Pt{constructor(){let t=i.SkyShader,e=new fn({name:t.name,uniforms:Vl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ke,depthWrite:!1});super(new He(1,1,1),e),this.isSky=!0}};Os.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
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

		}`,fragmentShader:`
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

		}`}});function Ln(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Ri(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Le(i,t){let e=Ln(t),n=new Float32Array(i*i);for(let s=0;s<i*i;s++)n[s]=e();return(s,r)=>{s=(s%i+i)%i,r=(r%i+i)%i;let o=Math.floor(s),a=Math.floor(r),c=(o+1)%i,l=(a+1)%i,h=s-o,u=r-a,d=h*h*(3-2*h),f=u*u*(3-2*u),m=n[a*i+o],x=n[a*i+c],g=n[l*i+o],p=n[l*i+c];return(m*(1-d)+x*d)*(1-f)+(g*(1-d)+p*d)*f}}function _n(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let c=0;c<n;c++)s+=r*i(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}function Qu(i,t){return i.wrapS=i.wrapT=bn,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=kn,i.magFilter=Cn,t&&(i.colorSpace=Ce),i.needsUpdate=!0,i}function Rr(i,t,e,n=!0){let s=new gr(i,t,e,En);return Qu(s,n)}function na(i,t=!0){return Qu(new pn(i),t)}function ia(i,t,e,n=2){let s=new Uint8Array(t*e*4);for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=i[r*t+(o-1+t)%t],c=i[r*t+(o+1)%t],l=i[(r-1+e)%e*t+o],h=i[(r+1)%e*t+o],u=(a-c)*n,d=(h-l)*n,f=1,m=Math.hypot(u,d,f);u/=m,d/=m,f/=m;let x=(r*t+o)*4;s[x]=(u*.5+.5)*255,s[x+1]=(d*.5+.5)*255,s[x+2]=(f*.5+.5)*255,s[x+3]=255}return Rr(s,t,e,!1)}function Gn(i,t,e,n,s=!1){let r=new Uint8Array(i*t*4),o=new Float32Array(i*t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=e(c,a),h=(a*i+c)*4;r[h]=Math.max(0,Math.min(255,l[0])),r[h+1]=Math.max(0,Math.min(255,l[1])),r[h+2]=Math.max(0,Math.min(255,l[2])),r[h+3]=s?Math.max(0,Math.min(255,(l[4]??1)*255)):255,o[a*i+c]=l[3]||0}return{map:Rr(r,i,t,!0),normalMap:n?ia(o,i,t,n):null}}function je(i,t){return ju[i]||(ju[i]=t())}function td(){return je("cer",()=>{let i=ln,t=Ln(5),e=Le(16,7),n=Le(64,9),s=8,r=3,o=[];for(let a=0;a<s*r*4;a++)o.push(t());return Gn(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(l),d=Math.floor(h),f=l-u,m=h-d,x=u%2===1,g=Math.sin(Math.PI*f),p=x?.55+.45*g:.35-.3*g;p+=(1-m)*.35;let v=o[(d*s+u)%o.length],y=.8+.2*v;v>.95&&(y*=.78),v<.04&&(y*=1.12);let _=x?.86+.18*g:.74+.12*(1-g),P=m>.9?.6+(1-m)*4:1,M=_n(e,a/i*16,c/i*16,3),b=Math.max(0,_n(n,a/i*64*.25,c/i*64*.25,3)-.58)*2.2,w=255*y*_*P*(.92+.16*M),S=w*(.92-.05*v),E=w*(.88-.08*v);return w=w*(1-b)+b*70,S=S*(1-b)+b*68,E=E*(1-b)+b*58,[w,S,E,p]},3.5)})}function ed(){return je("fib",()=>{let i=ln,t=Le(32,11),e=Le(16,13),n=Le(128,15);return Gn(i,i,(s,r)=>{let o=s/i,a=r/i,c=Math.sin(o*12*Math.PI*2),l=.5+.5*c,h=a*2.2/1.22%1;h<.025&&(l+=.6);let d=o*2%1<.02?.9:1,f=_n(t,o*8,a*8,4),m=_n(e,o*40,a*3,3),x=n(o*128,a*128),g=228*(.86+.3*(f-.5))*(.94+.12*m)*(.97+.06*x)*(.92+.08*c)*d;return f<.34&&(g*=.88),h<.025&&(g*=.8),[g,g*.995,g*.97,l]},1.3)})}function nd(){return je("met",()=>{let i=ln>>1,t=Le(16,17),e=Le(64,19);return Gn(i,i,(n,s)=>{let r=n/i*4,o=s/i,a=r-Math.floor(r),c=a<.12?a/.12:a<.3?1:a<.42?1-(a-.3)/.12:0;c+=.15*Math.sin(a*Math.PI*8)*(a>.45?1:0);let l=_n(t,n/i*4,s/i*6,3),h=e(n/i*64,s/i*8),u=225*(.86+.2*l)*(.95+.08*h)*(c>.9?1.04:.97),d=Math.max(0,l-.72)*3;return[u*(1-d*.25)+d*40,u*(1-d*.35)+d*14,u*(1-d*.5),c]},2)})}function id(){return je("slab",()=>{let i=ln,t=Le(16,21),e=Le(128,23),n=Le(8,25);return Gn(i,i,(s,r)=>{let o=s/i,a=r/i,c=_n(t,o*16,a*16,4),l=e(o*128,a*128),h=_n(n,o*8,a*8,2),u=200*(.8+.3*(c-.5))*(.93+.12*l);return h>.66&&(u*=.62),c<.32&&(u*=.8),[u,u*.98,u*.95,l*.3]},1)})}function sd(){return je("fac",()=>{let i=Bs?512:1024,t=Bs?128:256,e=i/1024,[n,s]=Ri(i,t),[r,o]=Ri(i,t);s.scale(e,e),o.scale(e,e);let a=Ln(77);s.fillStyle="#f4f2ee",s.fillRect(0,0,1024,256),o.fillStyle="#fff",o.fillRect(0,0,1024,256);for(let y=0;y<9e3;y++){let _=225+a()*30;s.fillStyle=`rgba(${_},${_},${_-3},0.35)`,s.fillRect(a()*1024,a()*256,1+a()*3,1+a()*3)}let c=s.createLinearGradient(0,200,0,256);c.addColorStop(0,"rgba(120,105,85,0)"),c.addColorStop(1,"rgba(110,95,75,0.35)"),s.fillStyle=c,s.fillRect(0,200,1024,56),s.fillStyle="rgba(150,145,138,0.55)",s.fillRect(0,232,1024,24);let l=y=>{y(s,!1),y(o,!0)},h=(y,_,P,M,b,w,S)=>{y.fillStyle=S?"#000":_,y.fillRect(P,M,b,w)},u=(y,_,P,M)=>l((b,w)=>{if(h(b,"#e9e7e2",y-7,_-7,P+14,M+14,w),h(b,"#2a3036",y,_,P,M,w),!w){let S=b.createLinearGradient(y,_,y+P,_+M);S.addColorStop(0,"rgba(170,195,215,0.55)"),S.addColorStop(.5,"rgba(60,75,90,0.2)"),S.addColorStop(1,"rgba(150,175,195,0.45)"),b.fillStyle=S,b.fillRect(y+3,_+3,P-6,M-6),b.fillStyle="#c9ccce",b.fillRect(y+P/2-2,_,4,M),b.fillRect(y,_+M*.42,P,3),b.strokeStyle="rgba(25,25,25,0.85)",b.lineWidth=2.2;for(let E=y+8;E<y+P;E+=11)b.beginPath(),b.moveTo(E,_),b.lineTo(E,_+M),b.stroke();b.beginPath(),b.moveTo(y,_+M/2),b.lineTo(y+P,_+M/2),b.stroke(),b.fillStyle="#d8d6d0",b.fillRect(y-12,_+M+6,P+24,7),b.fillStyle="rgba(80,70,60,0.18)",b.fillRect(y-6,_+M+13,P+12,26)}}),d=(y,_,P,M,b)=>l((w,S)=>{if(h(w,"#ecebe6",y-7,_-7,P+14,M+14,S),!S){w.fillStyle=b,w.fillRect(y,_,P,M),w.fillStyle="rgba(0,0,0,0.25)";for(let E=_+4;E<_+M;E+=6)w.fillRect(y+2,E,P-4,2);w.fillStyle="rgba(0,0,0,0.4)",w.fillRect(y+P/2-1.5,_,3,M),w.fillStyle="#d8d6d0",w.fillRect(y-12,_+M+6,P+24,7)}}),f=(y,_,P,M)=>l((b,w)=>{if(h(b,"#e9e7e2",y-5,_-5,P+10,M+10,w),h(b,"#3a4148",y,_,P,M,w),!w){b.fillStyle="rgba(200,210,215,0.7)";for(let S=_+3;S<_+M-2;S+=8)b.fillRect(y+3,S,P-6,5)}}),m=(y,_,P,M)=>l((b,w)=>{if(h(b,"#e4e2dc",y-8,54,_+16,202,w),!w){if(b.fillStyle=P,b.fillRect(y,62,_,194),M===0)b.fillStyle="rgba(0,0,0,0.22)",b.fillRect(y+8,74,_-16,194*.38),b.fillRect(y+8,62+194*.5,_-16,194*.42);else{b.fillStyle="rgba(255,255,255,0.18)";for(let A=68;A<256;A+=10)b.fillRect(y+3,A,_-6,4)}b.fillStyle="#caa64a",b.fillRect(y+_-14,62+194*.52,5,10)}});u(64,70,128,104),m(300,84,["#6b4a2e","#7c5a3a","#4a5560","#8a8d90"][Math.floor(a()*4)],0),f(430,70,52,40),d(576,70,120,104,"#7a5a3c"),u(832,78,112,96);for(let y=0;y<40;y++){let _=a()*1024;s.fillStyle=`rgba(90,80,70,${.04+a()*.06})`,s.fillRect(_,190+a()*20,2+a()*4,30+a()*40)}let x=s.getImageData(0,0,i,t).data,g=o.getImageData(0,0,i,t).data,p=new Uint8Array(i*t*4);for(let y=0;y<i*t;y++)p[y*4]=x[y*4],p[y*4+1]=x[y*4+1],p[y*4+2]=x[y*4+2],p[y*4+3]=g[y*4];let v=new Uint8Array(i*t*4);for(let y=0;y<t;y++)v.set(p.subarray((t-1-y)*i*4,(t-y)*i*4),y*i*4);return Rr(v,i,t,!0)})}function sa(){return je("wall",()=>{let i=ln,t=ln>>2,e=Le(64,31),n=Le(16,33),s=new Uint8Array(i*t*4),r=new Float32Array(i*t);for(let o=0;o<t;o++)for(let a=0;a<i;a++){let c=a/i,l=o/t,h=e(c*64*3,l*64*.5*2),u=_n(n,c*16,l*4,3),d=235*(.9+.12*h)*(.88+.2*u),f=1;l<.12&&(d*=.82+l),l>.93&&(d*=.92);let m=(o*i+a)*4;s[m]=d,s[m+1]=d,s[m+2]=d*.98,s[m+3]=255*f,r[o*i+a]=h*.6}return{map:Rr(s,i,t,!0),normalMap:ia(r,i,t,1.5)}})}function rd(){return je("brick",()=>{let i=ln,t=Ln(41),e=Le(64,43),n=i/6,s=i/16,r=[];for(let o=0;o<200;o++)r.push(t());return Gn(i,i,(o,a)=>{let c=Math.floor(a/s),l=c%2*n/2,h=Math.floor((o+l)/n),u=(o+l)%n/n,d=a%s/s,f=u<.05||d<.12,m=r[(c*7+h*13)%200],x=e(o/i*64,a/i*64);if(f)return[175+x*20,165+x*20,150+x*20,0,0];let g=.75+.3*m;return[196*g*(.9+.15*x),104*g*(.9+.15*x),66*g*(.9+.15*x),1,0]},2,!0)})}function zs(){return je("asph",()=>{let i=ln,t=Le(256,51),e=Le(16,53),n=Le(8,55);return Gn(i,i,(s,r)=>{let o=s/i,a=r/i,c=t(o*256,a*256),l=_n(e,o*16,a*16,4),h=_n(n,o*8,a*8,2),u=72*(.84+.32*c)*(.92+.16*l);h>.7&&(u*=.92),h<.22&&(u*=1.05);let d=Math.abs(o*8/3.5%1-.5);return u*=1-.06*Math.exp(-Math.pow((d-.22)/.06,2)),c>.93&&(u*=1.6),[u,u,u*1.02,c*.5]},1.6)})}function od(){return je("pav",()=>{let i=ln,t=Ln(61),e=Le(128,63),n=Le(16,65),s=12,r=20,o=[];for(let a=0;a<s*r*2;a++)o.push([t(),t(),t()]);return Gn(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(h),d=l+u%2*.5+o[u*s%o.length][2]*.3,f=Math.floor(d),m=d-f,x=h-u,g=Math.min(m,1-m)/.5,p=Math.min(x,1-x)/.5,v=Math.min(g*2.2,p*1.4,1),y=Math.sqrt(Math.max(0,v)),_=o[(u*s+f%s)%o.length],P=e(a/i*128,c/i*128),M=_n(n,a/i*16,c/i*16,3);if(v<.18){let S=.55+.3*M;return[92*S+20,84*S+18,70*S+12,0]}let b=(.68+.36*_[0])*(.85+.25*P)*(.85+.25*M),w=_[1];return[150*b+(w>.8?18:0),142*b+(w>.8?8:0),132*b,y*.9+P*.1]},3.2)})}function ra(){return je("dirt",()=>{let i=ln,t=Le(128,71),e=Le(16,73),n=Ln(75),s=[];for(let o=0;o<500;o++)s.push([n()*i,n()*i,1+n()*2.5,n()]);return Gn(i,i,(o,a)=>{let c=o/i,l=a/i,h=t(c*128,l*128),u=_n(e,c*16,l*16,4),d=Math.abs(c*6/3%1-.5),f=Math.exp(-Math.pow((d-.25)/.07,2)),m=(.8+.3*u)*(.9+.2*h);return m*=1-.1*f,[184*m,154*m,120*m,h*.5+u*.8-f*.4]},2.5)})}function ks(){return je("side",()=>{let i=ln,t=Le(128,81),e=Le(8,83),n=Ln(85),s=[];for(let r=0;r<64;r++)s.push(n());return Gn(i,i,(r,o)=>{let a=r/i*2,c=o/i*2,l=a%1,h=c%1,u=l<.012||h<.012||l>.988||h>.988,d=(Math.floor(a)+Math.floor(c)*2)%64,f=t(r/i*128,o/i*128),m=_n(e,r/i*8,o/i*8,3),x=192*(.93+.07*s[d])*(.92+.1*f)*(.88+.2*m);return u&&(x*=.78),[x,x*.975,x*.94,u?0:.4+f*.2]},1.6)})}function oa(){return je("gd",()=>{let i=ln,t=Ln(91),[e,n]=Ri(i,i);n.fillStyle="rgb(118,118,118)",n.fillRect(0,0,i,i);let s=i/512;for(let u=0;u<26e3*s*s;u++){let d=60+t()*140;n.strokeStyle=`rgba(${d},${d},${d},0.55)`,n.lineWidth=.8+t()*1.2;let f=t()*i,m=t()*i,x=t()*Math.PI*2,g=(2+t()*5)*s;n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(x)*g,m+Math.sin(x)*g),n.stroke()}let r=n.getImageData(0,0,i,i).data,[o,a]=Ri(i,i);a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,i,i);for(let u=0;u<9e3*s*s;u++){let d=70+t()*130;a.fillStyle=`rgba(${d},${d},${d},${.4+t()*.5})`,a.beginPath(),a.ellipse(t()*i,t()*i,(.6+t()*2.2)*s,(.5+t()*1.8)*s,t()*3,0,7),a.fill()}let c=a.getImageData(0,0,i,i).data,l=new Uint8Array(i*i*4),h=new Float32Array(i*i);for(let u=0;u<i*i;u++)l[u*4]=r[u*4],l[u*4+1]=c[u*4],l[u*4+2]=128,l[u*4+3]=255,h[u]=(r[u*4]*.5+c[u*4]*.5)/255;return{map:Rr(l,i,i,!1),normalMap:ia(h,i,i,2.5)}})}function $l(i=0){return je("leaf"+i,()=>{let t=Bs?128:256,[e,n]=Ri(t,t),s=Ln(101+i);n.clearRect(0,0,t,t);let r=i===1?520:700,o=t/256;n.fillStyle=i===1?"rgb(130,150,70)":"rgb(170,195,140)",n.beginPath(),n.arc(t/2,t/2,9*o,0,7),n.fill();for(let c=0;c<r;c++){let l=s()*Math.PI*2,h=Math.pow(s(),.6)*t*.46,u=t/2+Math.cos(l)*h,d=t/2+Math.sin(l)*h,f=s(),m=i===1?[120+f*60,140+f*60,60+f*30]:[150+f*80,175+f*70,120+f*60];n.fillStyle=`rgb(${m[0]|0},${m[1]|0},${m[2]|0})`,n.save(),n.translate(u,d),n.rotate(s()*Math.PI*2),n.beginPath(),n.ellipse(0,0,(i===1?7:6)*o*(.7+s()*.6),(i===1?3.2:3)*o*(.7+s()*.5),0,0,7),n.fill(),n.restore()}let a=na(e,!0);return a.wrapS=a.wrapT=Zn,a})}function Jl(){return je("frond",()=>{let i=Bs?64:128,t=Bs?256:512,[e,n]=Ri(i,t);n.clearRect(0,0,i,t);let s=Ln(111);n.strokeStyle="#7a8a4a",n.lineWidth=3*i/128,n.beginPath(),n.moveTo(i/2,0),n.lineTo(i/2,t),n.stroke();for(let o=6;o<t;o+=5*t/512){let a=i*.48*Math.sin(Math.min(1,o/t*1.15)*Math.PI*.95+.15);for(let c of[-1,1]){let l=s();n.strokeStyle=`rgb(${70+l*40|0},${110+l*45|0},${40+l*25|0})`,n.lineWidth=(2.4+s())*i/128,n.beginPath(),n.moveTo(i/2,o),n.quadraticCurveTo(i/2+c*a*.5,o+6*t/512,i/2+c*a,o+16*t/512+s()*6),n.stroke()}}let r=na(e,!0);return r.wrapS=r.wrapT=Zn,r})}function aa(){return je("ta",()=>{let i=ln,t=Le(64,121),e=Ln(123),n=[];for(let s=0;s<32;s++)n.push(e());return Gn(i,i,(s,r)=>{let o=s/i*2,a=r/i*2,c=Math.floor(a),l=o+c%2*.5,h=Math.floor(l),u=l-h,d=a-c,f=u<.015||d<.015,m=n[(c*5+h*3)%32],x=t(s/i*64,r/i*64),g=f?.72:(.9+.07*m)*(.95+.06*x);return[205*g,192*g,170*g,f?0:.6+.1*x]},2)})}function Ci(){return je("conc",()=>{let i=ln,t=Le(128,131),e=Le(8,133);return Gn(i,i,(n,s)=>{let r=n/i,o=s/i,a=t(r*128,o*128),c=_n(e,r*8,o*8,3),l=r<.004||o<.006,h=200*(.94+.06*a)*(.93+.1*c);return l&&(h*=.88),[h,h*.985,h*.96,a*.3+(l?-.4:0)]},1)})}function ad(){return je("bal",()=>{let i=ln,t=Ln(141),[e,n]=Ri(i,i);n.fillStyle="#5b5650",n.fillRect(0,0,i,i);let s=i/512;for(let a=0;a<14e3*s*s;a++){let c=70+t()*110;n.fillStyle=`rgb(${c+8|0},${c|0},${c-8|0})`,n.beginPath(),n.ellipse(t()*i,t()*i,(1.5+t()*3)*s,(1.2+t()*2.5)*s,t()*3,0,7),n.fill()}let r=n.getImageData(0,0,i,i).data,o=new Float32Array(i*i);for(let a=0;a<i*i;a++)o[a]=r[a*4]/255;return{map:na(e,!0),normalMap:ia(o,i,i,3)}})}function cd(){return je("gate",()=>{let[e,n]=Ri(256,256);n.clearRect(0,0,256,256),n.fillStyle="#fff",n.fillRect(0,128,256,10),n.fillRect(0,246,256,10),n.fillRect(0,186,256,5);for(let r=0;r<256;r+=12)n.fillRect(r,128,4,128);n.fillRect(0,128,6,128),n.fillRect(256/2-3,128,6,128),n.fillStyle="#f0f0f0",n.fillRect(0,0,256,128),n.fillStyle="rgba(0,0,0,0.18)";for(let r=4;r<128;r+=8)n.fillRect(0,r,256,2);n.clearRect(0,6,256,18),n.fillStyle="#fff";for(let r=0;r<256;r+=10)n.fillRect(r,6,3,18);n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(256/2-1,0,2,128);let s=na(e,!0);return s.flipY=!0,s})}var Bs,ln,ju,Kn=Fe(()=>{Ne();Bs=(()=>{try{let i=new URLSearchParams(location.search).get("q")||localStorage.getItem("aimores3d_q");return i==="low"||i==="medium"||!i&&(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700)}catch{return!1}})(),ln=Bs?256:512;ju={}});function la(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}function ld(i,t,e){let n=i.GW,s=i.GH,r=new Float32Array(n*s*3),o=new Float32Array(n*s*2);for(let M=0;M<s;M++)for(let b=0;b<n;b++){let w=M*n+b,S=i.XMIN+b*i.G,E=i.ZMIN+M*i.G;r[w*3]=S,r[w*3+1]=i.raw(M,b),r[w*3+2]=E,o[w*2]=(S-i.XMIN)/(i.XMAX-i.XMIN),o[w*2+1]=1-(E-i.ZMIN)/(i.ZMAX-i.ZMIN)}let a=new Uint32Array((n-1)*(s-1)*6),c=0;for(let M=0;M<s-1;M++)for(let b=0;b<n-1;b++){let w=M*n+b,S=w+1,E=w+n,A=E+1;a[c++]=w,a[c++]=E,a[c++]=S,a[c++]=S,a[c++]=E,a[c++]=A}let l=new pe;l.setAttribute("position",new ae(r,3)),l.setAttribute("uv",new ae(o,2)),l.setIndex(new ae(a,1)),l.computeVertexNormals();let h=new Float32Array(n*s*2);for(let M=0;M<n*s;M++)h[M*2]=r[M*3]/3.5,h[M*2+1]=r[M*3+2]/3.5;l.setAttribute("uv1",new ae(h,2));let u=oa();u.normalMap.channel=1;let d=new Tt({map:t,roughness:.97,metalness:0,normalMap:e==="low"?null:u.normalMap,normalScale:new _t(.9,.9)});e!=="low"&&(d.onBeforeCompile=M=>{M.uniforms.gDetail={value:u.map},M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos=(modelMatrix*vec4(transformed,1.0)).xyz;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;uniform sampler2D gDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
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
      diffuseColor.rgb*=mix(vec3(1.0+0.10*hp,1.0+0.04*hp,1.0-0.12*hp), vec3(1.0+0.06*hp,1.0-0.02*hp,1.0-0.06*hp), 1.0-veg);`)});let f=new Pt(l,d);f.receiveShadow=!0,f.name="terrain";let m=[],x=M=>{for(let b=0;b<M.length-1;b++){let[w,S]=M[b],[E,A]=M[b+1],N=i.at(w,S),D=i.at(E,A);m.push(w,N,S,E,D,A,w,N-60,S,E,D,A,E,D-60,A,w,N-60,S)}},g=[];for(let M=0;M<n;M++)g.push([i.XMIN+M*i.G,i.ZMIN]);x(g);let p=[];for(let M=n-1;M>=0;M--)p.push([i.XMIN+M*i.G,i.ZMIN+(s-1)*i.G]);x(p);let v=[];for(let M=s-1;M>=0;M--)v.push([i.XMIN,i.ZMIN+M*i.G]);x(v);let y=[];for(let M=0;M<s;M++)y.push([i.XMIN+(n-1)*i.G,i.ZMIN+M*i.G]);x(y);let _=new pe;_.setAttribute("position",new Jt(m,3)),_.computeVertexNormals();let P=new Pt(_,new Tt({color:5662010,roughness:1,side:Xt}));return f.add(P),f}function hd(i,t,e,n,s=!1){let r=new Uint16Array(t),o=i.BG,a=i.BR,c=2*a/(o-1),l=(A,N)=>(A=Math.max(0,Math.min(o-1,A)),N=Math.max(0,Math.min(o-1,N)),i.HB+r[A*o+N]/10),h=(A,N)=>{let D=(A+a)/c,O=(N+a)/c,H=Math.floor(D),U=Math.floor(O),z=D-H,C=O-U;return(l(U,H)*(1-z)+l(U,H+1)*z)*(1-C)+(l(U+1,H)*(1-z)+l(U+1,H+1)*z)*C},u=(A,N,D)=>{let O=Math.max(e.XMIN,Math.min(e.XMAX,A)),H=Math.max(e.ZMIN,Math.min(e.ZMAX,N)),U=Math.hypot(A-O,N-H);if(U<.5)return e.at(O,H)-6;let z=Math.min(1,U/700),C=z*z*(3-2*z);return(e.at(O,H)-.6)*(1-C)+D*C},d=new he;d.name="backdrop";let f=3600,m=s?91:181,x=[],g=[];for(let A=0;A<m;A++)for(let N=0;N<m;N++){let D=-f+N*2*f/(m-1),O=-f+A*2*f/(m-1);x.push(D,u(D,O,h(D,O)),O),g.push((D+f)/(2*f),1-(O+f)/(2*f))}let p=[];for(let A=0;A<m-1;A++)for(let N=0;N<m-1;N++){let D=A*m+N;p.push(D,D+m,D+1,D+1,D+m,D+m+1)}let v=new pe;v.setAttribute("position",new Jt(x,3)),v.setAttribute("uv",new Jt(g,2)),v.setIndex(p),v.computeVertexNormals();let y=new Pt(v,new Tt({map:n,roughness:1}));y.receiveShadow=!0,d.add(y);let _=[],P=[],M=new Qt;for(let A=0;A<o;A++)for(let N=0;N<o;N++){let D=-a+N*c,O=-a+A*c,H=l(A,N);Math.abs(D)<f-50&&Math.abs(O)<f-50&&(H-=60),_.push(D,H,O)}let b=[],w=s?2:1;for(let A=0;A<o-w;A+=w)for(let N=0;N<o-w;N+=w){let D=A*o+N,O=w*o;b.push(D,D+O,D+w,D+w,D+O,D+O+w)}let S=new pe;S.setAttribute("position",new Jt(_,3)),S.setIndex(b),S.computeVertexNormals();let E=S.attributes.normal;for(let A=0;A<_.length/3;A++){let D=1-E.getY(A),O=Math.min(1,Math.max(0,(D-.3)*3)),H=Math.random()*.04;M.setRGB(.2+H,.27+H,.13),M.lerp(new Qt(.36,.33,.28),O*.8),P.push(M.r,M.g,M.b)}return S.setAttribute("color",new Jt(P,3)),d.add(new Pt(S,new Tt({vertexColors:!0,roughness:1}))),d}var ca,ud=Fe(()=>{Ne();Kn();ca=class{constructor(t,e){Object.assign(this,t),this.a=new Uint16Array(e)}raw(t,e){return t=Math.max(0,Math.min(this.GH-1,t)),e=Math.max(0,Math.min(this.GW-1,e)),this.HB+this.a[t*this.GW+e]/100}at(t,e){let n=(t-this.XMIN)/this.G,s=(e-this.ZMIN)/this.G,r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=this.raw(o,r),h=this.raw(o,r+1),u=this.raw(o+1,r),d=this.raw(o+1,r+1);return a+c<=1?l+(h-l)*a+(u-l)*c:d+(u-d)*(1-a)+(h-d)*(1-c)}}});function bt(i,t,e){let n=new Qt;return n.setRGB(i/255,t/255,e/255,Ce),[n.r,n.g,n.b]}function qt(i){let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function ha(i){let t=null;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=s[0]-n[0],o=s[1]-n[1],a=Math.hypot(r,o);if(a<.01)continue;r/=a,o/=a;let c=-o,l=r,h=1e9,u=-1e9,d=1e9,f=-1e9;for(let x of i){let g=x[0]*r+x[1]*o,p=x[0]*c+x[1]*l;h=Math.min(h,g),u=Math.max(u,g),d=Math.min(d,p),f=Math.max(f,p)}let m=(u-h)*(f-d);if(!t||m<t.area){let x=(h+u)/2,g=(d+f)/2;t={area:m,cx:x*r+g*c,cz:x*o+g*l,ux:r,uz:o,a:(u-h)/2,b:(f-d)/2}}}if(t.a<t.b){let e=t.a;t.a=t.b,t.b=e;let n=t.ux;t.ux=-t.uz,t.uz=n}return t}function Kl(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}var Kt,Wn=Fe(()=>{Ne();Kt=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,c,l){let h,u,d;if(c)[h,u,d]=c;else{let f=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],m=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];h=f[1]*m[2]-f[2]*m[1],u=f[2]*m[0]-f[0]*m[2],d=f[0]*m[1]-f[1]*m[0];let x=Math.hypot(h,u,d)||1;h/=x,u/=x,d/=x}if(this.p.push(...t,...e,...n),this.n.push(h,u,d,h,u,d,h,u,d),this.u.push(...s,...r,...o),l)this.c.push(...l[0],...l[1],...l[2]);else{let f=a||[1,1,1];this.c.push(...f,...f,...f)}}quad(t,e,n,s,r,o,a,c,l,h,u){this.tri(t,e,n,r,o,a,l,h,u?[u[0],u[1],u[2]]:null),this.tri(t,n,s,r,a,c,l,h,u?[u[0],u[2],u[3]]:null)}geometry(){let t=new pe;return t.setAttribute("position",new Jt(this.p,3)),t.setAttribute("normal",new Jt(this.n,3)),t.setAttribute("uv",new Jt(this.u,2)),t.setAttribute("color",new Jt(this.c,3)),t.computeBoundingSphere(),t}get count(){return this.p.length/9}}});function ua(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Cr(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function n1(i,t,e,n,s,r,o=1){let a=i.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(r()-.5)*s;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let m=((l+d)*t+(h+f))*4;c[m]=n[0]+u,c[m+1]=n[1]+u,c[m+2]=n[2]+u,c[m+3]=255}}i.putImageData(a,0,0)}function Pr(i,t=!0,e=!0){let n=new pn(i);return t&&(n.wrapS=n.wrapT=bn),n.anisotropy=8,e&&(n.colorSpace=Ce),n.generateMipmaps=!0,n.minFilter=kn,n}function dd(){let[i,t]=Cr(256,256),e=ua(9);n1(t,256,256,[196,192,184],16,e),t.strokeStyle="rgba(110,105,98,0.55)",t.lineWidth=2;for(let n=0;n<=256;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,256),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();for(let n=0;n<60;n++)t.fillStyle=`rgba(90,85,80,${e()*.08})`,t.fillRect(e()*256,e()*256,10+e()*30,10+e()*30);return Pr(i)}function fd(){let[t,e]=Cr(512,512),n=ua(21);e.fillStyle="#8f8a86",e.fillRect(0,0,512,512);let s=16;e.save(),e.translate(512/2,512/2),e.rotate(Math.PI/4),e.translate(-512,-512);for(let r=-2;r<2*512/s+2;r++)for(let o=-2;o<2*512/s+2;o++){let a=n()*22-11,c=n()<.5?6:0;e.fillStyle=`rgb(${176+a+c|0},${168+a|0},${162+a-c/2|0})`;let l=r*s,h=o*s;(r+o)%2===0?e.fillRect(l+1,h+1,2*s-2,s-2):e.fillRect(l+1,h+1,s-2,2*s-2)}return e.restore(),Pr(t)}function jl(){let[i,t]=Cr(128,128),e=ua(41);t.fillStyle="#fff",t.fillRect(0,0,128,128);for(let n=0;n<800;n++){let s=220+e()*35;t.fillStyle=`rgba(${s},${s},${s},0.6)`,t.fillRect(e()*128,e()*128,2,2)}return t.fillStyle="rgba(140,140,140,0.3)",t.fillRect(0,116,128,12),Pr(i)}function pd(){let[i,t]=Cr(256,256),e=ua(51);t.fillStyle="#fff",t.fillRect(0,0,256,256);let n=8,s=10;for(let r=0;r<n;r++){for(let o=0;o<s;o++){let a=.82+e()*.18,c=Math.floor(255*a),l=o*256/s,h=r*256/n,u=t.createLinearGradient(l,0,l+256/s,0);u.addColorStop(0,`rgb(${c*.78|0},${c*.78|0},${c*.78|0})`),u.addColorStop(.5,`rgb(${c},${c},${c})`),u.addColorStop(1,`rgb(${c*.72|0},${c*.72|0},${c*.72|0})`),t.fillStyle=u,t.fillRect(l,h,256/s,256/n)}t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(0,(r+1)*256/n-4,256,4)}for(let r=0;r<40;r++)t.fillStyle=`rgba(40,30,20,${e()*.12})`,t.fillRect(e()*256,e()*256,20+e()*40,10+e()*20);return Pr(i)}function md(){let[i,t]=Cr(128,128);for(let e=0;e<128;e++){let n=200+40*Math.sin(e/128*Math.PI*2*8);t.fillStyle=`rgb(${n},${n},${n})`,t.fillRect(e,0,1,128)}return Pr(i)}var da=Fe(()=>{Ne()});function i1(i){let t=Ql.reduce((e,n)=>e+n,0)*i;for(let e=0;e<Ql.length;e++)if(t-=Ql[e],t<=0)return gd[e];return gd[0]}function fa(i){let t=new Tt(i);return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#if defined( USE_COLOR ) && defined( USE_MAP )
    diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
  #elif defined( USE_COLOR )
    diffuseColor.rgb *= vColor.rgb;
  #endif
  diffuseColor.a = 1.0;`)},t.customProgramCacheKey=()=>"paintmask",t}function s1(i){let[t,e,n]=i.rc,s=.3*t+.59*e+.11*n;if(i.rm==="ceramic"){let o=$i(165/Math.max(60,s),.75,1.35),a=[t*o,e*o*.97,n*o*.92],c=(a[0]+a[1]+a[2])/3;return a=a.map(h=>c+(h-c)*.9),qt(i.p[0][0]*3.3+i.p[0][1])<.25&&(a=a.map(h=>h*.82)),bt($i(a[0]*1.18,0,255),$i(a[1]*1.12,0,255),$i(a[2]*1.1,0,255))}if(i.rm==="fiber"){let o=$i(s*1.05,170,225);return bt(o,o*.99,o*.97)}if(i.rm==="metal"){let o=$i(s*1,185,250),a=qt(i.p[0][1]*1.7);return a<.06?bt(120,150,175):a<.09?bt(170,70,60):bt(o,o,o*1.01)}let r=$i(s*1.02,140,225);return bt(r,r*.985,r*.96)}function _d(i,t,e,n,s){let r=new Kt,o=new Kt,a=new Kt,c=new Kt,l=new Kt,h=new Kt,u=new Kt,d=[],f=[],m=[],x=Math.tan(24*Math.PI/180),g=Math.tan(12*Math.PI/180),p=Math.tan(8*Math.PI/180),v=s==="low";for(let D=0;D<i.buildings.length;D++){let O=i.buildings[D];if(n&&n(O))continue;let H=O.p.slice();Kl(H)<0&&H.reverse();let U=1e9,z=-1e9;for(let[at,q]of H){let R=t.at(at,q);U=Math.min(U,R),z=Math.max(z,R)}let C=z+O.h,B=U-.5,V=Math.abs(Kl(H)),$=O.osm&&/Esta|train/i.test(O.osm),ht=$?[250,250,246]:i1(O.hv),ft=bt(...ht),J=V>=450||O.r==="shed"||O.rm==="metal"&&V>220,et=!J&&V>=30||$?r:o,dt=Math.floor(qt(D*1.37)*4),ot=ft.map(at=>at*.62),vt=Math.min(C,z+1.3);for(let at=0;at<H.length;at++){let[q,R]=H[at],[T,k]=H[(at+1)%H.length],tt=Math.hypot(T-q,k-R);if(tt<.05)continue;let rt=tt/3.2,it=(B-z)/3,mt=(vt-z)/3,ut=O.h/3;et.quad([q,B,R],[q,vt,R],[T,vt,k],[T,B,k],[dt,it],[dt,mt],[dt+rt,mt],[dt+rt,it],ot,null,[ot,ft,ft,ot]),et.quad([q,vt,R],[q,C,R],[T,C,k],[T,vt,k],[dt,mt],[dt,ut],[dt+rt,ut],[dt+rt,mt],ft),dt+=rt}let xt=s1(O),nt=ha(H),St=nt.ux,W=nt.uz,X=-W,L=St,st=(at,q,R)=>[nt.cx+St*at+X*q,R,nt.cz+W*at+L*q],G=(at,q,R,T)=>{u.quad([at[0],at[1]-R,at[2]],[q[0],q[1]-R,q[2]],q,at,[0,0],[1,0],[1,1],[0,1],T)},Y=qt(D*7.7)<.6?bt(236,234,228):bt(120,86,60),Q=O.rm;if(Q==="ceramic"&&O.r==="flat"&&V>300&&(Q="fiber"),Q==="ceramic"){let q=nt.a+.55,R=nt.b+.55,T=1.2;if(O.r==="gable"||V>500||nt.a>2.6*nt.b){let k=C+R*x*.85,tt=st(-q,-R,C),rt=st(q,-R,C),it=st(q,R,C),mt=st(-q,R,C),ut=st(-q,0,k),yt=st(q,0,k),Ct=Math.hypot(R,k-C);a.quad(tt,ut,yt,rt,[0,0],[0,Ct/T],[2*q/T,Ct/T],[2*q/T,0],xt),a.quad(it,yt,ut,mt,[0,0],[0,Ct/T],[2*q/T,Ct/T],[2*q/T,0],xt),o.tri(st(-nt.a,-nt.b,C),st(-nt.a,nt.b,C),st(-nt.a,0,k-.55*x*.85),[0,0],[1,0],[.5,1],ft),o.tri(st(nt.a,nt.b,C),st(nt.a,-nt.b,C),st(nt.a,0,k-.55*x*.85),[0,0],[1,0],[.5,1],ft),G(tt,rt,.2,Y),G(it,mt,.2,Y),Ji(a,ut,yt,xt)}else{let k=C+R*x,tt=Math.max(0,q-R),rt=st(-q,-R,C),it=st(q,-R,C),mt=st(q,R,C),ut=st(-q,R,C),yt=st(-tt,0,k),Ct=st(tt,0,k),Mt=Math.hypot(R,k-C);a.quad(rt,yt,Ct,it,[0,0],[(q-tt)/T,Mt/T],[(q+tt)/T,Mt/T],[2*q/T,0],xt),a.quad(mt,Ct,yt,ut,[0,0],[(q-tt)/T,Mt/T],[(q+tt)/T,Mt/T],[2*q/T,0],xt),a.tri(ut,yt,rt,[0,0],[R/T,Mt/T],[2*R/T,0],xt),a.tri(it,Ct,mt,[0,0],[R/T,Mt/T],[2*R/T,0],xt),G(rt,it,.2,Y),G(it,mt,.2,Y),G(mt,ut,.2,Y),G(ut,rt,.2,Y),tt>.2&&Ji(a,yt,Ct,xt),Ji(a,yt,rt,xt,.08),Ji(a,yt,ut,xt,.08),Ji(a,Ct,it,xt,.08),Ji(a,Ct,mt,xt,.08)}h.quad(st(-q,-R,C-.03),st(q,-R,C-.03),st(q,R,C-.03),st(-q,R,C-.03),[0,0],[0,0],[0,0],[0,0],bt(150,140,128))}else if(Q==="fiber"||Q==="metal"){let at=Q==="metal"?.3:.4,q=nt.a+at,R=nt.b+at,T=Q==="metal"?l:c,k=Q==="metal"?1:2.2,tt=nt.a*nt.b*4<V*1.3;if(Q==="metal"&&V>120||tt&&V>70&&qt(D*2.9)<.55||J){let it=Q==="metal"?p:g,mt=C+R*it,ut=st(-q,-R,C),yt=st(q,-R,C),Ct=st(q,R,C),Mt=st(-q,R,C),Ut=st(-q,0,mt),Vt=st(q,0,mt),Yt=Math.hypot(R,mt-C);T.quad(ut,Ut,Vt,yt,[0,0],[0,Yt/k],[2*q/k,Yt/k],[2*q/k,0],xt),T.quad(Ct,Vt,Ut,Mt,[0,0],[0,Yt/k],[2*q/k,Yt/k],[2*q/k,0],xt),o.tri(st(-nt.a,-nt.b,C),st(-nt.a,nt.b,C),st(-nt.a,0,mt-at*it),[0,0],[1,0],[.5,1],ft),o.tri(st(nt.a,nt.b,C),st(nt.a,-nt.b,C),st(nt.a,0,mt-at*it),[0,0],[1,0],[.5,1],ft),Ji(T,Ut,Vt,xt.map(Lt=>Lt*.92),.18),G(ut,yt,.08,xt.map(Lt=>Lt*.8)),G(Ct,Mt,.08,xt.map(Lt=>Lt*.8))}else{let it=g*.9,mt=C+2*R*it,ut=st(-q,-R,C+.05),yt=st(q,-R,C+.05),Ct=st(q,R,mt),Mt=st(-q,R,mt),Ut=Math.hypot(2*R,mt-C);T.quad(ut,Mt,Ct,yt,[0,0],[0,Ut/k],[2*q/k,Ut/k],[2*q/k,0],xt),o.tri(st(-nt.a,-nt.b,C),st(-nt.a,nt.b,C),st(-nt.a,nt.b,mt-at*it),[0,0],[1,0],[1,1],ft),o.tri(st(nt.a,nt.b,C),st(nt.a,-nt.b,C),st(nt.a,nt.b,mt-at*it),[0,0],[1,0],[1,1],ft),o.quad(st(-nt.a,nt.b,C),st(nt.a,nt.b,C),st(nt.a,nt.b,mt-at*it),st(-nt.a,nt.b,mt-at*it),[0,0],[1,0],[1,1],[0,1],ft),G(ut,yt,.06,xt.map(Vt=>Vt*.8))}h.quad(st(-q,-R,C),st(q,-R,C),st(q,R,C),st(-q,R,C),[0,0],[0,0],[0,0],[0,0],bt(130,126,120)),Q==="fiber"&&!J&&qt(D*5.3)<.35&&d.push([nt.cx+St*nt.a*.5,C+.15+R*.1,nt.cz+W*nt.a*.5,qt(D)])}else{let at=ci.triangulateShape(H.map(rt=>new _t(rt[0],rt[1])),[]);for(let[rt,it,mt]of at){let ut=H[rt],yt=H[it],Ct=H[mt];h.tri([ut[0],C,ut[1]],[Ct[0],C,Ct[1]],[yt[0],C,yt[1]],[ut[0]/6,ut[1]/6],[Ct[0]/6,Ct[1]/6],[yt[0]/6,yt[1]/6],xt,[0,1,0])}let q=.55+.4*qt(D*3.1),R=C+q,T=.15,k=H.length;for(let rt=0;rt<k;rt++){let[it,mt]=H[rt],[ut,yt]=H[(rt+1)%k],Ct=Math.hypot(ut-it,yt-mt);if(Ct<.05)continue;let Mt=(yt-mt)/Ct,Ut=-(ut-it)/Ct;o.quad([it,C,mt],[it,R,mt],[ut,R,yt],[ut,C,yt],[0,0],[0,.2],[1,.2],[1,0],ft);let Vt=it-Mt*T,Yt=mt-Ut*T,Lt=ut-Mt*T,ce=yt-Ut*T;o.quad([Lt,C,ce],[Lt,R,ce],[Vt,R,Yt],[Vt,C,Yt],[0,0],[0,.2],[1,.2],[1,0],ft.map(re=>re*.85)),u.quad([it,R+.04,mt],[Vt,R+.04,Yt],[Lt,R+.04,ce],[ut,R+.04,yt],[0,0],[0,0],[0,0],[0,0],bt(205,202,196))}let tt=qt(D*4.1);if(V>22&&tt<.82){let rt=[nt.cx+St*nt.a*(.25+.3*qt(D*1.1))+X*nt.b*.3*(qt(D*1.9)-.5),C,nt.cz+W*nt.a*(.25+.3*qt(D*1.1))+L*nt.b*.3*(qt(D*1.9)-.5),qt(D*6.6)];if((tt<.62?d:f).push(rt),O.h>5&&V>70&&qt(D*8.8)<.5){let it=[rt[0]-St*1.6,rt[2]-W*1.6],mt=1.3,ut=[[-mt,-mt],[mt,-mt],[mt,mt],[-mt,mt]].map(([yt,Ct])=>[it[0]+St*yt+X*Ct,it[1]+W*yt+L*Ct]);for(let yt=0;yt<4;yt++){let Ct=ut[yt],Mt=ut[(yt+1)%4];o.quad([Ct[0],C,Ct[1]],[Ct[0],C+2.3,Ct[1]],[Mt[0],C+2.3,Mt[1]],[Mt[0],C,Mt[1]],[0,0],[0,.76],[.8,.76],[.8,0],ft)}h.quad([ut[0][0],C+2.35,ut[0][1]],[ut[3][0],C+2.35,ut[3][1]],[ut[2][0],C+2.35,ut[2][1]],[ut[1][0],C+2.35,ut[1][1]],[0,0],[0,1],[1,1],[1,0],xt,[0,1,0]),rt[1]=C+2.35,rt[0]=it[0],rt[2]=it[1]}}qt(D*9.4)<.12&&V>30&&m.push([nt.cx-St*nt.a*.6,R,nt.cz-W*nt.a*.6,qt(D)])}}let y=new he;y.name="buildings";let _=sd(),P=(D,O,H=!0)=>{let U=new Pt(D.geometry(),O);return U.castShadow=H,U.receiveShadow=!0,y.add(U),U};P(r,fa({vertexColors:!0,map:_,roughness:.88,side:Xt}));let M=sa();P(o,new Tt({vertexColors:!0,map:M.map,normalMap:M.normalMap,normalScale:new _t(.4,.4),roughness:.92,side:Xt}));let b=td(),w=ed(),S=nd(),E=id();P(a,new Tt({vertexColors:!0,map:b.map,normalMap:b.normalMap,normalScale:new _t(1,1),roughness:.78,side:Xt})),P(c,new Tt({vertexColors:!0,map:w.map,normalMap:w.normalMap,normalScale:new _t(1.1,1.1),roughness:.86,side:Xt})),P(l,new Tt({vertexColors:!0,map:S.map,normalMap:S.normalMap,normalScale:new _t(1.2,1.2),roughness:.38,metalness:.55,side:Xt})),P(h,new Tt({vertexColors:!0,map:E.map,normalMap:E.normalMap,roughness:.95,side:Xt})),P(u,new Tt({vertexColors:!0,roughness:.8,side:Xt}));let A=(()=>{let D=[new _t(0,0),new _t(.62,0),new _t(.72,.75),new _t(.76,.8),new _t(.74,.86),new _t(.5,1),new _t(.15,1.06),new _t(0,1.07)];return new Bo(D,v?8:16)})(),N=(D,O,H,U=1)=>{if(!D.length)return;let z=new Ve(O,H,D.length),C=new ue,B=new ze,V=new F,$=new F,ht=new F(0,1,0);D.forEach((ft,J)=>{let et=(.85+.35*ft[3])*U;V.set(et,et,et),B.setFromAxisAngle(ht,ft[3]*6.28),$.set(ft[0],ft[1],ft[2]),C.compose($,B,V),z.setMatrixAt(J,C)}),z.castShadow=!0,z.receiveShadow=!0,y.add(z)};if(N(d,A,new Tt({color:2057136,roughness:.45})),N(f,new be(.7,.62,1,v?8:14).translate(0,.5,0),new Tt({color:10131600,roughness:.9})),m.length){let D=new In(.45,10,6,0,Math.PI*2,0,.9).rotateX(-1.1).translate(0,.7,0);N(m,D,new Tt({color:14211284,roughness:.6,side:Xt}))}return e.add(y),y}function Ji(i,t,e,n,s=.14){let r=e[0]-t[0],o=e[2]-t[2],a=Math.hypot(r,o)||1,c=-o/a*s,l=r/a*s,h=n.map(u=>u*.85);i.quad([t[0]+c,t[1],t[2]+l],[e[0]+c,e[1],e[2]+l],[e[0],e[1]+.09,e[2]],[t[0],t[1]+.09,t[2]],[0,0],[0,0],[0,.1],[0,.1],h),i.quad([t[0],t[1]+.09,t[2]],[e[0],e[1]+.09,e[2]],[e[0]-c,e[1],e[2]-l],[t[0]-c,t[1],t[2]-l],[0,.1],[0,.1],[0,0],[0,0],h)}var gd,Ql,$i,th=Fe(()=>{Ne();Wn();Kn();gd=[[240,236,226],[246,240,220],[238,224,180],[244,214,170],[232,196,160],[206,224,236],[200,226,204],[236,190,170],[226,170,130],[214,214,210],[190,186,178],[230,210,120],[250,250,248],[180,206,226],[224,200,216],[200,120,90],[160,190,150],[245,230,160],[210,160,150]],Ql=[14,10,8,7,6,5,5,5,3,6,4,3,10,3,1.5,2,2,3,1.5];$i=(i,t,e)=>Math.max(t,Math.min(e,i))});function xd(i,t,e,n,s){let r=i.meshes,o={asphalt:zs(),paver:od(),dirt:ra(),sidewalk:ks()},a={asphalt:8,paver:2.4,dirt:6,sidewalk:2},c={asphalt:.09,paver:.09,dirt:.05,sidewalk:.24},l={asphalt:-3,paver:-3,dirt:-2,sidewalk:-4},h={asphalt:.9,paver:.82,dirt:1,sidewalk:.9},u={asphalt:.5,paver:1.4,dirt:.8,sidewalk:.6},d=new he,f=s&&s.exclude;for(let M of["asphalt","paver","dirt","sidewalk"]){let[b,w]=r["m_"+M];if(!w)continue;let S=new Float32Array(e,b,w),E=r["a_"+M]?new Float32Array(e,r["a_"+M][0],r["a_"+M][1]):null;if(f){let z=[],C=[];for(let B=0;B<w/6;B++){let V=(S[B*6]+S[B*6+2]+S[B*6+4])/3,$=(S[B*6+1]+S[B*6+3]+S[B*6+5])/3;if(!f(V,$)){for(let ht=0;ht<6;ht++)z.push(S[B*6+ht]);E&&C.push(E[B])}}S=new Float32Array(z),E&&(E=new Float32Array(C))}let A=S.length/2,N=new Float32Array(A*3),D=new Float32Array(A*2);for(let z=0;z<A;z++){let C=S[z*2],B=S[z*2+1];if(N[z*3]=C,N[z*3+1]=t.at(C,B)+c[M],N[z*3+2]=B,E){let V=E[Math.floor(z/3)],$=Math.cos(V),ht=Math.sin(V);D[z*2]=(-C*ht+B*$)/a[M],D[z*2+1]=(C*$+B*ht)/a[M]}else D[z*2]=C/a[M],D[z*2+1]=B/a[M]}let O=new pe;O.setAttribute("position",new ae(N,3)),O.setAttribute("uv",new ae(D,2)),O.computeVertexNormals();let H=new Tt({map:o[M].map,normalMap:o[M].normalMap,normalScale:new _t(u[M],u[M]),roughness:h[M],polygonOffset:!0,polygonOffsetFactor:l[M],polygonOffsetUnits:l[M]*2}),U=new Pt(O,H);U.receiveShadow=!0,U.name="road_"+M,d.add(U)}let m=new Kt;for(let[M,b,w,S]of i.curbs){let E=Math.hypot(w-M,S-b);if(E<.05||f&&f((M+w)/2,(b+S)/2))continue;let A=-(S-b)/E*.07,N=(w-M)/E*.07,D=t.at(M,b),O=t.at(w,S),H=qt(M*.37+b*.11),U=H<.55?bt(226,225,219):H<.85?bt(196,194,188):bt(214,200,120),z=U.map(C=>C*.82);m.quad([M-A,D+.04,b-N],[w-A,O+.04,S-N],[w-A,O+.26,S-N],[M-A,D+.26,b-N],[0,0],[E,0],[E,.2],[0,.2],z),m.quad([w+A,O+.04,S+N],[M+A,D+.04,b+N],[M+A,D+.26,b+N],[w+A,O+.26,S+N],[0,0],[E,0],[E,.2],[0,.2],z),m.quad([M-A,D+.26,b-N],[w-A,O+.26,S-N],[w+A,O+.26,S+N],[M+A,D+.26,b+N],[0,0],[E,0],[E,.15],[0,.15],U,[0,1,0])}let x=Ci(),g=new Pt(m.geometry(),new Tt({vertexColors:!0,map:x.map,roughness:.85,side:Xt}));g.receiveShadow=!0,g.castShadow=!1,d.add(g);let p=new Kt,v=bt(232,232,226),y=bt(236,186,40);for(let M of i.roads){if(M.s!=="asphalt"||M.b||M.id===1314627854||M.id===1314627855||s&&s.skipIds&&s.skipIds.has(M.id)||!["trunk","tertiary","trunk_link","residential","primary","secondary"].includes(M.hw)||M.w<7)continue;let b=M.hw==="trunk",w=M.p,S=0;for(let E=0;E<w.length-1;E++){let[A,N]=w[E],[D,O]=w[E+1],H=Math.hypot(D-A,O-N);if(H<.1)continue;let U=(D-A)/H,z=(O-N)/H,C=-z,B=U;for(let V=0;V<H;V+=1.5){let $=Math.min(H,V+1.5),ft=(S+V)%8<4,J=A+U*V,et=N+z*V,dt=A+U*$,ot=N+z*$,vt=t.at(J,et)+.13,xt=t.at(dt,ot)+.13,nt=(St,W,X)=>{p.quad([J+C*(St-W),vt,et+B*(St-W)],[J+C*(St+W),vt,et+B*(St+W)],[dt+C*(St+W),xt,ot+B*(St+W)],[dt+C*(St-W),xt,ot+B*(St-W)],[0,0],[1,0],[1,1],[0,1],X,[0,1,0])};if(b){nt(-.12,.06,y),nt(.12,.06,y);let St=M.w/2-.4;nt(St,.07,v),nt(-St,.07,v)}else!M.o&&ft&&nt(0,.06,M.hw==="residential"?v:y)}S+=H}}let _=new Tt({vertexColors:!0,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,side:Xt}),P=new Pt(p.geometry(),_);return P.receiveShadow=!0,d.add(P),n.add(d),d}function yd(i,t,e,n){let[s,r]=i.meshes.m_water;if(!r)return null;let o=new Float32Array(e,s,r),a=r/2,c=new Float32Array(a*3),l=i.meta.WL;for(let v=0;v<a;v++)c[v*3]=o[v*2],c[v*3+1]=l,c[v*3+2]=o[v*2+1];let h=new pe;h.setAttribute("position",new ae(c,3)),h.computeVertexNormals();let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),f=d.createImageData(256,256);for(let v=0;v<256;v++)for(let y=0;y<256;y++){let _=Math.sin(v/256*Math.PI*8+Math.sin(y/256*Math.PI*4)*2)*.5+Math.sin(y/256*Math.PI*10+v/40)*.5,P=Math.cos(y/256*Math.PI*6+Math.sin(v/256*Math.PI*6))*.5,M=(v*256+y)*4;f.data[M]=128+_*40,f.data[M+1]=128+P*40,f.data[M+2]=255,f.data[M+3]=255}d.putImageData(f,0,0);let m=new pn(u);m.wrapS=m.wrapT=bn,m.repeat.set(1,1);let x=new Float32Array(a*2);for(let v=0;v<a;v++)x[v*2]=o[v*2]/40,x[v*2+1]=o[v*2+1]/40;h.setAttribute("uv",new ae(x,2));let g=new Tt({color:3103322,roughness:.12,metalness:.1,normalMap:m,normalScale:new _t(.35,.35),transparent:!0,opacity:.92}),p=new Pt(h,g);return p.receiveShadow=!0,p.userData.tick=v=>{m.offset.set(v*.01,v*.004)},n.add(p),p}function vd(i,t,e){let n=new Kt,s=new Kt,r=new Kt,o=new Kt,a=i.wallc.map(p=>bt(...p)),c=i.gatec.map(p=>bt(...p)),l=.09;for(let[p,v,y,_,P,M]of i.walls){let b=Math.hypot(y-p,_-v);if(b<.05)continue;let w=-(_-v)/b*l,S=(y-p)/b*l,E=t.at(p,v),A=t.at(y,_),N=E-.4,D=A-.4,O=E+P,H=A+P,U=a[M],z=qt(Math.round(p*3)*.71+Math.round(v*3)*1.37)<.2,C=z?s:n,B=z?[1,1,1]:U,V=[p+w,N,v+S],$=[y+w,D,_+S],ht=[y+w,H,_+S],ft=[p+w,O,v+S],J=[p-w,N,v-S],et=[y-w,D,_-S],dt=[y-w,H,_-S],ot=[p-w,O,v-S],vt=b/3,xt=-.4/(z?2:1),nt=P/(z?2:1),St=B.map(st=>st*.7);C.quad(V,$,ht,ft,[0,xt],[vt,xt],[vt,nt],[0,nt],B,null,[St,St,B,B]),C.quad(et,J,ot,dt,[vt,xt],[0,xt],[0,nt],[vt,nt],B,null,[St,St,B,B]);let W=z?bt(190,188,182):U.map(st=>st*.9),X=w*1.6,L=S*1.6;n.quad([p+X,O+.05,v+L],[y+X,H+.05,_+L],[y-X,H+.05,_-L],[p-X,O+.05,v-L],[0,1],[vt,1],[vt,1],[0,1],W,[0,1,0]),n.quad([p+X,O-.02,v+L],[y+X,H-.02,_+L],[y+X,H+.05,_+L],[p+X,O+.05,v+L],[0,1],[vt,1],[vt,1],[0,1],W),n.quad([y-X,H-.02,_-L],[p-X,O-.02,v-L],[p-X,O+.05,v-L],[y-X,H+.05,_-L],[0,1],[vt,1],[vt,1],[0,1],W),C.quad(J,V,ft,ot,[0,0],[.05,0],[.05,1],[0,1],B),C.quad($,et,dt,ht,[0,0],[.05,0],[.05,1],[0,1],B)}for(let[p,v,y,_,P,M]of i.gates){let b=Math.hypot(y-p,_-v),w=t.at(p,v),S=t.at(y,_),E=Math.min(w,S),A=c[M],N=-(_-v)/b*.03,D=(y-p)/b*.03,H=(qt(p*1.3+_*.7)<.5?0:1)*.5;r.quad([p+N,E,v+D],[y+N,E,_+D],[y+N,E+P,_+D],[p+N,E+P,v+D],[0,H],[b/1.5,H],[b/1.5,H+.5],[0,H+.5],A),r.quad([y-N,E,_-D],[p-N,E,v-D],[p-N,E+P,v-D],[y-N,E+P,_-D],[0,H],[b/1.5,H],[b/1.5,H+.5],[0,H+.5],A);for(let[U,z,C]of[[p,v,w],[y,_,S]]){let V=C+P+.2,$=a[(M+1)%a.length],ht=(ft,J,et,dt,ot)=>o.quad(ft,J,et,dt,[0,0],[.1,0],[.1,1],[0,1],$,ot);ht([U-.17,C-.3,z-.17],[U+.17,C-.3,z-.17],[U+.17,V,z-.17],[U-.17,V,z-.17]),ht([U+.17,C-.3,z+.17],[U-.17,C-.3,z+.17],[U-.17,V,z+.17],[U+.17,V,z+.17]),ht([U-.17,C-.3,z+.17],[U-.17,C-.3,z-.17],[U-.17,V,z-.17],[U-.17,V,z+.17]),ht([U+.17,C-.3,z-.17],[U+.17,C-.3,z+.17],[U+.17,V,z+.17],[U+.17,V,z-.17]),ht([U-.17-.03,V,z-.17-.03],[U+.17+.03,V,z-.17-.03],[U+.17+.03,V,z+.17+.03],[U-.17-.03,V,z+.17+.03],[0,1,0])}}let h=new he,u=sa(),d=rd(),f=new Pt(n.geometry(),fa({vertexColors:!0,map:u.map,normalMap:u.normalMap,normalScale:new _t(.6,.6),roughness:.95,side:Xt}));f.castShadow=!0,f.receiveShadow=!0,h.add(f);let m=new Pt(o.geometry(),fa({vertexColors:!0,map:u.map,roughness:.95,side:Xt}));m.castShadow=!0,m.receiveShadow=!0,h.add(m);let x=new Pt(s.geometry(),new Tt({vertexColors:!0,map:d.map,normalMap:d.normalMap,roughness:.95,side:Xt}));x.castShadow=!0,x.receiveShadow=!0,h.add(x);let g=new Pt(r.geometry(),new Tt({vertexColors:!0,map:cd(),roughness:.5,metalness:.4,side:Xt,alphaTest:.4}));return g.castShadow=!0,h.add(g),h.name="walls",e.add(h),h}var Md=Fe(()=>{Ne();Wn();da();Kn();th()});function wd(i){let t=0;for(let c of i){let l=c.index?c.toNonIndexed():c;c._ni=l,t+=l.attributes.position.count}let e=new Float32Array(t*3),n=new Float32Array(t*3),r=i.every(c=>c._ni.attributes.uv)?new Float32Array(t*2):null,o=0;for(let c of i){let l=c._ni;e.set(l.attributes.position.array,o*3),l.attributes.normal&&n.set(l.attributes.normal.array,o*3),r&&r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count}let a=new pe;return a.setAttribute("position",new ae(e,3)),a.setAttribute("normal",new ae(n,3)),r&&a.setAttribute("uv",new ae(r,2)),a}function pa(i){let t=i;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Ed(i,t,e){let n=pa(i*7919+13),s=[],r=[],o=[],a=[],c=new F,l=new F,h=new F,u=new F,d=new ze;for(let m=0;m<t;m++){let x=n()*Math.PI*2,g=Math.acos(2*n()-1)*(e.flat||1),p=.55+.45*Math.pow(n(),.5);c.set(Math.sin(g)*Math.cos(x)*p,Math.cos(g)*p*e.ry,Math.sin(g)*Math.sin(x)*p),c.y+=e.dy||0,l.set(c.x,c.y/(e.ry*e.ry),c.z).normalize();let v=e.card*(.75+.5*n());h.set(n()-.5,n()-.5,n()-.5).normalize(),d.setFromAxisAngle(h,n()*Math.PI);let y=new F(1,0,0).applyQuaternion(d),_=new F(0,1,0).applyQuaternion(d),P=[[-1,-1],[1,-1],[1,1],[-1,1]],M=P.map(([S,E])=>new F().copy(c).addScaledVector(y,S*v/2).addScaledVector(_,E*v/2)),b=.62+.38*Math.min(1,Math.max(0,(c.y/e.ry+.6)/1.4)),w=.9+.2*n();for(let S of[0,1,2,0,2,3]){let E=M[S];s.push(E.x,E.y,E.z);let A=new F(E.x,(E.y-(e.dy||0))/(e.ry*e.ry),E.z).normalize().lerp(l,.3).normalize();r.push(A.x,A.y,A.z),o.push((P[S][0]+1)/2,(P[S][1]+1)/2),a.push(b*w,b*w,b*w)}}let f=new pe;return f.setAttribute("position",new Jt(s,3)),f.setAttribute("normal",new Jt(r,3)),f.setAttribute("uv",new Jt(o,2)),f.setAttribute("color",new Jt(a,3)),f}function Sd(i,t,e){let n=new Ls(.62,t),s=n.attributes.position,r=pa(i);for(let u=0;u<s.count;u++){let d=s.getX(u),f=s.getY(u),m=s.getZ(u),x=.85+.25*qt(i*3+Math.round(d*50)*1.3+Math.round(f*50)*2.1+Math.round(m*50)*3.7);s.setXYZ(u,d*x,f*x*e,m*x)}let o=n.index?n.toNonIndexed():n;o.computeVertexNormals();let a=o.attributes.normal,c=o.attributes.position,l=[];for(let u=0;u<c.count;u++){let d=new F(c.getX(u),c.getY(u),c.getZ(u)).normalize(),f=new F(a.getX(u),a.getY(u),a.getZ(u)).lerp(d,.8).normalize();a.setXYZ(u,f.x,f.y,f.z);let m=.3+.22*Math.min(1,Math.max(0,(c.getY(u)/e+.8)/1.6));l.push(m,m,m)}o.setAttribute("color",new Jt(l,3));let h=new Float32Array(c.count*2).fill(.5);return o.setAttribute("uv",new ae(h,2)),o}function bd(i){let t=i.reduce((c,l)=>c+l.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=new Float32Array(t*3),o=0;for(let c of i)e.set(c.attributes.position.array,o*3),n.set(c.attributes.normal.array,o*3),s.set(c.attributes.uv.array,o*2),r.set(c.attributes.color.array,o*3),o+=c.attributes.position.count;let a=new pe;return a.setAttribute("position",new ae(e,3)),a.setAttribute("normal",new ae(n,3)),a.setAttribute("uv",new ae(s,2)),a.setAttribute("color",new ae(r,3)),a}function r1(i,t){let e=pa(i+5),n=[],s=t?5:7,r=new be(.11,.19,1,s,1,!0);r.translate(0,.5,0),n.push(r);let o=t?2:4;for(let a=0;a<o;a++){let c=new be(.035,.08,.75,s-2,1,!0);c.translate(0,.375,0),c.rotateZ(.5+.4*e()),c.rotateY(a/o*Math.PI*2+e()),c.translate(0,.85+.1*e(),0),n.push(c)}return wd(n)}function o1(i){let t=[],e=i?9:14,n=pa(77);for(let a=0;a<e;a++){let c=a/e*Math.PI*2+n()*.3,l=a%3===0?.5:a%3===1?0:-.35,h=2.6+n()*.8,u=new Ai(1,h,1,6),d=u.attributes.position;for(let f=0;f<d.count;f++){let m=d.getY(f)+h/2,x=m/h,g=d.getX(f)*(.35+.65*Math.sin(Math.min(1,x*1.2)*Math.PI*.9+.1)),p=m*Math.cos(l),v=m*Math.sin(l)-.55*x*x*h*.45;d.setXYZ(f,g,v,p)}u.rotateY(c),t.push(u)}let s=wd(t);s.computeVertexNormals();let r=s.attributes.normal;for(let a=0;a<r.count;a++){let c=new F(r.getX(a),Math.abs(r.getY(a))+.6,r.getZ(a)).normalize();r.setXYZ(a,c.x,c.y,c.z)}let o=new Float32Array(s.attributes.position.count*3).fill(1);return s.setAttribute("color",new ae(o,3)),s}function Td(i,t,e,n,s){let r=[],o=[],a=i.extras.fountains||[];for(let $ of i.trees)a.some(ht=>Math.hypot(ht[0]-$[0],ht[1]-$[1])<7.5)||($[3]>=1e3?o:r).push($);let c=n==="low"||n==="medium",l={low:2}[n]||1,h=new he;h.name="trees";let u=$l(0),d=$l(1),f=$=>new Tt({map:$,alphaTest:.42,vertexColors:!0,roughness:.85,side:Xt}),m=f(u),x=f(d),g=$=>new pr({depthPacking:zl,map:$,alphaTest:.42}),p=new Tt({vertexColors:!0,roughness:.95,map:null}),v=n==="low"?12:c?18:44,y=[{ry:.78,card:1.2,dy:0},{ry:.62,card:1.3,dy:-.05,flat:.9},{ry:1.05,card:1.1,dy:.05}],_=y.map(($,ht)=>bd([Sd(ht+3,c?0:1,$.ry*.9),Ed(ht+1,v,$)])),P=bd([Sd(9,0,.7),Ed(9,c?10:18,{ry:.7,card:1.35,dy:0})]),M=new ue,b=new ze,w=new F,S=new F,E=new Qt,A=new F(0,1,0),N=[[.34,.5,.2],[.4,.56,.22],[.3,.44,.18],[.44,.58,.26],[.36,.54,.27],[.48,.58,.28],[.28,.42,.2]],D=[[.98,.82,.18],[.88,.45,.66],[.92,.4,.18]],O=[],H=_.map(()=>[]);r.forEach(($,ht)=>{qt($[3]+ht*.37)<.06&&$[2]<3.5?O.push($):H[Math.floor(qt($[3]*3.1+ht)*3)%3].push($)});let U=[];H.forEach(($,ht)=>{if(!$.length)return;let ft=new Ve(_[ht],ht===1?x:m,$.length);$.forEach((J,et)=>{let[dt,ot,vt]=J,xt=t.at(dt,ot),nt=Math.max(1.6,vt*.95)*(.9+.2*qt(et*3.3+ht)),St=nt*y[ht].ry*.9+1.6+qt(et+ht*999)*1;b.setFromAxisAngle(A,qt(et*7+ht)*6.28),w.set(nt,nt,nt),S.set(dt,xt+St,ot),M.compose(S,b,w),ft.setMatrixAt(et,M);let W=qt(J[3]*1.7+et),X=N[Math.floor(W*N.length)%N.length];qt(et*13.3+ht)<.012&&(X=D[Math.floor(qt(et)*3)%3]),E.setRGB(X[0],X[1],X[2]),ft.setColorAt(et,E),U.push([dt,xt,ot,St-nt*y[ht].ry*.35,nt])}),ft.castShadow=!0,ft.receiveShadow=!0,ft.customDepthMaterial=g(ht===1?d:u),h.add(ft)});let z=o.filter(($,ht)=>ht%l===0||$[3]>=4e6&&$[3]<5e6);if(z.length){let $=new Ve(P,x,z.length);z.forEach((ht,ft)=>{let[J,et,dt]=ht,ot=t.at(J,et),vt=dt*1.15*(c&&l>1?1.15:1),xt=vt*.7+1.5+qt(ft)*2.5+(ht[3]>=2e6&&ht[3]<4e6?2.5+qt(ft*1.7)*3:0);b.setFromAxisAngle(A,qt(ft*3)*6.28),w.set(vt,vt,vt),S.set(J,ot+xt,et),M.compose(S,b,w),$.setMatrixAt(ft,M);let nt=N[Math.floor(qt(ft*1.3)*N.length)%N.length],St=.78+.15*qt(ft*2.7),W=qt(ft*5.1)<.2;if(ht[3]>=4e6&&ht[3]<5e6){let X=qt(ht[3]*.37);X<.18?(nt=[.5,.44,.36],St=.9,W=!0,w.multiplyScalar(.72),M.compose(S,b,w),$.setMatrixAt(ft,M)):X<.42&&(nt=[[.58,.52,.28],[.52,.5,.26],[.62,.48,.24]][Math.floor(X*30)%3],St=.85)}E.setRGB(nt[0]*St,nt[1]*St,nt[2]*St),$.setColorAt(ft,E),!c&&W&&U.push([J,ot,et,xt-vt*.3,vt])}),$.castShadow=!c,$.receiveShadow=!0,$.customDepthMaterial=g(d),h.add($)}let C=r1(3,c),B=new Ve(C,new Tt({color:6179384,roughness:1}),U.length);U.forEach(([$,ht,ft,J,et],dt)=>{let ot=.7+et*.12;w.set(ot,J,ot),b.setFromAxisAngle(A,qt(dt*1.9)*6.28),S.set($,ht-.2,ft),M.compose(S,b,w),B.setMatrixAt(dt,M)}),B.castShadow=!0,h.add(B);let V=O.concat(s||[]);if(V.length){let $=o1(c),ht=new Tt({map:Jl(),alphaTest:.4,vertexColors:!0,side:Xt,roughness:.85}),ft=new Ve($,ht,V.length);ft.customDepthMaterial=g(Jl());let J=new be(.16,.24,1,c?6:10,1,!0);J.translate(0,.5,0);let et=new Ve(J,new Tt({color:10261898,roughness:.95}),V.length);V.forEach((dt,ot)=>{let[vt,xt]=dt,nt=t.at(vt,xt),St=7+qt(ot*9.1)*7;b.setFromAxisAngle(A,qt(ot)*6.28),w.set(1.25,1.25,1.25),S.set(vt,nt+St,xt),M.compose(S,b,w),ft.setMatrixAt(ot,M),E.setRGB(.75+.2*qt(ot*2.2),.85,.7),ft.setColorAt(ot,E),w.set(1,St,1),S.set(vt,nt,xt),M.compose(S,b,w),et.setMatrixAt(ot,M)}),ft.castShadow=et.castShadow=!0,h.add(ft),h.add(et)}return e.add(h),h}var Ad=Fe(()=>{Ne();Wn();Kn()});function Cd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pe,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Rd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Rd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ae(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Pd=Fe(()=>{Ne()});function ma(i,t,e,n,s,r,o,a=1){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,x=-f/m,g=d/m,p=r(h,c),v=r(u,l);i.quad([h[0]+x*n,p,h[2]+g*n],[u[0]+x*n,v,u[2]+g*n],[u[0]+x*s,v,u[2]+g*s],[h[0]+x*s,p,h[2]+g*s],[c/a,0],[l/a,0],[l/a,1],[c/a,1],o)}}function Id(i,t,e,n,s,r,o,a){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,x=-f/m,g=d/m;i.quad([h[0]+x*n,h[1]+r,h[2]+g*n],[u[0]+x*n,u[1]+r,u[2]+g*n],[u[0]+x*s,u[1]+o,u[2]+g*s],[h[0]+x*s,h[1]+o,h[2]+g*s],[c/3.4,0],[l/3.4,0],[l/3.4,.3],[c/3.4,.3],a)}}function Vs(i,t,e,n,s,r,o,a=0,c=null){c=c??t.L;for(let l=a;l<c;l+=e){let h=Math.min(c,l+e),u=t.at(l),d=t.at(h),f=d[0]-u[0],m=d[2]-u[2],x=Math.hypot(f,m)||1,g=-m/x,p=f/x,v=[u[0]+g*n,s(u,l),u[2]+p*n],y=[d[0]+g*n,s(d,h),d[2]+p*n],_=[d[0]+g*n,r(d,h),d[2]+p*n],P=[u[0]+g*n,r(u,l),u[2]+p*n];i.quad(v,y,_,P,[l,0],[h,0],[h,1],[l,1],o)}}function Dd(i,t,e){let n=new he;n.name="rail";let s=new Kt,r=new Kt,o=[],a=_=>_[0]>t.XMIN-40&&_[0]<t.XMAX+40&&_[1]>t.ZMIN-40&&_[1]<t.ZMAX+40;for(let _ of i.rail){let P=[],M=[];if(_.pts.forEach((E,A)=>{a(E)&&(P.push(E),M.push(_.h[A]))}),P.length<2)continue;let b=new Tn(P,M);o.push(b);let w=bt(255,228,205);ma(s,b,3,-1.7,1.7,E=>E[1]+.35,w,3.4),Id(s,b,3,-1.7,-2.6,.35,-.25,bt(225,195,170)),Id(s,b,3,2.6,1.7,-.25,.35,bt(225,195,170));let S=bt(150,150,155);for(let E of[-.5,.5])ma(r,b,3,E-.04,E+.04,A=>A[1]+.62,S),Vs(r,b,3,E-.04,A=>A[1]+.47,A=>A[1]+.62,bt(90,80,70)),Vs(r,b,3,E+.04,A=>A[1]+.62,A=>A[1]+.47,bt(90,80,70))}let c=ad(),l=new Pt(s.geometry(),new Tt({vertexColors:!0,map:c.map,normalMap:c.normalMap,side:Xt,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));l.receiveShadow=!0,n.add(l);let h=new Pt(r.geometry(),new Tt({vertexColors:!0,roughness:.35,metalness:.8}));n.add(h);let u=0;for(let _ of o)u+=Math.floor(_.L/.65);let d=new He(2,.14,.24),f=new Ve(d,new Tt({color:10657430,roughness:.9}),u),m=new ue,x=new ze,g=new F,p=new F(1,1,1),v=new F(0,1,0),y=0;for(let _ of o)for(let P=0;P<_.L-.65;P+=.65){let M=_.at(P),b=_.at(P+.6),w=Math.atan2(b[2]-M[2],b[0]-M[0]);x.setFromAxisAngle(v,-w+Math.PI/2),g.set(M[0],M[1]+.42,M[2]),m.compose(g,x,p),f.setMatrixAt(y++,m)}return f.count=y,f.receiveShadow=!0,n.add(f),e.add(n),{group:n,paths:o}}function Ud(i){let t=[];for(let[e,n]of i){let s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n[0],r[o*3+1]=n[1],r[o*3+2]=n[2];e.setAttribute("color",new ae(r,3)),e.attributes.uv||e.setAttribute("uv",new ae(new Float32Array(s*2),2)),t.push(e.index?e.toNonIndexed():e)}return Cd(t,!1)}function _e(i,t,e,n,s,r){let o=new He(i,t,e);return o.translate(n,s+t/2,r),o}function Ld(i,t,e=.5){let n=new be(e,e,.14,14);return n.rotateX(Math.PI/2),n.translate(i,e,t),n}function ga(i,t,e,n,s){i.push([_e(n*(e-1)+1.6,.55,.22,t,.45,1.18),s],[_e(n*(e-1)+1.6,.55,.22,t,.45,-1.18),s]);for(let r=0;r<e;r++){let o=t+(r-(e-1)/2)*n;i.push([Ld(o,.72,.48),s],[Ld(o,-.72,.48),s])}i.push([_e(.5,.35,2.2,t,.62,0),s])}function a1(){let i=bt(232,186,40),t=bt(20,110,88),e=bt(52,54,58),n=bt(26,30,34),s=bt(235,235,230),r=bt(120,124,128),o=[];o.push([_e(21.6,.38,3.14,0,1.42,0),e]),o.push([_e(21.8,.12,3.18,0,1.8,0),bt(200,160,30)]),ga(o,6.9,3,1.75,n),ga(o,-6.9,3,1.75,n),o.push([_e(7,1,2.5,0,.55,0),e]),o.push([_e(13.2,2.65,2.5,-3,1.92,0),i]),o.push([_e(13.25,.32,2.54,-3,2.55,0),t]),o.push([_e(3.4,.35,3,-8.4,4.55,0),i]),o.push([_e(3.2,.2,2.9,-8.4,4.9,0),r]);for(let a of[-7.5,-9.3]){let c=new be(.62,.62,.06,16);c.translate(a,5.12,0),o.push([c,n])}for(let a of[-1,-3.2]){let c=new be(.5,.5,.06,14);c.translate(a,4.6,0),o.push([c,n])}o.push([_e(1.2,.4,.8,-5,4.57,0),e]),o.push([_e(3.4,3,3.1,5.4,1.92,0),i]),o.push([_e(3.45,.32,3.14,5.4,2.55,0),t]),o.push([_e(3.5,.18,3.16,5.4,4.92,0),bt(210,170,36)]),o.push([_e(.06,.95,2.5,7.13,3.72,0),n]),o.push([_e(1.6,.85,.06,5.6,3.75,1.56),n]),o.push([_e(1.6,.85,.06,5.6,3.75,-1.56),n]),o.push([_e(2.6,1.55,2.6,8.4,1.92,0),i]),o.push([_e(2.62,.32,2.64,8.4,2.55,0),t]),o.push([_e(.1,.25,.5,9.74,3,0),s]),o.push([_e(.1,.18,.3,9.74,2.2,.9),s]),o.push([_e(.1,.18,.3,9.74,2.2,-.9),s]);for(let a of[1.52,-1.52]){o.push([_e(20.6,.05,.05,-.5,2.85,a),s]);for(let c=-10;c<=9.8;c+=2.2)o.push([_e(.05,1,.05,c,1.86,a),s])}return o.push([_e(.4,.5,.9,10.6,1,0),e]),o.push([_e(.4,.5,.9,-10.6,1,0),e]),o.push([_e(.6,.5,3,10.2,.6,0),i]),o.push([_e(.6,.5,3,-10.6,.6,0),i]),Ud(o)}function c1(){let i=bt(110,70,52),t=bt(86,54,40),e=bt(30,30,32),n=bt(70,44,36),s=[];ga(s,3.5,2,1.75,e),ga(s,-3.5,2,1.75,e),s.push([_e(9.9,.3,2.4,0,1.15,0),e]),s.push([_e(9.6,2.5,3.05,0,1.42,0),i]);for(let a=0;a<9;a++){let c=-4.4+a*1.1;s.push([_e(.12,2.5,3.17,c,1.42,0),t])}s.push([_e(9.7,.12,3.15,0,3.85,0),t]);let r=new Gi;r.moveTo(-1.42,0),r.lineTo(-1,.35),r.lineTo(-.3,.62),r.lineTo(.3,.62),r.lineTo(1,.35),r.lineTo(1.42,0);let o=new Is(r,{depth:8.8,bevelEnabled:!1});return o.rotateY(Math.PI/2),o.translate(-4.4,3.86,0),s.push([o,n]),s.push([_e(.5,.3,.4,5.2,1,0),e]),s.push([_e(.5,.3,.4,-5.2,1,0),e]),Ud(s)}function Nd(i,t){let e=i.slice().sort((M,b)=>b.L-M.L).slice(0,2),n=new he;n.name="train";let s=10.5,r=22,o=60,a=new Tt({vertexColors:!0,roughness:.7,metalness:.15}),c=new Ve(c1(),a,o);c.castShadow=!0,c.receiveShadow=!0,n.add(c);let l=a1(),h=new Tt({vertexColors:!0,roughness:.45,metalness:.25}),u=[];for(let M=0;M<2;M++){let b=new he,w=new Pt(l,h);w.castShadow=!0,w.receiveShadow=!0,b.add(w),n.add(b),u.push(b)}t.add(n);let d=new ue,f=new ze,m=new F,x=new F(1,1,1),g=new F(0,1,0),p=-200,v=1,y=0,_=0;function P(M,b,w){let S=M.at(b-w/2*.8),E=M.at(b+w/2*.8),A=M.at(b),N=Math.atan2(E[2]-S[2],E[0]-S[0]);return f.setFromAxisAngle(g,-N),m.set(A[0],A[1]+.62,A[2]),N}return{group:n,placeNear(M,b){let w=e[0],S=0,E=1e9;for(let A=0;A<w.L;A+=5){let N=w.at(A),D=Math.hypot(N[0]-M,N[2]-b);D<E&&(E=D,S=A)}y=0,v=1,_=0,p=S+r*1.5},tick(M){let b=e[y];if(!b)return;if(_>0){_-=M,n.visible=!1;return}n.visible=!0,p+=M*13*v;let w=p;for(let A=0;A<2;A++)P(b,w-r/2*v,r),u[A].position.copy(m),u[A].quaternion.copy(f),v<0&&u[A].rotateY(Math.PI),w-=r*v;for(let A=0;A<o;A++){let N=w-s/2*v;P(b,N,s),d.compose(m,f,x),c.setMatrixAt(A,d),w-=s*v}c.instanceMatrix.needsUpdate=!0;let S=w;(v>0?S>b.L+50:S<-50)&&(_=40,y=(y+1)%e.length,v=-v,p=v>0?-50:b.L+50)}}}function Fd(i,t,e,n){let s=new he;s.name="passarelas";let r=new Kt,o=new Kt,a=bt(40,110,140),c=bt(150,150,150);for(let m of i.extras.footbridges){let x=new Tn(m,m.map(()=>0)),g=t.at(m[0][0],m[0][1]),p=t.at(m[m.length-1][0],m[m.length-1][1]),v=x.at(x.L/2),y=t.at(v[0],v[2])+7.2,_=x.s[1],P=x.s[x.s.length-2],M=m.map((A,N)=>N===0?g+.2:N===m.length-1?p+.2:y),b=new Tn(m,M),w=1.2;ma(r,b,1,-w,w,A=>A[1],c),ma(r,b,1,w,-w,A=>A[1]-.35,a),Vs(r,b,1,-w,A=>A[1]-.35,A=>A[1],a),Vs(r,b,1,w,A=>A[1],A=>A[1]-.35,a);for(let A of[-w,w])Vs(o,b,1,A,N=>N[1],N=>N[1]+1.1,a);for(let A of[-w,w])Vs(o,b,1,A,N=>N[1]+1.1,N=>N[1]+2.6,a,_,P);let S=new He(.35,1,.35),E=new Tt({color:2780812,roughness:.6,metalness:.4});for(let A=4;A<b.L-2;A+=7){let N=b.at(A),D=t.at(N[0],N[2]),O=N[1]-.35-D;if(!(O<.8))for(let H of[-1,1]){let U=new Pt(S,E);U.scale.y=O,U.position.set(N[0],D+O/2,N[2]),s.add(U),U.castShadow=!0}}}let l=new Pt(r.geometry(),new Tt({vertexColors:!0,roughness:.6,metalness:.3,side:Xt}));l.castShadow=l.receiveShadow=!0;let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.clearRect(0,0,64,64),u.strokeStyle="#2c6f8e",u.lineWidth=3,u.strokeRect(0,0,64,64),u.beginPath(),u.moveTo(0,32),u.lineTo(64,32),u.moveTo(32,0),u.lineTo(32,64),u.stroke();let d=new pn(h);d.wrapS=d.wrapT=bn,d.repeat.set(1,4),d.colorSpace=Ce;let f=new Pt(o.geometry(),new Tt({map:d,transparent:!0,alphaTest:.3,side:Xt,metalness:.4,roughness:.5}));return s.add(l,f),e.add(s),s}var Tn,_a=Fe(()=>{Ne();Wn();Pd();Kn();Tn=class{constructor(t,e){this.p=t,this.h=e,this.s=[0];for(let n=1;n<t.length;n++)this.s.push(this.s[n-1]+Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1]));this.L=this.s[this.s.length-1]}at(t){t=Math.max(0,Math.min(this.L,t));let e=0,n=this.s.length-1;for(;n-e>1;){let a=e+n>>1;this.s[a]<=t?e=a:n=a}let s=(t-this.s[e])/Math.max(1e-6,this.s[n]-this.s[e]),r=this.p[e],o=this.p[n];return[r[0]+(o[0]-r[0])*s,this.h[e]+(this.h[n]-this.h[e])*s,r[1]+(o[1]-r[1])*s]}}});function eh(i,t,e,n=1){let s=[],r=[];for(let a=t;a<e+1e-6;a+=n){let c=i.at(Math.min(a,e));s.push([c[0],c[2]]),r.push(c[1])}let o=i.at(e);return Math.hypot(s[s.length-1][0]-o[0],s[s.length-1][1]-o[2])>.05&&(s.push([o[0],o[2]]),r.push(o[1])),new Tn(s,r)}function $e(i,t){let e=i.at(Math.max(0,t-.5)),n=i.at(Math.min(i.L,t+.5)),s=n[0]-e[0],r=n[2]-e[2],o=Math.hypot(s,r)||1;return{c:i.at(t),ux:s/o,uz:r/o,nx:-r/o,nz:s/o}}function xn(i,t,e,n,s,r,o,a,c,l=1,h=null){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=$e(t,u),m=$e(t,d),x=(g,p,v)=>[g.c[0]+g.nx*p,a(g.c[1],p,v),g.c[2]+g.nz*p];i.quad(x(f,r,u),x(m,r,d),x(m,o,d),x(f,o,u),[r/l,u/l],[r/l,d/l],[o/l,d/l],[o/l,u/l],c,h)}}function Gs(i,t,e,n,s,r,o,a,c,l=1,h=!1){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=$e(t,u),m=$e(t,d),x=[f.c[0]+f.nx*r,o(f.c,u),f.c[2]+f.nz*r],g=[m.c[0]+m.nx*r,o(m.c,d),m.c[2]+m.nz*r],p=[m.c[0]+m.nx*r,a(m.c,d),m.c[2]+m.nz*r],v=[f.c[0]+f.nx*r,a(f.c,u),f.c[2]+f.nz*r];h?i.quad(g,x,v,p,[d/l,g[1]/l],[u/l,x[1]/l],[u/l,v[1]/l],[d/l,p[1]/l],c):i.quad(x,g,p,v,[u/l,x[1]/l],[d/l,g[1]/l],[d/l,p[1]/l],[u/l,v[1]/l],c)}}function Dn(i,t,e,n,s,r,o,a=1){for(let c=e;c<n-1e-6;c+=s){let l=Math.min(n,c+s),h=$e(t,c),u=$e(t,l);for(let d=0;d<r.length-1;d++){let[f,m]=r[d],[x,g]=r[d+1],p=(v,y,_)=>[v.c[0]+v.nx*y,v.c[1]+_,v.c[2]+v.nz*y];i.quad(p(h,f,m),p(u,f,m),p(u,x,g),p(h,x,g),[c/a,m/a],[l/a,m/a],[l/a,g/a],[c/a,g/a],o)}}}function hn(i,t,e,n,s,r,o,a,c,l=1){let h=(g,p,v)=>[t.c[0]+t.ux*(e+g)+t.nx*(n+p),v,t.c[2]+t.uz*(e+g)+t.nz*(n+p)],u=s/2,d=r/2,f=a,m=a+o,x=(g,p,v,y,_,P)=>i.quad(g,p,v,y,[0,0],[_/l,0],[_/l,P/l],[0,P/l],c);x(h(-u,-d,f),h(u,-d,f),h(u,-d,m),h(-u,-d,m),s,o),x(h(u,d,f),h(-u,d,f),h(-u,d,m),h(u,d,m),s,o),x(h(u,-d,f),h(u,d,f),h(u,d,m),h(u,-d,m),r,o),x(h(-u,d,f),h(-u,-d,f),h(-u,-d,m),h(-u,d,m),r,o),x(h(-u,-d,m),h(u,-d,m),h(u,d,m),h(-u,d,m),s,r),x(h(-u,d,f),h(u,d,f),h(u,-d,f),h(-u,-d,f),s,r)}function Od(i,t,e,n){let s=i.viaduct,r=new he;r.name="viaduto";let o=new Kt,a=new Kt,c=new Kt,l=new Kt,h=new Kt,u=new Kt,d=new Kt,f=bt(214,210,202),m=bt(188,184,176),x=bt(228,225,218),[g,p]=s.deck,v=s.ramps.find(G=>Math.hypot(G.pts[0][0]-g[0],G.pts[0][1]-g[1])<1)||s.ramps[1],y=s.ramps.find(G=>G!==v),_=[...v.pts.slice().reverse(),...y.pts.slice(1)],P=[...v.h.slice().reverse(),...y.h.slice(1)],M=new Tn(_,P),b=0;{let G=0;for(let Y=1;Y<v.pts.length;Y++)G+=Math.hypot(v.pts[Y][0]-v.pts[Y-1][0],v.pts[Y][1]-v.pts[Y-1][1]);b=G}let w=[];for(let G of n||[])for(let Y=b-5;Y<b+40;Y+=.25){let Q=M.at(Y),at=1e9;for(let q=0;q<G.L;q+=2){let R=G.at(q),T=Math.hypot(Q[0]-R[0],Q[2]-R[2]);T<at&&(at=T)}at<.6&&(w.push(Y),Y+=3)}w.length||(w=[b+13.5,b+18.1]),w.sort((G,Y)=>G-Y);let S=b+7.5,E=b+24.5,A=b+44,N=b+62,D=eh(M,S-.6,N+.6,1),O=S-.6,H=-6.3,U=6.3,z=0,C=8;xn(a,D,0,D.L,1,-5.85,3.55,G=>G+.02,[1,1,1],C,[0,1,0]),xn(c,D,0,D.L,1,4.05,6,G=>G+.17,[1,1,1],2,[0,1,0]),Gs(o,D,0,D.L,1,4.05,G=>G[1]+.02,G=>G[1]+.17,f,2,!0),xn(o,D,0,D.L,1,U,H,G=>G-.3,m,2,[0,-1,0]);for(let[G,Y]of[[H,!1],[U,!0]])Gs(o,D,0,D.L,1,G,Q=>Q[1]-.75,Q=>Q[1]+.25,x,2,Y);xn(o,D,0,D.L,1,H,H+.25,G=>G+.25,x,2,[0,1,0]),xn(o,D,0,D.L,1,U-.2,U,G=>G+.25,x,2,[0,1,0]);let B=(G,Y)=>[[G,.02],[G+Y*.04,.1],[G+Y*.17,.33],[G+Y*.31,.85],[G+Y*.42,.85],[G+Y*.42,.02]].map(([Q,at])=>[Q,at]),V=B(-6.27,1),$=[[3.55,.02],[3.59,.1],[3.72,.33],[3.86,.85],[3.97,.85],[4.05,.17]];Dn(o,D,0,D.L,1,V,x,2),Dn(o,D,0,D.L,1,$.slice().reverse(),x,2),Dn(o,D,0,D.L,1,[[6,.17],[6,.75],[6.3,.75],[6.3,.25]],x,2);let ht=bt(246,196,18);for(let[G,Y]of[[-6.1,.85],[6.15,.75]]){for(let Q=.3;Q<D.L;Q+=.22){let at=$e(D,Q),q=at.c[0]+at.nx*G,R=at.c[2]+at.nz*G,T=at.c[1]+Y,k=.025;u.quad([q-at.ux*k,T,R-at.uz*k],[q+at.ux*k,T,R+at.uz*k],[q+at.ux*k,T+1.9,R+at.uz*k],[q-at.ux*k,T+1.9,R-at.uz*k],[0,0],[1,0],[1,1],[0,1],ht),u.quad([q-at.nx*k,T,R-at.nz*k],[q+at.nx*k,T,R+at.nz*k],[q+at.nx*k,T+1.9,R+at.nz*k],[q-at.nx*k,T+1.9,R-at.nz*k],[0,0],[1,0],[1,1],[0,1],ht)}for(let Q of[.06,1.86])Dn(u,D,0,D.L,1,[[G-.03,Y+Q],[G+.03,Y+Q],[G+.03,Y+Q+.06],[G-.03,Y+Q+.06],[G-.03,Y+Q]],ht);for(let Q=.3;Q<D.L;Q+=2.5){let at=$e(D,Q);hn(u,at,0,G,.08,.08,1.95,at.c[1]+Y,ht)}}let ft=bt(236,236,230);for(let[G,Y,Q,at]of[[-1.25,.06,ht,!1],[-1.05,.06,ht,!1],[-5.5,.07,ft,!1],[3.2,.07,ft,!1]])xn(h,D,0,D.L,1,G-Y,G+Y,q=>q+.04,Q,1,[0,1,0]);let J=[[S,E],[E,A],[A,N]];for(let[G,Y]of J){let Q=G-O+.4,at=Y-O-.4;for(let q of[-4.6,-1.55,1.55,4.6])Dn(o,D,Q,at,1,[[q-.17,-.3],[q-.17,-1.45],[q-.38,-1.6],[q-.38,-1.82],[q+.38,-1.82],[q+.38,-1.6],[q+.17,-1.45],[q+.17,-.3]],m,2);for(let q of[.03,.5,.97]){let R=Q+(at-Q)*q,T=$e(D,R);hn(o,T,0,0,.25,9,1.2,T.c[1]-1.55,m,2)}}let et=new be(.55,.55,1,24,1,!0),dt=Ci(),ot=new Tt({color:14078666,map:dt.map,normalMap:dt.normalMap,roughness:.85}),vt=(G,Y)=>{let Q=t.at(G,Y);for(let at of n||[])for(let q=0;q<at.L;q+=3){let R=at.at(q);Math.hypot(R[0]-G,R[2]-Y)<6&&(Q=Math.min(Q,R[1]+.2))}return Q};for(let G of[E,A]){let Y=$e(D,G-O),Q=Y.c[1]-1.82,at=1.5,q=[[-6,0],[6,0],[6,-.6],[4.6,-at],[-4.6,-at],[-6,-.6]],R=(T,k,tt)=>[Y.c[0]+Y.nx*T+Y.ux*tt,Q+k,Y.c[2]+Y.nz*T+Y.uz*tt];for(let T=0;T<q.length;T++){let[k,tt]=q[T],[rt,it]=q[(T+1)%q.length];o.quad(R(k,tt,-.85),R(rt,it,-.85),R(rt,it,.85),R(k,tt,.85),[0,0],[1,0],[1,.5],[0,.5],m)}for(let T of[-.85,.85]){let k=q.map(([tt,rt])=>R(tt,rt,T));o.tri(k[0],k[1],k[2],[0,0],[1,0],[1,1],m),o.tri(k[0],k[2],k[3],[0,0],[1,0],[1,1],m),o.tri(k[0],k[3],k[4],[0,0],[1,0],[1,1],m),o.tri(k[0],k[4],k[5],[0,0],[1,0],[1,1],m)}for(let T of[-3.2,3.2]){let k=Y.c[0]+Y.nx*T,tt=Y.c[2]+Y.nz*T,rt=vt(k,tt)-.3,it=Q-at-rt+.05,mt=new Pt(et,ot);mt.scale.set(1,it,1),mt.position.set(k,rt+it/2,tt),mt.castShadow=!0,mt.receiveShadow=!0,r.add(mt);let ut=new Pt(new be(.75,.8,.5,20),ot);ut.position.set(k,rt+.25,tt),r.add(ut)}}for(let[G,Y]of[[S,-1],[N,1]]){let Q=$e(M,G),at=Q.c[1]-1.82;hn(o,Q,Y*.6,0,1.4,13,1.3,at-1.3,m,2);let q=14;for(let R=0;R<q;R++){let T=-6.6+13.2*R/q,k=-6.6+13.2*(R+1)/q,tt=[Q.c[0]+Q.nx*T+Q.ux*Y*1.3,0,Q.c[2]+Q.nz*T+Q.uz*Y*1.3],rt=[Q.c[0]+Q.nx*k+Q.ux*Y*1.3,0,Q.c[2]+Q.nz*k+Q.uz*Y*1.3],it=vt(tt[0],tt[2])-.5,mt=vt(rt[0],rt[2])-.5,ut=at-1.3,yt=ut,Ct=Y<0?[[rt[0],mt,rt[2]],[tt[0],it,tt[2]],[tt[0],ut,tt[2]],[rt[0],yt,rt[2]]]:[[tt[0],it,tt[2]],[rt[0],mt,rt[2]],[rt[0],yt,rt[2]],[tt[0],ut,tt[2]]];l.quad(Ct[0],Ct[1],Ct[2],Ct[3],[T/3,it/3],[k/3,mt/3],[k/3,yt/3],[T/3,ut/3],[1,1,1])}}let xt=eh(M,0,S+1.5,1),nt=eh(M,N-1.5,M.L,1);for(let[G,Y]of[[xt,"N"],[nt,"S"]]){xn(a,G,0,G.L,1,-5.85,5.85,ut=>ut+.12,[1,1,1],C,[0,1,0]);for(let[ut,yt,Ct]of[[-.12,.06,ht],[.12,.06,ht],[-5.5,.07,ft],[5.5,.07,ft]])xn(h,G,0,G.L,1,ut-yt,ut+yt,Mt=>Mt+.14,Ct,1,[0,1,0]);Dn(o,G,0,G.L,1,B(-6.27,1),x,2),Dn(o,G,0,G.L,1,B(6.27,-1).slice().reverse(),x,2);let at=ut=>ut[1]-t.at(ut[0],ut[2]),q=0;for(let ut=0;ut<G.L;ut+=1){let yt=$e(G,ut);at(yt.c)>.25&&(q=ut)}let R=Math.min(G.L,q+2),T=0,k=Y==="N"?G.L:R,tt=Y==="N"?Math.max(0,G.L-R):0,rt=Y==="N"?(()=>{let ut=G.L;for(let yt=G.L;yt>=0;yt-=1){let Ct=$e(G,yt);if(at(Ct.c)>.25)ut=yt;else break}return Math.max(0,ut-2)})():0,it=Y==="N"?rt:0,mt=Y==="N"?G.L:R;for(let[ut,yt]of[[-6.3,!0],[6.3,!1]])Gs(l,G,it,mt,1,ut,Ct=>Math.min(t.at(Ct[0]+0,Ct[2]),Ct[1])-.6,Ct=>Ct[1]+.02,[1,1,1],3,yt);xn(o,G,it,mt,1,-6.3,-6.3+1e-4,ut=>ut,x)}for(let G of[6,D.L/2,D.L-6]){let Y=$e(D,G),Q=Y.c[0]+Y.nx*5.8,at=Y.c[2]+Y.nz*5.8,q=Y.c[1]+.17;hn(d,Y,0,5.8,.16,.16,8.5,q,bt(150,152,156)),hn(d,Y,0,4.6,.12,2.4,.12,q+8.4,bt(150,152,156)),hn(d,Y,0,3.4,.5,.25,.12,q+8.3,bt(230,230,225))}let St=zs(),W=ks(),X=aa(),L=(G,Y,Q=!0)=>{let at=new Pt(G.geometry(),Y);return at.castShadow=Q,at.receiveShadow=!0,r.add(at),at};L(o,new Tt({vertexColors:!0,map:dt.map,normalMap:dt.normalMap,normalScale:new _t(.5,.5),roughness:.85,side:Xt})),L(a,new Tt({map:St.map,normalMap:St.normalMap,normalScale:new _t(.5,.5),roughness:.9,side:Xt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),!1),L(c,new Tt({map:W.map,normalMap:W.normalMap,roughness:.9,side:Xt}),!1),L(l,new Tt({map:X.map,normalMap:X.normalMap,roughness:.92,side:Xt})),L(h,new Tt({vertexColors:!0,roughness:.6,side:Xt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),L(u,new Tt({vertexColors:!0,roughness:.45,metalness:.3,side:Xt})),L(d,new Tt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let st=D.at(D.L/2);return{group:r,deck:D,center:st,supports:{sAN:S,sP1:E,sP2:A,sAS:N},cross:w}}var nh=Fe(()=>{Ne();Wn();_a();Kn()});function Bd(i){let t=new fn({depthWrite:!1,side:Ke,fog:!1,toneMapped:!1,uniforms:{sunDir:{value:new F(0,1,0)},zen:{value:new Qt(.045,.17,.55)},hor:{value:new Qt(.5,.62,.8)},day:{value:1},clouds:{value:i==="low"?0:1}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*0.99999;}",fragmentShader:`uniform vec3 sunDir,zen,hor;uniform float day,clouds;varying vec3 vW;
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
      }`}),e=new Pt(new In(3e4,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="ceu",e}var zd=Fe(()=>{Ne()});function kd(i,t,e){let n=(i.extras||{}).pools;if(!n||!n.length)return null;let s=new he;s.name="clube";let r=new Kt,o=new Kt,a=new Kt,c=new Tt({color:3127e3,roughness:.06,metalness:.1,emissive:674394,emissiveIntensity:.35,transparent:!0,opacity:.92});n.forEach(([u,d,f,m,x],g)=>{f<m&&([f,m]=[m,f],x+=Math.PI/2);let p=Math.cos(x),v=Math.sin(x),y=(U,z,C)=>[u+U*p-z*v,C,d+U*v+z*p],_=f/2,P=m/2,M=1.8,b=1.2,w=-1e9;for(let[U,z]of[[-_-2,-P-2],[_+2,-P-2],[_+2,P+2],[-_-2,P+2],[0,0]]){let C=y(U,z,0);w=Math.max(w,t.at(C[0],C[2]))}w+=.1;{let U=M+3.5,z=[[-_-U,-P-U],[_+U,-P-U],[_+U,P+U],[-_-U,P+U]];for(let C=0;C<4;C++){let[B,V]=z[C],[$,ht]=z[(C+1)%4];o.quad(y(B,V,w-3.5),y($,ht,w-3.5),y($,ht,w+.12),y(B,V,w+.12),[0,0],[1,0],[1,1],[0,1],bt(200,194,180))}}let S=bt(214,206,190),E=bt(240,238,232),A=(U,z,C,B)=>{let V=($,ht,ft,J)=>r.quad(y($,ht,C),y(ft,ht,C),y(ft,J,C),y($,J,C),[$/2,ht/2],[ft/2,ht/2],[ft/2,J/2],[$/2,J/2],B,[0,1,0]);V(-_-z,-P-z,_+z,-P-U),V(-_-z,P+U,_+z,P+z),V(-_-z,-P-U,-_-U,P+U),V(_+U,-P-U,_+z,P+U)};A(0,.45,w+.18,E),A(.45,M+3.5,w+.12,S);let N=bt(120,200,225),D=[[-_,-P],[_,-P],[_,P],[-_,P]];for(let U=0;U<4;U++){let[z,C]=D[U],[B,V]=D[(U+1)%4];o.quad(y(z,C,w-b),y(B,V,w-b),y(B,V,w+.18),y(z,C,w+.18),[0,0],[1,0],[1,1],[0,1],N)}o.quad(y(-_,-P,w-b),y(-_,P,w-b),y(_,P,w-b),y(_,-P,w-b),[0,0],[1,0],[1,1],[0,1],bt(90,180,210),[0,1,0]);let O=new Ai(f,m);O.rotateX(-Math.PI/2);let H=new Pt(O,c);if(H.position.set(u,w-.05,d),H.rotation.y=-x,H.receiveShadow=!0,s.add(H),g===0){let U=_+1.2,z=-P-1.2,C=y(U,z,w),B=new Pt(new He(2.2,5.2,2.2),new Tt({color:14210252,roughness:.8}));B.position.set(C[0],w+2.6,C[2]),B.rotation.y=-x,B.castShadow=!0,s.add(B),[[1994704,1],[15905815,-1]].forEach(([V,$],ht)=>{let ft=[];for(let et=0;et<=24;et++){let dt=et/24,ot=dt*Math.PI*1.3*$,xt=U-1.2-dt*6.5+Math.sin(ot)*3.2*.4,nt=z+.8+dt*4.5*$*.6+(1-Math.cos(ot))*1.2*$,St=y(xt,nt,w+5-dt*4.8);ft.push(new F(St[0],St[1],St[2]))}let J=new Pt(new Ho(new yr(ft),48,.55,10,!1),new Tt({color:V,roughness:.35,side:Xt}));J.castShadow=!0,s.add(J)});for(let V=0;V<5;V++){let $=-_+2+V*(f-4)/4,ht=P+2.6,ft=y($,ht,w+.12),J=new Pt(new be(.04,.04,2.4,6),new Tt({color:15658734}));J.position.set(ft[0],w+1.3,ft[2]),s.add(J);let et=new Pt(new Ps(1.5,.5,8,1,!0),new Tt({color:[14826286,2784737,16106776,16777215,2864755][V],side:Xt,roughness:.7}));et.position.set(ft[0],w+2.55,ft[2]),et.castShadow=!0,s.add(et);let dt=new Pt(new He(1.8,.3,.6),new Tt({color:16053488})),ot=y($+1.2,ht+.6,0);dt.position.set(ot[0],w+.35,ot[2]),dt.rotation.y=-x,s.add(dt)}}});let l=(u,d)=>{let f=new Pt(u.geometry(),d);f.receiveShadow=!0,s.add(f)};l(r,new Tt({vertexColors:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),l(o,new Tt({vertexColors:!0,roughness:.3,side:Xt})),e.add(s);let h=n[0];return{group:s,center:[h[0],t.at(h[0],h[1]),h[1]]}}var Hd=Fe(()=>{Ne();Wn()});function Vd(i){return new Set(((i.viaduct2||{}).ways||[]).map(t=>t.id))}function xa(i,t=0){let e=i.viaduct2;if(!e)return null;let n=[];for(let c of e.ways){let l=c.w/2+2.2+t;for(let h=0;h<c.pts.length-1;h++)n.push([c.pts[h][0],c.pts[h][1],c.pts[h+1][0],c.pts[h+1][1],l])}let s=1e9,r=-1e9,o=1e9,a=-1e9;for(let c of n)s=Math.min(s,c[0],c[2]),r=Math.max(r,c[0],c[2]),o=Math.min(o,c[1],c[3]),a=Math.max(a,c[1],c[3]);return(c,l)=>{if(c<s-8||c>r+8||l<o-8||l>a+8)return!1;for(let[h,u,d,f,m]of n){let x=d-h,g=f-u,p=x*x+g*g||1,v=((c-h)*x+(l-u)*g)/p;v=Math.max(0,Math.min(1,v));let y=h+x*v-c,_=u+g*v-l;if(y*y+_*_<m*m)return!0}return!1}}function Gd(i){let t=i.viaduct2;if(!t)return null;let e=new Map;for(let n of t.ways)e.set(n.id,new Tn(n.pts,n.h));return(n,s,r)=>{let o=e.get(n);if(!o)return null;let a=1e9,c=null;for(let l=0;l<=o.L;l+=1){let h=o.at(l),u=(h[0]-s)**2+(h[2]-r)**2;u<a&&(a=u,c=h[1])}return c}}function Wd(i,t,e,n){let s=i.viaduct2;if(!s)return null;let r=new he;r.name="viaduto_centro";let o=new Kt,a=new Kt,c=new Kt,l=new Kt,h=new Kt,u=new Kt,d=bt(222,218,208),f=bt(196,192,184),m=bt(236,233,226),x=bt(232,226,214),g=(n||[]).filter(O=>{let H=O.at(O.L/2);return!0}),p=(O,H)=>{let U=1e9;for(let z of g)for(let C=0;C<z.L;C+=2){let B=z.at(C),V=Math.hypot(B[0]-O,B[2]-H);V<U&&(U=V)}return U},v=[],y=[];for(let O of s.ways){let H=Math.min(3.6,O.w/2-.4)+1.4;for(let U=0;U<O.pts.length-1;U++)y.push([O.id,O.pts[U][0],O.pts[U][1],O.pts[U+1][0],O.pts[U+1][1],H])}let _=(O,H,U,z=.05)=>{for(let[C,B,V,$,ht,ft]of y){if(C===O)continue;let J=$-B,et=ht-V,dt=J*J+et*et||1,ot=((H-B)*J+(U-V)*et)/dt;ot=Math.max(0,Math.min(1,ot));let vt=B+J*ot-H,xt=V+et*ot-U;if(vt*vt+xt*xt<(ft+z)*(ft+z))return!0}return!1};for(let O of s.ways){let H=new Tn(O.pts,O.h),U=Math.min(3.6,O.w/2-.4),z=.45,C=U+z,B=.62,V=H.L,$=dt=>{let ot=H.at(dt);return ot[1]-t.at(ot[0],ot[2])},ht=dt=>{let ot=H.at(dt);return p(ot[0],ot[2])<8.5},ft=dt=>ot=>ot+dt;xn(a,H,0,V,1,-C,C,ft(.06),[1,1,1],8,[0,1,0]);for(let dt=1;dt<V-1;dt+=7)xn(h,H,dt,Math.min(V,dt+3.5),1,-.07,.07,ft(.09),bt(236,186,40),1,[0,1,0]);for(let dt of[-1,1])xn(h,H,0,V,1,dt*(C-.2),dt*(C-.1),ft(.09),bt(236,232,222),1,[0,1,0]);let J=[],et=null;for(let dt=0;dt<=V;dt+=1){let ot=$(dt)>.3;ot&&!et&&(et=[Math.max(0,dt-1),dt]),ot&&(et[1]=Math.min(V,dt+1)),!ot&&et&&(J.push(et),et=null)}et&&J.push(et);for(let[dt,ot]of J){for(let xt=dt;xt<ot-1e-6;xt+=1){let nt=Math.min(ot,xt+1),St=$e(H,(xt+nt)/2);for(let W of[1,-1]){let X=St.c[0]+St.nx*W*(C+.1),L=St.c[2]+St.nz*W*(C+.1),st=St.c[0]+St.nx*W*(U+.3),G=St.c[2]+St.nz*W*(U+.3);if(_(O.id,X,L))continue;let Y=k=>W*(C+k),Q=[[Y(0),.06],[Y(0),.14],[Y(.18),.32],[Y(.39),.86],[Y(.62-0),.86],[Y(.62),-.25]],at=W>0?Q:Q.slice().reverse();Dn(o,H,xt,nt,1,at,m,2);let q=W*(C+.5),R=bt(208,150,42),T=(k,tt)=>{let rt=[];for(let it=0;it<=8;it++){let mt=it/8*6.283;rt.push([q+Math.cos(mt)*tt,k+Math.sin(mt)*tt])}return rt};Dn(u,H,xt,nt,1,T(1.32,.045),R),Dn(u,H,xt,nt,1,T(1.06,.03),R),Math.round(xt)%2===0&&hn(u,St,0,q,.05,.05,.48,St.c[1]+.86,R),ht((xt+nt)/2)||Gs(l,H,xt,nt,1,W*(C+B),k=>Math.min(t.at(k[0],k[2]),k[1])-.5,k=>k[1]-.25,[1,1,1],3,W<0)}}let vt=null;for(let xt=dt;xt<=ot;xt+=1){let nt=ht(xt);nt&&vt===null&&(vt=xt),(!nt||xt+1>ot)&&vt!==null&&(P(H,vt,xt,C+B),vt=null)}for(let xt=dt+12;xt<ot-6;xt+=32)v.push([H,xt,C+.3])}}function P(O,H,U,z){xn(o,O,H,U,1,z,-z,C=>C-.35,f,2,[0,-1,0]);for(let[C,B]of[[z,!0],[-z,!1]])Gs(o,O,H,U,1,C,V=>V[1]-1.25,V=>V[1]-.25,m,2,B);for(let C of[-2.8,0,2.8])Dn(o,O,H+.3,U-.3,1,[[C-.2,-.35],[C-.2,-1.15],[C-.35,-1.3],[C+.35,-1.3],[C+.2,-1.15],[C+.2,-.35]],f,2);for(let C of[H,U]){let B=$e(O,C),V=Math.min(t.at(B.c[0],B.c[2]),B.c[1]-2)-.6,$=B.c[1]-.35-V;hn(l,B,0,0,.8,2*z+.4,$,V,[1,1,1],3)}if(U-H>18){let C=(H+U)/2,B=$e(O,C),V=B.c[1]-1.3;hn(o,B,0,0,1.2,2*z,.9,V-.9,f,2);for(let $ of[-z*.55,z*.55]){let ht=B.c[0]+B.nx*$,ft=B.c[2]+B.nz*$,J=t.at(ht,ft)-.3,et=new Pt(new be(.45,.45,V-.9-J,18),M);et.position.set(ht,(V-.9+J)/2,ft),et.castShadow=!0,r.add(et)}}}var M=new Tt({color:14473423,roughness:.85});for(let[O,H,U]of v){let z=$e(O,H),C=z.c[1]+.86,B=bt(190,188,182);hn(o,z,0,U,.26,.26,2.5,C,B,2),hn(o,z,0,U,.2,.2,4.2,C+2.5,B,2),hn(o,z,0,U,.14,.14,2.6,C+6.7,B,2),hn(u,z,0,U-1,.08,2,.08,C+9.1,bt(150,152,156)),hn(u,z,0,U-2.1,.5,.24,.14,C+9,bt(235,235,228))}let b=Ci(),w=zs(),S=ks(),E=aa(),A=(O,H,U=!0)=>{let z=new Pt(O.geometry(),H);return z.castShadow=U,z.receiveShadow=!0,r.add(z),z};A(o,new Tt({vertexColors:!0,map:b.map,normalMap:b.normalMap,normalScale:new _t(.4,.4),roughness:.85,side:Xt})),A(a,new Tt({map:w.map,normalMap:w.normalMap,normalScale:new _t(.5,.5),roughness:.9,side:Xt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),!1),A(c,new Tt({map:S.map,normalMap:S.normalMap,roughness:.9,side:Xt}),!1),A(l,new Tt({color:14210252,map:b.map,normalMap:b.normalMap,normalScale:new _t(.5,.5),roughness:.92,side:Xt})),A(h,new Tt({vertexColors:!0,roughness:.6,side:Xt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),A(u,new Tt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let N=s.ways.find(O=>O.lab==="tabuleiro"),D=N.pts[Math.floor(N.pts.length/2)];return{group:r,center:[D[0],s.T,D[1]]}}var Xd=Fe(()=>{Ne();Wn();_a();nh();Kn()});function Qe(i,t,e,n,s,r,o,a,c,l,h,u){let d=(_,P,M)=>[t[0]+n[0]*(s+_)+e[0]*(o+P),M,t[1]+n[1]*(s+_)+e[1]*(o+P)],f=-a/2,m=a/2,x=-c/2,g=c/2,p=h+r,v=h+r+l,y=(_,P,M,b)=>i.quad(_,P,M,b,[0,0],[1,0],[1,1],[0,1],u);y(d(f,g,p),d(m,g,p),d(m,g,v),d(f,g,v)),y(d(m,x,p),d(f,x,p),d(f,x,v),d(m,x,v)),y(d(m,g,p),d(m,x,p),d(m,x,v),d(m,g,v)),y(d(f,x,p),d(f,g,p),d(f,g,v),d(f,x,v)),y(d(f,x,v),d(f,g,v),d(m,g,v),d(m,x,v))}function ya(i,t,e,n,s,r,o,a,c,l){let h=(m,x,g)=>[t[0]+n[0]*(s+m)+e[0]*(r+x),g,t[1]+n[1]*(s+m)+e[1]*(r+x)],u=o/2,d=h(0,0,a+c),f=[h(-u,-u,a),h(u,-u,a),h(u,u,a),h(-u,u,a)];for(let m=0;m<4;m++)i.tri(f[m],f[(m+1)%4],d,[0,0],[1,0],[.5,1],l)}function qd(i,t,e){let n=i.extras.church,s=1e9,r=null;for(let W of i.roads)if(!(W.hw==="footway"||W.hw==="path"))for(let X=0;X<W.p.length-1;X++){let L=W.p[X],st=W.p[X+1],G=st[0]-L[0],Y=st[1]-L[1],Q=G*G+Y*Y,at=((n[0]-L[0])*G+(n[1]-L[1])*Y)/(Q||1);at=Math.max(0,Math.min(1,at));let q=L[0]+G*at,R=L[1]+Y*at,T=Math.hypot(q-n[0],R-n[1]);T<s&&(s=T,r=[q,R])}let o=[r[0]-n[0],r[1]-n[1]],a=Math.hypot(...o);o=[o[0]/a,o[1]/a];let c=[-o[1],o[0]],l=Math.max(0,s-22),h=[n[0]+o[0]*l,n[1]+o[1]*l],u=t.at(h[0],h[1])-.2,d=new he;d.name="igreja";let f=new Kt,m=new Kt,x=new Kt,g=new Kt,p=new Kt,v=bt(246,236,206),y=bt(226,192,118),_=bt(40,34,30),P=bt(160,82,58),M=bt(240,234,214),b=bt(52,46,44),w=12,S=28,E=9.5;Qe(f,h,o,c,0,0,-4,w,S,E,u,v);for(let W=0;W<=7;W++){let X=-4-S/2+W*S/7;Qe(m,h,o,c,w/2,0,X,.5,.6,E,u,y),Qe(m,h,o,c,-w/2,0,X,.5,.6,E,u,y)}Qe(m,h,o,c,0,E-.5,-4,w+.6,S+.6,.6,u,y),Qe(m,h,o,c,0,0,-4,w+.4,S+.4,.8,u,y);for(let W=0;W<7;W++){let X=-4-S/2+(W+.5)*S/7;for(let L of[-1,1]){let st=(G,Y,Q)=>[h[0]+c[0]*(L*(w/2+.03))+o[0]*(X+G),u+Q,h[1]+c[1]*(L*(w/2+.03))+o[1]*(X+G)];x.quad(st(-.8,0,2.5),st(.8,0,2.5),st(.8,0,6.6),st(-.8,0,6.6),[0,0],[1,0],[1,1],[0,1],bt(60,70,95)),x.tri(st(-.8,0,6.6),st(.8,0,6.6),st(0,0,7.8),[0,0],[1,0],[.5,1],bt(60,70,95))}}let A=(W,X,L)=>[h[0]+c[0]*W+o[0]*X,L,h[1]+c[1]*W+o[1]*X],N=E+w/2*.75,D=-4-S/2-.6,O=-4+S/2+.3;g.quad(A(-w/2-.6,D,u+E),A(-w/2-.6,O,u+E),A(0,O,u+N),A(0,D,u+N),[0,0],[S/2.4,0],[S/2.4,4],[0,4],P),g.quad(A(w/2+.6,O,u+E),A(w/2+.6,D,u+E),A(0,D,u+N),A(0,O,u+N),[0,0],[S/2.4,0],[S/2.4,4],[0,4],P),f.tri(A(-w/2,O-.3,u+E),A(w/2,O-.3,u+E),A(0,O-.3,u+N),[0,0],[1,0],[.5,1],v),f.tri(A(w/2,D+.6,u+E),A(-w/2,D+.6,u+E),A(0,D+.6,u+N),[0,0],[1,0],[.5,1],v),Qe(f,h,o,c,0,0,-4-S/2-2.5,8,5,7.5,u,v),ya(g,h,o,c,0,-4-S/2-2.5,8.6,u+7.5,2.5,P);let H=-4+S/2+1.8,U=5.4;Qe(f,h,o,c,0,0,H,U,U,23.6,u,v);for(let[W,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])Qe(m,h,o,c,W*(U/2-.05),0,H+X*(U/2-.05),.7,.7,23.8,u,y);for(let[W,X]of[[10.6,.7],[17.6,.6],[23.4,.7]])Qe(m,h,o,c,0,W,H,U+.7,U+.7,X,u,y),Qe(m,h,o,c,0,W-.25,H,U+.35,U+.35,.25,u,y);let z=(W,X,L=0)=>A(W,H+U/2+.03+L,u+X),C=(W,X,L,st,G,Y,Q=0)=>{let at=st/2,q=[];for(let T=0;T<=8;T++){let tt=T/8*Math.PI/3;q.push([X-at+st*(1-Math.cos(tt))*.5/(1-Math.cos(Math.PI/3))*.5*2*.5+0,L+G+Math.sin(tt)*at*1.15])}W.quad(z(X-at,L,Q),z(X+at,L,Q),z(X+at,L+G,Q),z(X-at,L+G,Q),[0,0],[1,0],[1,1],[0,1],Y);let R=10;for(let T=0;T<R;T++){let k=T/R,tt=(T+1)/R,rt=X-at+at*k,it=X-at+at*tt,mt=L+G+Math.sqrt(Math.max(0,1-(1-k)**2))*at*1.25,ut=L+G+Math.sqrt(Math.max(0,1-(1-tt)**2))*at*1.25;W.quad(z(rt,L+G,Q),z(it,L+G,Q),z(it,ut,Q),z(rt,mt,Q),[0,0],[1,0],[1,1],[0,1],Y),W.quad(z(2*X-it,L+G,Q),z(2*X-rt,L+G,Q),z(2*X-rt,mt,Q),z(2*X-it,ut,Q),[0,0],[1,0],[1,1],[0,1],Y)}};C(m,0,0,3.4,3.6,y,.01),C(x,0,0,2.6,3.3,b,.03);for(let W of[-1,1]){let X=A(W*1.75,H+U/2+.35,0),L=new Pt(new be(.22,.24,3.6,14),new Tt({color:16052714,roughness:.6}));L.position.set(X[0],u+1.8,X[2]),L.castShadow=!0,d.add(L);let st=new Pt(new He(.6,.25,.6),new Tt({color:16052714}));st.position.set(X[0],u+3.7,X[2]),d.add(st)}let B=(W,X,L,st,G,Y)=>{for(let Q=0;Q<18;Q++){let at=Q/18*Math.PI*2,q=(Q+1)/18*Math.PI*2;W.tri(z(X,L,Y),z(X+Math.cos(at)*st,L+Math.sin(at)*st,Y),z(X+Math.cos(q)*st,L+Math.sin(q)*st,Y),[0,0],[1,0],[1,1],G)}};for(let[W,X]of[[0,.55],[0,-.55],[.55,0],[-.55,0]])B(m,W,7.4+X,.78,y,.02);for(let[W,X]of[[0,.5],[0,-.5],[.5,0],[-.5,0]])B(x,W,7.4+X,.55,b,.04);Qe(m,h,o,c,0,4.9,H+U/2+.06,.22,.12,1.4,u,y),Qe(m,h,o,c,0,5.8,H+U/2+.06,.9,.12,.22,u,y),C(m,0,12.6,1.5,2.6,y,.01),C(x,0,12.75,1.1,2.4,b,.03);for(let W of[-1,1]){let X=(L,st)=>A(W*(U/2+.03),H+L,u+st);x.quad(X(-.55,12.75),X(.55,12.75),X(.55,15.2),X(-.55,15.2),[0,0],[1,0],[1,1],[0,1],b),x.tri(X(-.55,15.2),X(.55,15.2),X(0,16.1),[0,0],[1,0],[.5,1],b)}B(m,0,20.6,.85,y,.02),B(x,0,20.6,.6,b,.04),ya(p,h,o,c,0,H,U-.4,u+24.1,10.5,M);for(let[W,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])Qe(p,h,o,c,W*(U/2-.1),24.1,H+X*(U/2-.1),.7,.7,1,u,M),ya(p,h,o,c,W*(U/2-.1),H+X*(U/2-.1),.75,u+25.1,2.4,M);for(let W of[-1,1]){let X=W*4,L=(st,G)=>A(X+st,-4+S/2+.03,u+G);x.quad(L(-.75,2.2),L(.75,2.2),L(.75,6.4),L(-.75,6.4),[0,0],[1,0],[1,1],[0,1],bt(70,52,40)),x.tri(L(-.75,6.4),L(.75,6.4),L(0,7.6),[0,0],[1,0],[.5,1],bt(70,52,40)),Qe(m,h,o,c,W*(w/2-.3),E,-4+S/2-.3,.8,.8,1.2,u,y),ya(m,h,o,c,W*(w/2-.3),-4+S/2-.3,.85,u+E+1.2,1.6,y)}Qe(m,h,o,c,0,34.5,H,.18,.18,2.2,u,bt(240,240,236)),Qe(m,h,o,c,0,35.7,H,1.1,.18,.18,u,bt(240,240,236)),Qe(m,h,o,c,0,0,H+5,9,4,.35,u,bt(200,196,188));let V=new Kt,$=new Kt,ht=bt(240,240,240),ft=10,J=-4-S/2-5,et=H+8,dt=[[-ft,J],[-ft,et],[-1.8,et],[1.8,et],[ft,et],[ft,J]];for(let W=0;W<dt.length-1;W++){if(W===1)continue;let X=dt[W],L=dt[W+1],st=Math.hypot(L[0]-X[0],L[1]-X[1]);for(let q=0;q<=st;q+=.25){let R=q/st,T=X[0]+(L[0]-X[0])*R,k=X[1]+(L[1]-X[1])*R,tt=A(T,k,0),rt=t.at(tt[0],tt[2]);V.quad([tt[0]-.012,rt+.95,tt[2]],[tt[0]+.012,rt+.95,tt[2]],[tt[0]+.012,rt+2.2,tt[2]],[tt[0]-.012,rt+2.2,tt[2]],[0,0],[1,0],[1,1],[0,1],ht)}let G=A(X[0],X[1],0),Y=A(L[0],L[1],0),Q=t.at(G[0],G[2]),at=t.at(Y[0],Y[2]);for(let q of[1,2.15])V.quad([G[0],Q+q,G[2]],[Y[0],at+q,Y[2]],[Y[0],at+q+.06,Y[2]],[G[0],Q+q+.06,G[2]],[0,0],[1,0],[1,1],[0,1],ht);$.quad([G[0],Q-.3,G[2]],[Y[0],at-.3,Y[2]],[Y[0],at+.85,Y[2]],[G[0],Q+.85,G[2]],[0,0],[st/1.5,0],[st/1.5,.8],[0,.8],bt(150,150,148)),V.quad([G[0],Q+.85,G[2]],[Y[0],at+.85,Y[2]],[Y[0],at+.98,Y[2]],[G[0],Q+.98,G[2]],[0,0],[1,0],[1,1],[0,1],bt(245,245,242))}let ot=(W,X,L={})=>{let st=new Pt(W.geometry(),new Tt(Object.assign({vertexColors:!0,map:X,roughness:.85,side:Xt},L)));st.castShadow=!0,st.receiveShadow=!0,d.add(st)};ot(f,jl()),ot(m,null),ot(x,null,{roughness:.3,metalness:.2}),ot(g,pd()),ot(p,jl(),{roughness:.8,metalness:0}),ot(V,null),ot($,void 0?(void 0)():null,{roughness:.6});let vt=new Kt,xt=bt(205,200,190),nt=[A(-ft,J,0),A(ft,J,0),A(ft,et,0),A(-ft,et,0)];for(let W=0;W<10;W++)for(let X=0;X<10;X++){let L=(st,G)=>{let Y=[nt[0][0]+(nt[1][0]-nt[0][0])*st+(nt[3][0]-nt[0][0])*G,0,nt[0][2]+(nt[1][2]-nt[0][2])*st+(nt[3][2]-nt[0][2])*G];return Y[1]=t.at(Y[0],Y[2])+.12,Y};vt.quad(L(W/10,X/10),L(W/10,(X+1)/10),L((W+1)/10,(X+1)/10),L((W+1)/10,X/10),[0,0],[0,1],[1,1],[1,0],xt)}let St=new Pt(vt.geometry(),new Tt({vertexColors:!0,map:dd(),roughness:.9,side:Xt,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-10}));return St.receiveShadow=!0,d.add(St),e.add(d),{group:d,center:h,radius:Math.hypot(ft,(et-J)/2)+2,front:o,frame:{C:h,f:o,r:c,fz0:J,fz1:et,fx:ft}}}function Yd(i,t,e){let n=new he;n.name="praca";let s=i.extras.park;if(!s)return null;let r=s.slice();r.length>2&&r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&r.pop();let o=ci.triangulateShape(r.map(C=>new _t(C[0],C[1])),[]),a=new Kt,c=-1e9;for(let C of r)c=Math.max(c,t.at(C[0],C[1]));let l=(C,B)=>t.at(C,B)+.3,h=0,u=0;for(let C of r)h+=C[0],u+=C[1];h/=r.length,u/=r.length;let d=0,f=[1,0];for(let C=0;C<r.length;C++){let B=r[C],V=r[(C+1)%r.length],$=Math.hypot(V[0]-B[0],V[1]-B[1]);$>d&&(d=$,f=[(V[0]-B[0])/$,(V[1]-B[1])/$])}let m=(C,B)=>{let V=1e9;for(let $=0;$<r.length;$++){let ht=r[$],ft=r[($+1)%r.length],J=ft[0]-ht[0],et=ft[1]-ht[1],dt=J*J+et*et,ot=((C-ht[0])*J+(B-ht[1])*et)/dt;ot=Math.max(0,Math.min(1,ot)),V=Math.min(V,Math.hypot(ht[0]+J*ot-C,ht[1]+et*ot-B))}return V},x=i.extras.fountains||[],g=(C,B)=>{if(m(C,B)<3.2)return!1;let V=C-h,$=B-u,ht=V*f[0]+$*f[1],ft=-V*f[1]+$*f[0];if(Math.abs(ht)<1.8||Math.abs(ft)<1.8)return!1;for(let J of x)if(Math.hypot(J[0]-C,J[1]-B)<8)return!1;return!0},p=new Kt,v=(C,B,V,$)=>{if(Math.max(Math.hypot(C[0]-B[0],C[1]-B[1]),Math.hypot(B[0]-V[0],B[1]-V[1]),Math.hypot(C[0]-V[0],C[1]-V[1]))<.7||$>11){let dt=[C[0],l(C[0],C[1]),C[1]],ot=[B[0],l(B[0],B[1]),B[1]],vt=[V[0],l(V[0],V[1]),V[1]],xt=(C[0]+B[0]+V[0])/3,nt=(C[1]+B[1]+V[1])/3;g(xt,nt)?(dt[1]+=.08,ot[1]+=.08,vt[1]+=.08,p.tri(dt,vt,ot,[C[0]/3,C[1]/3],[V[0]/3,V[1]/3],[B[0]/3,B[1]/3],bt(118,148,74))):a.tri(dt,vt,ot,[C[0]/4,C[1]/4],[V[0]/4,V[1]/4],[B[0]/4,B[1]/4],[1,1,1]);return}let ft=[(C[0]+B[0])/2,(C[1]+B[1])/2],J=[(B[0]+V[0])/2,(B[1]+V[1])/2],et=[(V[0]+C[0])/2,(V[1]+C[1])/2];v(C,ft,et,$+1),v(ft,B,J,$+1),v(et,J,V,$+1),v(ft,J,et,$+1)};for(let[C,B,V]of o)v(r[C],r[B],r[V],0);for(let C=0;C<r.length;C++){let B=r[C],V=r[(C+1)%r.length];a.quad([B[0],t.at(B[0],B[1])-.2,B[1]],[V[0],t.at(V[0],V[1])-.2,V[1]],[V[0],l(V[0],V[1]),V[1]],[B[0],l(B[0],B[1]),B[1]],[0,0],[1,0],[1,.1],[0,.1],bt(170,166,160))}let y=new Pt(a.geometry(),new Tt({vertexColors:!0,map:fd(),roughness:.85,side:Xt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}));y.receiveShadow=!0,n.add(y);{let C=oa(),B=new Pt(p.geometry(),new Tt({vertexColors:!0,map:C.map,roughness:1,side:Xt,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-14}));B.receiveShadow=!0,n.add(B)}let _=new Tt({color:4169672,roughness:.3}),P=new Tt({color:8376544,roughness:.05,metalness:.1,transparent:!0,opacity:.85}),M=new Tt({color:15921906,roughness:.6}),b=new Tt({color:2845872,roughness:.5});for(let[C,B]of i.extras.fountains){let V=l(C,B),$=new Pt(new be(5.2,5.2,.7,40,1,!0),_);$.position.set(C,V+.3,B),n.add($);let ht=new Pt(new Xi(5.2,.22,8,40),new Tt({color:15263976}));ht.rotation.x=Math.PI/2,ht.position.set(C,V+.62,B),n.add(ht);let ft=new Pt(new zo(5.1,40),P);ft.rotation.x=-Math.PI/2,ft.position.set(C,V+.4,B),n.add(ft);let J=new Pt(new Ps(.35,1.6,12),new Tt({color:14743295,transparent:!0,opacity:.6}));J.position.set(C,V+1.2,B),n.add(J);let et=new he,dt=new Xi(5.2,.12,6,24,Math.PI);for(let vt of[-.8,.8]){let xt=new Pt(dt,b);xt.position.set(0,-4.2,vt),xt.scale.set(1,.25,1),et.add(xt);let nt=new Pt(new Xi(5.2,.08,6,24,Math.PI),b);nt.position.set(0,-3.4,vt),nt.scale.set(1,.25,1),et.add(nt)}let ot=new Pt(new Xi(5.2,.18,4,24,Math.PI),M);ot.scale.set(1,.25,8),ot.position.set(0,-4.3,0),et.add(ot),et.position.set(C,V+4.6,B),et.rotation.y=qt(C)*3,n.add(et)}let w=new He(1.8,.45,.5),S=new Tt({color:8018492,roughness:.8}),E=new be(.06,.09,4,6),A=new Tt({color:3355443}),N=new In(.28,10,8),D=new Tt({color:16777215,emissive:16773836,emissiveIntensity:.3}),O=0;for(let C=0;C<r.length;C++){let B=r[C],V=r[(C+1)%r.length],$=Math.hypot(V[0]-B[0],V[1]-B[1]),ht=(V[0]-B[0])/$,ft=(V[1]-B[1])/$,J=0,et=0;for(let dt of r)J+=dt[0],et+=dt[1];J/=r.length,et/=r.length;for(let dt=4;dt<$-2;dt+=9){let ot=B[0]+ht*dt,vt=B[1]+ft*dt,xt=J-ot,nt=et-vt,St=Math.hypot(xt,nt),W=ot+xt/St*2.2,X=vt+nt/St*2.2,L=l(W,X);if(O++%2===0){let st=new Pt(w,S);st.position.set(W,L+.45,X),st.rotation.y=-Math.atan2(ft,ht),st.castShadow=!0,n.add(st)}else{let st=new Pt(E,A);st.position.set(W,L+2,X),n.add(st);let G=new Pt(N,D);G.position.set(W,L+4.1,X),n.add(G)}}}e.add(n);let H=[],U=0,z=0;for(let C of r)U+=C[0],z+=C[1];U/=r.length,z/=r.length;for(let C=0;C<r.length;C+=Math.max(1,Math.floor(r.length/6))){let B=r[C];H.push([B[0]+(U-B[0])*.2,B[1]+(z-B[1])*.2])}return{group:n,palms:H,center:[U,z]}}function Zd(i,t,e){let n=new he;n.name="campos";for(let s of i.extras.pitches){if(s.k==="track")continue;let r=s.p.slice();r[0][0]===r[r.length-1][0]&&r.pop();let o=ha(r),a=o.ux,c=o.uz,l=-c,h=a,u=5212730,d=null;if(s.k==="pitch"){let p=document.createElement("canvas");p.width=512,p.height=320;let v=p.getContext("2d");for(let y=0;y<10;y++)v.fillStyle=y%2?"#4f8f3c":"#579a42",v.fillRect(y*51.2,0,51.2,320);v.strokeStyle="#f4f4f4",v.lineWidth=4,v.strokeRect(12,12,488,296),v.beginPath(),v.moveTo(256,12),v.lineTo(256,308),v.stroke(),v.beginPath(),v.arc(256,160,40,0,7),v.stroke(),v.strokeRect(12,95,60,130),v.strokeRect(440,95,60,130),d=new pn(p),d.colorSpace=Ce,u=16777215}else s.k==="swimming_pool"?u=4175584:s.k==="cemetery"?u=12169892:s.k==="track"&&(u=10507578);let f=new Kt,m=12,x=(p,v)=>{let y=o.cx+a*o.a*p+l*o.b*v,_=o.cz+c*o.a*p+h*o.b*v;return[y,t.at(y,_)+.16,_]};for(let p=0;p<m;p++)for(let v=0;v<m;v++){let y=-1+2*p/m,_=-1+2*(p+1)/m,P=-1+2*v/m,M=-1+2*(v+1)/m;f.quad(x(y,P),x(y,M),x(_,M),x(_,P),[(y+1)/2,(P+1)/2],[(y+1)/2,(M+1)/2],[(_+1)/2,(M+1)/2],[(_+1)/2,(P+1)/2],[1,1,1])}let g=new Pt(f.geometry(),new Tt({color:u,map:d,roughness:s.k==="swimming_pool"?.1:.95,side:Xt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}));if(g.receiveShadow=!0,n.add(g),s.k==="cemetery"){let p=new He(1,.8,2.2),v=Math.floor(o.a*o.b*4/9),y=new Ve(p,new Tt({color:15789800,roughness:.8}),v),_=new ue,P=0;for(let M=-o.a+2;M<o.a-2&&P<v;M+=2.2)for(let b=-o.b+2;b<o.b-2&&P<v;b+=3.4){if(qt(M*7+b)<.15)continue;let w=o.cx+a*M+l*b,S=o.cz+c*M+h*b;_.makeRotationY(-Math.atan2(c,a)),_.setPosition(w,t.at(w,S)+.4,S),y.setMatrixAt(P++,_)}y.count=P,y.castShadow=!0,n.add(y)}}return e.add(n),n}var $d=Fe(()=>{Ne();Wn();da();Kn()});function l1(i){let t=new Gi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function Dr(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new ae(n,3)),i}function Ea(i){i=i.map(a=>a.index?a.toNonIndexed():a);let t=i.reduce((a,c)=>a+c.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count;let o=new pe;return o.setAttribute("position",new ae(e,3)),o.setAttribute("normal",new ae(n,3)),o.setAttribute("color",new ae(s,3)),o}function jn(i,t,e,n){let s=new Is(l1(i),{depth:t-2*e,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:2,steps:1});return s.translate(0,0,-(t-2*e)/2),Dr(s,n)}function Sa(i,t,e,n,s,r){for(let o of t)for(let a of[-s,s]){let c=new be(e,e,n,r?8:14);c.rotateX(Math.PI/2),c.translate(o,e,a),i.push(Dr(c,h1));let l=new be(e*.62,e*.62,n+.02,r?6:10);l.rotateX(Math.PI/2),l.translate(o,e,a),i.push(Dr(l,u1))}}function tn(i,t,e,n,s,r,o,a){let c=new He(t,e,n);c.translate(s,r,o),i.push(Dr(c,a))}function f1(i){let t=[];return t.push(jn([[-1.95,.32],[1.92,.32],[1.98,.55],[1.9,.82],[1.2,.95],[.55,1],[-1.9,1.02],[-1.98,.7]],1.68,.06,Ki)),t.push(jn([[.62,.98],[-.25,1.42],[-1.55,1.43],[-1.86,1]],1.68-.12,.05,ih)),t.push(jn([[.5,1.06],[-.28,1.45],[-1.5,1.46],[-1.5,1.4],[-.3,1.39],[.4,1.04]],1.68-.06,.03,Ki)),Sa(t,[1.25,-1.25],.31,.2,.72,i),tn(t,.04,.12,1.3,1.99,.7,0,sh),tn(t,.04,.14,1.4,-2,.82,0,va),tn(t,.03,.12,.5,-2.01,.55,0,d1),tn(t,.06,.16,1.6,1.98,.42,0,Ws),Ea(t)}function p1(i){let t=[];return t.push(jn([[-2.25,.33],[2.15,.33],[2.22,.56],[2.12,.8],[1.2,.92],[-1.6,.98],[-2.22,.95],[-2.28,.62]],1.74,.06,Ki)),t.push(jn([[.95,.93],[.15,1.38],[-.95,1.39],[-1.62,.97]],1.74-.12,.05,ih)),t.push(jn([[.82,1],[.12,1.41],[-.92,1.42],[-.92,1.36],[.1,1.35],[.74,.98]],1.74-.06,.03,Ki)),Sa(t,[1.38,-1.4],.31,.2,.75,i),tn(t,.04,.12,1.3,2.23,.7,0,sh),tn(t,.04,.12,1.5,-2.29,.84,0,va),tn(t,.06,.16,1.6,2.2,.42,0,Ws),Ea(t)}function m1(i){let t=[];return t.push(jn([[-2.5,.42],[2.4,.42],[2.46,.7],[2.35,1],[1.4,1.08],[-2.5,1.08]],1.8,.06,Ki)),t.push(jn([[1.3,1.06],[.7,1.62],[-.6,1.64],[-.75,1.06]],1.8-.1,.05,ih)),t.push(jn([[1.18,1.1],[.66,1.66],[-.58,1.67],[-.58,1.6],[.62,1.59],[1.1,1.08]],1.8-.04,.03,Ki)),tn(t,1.65,.08,1.6,-1.65,1,0,Ws),Sa(t,[1.55,-1.6],.38,.24,.78,i),tn(t,.04,.14,1.4,2.47,.85,0,sh),tn(t,.04,.2,.2,-2.51,.9,.72,va),tn(t,.04,.2,.2,-2.51,.9,-.72,va),tn(t,.08,.2,1.7,2.44,.52,0,Ws),Ea(t)}function g1(i){let t=[];Sa(t,[.68,-.68],.3,.1,0,i),t.push(jn([[-.75,.55],[.55,.62],[.7,.95],[.3,.95],[-.1,.82],[-.8,.85]],.32,.04,Ki)),tn(t,.5,.12,.3,-.35,.92,0,Ws),tn(t,.06,.06,.7,.62,1.1,0,Ws),tn(t,.3,.55,.38,-.25,1.25,0,[.25,.3,.4]);let e=new In(.15,i?6:10,i?5:8);return e.translate(-.18,1.68,0),t.push(Dr(e,[.9,.9,.9])),tn(t,.4,.12,.12,0,1.15,.18,[.25,.3,.4]),tn(t,.4,.12,.12,0,1.15,-.18,[.25,.3,.4]),Ea(t)}var Ki,ih,h1,u1,sh,va,Ws,d1,Lr,Ma,Jd=Fe(()=>{Ne();Wn();Ki=[1,1,1],ih=[.05,.06,.07],h1=[.035,.035,.035],u1=[.55,.55,.56],sh=[2.2,2.2,2],va=[.5,.03,.03],Ws=[.08,.08,.08],d1=[2,2,2];Lr=[[.92,.92,.92],[.92,.92,.92],[.92,.92,.92],[.62,.63,.66],[.62,.63,.66],[.04,.04,.05],[.04,.04,.05],[.32,.33,.35],[.5,.05,.04],[.06,.14,.36],[.78,.76,.7],[.2,.24,.2]],Ma=class{constructor(t,e,n,s,r,o=.13,a="high"){this.H=e,this.hf=s;let c=a==="low"||a==="medium";this.roads=t.roads.filter(v=>!["footway","path","track","cycleway","steps"].includes(v.hw)&&v.s!=="dirt"&&v.p.length>1);let l=v=>Math.round(v[0]*2)+","+Math.round(v[1]*2);this.key=l,this.idx=new Map,this.roads.forEach((v,y)=>{v.len=[];for(let _=0;_<v.p.length-1;_++)v.len.push(Math.hypot(v.p[_+1][0]-v.p[_][0],v.p[_+1][1]-v.p[_][1]));v.p.forEach((_,P)=>{let M=l(_);this.idx.has(M)||this.idx.set(M,[]),this.idx.get(M).push([y,P])})});let h=this.roads.map(v=>(v.s==="asphalt"?3:1)*v.len.reduce((y,_)=>y+_,0)),u=h.reduce((v,y)=>v+y,0);this.geos=[f1(c),p1(c),m1(c),g1(c)];let d=[.42,.2,.16,.22],f=v=>{let y=0;for(let _=0;_<4;_++)if(y+=d[_],v<y)return _;return 0};this.cars=[];for(let v=0;v<r;v++){let y=qt(v*3.7+1)*u,_=0;for(;y>h[_]&&_<h.length-1;)y-=h[_],_++;let P=this.roads[_],M=Math.floor(qt(v*9.1)*(P.p.length-1)),b=P.o||qt(v*1.3)<.5?1:-1;this.cars.push({ri:_,i:b>0?M:M+1,t:qt(v*5.5),dir:b,v:0,type:f(qt(v*4.4)),col:Lr[Math.floor(qt(v*2.2)*Lr.length)]})}let m=new Tt({vertexColors:!0,roughness:.3,metalness:.45});this.mat=m,this.mesh=new he,this.mesh.name="carros",n.add(this.mesh),this.meshes=this.geos.map((v,y)=>{let _=this.cars.filter(M=>M.type===y).length,P=new Ve(v,m,Math.max(1,_));return P.count=_,P.castShadow=!0,P.receiveShadow=!0,this.mesh.add(P),P});let x=new Qt,g=[0,0,0,0];this.cars.forEach(v=>{v.slot=g[v.type]++,x.setRGB(...v.type===3?[.6+.4*qt(v.slot),.1,.1]:v.col),this.meshes[v.type].setColorAt(v.slot,x)}),this.M=new ue,this.Q=new ze,this.P=new F,this.S=new F(1,1,1),this.Y=new F(0,1,0),this.E=new wn,this.tick(.01);let p=[[],[],[]];this.roads.forEach((v,y)=>{if(!(!["residential","tertiary","unclassified"].includes(v.hw)||v.b||v.id===1314627854||v.id===1314627855))for(let _=0;_<v.p.length-1;_++){let P=v.len[_],M=v.p[_],b=v.p[_+1],w=(b[0]-M[0])/P,S=(b[1]-M[1])/P;for(let E=8;E<P-8;E+=6)for(let A of[-1,1]){if(qt(y*31+_*7+E*1.7+A)>o)continue;let N=A*(v.w/2-1.1),D=M[0]+w*E-S*N,O=M[1]+S*E+w*N;if(globalThis.__noPark&&globalThis.__noPark(D,O))continue;let H=qt(y+E*.3+A);p[H<.55?0:H<.8?1:2].push([D,O,Math.atan2(S,w)+(qt(E+y)<.5?0:Math.PI),qt(y+E)])}}}),this.parked=new he,p.forEach((v,y)=>{if(!v.length)return;let _=new Ve(this.geos[y],m,v.length);v.forEach(([P,M,b,w],S)=>{this.Q.setFromAxisAngle(this.Y,-b),this.P.set(P,e.at(P,M)+.1,M),this.M.compose(this.P,this.Q,this.S),_.setMatrixAt(S,this.M),x.setRGB(...Lr[Math.floor(w*Lr.length)%Lr.length]),_.setColorAt(S,x)}),_.castShadow=!0,_.receiveShadow=!0,this.parked.add(_)}),n.add(this.parked)}speed(t,e){return(e&&e.type===3?1.1:1)*(t.hw==="trunk"?15:t.hw==="tertiary"||t.hw==="trunk_link"?10:7)}tick(t){let e=this.M;this.cars.forEach((n,s)=>{let r=this.roads[n.ri],o=this.speed(r,n)*(.8+.4*qt(s));n.v+=(o-n.v)*Math.min(1,t*.8);let a=n.v*t,c=0;for(;a>0&&c++<20;){let w=n.i,S=n.i+n.dir;if(S<0||S>=r.p.length){this.junction(n),r=this.roads[n.ri];continue}let E=r.len[Math.min(w,S)],A=(1-n.t)*E;a<A?(n.t+=a/E,a=0):(a-=A,n.i=S,n.t=0,this.junction(n,!0),r=this.roads[n.ri])}r=this.roads[n.ri];let l=n.i,h=n.i+n.dir;(h<0||h>=r.p.length)&&(h=l,l=l-n.dir);let u=r.p[l],d=r.p[h],f=u[0]+(d[0]-u[0])*n.t,m=u[1]+(d[1]-u[1])*n.t,x=d[0]-u[0],g=d[1]-u[1],p=Math.hypot(x,g)||1,v=r.o?0:Math.min(1.8,r.w/4)*(n.type===3?1.25:1),y=f-g/p*v,_=m+x/p*v,P=this.hf(r,y,_),M=this.hf(r,y+x/p*2,_+g/p*2),b=this.hf(r,y-x/p*2,_-g/p*2);this.E.set(0,-Math.atan2(g,x),Math.atan2(M-b,4),"YXZ"),this.Q.setFromEuler(this.E),this.P.set(y,P,_),e.compose(this.P,this.Q,this.S),this.meshes[n.type].setMatrixAt(n.slot,e)}),this.meshes.forEach(n=>n.instanceMatrix.needsUpdate=!0)}junction(t,e){let n=this.roads[t.ri],s=n.p[t.i],r=this.idx.get(this.key(s))||[],o=[];for(let[c,l]of r){let h=this.roads[c];l+1<h.p.length&&!(c===t.ri&&t.dir<0&&l===t.i)&&o.push([c,l,1]),l-1>=0&&!h.o&&!(c===t.ri&&t.dir>0&&l===t.i)&&o.push([c,l,-1])}if(e){let c=t.i+t.dir;if(c>=0&&c<n.p.length&&(o.length<=1||Math.random()<.7))return}if(!o.length){t.dir=n.o?1:-t.dir,n.o&&(t.i=0);return}let a=o[Math.floor(Math.random()*o.length)];t.ri=a[0],t.i=a[1],t.dir=a[2],t.t=0}}});var ba,Kd=Fe(()=>{Ne();ba=class{constructor(t){this.root=t,this.items=[],this.v=new F}add(t,e,n="lbl",s=4e3,r=null){let o=document.createElement("div");o.className=n,o.textContent=t,this.root.appendChild(o);let a={el:o,pos:e.clone?e:new F(...e),maxDist:s,visible:!0,group:n};return r&&(o.style.pointerEvents="auto",o.style.cursor="pointer",o.addEventListener("click",c=>{c.stopPropagation(),r()})),this.items.push(a),a}remove(t){t.el.remove(),this.items=this.items.filter(e=>e!==t)}_set(t,e,n,s){t._d!==e&&(t.el.style.display=e,t._d=e),e!=="none"&&(t._t!==n&&(t.el.style.transform=n,t._t=n),t._o!==s&&(t.el.style.opacity=s,t._o=s))}update(t,e,n){let s=[],r=[];for(let o of this.items){if(!o.visible){this._set(o,"none");continue}this.v.copy(o.pos);let a=this.v.distanceTo(t.position);if(this.v.project(t),this.v.z>1||a>o.maxDist||Math.abs(this.v.x)>1.1||Math.abs(this.v.y)>1.1){this._set(o,"none");continue}r.push({it:o,d:a,x:(this.v.x*.5+.5)*e,y:(-this.v.y*.5+.5)*n})}r.sort((o,a)=>(a.it.group==="lbl mark")-(o.it.group==="lbl mark")||o.d-a.d);for(let o of r){let a=(o.it.el.textContent.length*6.6+18)/2,l=[o.x-a,o.y-22,o.x+a,o.y];if(o.it.group!=="lbl mark"&&s.some(u=>l[0]<u[2]&&l[2]>u[0]&&l[1]<u[3]&&l[3]>u[1])){this._set(o.it,"none");continue}s.push(l);let h=o.it;this._set(h,"block",`translate(-50%,-100%) translate(${Math.round(o.x)}px,${Math.round(o.y)}px)`,String(Math.round(Math.max(.35,Math.min(1,1.6-o.d/h.maxDist))*20)/20))}}setGroupVisible(t,e){for(let n of this.items)n.group===t&&(n.visible=e)}}});var jd,_1,wa,Ta,Qd=Fe(()=>{Ne();jd="aimores3d_marcadores_v1",_1=[["Verde","#22c55e"],["Roxo","#a855f7"],["Azul","#3b82f6"],["Vermelho","#ef4444"],["Laranja","#f97316"],["Amarelo","#eab308"],["Rosa","#ec4899"],["Ciano","#06b6d4"],["Branco","#f8fafc"],["Preto","#111827"]],wa=()=>Math.random().toString(36).slice(2,10),Ta=class{constructor(t){Object.assign(this,t),this.group=new he,this.group.name="marcadores",this.scene.add(this.group),this.state=this.load(),this.mode="nav",this.selCat=this.state.cats[0]?.id||null,this.objs=new Map,this.ray=new Us,this.mouse=new _t,this.headGeo=new In(1,20,14),this.stickGeo=new be(.09,.09,1,8),this.stickGeo.translate(0,.5,0),this.ringGeo=new ko(.8,1.2,24),this.ringGeo.rotateX(-Math.PI/2),this.state.marks.forEach(e=>this.makeObj(e)),this.bindCanvas(),this.render()}load(){try{let t=JSON.parse(localStorage.getItem(jd));if(t&&t.cats&&t.marks)return t}catch{}return{cats:[{id:wa(),name:"Ponto cego",color:"#ef4444",limit:null},{id:wa(),name:"Ponto de interesse",color:"#3b82f6",limit:null}],marks:[]}}save(){localStorage.setItem(jd,JSON.stringify(this.state))}cat(t){return this.state.cats.find(e=>e.id===t)}count(t){return this.state.marks.filter(e=>e.cat===t).length}makeObj(t){let e=this.cat(t.cat);if(!e)return;let n=new Qt(e.color),s=new he,r=new Tt({color:n,emissive:n,emissiveIntensity:.35,roughness:.4}),o=new Pt(this.headGeo,r);o.position.y=7,o.userData.markId=t.id;let a=new Pt(this.stickGeo,new Tt({color:16777215,roughness:.5}));a.scale.y=6.2;let c=new Pt(this.ringGeo,new As({color:n,transparent:!0,opacity:.85,depthWrite:!1}));c.position.y=.3,s.add(o,a,c),s.position.set(t.x,t.y,t.z),s.userData.markId=t.id,o.castShadow=!0,this.group.add(s);let l=this.labels.add(t.name,new F(t.x,t.y+9,t.z),"lbl mark",6e3,()=>this.select(t.id));l.el.style.borderColor=e.color,this.objs.set(t.id,{g:s,head:o,lbl:l,mat:r,ring:c})}removeObj(t){let e=this.objs.get(t);e&&(this.group.remove(e.g),this.labels.remove(e.lbl),this.objs.delete(t))}refreshObj(t){this.removeObj(t.id),this.makeObj(t)}tickScale(t){for(let[e,n]of this.objs){let s=t.position.distanceTo(n.g.position),r=Math.max(.5,Math.min(8,s/160));n.g.scale.setScalar(r),n.lbl.pos.set(n.g.position.x,n.g.position.y+8.3*r,n.g.position.z)}}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect();return this.mouse.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.mouse,this.camera),this.ray.intersectObjects(e,!0)[0]}bindCanvas(){let t=this.renderer.domElement,e=null,n=null;t.addEventListener("pointerdown",s=>{if(e={x:s.clientX,y:s.clientY},this.mode==="move"){let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&(n=r.object.userData.markId,this.controls.enabled=!1,t.setPointerCapture(s.pointerId))}}),t.addEventListener("pointermove",s=>{if(!n)return;let r=this.pick(s,this.pickTargets());if(r){let o=this.state.marks.find(a=>a.id===n);o.x=r.point.x,o.y=r.point.y,o.z=r.point.z,this.objs.get(n).g.position.copy(r.point)}}),t.addEventListener("pointerup",s=>{if(n){n=null,this.controls.enabled=!0,this.save(),this.render();return}if(!(!e||Math.hypot(s.clientX-e.x,s.clientY-e.y)>6))if(this.mode==="place"){let r=this.cat(this.selCat);if(!r){this.toast("Escolha uma categoria primeiro");return}if(r.limit&&this.count(r.id)>=r.limit){this.toast(`Limite de ${r.limit} marcador(es) para "${r.name}" atingido`);return}let o=this.pick(s,this.pickTargets());if(!o)return;let a=this.count(r.id)+1,c={id:wa(),cat:r.id,name:`${r.name} ${a}`,x:+o.point.x.toFixed(2),y:+o.point.y.toFixed(2),z:+o.point.z.toFixed(2),note:"",ts:Date.now()};this.state.marks.push(c),this.makeObj(c),this.save(),this.render(),this.selMark=c.id,this.render()}else{let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&this.select(r.object.userData.markId)}})}select(t){this.selMark=t,this.render();let e=this.objs.get(t);e&&(e.mat.emissiveIntensity=1,setTimeout(()=>e.mat.emissiveIntensity=.35,600))}setMode(t){this.mode=t,this.onMode&&setTimeout(()=>this.onMode(t),0),this.renderer.domElement.style.cursor=t==="place"?"crosshair":t==="move"?"grab":"",this.render()}toast(t){let e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>e.classList.remove("show"),2600)}latlon(t){let e=this.H;return[(e.LAT0-t.z/e.KZ).toFixed(6),(e.LON0+t.x/e.KX).toFixed(6)]}render(){let t=this.panel,e=this.state,n=c=>String(c).replace(/[&<>"]/g,l=>"&#"+l.charCodeAt(0)+";"),s=`<div class="modes"><button data-mode="nav" class="${this.mode==="nav"?"on":""}">\u{1F590} Navegar</button><button data-mode="place" class="${this.mode==="place"?"on":""}">\u{1F4CD} Colocar</button><button data-mode="move" class="${this.mode==="move"?"on":""}">\u2725 Mover</button></div>`;s+=`<div class="hint">${this.mode==="place"?innerWidth<=760?"Escolha a categoria e toque no mapa para colocar.":"Escolha a categoria e clique no mapa para colocar.":this.mode==="move"?"Arraste a bolinha do marcador para mudar de lugar.":"Clique num marcador para ver/editar."}</div>`,s+='<h3>Categorias</h3><div class="cats">';for(let c of e.cats){let l=this.count(c.id);s+=`<div class="cat ${c.id===this.selCat?"sel":""}" data-cat="${c.id}"><span class="sw" style="background:${c.color}"></span><span class="nm">${n(c.name)}</span><span class="ct">${l}${c.limit?"/"+c.limit:""}</span><button class="ic" data-editcat="${c.id}" title="Editar">\u270E</button><button class="ic" data-delcat="${c.id}" title="Apagar">\u{1F5D1}</button></div>`,this.editCat===c.id&&(s+=`<div class="form"><input id="ec_name" value="${n(c.name)}" placeholder="Nome"><input id="ec_color" type="color" value="${c.color}"><input id="ec_limit" type="number" min="1" value="${c.limit||""}" placeholder="Qtd. m\xE1x (opcional)"><button id="ec_ok">Salvar</button></div>`)}s+=`</div><details ${this.openNew?"open":""} id="newcat"><summary>+ Nova categoria</summary><div class="form"><div class="presets">${_1.map(([c,l])=>`<span class="sw pick" title="${c}" data-color="${l}" style="background:${l}"></span>`).join("")}</div>
      <input id="nc_name" placeholder="Nome (ex.: ferreiro)"><input id="nc_color" type="color" value="#22c55e"><input id="nc_limit" type="number" min="1" placeholder="Quantos? (vazio = sem limite)"><button id="nc_ok">Criar categoria</button></div></details>`,s+=`<h3>Marcadores (${e.marks.length})</h3><div class="marks">`;for(let c of e.cats){let l=e.marks.filter(h=>h.cat===c.id);if(l.length){s+=`<div class="mgrp"><span class="sw" style="background:${c.color}"></span>${n(c.name)}</div>`;for(let h of l)if(s+=`<div class="mk ${h.id===this.selMark?"sel":""}" data-mark="${h.id}"><span class="nm">${n(h.name)}</span><button class="ic" data-fly="${h.id}" title="Ir at\xE9">\u{1F441}</button><button class="ic" data-delmark="${h.id}" title="Apagar">\u{1F5D1}</button></div>`,h.id===this.selMark){let[u,d]=this.latlon(h);s+=`<div class="form"><input id="em_name" value="${n(h.name)}"><select id="em_cat">${e.cats.map(f=>`<option value="${f.id}" ${f.id===h.cat?"selected":""}>${n(f.name)}</option>`).join("")}</select><textarea id="em_note" placeholder="Observa\xE7\xE3o">${n(h.note||"")}</textarea><div class="coord">${u}, ${d}</div><button id="em_ok">Salvar</button></div>`}}}s+='</div><div class="io"><button id="exp">\u2B07 Exportar</button><label class="btn">\u2B06 Importar<input id="imp" type="file" accept=".json,application/json" hidden></label><button id="clr">Limpar</button></div>',t.innerHTML=s;let r=document.getElementById("mkstatus");if(r){let c=this.cat(this.selCat);r.textContent=this.mode==="place"&&c?`Colocando: ${c.name}`:this.mode==="move"?"Modo mover":`${e.marks.length} marcador(es)`}t.querySelectorAll("[data-mode]").forEach(c=>c.onclick=()=>this.setMode(c.dataset.mode)),t.querySelectorAll(".cat").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selCat=c.dataset.cat,this.mode==="nav"?this.setMode("place"):this.render())}),t.querySelectorAll("[data-editcat]").forEach(c=>c.onclick=()=>{this.editCat=this.editCat===c.dataset.editcat?null:c.dataset.editcat,this.render()}),t.querySelectorAll("[data-delcat]").forEach(c=>c.onclick=()=>{let l=this.cat(c.dataset.delcat),h=this.count(l.id);confirm(`Apagar a categoria "${l.name}"${h?` e seus ${h} marcador(es)`:""}?`)&&(e.marks.filter(u=>u.cat===l.id).forEach(u=>this.removeObj(u.id)),e.marks=e.marks.filter(u=>u.cat!==l.id),e.cats=e.cats.filter(u=>u!==l),this.selCat===l.id&&(this.selCat=e.cats[0]?.id),this.save(),this.render())});let o=t.querySelector("#ec_ok");o&&(o.onclick=()=>{let c=this.cat(this.editCat);c.name=t.querySelector("#ec_name").value.trim()||c.name,c.color=t.querySelector("#ec_color").value;let l=parseInt(t.querySelector("#ec_limit").value);c.limit=l>0?l:null,this.editCat=null,e.marks.filter(h=>h.cat===c.id).forEach(h=>this.refreshObj(h)),this.save(),this.render()}),t.querySelectorAll(".pick").forEach(c=>c.onclick=()=>{t.querySelector("#nc_color").value=c.dataset.color;let l=t.querySelector("#nc_name");l.value||(l.placeholder=`Nome (cor ${c.title.toLowerCase()})`)}),t.querySelector("#newcat").ontoggle=c=>{this.openNew=c.target.open},t.querySelector("#nc_ok").onclick=()=>{let c=t.querySelector("#nc_name").value.trim();if(!c){this.toast("D\xEA um nome para a categoria");return}let l=parseInt(t.querySelector("#nc_limit").value),h={id:wa(),name:c,color:t.querySelector("#nc_color").value,limit:l>0?l:null};e.cats.push(h),this.selCat=h.id,this.openNew=!1,this.save(),this.setMode("place"),this.toast(`Categoria "${c}" criada. Clique no mapa para colocar.`)},t.querySelectorAll(".mk").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selMark=this.selMark===c.dataset.mark?null:c.dataset.mark,this.render())}),t.querySelectorAll("[data-fly]").forEach(c=>c.onclick=()=>{let l=e.marks.find(h=>h.id===c.dataset.fly);this.flyTo(new F(l.x,l.y,l.z),120),this.select(l.id)}),t.querySelectorAll("[data-delmark]").forEach(c=>c.onclick=()=>{let l=c.dataset.delmark;this.removeObj(l),e.marks=e.marks.filter(h=>h.id!==l),this.save(),this.render()});let a=t.querySelector("#em_ok");a&&(a.onclick=()=>{let c=e.marks.find(l=>l.id===this.selMark);c.name=t.querySelector("#em_name").value.trim()||c.name,c.cat=t.querySelector("#em_cat").value,c.note=t.querySelector("#em_note").value,this.refreshObj(c),this.save(),this.render(),this.toast("Marcador salvo")}),t.querySelector("#exp").onclick=()=>{let c=JSON.parse(JSON.stringify(e));c.marks.forEach(u=>{let[d,f]=this.latlon(u);u.lat=+d,u.lon=+f});let l=new Blob([JSON.stringify({app:"aimores-3d",version:1,exported:new Date().toISOString(),...c},null,2)],{type:"application/json"}),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download="marcadores-aimores.json",h.click()},t.querySelector("#imp").onchange=c=>{let l=c.target.files[0];l&&l.text().then(h=>{try{let u=JSON.parse(h);if(!u.cats||!u.marks)throw 0;confirm("Substituir os marcadores atuais? (Cancelar = juntar com os atuais)")&&(e.marks.forEach(x=>this.removeObj(x.id)),e.cats=[],e.marks=[]);let f=new Set(e.cats.map(x=>x.id));u.cats.forEach(x=>{f.has(x.id)||e.cats.push({id:x.id,name:x.name,color:x.color,limit:x.limit||null})});let m=new Set(e.marks.map(x=>x.id));u.marks.forEach(x=>{if(m.has(x.id))return;let g={id:x.id,cat:x.cat,name:x.name,x:x.x,y:x.y,z:x.z,note:x.note||"",ts:x.ts||Date.now()};e.marks.push(g),this.makeObj(g)}),this.selCat=e.cats[0]?.id,this.save(),this.render(),this.toast("Importado!")}catch{this.toast("Arquivo inv\xE1lido")}})},t.querySelector("#clr").onclick=()=>{confirm("Apagar TODOS os marcadores? (as categorias ficam)")&&(e.marks.forEach(c=>this.removeObj(c.id)),e.marks=[],this.save(),this.render())}}}});function Xs(i,t,e,n,s,r,o,a,c,l){let h=-r,u=s,d=(v,y,_)=>[t+s*v+h*y,_,e+r*v+u*y],f=o/2,m=a/2,x=[d(-f,-m,n),d(f,-m,n),d(f,m,n),d(-f,m,n),d(-f,-m,n+c),d(f,-m,n+c),d(f,m,n+c),d(-f,m,n+c)],g=[0,0],p=[[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]];for(let v of p)i.quad(x[v[0]],x[v[1]],x[v[2]],x[v[3]],[0,0],[1,0],[1,1],[0,1],l)}function tf(i,t,e){let n=i.extras.station;if(!n)return null;let s=n.slice(0,4),r=[s[1][0]-s[0][0],s[1][1]-s[0][1]],o=[s[2][0]-s[1][0],s[2][1]-s[1][1]],a=Math.hypot(...r),c=Math.hypot(...o),[l,h,u]=c>a?[o,c,a]:[r,a,c],d=l[0]/h,f=l[1]/h,m=(s[0][0]+s[1][0]+s[2][0]+s[3][0])/4,x=(s[0][1]+s[1][1]+s[2][1]+s[3][1])/4,g=-f,p=d,v=1e9;for(let B=-h/2;B<=h/2;B+=6)for(let V of[-u/2,0,u/2])v=Math.min(v,t.at(m+d*B+g*V,x+f*B+p*V));let y=new he;y.name="estacao";let _=new Kt,P=new Kt,M=new Kt,b=v+.95;Xs(_,m,x,v-.6,d,f,h,u*.82,b-v+.6,bt(200,196,188)),Xs(_,m+g*u*.41,x+p*u*.41,b-.02,d,f,h,.4,.04,bt(236,200,40));let w=bt(226,178,30),S=4.4,E=u*.62;for(let B=-h/2+3;B<=h/2-3;B+=8){let V=m+d*B,$=x+f*B;Xs(P,V,$,b,d,f,.3,.3,S,w),Xs(P,V,$,b+S-.35,g,p,E,.22,.35,w)}for(let B of[-1,1])Xs(P,m+g*B*E*.45,x+p*B*E*.45,b+S-.25,d,f,h-4,.18,.25,w);let A=(B,V,$)=>[m+d*B+g*V,$,x+f*B+p*V],N=h/2-1.5,D=E/2+.6,O=b+S+.55,H=b+S+.1;for(let B of[-1,1]){let V=[A(-N,0,O),A(N,0,O),A(N,B*D,H),A(-N,B*D,H)];B>0?M.quad(V[0],V[3],V[2],V[1],[0,0],[0,1],[h/2,1],[h/2,0],bt(150,154,158)):M.quad(V[0],V[1],V[2],V[3],[0,0],[h/2,0],[h/2,1],[0,1],bt(150,154,158))}for(let B of[-1,1])Xs(P,m+g*B*D,x+p*B*D,H-.25,d,f,2*N,.08,.35,bt(170,172,170));let U=(B,V)=>{let $=new Pt(B.geometry(),V);$.castShadow=!0,$.receiveShadow=!0,y.add($)},z=Ci();U(_,new Tt({vertexColors:!0,map:z.map,roughness:.9})),U(P,new Tt({vertexColors:!0,roughness:.5,metalness:.3}));let C=md();return C&&(C.wrapS=C.wrapT=bn),U(M,new Tt({vertexColors:!0,roughness:.45,metalness:.4,side:Xt,map:C||null})),e.add(y),y}function ef(i,t,e){let n=i.extras.lote;if(!n)return null;let s=new Kt,r=n.w/2;for(let c of n.streets)for(let l=0;l<c.length-1;l++){let[h,u]=c[l],[d,f]=c[l+1],m=Math.hypot(d-h,f-u),x=(d-h)/m,g=(f-u)/m,p=-g,v=x;for(let y=0;y<m;y+=3){let _=Math.min(m,y+3),P=[[y,-r],[_,-r],[_,r],[y,r]].map(([b,w])=>{let S=h+x*b+p*w,E=u+g*b+v*w;return[S,t.at(S,E)+.07,E]}),M=P.map(b=>[b[0]/6,b[2]/6]);s.quad(P[0],P[3],P[2],P[1],M[0],M[3],M[2],M[1],bt(255,236,214),x1)}}let o=ra(),a=new Pt(s.geometry(),new Tt({vertexColors:!0,map:o.map,normalMap:o.normalMap,roughness:1,side:Xt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return a.receiveShadow=!0,a.name="loteamento",e.add(a),a}var x1,nf=Fe(()=>{Ne();Wn();Kn();da();x1=[0,1,0]});function rf(i,t){let e=i.geometry,n=e.index?e.toNonIndexed():e,s=n.attributes.position,r=s.count/3,o=new Map;for(let l=0;l<r;l++){let h=(s.getX(l*3)+s.getX(l*3+1)+s.getX(l*3+2))/3,u=(s.getZ(l*3)+s.getZ(l*3+1)+s.getZ(l*3+2))/3,d=sf(h,u,t),f=o.get(d);f||o.set(d,f=[]),f.push(l)}let a=new he;a.name=i.name;let c=Object.keys(n.attributes);for(let[l,h]of o){let u=new pe;for(let f of c){let m=n.attributes[f],x=m.itemSize,g=new m.array.constructor(h.length*3*x),p=0;for(let v of h)for(let y=0;y<3;y++){let _=(v*3+y)*x;for(let P=0;P<x;P++)g[p++]=m.array[_+P]}u.setAttribute(f,new ae(g,x,m.normalized))}u.computeBoundingBox(),u.computeBoundingSphere();let d=new Pt(u,i.material);d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,d.renderOrder=i.renderOrder,d.userData.box=u.boundingBox.clone().applyMatrix4(i.matrixWorld),d.name=i.name,a.add(d)}return a}function oh(i,t,e,n){let s=i.count,r=new ue,o=new Map;for(let h=0;h<s;h++){i.getMatrixAt(h,r),rh.setFromMatrixPosition(r);let u=sf(rh.x,rh.z,t),d=o.get(u);d||o.set(u,d=[]),d.push(h)}let a=[],c=new Qt,l=(h,u,d)=>{let f=new Ve(h,u,d.length);return d.forEach((m,x)=>{i.getMatrixAt(m,r),f.setMatrixAt(x,r),i.instanceColor&&(i.getColorAt(m,c),f.setColorAt(x,c))}),f.castShadow=i.castShadow,f.receiveShadow=i.receiveShadow,f.customDepthMaterial=i.customDepthMaterial,f.name=i.name,f.computeBoundingSphere(),f.computeBoundingBox(),f.userData.box=f.boundingBox.clone(),f};for(let[h,u]of o){let d=l(i.geometry,i.material,u),f=e?l(e,n,u):null;f&&(f.castShadow=!1,f.userData.box=d.userData.box),a.push({near:d,far:f})}return a}function of(i,t,e,n=96,s=[450,1100]){let r=i.geometry,o=t.GW,a=t.GH,c=r.attributes.position.array,l=[];for(let _=0;_<a-1;_+=n)for(let P=0;P<o-1;P+=n){let M=[];for(let b of[1,2,4]){let w=[],S=Math.min(a-1,_+n),E=Math.min(o-1,P+n);for(let U=_;U<S;U+=b)for(let z=P;z<E;z+=b){let C=Math.min(U+b,S),B=Math.min(z+b,E),V=U*o+z,$=U*o+B,ht=C*o+z,ft=C*o+B;w.push(V,ht,$,$,ht,ft)}let A=new pe;for(let U of Object.keys(r.attributes))A.setAttribute(U,r.attributes[U]);A.setIndex(w);let N=1e9,D=-1e9;for(let U=_;U<=S;U+=2)for(let z=P;z<=E;z+=2){let C=c[(U*o+z)*3+1];C<N&&(N=C),C>D&&(D=C)}let O=new dn(new F(t.XMIN+P*t.G,N,t.ZMIN+_*t.G),new F(t.XMIN+E*t.G,D,t.ZMIN+S*t.G));A.boundingBox=O,A.boundingSphere=O.getBoundingSphere(new Jn);let H=new Pt(A,i.material);H.receiveShadow=!0,H.userData.box=O,H.name="terrain",M.push(H)}l.push(M)}let h=8,u=[],d=[],f=[],m=[],x=Math.floor((a-1)/h)+1,g=Math.floor((o-1)/h)+1;for(let _=0;_<x;_++)for(let P=0;P<g;P++){let M=Math.min(a-1,_*h),b=Math.min(o-1,P*h),w=M*o+b;u.push(c[w*3],c[w*3+1]-1.2,c[w*3+2]),d.push(r.attributes.uv.array[w*2],r.attributes.uv.array[w*2+1]),f.push(r.attributes.uv1.array[w*2],r.attributes.uv1.array[w*2+1])}for(let _=0;_<x-1;_++)for(let P=0;P<g-1;P++){let M=_*g+P;m.push(M,M+g,M+1,M+1,M+g,M+g+1)}let p=new pe;p.setAttribute("position",new Jt(u,3)),p.setAttribute("uv",new Jt(d,2)),p.setAttribute("uv1",new Jt(f,2)),p.setIndex(m),p.computeVertexNormals();let v=i.geometry;i.geometry=p,i.userData.fullGeometry=v;for(let _ of l){for(let P of _)i.add(P);e.lods.push({tiles:_})}e.terrainD=s;let y=e.update.bind(e);return e.update=(_,P)=>{let M=_.position,b=P||M.distanceToSquared(e.last)>=4;if(y(_,P),!!b)for(let w of e.lods){if(!w.tiles)continue;let S=w.tiles[0].userData.box.distanceToPoint(M),E=e.scale,A=S<s[0]*E?0:S<s[1]*E?1:2;w.tiles.forEach((N,D)=>N.visible=D===A)}},i}var rh,Aa,sf,af=Fe(()=>{Ne();rh=new F,Aa=class{constructor(){this.items=[],this.lods=[],this.last=new F(1e9,0,0),this.scale=1}add(t,e){t.userData.maxD=e,this.items.push(t)}addLod(t,e,n,s=1e9){this.lods.push({near:t,far:e,switchD:n,maxD:s})}update(t,e){let n=t.position;if(!e&&n.distanceToSquared(this.last)<4)return;this.last.copy(n);let s=this.scale;for(let r of this.items){let o=r.userData.box.distanceToPoint(n);r.visible=o<r.userData.maxD*s}for(let r of this.lods){if(r.tiles)continue;let o=r.near.userData.box.distanceToPoint(n),a=o<r.switchD*s;r.near.visible=a,r.far&&(r.far.visible=!a&&o<r.maxD*s)}}},sf=(i,t,e)=>Math.floor(i/e)+","+Math.floor(t/e)});var M1=lf(()=>{Ne();Ju();Ku();ud();Md();th();Ad();_a();nh();zd();Hd();Xd();$d();Jd();Kd();Qd();nf();af();var qs=window.AIMORES,Ur=new URLSearchParams(location.search).has("shot"),te=qs.city,Ra=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700,pi=new URLSearchParams(location.search),y1=Ra||navigator.deviceMemory&&navigator.deviceMemory<=4||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,cf=Ra?"low":y1?"medium":"high",Ae=pi.get("q")||localStorage.getItem("aimores3d_q2")||cf;["low","medium","high","ultra"].includes(Ae)||(Ae=cf);var Pi=async i=>{document.getElementById("loadmsg").textContent=i,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))};async function v1(){await Pi("Preparando o relevo\u2026");let i=new wo({antialias:Ae!=="low",powerPreference:"high-performance",preserveDrawingBuffer:pi.has("shot")}),t=pi.get("pr")?+pi.get("pr"):Math.min(devicePixelRatio,{low:1,medium:Ra?1.25:1.5,high:2,ultra:2}[Ae]),e=t;i.setPixelRatio(e),i.setSize(innerWidth,innerHeight),i.toneMapping=Il,i.toneMappingExposure=.62,i.outputColorSpace=Ce,i.shadowMap.enabled=Ae!=="low",i.shadowMap.type=Cl,document.getElementById("app").appendChild(i.domElement);let n=new mr,s=new an(48,innerWidth/innerHeight,1.5,4e4),r=new ea(s,i.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.maxPolarAngle=Math.PI*.47,r.minDistance=10,r.maxDistance=7e3,r.screenSpacePanning=!1,r.zoomToCursor=!0;let o=new ca(te.meta,la(qs.height)),a=la(qs.meshes),c=new Os;c.scale.setScalar(45e4),n.add(c);let l=c.material.uniforms;l.turbidity.value=2.6,l.rayleigh.value=2,l.mieCoefficient.value=.0035,l.mieDirectionalG.value=.82;let h=new qo(16773596,2.6);h.castShadow=!0;let u={low:1024,medium:2048,high:4096,ultra:8192}[Ae];h.shadow.mapSize.set(u,u),h.shadow.bias=-4e-4,h.shadow.normalBias=.6,n.add(h),n.add(h.target);let d=new Xo(13624319,7035456,.9);n.add(d);let f=new Cs(i),m=null,x=new mr,g=new Os;g.scale.setScalar(1e3),x.add(g),n.fog=new To(13227746,2200,24e3),c.visible=!1;let p=Bd(Ae);n.add(p);let v=new F;function y(pt){let Rt=(pt-6)/12,It=Math.sin(Math.PI*Rt)*68+2,wt=-75+Rt*150,Ht=Ar.degToRad(90-It),ee=Ar.degToRad(wt+180);v.setFromSphericalCoords(1,Ht,ee),l.sunPosition.value.copy(v);for(let Ot of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])g.material.uniforms[Ot].value=l[Ot].value;g.material.uniforms.sunPosition.value.copy(v),m&&m.dispose(),m=f.fromScene(x,0,1,3e4),n.environment=m.texture,n.environmentIntensity=.55;let kt=Math.max(0,Math.min(1,It/25));h.color.setRGB(1,.72+.26*kt,.5+.42*kt),h.intensity=.6+2.2*Math.max(0,Math.min(1,It/35)),d.intensity=.35+.6*kt+(d.userData.boost||0),n.fog.color.setRGB(.48+.08*kt,.58+.07*kt,.74+.06*kt),p.material.uniforms.sunDir.value.copy(v),p.material.uniforms.day.value=Math.max(.15,Math.min(1,(It+4)/20)),i.toneMappingExposure=.5+.15*kt}y(+(pi.get("h")||15.5)),await Pi("Montando terreno e serras ao redor\u2026");let _=await new wr().loadAsync(qs.ground);if(Ae==="low"){let pt=_.image,Rt=document.createElement("canvas");Rt.width=2048,Rt.height=Math.round(2048*pt.height/pt.width),Rt.getContext("2d").drawImage(pt,0,0,Rt.width,Rt.height),_=new pn(Rt)}_.colorSpace=Ce,_.anisotropy=i.capabilities.getMaxAnisotropy();let P=ld(o,_,Ae);n.add(P);let M=await new wr().loadAsync(qs.backtex);M.colorSpace=Ce,M.anisotropy=8;let b=hd(te.meta,la(qs.back),o,M,Ae==="low"||Ae==="medium");n.add(b),await Pi("Ruas, cal\xE7adas e meio-fio\u2026");let w=xa(te),S=Vd(te),E=Gd(te);{let pt=xa(te,25);globalThis.__noPark=pt}if(w){te.trees=te.trees.filter(pt=>!w(pt[0],pt[1])&&!w(pt[0]+3,pt[1])&&!w(pt[0]-3,pt[1])&&!w(pt[0],pt[1]+3)&&!w(pt[0],pt[1]-3));{let pt=xa(te,7),Rt=It=>!pt((It[0]+It[2])/2,(It[1]+It[3])/2)&&!pt(It[0],It[1])&&!pt(It[2],It[3]);te.walls=te.walls.filter(Rt),te.gates&&(te.gates=te.gates.filter(Rt))}}let A=xd(te,o,a,n,{exclude:w,skipIds:S});if(w)for(let pt of te.roads)S.has(pt.id)&&(pt.b=!0);let N=yd(te,o,a,n);await Pi("Igreja, pra\xE7a e campos\u2026");let D=qd(te,o,n),O=Yd(te,o,n);Zd(te,o,n),await Pi("Casas, telhados e muros\u2026");let H=D.center,U=D.radius,z=D.frame,B=_d(te,o,n,pt=>{let Rt=0,It=0;for(let Ot of pt.p)Rt+=Ot[0],It+=Ot[1];Rt/=pt.p.length,It/=pt.p.length;let wt=Rt-z.C[0],Ht=It-z.C[1],ee=wt*z.f[0]+Ht*z.f[1],kt=wt*z.r[0]+Ht*z.r[1];return Math.abs(kt)<z.fx+2&&ee>z.fz0-2&&ee<z.fz1+2},Ae);{let pt=[];for(let wt of te.rail)for(let Ht=0;Ht<wt.pts.length-1;Ht++)pt.push([wt.pts[Ht][0],wt.pts[Ht][1],wt.pts[Ht+1][0],wt.pts[Ht+1][1]]);let Rt=(wt,Ht)=>{for(let[ee,kt,Ot,se]of pt){if(Math.abs(wt-ee)>80&&Math.abs(wt-Ot)>80)continue;let ne=Ot-ee,Gt=se-kt,ie=ne*ne+Gt*Gt||1,I=((wt-ee)*ne+(Ht-kt)*Gt)/ie;I=Math.max(0,Math.min(1,I));let Z=ee+ne*I-wt,ct=kt+Gt*I-Ht;if(Z*Z+ct*ct<16)return!0}return!1};te.trees=te.trees.filter(wt=>!Rt(wt[0],wt[1]));let It=wt=>!Rt((wt[0]+wt[2])/2,(wt[1]+wt[3])/2)&&!Rt(wt[0],wt[1])&&!Rt(wt[2],wt[3]);te.walls=te.walls.filter(It),te.gates&&(te.gates=te.gates.filter(It))}let V=vd(te,o,n);await Pi("Ferrovia Vit\xF3ria-Minas, viaduto e passarelas\u2026");let $=Dd(te,o,n),ht=Nd($.paths,n),ft=Od(te,o,n,$.paths),J=Wd(te,o,n,$.paths),et=kd(te,o,n),dt=tf(te,o,n),ot=ef(te,o,n);{let pt=te.extras.station;if(pt){let Rt=1e9,It=-1e9,wt=1e9,Ht=-1e9;for(let[kt,Ot]of pt)Rt=Math.min(Rt,kt),It=Math.max(It,kt),wt=Math.min(wt,Ot),Ht=Math.max(Ht,Ot);let ee=(kt,Ot)=>{let se=!1;for(let ne=0,Gt=pt.length-1;ne<pt.length;Gt=ne++){let[ie,I]=pt[ne],[Z,ct]=pt[Gt];I>Ot!=ct>Ot&&kt<(Z-ie)*(Ot-I)/(ct-I)+ie&&(se=!se)}return se};te.trees=te.trees.filter(kt=>!(kt[0]>Rt-6&&kt[0]<It+6&&kt[1]>wt-6&&kt[1]<Ht+6&&(ee(kt[0],kt[1])||ee(kt[0]+4,kt[1])||ee(kt[0]-4,kt[1])||ee(kt[0],kt[1]+4)||ee(kt[0],kt[1]-4))))}}let vt=Fd(te,o,n,te.viaduct.railtop);await Pi("\xC1rvores\u2026");let xt=Td(te,o,n,Ae,O?O.palms:[]);await Pi("Tr\xE2nsito\u2026");let nt=new Map,St=te.viaduct,W=St.ramps.map(pt=>new Tn(pt.pts,pt.h)),X=(pt,Rt)=>{let It=1e9,wt=null;for(let Ht of W)for(let ee=0;ee<Ht.L;ee+=3){let kt=Ht.at(ee),Ot=Math.hypot(kt[0]-pt,kt[2]-Rt);Ot<It&&(It=Ot,wt=kt[1])}return It<7?wt:null},L=(pt,Rt,It)=>{if(S.has(pt.id)){let wt=E(pt.id,Rt,It);if(wt!==null)return wt+.12}if(pt.id===1314627853)return St.h+.05;if(pt.id===1314627855||pt.id===1314627854){let wt=X(Rt,It);if(wt!==null)return wt+.2}return o.at(Rt,It)+.1},st=new Ma(te,o,n,L,{low:35,medium:90,high:170,ultra:220}[Ae],{low:0,medium:.04}[Ae]||.11,Ae),G=new Aa;G.scale=Ur?4:{low:.75,medium:1,high:1.5,ultra:2}[Ae];{let pt=(Ot,se,ne)=>{Ot.remove(se);for(let Gt of ne)Ot.add(Gt)},Rt=(Ot,se,ne)=>{if(Ot)for(let Gt of[...Ot.children]){if(Gt.isInstancedMesh||!Gt.isMesh||!Gt.geometry.attributes.position||Gt.geometry.attributes.position.count<3e3)continue;Gt.updateMatrixWorld(!0);let ie=rf(Gt,se);pt(Ot,Gt,[ie]);for(let I of ie.children)G.add(I,ne);Gt.geometry.dispose()}},It=(Ot,se,ne,Gt,ie=null)=>{let I=oh(se,ne,ie&&ie.geo,ie&&ie.mat),Z=[];for(let{near:ct,far:lt}of I)Z.push(ct),lt?(Z.push(lt),G.addLod(ct,lt,ie.switchD)):G.add(ct,Gt);pt(Ot,se,Z)},wt=(Ot,se,ne,Gt=200,ie=null)=>{if(Ot)for(let I of[...Ot.children]){if(!I.isInstancedMesh||I.count<Gt)continue;let Z=oh(I,se,ie&&ie.geo,ie&&ie.mat),ct=[];for(let{near:lt,far:j}of Z)ct.push(lt),j?(ct.push(j),G.addLod(lt,j,ie.switchD)):G.add(lt,ne);pt(Ot,I,ct)}};of(P,o,G,96,Ae==="low"?[300,800]:Ae==="medium"?[450,1100]:[900,2200]),Rt(V,320,700),Rt(B,450,1e9),wt(B,450,3500,100),Rt(A,600,1e9),Rt($&&$.group,400,1500);{let Ot=n.getObjectByName("praca");if(Ot)for(let se of Ot.children){if(!se.isMesh&&!se.isInstancedMesh&&!se.isGroup)continue;se.updateMatrixWorld(!0);let ne=new dn().setFromObject(se);ne.isEmpty()||(se.userData.box=ne,G.add(se,1100))}}$&&$.group?wt($.group,400,450,2e3):wt(n.getObjectByName("rail"),200,450,2e3),wt(n.getObjectByName("campos"),250,900,300),st.parked&&wt(st.parked,250,600,1);let Ht=new Ls(.85,0);Ht.scale(1,.78,1);let ee=new Sr({color:new Qt(1.25,1.3,1.15),flatShading:!1});Ht.computeVertexNormals();let kt=xt;if(kt)for(let Ot of[...kt.children]){if(!Ot.isInstancedMesh)continue;Ot.material&&Ot.material.alphaTest>0&&Ot.material.map&&Ot.count>300?It(kt,Ot,400,0,{geo:Ht,mat:ee,switchD:Ae==="low"?200:Ae==="medium"?350:700}):Ot.count>300&&It(kt,Ot,400,Ot.geometry.attributes.position.count<200?350:700)}if(Ae==="low"){let Ot=new Map,se=new Set;for(let ne of["viaduto","viaduto_centro"])n.getObjectByName(ne)?.traverse(Gt=>se.add(Gt));n.traverse(ne=>{if(!(ne.isMesh||ne.isInstancedMesh)||se.has(ne))return;let Gt=ne.material;if(!Gt||Array.isArray(Gt)||Gt.type!=="MeshStandardMaterial"||Object.prototype.hasOwnProperty.call(Gt,"onBeforeCompile")&&Gt.customProgramCacheKey()!=="paintmask"||Gt===P.material)return;let ie=Ot.get(Gt);ie||(ie=new Sr({color:Gt.color,map:Gt.map,vertexColors:Gt.vertexColors,alphaTest:Gt.alphaTest,side:Gt.side,transparent:Gt.transparent,opacity:Gt.opacity,polygonOffset:Gt.polygonOffset,polygonOffsetFactor:Gt.polygonOffsetFactor,polygonOffsetUnits:Gt.polygonOffsetUnits,emissive:Gt.emissive,depthWrite:Gt.depthWrite}),Gt.alphaTest>0&&Gt.map&&ie.color.multiplyScalar(1.3),Gt.customProgramCacheKey()==="paintmask"&&(ie.onBeforeCompile=Gt.onBeforeCompile,ie.customProgramCacheKey=()=>"paintmaskL"),Ot.set(Gt,ie)),ne.material=ie}),d.userData.boost=.45,y(+(pi.get("h")||15.5))}{let Ot=[];n.traverse(ne=>{(ne.isMesh||ne.isInstancedMesh)&&(Ot.push([ne,ne.visible,ne.frustumCulled]),ne.visible=!0,ne.frustumCulled=!1)}),i.compile(n,s);let se=new _t;i.getSize(se),i.setSize(64,64,!1),i.render(n,s),i.setSize(se.x,se.y,!1);for(let[ne,Gt,ie]of Ot)ne.visible=Gt,ne.frustumCulled=ie}G.update(s,!0)}let Y=new ba(document.getElementById("labels"));for(let[pt,Rt]of Object.entries(te.neigh)){if(Rt.area<2e4)continue;let[It,wt]=Rt.label;Y.add(pt==="Nilton Freire Sampaio"?"Residencial Nilton Freire Sampaio":pt,new F(It,o.at(It,wt)+40,wt),"lbl nb",3500)}for(let[pt,Rt,It]of te.extras.poi){let wt=pt.startsWith("Viaduto")?St.h+12:o.at(Rt,It)+(pt.startsWith("Igreja")?42:18);Y.add(pt.replace("Estadio","Est\xE1dio"),new F(Rt,wt,It),"lbl poi",2600)}let Q=new he;Q.name="limites";let at=[16765286,448160,15681391,1149618,16223339,13073919,9485933,16369487],q=0;for(let[pt,Rt]of Object.entries(te.neigh)){let It=at[q++%at.length];for(let wt of Rt.rings){let Ht=[];for(let Ot=0;Ot<wt.length-1;Ot++){let[se,ne]=wt[Ot],[Gt,ie]=wt[Ot+1],I=Math.hypot(Gt-se,ie-ne);for(let Z=0;Z<I;Z+=4){let ct=se+(Gt-se)*Z/I,lt=ne+(ie-ne)*Z/I;Ht.push(new F(ct,o.at(ct,lt)+1.2,lt))}}if(Ht.length<2)continue;Ht.push(Ht[0].clone());let ee=new pe().setFromPoints(Ht),kt=new Po(ee,new Vo({color:It,dashSize:8,gapSize:5,transparent:!0,opacity:.9,depthTest:!0}));kt.computeLineDistances(),Q.add(kt)}}Q.visible=!1,n.add(Q);let R=pt=>{let Rt=te.neigh[pt];return Rt?Rt.label:[0,0]},T={geral:{t:[-120,0,120],d:2300,pol:.95,az:-.35},rua:{t:(()=>{let pt=te.neigh["Nilton Freire Sampaio"].label,Rt=null,It=1e9;for(let wt of te.roads)if(wt.s==="paver")for(let Ht of wt.p){let ee=Math.hypot(Ht[0]-pt[0],Ht[1]-pt[1]);ee<It&&(It=ee,Rt=Ht)}return[Rt[0],0,Rt[1]]})(),d:26,pol:1.38,az:.6},panorama:{t:[-300,0,150],d:1500,pol:1.33,az:-.25},viaduto:{t:[ft.center[0],ft.center[1]-3,ft.center[2]],d:120,pol:1.22,az:(()=>{let[pt,Rt]=te.viaduct.deck,It=Rt[0]-pt[0],wt=Rt[1]-pt[1],Ht=Math.hypot(It,wt),ee=-wt/Ht,kt=It/Ht,Ot=ee*.85+It/Ht*.5,se=kt*.85+wt/Ht*.5;return Math.atan2(Ot,se)})()},igreja:{t:[D.center[0],o.at(D.center[0],D.center[1]),D.center[1]],d:120,pol:1.05,az:Math.atan2(D.front[0],D.front[1])},praca:{t:[O.center[0],o.at(O.center[0],O.center[1]),O.center[1]],d:95,pol:.9,az:.5},residencial:{t:[R("Nilton Freire Sampaio")[0],0,R("Nilton Freire Sampaio")[1]],d:380,pol:.85,az:-.3},triangulo:{t:[R("Tri\xE2ngulo")[0],0,R("Tri\xE2ngulo")[1]],d:420,pol:.9,az:.3},sossego:{t:[R("Sossego")[0],0,R("Sossego")[1]],d:330,pol:.85,az:-.6},hospital:{t:[...(()=>{let pt=te.extras.poi.find(Rt=>Rt[0].startsWith("Hospital"));return[pt[1],0,pt[2]]})()],d:420,pol:.9,az:.6}},k=null;function tt(pt,Rt=200,It=1,wt=null){let Ht=pt.clone?pt.clone():new F(...pt);Ht.y||(Ht.y=o.at(Ht.x,Ht.z));let ee=s.position.clone().sub(r.target),kt=new fi().setFromVector3(ee);wt===null&&(wt=kt.theta);let Ot=new F().setFromSpherical(new fi(Rt,It,wt)).add(Ht);k={t0:performance.now(),dur:1600,fromP:s.position.clone(),fromT:r.target.clone(),toP:Ot,toT:Ht}}function rt(pt,Rt){if(pt==="rua"){let Ht=te.neigh["Nilton Freire Sampaio"].label,ee=null,kt=1e9;for(let j of te.roads)if(j.s==="paver")for(let At=0;At<j.p.length-1;At++){let Bt=j.p[At],Wt=Math.hypot(Bt[0]-Ht[0],Bt[1]-Ht[1]);Wt<kt&&(kt=Wt,ee=[j.p[At],j.p[At+1]])}let[Ot,se]=ee,ne=se[0]-Ot[0],Gt=se[1]-Ot[1],ie=Math.hypot(ne,Gt),I=Ot[0]+ne/ie*30,Z=Ot[1]+Gt/ie*30,ct=new F(I,o.at(I,Z)+1.5,Z),lt=new F(Ot[0]-ne/ie*6,o.at(Ot[0],Ot[1])+5,Ot[1]-Gt/ie*6);Rt?(r.target.copy(ct),s.position.copy(lt),r.update()):k={t0:performance.now(),dur:1600,fromP:s.position.clone(),fromT:r.target.clone(),toP:lt,toT:ct};return}let It=T[pt],wt=new F(...It.t);It.t[1]||(wt.y=o.at(wt.x,wt.z)),Rt?(r.target.copy(wt),s.position.copy(new F().setFromSpherical(new fi(It.d,It.pol,It.az)).add(wt)),r.update()):tt(wt,It.d,It.pol,It.az)}rt(pi.get("view")||"geral",!0),i.domElement.addEventListener("dblclick",pt=>{let Rt=i.domElement.getBoundingClientRect(),It=new _t((pt.clientX-Rt.left)/Rt.width*2-1,-((pt.clientY-Rt.top)/Rt.height)*2+1),wt=new Us;wt.setFromCamera(It,s);let Ht=wt.intersectObjects([P,A],!0)[0];Ht&&tt(Ht.point.clone().add(new F(0,1.6,0)),25,1.45)});let it=()=>[P,A,B,V,D.group,ft.group,vt],mt=new Ta({scene:n,camera:s,renderer:i,controls:r,labels:Y,pickTargets:it,H:o,flyTo:tt,panel:document.getElementById("mkbody")});document.querySelectorAll("[data-view]").forEach(pt=>pt.onclick=()=>rt(pt.dataset.view));let ut=(pt,Rt)=>{let It=document.getElementById(pt);It.onchange=()=>Rt(It.checked),Rt(It.checked)};ut("t_cars",pt=>{st.mesh.visible=pt,st.parked.visible=pt}),ut("t_train",pt=>{ht.group.userData.off=!pt}),ut("t_labels",pt=>{Y.setGroupVisible("lbl nb",pt),Y.setGroupVisible("lbl poi",pt)}),ut("t_limits",pt=>{Q.visible=pt}),ut("t_trees",pt=>{xt.visible=pt}),ut("t_shadows",pt=>{h.castShadow=pt&&Ae!=="low"});let yt=document.getElementById("hour");yt.value=pi.get("h")||15.5;let Ct=document.getElementById("hourlbl"),Mt=pt=>`${Math.floor(pt)}:${String(Math.round(pt%1*60)).padStart(2,"0")}`;Ct.textContent=Mt(+yt.value);let Ut=null;yt.oninput=()=>{Ct.textContent=Mt(+yt.value),clearTimeout(Ut),Ut=setTimeout(()=>y(+yt.value),60)};let Vt=document.getElementById("quality");Vt.value=Ae,Vt.onchange=()=>{localStorage.setItem("aimores3d_q2",Vt.value),location.search="?q="+Vt.value};let Yt=document.getElementById("mkpanel");document.getElementById("mkhead").onclick=()=>Yt.classList.toggle("closed"),mt.onMode=pt=>{innerWidth<=760&&pt!=="nav"&&!mt.state.marks.length&&pt==="place"&&Yt.classList.add("closed"),innerWidth<=760&&pt==="place"&&(Yt.classList.add("closed"),mt.toast("Toque no mapa para colocar o pino"))},window.__culler=G;let Lt=document.getElementById("touchmode"),ce=!1,re=()=>{r.touches={ONE:ce?mn.ROTATE:mn.PAN,TWO:mn.DOLLY_ROTATE},Lt.textContent=ce?"\u{1F504} 1 dedo: girar":"\u270B 1 dedo: mover",Lt.classList.toggle("on",ce)};re(),Lt.onclick=()=>{ce=!ce,re()},document.getElementById("layersbtn").onclick=()=>{document.getElementById("layers").classList.toggle("open"),document.getElementById("layersbtn").classList.toggle("on")},Ra&&document.getElementById("mkpanel").classList.add("closed"),document.getElementById("helpbtn").onclick=()=>document.getElementById("help").classList.toggle("show"),addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let Se=new Yo,K=0,Dt=null,gt=0,Et=0,zt=new dn(new F(o.XMIN-300,-1e4,o.ZMIN-300),new F(o.XMAX+300,1e4,o.ZMAX+300)),Ft=new ue,oe=0,De=0,ve={t0:performance.now(),n:0,slow:0,fast:0},ge=[t,Math.min(t,.85),Math.min(t,.72),Math.min(t,.6)],Ge=0,Un=pt=>{if(Ur||pi.has("noadapt"))return;let Rt=performance.now();ve.n++;let It=Rt-ve.t0;if(It<2e3)return;let wt=ve.n*1e3/It;ve.t0=Rt,ve.n=0,pt&&(wt<28?(ve.slow++,ve.fast=0,ve.slow>=1&&(ve.slow=0,Ge<ge.length-1&&ge[Ge+1]<e?(Ge++,e=ge[Ge],i.setPixelRatio(e),i.setSize(innerWidth,innerHeight)):G.scale>.45?(G.scale*=.8,G.update(s,!0)):h.castShadow?h.castShadow=!1:st.mesh.visible&&Ae==="low"&&(st.mesh.visible=!1))):wt>52&&(ve.fast++,ve.slow=0,ve.fast>=3&&Ge>0&&(ve.fast=0,Ge--,e=ge[Ge],i.setPixelRatio(e),i.setSize(innerWidth,innerHeight))))};window.__perf=()=>({pr:e,cullScale:G.scale,shadows:h.castShadow,quality:Ae});let Xn=window.__lt={n:0,sum:0,cull:0,rend:0,tick:0};function ji(){let pt=Ur?.05:Math.min(.05,Se.getDelta());K+=pt;let Rt=performance.now();if(k){let ie=Math.min(1,(performance.now()-k.t0)/k.dur),I=ie<.5?4*ie*ie*ie:1-Math.pow(-2*ie+2,3)/2;s.position.lerpVectors(k.fromP,k.toP,I),r.target.lerpVectors(k.fromT,k.toT,I),ie>=1&&(k=null)}r.update(),r.target.clamp(zt.min,zt.max),p.position.copy(s.position);let It=o.at(s.position.x,s.position.z);s.position.y<It+2&&(s.position.y=It+2);let wt=performance.now();st.mesh.visible&&st.tick(pt),ht.group.userData.off?ht.group.visible=!1:ht.tick(pt),N&&N.userData.tick(K),Xn.tick+=performance.now()-wt;let Ht=s.position.distanceTo(r.target),ee=Math.max(120,Math.min(1600,Ht*1.25)),kt=h.shadow.camera;kt.left=-ee,kt.right=ee,kt.top=ee,kt.bottom=-ee,kt.near=1,kt.far=6e3,kt.updateProjectionMatrix(),h.target.position.copy(r.target),h.position.copy(r.target).addScaledVector(v,3e3),Ae==="medium"&&(i.shadowMap.autoUpdate=!1,Et++,(!Dt||Dt.distanceTo(r.target)>ee*.04||Math.abs(gt-ee)>ee*.05||Et>20)&&(i.shadowMap.needsUpdate=!0,Et=0,Dt=(Dt||new F).copy(r.target),gt=ee)),mt.tickScale(s);let Ot=performance.now();G.update(s),Xn.cull+=performance.now()-Ot,s.updateMatrixWorld();let se=!Ft.equals(s.matrixWorld)||!!k;Ft.copy(s.matrixWorld),oe=se?0:oe+1;let ne=Ur||se||oe<3||++De%3===0,Gt=performance.now();if(ne){i.render(n,s),Xn.rend+=performance.now()-Gt;let ie=performance.now();Y.update(s,innerWidth,innerHeight),Xn.lab=(Xn.lab||0)+performance.now()-ie}Xn.n++,Xn.sum+=performance.now()-Rt,Un(se),Ur||requestAnimationFrame(ji)}document.getElementById("loading").classList.add("done"),window.__ready=!0,window.__app={quality:Ae,pr:()=>e,render:()=>i.render(n,s),setCam:(pt,Rt)=>{k=null,r.target.set(...Rt),s.position.set(...pt),r.update()},city:te,traffic:st,trainAt:(pt,Rt)=>ht.placeNear(pt,Rt),info:()=>({calls:i.info.render.calls,tris:i.info.render.triangles,geom:i.info.memory.geometries,tex:i.info.memory.textures}),renderFrame:(pt=1,Rt=.05)=>{for(let It=0;It<pt;It++)Se.getDelta(),ji();return!0},goView:rt,camera:s,controls:r,markers:mt,flyTo:tt,H:o,setTime:y,scene:n,viad2:J,club:et},window.__zincSpot=()=>{let pt=te.buildings.map(wt=>{let Ht=0,ee=0;for(let kt of wt.p)Ht+=kt[0],ee+=kt[1];return[Ht/wt.p.length,ee/wt.p.length,wt.rm==="metal"||wt.rm==="fiber"]}),Rt=null,It=-1;for(let wt of pt){if(!wt[2])continue;let Ht=0;for(let ee of pt)ee[2]&&Math.hypot(ee[0]-wt[0],ee[1]-wt[1])<40&&Ht++;Ht>It&&(It=Ht,Rt=wt)}return[Rt[0],o.at(Rt[0],Rt[1]),Rt[1]]},ji()}v1().catch(i=>{console.error(i),document.getElementById("loadmsg").textContent="Erro ao carregar: "+i.message})});M1();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
