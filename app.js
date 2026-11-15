(()=>{var Be=(i,t)=>()=>(i&&(t=i(i=0)),t);var sf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function Gf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wf(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Xf(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function qf(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jf(i,t){return i+Math.random()*(t-i)}function Kf(i){return i*(.5-Math.random())}function jf(i){i!==void 0&&(gh=i);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(i){return i*nr}function tp(i){return i*cr}function ep(i){return(i&i-1)===0&&i!==0}function np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){let i=lr("canvas");return i.style.display="block",i}function tr(i){i in _h||(_h[i]=!0,console.warn(i))}function op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ap(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ia(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function vp(i,t,e,n,s,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ai,a),c===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qr);return l<e.near||l>e.far?null:{distance:l,point:qr.clone(),object:i}}function Yr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Gr),i.getVertexPosition(l,Wr);let h=vp(i,t,e,n,Vr,Gr,Wr,Uh);if(h){let u=new N;zi.getBarycoord(Uh,Vr,Gr,Wr,u),s&&(h.uv=zi.getInterpolatedAttribute(s,a,c,l,u,new gt)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,c,l,u,new gt)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};zi.getNormal(Vr,Gr,Wr,d.normal),h.face=d,h.barycoord=u}return h}function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}function Fu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function ag(i,t,e,n,s,r,o){let a=new Kt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=m(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===Xo)?(h===void 0&&(h=new It(new Ve(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:As(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(Ni)),h.material.toneMapped=_e.getTransfer(_.colorSpace)!==be,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new It(new Ri(2,2),new mn({name:"BackgroundMaterial",uniforms:As(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_e.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB($r,Nu(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:g}}function cg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,A,F,D,O){let k=!1,U=u(D,F,A);r!==U&&(r=U,l(r.object)),k=f(E,D,F,O),k&&m(E,D,F,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(E,A,F,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,A,F){let D=F.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let k=O[A.id];k===void 0&&(k={},O[A.id]=k);let U=k[D];return U===void 0&&(U=d(c()),k[D]=U),U}function d(E){let A=[],F=[],D=[];for(let O=0;O<e;O++)A[O]=0,F[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:D,object:E,attributes:{},index:null}}function f(E,A,F,D){let O=r.attributes,k=A.attributes,U=0,B=F.getAttributes();for(let C in B)if(B[C].location>=0){let G=O[C],J=k[C];if(J===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function m(E,A,F,D){let O={},k=A.attributes,U=0,B=F.getAttributes();for(let C in B)if(B[C].location>=0){let G=k[C];G===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&(G=E.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),O[C]=J,U++}r.attributes=O,r.attributesNum=U,r.index=D}function x(){let E=r.newAttributes;for(let A=0,F=E.length;A<F;A++)E[A]=0}function g(E){p(E,0)}function p(E,A){let F=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;F[E]=1,D[E]===0&&(i.enableVertexAttribArray(E),D[E]=1),O[E]!==A&&(i.vertexAttribDivisor(E,A),O[E]=A)}function v(){let E=r.newAttributes,A=r.enabledAttributes;for(let F=0,D=A.length;F<D;F++)A[F]!==E[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function y(E,A,F,D,O,k,U){U===!0?i.vertexAttribIPointer(E,A,F,O,k):i.vertexAttribPointer(E,A,F,D,O,k)}function _(E,A,F,D){x();let O=D.attributes,k=F.getAttributes(),U=A.defaultAttributeValues;for(let B in k){let C=k[B];if(C.location>=0){let H=O[B];if(H===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(H=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(H=E.instanceColor)),H!==void 0){let G=H.normalized,J=H.itemSize,ct=t.get(H);if(ct===void 0)continue;let dt=ct.buffer,Y=ct.type,et=ct.bytesPerElement,ft=Y===i.INT||Y===i.UNSIGNED_INT||H.gpuType===Cl;if(H.isInterleavedBufferAttribute){let rt=H.data,Mt=rt.stride,_t=H.offset;if(rt.isInstancedInterleavedBuffer){for(let it=0;it<C.locationSize;it++)p(C.location+it,rt.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<C.locationSize;it++)g(C.location+it);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let it=0;it<C.locationSize;it++)y(C.location+it,J/C.locationSize,Y,G,Mt*et,(_t+J/C.locationSize*it)*et,ft)}else{if(H.isInstancedBufferAttribute){for(let rt=0;rt<C.locationSize;rt++)p(C.location+rt,H.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let rt=0;rt<C.locationSize;rt++)g(C.location+rt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let rt=0;rt<C.locationSize;rt++)y(C.location+rt,J/C.locationSize,Y,G,J*et,J/C.locationSize*rt*et,ft)}}else if(U!==void 0){let G=U[B];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(C.location,G);break;case 3:i.vertexAttrib3fv(C.location,G);break;case 4:i.vertexAttrib4fv(C.location,G);break;default:i.vertexAttrib1fv(C.location,G)}}}}v()}function P(){w();for(let E in n){let A=n[E];for(let F in A){let D=A[F];for(let O in D)h(D[O].object),delete D[O];delete A[F]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let A=n[E.id];for(let F in A){let D=A[F];for(let O in D)h(D[O].object),delete D[O];delete A[F]}delete n[E.id]}function T(E){for(let A in n){let F=n[A];if(F[E.id]===void 0)continue;let D=F[E.id];for(let O in D)h(D[O].object),delete D[O];delete F[E.id]}}function w(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function lg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let w=T===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!w)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:M}}function ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new kn,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,y=v*4,_=p.clippingState||null;c.value=_,_=h(m,d,y,f);for(let P=0;P!==y;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function dg(i){let t=new WeakMap;function e(o,a){return a===pc?o.mapping=Es:a===mc&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pc||a===mc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Zc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function fg(i){let t=[],e=[],n=[],s=i,r=i-ms+1+Oh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ms?c=Oh[o-i+ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let M=0;M<f;M++){let T=M%3*2/3-1,w=M>2?0:-1,S=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];v.set(S,x*m*M),y.set(d,g*m*M);let E=[M,M,M,M,M,M];_.set(E,p*m*M)}let P=new pe;P.setAttribute("position",new oe(v,x)),P.setAttribute("uv",new oe(y,g)),P.setAttribute("faceIndex",new oe(_,p)),t.push(P),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){let n=new ui(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pg(i,t,e){let n=new Float32Array(ki),s=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Hh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Vh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function mg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===pc||c===mc,h=c===Es||c===Ss;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Rs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Rs(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let P=v[y+0],M=v[y+1],T=v[y+2];d.push(P,M,M,T,T,P)}}else if(m!==void 0){let v=m.array;x=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let P=y+0,M=y+1,T=y+2;d.push(P,M,M,T,T,P)}}else return;let g=new(Du(d)?go:mo)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,t,e){let n=new WeakMap,s=new ze;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*P*4*u),T=new po(M,_,P,u);T.type=$n,T.needsUpdate=!0;let w=y*4;for(let E=0;E<u;E++){let A=g[E],F=p[E],D=v[E],O=_*P*4*E;for(let k=0;k<A.count;k++){let U=k*w;f===!0&&(s.fromBufferAttribute(A,k),M[O+U+0]=s.x,M[O+U+1]=s.y,M[O+U+2]=s.z,M[O+U+3]=0),m===!0&&(s.fromBufferAttribute(F,k),M[O+U+4]=s.x,M[O+U+5]=s.y,M[O+U+6]=s.z,M[O+U+7]=0),x===!0&&(s.fromBufferAttribute(D,k),M[O+U+8]=s.x,M[O+U+9]=s.y,M[O+U+10]=s.z,M[O+U+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new gt(_,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Mg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Ye(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Ye(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),Ye(e,n)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=Lu,r=Gh):r=Ou,e.setTexture2D(t||r,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zu,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ku,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function Hg(i){switch(i){case 5126:return Eg;case 35664:return Sg;case 35665:return bg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Gg(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Wg(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Xg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function qg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zg(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Jg(i,t){i.uniform2iv(this.addr,t)}function Kg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function t_(i,t){i.uniform2uiv(this.addr,t)}function e_(i,t){i.uniform3uiv(this.addr,t)}function n_(i,t){i.uniform4uiv(this.addr,t)}function i_(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ou,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zu,r[o])}function r_(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ku,r[o])}function o_(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function a_(i){switch(i){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function $h(i,t){i.seq.push(t),i.map[t.id]=t}function c_(i,t,e){let n=i.name,s=n.length;for(Qa.lastIndex=0;;){let r=Qa.exec(n),o=Qa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$h(e,l===void 0?new $c(a,i,t):new Jc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Kc(a),$h(e,u)),e=u}}}function Jh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function u_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function d_(i){_e._getMatrix(Kh,_e.workingColorSpace,i);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case qo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u_(i.getShaderSource(t),o)}else return s}function f_(i,t){let e=d_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p_(i,t){let e;switch(t){case Af:e="Linear";break;case Rf:e="Reinhard";break;case Cf:e="Cineon";break;case Rl:e="ACESFilmic";break;case If:e="AgX";break;case Lf:e="Neutral";break;case Pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function m_(){_e.getLuminanceCoefficients(Kr);let i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function __(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function Qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function jc(i){return i.replace(y_,M_)}function M_(i,t){let e=me[t];if(e===void 0){let n=v_.get(t);if(n!==void 0)e=me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}function eu(i){return i.replace(E_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function b_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ss:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function A_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case wf:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function R_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=b_(e),l=w_(e),h=T_(e),u=A_(e),d=R_(e),f=g_(e),m=__(r),x=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(er).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(er).join(`
`),p.length>0&&(p+=`
`)):(g=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?me.tonemapping_pars_fragment:"",e.toneMapping!==Ti?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),m_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=jc(o),o=Qh(o,e),o=tu(o,e),a=jc(a),a=Qh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+g+o,_=v+p+a,P=Jh(s,s.VERTEX_SHADER,y),M=Jh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(A){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(M).trim(),k=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,M);else{let B=jh(s,P,"vertex"),C=jh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+B+`
`+C)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||O==="")&&(U=!1);U&&(A.diagnostics={runnable:k,programLog:F,vertexShader:{log:D,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(M),w=new vs(s,x),S=x_(s,x)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,l_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=M,this}function I_(i,t,e,n,s,r,o){let a=new hr,c=new Qc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,E,A,F,D){let O=F.fog,k=D.geometry,U=S.isMeshStandardMaterial?F.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),C=B&&B.mapping===Xo?B.image.height:null,H=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let G=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=G!==void 0?G.length:0,ct=0;k.morphAttributes.position!==void 0&&(ct=1),k.morphAttributes.normal!==void 0&&(ct=2),k.morphAttributes.color!==void 0&&(ct=3);let dt,Y,et,ft;if(H){let ve=Yn[H];dt=ve.vertexShader,Y=ve.fragmentShader}else dt=S.vertexShader,Y=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),ft=c.getFragmentShaderID(S);let rt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),_t=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,St=!!S.map,W=!!S.matcap,X=!!B,I=!!S.aoMap,ot=!!S.lightMap,V=!!S.bumpMap,Z=!!S.normalMap,Q=!!S.displacementMap,at=!!S.emissiveMap,q=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,j=S.dispersion>0,st=S.iridescence>0,tt=S.sheen>0,pt=S.transmission>0,ht=b&&!!S.anisotropyMap,xt=z&&!!S.clearcoatMap,At=z&&!!S.clearcoatNormalMap,vt=z&&!!S.clearcoatRoughnessMap,Lt=st&&!!S.iridescenceMap,kt=st&&!!S.iridescenceThicknessMap,Vt=tt&&!!S.sheenColorMap,Dt=tt&&!!S.sheenRoughnessMap,he=!!S.specularMap,se=!!S.specularColorMap,ye=!!S.specularIntensityMap,K=pt&&!!S.transmissionMap,Ut=pt&&!!S.thicknessMap,mt=!!S.gradientMap,Et=!!S.alphaMap,Ft=S.alphaTest>0,Ot=!!S.alphaHash,jt=!!S.extensions,Ae=Ti;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Ue={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:Y,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:_t,instancingColor:_t&&D.instanceColor!==null,instancingMorph:_t&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:W,envMap:X,envMapMode:X&&B.mapping,envMapCubeUVHeight:C,aoMap:I,lightMap:ot,bumpMap:V,normalMap:Z,displacementMap:d&&Q,emissiveMap:at,normalMapObjectSpace:Z&&S.normalMapType===Nf,normalMapTangentSpace:Z&&S.normalMapType===Ol,metalnessMap:q,roughnessMap:R,anisotropy:b,anisotropyMap:ht,clearcoat:z,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:vt,dispersion:j,iridescence:st,iridescenceMap:Lt,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:Dt,specularMap:he,specularColorMap:se,specularIntensityMap:ye,transmission:pt,transmissionMap:K,thicknessMap:Ut,gradientMap:mt,opaque:S.transparent===!1&&S.blending===_s&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:Ft,alphaHash:Ot,combine:S.combine,mapUv:St&&x(S.map.channel),aoMapUv:I&&x(S.aoMap.channel),lightMapUv:ot&&x(S.lightMap.channel),bumpMapUv:V&&x(S.bumpMap.channel),normalMapUv:Z&&x(S.normalMap.channel),displacementMapUv:Q&&x(S.displacementMap.channel),emissiveMapUv:at&&x(S.emissiveMap.channel),metalnessMapUv:q&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:ht&&x(S.anisotropyMap.channel),clearcoatMapUv:xt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(S.sheenRoughnessMap.channel),specularMapUv:he&&x(S.specularMap.channel),specularColorMapUv:se&&x(S.specularColorMap.channel),specularIntensityMapUv:ye&&x(S.specularIntensityMap.channel),transmissionMapUv:K&&x(S.transmissionMap.channel),thicknessMapUv:Ut&&x(S.thicknessMap.channel),alphaMapUv:Et&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Z||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(St||Et),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ct,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===be,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$t,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:jt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&S.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)E.push(A),E.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let E=m[S.type],A;if(E){let F=Yn[E];A=zl.clone(F.uniforms)}else A=S.uniforms;return A}function P(S,E){let A;for(let F=0,D=h.length;F<D;F++){let O=h[F];if(O.cacheKey===E){A=O,++A.usedTimes;break}}return A===void 0&&(A=new C_(i,E,S,r),h.push(A)),A}function M(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:w}}function L_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||D_),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function U_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function N_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){let t=new N_,e=F_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,_=0,P=0,M=0,T=0;l.sort(B_);for(let S=0,E=l.length;S<E;S++){let A=l[S],F=A.color,D=A.intensity,O=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*D,u+=F.g*D,d+=F.b*D;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],D);T++}else if(A.isDirectionalLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,C=e.get(A);C.shadowIntensity=B.intensity,C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,n.directionalShadow[f]=C,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=U,f++}else if(A.isSpotLight){let U=t.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(F).multiplyScalar(D),U.distance=O,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[x]=U;let B=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,B.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=B.matrix,A.castShadow){let C=e.get(A);C.shadowIntensity=B.intensity,C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,n.spotShadow[x]=C,n.spotShadowMap[x]=k,_++}x++}else if(A.isRectAreaLight){let U=t.get(A);U.color.copy(F).multiplyScalar(D),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=U,g++}else if(A.isPointLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){let B=A.shadow,C=e.get(A);C.shadowIntensity=B.intensity,C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,C.shadowCameraNear=B.camera.near,C.shadowCameraFar=B.camera.far,n.pointShadow[m]=C,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=A.shadow.matrix,y++}n.point[m]=U,m++}else if(A.isHemisphereLight){let U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(D),U.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[p]=U,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==f||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==v||w.numPointShadows!==y||w.numSpotShadows!==_||w.numSpotMaps!==P||w.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-M,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,w.directionalLength=f,w.pointLength=m,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=v,w.numPointShadows=y,w.numSpotShadows=_,w.numSpotMaps=P,w.numLightProbes=T,n.version=O_++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function ru(i){let t=new z_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function k_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ru(i),t.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function G_(i,t,e){let n=new ur,s=new gt,r=new gt,o=new ze,a=new dr({depthPacking:Fl}),c=new el,l={},h=e.maxTextureSize,u={[Ai]:je,[je]:Ai,[$t]:$t},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:H_,fragmentShader:V_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new It(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let p=this.type;this.render=function(M,T,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=p!==ri&&this.type===ri,O=p===ri&&this.type!==ri;for(let k=0,U=M.length;k<U;k++){let B=M[k],C=B.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let H=C.getFrameExtents();if(s.multiply(H),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,C.mapSize.y=r.y)),C.map===null||D===!0||O===!0){let J=this.type!==ri?{minFilter:Tn,magFilter:Tn}:{};C.map!==null&&C.map.dispose(),C.map=new ui(s.x,s.y,J),C.map.texture.name=B.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let G=C.getViewportCount();for(let J=0;J<G;J++){let ct=C.getViewport(J);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),F.viewport(o),C.updateMatrices(B,J),n=C.getFrustum(),_(T,w,C.camera,B,this.type)}C.isPointLightShadow!==!0&&this.type===ri&&v(C,w),C.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,A)};function v(M,T){let w=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,w,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,w,f,x,null)}function y(M,T,w,S){let E=null,A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=E.uuid,D=T.uuid,O=l[F];O===void 0&&(O={},l[F]=O);let k=O[D];k===void 0&&(k=E.clone(),O[D]=k,T.addEventListener("dispose",P)),E=k}if(E.visible=T.visible,E.wireframe=T.wireframe,S===ri?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=w}return E}function _(M,T,w,S,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let D=t.update(M),O=M.material;if(Array.isArray(O)){let k=D.groups;for(let U=0,B=k.length;U<B;U++){let C=k[U],H=O[C.materialIndex];if(H&&H.visible){let G=y(M,H,S,E);M.onBeforeShadow(i,M,T,w,D,G,C),i.renderBufferDirect(w,null,D,G,M,C),M.onAfterShadow(i,M,T,w,D,G,C)}}}else if(O.visible){let k=y(M,O,S,E);M.onBeforeShadow(i,M,T,w,D,k,null),i.renderBufferDirect(w,null,D,k,M,null),M.onAfterShadow(i,M,T,w,D,k,null)}}let F=M.children;for(let D=0,O=F.length;D<O;D++)_(F[D],T,w,S,E)}function P(M){M.target.removeEventListener("dispose",P);for(let w in l){let S=l[w],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function X_(i,t){function e(){let K=!1,Ut=new ze,mt=null,Et=new ze(0,0,0,0);return{setMask:function(Ft){mt!==Ft&&!K&&(i.colorMask(Ft,Ft,Ft,Ft),mt=Ft)},setLocked:function(Ft){K=Ft},setClear:function(Ft,Ot,jt,Ae,Ue){Ue===!0&&(Ft*=Ae,Ot*=Ae,jt*=Ae),Ut.set(Ft,Ot,jt,Ae),Et.equals(Ut)===!1&&(i.clearColor(Ft,Ot,jt,Ae),Et.copy(Ut))},reset:function(){K=!1,mt=null,Et.set(-1,0,0,0)}}}function n(){let K=!1,Ut=!1,mt=null,Et=null,Ft=null;return{setReversed:function(Ot){if(Ut!==Ot){let jt=t.get("EXT_clip_control");Ut?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=Ft;Ft=null,this.setClear(Ae)}Ut=Ot},getReversed:function(){return Ut},setTest:function(Ot){Ot?rt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Ot){mt!==Ot&&!K&&(i.depthMask(Ot),mt=Ot)},setFunc:function(Ot){if(Ut&&(Ot=W_[Ot]),Et!==Ot){switch(Ot){case ac:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Ot}},setLocked:function(Ot){K=Ot},setClear:function(Ot){Ft!==Ot&&(Ut&&(Ot=1-Ot),i.clearDepth(Ot),Ft=Ot)},reset:function(){K=!1,mt=null,Et=null,Ft=null,Ut=!1}}}function s(){let K=!1,Ut=null,mt=null,Et=null,Ft=null,Ot=null,jt=null,Ae=null,Ue=null;return{setTest:function(ve){K||(ve?rt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ve){Ut!==ve&&!K&&(i.stencilMask(ve),Ut=ve)},setFunc:function(ve,We,Mn){(mt!==ve||Et!==We||Ft!==Mn)&&(i.stencilFunc(ve,We,Mn),mt=ve,Et=We,Ft=Mn)},setOp:function(ve,We,Mn){(Ot!==ve||jt!==We||Ae!==Mn)&&(i.stencilOp(ve,We,Mn),Ot=ve,jt=We,Ae=Mn)},setLocked:function(ve){K=ve},setClear:function(ve){Ue!==ve&&(i.clearStencil(ve),Ue=ve)},reset:function(){K=!1,Ut=null,mt=null,Et=null,Ft=null,Ot=null,jt=null,Ae=null,Ue=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,P=null,M=null,T=new Kt(0,0,0),w=0,S=!1,E=null,A=null,F=null,D=null,O=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,B=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(C)[1]),U=B>=1):C.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),U=B>=2);let H=null,G={},J=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),dt=new ze().fromArray(J),Y=new ze().fromArray(ct);function et(K,Ut,mt,Et){let Ft=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(K,Ot),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<mt;jt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Ut+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Ot}let ft={};ft[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Ms),V(!1),Z(oh),rt(i.CULL_FACE),I(wi);function rt(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function Mt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function _t(K,Ut){return u[K]!==Ut?(i.bindFramebuffer(K,Ut),u[K]=Ut,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ut),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function it(K,Ut){let mt=f,Et=!1;if(K){mt=d.get(Ut),mt===void 0&&(mt=[],d.set(Ut,mt));let Ft=K.textures;if(mt.length!==Ft.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,jt=Ft.length;Ot<jt;Ot++)mt[Ot]=i.COLOR_ATTACHMENT0+Ot;mt.length=Ft.length,Et=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(mt)}function St(K){return m!==K?(i.useProgram(K),m=K,!0):!1}let W={[Bi]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};W[hf]=i.MIN,W[uf]=i.MAX;let X={[df]:i.ZERO,[ff]:i.ONE,[pf]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(K,Ut,mt,Et,Ft,Ot,jt,Ae,Ue,ve){if(K===wi){x===!0&&(Mt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),K!==af){if(K!==g||ve!==S){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),ve)switch(K){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,y=null,P=null,M=null,T.set(0,0,0),w=0,g=K,S=ve}return}Ft=Ft||Ut,Ot=Ot||mt,jt=jt||Et,(Ut!==p||Ft!==_)&&(i.blendEquationSeparate(W[Ut],W[Ft]),p=Ut,_=Ft),(mt!==v||Et!==y||Ot!==P||jt!==M)&&(i.blendFuncSeparate(X[mt],X[Et],X[Ot],X[jt]),v=mt,y=Et,P=Ot,M=jt),(Ae.equals(T)===!1||Ue!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ue),T.copy(Ae),w=Ue),g=K,S=!1}function ot(K,Ut){K.side===$t?Mt(i.CULL_FACE):rt(i.CULL_FACE);let mt=K.side===je;Ut&&(mt=!mt),V(mt),K.blending===_s&&K.transparent===!1?I(wi):I(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let Et=K.stencilWrite;a.setTest(Et),Et&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),at(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Z(K){K!==rf?(rt(i.CULL_FACE),K!==A&&(K===oh?i.cullFace(i.BACK):K===of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),A=K}function Q(K){K!==F&&(U&&i.lineWidth(K),F=K)}function at(K,Ut,mt){K?(rt(i.POLYGON_OFFSET_FILL),(D!==Ut||O!==mt)&&(i.polygonOffset(Ut,mt),D=Ut,O=mt)):Mt(i.POLYGON_OFFSET_FILL)}function q(K){K?rt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function R(K){K===void 0&&(K=i.TEXTURE0+k-1),H!==K&&(i.activeTexture(K),H=K)}function b(K,Ut,mt){mt===void 0&&(H===null?mt=i.TEXTURE0+k-1:mt=H);let Et=G[mt];Et===void 0&&(Et={type:void 0,texture:void 0},G[mt]=Et),(Et.type!==K||Et.texture!==Ut)&&(H!==mt&&(i.activeTexture(mt),H=mt),i.bindTexture(K,Ut||ft[K]),Et.type=K,Et.texture=Ut)}function z(){let K=G[H];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(K){dt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),dt.copy(K))}function Dt(K){Y.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Y.copy(K))}function he(K,Ut){let mt=l.get(Ut);mt===void 0&&(mt=new WeakMap,l.set(Ut,mt));let Et=mt.get(K);Et===void 0&&(Et=i.getUniformBlockIndex(Ut,K.name),mt.set(K,Et))}function se(K,Ut){let Et=l.get(Ut).get(K);c.get(Ut)!==Et&&(i.uniformBlockBinding(Ut,Et,K.__bindingPointIndex),c.set(Ut,Et))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,G={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,P=null,M=null,T=new Kt(0,0,0),w=0,S=!1,E=null,A=null,F=null,D=null,O=null,dt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Mt,bindFramebuffer:_t,drawBuffers:it,useProgram:St,setBlending:I,setMaterial:ot,setFlipSided:V,setCullFace:Z,setLineWidth:Q,setPolygonOffset:at,setScissorTest:q,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:Lt,texImage3D:kt,updateUBOMapping:he,uniformBlockBinding:se,texStorage2D:At,texStorage3D:vt,texSubImage2D:tt,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Vt,viewport:Dt,reset:ye}}function ou(i,t,e,n){let s=q_(n);switch(e){case Tu:return i*t;case Ru:return i*t;case Cu:return i*t*2;case Ll:return i*t/s.components*s.byteLength;case Dl:return i*t/s.components*s.byteLength;case Pu:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case Au:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Nl:return i*t*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xc:case vc:return Math.max(i,16)*Math.max(t,8)/4;case _c:case yc:return Math.max(i,8)*Math.max(t,8)/2;case Mc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case Bc:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Iu:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q_(i){switch(i){case li:case Su:return{byteLength:1,components:1};case ar:case bu:case br:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Hi:case Cl:case $n:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Y_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):lr("canvas")}function x(R,b,z){let j=1,st=q(R);if((st.width>z||st.height>z)&&(j=z/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let tt=Math.floor(j*st.width),pt=Math.floor(j*st.height);u===void 0&&(u=m(tt,pt));let ht=b?m(tt,pt):u;return ht.width=tt,ht.height=pt,ht.getContext("2d").drawImage(R,0,0,tt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+pt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,z,j,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=b;if(b===i.RED&&(z===i.FLOAT&&(tt=i.R32F),z===i.HALF_FLOAT&&(tt=i.R16F),z===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.R8UI),z===i.UNSIGNED_SHORT&&(tt=i.R16UI),z===i.UNSIGNED_INT&&(tt=i.R32UI),z===i.BYTE&&(tt=i.R8I),z===i.SHORT&&(tt=i.R16I),z===i.INT&&(tt=i.R32I)),b===i.RG&&(z===i.FLOAT&&(tt=i.RG32F),z===i.HALF_FLOAT&&(tt=i.RG16F),z===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RG8UI),z===i.UNSIGNED_SHORT&&(tt=i.RG16UI),z===i.UNSIGNED_INT&&(tt=i.RG32UI),z===i.BYTE&&(tt=i.RG8I),z===i.SHORT&&(tt=i.RG16I),z===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),z===i.UNSIGNED_INT&&(tt=i.RGB32UI),z===i.BYTE&&(tt=i.RGB8I),z===i.SHORT&&(tt=i.RGB16I),z===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),z===i.UNSIGNED_INT&&(tt=i.RGBA32UI),z===i.BYTE&&(tt=i.RGBA8I),z===i.SHORT&&(tt=i.RGBA16I),z===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){let pt=st?qo:_e.getTransfer(j);z===i.FLOAT&&(tt=i.RGBA32F),z===i.HALF_FLOAT&&(tt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(tt=pt===be?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(R,b){let z;return R?b===null||b===Hi||b===bs?z=i.DEPTH24_STENCIL8:b===$n?z=i.DEPTH32F_STENCIL8:b===ar&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===bs?z=i.DEPTH_COMPONENT24:b===$n?z=i.DEPTH_COMPONENT32F:b===ar&&(z=i.DEPTH_COMPONENT16),z}function P(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function M(R){let b=R.target;b.removeEventListener("dispose",M),w(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),E(b)}function w(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,j=d.get(z);if(j){let st=j[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(R),Object.keys(j).length===0&&d.delete(z)}n.remove(R)}function S(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let z=R.source,j=d.get(z);delete j[b.__cacheKey],o.memory.textures--}function E(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let st=0;st<b.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[j][st]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let j=0,st=z.length;j<st;j++){let tt=n.get(z[j]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(R)}let A=0;function F(){A=0}function D(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function O(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){let z=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function U(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function B(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function C(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){et(z,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let H={[Vn]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},G={[Tn]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},J={[Ff]:i.NEVER,[Vf]:i.ALWAYS,[Of]:i.LESS,[Lu]:i.LEQUAL,[Bf]:i.EQUAL,[Hf]:i.GEQUAL,[zf]:i.GREATER,[kf]:i.NOTEQUAL};function ct(R,b){if(b.type===$n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Ta||b.magFilter===Ir||b.magFilter===Hn||b.minFilter===In||b.minFilter===Ta||b.minFilter===Ir||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,H[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,H[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,H[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,G[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==Ir&&b.minFilter!==Hn||b.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function dt(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",M));let j=b.source,st=d.get(j);st===void 0&&(st={},d.set(j,st));let tt=O(b);if(tt!==R.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),st[tt].usedTimes++;let pt=st[R.__cacheKey];pt!==void 0&&(st[R.__cacheKey].usedTimes--,pt.usedTimes===0&&S(b)),R.__cacheKey=tt,R.__webglTexture=st[tt].texture}return z}function Y(R,b,z){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);let st=dt(R,b),tt=b.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+z);let pt=n.get(tt);if(tt.version!==pt.__version||st===!0){e.activeTexture(i.TEXTURE0+z);let ht=_e.getPrimaries(_e.workingColorSpace),xt=b.colorSpace===bi?null:_e.getPrimaries(b.colorSpace),At=b.colorSpace===bi||ht===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let vt=x(b.image,!1,s.maxTextureSize);vt=at(b,vt);let Lt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Vt=y(b.internalFormat,Lt,kt,b.colorSpace,b.isVideoTexture);ct(j,b);let Dt,he=b.mipmaps,se=b.isVideoTexture!==!0,ye=pt.__version===void 0||st===!0,K=tt.dataReady,Ut=P(b,vt);if(b.isDepthTexture)Vt=_(b.format===ws,b.type),ye&&(se?e.texStorage2D(i.TEXTURE_2D,1,Vt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Lt,kt,null));else if(b.isDataTexture)if(he.length>0){se&&ye&&e.texStorage2D(i.TEXTURE_2D,Ut,Vt,he[0].width,he[0].height);for(let mt=0,Et=he.length;mt<Et;mt++)Dt=he[mt],se?K&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Lt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,mt,Vt,Dt.width,Dt.height,0,Lt,kt,Dt.data);b.generateMipmaps=!1}else se?(ye&&e.texStorage2D(i.TEXTURE_2D,Ut,Vt,vt.width,vt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Lt,kt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Lt,kt,vt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Vt,he[0].width,he[0].height,vt.depth);for(let mt=0,Et=he.length;mt<Et;mt++)if(Dt=he[mt],b.format!==wn)if(Lt!==null)if(se){if(K)if(b.layerUpdates.size>0){let Ft=ou(Dt.width,Dt.height,b.format,b.type);for(let Ot of b.layerUpdates){let jt=Dt.data.subarray(Ot*Ft/Dt.data.BYTES_PER_ELEMENT,(Ot+1)*Ft/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Ot,Dt.width,Dt.height,1,Lt,jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,vt.depth,Lt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Vt,Dt.width,Dt.height,vt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,vt.depth,Lt,kt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Vt,Dt.width,Dt.height,vt.depth,0,Lt,kt,Dt.data)}else{se&&ye&&e.texStorage2D(i.TEXTURE_2D,Ut,Vt,he[0].width,he[0].height);for(let mt=0,Et=he.length;mt<Et;mt++)Dt=he[mt],b.format!==wn?Lt!==null?se?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Lt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Vt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?K&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Lt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,mt,Vt,Dt.width,Dt.height,0,Lt,kt,Dt.data)}else if(b.isDataArrayTexture)if(se){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Vt,vt.width,vt.height,vt.depth),K)if(b.layerUpdates.size>0){let mt=ou(vt.width,vt.height,b.format,b.type);for(let Et of b.layerUpdates){let Ft=vt.data.subarray(Et*mt/vt.data.BYTES_PER_ELEMENT,(Et+1)*mt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,vt.width,vt.height,1,Lt,kt,Ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Lt,kt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,vt.width,vt.height,vt.depth,0,Lt,kt,vt.data);else if(b.isData3DTexture)se?(ye&&e.texStorage3D(i.TEXTURE_3D,Ut,Vt,vt.width,vt.height,vt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Lt,kt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,vt.width,vt.height,vt.depth,0,Lt,kt,vt.data);else if(b.isFramebufferTexture){if(ye)if(se)e.texStorage2D(i.TEXTURE_2D,Ut,Vt,vt.width,vt.height);else{let mt=vt.width,Et=vt.height;for(let Ft=0;Ft<Ut;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Vt,mt,Et,0,Lt,kt,null),mt>>=1,Et>>=1}}else if(he.length>0){if(se&&ye){let mt=q(he[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Vt,mt.width,mt.height)}for(let mt=0,Et=he.length;mt<Et;mt++)Dt=he[mt],se?K&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt,kt,Dt):e.texImage2D(i.TEXTURE_2D,mt,Vt,Lt,kt,Dt);b.generateMipmaps=!1}else if(se){if(ye){let mt=q(vt);e.texStorage2D(i.TEXTURE_2D,Ut,Vt,mt.width,mt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,kt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Lt,kt,vt);g(b)&&p(j),pt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function et(R,b,z){if(b.image.length!==6)return;let j=dt(R,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let tt=n.get(st);if(st.version!==tt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let pt=_e.getPrimaries(_e.workingColorSpace),ht=b.colorSpace===bi?null:_e.getPrimaries(b.colorSpace),xt=b.colorSpace===bi||pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,vt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let Et=0;Et<6;Et++)!At&&!vt?Lt[Et]=x(b.image[Et],!0,s.maxCubemapSize):Lt[Et]=vt?b.image[Et].image:b.image[Et],Lt[Et]=at(b,Lt[Et]);let kt=Lt[0],Vt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),he=y(b.internalFormat,Vt,Dt,b.colorSpace),se=b.isVideoTexture!==!0,ye=tt.__version===void 0||j===!0,K=st.dataReady,Ut=P(b,kt);ct(i.TEXTURE_CUBE_MAP,b);let mt;if(At){se&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,he,kt.width,kt.height);for(let Et=0;Et<6;Et++){mt=Lt[Et].mipmaps;for(let Ft=0;Ft<mt.length;Ft++){let Ot=mt[Ft];b.format!==wn?Vt!==null?se?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft,0,0,Ot.width,Ot.height,Vt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft,he,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft,0,0,Ot.width,Ot.height,Vt,Dt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft,he,Ot.width,Ot.height,0,Vt,Dt,Ot.data)}}}else{if(mt=b.mipmaps,se&&ye){mt.length>0&&Ut++;let Et=q(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,he,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(vt){se?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Lt[Et].width,Lt[Et].height,Vt,Dt,Lt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,Lt[Et].width,Lt[Et].height,0,Vt,Dt,Lt[Et].data);for(let Ft=0;Ft<mt.length;Ft++){let jt=mt[Ft].image[Et].image;se?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft+1,0,0,jt.width,jt.height,Vt,Dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft+1,he,jt.width,jt.height,0,Vt,Dt,jt.data)}}else{se?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Vt,Dt,Lt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,Vt,Dt,Lt[Et]);for(let Ft=0;Ft<mt.length;Ft++){let Ot=mt[Ft];se?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft+1,0,0,Vt,Dt,Ot.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ft+1,he,Vt,Dt,Ot.image[Et])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),tt.__version=st.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ft(R,b,z,j,st,tt){let pt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),xt=y(z.internalFormat,pt,ht,z.colorSpace),At=n.get(b),vt=n.get(z);if(vt.__renderTarget=b,!At.__hasExternalTextures){let Lt=Math.max(1,b.width>>tt),kt=Math.max(1,b.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,xt,Lt,kt,b.depth,0,pt,ht,null):e.texImage2D(st,tt,xt,Lt,kt,0,pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Z(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,vt.__webglTexture,0,V(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,vt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let j=b.depthTexture,st=j&&j.isDepthTexture?j.type:null,tt=_(b.stencilBuffer,st),pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=V(b);Z(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,tt,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,R)}else{let j=b.textures;for(let st=0;st<j.length;st++){let tt=j[st],pt=r.convert(tt.format,tt.colorSpace),ht=r.convert(tt.type),xt=y(tt.internalFormat,pt,ht,tt.colorSpace),At=V(b);z&&Z(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,xt,b.width,b.height):Z(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let st=j.__webglTexture,tt=V(b);if(b.depthTexture.format===xs)Z(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(b.depthTexture.format===ws)Z(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function _t(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),rt(b.__webglDepthbuffer[j],R,!1);else{let st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),rt(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,b,z){let j=n.get(R);b!==void 0&&ft(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&_t(R)}function St(R){let b=R.texture,z=n.get(R),j=n.get(b);R.addEventListener("dispose",T);let st=R.textures,tt=R.isWebGLCubeRenderTarget===!0,pt=st.length>1;if(pt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),tt){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[ht][xt]=i.createFramebuffer()}else z.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)z.__webglFramebuffer[ht]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let ht=0,xt=st.length;ht<xt;ht++){let At=n.get(st[ht]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Z(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){let xt=st[ht];z.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let At=r.convert(xt.format,xt.colorSpace),vt=r.convert(xt.type),Lt=y(xt.internalFormat,At,vt,xt.colorSpace,R.isXRRenderTarget===!0),kt=V(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)ft(z.__webglFramebuffer[ht][xt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else ft(z.__webglFramebuffer[ht],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,xt=st.length;ht<xt;ht++){let At=st[ht],vt=n.get(At);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),ct(i.TEXTURE_2D,At),ft(z.__webglFramebuffer,R,At,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(At)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),ct(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)ft(z.__webglFramebuffer[xt],R,b,i.COLOR_ATTACHMENT0,ht,xt);else ft(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ht,0);g(b)&&p(ht),e.unbindTexture()}R.depthBuffer&&_t(R)}function W(R){let b=R.textures;for(let z=0,j=b.length;z<j;z++){let st=b[z];if(g(st)){let tt=v(R),pt=n.get(st).__webglTexture;e.bindTexture(tt,pt),p(tt),e.unbindTexture()}}}let X=[],I=[];function ot(R){if(R.samples>0){if(Z(R)===!1){let b=R.textures,z=R.width,j=R.height,st=i.COLOR_BUFFER_BIT,tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(R),ht=b.length>1;if(ht)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let At=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,st,i.NEAREST),c===!0&&(X.length=0,I.length=0,X.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(X.push(tt),I.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let At=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function V(R){return Math.min(s.maxSamples,R.samples)}function Z(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Q(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function at(R,b){let z=R.colorSpace,j=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Us&&z!==bi&&(_e.getTransfer(z)===be?(j!==wn||st!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=C,this.rebindTextures=it,this.setupRenderTarget=St,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Z}function Z_(i,t){function e(n,s=bi){let r,o=_e.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===bu)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Au)return i.RGB;if(n===wn)return i.RGBA;if(n===Ru)return i.LUMINANCE;if(n===Cu)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Pu)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===xc||n===yc||n===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===Ec||n===Sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===Ec)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===Bc||n===zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===kc||n===Hc||n===Vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Q_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Fi.copy(_),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Fi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(m(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let P=y.program;n.updateUBOMapping(v,P);let M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),P=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=_.length;M<T;M++){let w=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,E=w.length;S<E;S++){let A=w[S];if(f(A,M,S,P)===!0){let F=A.__offset,D=Array.isArray(A.value)?A.value:[A.value],O=0;for(let k=0;k<D.length;k++){let U=D[k],B=x(U);typeof U=="number"||typeof U=="boolean"?(A.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,F+O,A.__data)):U.isMatrix3?(A.__data[0]=U.elements[0],A.__data[1]=U.elements[1],A.__data[2]=U.elements[2],A.__data[3]=0,A.__data[4]=U.elements[3],A.__data[5]=U.elements[4],A.__data[6]=U.elements[5],A.__data[7]=0,A.__data[8]=U.elements[6],A.__data[9]=U.elements[7],A.__data[10]=U.elements[8],A.__data[11]=0):(U.toArray(A.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,P){let M=v.value,T=y+"_"+_;if(P[T]===void 0)return typeof M=="number"||typeof M=="boolean"?P[T]=M:P[T]=M.clone(),!0;{let w=P[T];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return P[T]=M,!0}else if(w.equals(M)===!1)return w.copy(M),!0}return!1}function m(v){let y=v.uniforms,_=0,P=16;for(let T=0,w=y.length;T<w;T++){let S=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,A=S.length;E<A;E++){let F=S[E],D=Array.isArray(F.value)?F.value:[F.value];for(let O=0,k=D.length;O<k;O++){let U=D[O],B=x(U),C=_%P,H=C%B.boundary,G=C+H;_+=H,G!==0&&P-G<B.storage&&(_+=P-G),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=B.storage}}}let M=_%P;return M>0&&(_+=P-M),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function to(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(bo.fromBufferAttribute(o,s),wo.fromBufferAttribute(o,r),e.distanceSqToSegment(bo,wo,tc,hu)>n)return;tc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tc);if(!(c<t.near||c>t.far))return{distance:c,point:hu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Hl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function uu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function nx(i,t){let e=1-i;return e*e*t}function ix(i,t){return 2*(1-i)*i*t}function sx(i,t){return i*i*t}function rr(i,t,e,n){return nx(i,t)+ix(i,e)+sx(i,n)}function rx(i,t){let e=1-i;return e*e*e*t}function ox(i,t){let e=1-i;return 3*e*e*i*t}function ax(i,t){return 3*(1-i)*i*i*t}function cx(i,t){return i*i*i*t}function or(i,t,e,n,s){return rx(i,t)+ox(i,e)+ax(i,n)+cx(i,s)}function Hu(i,t,e,n,s){let r,o;if(s===wx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=du(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=du(r,i[r],i[r+1],o);return o&&Zo(o,o.next)&&(vr(o),o=o.next),o}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zo(e,e.next)||Fe(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ux(i,n,s,r):hx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dx(Wi(i),t,e),xr(i,t,e,n,s,r,2)):o===2&&fx(i,t,e,n,s,r):xr(Wi(i),t,e,n,s,r,1);break}}}function hx(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&gs(s,a,r,c,o,l,m.x,m.y)&&Fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ux(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=hl(f,m,t,e,n),v=hl(x,g,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&gs(a,h,c,u,l,d,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&gs(a,h,c,u,l,d,_.x,_.y)&&Fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&gs(a,h,c,u,l,d,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&gs(a,h,c,u,l,d,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function dx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Zo(s,r)&&Vu(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Wi(n)}function fx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ex(o,a)){let c=Gu(o,a);o=Wi(o,o.next),c=Wi(c,c.next),xr(o,t,e,n,s,r,0),xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function px(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Hu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Mx(l));for(s.sort(mx),r=0;r<s.length;r++)e=gx(s[r],e);return e}function mx(i,t){return i.x-t.x}function gx(i,t){let e=_x(i,t);if(!e)return t;let n=Gu(e,i);return Wi(n,n.next),Wi(e,e.next)}function _x(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&gs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&xx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function xx(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function yx(i,t,e,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ex(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sx(i,t)&&(yr(i,t)&&yr(t,i)&&bx(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||Zo(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zo(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){let s=io(Fe(i,t,e)),r=io(Fe(i,t,n)),o=io(Fe(e,n,i)),a=io(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&no(i,e,t)||r===0&&no(i,n,t)||o===0&&no(e,i,n)||a===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function Sx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gu(i,t){let e=new ul(i.i,i.x,i.y),n=new ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function du(i,t,e,n){let s=new ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function fu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Ax(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function so(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xu(){return performance.now()}function vu(i,t){return i.distance-t.distance}function bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],t,e,!0)}}var wl,Wn,_n,rf,oh,of,Mu,Tl,ri,Ai,je,$t,wi,_s,ah,ch,lh,af,Bi,cf,lf,hf,uf,df,ff,pf,mf,rc,oc,gf,_f,xf,yf,vf,Mf,Ef,Sf,bf,ac,cc,lc,Ms,hc,uc,dc,fc,Al,wf,Tf,Ti,Af,Rf,Cf,Rl,Pf,If,Lf,Eu,Es,Ss,pc,mc,Xo,Vn,Zn,gc,Tn,Df,Ir,In,Ta,Hn,li,Su,bu,ar,Cl,Hi,$n,br,Pl,Il,bs,wu,Tu,Au,wn,Ru,Cu,xs,ws,Ll,Dl,Pu,Ul,Nl,ro,oo,ao,co,_c,xc,yc,vc,Mc,Ec,Sc,bc,wc,Tc,Ac,Rc,Cc,Pc,Ic,Lc,Dc,Uc,Nc,Fc,Oc,lo,Bc,zc,Iu,kc,Hc,Vc,ho,Gc,Aa,hh,uh,dh,Uf,Fl,Ol,Nf,bi,Ce,Us,qo,be,Qi,fh,Ff,Of,Bf,Lu,zf,kf,Hf,Vf,ph,mh,oi,uo,hi,sn,gh,nr,cr,wr,gt,de,Ra,_h,_e,xh,yh,vh,Mh,Eh,ts,Wc,lp,fo,hp,hn,ze,Xc,ui,po,qc,ke,N,Pa,Sh,pn,ti,On,Lr,es,ns,is,xi,yi,Ii,Ys,Dr,Ur,Li,up,Zs,La,Jn,ei,Da,Nr,vi,Ua,Fr,Na,Vi,le,ss,Bn,dp,fp,Mi,Or,Sn,bh,wh,An,hr,pp,Th,rs,ni,Br,$s,mp,gp,Ah,Rh,Ch,Ph,_p,os,Fa,on,zn,ii,Oa,si,as,cs,Ih,Ba,za,ka,Ha,Va,Ga,zi,Uu,Ei,zr,Kt,rn,xp,di,Ts,He,kr,oe,mo,go,Zt,yp,Pn,Xa,ls,bn,Js,Ke,pe,Lh,Di,Hr,Dh,Vr,Gr,Wr,qa,Xr,Uh,qr,It,Ve,zl,Ep,Sp,mn,_o,Si,Nh,Fh,ln,hs,us,Yc,xo,Zc,Ya,bp,wp,kn,Ui,Zr,ur,Ri,Ap,Rp,Cp,Pp,Ip,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Em,Sm,bm,wm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,jm,Qm,t0,e0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,E0,S0,b0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,O0,B0,z0,k0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,J0,K0,j0,Q0,tg,eg,ng,ig,sg,rg,me,Nt,Yn,$r,Ni,og,yo,ms,Oh,ki,Za,Bh,$a,Ja,Ka,ja,Oi,ds,zh,Rs,vo,Ou,Gh,Bu,zu,ku,Wh,Xh,qh,Yh,Zh,$c,Jc,Kc,Qa,vs,l_,h_,Kh,Kr,y_,v_,E_,P_,Qc,tl,O_,dr,el,H_,V_,W_,nl,fe,$_,sr,J_,K_,il,sl,Fi,j_,Mo,Eo,fr,pr,mr,fs,au,jr,cu,ex,Ks,js,Ge,So,bo,wo,lu,Qs,Qr,tc,hu,To,gn,Ln,gr,rl,eo,ec,nc,ic,_r,Ao,ol,Ro,al,Co,Po,Io,Lo,cl,Do,Uo,No,Se,Cs,ll,Gi,lx,ci,Ps,Tx,Is,Fo,Dn,Xi,Oo,wt,Mr,Bo,Ls,dl,fl,pl,Gn,qi,ml,gl,_l,zo,Yi,xl,mu,yl,Cx,Er,vl,Sr,ko,Ho,sc,gu,_u,Ml,El,Vo,Go,Vl,Px,Gl,Ix,Lx,Dx,Ux,Nx,Fx,Ox,Sl,Ne,_y,yu,Ds,fi,Wo,Oe=Be(()=>{wl="170",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,oh=1,of=2,Mu=1,Tl=2,ri=3,Ai=0,je=1,$t=2,wi=0,_s=1,ah=2,ch=3,lh=4,af=5,Bi=100,cf=101,lf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,rc=204,oc=205,gf=206,_f=207,xf=208,yf=209,vf=210,Mf=211,Ef=212,Sf=213,bf=214,ac=0,cc=1,lc=2,Ms=3,hc=4,uc=5,dc=6,fc=7,Al=0,wf=1,Tf=2,Ti=0,Af=1,Rf=2,Cf=3,Rl=4,Pf=5,If=6,Lf=7,Eu=300,Es=301,Ss=302,pc=303,mc=304,Xo=306,Vn=1e3,Zn=1001,gc=1002,Tn=1003,Df=1004,Ir=1005,In=1006,Ta=1007,Hn=1008,li=1009,Su=1010,bu=1011,ar=1012,Cl=1013,Hi=1014,$n=1015,br=1016,Pl=1017,Il=1018,bs=1020,wu=35902,Tu=1021,Au=1022,wn=1023,Ru=1024,Cu=1025,xs=1026,ws=1027,Ll=1028,Dl=1029,Pu=1030,Ul=1031,Nl=1033,ro=33776,oo=33777,ao=33778,co=33779,_c=35840,xc=35841,yc=35842,vc=35843,Mc=36196,Ec=37492,Sc=37496,bc=37808,wc=37809,Tc=37810,Ac=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Lc=37816,Dc=37817,Uc=37818,Nc=37819,Fc=37820,Oc=37821,lo=36492,Bc=36494,zc=36495,Iu=36283,kc=36284,Hc=36285,Vc=36286,ho=2300,Gc=2301,Aa=2302,hh=2400,uh=2401,dh=2402,Uf=3200,Fl=3201,Ol=0,Nf=1,bi="",Ce="srgb",Us="srgb-linear",qo="linear",be="srgb",Qi=7680,fh=519,Ff=512,Of=513,Bf=514,Lu=515,zf=516,kf=517,Hf=518,Vf=519,ph=35044,mh="300 es",oi=2e3,uo=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,nr=Math.PI/180,cr=180/Math.PI;wr={DEG2RAD:nr,RAD2DEG:cr,generateUUID:Zi,clamp:Xe,euclideanModulo:Bl,mapLinear:Gf,inverseLerp:Wf,lerp:ir,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Zf,randInt:$f,randFloat:Jf,randFloatSpread:Kf,seededRandom:jf,degToRad:Qf,radToDeg:tp,isPowerOfTwo:ep,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:an,denormalize:ps},gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],y=s[4],_=s[7],P=s[2],M=s[5],T=s[8];return r[0]=o*x+a*v+c*P,r[3]=o*g+a*y+c*M,r[6]=o*p+a*_+c*T,r[1]=l*x+h*v+u*P,r[4]=l*g+h*y+u*M,r[7]=l*p+h*_+u*T,r[2]=d*x+f*v+m*P,r[5]=d*g+f*y+m*M,r[8]=d*p+f*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new de;_h={};_e={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};xh=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],vh=[.3127,.329],Mh=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[Us]:{primaries:xh,whitePoint:vh,transfer:qo,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:xh,whitePoint:vh,transfer:be,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});Wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=lr("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lp=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}};hp=0,hn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=In,o=Hn,a=wn,c=li,l=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zi(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Eu;hn.DEFAULT_ANISOTROPY=1;ze=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,P=(p+1)/2,M=(h+d)/4,T=(u+x)/4,w=(m+g)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=w/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=w/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xc=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},qc=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),M=Math.atan2(P,p*v);g=Math.sin(g*M)/P,a=Math.sin(a*M)/P}let _=a*v;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new N,Sh=new ke,pn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Dr.subVectors(this.max,Ys),es.subVectors(t.a,Ys),ns.subVectors(t.b,Ys),is.subVectors(t.c,Ys),xi.subVectors(ns,es),yi.subVectors(is,ns),Ii.subVectors(es,is);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ii.z,Ii.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ii.z,0,-Ii.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ii.y,Ii.x,0];return!Ia(e,es,ns,is,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,es,ns,is,Dr))?!1:(Ur.crossVectors(xi,yi),e=[Ur.x,Ur.y,Ur.z],Ia(e,es,ns,is,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,Lr=new pn,es=new N,ns=new N,is=new N,xi=new N,yi=new N,Ii=new N,Ys=new N,Dr=new N,Ur=new N,Li=new N;up=new pn,Zs=new N,La=new N,Jn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(La)),this.expandByPoint(Zs.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new N,Da=new N,Nr=new N,vi=new N,Ua=new N,Fr=new N,Na=new N,Vi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=vi.dot(this.direction),c=-vi.dot(Nr),l=vi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(Nr,d),f}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),Fr.subVectors(n,t),Na.crossVectors(Ua,Fr);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);let c=a*this.direction.dot(Fr.crossVectors(vi,Fr));if(c<0)return null;let l=a*this.direction.dot(Ua.cross(vi));if(l<0||c+l>o)return null;let h=-a*vi.dot(Na);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Mi.crossVectors(n,Sn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Mi.crossVectors(n,Sn)),Mi.normalize(),Or.crossVectors(Sn,Mi),s[0]=Mi.x,s[4]=Or.x,s[8]=Sn.x,s[1]=Mi.y,s[5]=Or.y,s[9]=Sn.y,s[2]=Mi.z,s[6]=Or.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],P=n[15],M=s[0],T=s[4],w=s[8],S=s[12],E=s[1],A=s[5],F=s[9],D=s[13],O=s[2],k=s[6],U=s[10],B=s[14],C=s[3],H=s[7],G=s[11],J=s[15];return r[0]=o*M+a*E+c*O+l*C,r[4]=o*T+a*A+c*k+l*H,r[8]=o*w+a*F+c*U+l*G,r[12]=o*S+a*D+c*B+l*J,r[1]=h*M+u*E+d*O+f*C,r[5]=h*T+u*A+d*k+f*H,r[9]=h*w+u*F+d*U+f*G,r[13]=h*S+u*D+d*B+f*J,r[2]=m*M+x*E+g*O+p*C,r[6]=m*T+x*A+g*k+p*H,r[10]=m*w+x*F+g*U+p*G,r[14]=m*S+x*D+g*B+p*J,r[3]=v*M+y*E+_*O+P*C,r[7]=v*T+y*A+_*k+P*H,r[11]=v*w+y*F+_*U+P*G,r[15]=v*S+y*D+_*B+P*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,P=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,M=e*v+n*y+s*_+r*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return t[0]=v*T,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*T,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=y*T,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*T,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=_*T,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*T,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*T,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=c*l,y=c*h,_=c*u,P=n.x,M=n.y,T=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(d+p))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(m+y)*T,s[9]=(g-v)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===oi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===uo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,x;if(a===oi)m=(o+r)*u,x=-2*u;else if(a===uo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new N,Bn=new le,dp=new N(0,0,0),fp=new N(1,1,1),Mi=new N,Or=new N,Sn=new N,bh=new le,wh=new ke,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,Th=new N,rs=new ke,ni=new le,Br=new N,$s=new N,mp=new N,gp=new ke,Ah=new N(1,0,0),Rh=new N(0,1,0),Ch=new N(0,0,1),Ph={type:"added"},_p={type:"removed"},os={type:"childadded",child:null},Fa={type:"childremoved",child:null},on=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new An,n=new ke,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new de}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt($s,Br,this.up):ni.lookAt(Br,$s,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ni),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zn=new N,ii=new N,Oa=new N,si=new N,as=new N,cs=new N,Ih=new N,Ba=new N,za=new N,ka=new N,Ha=new ze,Va=new ze,Ga=new ze,zi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),ii.subVectors(n,e),Oa.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ii),c=zn.dot(Oa),l=ii.dot(ii),h=ii.dot(Oa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ha.setScalar(0),Va.setScalar(0),Ga.setScalar(0),Ha.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ha,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ii.subVectors(t,e),zn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),zn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,n),cs.subVectors(r,n),Ba.subVectors(t,n);let c=as.dot(Ba),l=cs.dot(Ba);if(c<=0&&l<=0)return e.copy(n);za.subVectors(t,s);let h=as.dot(za),u=cs.dot(za);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(as,o);ka.subVectors(t,r);let f=as.dot(ka),m=cs.dot(ka);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(cs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Ih,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(as,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},zr={h:0,s:0,l:0};Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=Bl(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return _e.fromWorkingColorSpace(rn.copy(this),t),Math.round(Xe(rn.r*255,0,255))*65536+Math.round(Xe(rn.g*255,0,255))*256+Math.round(Xe(rn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ce){_e.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(zr);let n=ir(Ei.h,zr.h,e),s=ir(Ei.s,zr.s,e),r=ir(Ei.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Kt;Kt.NAMES=Uu;xp=0,di=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Zi(),this.name="",this.blending=_s,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ts=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},He=new N,kr=new gt,oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ph&&(t.usage=this.usage),t}},mo=class extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}},go=class extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Zt=class extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=0,Pn=new le,Xa=new on,ls=new N,bn=new pn,Js=new pn,Ke=new N,pe=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?go:mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(bn.min,Js.min),bn.expandByPoint(Ke),Ke.addVectors(bn.max,Js.max),bn.expandByPoint(Ke)):(bn.expandByPoint(Js.min),bn.expandByPoint(Js.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(t,l),Ke.add(ls)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new N,c[w]=new N;let l=new N,h=new N,u=new N,d=new gt,f=new gt,m=new gt,x=new N,g=new N;function p(w,S,E){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(A),a[w].add(x),a[S].add(x),a[E].add(x),c[w].add(g),c[S].add(g),c[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let w=0,S=v.length;w<S;++w){let E=v[w],A=E.start,F=E.count;for(let D=A,O=A+F;D<O;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new N,_=new N,P=new N,M=new N;function T(w){P.fromBufferAttribute(s,w),M.copy(P);let S=a[w];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(M,S);let A=_.dot(c[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,A)}for(let w=0,S=v.length;w<S;++w){let E=v[w],A=E.start,F=E.count;for(let D=A,O=A+F;D<O;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new le,Di=new Vi,Hr=new Jn,Dh=new N,Vr=new N,Gr=new N,Wr=new N,qa=new N,Xr=new N,Uh=new N,qr=new N,It=class extends on{constructor(t=new pe,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(qa.fromBufferAttribute(u,t),o?Xr.addScaledVector(qa,h):Xr.addScaledVector(qa.sub(e),h))}e.add(Xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Hr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Hr,Dh)===null||Di.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let M=a.getX(_),T=a.getX(_+1),w=a.getX(_+2);s=Yr(this,p,t,n,l,h,u,M,T,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Yr(this,o,t,n,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let M=_,T=_+1,w=_+2;s=Yr(this,p,t,n,l,h,u,M,T,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,y=g+1,_=g+2;s=Yr(this,o,t,n,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};Ve=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function m(x,g,p,v,y,_,P,M,T,w,S){let E=_/T,A=P/w,F=_/2,D=P/2,O=M/2,k=T+1,U=w+1,B=0,C=0,H=new N;for(let G=0;G<U;G++){let J=G*A-D;for(let ct=0;ct<k;ct++){let dt=ct*E-F;H[x]=dt*v,H[g]=J*y,H[p]=O,l.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[p]=M>0?1:-1,h.push(H.x,H.y,H.z),u.push(ct/T),u.push(1-G/w),B+=1}}for(let G=0;G<w;G++)for(let J=0;J<T;J++){let ct=d+J+k*G,dt=d+J+k*(G+1),Y=d+(J+1)+k*(G+1),et=d+(J+1)+k*G;c.push(ct,dt,et),c.push(dt,Y,et),C+=6}a.addGroup(f,C,S),f+=C,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};zl={clone:As,merge:cn},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_o=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new N,Nh=new gt,Fh=new gt,ln=class extends _o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Fh),e.subVectors(Fh,Nh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,Yc=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new ln(hs,us,t,e);r.layers=this.layers,this.add(r);let o=new ln(hs,us,t,e);o.layers=this.layers,this.add(o);let a=new ln(hs,us,t,e);a.layers=this.layers,this.add(a);let c=new ln(hs,us,t,e);c.layers=this.layers,this.add(c);let l=new ln(hs,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xo=class extends hn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zc=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:wi});r.uniforms.tEquirect.value=e;let o=new It(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=In),new Yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ya=new N,bp=new N,wp=new de,kn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ya.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Jn,Zr=new N,ur=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+v).normalize(),n[3].setComponents(c-o,d-h,g-m,_-v).normalize(),n[4].setComponents(c-a,d-u,g-x,_-y).normalize(),e===oi)n[5].setComponents(c+a,d+u,g+x,_+y).normalize();else if(e===uo)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ri=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let y=0;y<l;y++){let _=y*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let y=v+l*p,_=v+l*(p+1),P=v+1+l*(p+1),M=v+1+l*p;f.push(y,_,M),f.push(_,P,M)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:kp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:$p,common:Jp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:xm,lights_toon_fragment:vm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Em,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:zm,morphcolor_vertex:km,morphnormal_vertex:Hm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:l0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:M0,uv_pars_fragment:E0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:w0,background_vert:T0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:D0,distanceRGBA_vert:U0,distanceRGBA_frag:N0,equirect_vert:F0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:z0,meshbasic_vert:k0,meshbasic_frag:H0,meshlambert_vert:V0,meshlambert_frag:G0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:Z0,meshphong_frag:$0,meshphysical_vert:J0,meshphysical_frag:K0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Nt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Yn={basic:{uniforms:cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:cn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:cn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:cn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:cn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:cn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:cn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:cn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:cn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:cn([Nt.common,Nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:cn([Nt.lights,Nt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Yn.physical={uniforms:cn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};$r={r:0,b:0,g:0},Ni=new An,og=new le;yo=class extends _o{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Oh=[.125,.215,.35,.446,.526,.582],ki=20,Za=new yo,Bh=new Kt,$a=null,Ja=0,Ka=0,ja=!1,Oi=(1+Math.sqrt(5))/2,ds=1/Oi,zh=[new N(-Oi,ds,0),new N(Oi,ds,0),new N(-ds,0,Oi),new N(ds,0,Oi),new N(0,Oi,-ds),new N(0,Oi,ds),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ja,Ka),this._renderer.xr.enabled=ja,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:br,format:wn,colorSpace:Us,depthBuffer:!1},s=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,t,e)}return s}_compileMaterial(t){let e=new It(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,s){let a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Ti,h.autoClear=!1;let f=new Ts({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new It(new Ve,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Bh),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Jr(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Es||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new It(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ki;g>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);let p=[],v=0;for(let T=0;T<ki;++T){let w=T/x,S=Math.exp(-w*w/2);p.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-ms?s-y+ms:0),M=4*(this._cubeSize-_);Jr(e,P,M,3*_,2*_),c.setRenderTarget(e),c.render(u,Za)}};vo=class extends hn{constructor(t,e,n,s,r,o,a,c,l,h=xs){if(h!==xs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Hi),n===void 0&&h===ws&&(n=bs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ou=new hn,Gh=new vo(1,1),Bu=new po,zu=new qc,ku=new xo,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);$c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}},Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}},Kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qa=/(\w+)(\])?(\[|\.)?/g;vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);c_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};l_=37297,h_=0;Kh=new de;Kr=new N;y_=/^[ \t]*#include +<([\w\d./]+)>/gm;v_=new Map;E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;P_=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tl(t),e.set(t,n)),n}},tl=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};O_=0;dr=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;W_={[ac]:cc,[lc]:dc,[hc]:fc,[Ms]:uc,[cc]:ac,[dc]:lc,[fc]:hc,[uc]:Ms};nl=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},$_={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:J_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sl=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new il,g=e.getContextAttributes(),p=null,v=null,y=[],_=[],P=new gt,M=null,T=new ln;T.viewport=new ze;let w=new ln;w.viewport=new ze;let S=[T,w],E=new nl,A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=y[Y];return et===void 0&&(et=new sr,y[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=y[Y];return et===void 0&&(et=new sr,y[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=y[Y];return et===void 0&&(et=new sr,y[Y]=et),et.getHandSpace()};function D(Y){let et=_.indexOf(Y.inputSource);if(et===-1)return;let ft=y[et];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let Y=0;Y<y.length;Y++){let et=_[Y];et!==null&&(_[Y]=null,y[Y].disconnect(et))}A=null,F=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ui(f.framebufferWidth,f.framebufferHeight,{format:wn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,ft=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?ws:xs,ft=g.stencil?bs:Hi);let Mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ui(d.textureWidth,d.textureHeight,{format:wn,type:li,depthTexture:new vo(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(Y){for(let et=0;et<Y.removed.length;et++){let ft=Y.removed[et],rt=_.indexOf(ft);rt>=0&&(_[rt]=null,y[rt].disconnect(ft))}for(let et=0;et<Y.added.length;et++){let ft=Y.added[et],rt=_.indexOf(ft);if(rt===-1){for(let _t=0;_t<y.length;_t++)if(_t>=_.length){_.push(ft),rt=_t;break}else if(_[_t]===null){_[_t]=ft,rt=_t;break}if(rt===-1)break}let Mt=y[rt];Mt&&Mt.connect(ft)}}let U=new N,B=new N;function C(Y,et,ft){U.setFromMatrixPosition(et.matrixWorld),B.setFromMatrixPosition(ft.matrixWorld);let rt=U.distanceTo(B),Mt=et.projectionMatrix.elements,_t=ft.projectionMatrix.elements,it=Mt[14]/(Mt[10]-1),St=Mt[14]/(Mt[10]+1),W=(Mt[9]+1)/Mt[5],X=(Mt[9]-1)/Mt[5],I=(Mt[8]-1)/Mt[0],ot=(_t[8]+1)/_t[0],V=it*I,Z=it*ot,Q=rt/(-I+ot),at=Q*-I;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(Q),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Mt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let q=it+Q,R=St+Q,b=V-at,z=Z+(rt-at),j=W*St/R*q,st=X*St/R*q;Y.projectionMatrix.makePerspective(b,z,j,st,q,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function H(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,ft=Y.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),E.near=w.near=T.near=et,E.far=w.far=T.far=ft,(A!==E.near||F!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,F=E.far),T.layers.mask=Y.layers.mask|2,w.layers.mask=Y.layers.mask|4,E.layers.mask=T.layers.mask|w.layers.mask;let rt=Y.parent,Mt=E.cameras;H(E,rt);for(let _t=0;_t<Mt.length;_t++)H(Mt[_t],rt);Mt.length===2?C(E,T,w):E.projectionMatrix.copy(T.projectionMatrix),G(Y,E,rt)};function G(Y,et,ft){ft===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let J=null;function ct(Y,et){if(h=et.getViewerPose(l||o),m=et,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;ft.length!==E.cameras.length&&(E.cameras.length=0,rt=!0);for(let _t=0;_t<ft.length;_t++){let it=ft[_t],St=null;if(f!==null)St=f.getViewport(it);else{let X=u.getViewSubImage(d,it);St=X.viewport,_t===0&&(t.setRenderTargetTextures(v,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(v))}let W=S[_t];W===void 0&&(W=new ln,W.layers.enable(_t),W.viewport=new ze,S[_t]=W),W.matrix.fromArray(it.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(it.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(St.x,St.y,St.width,St.height),_t===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),rt===!0&&E.cameras.push(W)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let _t=u.getDepthInformation(ft[0]);_t&&_t.isValid&&_t.texture&&x.init(t,_t,s.renderState)}}for(let ft=0;ft<y.length;ft++){let rt=_[ft],Mt=y[ft];rt!==null&&Mt!==void 0&&Mt.update(rt,et,l||o)}J&&J(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let dt=new Fu;dt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}},Fi=new An,j_=new le;Mo=class{constructor(t={}){let{canvas:e=rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Ti,this.toneMappingExposure=1;let _=this,P=!1,M=0,T=0,w=null,S=-1,E=null,A=new ze,F=new ze,D=null,O=new Kt(0),k=0,U=e.width,B=e.height,C=1,H=null,G=null,J=new ze(0,0,U,B),ct=new ze(0,0,U,B),dt=!1,Y=new ur,et=!1,ft=!1,rt=new le,Mt=new le,_t=new N,it=new ze,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},W=!1;function X(){return w===null?C:1}let I=n;function ot(L,$){return e.getContext(L,$)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),I===null){let $="webgl2";if(I=ot($,L),I===null)throw ot($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let V,Z,Q,at,q,R,b,z,j,st,tt,pt,ht,xt,At,vt,Lt,kt,Vt,Dt,he,se,ye,K;function Ut(){V=new gg(I),V.init(),se=new Z_(I,V),Z=new hg(I,V,t,se),Q=new X_(I,V),Z.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),at=new yg(I),q=new L_,R=new Y_(I,V,Q,q,Z,se,at),b=new dg(_),z=new mg(_),j=new Tp(I),ye=new cg(I,j),st=new _g(I,j,at,ye),tt=new Mg(I,st,j,at),Vt=new vg(I,Z,R),vt=new ug(q),pt=new I_(_,b,z,V,Z,ye,vt),ht=new Q_(_,q),xt=new U_,At=new k_(V),kt=new ag(_,b,z,Q,tt,f,c),Lt=new G_(_,tt,Z),K=new tx(I,at,Z,Q),Dt=new lg(I,V,at),he=new xg(I,V,at),at.programs=pt.programs,_.capabilities=Z,_.extensions=V,_.properties=q,_.renderLists=xt,_.shadowMap=Lt,_.state=Q,_.info=at}Ut();let mt=new sl(_,I);this.xr=mt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=V.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=V.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(L){L!==void 0&&(C=L,this.setSize(U,B,!1))},this.getSize=function(L){return L.set(U,B)},this.setSize=function(L,$,lt=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,B=$,e.width=Math.floor(L*C),e.height=Math.floor($*C),lt===!0&&(e.style.width=L+"px",e.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(U*C,B*C).floor()},this.setDrawingBufferSize=function(L,$,lt){U=L,B=$,C=lt,e.width=Math.floor(L*lt),e.height=Math.floor($*lt),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(J)},this.setViewport=function(L,$,lt,ut){L.isVector4?J.set(L.x,L.y,L.z,L.w):J.set(L,$,lt,ut),Q.viewport(A.copy(J).multiplyScalar(C).round())},this.getScissor=function(L){return L.copy(ct)},this.setScissor=function(L,$,lt,ut){L.isVector4?ct.set(L.x,L.y,L.z,L.w):ct.set(L,$,lt,ut),Q.scissor(F.copy(ct).multiplyScalar(C).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(L){Q.setScissorTest(dt=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(L=!0,$=!0,lt=!0){let ut=0;if(L){let nt=!1;if(w!==null){let Rt=w.texture.format;nt=Rt===Nl||Rt===Ul||Rt===Dl}if(nt){let Rt=w.texture.type,Bt=Rt===li||Rt===Hi||Rt===ar||Rt===bs||Rt===Pl||Rt===Il,Xt=kt.getClearColor(),qt=kt.getClearAlpha(),ce=Xt.r,ue=Xt.g,Yt=Xt.b;Bt?(m[0]=ce,m[1]=ue,m[2]=Yt,m[3]=qt,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=ce,x[1]=ue,x[2]=Yt,x[3]=qt,I.clearBufferiv(I.COLOR,0,x))}else ut|=I.COLOR_BUFFER_BIT}$&&(ut|=I.DEPTH_BUFFER_BIT),lt&&(ut|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),xt.dispose(),At.dispose(),q.dispose(),b.dispose(),z.dispose(),tt.dispose(),ye.dispose(),K.dispose(),pt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",yt),mt.removeEventListener("sessionend",Ct),Pt.stop()};function Et(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let L=at.autoReset,$=Lt.enabled,lt=Lt.autoUpdate,ut=Lt.needsUpdate,nt=Lt.type;Ut(),at.autoReset=L,Lt.enabled=$,Lt.autoUpdate=lt,Lt.needsUpdate=ut,Lt.type=nt}function Ot(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function jt(L){let $=L.target;$.removeEventListener("dispose",jt),Ae($)}function Ae(L){Ue(L),q.remove(L)}function Ue(L){let $=q.get(L).programs;$!==void 0&&($.forEach(function(lt){pt.releaseProgram(lt)}),L.isShaderMaterial&&pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,lt,ut,nt,Rt){$===null&&($=St);let Bt=nt.isMesh&&nt.matrixWorld.determinant()<0,Xt=re(L,$,lt,ut,nt);Q.setMaterial(ut,Bt);let qt=lt.index,ce=1;if(ut.wireframe===!0){if(qt=st.getWireframeAttribute(lt),qt===void 0)return;ce=2}let ue=lt.drawRange,Yt=lt.attributes.position,xe=ue.start*ce,Re=(ue.start+ue.count)*ce;Rt!==null&&(xe=Math.max(xe,Rt.start*ce),Re=Math.min(Re,(Rt.start+Rt.count)*ce)),qt!==null?(xe=Math.max(xe,0),Re=Math.min(Re,qt.count)):Yt!=null&&(xe=Math.max(xe,0),Re=Math.min(Re,Yt.count));let Ie=Re-xe;if(Ie<0||Ie===1/0)return;ye.setup(nt,ut,Xt,lt,qt);let fn,Me=Dt;if(qt!==null&&(fn=j.get(qt),Me=he,Me.setIndex(fn)),nt.isMesh)ut.wireframe===!0?(Q.setLineWidth(ut.wireframeLinewidth*X()),Me.setMode(I.LINES)):Me.setMode(I.TRIANGLES);else if(nt.isLine){let Jt=ut.linewidth;Jt===void 0&&(Jt=1),Q.setLineWidth(Jt*X()),nt.isLineSegments?Me.setMode(I.LINES):nt.isLineLoop?Me.setMode(I.LINE_LOOP):Me.setMode(I.LINE_STRIP)}else nt.isPoints?Me.setMode(I.POINTS):nt.isSprite&&Me.setMode(I.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Me.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))Me.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Jt=nt._multiDrawStarts,Qn=nt._multiDrawCounts,Ee=nt._multiDrawCount,Fn=qt?j.get(qt).bytesPerElement:1,ji=q.get(ut).currentProgram.getUniforms();for(let En=0;En<Ee;En++)ji.setValue(I,"_gl_DrawID",En),Me.render(Jt[En]/Fn,Qn[En])}else if(nt.isInstancedMesh)Me.renderInstances(xe,Ie,nt.count);else if(lt.isInstancedBufferGeometry){let Jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Qn=Math.min(lt.instanceCount,Jt);Me.renderInstances(xe,Ie,Qn)}else Me.render(xe,Ie)};function ve(L,$,lt){L.transparent===!0&&L.side===$t&&L.forceSinglePass===!1?(L.side=je,L.needsUpdate=!0,ae(L,$,lt),L.side=Ai,L.needsUpdate=!0,ae(L,$,lt),L.side=$t):ae(L,$,lt)}this.compile=function(L,$,lt=null){lt===null&&(lt=L),p=At.get(lt),p.init($),y.push(p),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),L!==lt&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights();let ut=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){let Xt=Rt[Bt];ve(Xt,lt,nt),ut.add(Xt)}else ve(Rt,lt,nt),ut.add(Rt)}),y.pop(),p=null,ut},this.compileAsync=function(L,$,lt=null){let ut=this.compile(L,$,lt);return new Promise(nt=>{function Rt(){if(ut.forEach(function(Bt){q.get(Bt).currentProgram.isReady()&&ut.delete(Bt)}),ut.size===0){nt(L);return}setTimeout(Rt,10)}V.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let We=null;function Mn(L){We&&We(L)}function yt(){Pt.stop()}function Ct(){Pt.start()}let Pt=new Fu;Pt.setAnimationLoop(Mn),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(L){We=L,mt.setAnimationLoop(L),L===null?Pt.stop():Pt.start()},mt.addEventListener("sessionstart",yt),mt.addEventListener("sessionend",Ct),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera($),$=mt.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,$,w),p=At.get(L,y.length),p.init($),y.push(p),Mt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y.setFromProjectionMatrix(Mt),ft=this.localClippingEnabled,et=vt.init(this.clippingPlanes,ft),g=xt.get(L,v.length),g.init(),v.push(g),mt.enabled===!0&&mt.isPresenting===!0){let Rt=_.xr.getDepthSensingMesh();Rt!==null&&bt(Rt,$,-1/0,_.sortObjects)}bt(L,$,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,G),W=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,W&&kt.addToRenderList(g,L),this.info.render.frame++,et===!0&&vt.beginShadows();let lt=p.state.shadowsArray;Lt.render(lt,L,$),et===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ut=g.opaque,nt=g.transmissive;if(p.setupLights(),$.isArrayCamera){let Rt=$.cameras;if(nt.length>0)for(let Bt=0,Xt=Rt.length;Bt<Xt;Bt++){let qt=Rt[Bt];ie(ut,nt,L,qt)}W&&kt.render(L);for(let Bt=0,Xt=Rt.length;Bt<Xt;Bt++){let qt=Rt[Bt];Ht(g,L,qt,qt.viewport)}}else nt.length>0&&ie(ut,nt,L,$),W&&kt.render(L),Ht(g,L,$);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(_,L,$),ye.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&vt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function bt(L,$,lt,ut){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)lt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){ut&&it.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Mt);let Bt=tt.update(L),Xt=L.material;Xt.visible&&g.push(L,Bt,Xt,lt,it.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){let Bt=tt.update(L),Xt=L.material;if(ut&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),it.copy(L.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),it.copy(Bt.boundingSphere.center)),it.applyMatrix4(L.matrixWorld).applyMatrix4(Mt)),Array.isArray(Xt)){let qt=Bt.groups;for(let ce=0,ue=qt.length;ce<ue;ce++){let Yt=qt[ce],xe=Xt[Yt.materialIndex];xe&&xe.visible&&g.push(L,Bt,xe,lt,it.z,Yt)}}else Xt.visible&&g.push(L,Bt,Xt,lt,it.z,null)}}let Rt=L.children;for(let Bt=0,Xt=Rt.length;Bt<Xt;Bt++)bt(Rt[Bt],$,lt,ut)}function Ht(L,$,lt,ut){let nt=L.opaque,Rt=L.transmissive,Bt=L.transparent;p.setupLightsView(lt),et===!0&&vt.setGlobalState(_.clippingPlanes,lt),ut&&Q.viewport(A.copy(ut)),nt.length>0&&ee(nt,$,lt),Rt.length>0&&ee(Rt,$,lt),Bt.length>0&&ee(Bt,$,lt),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ie(L,$,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ut.id]===void 0&&(p.state.transmissionRenderTarget[ut.id]=new ui(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?br:li,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let Rt=p.state.transmissionRenderTarget[ut.id],Bt=ut.viewport||A;Rt.setSize(Bt.z,Bt.w);let Xt=_.getRenderTarget();_.setRenderTarget(Rt),_.getClearColor(O),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),W&&kt.render(lt);let qt=_.toneMapping;_.toneMapping=Ti;let ce=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),p.setupLightsView(ut),et===!0&&vt.setGlobalState(_.clippingPlanes,ut),ee(L,lt,ut),R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt),V.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Yt=0,xe=$.length;Yt<xe;Yt++){let Re=$[Yt],Ie=Re.object,fn=Re.geometry,Me=Re.material,Jt=Re.group;if(Me.side===$t&&Ie.layers.test(ut.layers)){let Qn=Me.side;Me.side=je,Me.needsUpdate=!0,zt(Ie,lt,ut,fn,Me,Jt),Me.side=Qn,Me.needsUpdate=!0,ue=!0}}ue===!0&&(R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt))}_.setRenderTarget(Xt),_.setClearColor(O,k),ce!==void 0&&(ut.viewport=ce),_.toneMapping=qt}function ee(L,$,lt){let ut=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,Rt=L.length;nt<Rt;nt++){let Bt=L[nt],Xt=Bt.object,qt=Bt.geometry,ce=ut===null?Bt.material:ut,ue=Bt.group;Xt.layers.test(lt.layers)&&zt(Xt,$,lt,qt,ce,ue)}}function zt(L,$,lt,ut,nt,Rt){L.onBeforeRender(_,$,lt,ut,nt,Rt),L.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(_,$,lt,ut,L,Rt),nt.transparent===!0&&nt.side===$t&&nt.forceSinglePass===!1?(nt.side=je,nt.needsUpdate=!0,_.renderBufferDirect(lt,$,ut,nt,L,Rt),nt.side=Ai,nt.needsUpdate=!0,_.renderBufferDirect(lt,$,ut,nt,L,Rt),nt.side=$t):_.renderBufferDirect(lt,$,ut,nt,L,Rt),L.onAfterRender(_,$,lt,ut,nt,Rt)}function ae(L,$,lt){$.isScene!==!0&&($=St);let ut=q.get(L),nt=p.state.lights,Rt=p.state.shadowsArray,Bt=nt.state.version,Xt=pt.getParameters(L,nt.state,Rt,$,lt),qt=pt.getProgramCacheKey(Xt),ce=ut.programs;ut.environment=L.isMeshStandardMaterial?$.environment:null,ut.fog=$.fog,ut.envMap=(L.isMeshStandardMaterial?z:b).get(L.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,ce===void 0&&(L.addEventListener("dispose",jt),ce=new Map,ut.programs=ce);let ue=ce.get(qt);if(ue!==void 0){if(ut.currentProgram===ue&&ut.lightsStateVersion===Bt)return Gt(L,Xt),ue}else Xt.uniforms=pt.getUniforms(L),L.onBeforeCompile(Xt,_),ue=pt.acquireProgram(Xt,qt),ce.set(qt,ue),ut.uniforms=Xt.uniforms;let Yt=ut.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Yt.clippingPlanes=vt.uniform),Gt(L,Xt),ut.needsLights=Je(L),ut.lightsStateVersion=Bt,ut.needsLights&&(Yt.ambientLightColor.value=nt.state.ambient,Yt.lightProbe.value=nt.state.probe,Yt.directionalLights.value=nt.state.directional,Yt.directionalLightShadows.value=nt.state.directionalShadow,Yt.spotLights.value=nt.state.spot,Yt.spotLightShadows.value=nt.state.spotShadow,Yt.rectAreaLights.value=nt.state.rectArea,Yt.ltc_1.value=nt.state.rectAreaLTC1,Yt.ltc_2.value=nt.state.rectAreaLTC2,Yt.pointLights.value=nt.state.point,Yt.pointLightShadows.value=nt.state.pointShadow,Yt.hemisphereLights.value=nt.state.hemi,Yt.directionalShadowMap.value=nt.state.directionalShadowMap,Yt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Yt.spotShadowMap.value=nt.state.spotShadowMap,Yt.spotLightMatrix.value=nt.state.spotLightMatrix,Yt.spotLightMap.value=nt.state.spotLightMap,Yt.pointShadowMap.value=nt.state.pointShadowMap,Yt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ut.currentProgram=ue,ut.uniformsList=null,ue}function ne(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=vs.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Gt(L,$){let lt=q.get(L);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function re(L,$,lt,ut,nt){$.isScene!==!0&&($=St),R.resetTextureUnits();let Rt=$.fog,Bt=ut.isMeshStandardMaterial?$.environment:null,Xt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Us,qt=(ut.isMeshStandardMaterial?z:b).get(ut.envMap||Bt),ce=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ue=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Yt=!!lt.morphAttributes.position,xe=!!lt.morphAttributes.normal,Re=!!lt.morphAttributes.color,Ie=Ti;ut.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ie=_.toneMapping);let fn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Me=fn!==void 0?fn.length:0,Jt=q.get(ut),Qn=p.state.lights;if(et===!0&&(ft===!0||L!==E)){let Cn=L===E&&ut.id===S;vt.setState(ut,L,Cn)}let Ee=!1;ut.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Qn.state.version||Jt.outputColorSpace!==Xt||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==qt||ut.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==vt.numPlanes||Jt.numIntersection!==vt.numIntersection)||Jt.vertexAlphas!==ce||Jt.vertexTangents!==ue||Jt.morphTargets!==Yt||Jt.morphNormals!==xe||Jt.morphColors!==Re||Jt.toneMapping!==Ie||Jt.morphTargetsCount!==Me)&&(Ee=!0):(Ee=!0,Jt.__version=ut.version);let Fn=Jt.currentProgram;Ee===!0&&(Fn=ae(ut,$,nt));let ji=!1,En=!1,Xs=!1,Le=Fn.getUniforms(),qn=Jt.uniforms;if(Q.useProgram(Fn.program)&&(ji=!0,En=!0,Xs=!0),ut.id!==S&&(S=ut.id,En=!0),ji||E!==L){Q.buffers.depth.getReversed()?(rt.copy(L.projectionMatrix),ap(rt),cp(rt),Le.setValue(I,"projectionMatrix",rt)):Le.setValue(I,"projectionMatrix",L.projectionMatrix),Le.setValue(I,"viewMatrix",L.matrixWorldInverse);let gi=Le.map.cameraPosition;gi!==void 0&&gi.setValue(I,_t.setFromMatrixPosition(L.matrixWorld)),Z.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Le.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,En=!0,Xs=!0)}if(nt.isSkinnedMesh){Le.setOptional(I,nt,"bindMatrix"),Le.setOptional(I,nt,"bindMatrixInverse");let Cn=nt.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Le.setValue(I,"boneTexture",Cn.boneTexture,R))}nt.isBatchedMesh&&(Le.setOptional(I,nt,"batchingTexture"),Le.setValue(I,"batchingTexture",nt._matricesTexture,R),Le.setOptional(I,nt,"batchingIdTexture"),Le.setValue(I,"batchingIdTexture",nt._indirectTexture,R),Le.setOptional(I,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Le.setValue(I,"batchingColorTexture",nt._colorsTexture,R));let qs=lt.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Vt.update(nt,lt,Fn),(En||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Le.setValue(I,"receiveShadow",nt.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(qn.envMap.value=qt,qn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&$.environment!==null&&(qn.envMapIntensity.value=$.environmentIntensity),En&&(Le.setValue(I,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&Pe(qn,Xs),Rt&&ut.fog===!0&&ht.refreshFogUniforms(qn,Rt),ht.refreshMaterialUniforms(qn,ut,C,B,p.state.transmissionRenderTarget[L.id]),vs.upload(I,ne(Jt),qn,R)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(vs.upload(I,ne(Jt),qn,R),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Le.setValue(I,"center",nt.center),Le.setValue(I,"modelViewMatrix",nt.modelViewMatrix),Le.setValue(I,"normalMatrix",nt.normalMatrix),Le.setValue(I,"modelMatrix",nt.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){let Cn=ut.uniformsGroups;for(let gi=0,_i=Cn.length;gi<_i;gi++){let rh=Cn[gi];K.update(rh,Fn),K.bind(rh,Fn)}}return Fn}function Pe(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Je(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,$,lt){q.get(L.texture).__webglTexture=$,q.get(L.depthTexture).__webglTexture=lt;let ut=q.get(L);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=lt===void 0,ut.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,$){let lt=q.get(L);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,lt=0){w=L,M=$,T=lt;let ut=!0,nt=null,Rt=!1,Bt=!1;if(L){let qt=q.get(L);if(qt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),ut=!1;else if(qt.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(qt.__hasExternalTextures)R.rebindTextures(L,q.get(L.texture).__webglTexture,q.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Yt=L.depthTexture;if(qt.__boundDepthTexture!==Yt){if(Yt!==null&&q.has(Yt)&&(L.width!==Yt.image.width||L.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}let ce=L.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Bt=!0);let ue=q.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ue[$])?nt=ue[$][lt]:nt=ue[$],Rt=!0):L.samples>0&&R.useMultisampledRTT(L)===!1?nt=q.get(L).__webglMultisampledFramebuffer:Array.isArray(ue)?nt=ue[lt]:nt=ue,A.copy(L.viewport),F.copy(L.scissor),D=L.scissorTest}else A.copy(J).multiplyScalar(C).floor(),F.copy(ct).multiplyScalar(C).floor(),D=dt;if(Q.bindFramebuffer(I.FRAMEBUFFER,nt)&&ut&&Q.drawBuffers(L,nt),Q.viewport(A),Q.scissor(F),Q.setScissorTest(D),Rt){let qt=q.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,qt.__webglTexture,lt)}else if(Bt){let qt=q.get(L.texture),ce=$||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,lt||0,ce)}S=-1},this.readRenderTargetPixels=function(L,$,lt,ut,nt,Rt,Bt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){Q.bindFramebuffer(I.FRAMEBUFFER,Xt);try{let qt=L.texture,ce=qt.format,ue=qt.type;if(!Z.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ut&&lt>=0&&lt<=L.height-nt&&I.readPixels($,lt,ut,nt,se.convert(ce),se.convert(ue),Rt)}finally{let qt=w!==null?q.get(w).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(L,$,lt,ut,nt,Rt,Bt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){let qt=L.texture,ce=qt.format,ue=qt.type;if(!Z.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=L.width-ut&&lt>=0&&lt<=L.height-nt){Q.bindFramebuffer(I.FRAMEBUFFER,Xt);let Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,Rt.byteLength,I.STREAM_READ),I.readPixels($,lt,ut,nt,se.convert(ce),se.convert(ue),0);let xe=w!==null?q.get(w).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,xe);let Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await op(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Rt),I.deleteBuffer(Yt),I.deleteSync(Re),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,$=null,lt=0){L.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,L=arguments[1]);let ut=Math.pow(2,-lt),nt=Math.floor(L.image.width*ut),Rt=Math.floor(L.image.height*ut),Bt=$!==null?$.x:0,Xt=$!==null?$.y:0;R.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,lt,0,0,Bt,Xt,nt,Rt),Q.unbindTexture()},this.copyTextureToTexture=function(L,$,lt=null,ut=null,nt=0){L.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,L=arguments[1],$=arguments[2],nt=arguments[3]||0,lt=null);let Rt,Bt,Xt,qt,ce,ue,Yt,xe,Re,Ie=L.isCompressedTexture?L.mipmaps[nt]:L.image;lt!==null?(Rt=lt.max.x-lt.min.x,Bt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,ce=lt.min.y,ue=lt.isBox3?lt.min.z:0):(Rt=Ie.width,Bt=Ie.height,Xt=Ie.depth||1,qt=0,ce=0,ue=0),ut!==null?(Yt=ut.x,xe=ut.y,Re=ut.z):(Yt=0,xe=0,Re=0);let fn=se.convert($.format),Me=se.convert($.type),Jt;$.isData3DTexture?(R.setTexture3D($,0),Jt=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(R.setTexture2DArray($,0),Jt=I.TEXTURE_2D_ARRAY):(R.setTexture2D($,0),Jt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);let Qn=I.getParameter(I.UNPACK_ROW_LENGTH),Ee=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(I.UNPACK_SKIP_PIXELS),ji=I.getParameter(I.UNPACK_SKIP_ROWS),En=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ue);let Xs=L.isDataArrayTexture||L.isData3DTexture,Le=$.isDataArrayTexture||$.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let qn=q.get(L),qs=q.get($),Cn=q.get(qn.__renderTarget),gi=q.get(qs.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<Xt;_i++)Xs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,q.get(L).__webglTexture,nt,ue+_i),L.isDepthTexture?(Le&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,q.get($).__webglTexture,nt,Re+_i),I.blitFramebuffer(qt,ce,Rt,Bt,Yt,xe,Rt,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST)):Le?I.copyTexSubImage3D(Jt,nt,Yt,xe,Re+_i,qt,ce,Rt,Bt):I.copyTexSubImage2D(Jt,nt,Yt,xe,Re+_i,qt,ce,Rt,Bt);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Le?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(Jt,nt,Yt,xe,Re,Rt,Bt,Xt,fn,Me,Ie.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(Jt,nt,Yt,xe,Re,Rt,Bt,Xt,fn,Ie.data):I.texSubImage3D(Jt,nt,Yt,xe,Re,Rt,Bt,Xt,fn,Me,Ie):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,nt,Yt,xe,Rt,Bt,fn,Me,Ie.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,nt,Yt,xe,Ie.width,Ie.height,fn,Ie.data):I.texSubImage2D(I.TEXTURE_2D,nt,Yt,xe,Rt,Bt,fn,Me,Ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ji),I.pixelStorei(I.UNPACK_SKIP_IMAGES,En),nt===0&&$.generateMipmaps&&I.generateMipmap(Jt),Q.unbindTexture()},this.copyTextureToTexture3D=function(L,$,lt=null,ut=null,nt=0){return L.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ut=arguments[1]||null,L=arguments[2],$=arguments[3],nt=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,$,lt,ut,nt)},this.initRenderTarget=function(L){q.get(L).__webglFramebuffer===void 0&&R.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),Q.unbindTexture()},this.resetState=function(){M=0,T=0,w=null,Q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}},Eo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fr=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},pr=class extends hn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mr=class extends oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new le,au=new le,jr=[],cu=new pn,ex=new le,Ks=new It,js=new Jn,Ge=class extends It{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),cu.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),js.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),au.multiplyMatrices(n,fs),Ks.matrixWorld=au,Ks.raycast(t,jr);for(let o=0,a=jr.length;o<a;o++){let c=jr[o];c.instanceId=r,c.object=this,e.push(c)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(s*this.count),s,this.count,Ll,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},So=class extends di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bo=new N,wo=new N,lu=new le,Qs=new Vi,Qr=new Jn,tc=new N,hu=new N,To=class extends on{constructor(t=new pe,e=new So){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bo.fromBufferAttribute(e,s-1),wo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bo.distanceTo(wo);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;lu.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),v=h.getX(x+1),y=to(this,t,Qs,c,p,v);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=to(this,t,Qs,c,x,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=to(this,t,Qs,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=to(this,t,Qs,c,m-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};gn=class extends hn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,c=new le;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rl=class extends gr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};eo=new N,ec=new Hl,nc=new Hl,ic=new Hl,_r=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),l=eo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ec.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),nc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),ic.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),nc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ic.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ec.calc(c),nc.calc(c),ic.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ao=class extends Ln{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Ln{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends Ln{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Ln{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(uu(a,c.x,l.x,h.x,u.x),uu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:_r,CubicBezierCurve:Ao,CubicBezierCurve3:ol,EllipseCurve:gr,LineCurve:Ro,LineCurve3:al,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Po,SplineCurve:Io}),cl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lo[s.type]().fromJSON(s))}return this}},Do=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ro(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Co(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ao(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new gr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Uo=class i extends pe{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new N,d=new gt,f=new N,m=new N,x=new N,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let y=n+v*h*s,_=Math.sin(y),P=Math.cos(y);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*_,u.y=t[M].y,u.z=t[M].x*P,o.push(u.x,u.y,u.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);let T=c[3*M+0]*_,w=c[3*M+1],S=c[3*M+0]*P;l.push(T,w,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,P=_,M=_+t.length,T=_+t.length+1,w=_+1;r.push(P,M,w),r.push(T,w,M)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},No=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Se=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(){let _=new N,P=new N,M=0,T=(e-t)/n;for(let w=0;w<=r;w++){let S=[],E=w/r,A=E*(e-t)+t;for(let F=0;F<=s;F++){let D=F/s,O=D*c+a,k=Math.sin(O),U=Math.cos(O);P.x=A*k,P.y=-E*n+g,P.z=A*U,u.push(P.x,P.y,P.z),_.set(k,T,U).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-E),S.push(m++)}x.push(S)}for(let w=0;w<s;w++)for(let S=0;S<r;S++){let E=x[S][w],A=x[S+1][w],F=x[S+1][w+1],D=x[S][w+1];(t>0||S!==0)&&(h.push(E,A,D),M+=3),(e>0||S!==r-1)&&(h.push(A,F,D),M+=3)}l.addGroup(p,M,0),p+=M}function y(_){let P=m,M=new gt,T=new N,w=0,S=_===!0?t:e,E=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let A=m;for(let F=0;F<=s;F++){let O=F/s*c+a,k=Math.cos(O),U=Math.sin(O);T.x=S*U,T.y=g*E,T.z=S*k,u.push(T.x,T.y,T.z),d.push(0,E,0),M.x=k*.5+.5,M.y=U*.5*E+.5,f.push(M.x,M.y),m++}for(let F=0;F<s;F++){let D=P+F,O=A+F;_===!0?h.push(O,O+1,D):h.push(O+1,O,D),w+=3}l.addGroup(p,w,_===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class i extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ll=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new N,_=new N,P=new N;for(let M=0;M<e.length;M+=3)f(e[M+0],y),f(e[M+1],_),f(e[M+2],P),c(y,_,P,v)}function c(v,y,_,P){let M=P+1,T=[];for(let w=0;w<=M;w++){T[w]=[];let S=v.clone().lerp(_,w/M),E=y.clone().lerp(_,w/M),A=M-w;for(let F=0;F<=A;F++)F===0&&w===M?T[w][F]=S:T[w][F]=S.clone().lerp(E,F/A)}for(let w=0;w<M;w++)for(let S=0;S<2*(M-w)-1;S++){let E=Math.floor(S/2);S%2===0?(d(T[w][E+1]),d(T[w+1][E]),d(T[w][E])):(d(T[w][E+1]),d(T[w+1][E+1]),d(T[w+1][E]))}}function l(v){let y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new N;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(_,1-P)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],P=o[v+4],M=Math.max(y,_,P),T=Math.min(y,_,P);M>.9&&T<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){let v=new N,y=new N,_=new N,P=new N,M=new gt,T=new gt,w=new gt;for(let S=0,E=0;S<r.length;S+=9,E+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),M.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),w.set(o[E+4],o[E+5]),P.copy(v).add(y).add(_).divideScalar(3);let A=g(P);x(M,E+0,v,A),x(T,E+2,y,A),x(w,E+4,_,A)}}function x(v,y,_,P){P<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Gi=class extends Do{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Do().fromJSON(s))}return this}},lx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=px(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return xr(r,o,e,a,c,f,0),o}};ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fu(t),pu(n,t);let o=t.length;e.forEach(fu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,pu(n,e[c]);let a=lx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};Ps=class i extends pe{constructor(t=new Gi([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Tx,y,_=!1,P,M,T,w;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,P=p.computeFrenetFrames(h,!1),M=new N,T=new N,w=new N),d||(g=0,f=0,m=0,x=0);let S=a.extractPoints(l),E=S.shape,A=S.holes;if(!ci.isClockWise(E)){E=E.reverse();for(let W=0,X=A.length;W<X;W++){let I=A[W];ci.isClockWise(I)&&(A[W]=I.reverse())}}let D=ci.triangulateShape(E,A),O=E;for(let W=0,X=A.length;W<X;W++){let I=A[W];E=E.concat(I)}function k(W,X,I){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(X,I)}let U=E.length,B=D.length;function C(W,X,I){let ot,V,Z,Q=W.x-X.x,at=W.y-X.y,q=I.x-W.x,R=I.y-W.y,b=Q*Q+at*at,z=Q*R-at*q;if(Math.abs(z)>Number.EPSILON){let j=Math.sqrt(b),st=Math.sqrt(q*q+R*R),tt=X.x-at/j,pt=X.y+Q/j,ht=I.x-R/st,xt=I.y+q/st,At=((ht-tt)*R-(xt-pt)*q)/(Q*R-at*q);ot=tt+Q*At-W.x,V=pt+at*At-W.y;let vt=ot*ot+V*V;if(vt<=2)return new gt(ot,V);Z=Math.sqrt(vt/2)}else{let j=!1;Q>Number.EPSILON?q>Number.EPSILON&&(j=!0):Q<-Number.EPSILON?q<-Number.EPSILON&&(j=!0):Math.sign(at)===Math.sign(R)&&(j=!0),j?(ot=-at,V=Q,Z=Math.sqrt(b)):(ot=Q,V=at,Z=Math.sqrt(b/2))}return new gt(ot/Z,V/Z)}let H=[];for(let W=0,X=O.length,I=X-1,ot=W+1;W<X;W++,I++,ot++)I===X&&(I=0),ot===X&&(ot=0),H[W]=C(O[W],O[I],O[ot]);let G=[],J,ct=H.concat();for(let W=0,X=A.length;W<X;W++){let I=A[W];J=[];for(let ot=0,V=I.length,Z=V-1,Q=ot+1;ot<V;ot++,Z++,Q++)Z===V&&(Z=0),Q===V&&(Q=0),J[ot]=C(I[ot],I[Z],I[Q]);G.push(J),ct=ct.concat(J)}for(let W=0;W<g;W++){let X=W/g,I=f*Math.cos(X*Math.PI/2),ot=m*Math.sin(X*Math.PI/2)+x;for(let V=0,Z=O.length;V<Z;V++){let Q=k(O[V],H[V],ot);rt(Q.x,Q.y,-I)}for(let V=0,Z=A.length;V<Z;V++){let Q=A[V];J=G[V];for(let at=0,q=Q.length;at<q;at++){let R=k(Q[at],J[at],ot);rt(R.x,R.y,-I)}}}let dt=m+x;for(let W=0;W<U;W++){let X=d?k(E[W],ct[W],dt):E[W];_?(T.copy(P.normals[0]).multiplyScalar(X.x),M.copy(P.binormals[0]).multiplyScalar(X.y),w.copy(y[0]).add(T).add(M),rt(w.x,w.y,w.z)):rt(X.x,X.y,0)}for(let W=1;W<=h;W++)for(let X=0;X<U;X++){let I=d?k(E[X],ct[X],dt):E[X];_?(T.copy(P.normals[W]).multiplyScalar(I.x),M.copy(P.binormals[W]).multiplyScalar(I.y),w.copy(y[W]).add(T).add(M),rt(w.x,w.y,w.z)):rt(I.x,I.y,u/h*W)}for(let W=g-1;W>=0;W--){let X=W/g,I=f*Math.cos(X*Math.PI/2),ot=m*Math.sin(X*Math.PI/2)+x;for(let V=0,Z=O.length;V<Z;V++){let Q=k(O[V],H[V],ot);rt(Q.x,Q.y,u+I)}for(let V=0,Z=A.length;V<Z;V++){let Q=A[V];J=G[V];for(let at=0,q=Q.length;at<q;at++){let R=k(Q[at],J[at],ot);_?rt(R.x,R.y+y[h-1].y,y[h-1].x+I):rt(R.x,R.y,u+I)}}}Y(),et();function Y(){let W=s.length/3;if(d){let X=0,I=U*X;for(let ot=0;ot<B;ot++){let V=D[ot];Mt(V[2]+I,V[1]+I,V[0]+I)}X=h+g*2,I=U*X;for(let ot=0;ot<B;ot++){let V=D[ot];Mt(V[0]+I,V[1]+I,V[2]+I)}}else{for(let X=0;X<B;X++){let I=D[X];Mt(I[2],I[1],I[0])}for(let X=0;X<B;X++){let I=D[X];Mt(I[0]+U*h,I[1]+U*h,I[2]+U*h)}}n.addGroup(W,s.length/3-W,0)}function et(){let W=s.length/3,X=0;ft(O,X),X+=O.length;for(let I=0,ot=A.length;I<ot;I++){let V=A[I];ft(V,X),X+=V.length}n.addGroup(W,s.length/3-W,1)}function ft(W,X){let I=W.length;for(;--I>=0;){let ot=I,V=I-1;V<0&&(V=W.length-1);for(let Z=0,Q=h+g*2;Z<Q;Z++){let at=U*Z,q=U*(Z+1),R=X+ot+at,b=X+V+at,z=X+V+q,j=X+ot+q;_t(R,b,z,j)}}}function rt(W,X,I){c.push(W),c.push(X),c.push(I)}function Mt(W,X,I){it(W),it(X),it(I);let ot=s.length/3,V=v.generateTopUV(n,s,ot-3,ot-2,ot-1);St(V[0]),St(V[1]),St(V[2])}function _t(W,X,I,ot){it(W),it(X),it(ot),it(X),it(I),it(ot);let V=s.length/3,Z=v.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);St(Z[0]),St(Z[1]),St(Z[3]),St(Z[1]),St(Z[2]),St(Z[3])}function it(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function St(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ax(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lo[s.type]().fromJSON(s)),new i(n,t.options)}},Tx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-u),new gt(d,1-m),new gt(x,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(f,1-m),new gt(g,1-p)]}};Is=class i extends ll{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fo=class i extends pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new N,m=new gt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,_=v+n+1,P=v+n+2,M=v+1;a.push(y,_,M),a.push(_,P,M)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Dn=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){let M=P/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(M+_,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],_=h[p][v],P=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,M),(p!==n-1||c<Math.PI)&&f.push(_,P,M)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Xi=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Oo=class i extends pe{constructor(t=new Po(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new gt,h=new N,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);let _=o.normals[y],P=o.binormals[y];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,w=Math.sin(T),S=-Math.cos(T);c.x=S*_.x+w*P.x,c.y=S*_.y+w*P.y,c.z=S*_.z+w*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let P=(s+1)*(y-1)+(_-1),M=(s+1)*y+(_-1),T=(s+1)*y+_,w=(s+1)*(y-1)+_;m.push(P,M,w),m.push(M,T,w)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Lo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},wt=class extends di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mr=class extends di{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bo=class extends So{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dl=class extends Ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=t,a=2*e-n;break;case dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:o=t,c=2*n-e;break;case dh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[l+P]+y*o[c+P]+_*o[u+P];return r}},fl=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},pl=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=so(e,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:so(t.times,Array),values:so(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case Gc:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Rx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Gc;qi=class extends Gn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ho;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;ml=class extends Gn{};ml.prototype.ValueTypeName="color";gl=class extends Gn{};gl.prototype.ValueTypeName="number";_l=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},zo=class extends Gn{InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;Yi=class extends Gn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ho;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends Gn{};xl.prototype.ValueTypeName="vector";mu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},yl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Cx=new yl,Er=class{constructor(t){this.manager=t!==void 0?t:Cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";vl=class extends Er{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=mu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=lr("img");function c(){h(),mu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},Sr=class extends Er{constructor(t){super(t)}load(t,e,n,s){let r=new hn,o=new vl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ko=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ho=class extends ko{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sc=new le,gu=new N,_u=new N,Ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),_u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_u),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},El=class extends Ml{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new El}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Go=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Vl="\\[\\]\\.:\\/",Px=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",Ix="[^"+Vl.replace("\\.","")+"]",Lx=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Dx=/(WCOD+)?/.source.replace("WCOD",Ix),Ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Fx=new RegExp("^"+Lx+Dx+Ux+Nx+"$"),Ox=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(t){let e=Fx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ox.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Sl;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];_y=new Float32Array(1),yu=new le,Ds=class{constructor(t,e,n=0,s=1/0){this.ray=new Vi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,n=[]){return bl(t,this,n,e),n.sort(vu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bl(t[s],this,n,e);return n.sort(vu),n}};fi=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Wo=class extends hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl)});function zx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function kx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=we.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case Wn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case Wn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Xl)}function Gx(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wx(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qu))}function Xx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case _n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case _n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case _n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Xl)}function Yx(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function Zx(i){this.enabled!==!1&&i.preventDefault()}function $x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wu,Xl,qu,$o,Xu,Bx,Ze,xn,we,Wl,Jo,Yu=Be(()=>{Oe();Wu={type:"change"},Xl={type:"start"},qu={type:"end"},$o=new Vi,Xu=new kn,Bx=Math.cos(70*wr.DEG2RAD),Ze=new N,xn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wl=1e-6,Jo=class extends Wo{constructor(t,e=null){super(t,e),this.state=we.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:_n.ROTATE,TWO:_n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ke,this._lastTargetPosition=new N,this._quat=new ke().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fi,this._sphericalDelta=new fi,this._scale=1,this._panOffset=new N,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new N,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kx.bind(this),this._onPointerDown=zx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Zx.bind(this),this._onMouseWheel=Wx.bind(this),this._onKeyDown=Xx.bind(this),this._onTouchStart=qx.bind(this),this._onTouchMove=Yx.bind(this),this._onMouseDown=Vx.bind(this),this._onMouseMove=Gx.bind(this),this._interceptControlDown=$x.bind(this),this._interceptControlUp=Jx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wu),this.update(),this.state=we.NONE}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ze.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<Bx?this.object.lookAt(this.target):(Xu.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(Xu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wl||this._lastTargetPosition.distanceToSquared(this.target)>Wl?(this.dispatchEvent(Wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var Ko,Zu=Be(()=>{Oe();Yu();Ko=class extends Jo{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Wn.PAN,MIDDLE:Wn.DOLLY,RIGHT:Wn.ROTATE},this.touches={ONE:_n.PAN,TWO:_n.DOLLY_ROTATE}}}});var Fs,$u=Be(()=>{Oe();Fs=class i extends It{constructor(){let t=i.SkyShader,e=new mn({name:t.name,uniforms:zl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:je,depthWrite:!1});super(new Ve(1,1,1),e),this.isSky=!0}};Fs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
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

		}`}});function Un(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Ci(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function De(i,t){let e=Un(t),n=new Float32Array(i*i);for(let s=0;s<i*i;s++)n[s]=e();return(s,r)=>{s=(s%i+i)%i,r=(r%i+i)%i;let o=Math.floor(s),a=Math.floor(r),c=(o+1)%i,l=(a+1)%i,h=s-o,u=r-a,d=h*h*(3-2*h),f=u*u*(3-2*u),m=n[a*i+o],x=n[a*i+c],g=n[l*i+o],p=n[l*i+c];return(m*(1-d)+x*d)*(1-f)+(g*(1-d)+p*d)*f}}function yn(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let c=0;c<n;c++)s+=r*i(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}function Ku(i,t){return i.wrapS=i.wrapT=Vn,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Hn,i.magFilter=In,t&&(i.colorSpace=Ce),i.needsUpdate=!0,i}function Tr(i,t,e,n=!0){let s=new pr(i,t,e,wn);return Ku(s,n)}function jo(i,t=!0){return Ku(new gn(i),t)}function Qo(i,t,e,n=2){let s=new Uint8Array(t*e*4);for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=i[r*t+(o-1+t)%t],c=i[r*t+(o+1)%t],l=i[(r-1+e)%e*t+o],h=i[(r+1)%e*t+o],u=(a-c)*n,d=(h-l)*n,f=1,m=Math.hypot(u,d,f);u/=m,d/=m,f/=m;let x=(r*t+o)*4;s[x]=(u*.5+.5)*255,s[x+1]=(d*.5+.5)*255,s[x+2]=(f*.5+.5)*255,s[x+3]=255}return Tr(s,t,e,!1)}function Xn(i,t,e,n,s=!1){let r=new Uint8Array(i*t*4),o=new Float32Array(i*t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=e(c,a),h=(a*i+c)*4;r[h]=Math.max(0,Math.min(255,l[0])),r[h+1]=Math.max(0,Math.min(255,l[1])),r[h+2]=Math.max(0,Math.min(255,l[2])),r[h+3]=s?Math.max(0,Math.min(255,(l[4]??1)*255)):255,o[a*i+c]=l[3]||0}return{map:Tr(r,i,t,!0),normalMap:n?Qo(o,i,t,n):null}}function tn(i,t){return Ju[i]||(Ju[i]=t())}function ju(){return tn("cer",()=>{let i=un,t=Un(5),e=De(16,7),n=De(64,9),s=8,r=3,o=[];for(let a=0;a<s*r*4;a++)o.push(t());return Xn(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(l),d=Math.floor(h),f=l-u,m=h-d,x=u%2===1,g=Math.sin(Math.PI*f),p=x?.55+.45*g:.35-.3*g;p+=(1-m)*.35;let v=o[(d*s+u)%o.length],y=.8+.2*v;v>.95&&(y*=.78),v<.04&&(y*=1.12);let _=x?.86+.18*g:.74+.12*(1-g),P=m>.9?.6+(1-m)*4:1,M=yn(e,a/i*16,c/i*16,3),T=Math.max(0,yn(n,a/i*64*.25,c/i*64*.25,3)-.58)*2.2,w=255*y*_*P*(.92+.16*M),S=w*(.92-.05*v),E=w*(.88-.08*v);return w=w*(1-T)+T*70,S=S*(1-T)+T*68,E=E*(1-T)+T*58,[w,S,E,p]},3.5)})}function Qu(){return tn("fib",()=>{let i=un,t=De(32,11),e=De(16,13),n=De(128,15);return Xn(i,i,(s,r)=>{let o=s/i,a=r/i,c=Math.sin(o*12*Math.PI*2),l=.5+.5*c,h=a*2.2/1.22%1;h<.025&&(l+=.6);let d=o*2%1<.02?.9:1,f=yn(t,o*8,a*8,4),m=yn(e,o*40,a*3,3),x=n(o*128,a*128),g=228*(.86+.3*(f-.5))*(.94+.12*m)*(.97+.06*x)*(.92+.08*c)*d;return f<.34&&(g*=.88),h<.025&&(g*=.8),[g,g*.995,g*.97,l]},1.3)})}function td(){return tn("met",()=>{let i=un>>1,t=De(16,17),e=De(64,19);return Xn(i,i,(n,s)=>{let r=n/i*4,o=s/i,a=r-Math.floor(r),c=a<.12?a/.12:a<.3?1:a<.42?1-(a-.3)/.12:0;c+=.15*Math.sin(a*Math.PI*8)*(a>.45?1:0);let l=yn(t,n/i*4,s/i*6,3),h=e(n/i*64,s/i*8),u=225*(.86+.2*l)*(.95+.08*h)*(c>.9?1.04:.97),d=Math.max(0,l-.72)*3;return[u*(1-d*.25)+d*40,u*(1-d*.35)+d*14,u*(1-d*.5),c]},2)})}function ed(){return tn("slab",()=>{let i=un,t=De(16,21),e=De(128,23),n=De(8,25);return Xn(i,i,(s,r)=>{let o=s/i,a=r/i,c=yn(t,o*16,a*16,4),l=e(o*128,a*128),h=yn(n,o*8,a*8,2),u=200*(.8+.3*(c-.5))*(.93+.12*l);return h>.66&&(u*=.62),c<.32&&(u*=.8),[u,u*.98,u*.95,l*.3]},1)})}function nd(){return tn("fac",()=>{let i=Os?512:1024,t=Os?128:256,e=i/1024,[n,s]=Ci(i,t),[r,o]=Ci(i,t);s.scale(e,e),o.scale(e,e);let a=Un(77);s.fillStyle="#f4f2ee",s.fillRect(0,0,1024,256),o.fillStyle="#fff",o.fillRect(0,0,1024,256);for(let y=0;y<9e3;y++){let _=225+a()*30;s.fillStyle=`rgba(${_},${_},${_-3},0.35)`,s.fillRect(a()*1024,a()*256,1+a()*3,1+a()*3)}let c=s.createLinearGradient(0,200,0,256);c.addColorStop(0,"rgba(120,105,85,0)"),c.addColorStop(1,"rgba(110,95,75,0.35)"),s.fillStyle=c,s.fillRect(0,200,1024,56),s.fillStyle="rgba(150,145,138,0.55)",s.fillRect(0,232,1024,24);let l=y=>{y(s,!1),y(o,!0)},h=(y,_,P,M,T,w,S)=>{y.fillStyle=S?"#000":_,y.fillRect(P,M,T,w)},u=(y,_,P,M)=>l((T,w)=>{if(h(T,"#e9e7e2",y-7,_-7,P+14,M+14,w),h(T,"#2a3036",y,_,P,M,w),!w){let S=T.createLinearGradient(y,_,y+P,_+M);S.addColorStop(0,"rgba(170,195,215,0.55)"),S.addColorStop(.5,"rgba(60,75,90,0.2)"),S.addColorStop(1,"rgba(150,175,195,0.45)"),T.fillStyle=S,T.fillRect(y+3,_+3,P-6,M-6),T.fillStyle="#c9ccce",T.fillRect(y+P/2-2,_,4,M),T.fillRect(y,_+M*.42,P,3),T.strokeStyle="rgba(25,25,25,0.85)",T.lineWidth=2.2;for(let E=y+8;E<y+P;E+=11)T.beginPath(),T.moveTo(E,_),T.lineTo(E,_+M),T.stroke();T.beginPath(),T.moveTo(y,_+M/2),T.lineTo(y+P,_+M/2),T.stroke(),T.fillStyle="#d8d6d0",T.fillRect(y-12,_+M+6,P+24,7),T.fillStyle="rgba(80,70,60,0.18)",T.fillRect(y-6,_+M+13,P+12,26)}}),d=(y,_,P,M,T)=>l((w,S)=>{if(h(w,"#ecebe6",y-7,_-7,P+14,M+14,S),!S){w.fillStyle=T,w.fillRect(y,_,P,M),w.fillStyle="rgba(0,0,0,0.25)";for(let E=_+4;E<_+M;E+=6)w.fillRect(y+2,E,P-4,2);w.fillStyle="rgba(0,0,0,0.4)",w.fillRect(y+P/2-1.5,_,3,M),w.fillStyle="#d8d6d0",w.fillRect(y-12,_+M+6,P+24,7)}}),f=(y,_,P,M)=>l((T,w)=>{if(h(T,"#e9e7e2",y-5,_-5,P+10,M+10,w),h(T,"#3a4148",y,_,P,M,w),!w){T.fillStyle="rgba(200,210,215,0.7)";for(let S=_+3;S<_+M-2;S+=8)T.fillRect(y+3,S,P-6,5)}}),m=(y,_,P,M)=>l((T,w)=>{if(h(T,"#e4e2dc",y-8,54,_+16,202,w),!w){if(T.fillStyle=P,T.fillRect(y,62,_,194),M===0)T.fillStyle="rgba(0,0,0,0.22)",T.fillRect(y+8,74,_-16,194*.38),T.fillRect(y+8,62+194*.5,_-16,194*.42);else{T.fillStyle="rgba(255,255,255,0.18)";for(let A=68;A<256;A+=10)T.fillRect(y+3,A,_-6,4)}T.fillStyle="#caa64a",T.fillRect(y+_-14,62+194*.52,5,10)}});u(64,70,128,104),m(300,84,["#6b4a2e","#7c5a3a","#4a5560","#8a8d90"][Math.floor(a()*4)],0),f(430,70,52,40),d(576,70,120,104,"#7a5a3c"),u(832,78,112,96);for(let y=0;y<40;y++){let _=a()*1024;s.fillStyle=`rgba(90,80,70,${.04+a()*.06})`,s.fillRect(_,190+a()*20,2+a()*4,30+a()*40)}let x=s.getImageData(0,0,i,t).data,g=o.getImageData(0,0,i,t).data,p=new Uint8Array(i*t*4);for(let y=0;y<i*t;y++)p[y*4]=x[y*4],p[y*4+1]=x[y*4+1],p[y*4+2]=x[y*4+2],p[y*4+3]=g[y*4];let v=new Uint8Array(i*t*4);for(let y=0;y<t;y++)v.set(p.subarray((t-1-y)*i*4,(t-y)*i*4),y*i*4);return Tr(v,i,t,!0)})}function ta(){return tn("wall",()=>{let i=un,t=un>>2,e=De(64,31),n=De(16,33),s=new Uint8Array(i*t*4),r=new Float32Array(i*t);for(let o=0;o<t;o++)for(let a=0;a<i;a++){let c=a/i,l=o/t,h=e(c*64*3,l*64*.5*2),u=yn(n,c*16,l*4,3),d=235*(.9+.12*h)*(.88+.2*u),f=1;l<.12&&(d*=.82+l),l>.93&&(d*=.92);let m=(o*i+a)*4;s[m]=d,s[m+1]=d,s[m+2]=d*.98,s[m+3]=255*f,r[o*i+a]=h*.6}return{map:Tr(s,i,t,!0),normalMap:Qo(r,i,t,1.5)}})}function id(){return tn("brick",()=>{let i=un,t=Un(41),e=De(64,43),n=i/6,s=i/16,r=[];for(let o=0;o<200;o++)r.push(t());return Xn(i,i,(o,a)=>{let c=Math.floor(a/s),l=c%2*n/2,h=Math.floor((o+l)/n),u=(o+l)%n/n,d=a%s/s,f=u<.05||d<.12,m=r[(c*7+h*13)%200],x=e(o/i*64,a/i*64);if(f)return[175+x*20,165+x*20,150+x*20,0,0];let g=.75+.3*m;return[196*g*(.9+.15*x),104*g*(.9+.15*x),66*g*(.9+.15*x),1,0]},2,!0)})}function Bs(){return tn("asph",()=>{let i=un,t=De(256,51),e=De(16,53),n=De(8,55);return Xn(i,i,(s,r)=>{let o=s/i,a=r/i,c=t(o*256,a*256),l=yn(e,o*16,a*16,4),h=yn(n,o*8,a*8,2),u=72*(.84+.32*c)*(.92+.16*l);h>.7&&(u*=.92),h<.22&&(u*=1.05);let d=Math.abs(o*8/3.5%1-.5);return u*=1-.06*Math.exp(-Math.pow((d-.22)/.06,2)),c>.93&&(u*=1.6),[u,u,u*1.02,c*.5]},1.6)})}function sd(){return tn("pav",()=>{let i=un,t=Un(61),e=De(128,63),n=De(16,65),s=12,r=20,o=[];for(let a=0;a<s*r*2;a++)o.push([t(),t(),t()]);return Xn(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(h),d=l+u%2*.5+o[u*s%o.length][2]*.3,f=Math.floor(d),m=d-f,x=h-u,g=Math.min(m,1-m)/.5,p=Math.min(x,1-x)/.5,v=Math.min(g*2.2,p*1.4,1),y=Math.sqrt(Math.max(0,v)),_=o[(u*s+f%s)%o.length],P=e(a/i*128,c/i*128),M=yn(n,a/i*16,c/i*16,3);if(v<.18){let S=.55+.3*M;return[92*S+20,84*S+18,70*S+12,0]}let T=(.68+.36*_[0])*(.85+.25*P)*(.85+.25*M),w=_[1];return[150*T+(w>.8?18:0),142*T+(w>.8?8:0),132*T,y*.9+P*.1]},3.2)})}function rd(){return tn("dirt",()=>{let i=un,t=De(128,71),e=De(16,73),n=Un(75),s=[];for(let o=0;o<500;o++)s.push([n()*i,n()*i,1+n()*2.5,n()]);return Xn(i,i,(o,a)=>{let c=o/i,l=a/i,h=t(c*128,l*128),u=yn(e,c*16,l*16,4),d=Math.abs(c*6/3%1-.5),f=Math.exp(-Math.pow((d-.25)/.07,2)),m=(.8+.3*u)*(.9+.2*h);return m*=1-.1*f,[184*m,154*m,120*m,h*.5+u*.8-f*.4]},2.5)})}function zs(){return tn("side",()=>{let i=un,t=De(128,81),e=De(8,83),n=Un(85),s=[];for(let r=0;r<64;r++)s.push(n());return Xn(i,i,(r,o)=>{let a=r/i*2,c=o/i*2,l=a%1,h=c%1,u=l<.012||h<.012||l>.988||h>.988,d=(Math.floor(a)+Math.floor(c)*2)%64,f=t(r/i*128,o/i*128),m=yn(e,r/i*8,o/i*8,3),x=192*(.93+.07*s[d])*(.92+.1*f)*(.88+.2*m);return u&&(x*=.78),[x,x*.975,x*.94,u?0:.4+f*.2]},1.6)})}function ea(){return tn("gd",()=>{let i=un,t=Un(91),[e,n]=Ci(i,i);n.fillStyle="rgb(118,118,118)",n.fillRect(0,0,i,i);let s=i/512;for(let u=0;u<26e3*s*s;u++){let d=60+t()*140;n.strokeStyle=`rgba(${d},${d},${d},0.55)`,n.lineWidth=.8+t()*1.2;let f=t()*i,m=t()*i,x=t()*Math.PI*2,g=(2+t()*5)*s;n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(x)*g,m+Math.sin(x)*g),n.stroke()}let r=n.getImageData(0,0,i,i).data,[o,a]=Ci(i,i);a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,i,i);for(let u=0;u<9e3*s*s;u++){let d=70+t()*130;a.fillStyle=`rgba(${d},${d},${d},${.4+t()*.5})`,a.beginPath(),a.ellipse(t()*i,t()*i,(.6+t()*2.2)*s,(.5+t()*1.8)*s,t()*3,0,7),a.fill()}let c=a.getImageData(0,0,i,i).data,l=new Uint8Array(i*i*4),h=new Float32Array(i*i);for(let u=0;u<i*i;u++)l[u*4]=r[u*4],l[u*4+1]=c[u*4],l[u*4+2]=128,l[u*4+3]=255,h[u]=(r[u*4]*.5+c[u*4]*.5)/255;return{map:Tr(l,i,i,!1),normalMap:Qo(h,i,i,2.5)}})}function ql(i=0){return tn("leaf"+i,()=>{let t=Os?128:256,[e,n]=Ci(t,t),s=Un(101+i);n.clearRect(0,0,t,t);let r=i===1?520:700,o=t/256;n.fillStyle=i===1?"rgb(130,150,70)":"rgb(170,195,140)",n.beginPath(),n.arc(t/2,t/2,9*o,0,7),n.fill();for(let c=0;c<r;c++){let l=s()*Math.PI*2,h=Math.pow(s(),.6)*t*.46,u=t/2+Math.cos(l)*h,d=t/2+Math.sin(l)*h,f=s(),m=i===1?[120+f*60,140+f*60,60+f*30]:[150+f*80,175+f*70,120+f*60];n.fillStyle=`rgb(${m[0]|0},${m[1]|0},${m[2]|0})`,n.save(),n.translate(u,d),n.rotate(s()*Math.PI*2),n.beginPath(),n.ellipse(0,0,(i===1?7:6)*o*(.7+s()*.6),(i===1?3.2:3)*o*(.7+s()*.5),0,0,7),n.fill(),n.restore()}let a=jo(e,!0);return a.wrapS=a.wrapT=Zn,a})}function Yl(){return tn("frond",()=>{let i=Os?64:128,t=Os?256:512,[e,n]=Ci(i,t);n.clearRect(0,0,i,t);let s=Un(111);n.strokeStyle="#7a8a4a",n.lineWidth=3*i/128,n.beginPath(),n.moveTo(i/2,0),n.lineTo(i/2,t),n.stroke();for(let o=6;o<t;o+=5*t/512){let a=i*.48*Math.sin(Math.min(1,o/t*1.15)*Math.PI*.95+.15);for(let c of[-1,1]){let l=s();n.strokeStyle=`rgb(${70+l*40|0},${110+l*45|0},${40+l*25|0})`,n.lineWidth=(2.4+s())*i/128,n.beginPath(),n.moveTo(i/2,o),n.quadraticCurveTo(i/2+c*a*.5,o+6*t/512,i/2+c*a,o+16*t/512+s()*6),n.stroke()}}let r=jo(e,!0);return r.wrapS=r.wrapT=Zn,r})}function na(){return tn("ta",()=>{let i=un,t=De(64,121),e=Un(123),n=[];for(let s=0;s<32;s++)n.push(e());return Xn(i,i,(s,r)=>{let o=s/i*2,a=r/i*2,c=Math.floor(a),l=o+c%2*.5,h=Math.floor(l),u=l-h,d=a-c,f=u<.015||d<.015,m=n[(c*5+h*3)%32],x=t(s/i*64,r/i*64),g=f?.72:(.9+.07*m)*(.95+.06*x);return[205*g,192*g,170*g,f?0:.6+.1*x]},2)})}function ks(){return tn("conc",()=>{let i=un,t=De(128,131),e=De(8,133);return Xn(i,i,(n,s)=>{let r=n/i,o=s/i,a=t(r*128,o*128),c=yn(e,r*8,o*8,3),l=r<.004||o<.006,h=200*(.94+.06*a)*(.93+.1*c);return l&&(h*=.88),[h,h*.985,h*.96,a*.3+(l?-.4:0)]},1)})}function od(){return tn("bal",()=>{let i=un,t=Un(141),[e,n]=Ci(i,i);n.fillStyle="#5b5650",n.fillRect(0,0,i,i);let s=i/512;for(let a=0;a<14e3*s*s;a++){let c=70+t()*110;n.fillStyle=`rgb(${c+8|0},${c|0},${c-8|0})`,n.beginPath(),n.ellipse(t()*i,t()*i,(1.5+t()*3)*s,(1.2+t()*2.5)*s,t()*3,0,7),n.fill()}let r=n.getImageData(0,0,i,i).data,o=new Float32Array(i*i);for(let a=0;a<i*i;a++)o[a]=r[a*4]/255;return{map:jo(e,!0),normalMap:Qo(o,i,i,3)}})}function ad(){return tn("gate",()=>{let[e,n]=Ci(256,256);n.clearRect(0,0,256,256),n.fillStyle="#fff",n.fillRect(0,128,256,10),n.fillRect(0,246,256,10),n.fillRect(0,186,256,5);for(let r=0;r<256;r+=12)n.fillRect(r,128,4,128);n.fillRect(0,128,6,128),n.fillRect(256/2-3,128,6,128),n.fillStyle="#f0f0f0",n.fillRect(0,0,256,128),n.fillStyle="rgba(0,0,0,0.18)";for(let r=4;r<128;r+=8)n.fillRect(0,r,256,2);n.clearRect(0,6,256,18),n.fillStyle="#fff";for(let r=0;r<256;r+=10)n.fillRect(r,6,3,18);n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(256/2-1,0,2,128);let s=jo(e,!0);return s.flipY=!0,s})}var Os,un,Ju,pi=Be(()=>{Oe();Os=(()=>{try{let i=new URLSearchParams(location.search).get("q")||localStorage.getItem("aimores3d_q");return i==="low"||i==="medium"||!i&&(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700)}catch{return!1}})(),un=Os?256:512;Ju={}});function sa(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}function cd(i,t,e){let n=i.GW,s=i.GH,r=new Float32Array(n*s*3),o=new Float32Array(n*s*2);for(let M=0;M<s;M++)for(let T=0;T<n;T++){let w=M*n+T,S=i.XMIN+T*i.G,E=i.ZMIN+M*i.G;r[w*3]=S,r[w*3+1]=i.raw(M,T),r[w*3+2]=E,o[w*2]=(S-i.XMIN)/(i.XMAX-i.XMIN),o[w*2+1]=1-(E-i.ZMIN)/(i.ZMAX-i.ZMIN)}let a=new Uint32Array((n-1)*(s-1)*6),c=0;for(let M=0;M<s-1;M++)for(let T=0;T<n-1;T++){let w=M*n+T,S=w+1,E=w+n,A=E+1;a[c++]=w,a[c++]=E,a[c++]=S,a[c++]=S,a[c++]=E,a[c++]=A}let l=new pe;l.setAttribute("position",new oe(r,3)),l.setAttribute("uv",new oe(o,2)),l.setIndex(new oe(a,1)),l.computeVertexNormals();let h=new Float32Array(n*s*2);for(let M=0;M<n*s;M++)h[M*2]=r[M*3]/3.5,h[M*2+1]=r[M*3+2]/3.5;l.setAttribute("uv1",new oe(h,2));let u=ea();u.normalMap.channel=1;let d=new wt({map:t,roughness:.97,metalness:0,normalMap:e==="low"?null:u.normalMap,normalScale:new gt(.9,.9)});e!=="low"&&(d.onBeforeCompile=M=>{M.uniforms.gDetail={value:u.map},M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
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
      diffuseColor.rgb*=mix(vec3(1.0+0.10*hp,1.0+0.04*hp,1.0-0.12*hp), vec3(1.0+0.06*hp,1.0-0.02*hp,1.0-0.06*hp), 1.0-veg);`)});let f=new It(l,d);f.receiveShadow=!0,f.name="terrain";let m=[],x=M=>{for(let T=0;T<M.length-1;T++){let[w,S]=M[T],[E,A]=M[T+1],F=i.at(w,S),D=i.at(E,A);m.push(w,F,S,E,D,A,w,F-60,S,E,D,A,E,D-60,A,w,F-60,S)}},g=[];for(let M=0;M<n;M++)g.push([i.XMIN+M*i.G,i.ZMIN]);x(g);let p=[];for(let M=n-1;M>=0;M--)p.push([i.XMIN+M*i.G,i.ZMIN+(s-1)*i.G]);x(p);let v=[];for(let M=s-1;M>=0;M--)v.push([i.XMIN,i.ZMIN+M*i.G]);x(v);let y=[];for(let M=0;M<s;M++)y.push([i.XMIN+(n-1)*i.G,i.ZMIN+M*i.G]);x(y);let _=new pe;_.setAttribute("position",new Zt(m,3)),_.computeVertexNormals();let P=new It(_,new wt({color:5662010,roughness:1,side:$t}));return f.add(P),f}function ld(i,t,e,n,s=!1){let r=new Uint16Array(t),o=i.BG,a=i.BR,c=2*a/(o-1),l=(A,F)=>(A=Math.max(0,Math.min(o-1,A)),F=Math.max(0,Math.min(o-1,F)),i.HB+r[A*o+F]/10),h=(A,F)=>{let D=(A+a)/c,O=(F+a)/c,k=Math.floor(D),U=Math.floor(O),B=D-k,C=O-U;return(l(U,k)*(1-B)+l(U,k+1)*B)*(1-C)+(l(U+1,k)*(1-B)+l(U+1,k+1)*B)*C},u=(A,F,D)=>{let O=Math.max(e.XMIN,Math.min(e.XMAX,A)),k=Math.max(e.ZMIN,Math.min(e.ZMAX,F)),U=Math.hypot(A-O,F-k);if(U<.5)return e.at(O,k)-6;let B=Math.min(1,U/700),C=B*B*(3-2*B);return(e.at(O,k)-.6)*(1-C)+D*C},d=new fe;d.name="backdrop";let f=3600,m=s?91:181,x=[],g=[];for(let A=0;A<m;A++)for(let F=0;F<m;F++){let D=-f+F*2*f/(m-1),O=-f+A*2*f/(m-1);x.push(D,u(D,O,h(D,O)),O),g.push((D+f)/(2*f),1-(O+f)/(2*f))}let p=[];for(let A=0;A<m-1;A++)for(let F=0;F<m-1;F++){let D=A*m+F;p.push(D,D+m,D+1,D+1,D+m,D+m+1)}let v=new pe;v.setAttribute("position",new Zt(x,3)),v.setAttribute("uv",new Zt(g,2)),v.setIndex(p),v.computeVertexNormals();let y=new It(v,new wt({map:n,roughness:1}));y.receiveShadow=!0,d.add(y);let _=[],P=[],M=new Kt;for(let A=0;A<o;A++)for(let F=0;F<o;F++){let D=-a+F*c,O=-a+A*c,k=l(A,F);Math.abs(D)<f-50&&Math.abs(O)<f-50&&(k-=60),_.push(D,k,O)}let T=[],w=s?2:1;for(let A=0;A<o-w;A+=w)for(let F=0;F<o-w;F+=w){let D=A*o+F,O=w*o;T.push(D,D+O,D+w,D+w,D+O,D+O+w)}let S=new pe;S.setAttribute("position",new Zt(_,3)),S.setIndex(T),S.computeVertexNormals();let E=S.attributes.normal;for(let A=0;A<_.length/3;A++){let D=1-E.getY(A),O=Math.min(1,Math.max(0,(D-.3)*3)),k=Math.random()*.04;M.setRGB(.2+k,.27+k,.13),M.lerp(new Kt(.36,.33,.28),O*.8),P.push(M.r,M.g,M.b)}return S.setAttribute("color",new Zt(P,3)),d.add(new It(S,new wt({vertexColors:!0,roughness:1}))),d}var ia,hd=Be(()=>{Oe();pi();ia=class{constructor(t,e){Object.assign(this,t),this.a=new Uint16Array(e)}raw(t,e){return t=Math.max(0,Math.min(this.GH-1,t)),e=Math.max(0,Math.min(this.GW-1,e)),this.HB+this.a[t*this.GW+e]/100}at(t,e){let n=(t-this.XMIN)/this.G,s=(e-this.ZMIN)/this.G,r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=this.raw(o,r),h=this.raw(o,r+1),u=this.raw(o+1,r),d=this.raw(o+1,r+1);return a+c<=1?l+(h-l)*a+(u-l)*c:d+(u-d)*(1-a)+(h-d)*(1-c)}}});function Tt(i,t,e){let n=new Kt;return n.setRGB(i/255,t/255,e/255,Ce),[n.r,n.g,n.b]}function Wt(i){let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function ra(i){let t=null;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=s[0]-n[0],o=s[1]-n[1],a=Math.hypot(r,o);if(a<.01)continue;r/=a,o/=a;let c=-o,l=r,h=1e9,u=-1e9,d=1e9,f=-1e9;for(let x of i){let g=x[0]*r+x[1]*o,p=x[0]*c+x[1]*l;h=Math.min(h,g),u=Math.max(u,g),d=Math.min(d,p),f=Math.max(f,p)}let m=(u-h)*(f-d);if(!t||m<t.area){let x=(h+u)/2,g=(d+f)/2;t={area:m,cx:x*r+g*c,cz:x*o+g*l,ux:r,uz:o,a:(u-h)/2,b:(f-d)/2}}}if(t.a<t.b){let e=t.a;t.a=t.b,t.b=e;let n=t.ux;t.ux=-t.uz,t.uz=n}return t}function Zl(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}var Qt,Kn=Be(()=>{Oe();Qt=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,c,l){let h,u,d;if(c)[h,u,d]=c;else{let f=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],m=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];h=f[1]*m[2]-f[2]*m[1],u=f[2]*m[0]-f[0]*m[2],d=f[0]*m[1]-f[1]*m[0];let x=Math.hypot(h,u,d)||1;h/=x,u/=x,d/=x}if(this.p.push(...t,...e,...n),this.n.push(h,u,d,h,u,d,h,u,d),this.u.push(...s,...r,...o),l)this.c.push(...l[0],...l[1],...l[2]);else{let f=a||[1,1,1];this.c.push(...f,...f,...f)}}quad(t,e,n,s,r,o,a,c,l,h,u){this.tri(t,e,n,r,o,a,l,h,u?[u[0],u[1],u[2]]:null),this.tri(t,n,s,r,a,c,l,h,u?[u[0],u[2],u[3]]:null)}geometry(){let t=new pe;return t.setAttribute("position",new Zt(this.p,3)),t.setAttribute("normal",new Zt(this.n,3)),t.setAttribute("uv",new Zt(this.u,2)),t.setAttribute("color",new Zt(this.c,3)),t.computeBoundingSphere(),t}get count(){return this.p.length/9}}});function oa(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function aa(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Kx(i,t,e,n,s,r,o=1){let a=i.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(r()-.5)*s;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let m=((l+d)*t+(h+f))*4;c[m]=n[0]+u,c[m+1]=n[1]+u,c[m+2]=n[2]+u,c[m+3]=255}}i.putImageData(a,0,0)}function ca(i,t=!0,e=!0){let n=new gn(i);return t&&(n.wrapS=n.wrapT=Vn),n.anisotropy=8,e&&(n.colorSpace=Ce),n.generateMipmaps=!0,n.minFilter=Hn,n}function ud(){let[i,t]=aa(256,256),e=oa(9);Kx(t,256,256,[196,192,184],16,e),t.strokeStyle="rgba(110,105,98,0.55)",t.lineWidth=2;for(let n=0;n<=256;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,256),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();for(let n=0;n<60;n++)t.fillStyle=`rgba(90,85,80,${e()*.08})`,t.fillRect(e()*256,e()*256,10+e()*30,10+e()*30);return ca(i)}function dd(){let[t,e]=aa(512,512),n=oa(21);e.fillStyle="#8f8a86",e.fillRect(0,0,512,512);let s=16;e.save(),e.translate(512/2,512/2),e.rotate(Math.PI/4),e.translate(-512,-512);for(let r=-2;r<2*512/s+2;r++)for(let o=-2;o<2*512/s+2;o++){let a=n()*22-11,c=n()<.5?6:0;e.fillStyle=`rgb(${176+a+c|0},${168+a|0},${162+a-c/2|0})`;let l=r*s,h=o*s;(r+o)%2===0?e.fillRect(l+1,h+1,2*s-2,s-2):e.fillRect(l+1,h+1,s-2,2*s-2)}return e.restore(),ca(t)}function $l(){let[i,t]=aa(128,128),e=oa(41);t.fillStyle="#fff",t.fillRect(0,0,128,128);for(let n=0;n<800;n++){let s=220+e()*35;t.fillStyle=`rgba(${s},${s},${s},0.6)`,t.fillRect(e()*128,e()*128,2,2)}return t.fillStyle="rgba(140,140,140,0.3)",t.fillRect(0,116,128,12),ca(i)}function fd(){let[i,t]=aa(256,256),e=oa(51);t.fillStyle="#fff",t.fillRect(0,0,256,256);let n=8,s=10;for(let r=0;r<n;r++){for(let o=0;o<s;o++){let a=.82+e()*.18,c=Math.floor(255*a),l=o*256/s,h=r*256/n,u=t.createLinearGradient(l,0,l+256/s,0);u.addColorStop(0,`rgb(${c*.78|0},${c*.78|0},${c*.78|0})`),u.addColorStop(.5,`rgb(${c},${c},${c})`),u.addColorStop(1,`rgb(${c*.72|0},${c*.72|0},${c*.72|0})`),t.fillStyle=u,t.fillRect(l,h,256/s,256/n)}t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(0,(r+1)*256/n-4,256,4)}for(let r=0;r<40;r++)t.fillStyle=`rgba(40,30,20,${e()*.12})`,t.fillRect(e()*256,e()*256,20+e()*40,10+e()*20);return ca(i)}var Jl=Be(()=>{Oe()});function jx(i){let t=Kl.reduce((e,n)=>e+n,0)*i;for(let e=0;e<Kl.length;e++)if(t-=Kl[e],t<=0)return pd[e];return pd[0]}function ha(i){let t=new wt(i);return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#if defined( USE_COLOR ) && defined( USE_MAP )
    diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
  #elif defined( USE_COLOR )
    diffuseColor.rgb *= vColor.rgb;
  #endif
  diffuseColor.a = 1.0;`)},t.customProgramCacheKey=()=>"paintmask",t}function Qx(i){let[t,e,n]=i.rc,s=.3*t+.59*e+.11*n;if(i.rm==="ceramic"){let o=$i(165/Math.max(60,s),.75,1.35),a=[t*o,e*o*.97,n*o*.92],c=(a[0]+a[1]+a[2])/3;return a=a.map(h=>c+(h-c)*.9),Wt(i.p[0][0]*3.3+i.p[0][1])<.25&&(a=a.map(h=>h*.82)),Tt($i(a[0]*1.18,0,255),$i(a[1]*1.12,0,255),$i(a[2]*1.1,0,255))}if(i.rm==="fiber"){let o=$i(s*1.05,170,225);return Tt(o,o*.99,o*.97)}if(i.rm==="metal"){let o=$i(s*1,185,250),a=Wt(i.p[0][1]*1.7);return a<.06?Tt(120,150,175):a<.09?Tt(170,70,60):Tt(o,o,o*1.01)}let r=$i(s*1.02,140,225);return Tt(r,r*.985,r*.96)}function md(i,t,e,n,s){let r=new Qt,o=new Qt,a=new Qt,c=new Qt,l=new Qt,h=new Qt,u=new Qt,d=[],f=[],m=[],x=Math.tan(24*Math.PI/180),g=Math.tan(12*Math.PI/180),p=Math.tan(8*Math.PI/180),v=s==="low";for(let D=0;D<i.buildings.length;D++){let O=i.buildings[D];if(n&&n(O))continue;let k=O.p.slice();Zl(k)<0&&k.reverse();let U=1e9,B=-1e9;for(let[at,q]of k){let R=t.at(at,q);U=Math.min(U,R),B=Math.max(B,R)}let C=B+O.h,H=U-.5,G=Math.abs(Zl(k)),J=O.osm&&/Esta|train/i.test(O.osm),ct=J?[250,250,246]:jx(O.hv),dt=Tt(...ct),Y=G>=450||O.r==="shed"||O.rm==="metal"&&G>220,et=!Y&&G>=30||J?r:o,ft=Math.floor(Wt(D*1.37)*4),rt=dt.map(at=>at*.62),Mt=Math.min(C,B+1.3);for(let at=0;at<k.length;at++){let[q,R]=k[at],[b,z]=k[(at+1)%k.length],j=Math.hypot(b-q,z-R);if(j<.05)continue;let st=j/3.2,tt=(H-B)/3,pt=(Mt-B)/3,ht=O.h/3;et.quad([q,H,R],[q,Mt,R],[b,Mt,z],[b,H,z],[ft,tt],[ft,pt],[ft+st,pt],[ft+st,tt],rt,null,[rt,dt,dt,rt]),et.quad([q,Mt,R],[q,C,R],[b,C,z],[b,Mt,z],[ft,pt],[ft,ht],[ft+st,ht],[ft+st,pt],dt),ft+=st}let _t=Qx(O),it=ra(k),St=it.ux,W=it.uz,X=-W,I=St,ot=(at,q,R)=>[it.cx+St*at+X*q,R,it.cz+W*at+I*q],V=(at,q,R,b)=>{u.quad([at[0],at[1]-R,at[2]],[q[0],q[1]-R,q[2]],q,at,[0,0],[1,0],[1,1],[0,1],b)},Z=Wt(D*7.7)<.6?Tt(236,234,228):Tt(120,86,60),Q=O.rm;if(Q==="ceramic"&&O.r==="flat"&&G>300&&(Q="fiber"),Q==="ceramic"){let q=it.a+.55,R=it.b+.55,b=1.2;if(O.r==="gable"||G>500||it.a>2.6*it.b){let z=C+R*x*.85,j=ot(-q,-R,C),st=ot(q,-R,C),tt=ot(q,R,C),pt=ot(-q,R,C),ht=ot(-q,0,z),xt=ot(q,0,z),At=Math.hypot(R,z-C);a.quad(j,ht,xt,st,[0,0],[0,At/b],[2*q/b,At/b],[2*q/b,0],_t),a.quad(tt,xt,ht,pt,[0,0],[0,At/b],[2*q/b,At/b],[2*q/b,0],_t),o.tri(ot(-it.a,-it.b,C),ot(-it.a,it.b,C),ot(-it.a,0,z-.55*x*.85),[0,0],[1,0],[.5,1],dt),o.tri(ot(it.a,it.b,C),ot(it.a,-it.b,C),ot(it.a,0,z-.55*x*.85),[0,0],[1,0],[.5,1],dt),V(j,st,.2,Z),V(tt,pt,.2,Z),Ji(a,ht,xt,_t)}else{let z=C+R*x,j=Math.max(0,q-R),st=ot(-q,-R,C),tt=ot(q,-R,C),pt=ot(q,R,C),ht=ot(-q,R,C),xt=ot(-j,0,z),At=ot(j,0,z),vt=Math.hypot(R,z-C);a.quad(st,xt,At,tt,[0,0],[(q-j)/b,vt/b],[(q+j)/b,vt/b],[2*q/b,0],_t),a.quad(pt,At,xt,ht,[0,0],[(q-j)/b,vt/b],[(q+j)/b,vt/b],[2*q/b,0],_t),a.tri(ht,xt,st,[0,0],[R/b,vt/b],[2*R/b,0],_t),a.tri(tt,At,pt,[0,0],[R/b,vt/b],[2*R/b,0],_t),V(st,tt,.2,Z),V(tt,pt,.2,Z),V(pt,ht,.2,Z),V(ht,st,.2,Z),j>.2&&Ji(a,xt,At,_t),Ji(a,xt,st,_t,.08),Ji(a,xt,ht,_t,.08),Ji(a,At,tt,_t,.08),Ji(a,At,pt,_t,.08)}h.quad(ot(-q,-R,C-.03),ot(q,-R,C-.03),ot(q,R,C-.03),ot(-q,R,C-.03),[0,0],[0,0],[0,0],[0,0],Tt(150,140,128))}else if(Q==="fiber"||Q==="metal"){let at=Q==="metal"?.3:.4,q=it.a+at,R=it.b+at,b=Q==="metal"?l:c,z=Q==="metal"?1:2.2,j=it.a*it.b*4<G*1.3;if(Q==="metal"&&G>120||j&&G>70&&Wt(D*2.9)<.55||Y){let tt=Q==="metal"?p:g,pt=C+R*tt,ht=ot(-q,-R,C),xt=ot(q,-R,C),At=ot(q,R,C),vt=ot(-q,R,C),Lt=ot(-q,0,pt),kt=ot(q,0,pt),Vt=Math.hypot(R,pt-C);b.quad(ht,Lt,kt,xt,[0,0],[0,Vt/z],[2*q/z,Vt/z],[2*q/z,0],_t),b.quad(At,kt,Lt,vt,[0,0],[0,Vt/z],[2*q/z,Vt/z],[2*q/z,0],_t),o.tri(ot(-it.a,-it.b,C),ot(-it.a,it.b,C),ot(-it.a,0,pt-at*tt),[0,0],[1,0],[.5,1],dt),o.tri(ot(it.a,it.b,C),ot(it.a,-it.b,C),ot(it.a,0,pt-at*tt),[0,0],[1,0],[.5,1],dt),Ji(b,Lt,kt,_t.map(Dt=>Dt*.92),.18),V(ht,xt,.08,_t.map(Dt=>Dt*.8)),V(At,vt,.08,_t.map(Dt=>Dt*.8))}else{let tt=g*.9,pt=C+2*R*tt,ht=ot(-q,-R,C+.05),xt=ot(q,-R,C+.05),At=ot(q,R,pt),vt=ot(-q,R,pt),Lt=Math.hypot(2*R,pt-C);b.quad(ht,vt,At,xt,[0,0],[0,Lt/z],[2*q/z,Lt/z],[2*q/z,0],_t),o.tri(ot(-it.a,-it.b,C),ot(-it.a,it.b,C),ot(-it.a,it.b,pt-at*tt),[0,0],[1,0],[1,1],dt),o.tri(ot(it.a,it.b,C),ot(it.a,-it.b,C),ot(it.a,it.b,pt-at*tt),[0,0],[1,0],[1,1],dt),o.quad(ot(-it.a,it.b,C),ot(it.a,it.b,C),ot(it.a,it.b,pt-at*tt),ot(-it.a,it.b,pt-at*tt),[0,0],[1,0],[1,1],[0,1],dt),V(ht,xt,.06,_t.map(kt=>kt*.8))}h.quad(ot(-q,-R,C),ot(q,-R,C),ot(q,R,C),ot(-q,R,C),[0,0],[0,0],[0,0],[0,0],Tt(130,126,120)),Q==="fiber"&&!Y&&Wt(D*5.3)<.35&&d.push([it.cx+St*it.a*.5,C+.15+R*.1,it.cz+W*it.a*.5,Wt(D)])}else{let at=ci.triangulateShape(k.map(st=>new gt(st[0],st[1])),[]);for(let[st,tt,pt]of at){let ht=k[st],xt=k[tt],At=k[pt];h.tri([ht[0],C,ht[1]],[At[0],C,At[1]],[xt[0],C,xt[1]],[ht[0]/6,ht[1]/6],[At[0]/6,At[1]/6],[xt[0]/6,xt[1]/6],_t,[0,1,0])}let q=.55+.4*Wt(D*3.1),R=C+q,b=.15,z=k.length;for(let st=0;st<z;st++){let[tt,pt]=k[st],[ht,xt]=k[(st+1)%z],At=Math.hypot(ht-tt,xt-pt);if(At<.05)continue;let vt=(xt-pt)/At,Lt=-(ht-tt)/At;o.quad([tt,C,pt],[tt,R,pt],[ht,R,xt],[ht,C,xt],[0,0],[0,.2],[1,.2],[1,0],dt);let kt=tt-vt*b,Vt=pt-Lt*b,Dt=ht-vt*b,he=xt-Lt*b;o.quad([Dt,C,he],[Dt,R,he],[kt,R,Vt],[kt,C,Vt],[0,0],[0,.2],[1,.2],[1,0],dt.map(se=>se*.85)),u.quad([tt,R+.04,pt],[kt,R+.04,Vt],[Dt,R+.04,he],[ht,R+.04,xt],[0,0],[0,0],[0,0],[0,0],Tt(205,202,196))}let j=Wt(D*4.1);if(G>22&&j<.82){let st=[it.cx+St*it.a*(.25+.3*Wt(D*1.1))+X*it.b*.3*(Wt(D*1.9)-.5),C,it.cz+W*it.a*(.25+.3*Wt(D*1.1))+I*it.b*.3*(Wt(D*1.9)-.5),Wt(D*6.6)];if((j<.62?d:f).push(st),O.h>5&&G>70&&Wt(D*8.8)<.5){let tt=[st[0]-St*1.6,st[2]-W*1.6],pt=1.3,ht=[[-pt,-pt],[pt,-pt],[pt,pt],[-pt,pt]].map(([xt,At])=>[tt[0]+St*xt+X*At,tt[1]+W*xt+I*At]);for(let xt=0;xt<4;xt++){let At=ht[xt],vt=ht[(xt+1)%4];o.quad([At[0],C,At[1]],[At[0],C+2.3,At[1]],[vt[0],C+2.3,vt[1]],[vt[0],C,vt[1]],[0,0],[0,.76],[.8,.76],[.8,0],dt)}h.quad([ht[0][0],C+2.35,ht[0][1]],[ht[3][0],C+2.35,ht[3][1]],[ht[2][0],C+2.35,ht[2][1]],[ht[1][0],C+2.35,ht[1][1]],[0,0],[0,1],[1,1],[1,0],_t,[0,1,0]),st[1]=C+2.35,st[0]=tt[0],st[2]=tt[1]}}Wt(D*9.4)<.12&&G>30&&m.push([it.cx-St*it.a*.6,R,it.cz-W*it.a*.6,Wt(D)])}}let y=new fe;y.name="buildings";let _=nd(),P=(D,O,k=!0)=>{let U=new It(D.geometry(),O);return U.castShadow=k,U.receiveShadow=!0,y.add(U),U};P(r,ha({vertexColors:!0,map:_,roughness:.88,side:$t}));let M=ta();P(o,new wt({vertexColors:!0,map:M.map,normalMap:M.normalMap,normalScale:new gt(.4,.4),roughness:.92,side:$t}));let T=ju(),w=Qu(),S=td(),E=ed();P(a,new wt({vertexColors:!0,map:T.map,normalMap:T.normalMap,normalScale:new gt(1,1),roughness:.78,side:$t})),P(c,new wt({vertexColors:!0,map:w.map,normalMap:w.normalMap,normalScale:new gt(1.1,1.1),roughness:.86,side:$t})),P(l,new wt({vertexColors:!0,map:S.map,normalMap:S.normalMap,normalScale:new gt(1.2,1.2),roughness:.38,metalness:.55,side:$t})),P(h,new wt({vertexColors:!0,map:E.map,normalMap:E.normalMap,roughness:.95,side:$t})),P(u,new wt({vertexColors:!0,roughness:.8,side:$t}));let A=(()=>{let D=[new gt(0,0),new gt(.62,0),new gt(.72,.75),new gt(.76,.8),new gt(.74,.86),new gt(.5,1),new gt(.15,1.06),new gt(0,1.07)];return new Uo(D,v?8:16)})(),F=(D,O,k,U=1)=>{if(!D.length)return;let B=new Ge(O,k,D.length),C=new le,H=new ke,G=new N,J=new N,ct=new N(0,1,0);D.forEach((dt,Y)=>{let et=(.85+.35*dt[3])*U;G.set(et,et,et),H.setFromAxisAngle(ct,dt[3]*6.28),J.set(dt[0],dt[1],dt[2]),C.compose(J,H,G),B.setMatrixAt(Y,C)}),B.castShadow=!0,B.receiveShadow=!0,y.add(B)};if(F(d,A,new wt({color:2057136,roughness:.45})),F(f,new Se(.7,.62,1,v?8:14).translate(0,.5,0),new wt({color:10131600,roughness:.9})),m.length){let D=new Dn(.45,10,6,0,Math.PI*2,0,.9).rotateX(-1.1).translate(0,.7,0);F(m,D,new wt({color:14211284,roughness:.6,side:$t}))}return e.add(y),y}function Ji(i,t,e,n,s=.14){let r=e[0]-t[0],o=e[2]-t[2],a=Math.hypot(r,o)||1,c=-o/a*s,l=r/a*s,h=n.map(u=>u*.85);i.quad([t[0]+c,t[1],t[2]+l],[e[0]+c,e[1],e[2]+l],[e[0],e[1]+.09,e[2]],[t[0],t[1]+.09,t[2]],[0,0],[0,0],[0,.1],[0,.1],h),i.quad([t[0],t[1]+.09,t[2]],[e[0],e[1]+.09,e[2]],[e[0]-c,e[1],e[2]-l],[t[0]-c,t[1],t[2]-l],[0,.1],[0,.1],[0,0],[0,0],h)}var pd,Kl,$i,jl=Be(()=>{Oe();Kn();pi();pd=[[240,236,226],[246,240,220],[238,224,180],[244,214,170],[232,196,160],[206,224,236],[200,226,204],[236,190,170],[226,170,130],[214,214,210],[190,186,178],[230,210,120],[250,250,248],[180,206,226],[224,200,216],[200,120,90],[160,190,150],[245,230,160],[210,160,150]],Kl=[14,10,8,7,6,5,5,5,3,6,4,3,10,3,1.5,2,2,3,1.5];$i=(i,t,e)=>Math.max(t,Math.min(e,i))});function gd(i,t,e,n,s){let r=i.meshes,o={asphalt:Bs(),paver:sd(),dirt:rd(),sidewalk:zs()},a={asphalt:8,paver:2.4,dirt:6,sidewalk:2},c={asphalt:.09,paver:.09,dirt:.05,sidewalk:.24},l={asphalt:-3,paver:-3,dirt:-2,sidewalk:-4},h={asphalt:.9,paver:.82,dirt:1,sidewalk:.9},u={asphalt:.5,paver:1.4,dirt:.8,sidewalk:.6},d=new fe,f=s&&s.exclude;for(let M of["asphalt","paver","dirt","sidewalk"]){let[T,w]=r["m_"+M];if(!w)continue;let S=new Float32Array(e,T,w),E=r["a_"+M]?new Float32Array(e,r["a_"+M][0],r["a_"+M][1]):null;if(f){let B=[],C=[];for(let H=0;H<w/6;H++){let G=(S[H*6]+S[H*6+2]+S[H*6+4])/3,J=(S[H*6+1]+S[H*6+3]+S[H*6+5])/3;if(!f(G,J)){for(let ct=0;ct<6;ct++)B.push(S[H*6+ct]);E&&C.push(E[H])}}S=new Float32Array(B),E&&(E=new Float32Array(C))}let A=S.length/2,F=new Float32Array(A*3),D=new Float32Array(A*2);for(let B=0;B<A;B++){let C=S[B*2],H=S[B*2+1];if(F[B*3]=C,F[B*3+1]=t.at(C,H)+c[M],F[B*3+2]=H,E){let G=E[Math.floor(B/3)],J=Math.cos(G),ct=Math.sin(G);D[B*2]=(-C*ct+H*J)/a[M],D[B*2+1]=(C*J+H*ct)/a[M]}else D[B*2]=C/a[M],D[B*2+1]=H/a[M]}let O=new pe;O.setAttribute("position",new oe(F,3)),O.setAttribute("uv",new oe(D,2)),O.computeVertexNormals();let k=new wt({map:o[M].map,normalMap:o[M].normalMap,normalScale:new gt(u[M],u[M]),roughness:h[M],polygonOffset:!0,polygonOffsetFactor:l[M],polygonOffsetUnits:l[M]*2}),U=new It(O,k);U.receiveShadow=!0,U.name="road_"+M,d.add(U)}let m=new Qt;for(let[M,T,w,S]of i.curbs){let E=Math.hypot(w-M,S-T);if(E<.05||f&&f((M+w)/2,(T+S)/2))continue;let A=-(S-T)/E*.07,F=(w-M)/E*.07,D=t.at(M,T),O=t.at(w,S),k=Wt(M*.37+T*.11),U=k<.55?Tt(226,225,219):k<.85?Tt(196,194,188):Tt(214,200,120),B=U.map(C=>C*.82);m.quad([M-A,D+.04,T-F],[w-A,O+.04,S-F],[w-A,O+.26,S-F],[M-A,D+.26,T-F],[0,0],[E,0],[E,.2],[0,.2],B),m.quad([w+A,O+.04,S+F],[M+A,D+.04,T+F],[M+A,D+.26,T+F],[w+A,O+.26,S+F],[0,0],[E,0],[E,.2],[0,.2],B),m.quad([M-A,D+.26,T-F],[w-A,O+.26,S-F],[w+A,O+.26,S+F],[M+A,D+.26,T+F],[0,0],[E,0],[E,.15],[0,.15],U,[0,1,0])}let x=ks(),g=new It(m.geometry(),new wt({vertexColors:!0,map:x.map,roughness:.85,side:$t}));g.receiveShadow=!0,g.castShadow=!1,d.add(g);let p=new Qt,v=Tt(232,232,226),y=Tt(236,186,40);for(let M of i.roads){if(M.s!=="asphalt"||M.b||M.id===1314627854||M.id===1314627855||s&&s.skipIds&&s.skipIds.has(M.id)||!["trunk","tertiary","trunk_link","residential","primary","secondary"].includes(M.hw)||M.w<7)continue;let T=M.hw==="trunk",w=M.p,S=0;for(let E=0;E<w.length-1;E++){let[A,F]=w[E],[D,O]=w[E+1],k=Math.hypot(D-A,O-F);if(k<.1)continue;let U=(D-A)/k,B=(O-F)/k,C=-B,H=U;for(let G=0;G<k;G+=1.5){let J=Math.min(k,G+1.5),dt=(S+G)%8<4,Y=A+U*G,et=F+B*G,ft=A+U*J,rt=F+B*J,Mt=t.at(Y,et)+.13,_t=t.at(ft,rt)+.13,it=(St,W,X)=>{p.quad([Y+C*(St-W),Mt,et+H*(St-W)],[Y+C*(St+W),Mt,et+H*(St+W)],[ft+C*(St+W),_t,rt+H*(St+W)],[ft+C*(St-W),_t,rt+H*(St-W)],[0,0],[1,0],[1,1],[0,1],X,[0,1,0])};if(T){it(-.12,.06,y),it(.12,.06,y);let St=M.w/2-.4;it(St,.07,v),it(-St,.07,v)}else!M.o&&dt&&it(0,.06,M.hw==="residential"?v:y)}S+=k}}let _=new wt({vertexColors:!0,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,side:$t}),P=new It(p.geometry(),_);return P.receiveShadow=!0,d.add(P),n.add(d),d}function _d(i,t,e,n){let[s,r]=i.meshes.m_water;if(!r)return null;let o=new Float32Array(e,s,r),a=r/2,c=new Float32Array(a*3),l=i.meta.WL;for(let v=0;v<a;v++)c[v*3]=o[v*2],c[v*3+1]=l,c[v*3+2]=o[v*2+1];let h=new pe;h.setAttribute("position",new oe(c,3)),h.computeVertexNormals();let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),f=d.createImageData(256,256);for(let v=0;v<256;v++)for(let y=0;y<256;y++){let _=Math.sin(v/256*Math.PI*8+Math.sin(y/256*Math.PI*4)*2)*.5+Math.sin(y/256*Math.PI*10+v/40)*.5,P=Math.cos(y/256*Math.PI*6+Math.sin(v/256*Math.PI*6))*.5,M=(v*256+y)*4;f.data[M]=128+_*40,f.data[M+1]=128+P*40,f.data[M+2]=255,f.data[M+3]=255}d.putImageData(f,0,0);let m=new gn(u);m.wrapS=m.wrapT=Vn,m.repeat.set(1,1);let x=new Float32Array(a*2);for(let v=0;v<a;v++)x[v*2]=o[v*2]/40,x[v*2+1]=o[v*2+1]/40;h.setAttribute("uv",new oe(x,2));let g=new wt({color:3103322,roughness:.12,metalness:.1,normalMap:m,normalScale:new gt(.35,.35),transparent:!0,opacity:.92}),p=new It(h,g);return p.receiveShadow=!0,p.userData.tick=v=>{m.offset.set(v*.01,v*.004)},n.add(p),p}function xd(i,t,e){let n=new Qt,s=new Qt,r=new Qt,o=new Qt,a=i.wallc.map(p=>Tt(...p)),c=i.gatec.map(p=>Tt(...p)),l=.09;for(let[p,v,y,_,P,M]of i.walls){let T=Math.hypot(y-p,_-v);if(T<.05)continue;let w=-(_-v)/T*l,S=(y-p)/T*l,E=t.at(p,v),A=t.at(y,_),F=E-.4,D=A-.4,O=E+P,k=A+P,U=a[M],B=Wt(Math.round(p*3)*.71+Math.round(v*3)*1.37)<.2,C=B?s:n,H=B?[1,1,1]:U,G=[p+w,F,v+S],J=[y+w,D,_+S],ct=[y+w,k,_+S],dt=[p+w,O,v+S],Y=[p-w,F,v-S],et=[y-w,D,_-S],ft=[y-w,k,_-S],rt=[p-w,O,v-S],Mt=T/3,_t=-.4/(B?2:1),it=P/(B?2:1),St=H.map(ot=>ot*.7);C.quad(G,J,ct,dt,[0,_t],[Mt,_t],[Mt,it],[0,it],H,null,[St,St,H,H]),C.quad(et,Y,rt,ft,[Mt,_t],[0,_t],[0,it],[Mt,it],H,null,[St,St,H,H]);let W=B?Tt(190,188,182):U.map(ot=>ot*.9),X=w*1.6,I=S*1.6;n.quad([p+X,O+.05,v+I],[y+X,k+.05,_+I],[y-X,k+.05,_-I],[p-X,O+.05,v-I],[0,1],[Mt,1],[Mt,1],[0,1],W,[0,1,0]),n.quad([p+X,O-.02,v+I],[y+X,k-.02,_+I],[y+X,k+.05,_+I],[p+X,O+.05,v+I],[0,1],[Mt,1],[Mt,1],[0,1],W),n.quad([y-X,k-.02,_-I],[p-X,O-.02,v-I],[p-X,O+.05,v-I],[y-X,k+.05,_-I],[0,1],[Mt,1],[Mt,1],[0,1],W),C.quad(Y,G,dt,rt,[0,0],[.05,0],[.05,1],[0,1],H),C.quad(J,et,ft,ct,[0,0],[.05,0],[.05,1],[0,1],H)}for(let[p,v,y,_,P,M]of i.gates){let T=Math.hypot(y-p,_-v),w=t.at(p,v),S=t.at(y,_),E=Math.min(w,S),A=c[M],F=-(_-v)/T*.03,D=(y-p)/T*.03,k=(Wt(p*1.3+_*.7)<.5?0:1)*.5;r.quad([p+F,E,v+D],[y+F,E,_+D],[y+F,E+P,_+D],[p+F,E+P,v+D],[0,k],[T/1.5,k],[T/1.5,k+.5],[0,k+.5],A),r.quad([y-F,E,_-D],[p-F,E,v-D],[p-F,E+P,v-D],[y-F,E+P,_-D],[0,k],[T/1.5,k],[T/1.5,k+.5],[0,k+.5],A);for(let[U,B,C]of[[p,v,w],[y,_,S]]){let G=C+P+.2,J=a[(M+1)%a.length],ct=(dt,Y,et,ft,rt)=>o.quad(dt,Y,et,ft,[0,0],[.1,0],[.1,1],[0,1],J,rt);ct([U-.17,C-.3,B-.17],[U+.17,C-.3,B-.17],[U+.17,G,B-.17],[U-.17,G,B-.17]),ct([U+.17,C-.3,B+.17],[U-.17,C-.3,B+.17],[U-.17,G,B+.17],[U+.17,G,B+.17]),ct([U-.17,C-.3,B+.17],[U-.17,C-.3,B-.17],[U-.17,G,B-.17],[U-.17,G,B+.17]),ct([U+.17,C-.3,B-.17],[U+.17,C-.3,B+.17],[U+.17,G,B+.17],[U+.17,G,B-.17]),ct([U-.17-.03,G,B-.17-.03],[U+.17+.03,G,B-.17-.03],[U+.17+.03,G,B+.17+.03],[U-.17-.03,G,B+.17+.03],[0,1,0])}}let h=new fe,u=ta(),d=id(),f=new It(n.geometry(),ha({vertexColors:!0,map:u.map,normalMap:u.normalMap,normalScale:new gt(.6,.6),roughness:.95,side:$t}));f.castShadow=!0,f.receiveShadow=!0,h.add(f);let m=new It(o.geometry(),ha({vertexColors:!0,map:u.map,roughness:.95,side:$t}));m.castShadow=!0,m.receiveShadow=!0,h.add(m);let x=new It(s.geometry(),new wt({vertexColors:!0,map:d.map,normalMap:d.normalMap,roughness:.95,side:$t}));x.castShadow=!0,x.receiveShadow=!0,h.add(x);let g=new It(r.geometry(),new wt({vertexColors:!0,map:ad(),roughness:.5,metalness:.4,side:$t,alphaTest:.4}));return g.castShadow=!0,h.add(g),h.name="walls",e.add(h),h}var yd=Be(()=>{Oe();Kn();Jl();pi();jl()});function Sd(i){let t=0;for(let c of i){let l=c.index?c.toNonIndexed():c;c._ni=l,t+=l.attributes.position.count}let e=new Float32Array(t*3),n=new Float32Array(t*3),r=i.every(c=>c._ni.attributes.uv)?new Float32Array(t*2):null,o=0;for(let c of i){let l=c._ni;e.set(l.attributes.position.array,o*3),l.attributes.normal&&n.set(l.attributes.normal.array,o*3),r&&r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count}let a=new pe;return a.setAttribute("position",new oe(e,3)),a.setAttribute("normal",new oe(n,3)),r&&a.setAttribute("uv",new oe(r,2)),a}function ua(i){let t=i;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function vd(i,t,e){let n=ua(i*7919+13),s=[],r=[],o=[],a=[],c=new N,l=new N,h=new N,u=new N,d=new ke;for(let m=0;m<t;m++){let x=n()*Math.PI*2,g=Math.acos(2*n()-1)*(e.flat||1),p=.55+.45*Math.pow(n(),.5);c.set(Math.sin(g)*Math.cos(x)*p,Math.cos(g)*p*e.ry,Math.sin(g)*Math.sin(x)*p),c.y+=e.dy||0,l.set(c.x,c.y/(e.ry*e.ry),c.z).normalize();let v=e.card*(.75+.5*n());h.set(n()-.5,n()-.5,n()-.5).normalize(),d.setFromAxisAngle(h,n()*Math.PI);let y=new N(1,0,0).applyQuaternion(d),_=new N(0,1,0).applyQuaternion(d),P=[[-1,-1],[1,-1],[1,1],[-1,1]],M=P.map(([S,E])=>new N().copy(c).addScaledVector(y,S*v/2).addScaledVector(_,E*v/2)),T=.62+.38*Math.min(1,Math.max(0,(c.y/e.ry+.6)/1.4)),w=.9+.2*n();for(let S of[0,1,2,0,2,3]){let E=M[S];s.push(E.x,E.y,E.z);let A=new N(E.x,(E.y-(e.dy||0))/(e.ry*e.ry),E.z).normalize().lerp(l,.3).normalize();r.push(A.x,A.y,A.z),o.push((P[S][0]+1)/2,(P[S][1]+1)/2),a.push(T*w,T*w,T*w)}}let f=new pe;return f.setAttribute("position",new Zt(s,3)),f.setAttribute("normal",new Zt(r,3)),f.setAttribute("uv",new Zt(o,2)),f.setAttribute("color",new Zt(a,3)),f}function Md(i,t,e){let n=new Is(.62,t),s=n.attributes.position,r=ua(i);for(let u=0;u<s.count;u++){let d=s.getX(u),f=s.getY(u),m=s.getZ(u),x=.85+.25*Wt(i*3+Math.round(d*50)*1.3+Math.round(f*50)*2.1+Math.round(m*50)*3.7);s.setXYZ(u,d*x,f*x*e,m*x)}let o=n.index?n.toNonIndexed():n;o.computeVertexNormals();let a=o.attributes.normal,c=o.attributes.position,l=[];for(let u=0;u<c.count;u++){let d=new N(c.getX(u),c.getY(u),c.getZ(u)).normalize(),f=new N(a.getX(u),a.getY(u),a.getZ(u)).lerp(d,.8).normalize();a.setXYZ(u,f.x,f.y,f.z);let m=.3+.22*Math.min(1,Math.max(0,(c.getY(u)/e+.8)/1.6));l.push(m,m,m)}o.setAttribute("color",new Zt(l,3));let h=new Float32Array(c.count*2).fill(.5);return o.setAttribute("uv",new oe(h,2)),o}function Ed(i){let t=i.reduce((c,l)=>c+l.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=new Float32Array(t*3),o=0;for(let c of i)e.set(c.attributes.position.array,o*3),n.set(c.attributes.normal.array,o*3),s.set(c.attributes.uv.array,o*2),r.set(c.attributes.color.array,o*3),o+=c.attributes.position.count;let a=new pe;return a.setAttribute("position",new oe(e,3)),a.setAttribute("normal",new oe(n,3)),a.setAttribute("uv",new oe(s,2)),a.setAttribute("color",new oe(r,3)),a}function ty(i,t){let e=ua(i+5),n=[],s=t?5:7,r=new Se(.11,.19,1,s,1,!0);r.translate(0,.5,0),n.push(r);let o=t?2:4;for(let a=0;a<o;a++){let c=new Se(.035,.08,.75,s-2,1,!0);c.translate(0,.375,0),c.rotateZ(.5+.4*e()),c.rotateY(a/o*Math.PI*2+e()),c.translate(0,.85+.1*e(),0),n.push(c)}return Sd(n)}function ey(i){let t=[],e=i?9:14,n=ua(77);for(let a=0;a<e;a++){let c=a/e*Math.PI*2+n()*.3,l=a%3===0?.5:a%3===1?0:-.35,h=2.6+n()*.8,u=new Ri(1,h,1,6),d=u.attributes.position;for(let f=0;f<d.count;f++){let m=d.getY(f)+h/2,x=m/h,g=d.getX(f)*(.35+.65*Math.sin(Math.min(1,x*1.2)*Math.PI*.9+.1)),p=m*Math.cos(l),v=m*Math.sin(l)-.55*x*x*h*.45;d.setXYZ(f,g,v,p)}u.rotateY(c),t.push(u)}let s=Sd(t);s.computeVertexNormals();let r=s.attributes.normal;for(let a=0;a<r.count;a++){let c=new N(r.getX(a),Math.abs(r.getY(a))+.6,r.getZ(a)).normalize();r.setXYZ(a,c.x,c.y,c.z)}let o=new Float32Array(s.attributes.position.count*3).fill(1);return s.setAttribute("color",new oe(o,3)),s}function bd(i,t,e,n,s){let r=[],o=[],a=i.extras.fountains||[];for(let J of i.trees)a.some(ct=>Math.hypot(ct[0]-J[0],ct[1]-J[1])<7.5)||(J[3]>=1e3?o:r).push(J);let c=n==="low"||n==="medium",l={low:2}[n]||1,h=new fe;h.name="trees";let u=ql(0),d=ql(1),f=J=>new wt({map:J,alphaTest:.42,vertexColors:!0,roughness:.85,side:$t}),m=f(u),x=f(d),g=J=>new dr({depthPacking:Fl,map:J,alphaTest:.42}),p=new wt({vertexColors:!0,roughness:.95,map:null}),v=n==="low"?12:c?18:44,y=[{ry:.78,card:1.2,dy:0},{ry:.62,card:1.3,dy:-.05,flat:.9},{ry:1.05,card:1.1,dy:.05}],_=y.map((J,ct)=>Ed([Md(ct+3,c?0:1,J.ry*.9),vd(ct+1,v,J)])),P=Ed([Md(9,0,.7),vd(9,c?10:18,{ry:.7,card:1.35,dy:0})]),M=new le,T=new ke,w=new N,S=new N,E=new Kt,A=new N(0,1,0),F=[[.34,.5,.2],[.4,.56,.22],[.3,.44,.18],[.44,.58,.26],[.36,.54,.27],[.48,.58,.28],[.28,.42,.2]],D=[[.98,.82,.18],[.88,.45,.66],[.92,.4,.18]],O=[],k=_.map(()=>[]);r.forEach((J,ct)=>{Wt(J[3]+ct*.37)<.06&&J[2]<3.5?O.push(J):k[Math.floor(Wt(J[3]*3.1+ct)*3)%3].push(J)});let U=[];k.forEach((J,ct)=>{if(!J.length)return;let dt=new Ge(_[ct],ct===1?x:m,J.length);J.forEach((Y,et)=>{let[ft,rt,Mt]=Y,_t=t.at(ft,rt),it=Math.max(1.6,Mt*.95)*(.9+.2*Wt(et*3.3+ct)),St=it*y[ct].ry*.9+1.6+Wt(et+ct*999)*1;T.setFromAxisAngle(A,Wt(et*7+ct)*6.28),w.set(it,it,it),S.set(ft,_t+St,rt),M.compose(S,T,w),dt.setMatrixAt(et,M);let W=Wt(Y[3]*1.7+et),X=F[Math.floor(W*F.length)%F.length];Wt(et*13.3+ct)<.012&&(X=D[Math.floor(Wt(et)*3)%3]),E.setRGB(X[0],X[1],X[2]),dt.setColorAt(et,E),U.push([ft,_t,rt,St-it*y[ct].ry*.35,it])}),dt.castShadow=!0,dt.receiveShadow=!0,dt.customDepthMaterial=g(ct===1?d:u),h.add(dt)});let B=o.filter((J,ct)=>ct%l===0||J[3]>=4e6&&J[3]<5e6);if(B.length){let J=new Ge(P,x,B.length);B.forEach((ct,dt)=>{let[Y,et,ft]=ct,rt=t.at(Y,et),Mt=ft*1.15*(c&&l>1?1.15:1),_t=Mt*.7+1.5+Wt(dt)*2.5+(ct[3]>=2e6?2.5+Wt(dt*1.7)*3:0);T.setFromAxisAngle(A,Wt(dt*3)*6.28),w.set(Mt,Mt,Mt),S.set(Y,rt+_t,et),M.compose(S,T,w),J.setMatrixAt(dt,M);let it=F[Math.floor(Wt(dt*1.3)*F.length)%F.length],St=.78+.15*Wt(dt*2.7),W=Wt(dt*5.1)<.2;if(ct[3]>=4e6&&ct[3]<5e6){let X=Wt(ct[3]*.37);X<.18?(it=[.5,.44,.36],St=.9,W=!0,w.multiplyScalar(.72),M.compose(S,T,w),J.setMatrixAt(dt,M)):X<.42&&(it=[[.58,.52,.28],[.52,.5,.26],[.62,.48,.24]][Math.floor(X*30)%3],St=.85)}E.setRGB(it[0]*St,it[1]*St,it[2]*St),J.setColorAt(dt,E),!c&&W&&U.push([Y,rt,et,_t-Mt*.3,Mt])}),J.castShadow=!c,J.receiveShadow=!0,J.customDepthMaterial=g(d),h.add(J)}let C=ty(3,c),H=new Ge(C,new wt({color:6179384,roughness:1}),U.length);U.forEach(([J,ct,dt,Y,et],ft)=>{let rt=.7+et*.12;w.set(rt,Y,rt),T.setFromAxisAngle(A,Wt(ft*1.9)*6.28),S.set(J,ct-.2,dt),M.compose(S,T,w),H.setMatrixAt(ft,M)}),H.castShadow=!0,h.add(H);let G=O.concat(s||[]);if(G.length){let J=ey(c),ct=new wt({map:Yl(),alphaTest:.4,vertexColors:!0,side:$t,roughness:.85}),dt=new Ge(J,ct,G.length);dt.customDepthMaterial=g(Yl());let Y=new Se(.16,.24,1,c?6:10,1,!0);Y.translate(0,.5,0);let et=new Ge(Y,new wt({color:10261898,roughness:.95}),G.length);G.forEach((ft,rt)=>{let[Mt,_t]=ft,it=t.at(Mt,_t),St=7+Wt(rt*9.1)*7;T.setFromAxisAngle(A,Wt(rt)*6.28),w.set(1.25,1.25,1.25),S.set(Mt,it+St,_t),M.compose(S,T,w),dt.setMatrixAt(rt,M),E.setRGB(.75+.2*Wt(rt*2.2),.85,.7),dt.setColorAt(rt,E),w.set(1,St,1),S.set(Mt,it,_t),M.compose(S,T,w),et.setMatrixAt(rt,M)}),dt.castShadow=et.castShadow=!0,h.add(dt),h.add(et)}return e.add(h),h}var wd=Be(()=>{Oe();Kn();pi()});function Ad(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pe,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Td(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Td(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Td(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new oe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Rd=Be(()=>{Oe()});function da(i,t,e,n,s,r,o,a=1){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,x=-f/m,g=d/m,p=r(h,c),v=r(u,l);i.quad([h[0]+x*n,p,h[2]+g*n],[u[0]+x*n,v,u[2]+g*n],[u[0]+x*s,v,u[2]+g*s],[h[0]+x*s,p,h[2]+g*s],[c/a,0],[l/a,0],[l/a,1],[c/a,1],o)}}function Cd(i,t,e,n,s,r,o,a){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,x=-f/m,g=d/m;i.quad([h[0]+x*n,h[1]+r,h[2]+g*n],[u[0]+x*n,u[1]+r,u[2]+g*n],[u[0]+x*s,u[1]+o,u[2]+g*s],[h[0]+x*s,h[1]+o,h[2]+g*s],[c/3.4,0],[l/3.4,0],[l/3.4,.3],[c/3.4,.3],a)}}function Hs(i,t,e,n,s,r,o,a=0,c=null){c=c??t.L;for(let l=a;l<c;l+=e){let h=Math.min(c,l+e),u=t.at(l),d=t.at(h),f=d[0]-u[0],m=d[2]-u[2],x=Math.hypot(f,m)||1,g=-m/x,p=f/x,v=[u[0]+g*n,s(u,l),u[2]+p*n],y=[d[0]+g*n,s(d,h),d[2]+p*n],_=[d[0]+g*n,r(d,h),d[2]+p*n],P=[u[0]+g*n,r(u,l),u[2]+p*n];i.quad(v,y,_,P,[l,0],[h,0],[h,1],[l,1],o)}}function Id(i,t,e){let n=new fe;n.name="rail";let s=new Qt,r=new Qt,o=[],a=_=>_[0]>t.XMIN-40&&_[0]<t.XMAX+40&&_[1]>t.ZMIN-40&&_[1]<t.ZMAX+40;for(let _ of i.rail){let P=[],M=[];if(_.pts.forEach((E,A)=>{a(E)&&(P.push(E),M.push(_.h[A]))}),P.length<2)continue;let T=new Rn(P,M);o.push(T);let w=Tt(255,228,205);da(s,T,3,-1.7,1.7,E=>E[1]+.35,w,3.4),Cd(s,T,3,-1.7,-2.6,.35,-.25,Tt(225,195,170)),Cd(s,T,3,2.6,1.7,-.25,.35,Tt(225,195,170));let S=Tt(150,150,155);for(let E of[-.5,.5])da(r,T,3,E-.04,E+.04,A=>A[1]+.62,S),Hs(r,T,3,E-.04,A=>A[1]+.47,A=>A[1]+.62,Tt(90,80,70)),Hs(r,T,3,E+.04,A=>A[1]+.62,A=>A[1]+.47,Tt(90,80,70))}let c=od(),l=new It(s.geometry(),new wt({vertexColors:!0,map:c.map,normalMap:c.normalMap,side:$t,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));l.receiveShadow=!0,n.add(l);let h=new It(r.geometry(),new wt({vertexColors:!0,roughness:.35,metalness:.8}));n.add(h);let u=0;for(let _ of o)u+=Math.floor(_.L/.65);let d=new Ve(2,.14,.24),f=new Ge(d,new wt({color:10657430,roughness:.9}),u),m=new le,x=new ke,g=new N,p=new N(1,1,1),v=new N(0,1,0),y=0;for(let _ of o)for(let P=0;P<_.L-.65;P+=.65){let M=_.at(P),T=_.at(P+.6),w=Math.atan2(T[2]-M[2],T[0]-M[0]);x.setFromAxisAngle(v,-w+Math.PI/2),g.set(M[0],M[1]+.42,M[2]),m.compose(g,x,p),f.setMatrixAt(y++,m)}return f.count=y,f.receiveShadow=!0,n.add(f),e.add(n),{group:n,paths:o}}function Ld(i){let t=[];for(let[e,n]of i){let s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n[0],r[o*3+1]=n[1],r[o*3+2]=n[2];e.setAttribute("color",new oe(r,3)),e.attributes.uv||e.setAttribute("uv",new oe(new Float32Array(s*2),2)),t.push(e.index?e.toNonIndexed():e)}return Ad(t,!1)}function ge(i,t,e,n,s,r){let o=new Ve(i,t,e);return o.translate(n,s+t/2,r),o}function Pd(i,t,e=.5){let n=new Se(e,e,.14,14);return n.rotateX(Math.PI/2),n.translate(i,e,t),n}function fa(i,t,e,n,s){i.push([ge(n*(e-1)+1.6,.55,.22,t,.45,1.18),s],[ge(n*(e-1)+1.6,.55,.22,t,.45,-1.18),s]);for(let r=0;r<e;r++){let o=t+(r-(e-1)/2)*n;i.push([Pd(o,.72,.48),s],[Pd(o,-.72,.48),s])}i.push([ge(.5,.35,2.2,t,.62,0),s])}function ny(){let i=Tt(232,186,40),t=Tt(20,110,88),e=Tt(52,54,58),n=Tt(26,30,34),s=Tt(235,235,230),r=Tt(120,124,128),o=[];o.push([ge(21.6,.38,3.14,0,1.42,0),e]),o.push([ge(21.8,.12,3.18,0,1.8,0),Tt(200,160,30)]),fa(o,6.9,3,1.75,n),fa(o,-6.9,3,1.75,n),o.push([ge(7,1,2.5,0,.55,0),e]),o.push([ge(13.2,2.65,2.5,-3,1.92,0),i]),o.push([ge(13.25,.32,2.54,-3,2.55,0),t]),o.push([ge(3.4,.35,3,-8.4,4.55,0),i]),o.push([ge(3.2,.2,2.9,-8.4,4.9,0),r]);for(let a of[-7.5,-9.3]){let c=new Se(.62,.62,.06,16);c.translate(a,5.12,0),o.push([c,n])}for(let a of[-1,-3.2]){let c=new Se(.5,.5,.06,14);c.translate(a,4.6,0),o.push([c,n])}o.push([ge(1.2,.4,.8,-5,4.57,0),e]),o.push([ge(3.4,3,3.1,5.4,1.92,0),i]),o.push([ge(3.45,.32,3.14,5.4,2.55,0),t]),o.push([ge(3.5,.18,3.16,5.4,4.92,0),Tt(210,170,36)]),o.push([ge(.06,.95,2.5,7.13,3.72,0),n]),o.push([ge(1.6,.85,.06,5.6,3.75,1.56),n]),o.push([ge(1.6,.85,.06,5.6,3.75,-1.56),n]),o.push([ge(2.6,1.55,2.6,8.4,1.92,0),i]),o.push([ge(2.62,.32,2.64,8.4,2.55,0),t]),o.push([ge(.1,.25,.5,9.74,3,0),s]),o.push([ge(.1,.18,.3,9.74,2.2,.9),s]),o.push([ge(.1,.18,.3,9.74,2.2,-.9),s]);for(let a of[1.52,-1.52]){o.push([ge(20.6,.05,.05,-.5,2.85,a),s]);for(let c=-10;c<=9.8;c+=2.2)o.push([ge(.05,1,.05,c,1.86,a),s])}return o.push([ge(.4,.5,.9,10.6,1,0),e]),o.push([ge(.4,.5,.9,-10.6,1,0),e]),o.push([ge(.6,.5,3,10.2,.6,0),i]),o.push([ge(.6,.5,3,-10.6,.6,0),i]),Ld(o)}function iy(){let i=Tt(110,70,52),t=Tt(86,54,40),e=Tt(30,30,32),n=Tt(70,44,36),s=[];fa(s,3.5,2,1.75,e),fa(s,-3.5,2,1.75,e),s.push([ge(9.9,.3,2.4,0,1.15,0),e]),s.push([ge(9.6,2.5,3.05,0,1.42,0),i]);for(let a=0;a<9;a++){let c=-4.4+a*1.1;s.push([ge(.12,2.5,3.17,c,1.42,0),t])}s.push([ge(9.7,.12,3.15,0,3.85,0),t]);let r=new Gi;r.moveTo(-1.42,0),r.lineTo(-1,.35),r.lineTo(-.3,.62),r.lineTo(.3,.62),r.lineTo(1,.35),r.lineTo(1.42,0);let o=new Ps(r,{depth:8.8,bevelEnabled:!1});return o.rotateY(Math.PI/2),o.translate(-4.4,3.86,0),s.push([o,n]),s.push([ge(.5,.3,.4,5.2,1,0),e]),s.push([ge(.5,.3,.4,-5.2,1,0),e]),Ld(s)}function Dd(i,t){let e=i.slice().sort((M,T)=>T.L-M.L).slice(0,2),n=new fe;n.name="train";let s=10.5,r=22,o=60,a=new wt({vertexColors:!0,roughness:.7,metalness:.15}),c=new Ge(iy(),a,o);c.castShadow=!0,c.receiveShadow=!0,n.add(c);let l=ny(),h=new wt({vertexColors:!0,roughness:.45,metalness:.25}),u=[];for(let M=0;M<2;M++){let T=new fe,w=new It(l,h);w.castShadow=!0,w.receiveShadow=!0,T.add(w),n.add(T),u.push(T)}t.add(n);let d=new le,f=new ke,m=new N,x=new N(1,1,1),g=new N(0,1,0),p=-200,v=1,y=0,_=0;function P(M,T,w){let S=M.at(T-w/2*.8),E=M.at(T+w/2*.8),A=M.at(T),F=Math.atan2(E[2]-S[2],E[0]-S[0]);return f.setFromAxisAngle(g,-F),m.set(A[0],A[1]+.62,A[2]),F}return{group:n,placeNear(M,T){let w=e[0],S=0,E=1e9;for(let A=0;A<w.L;A+=5){let F=w.at(A),D=Math.hypot(F[0]-M,F[2]-T);D<E&&(E=D,S=A)}y=0,v=1,_=0,p=S+r*1.5},tick(M){let T=e[y];if(!T)return;if(_>0){_-=M,n.visible=!1;return}n.visible=!0,p+=M*13*v;let w=p;for(let A=0;A<2;A++)P(T,w-r/2*v,r),u[A].position.copy(m),u[A].quaternion.copy(f),v<0&&u[A].rotateY(Math.PI),w-=r*v;for(let A=0;A<o;A++){let F=w-s/2*v;P(T,F,s),d.compose(m,f,x),c.setMatrixAt(A,d),w-=s*v}c.instanceMatrix.needsUpdate=!0;let S=w;(v>0?S>T.L+50:S<-50)&&(_=40,y=(y+1)%e.length,v=-v,p=v>0?-50:T.L+50)}}}function Ud(i,t,e,n){let s=new fe;s.name="passarelas";let r=new Qt,o=new Qt,a=Tt(40,110,140),c=Tt(150,150,150);for(let m of i.extras.footbridges){let x=new Rn(m,m.map(()=>0)),g=t.at(m[0][0],m[0][1]),p=t.at(m[m.length-1][0],m[m.length-1][1]),v=x.at(x.L/2),y=t.at(v[0],v[2])+7.2,_=x.s[1],P=x.s[x.s.length-2],M=m.map((A,F)=>F===0?g+.2:F===m.length-1?p+.2:y),T=new Rn(m,M),w=1.2;da(r,T,1,-w,w,A=>A[1],c),da(r,T,1,w,-w,A=>A[1]-.35,a),Hs(r,T,1,-w,A=>A[1]-.35,A=>A[1],a),Hs(r,T,1,w,A=>A[1],A=>A[1]-.35,a);for(let A of[-w,w])Hs(o,T,1,A,F=>F[1],F=>F[1]+1.1,a);for(let A of[-w,w])Hs(o,T,1,A,F=>F[1]+1.1,F=>F[1]+2.6,a,_,P);let S=new Ve(.35,1,.35),E=new wt({color:2780812,roughness:.6,metalness:.4});for(let A=4;A<T.L-2;A+=7){let F=T.at(A),D=t.at(F[0],F[2]),O=F[1]-.35-D;if(!(O<.8))for(let k of[-1,1]){let U=new It(S,E);U.scale.y=O,U.position.set(F[0],D+O/2,F[2]),s.add(U),U.castShadow=!0}}}let l=new It(r.geometry(),new wt({vertexColors:!0,roughness:.6,metalness:.3,side:$t}));l.castShadow=l.receiveShadow=!0;let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.clearRect(0,0,64,64),u.strokeStyle="#2c6f8e",u.lineWidth=3,u.strokeRect(0,0,64,64),u.beginPath(),u.moveTo(0,32),u.lineTo(64,32),u.moveTo(32,0),u.lineTo(32,64),u.stroke();let d=new gn(h);d.wrapS=d.wrapT=Vn,d.repeat.set(1,4),d.colorSpace=Ce;let f=new It(o.geometry(),new wt({map:d,transparent:!0,alphaTest:.3,side:$t,metalness:.4,roughness:.5}));return s.add(l,f),e.add(s),s}var Rn,pa=Be(()=>{Oe();Kn();Rd();pi();Rn=class{constructor(t,e){this.p=t,this.h=e,this.s=[0];for(let n=1;n<t.length;n++)this.s.push(this.s[n-1]+Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1]));this.L=this.s[this.s.length-1]}at(t){t=Math.max(0,Math.min(this.L,t));let e=0,n=this.s.length-1;for(;n-e>1;){let a=e+n>>1;this.s[a]<=t?e=a:n=a}let s=(t-this.s[e])/Math.max(1e-6,this.s[n]-this.s[e]),r=this.p[e],o=this.p[n];return[r[0]+(o[0]-r[0])*s,this.h[e]+(this.h[n]-this.h[e])*s,r[1]+(o[1]-r[1])*s]}}});function Ql(i,t,e,n=1){let s=[],r=[];for(let a=t;a<e+1e-6;a+=n){let c=i.at(Math.min(a,e));s.push([c[0],c[2]]),r.push(c[1])}let o=i.at(e);return Math.hypot(s[s.length-1][0]-o[0],s[s.length-1][1]-o[2])>.05&&(s.push([o[0],o[2]]),r.push(o[1])),new Rn(s,r)}function $e(i,t){let e=i.at(Math.max(0,t-.5)),n=i.at(Math.min(i.L,t+.5)),s=n[0]-e[0],r=n[2]-e[2],o=Math.hypot(s,r)||1;return{c:i.at(t),ux:s/o,uz:r/o,nx:-r/o,nz:s/o}}function vn(i,t,e,n,s,r,o,a,c,l=1,h=null){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=$e(t,u),m=$e(t,d),x=(g,p,v)=>[g.c[0]+g.nx*p,a(g.c[1],p,v),g.c[2]+g.nz*p];i.quad(x(f,r,u),x(m,r,d),x(m,o,d),x(f,o,u),[r/l,u/l],[r/l,d/l],[o/l,d/l],[o/l,u/l],c,h)}}function Vs(i,t,e,n,s,r,o,a,c,l=1,h=!1){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=$e(t,u),m=$e(t,d),x=[f.c[0]+f.nx*r,o(f.c,u),f.c[2]+f.nz*r],g=[m.c[0]+m.nx*r,o(m.c,d),m.c[2]+m.nz*r],p=[m.c[0]+m.nx*r,a(m.c,d),m.c[2]+m.nz*r],v=[f.c[0]+f.nx*r,a(f.c,u),f.c[2]+f.nz*r];h?i.quad(g,x,v,p,[d/l,g[1]/l],[u/l,x[1]/l],[u/l,v[1]/l],[d/l,p[1]/l],c):i.quad(x,g,p,v,[u/l,x[1]/l],[d/l,g[1]/l],[d/l,p[1]/l],[u/l,v[1]/l],c)}}function Nn(i,t,e,n,s,r,o,a=1){for(let c=e;c<n-1e-6;c+=s){let l=Math.min(n,c+s),h=$e(t,c),u=$e(t,l);for(let d=0;d<r.length-1;d++){let[f,m]=r[d],[x,g]=r[d+1],p=(v,y,_)=>[v.c[0]+v.nx*y,v.c[1]+_,v.c[2]+v.nz*y];i.quad(p(h,f,m),p(u,f,m),p(u,x,g),p(h,x,g),[c/a,m/a],[l/a,m/a],[l/a,g/a],[c/a,g/a],o)}}}function dn(i,t,e,n,s,r,o,a,c,l=1){let h=(g,p,v)=>[t.c[0]+t.ux*(e+g)+t.nx*(n+p),v,t.c[2]+t.uz*(e+g)+t.nz*(n+p)],u=s/2,d=r/2,f=a,m=a+o,x=(g,p,v,y,_,P)=>i.quad(g,p,v,y,[0,0],[_/l,0],[_/l,P/l],[0,P/l],c);x(h(-u,-d,f),h(u,-d,f),h(u,-d,m),h(-u,-d,m),s,o),x(h(u,d,f),h(-u,d,f),h(-u,d,m),h(u,d,m),s,o),x(h(u,-d,f),h(u,d,f),h(u,d,m),h(u,-d,m),r,o),x(h(-u,d,f),h(-u,-d,f),h(-u,-d,m),h(-u,d,m),r,o),x(h(-u,-d,m),h(u,-d,m),h(u,d,m),h(-u,d,m),s,r),x(h(-u,d,f),h(u,d,f),h(u,-d,f),h(-u,-d,f),s,r)}function Nd(i,t,e,n){let s=i.viaduct,r=new fe;r.name="viaduto";let o=new Qt,a=new Qt,c=new Qt,l=new Qt,h=new Qt,u=new Qt,d=new Qt,f=Tt(214,210,202),m=Tt(188,184,176),x=Tt(228,225,218),[g,p]=s.deck,v=s.ramps.find(V=>Math.hypot(V.pts[0][0]-g[0],V.pts[0][1]-g[1])<1)||s.ramps[1],y=s.ramps.find(V=>V!==v),_=[...v.pts.slice().reverse(),...y.pts.slice(1)],P=[...v.h.slice().reverse(),...y.h.slice(1)],M=new Rn(_,P),T=0;{let V=0;for(let Z=1;Z<v.pts.length;Z++)V+=Math.hypot(v.pts[Z][0]-v.pts[Z-1][0],v.pts[Z][1]-v.pts[Z-1][1]);T=V}let w=[];for(let V of n||[])for(let Z=T-5;Z<T+40;Z+=.25){let Q=M.at(Z),at=1e9;for(let q=0;q<V.L;q+=2){let R=V.at(q),b=Math.hypot(Q[0]-R[0],Q[2]-R[2]);b<at&&(at=b)}at<.6&&(w.push(Z),Z+=3)}w.length||(w=[T+13.5,T+18.1]),w.sort((V,Z)=>V-Z);let S=T+7.5,E=T+24.5,A=T+44,F=T+62,D=Ql(M,S-.6,F+.6,1),O=S-.6,k=-6.3,U=6.3,B=0,C=8;vn(a,D,0,D.L,1,-5.85,3.55,V=>V+.02,[1,1,1],C,[0,1,0]),vn(c,D,0,D.L,1,4.05,6,V=>V+.17,[1,1,1],2,[0,1,0]),Vs(o,D,0,D.L,1,4.05,V=>V[1]+.02,V=>V[1]+.17,f,2,!0),vn(o,D,0,D.L,1,U,k,V=>V-.3,m,2,[0,-1,0]);for(let[V,Z]of[[k,!1],[U,!0]])Vs(o,D,0,D.L,1,V,Q=>Q[1]-.75,Q=>Q[1]+.25,x,2,Z);vn(o,D,0,D.L,1,k,k+.25,V=>V+.25,x,2,[0,1,0]),vn(o,D,0,D.L,1,U-.2,U,V=>V+.25,x,2,[0,1,0]);let H=(V,Z)=>[[V,.02],[V+Z*.04,.1],[V+Z*.17,.33],[V+Z*.31,.85],[V+Z*.42,.85],[V+Z*.42,.02]].map(([Q,at])=>[Q,at]),G=H(-6.27,1),J=[[3.55,.02],[3.59,.1],[3.72,.33],[3.86,.85],[3.97,.85],[4.05,.17]];Nn(o,D,0,D.L,1,G,x,2),Nn(o,D,0,D.L,1,J.slice().reverse(),x,2),Nn(o,D,0,D.L,1,[[6,.17],[6,.75],[6.3,.75],[6.3,.25]],x,2);let ct=Tt(246,196,18);for(let[V,Z]of[[-6.1,.85],[6.15,.75]]){for(let Q=.3;Q<D.L;Q+=.22){let at=$e(D,Q),q=at.c[0]+at.nx*V,R=at.c[2]+at.nz*V,b=at.c[1]+Z,z=.025;u.quad([q-at.ux*z,b,R-at.uz*z],[q+at.ux*z,b,R+at.uz*z],[q+at.ux*z,b+1.9,R+at.uz*z],[q-at.ux*z,b+1.9,R-at.uz*z],[0,0],[1,0],[1,1],[0,1],ct),u.quad([q-at.nx*z,b,R-at.nz*z],[q+at.nx*z,b,R+at.nz*z],[q+at.nx*z,b+1.9,R+at.nz*z],[q-at.nx*z,b+1.9,R-at.nz*z],[0,0],[1,0],[1,1],[0,1],ct)}for(let Q of[.06,1.86])Nn(u,D,0,D.L,1,[[V-.03,Z+Q],[V+.03,Z+Q],[V+.03,Z+Q+.06],[V-.03,Z+Q+.06],[V-.03,Z+Q]],ct);for(let Q=.3;Q<D.L;Q+=2.5){let at=$e(D,Q);dn(u,at,0,V,.08,.08,1.95,at.c[1]+Z,ct)}}let dt=Tt(236,236,230);for(let[V,Z,Q,at]of[[-1.25,.06,ct,!1],[-1.05,.06,ct,!1],[-5.5,.07,dt,!1],[3.2,.07,dt,!1]])vn(h,D,0,D.L,1,V-Z,V+Z,q=>q+.04,Q,1,[0,1,0]);let Y=[[S,E],[E,A],[A,F]];for(let[V,Z]of Y){let Q=V-O+.4,at=Z-O-.4;for(let q of[-4.6,-1.55,1.55,4.6])Nn(o,D,Q,at,1,[[q-.17,-.3],[q-.17,-1.45],[q-.38,-1.6],[q-.38,-1.82],[q+.38,-1.82],[q+.38,-1.6],[q+.17,-1.45],[q+.17,-.3]],m,2);for(let q of[.03,.5,.97]){let R=Q+(at-Q)*q,b=$e(D,R);dn(o,b,0,0,.25,9,1.2,b.c[1]-1.55,m,2)}}let et=new Se(.55,.55,1,24,1,!0),ft=ks(),rt=new wt({color:14078666,map:ft.map,normalMap:ft.normalMap,roughness:.85}),Mt=(V,Z)=>{let Q=t.at(V,Z);for(let at of n||[])for(let q=0;q<at.L;q+=3){let R=at.at(q);Math.hypot(R[0]-V,R[2]-Z)<6&&(Q=Math.min(Q,R[1]+.2))}return Q};for(let V of[E,A]){let Z=$e(D,V-O),Q=Z.c[1]-1.82,at=1.5,q=[[-6,0],[6,0],[6,-.6],[4.6,-at],[-4.6,-at],[-6,-.6]],R=(b,z,j)=>[Z.c[0]+Z.nx*b+Z.ux*j,Q+z,Z.c[2]+Z.nz*b+Z.uz*j];for(let b=0;b<q.length;b++){let[z,j]=q[b],[st,tt]=q[(b+1)%q.length];o.quad(R(z,j,-.85),R(st,tt,-.85),R(st,tt,.85),R(z,j,.85),[0,0],[1,0],[1,.5],[0,.5],m)}for(let b of[-.85,.85]){let z=q.map(([j,st])=>R(j,st,b));o.tri(z[0],z[1],z[2],[0,0],[1,0],[1,1],m),o.tri(z[0],z[2],z[3],[0,0],[1,0],[1,1],m),o.tri(z[0],z[3],z[4],[0,0],[1,0],[1,1],m),o.tri(z[0],z[4],z[5],[0,0],[1,0],[1,1],m)}for(let b of[-3.2,3.2]){let z=Z.c[0]+Z.nx*b,j=Z.c[2]+Z.nz*b,st=Mt(z,j)-.3,tt=Q-at-st+.05,pt=new It(et,rt);pt.scale.set(1,tt,1),pt.position.set(z,st+tt/2,j),pt.castShadow=!0,pt.receiveShadow=!0,r.add(pt);let ht=new It(new Se(.75,.8,.5,20),rt);ht.position.set(z,st+.25,j),r.add(ht)}}for(let[V,Z]of[[S,-1],[F,1]]){let Q=$e(M,V),at=Q.c[1]-1.82;dn(o,Q,Z*.6,0,1.4,13,1.3,at-1.3,m,2);let q=14;for(let R=0;R<q;R++){let b=-6.6+13.2*R/q,z=-6.6+13.2*(R+1)/q,j=[Q.c[0]+Q.nx*b+Q.ux*Z*1.3,0,Q.c[2]+Q.nz*b+Q.uz*Z*1.3],st=[Q.c[0]+Q.nx*z+Q.ux*Z*1.3,0,Q.c[2]+Q.nz*z+Q.uz*Z*1.3],tt=Mt(j[0],j[2])-.5,pt=Mt(st[0],st[2])-.5,ht=at-1.3,xt=ht,At=Z<0?[[st[0],pt,st[2]],[j[0],tt,j[2]],[j[0],ht,j[2]],[st[0],xt,st[2]]]:[[j[0],tt,j[2]],[st[0],pt,st[2]],[st[0],xt,st[2]],[j[0],ht,j[2]]];l.quad(At[0],At[1],At[2],At[3],[b/3,tt/3],[z/3,pt/3],[z/3,xt/3],[b/3,ht/3],[1,1,1])}}let _t=Ql(M,0,S+1.5,1),it=Ql(M,F-1.5,M.L,1);for(let[V,Z]of[[_t,"N"],[it,"S"]]){vn(a,V,0,V.L,1,-5.85,5.85,ht=>ht+.12,[1,1,1],C,[0,1,0]);for(let[ht,xt,At]of[[-.12,.06,ct],[.12,.06,ct],[-5.5,.07,dt],[5.5,.07,dt]])vn(h,V,0,V.L,1,ht-xt,ht+xt,vt=>vt+.14,At,1,[0,1,0]);Nn(o,V,0,V.L,1,H(-6.27,1),x,2),Nn(o,V,0,V.L,1,H(6.27,-1).slice().reverse(),x,2);let at=ht=>ht[1]-t.at(ht[0],ht[2]),q=0;for(let ht=0;ht<V.L;ht+=1){let xt=$e(V,ht);at(xt.c)>.25&&(q=ht)}let R=Math.min(V.L,q+2),b=0,z=Z==="N"?V.L:R,j=Z==="N"?Math.max(0,V.L-R):0,st=Z==="N"?(()=>{let ht=V.L;for(let xt=V.L;xt>=0;xt-=1){let At=$e(V,xt);if(at(At.c)>.25)ht=xt;else break}return Math.max(0,ht-2)})():0,tt=Z==="N"?st:0,pt=Z==="N"?V.L:R;for(let[ht,xt]of[[-6.3,!0],[6.3,!1]])Vs(l,V,tt,pt,1,ht,At=>Math.min(t.at(At[0]+0,At[2]),At[1])-.6,At=>At[1]+.02,[1,1,1],3,xt);vn(o,V,tt,pt,1,-6.3,-6.3+1e-4,ht=>ht,x)}for(let V of[6,D.L/2,D.L-6]){let Z=$e(D,V),Q=Z.c[0]+Z.nx*5.8,at=Z.c[2]+Z.nz*5.8,q=Z.c[1]+.17;dn(d,Z,0,5.8,.16,.16,8.5,q,Tt(150,152,156)),dn(d,Z,0,4.6,.12,2.4,.12,q+8.4,Tt(150,152,156)),dn(d,Z,0,3.4,.5,.25,.12,q+8.3,Tt(230,230,225))}let St=Bs(),W=zs(),X=na(),I=(V,Z,Q=!0)=>{let at=new It(V.geometry(),Z);return at.castShadow=Q,at.receiveShadow=!0,r.add(at),at};I(o,new wt({vertexColors:!0,map:ft.map,normalMap:ft.normalMap,normalScale:new gt(.5,.5),roughness:.85,side:$t})),I(a,new wt({map:St.map,normalMap:St.normalMap,normalScale:new gt(.5,.5),roughness:.9,side:$t,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),!1),I(c,new wt({map:W.map,normalMap:W.normalMap,roughness:.9,side:$t}),!1),I(l,new wt({map:X.map,normalMap:X.normalMap,roughness:.92,side:$t})),I(h,new wt({vertexColors:!0,roughness:.6,side:$t,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),I(u,new wt({vertexColors:!0,roughness:.45,metalness:.3,side:$t})),I(d,new wt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let ot=D.at(D.L/2);return{group:r,deck:D,center:ot,supports:{sAN:S,sP1:E,sP2:A,sAS:F},cross:w}}var th=Be(()=>{Oe();Kn();pa();pi()});function Fd(i){let t=new mn({depthWrite:!1,side:je,fog:!1,toneMapped:!1,uniforms:{sunDir:{value:new N(0,1,0)},zen:{value:new Kt(.045,.17,.55)},hor:{value:new Kt(.5,.62,.8)},day:{value:1},clouds:{value:i==="low"?0:1}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*0.99999;}",fragmentShader:`uniform vec3 sunDir,zen,hor;uniform float day,clouds;varying vec3 vW;
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
      }`}),e=new It(new Dn(3e4,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="ceu",e}var Od=Be(()=>{Oe()});function Bd(i,t,e){let n=(i.extras||{}).pools;if(!n||!n.length)return null;let s=new fe;s.name="clube";let r=new Qt,o=new Qt,a=new Qt,c=new wt({color:3127e3,roughness:.06,metalness:.1,emissive:674394,emissiveIntensity:.35,transparent:!0,opacity:.92});n.forEach(([u,d,f,m,x],g)=>{f<m&&([f,m]=[m,f],x+=Math.PI/2);let p=Math.cos(x),v=Math.sin(x),y=(U,B,C)=>[u+U*p-B*v,C,d+U*v+B*p],_=f/2,P=m/2,M=1.8,T=1.2,w=-1e9;for(let[U,B]of[[-_-2,-P-2],[_+2,-P-2],[_+2,P+2],[-_-2,P+2],[0,0]]){let C=y(U,B,0);w=Math.max(w,t.at(C[0],C[2]))}w+=.1;{let U=M+3.5,B=[[-_-U,-P-U],[_+U,-P-U],[_+U,P+U],[-_-U,P+U]];for(let C=0;C<4;C++){let[H,G]=B[C],[J,ct]=B[(C+1)%4];o.quad(y(H,G,w-3.5),y(J,ct,w-3.5),y(J,ct,w+.12),y(H,G,w+.12),[0,0],[1,0],[1,1],[0,1],Tt(200,194,180))}}let S=Tt(214,206,190),E=Tt(240,238,232),A=(U,B,C,H)=>{let G=(J,ct,dt,Y)=>r.quad(y(J,ct,C),y(dt,ct,C),y(dt,Y,C),y(J,Y,C),[J/2,ct/2],[dt/2,ct/2],[dt/2,Y/2],[J/2,Y/2],H,[0,1,0]);G(-_-B,-P-B,_+B,-P-U),G(-_-B,P+U,_+B,P+B),G(-_-B,-P-U,-_-U,P+U),G(_+U,-P-U,_+B,P+U)};A(0,.45,w+.18,E),A(.45,M+3.5,w+.12,S);let F=Tt(120,200,225),D=[[-_,-P],[_,-P],[_,P],[-_,P]];for(let U=0;U<4;U++){let[B,C]=D[U],[H,G]=D[(U+1)%4];o.quad(y(B,C,w-T),y(H,G,w-T),y(H,G,w+.18),y(B,C,w+.18),[0,0],[1,0],[1,1],[0,1],F)}o.quad(y(-_,-P,w-T),y(-_,P,w-T),y(_,P,w-T),y(_,-P,w-T),[0,0],[1,0],[1,1],[0,1],Tt(90,180,210),[0,1,0]);let O=new Ri(f,m);O.rotateX(-Math.PI/2);let k=new It(O,c);if(k.position.set(u,w-.05,d),k.rotation.y=-x,k.receiveShadow=!0,s.add(k),g===0){let U=_+1.2,B=-P-1.2,C=y(U,B,w),H=new It(new Ve(2.2,5.2,2.2),new wt({color:14210252,roughness:.8}));H.position.set(C[0],w+2.6,C[2]),H.rotation.y=-x,H.castShadow=!0,s.add(H),[[1994704,1],[15905815,-1]].forEach(([G,J],ct)=>{let dt=[];for(let et=0;et<=24;et++){let ft=et/24,rt=ft*Math.PI*1.3*J,_t=U-1.2-ft*6.5+Math.sin(rt)*3.2*.4,it=B+.8+ft*4.5*J*.6+(1-Math.cos(rt))*1.2*J,St=y(_t,it,w+5-ft*4.8);dt.push(new N(St[0],St[1],St[2]))}let Y=new It(new Oo(new _r(dt),48,.55,10,!1),new wt({color:G,roughness:.35,side:$t}));Y.castShadow=!0,s.add(Y)});for(let G=0;G<5;G++){let J=-_+2+G*(f-4)/4,ct=P+2.6,dt=y(J,ct,w+.12),Y=new It(new Se(.04,.04,2.4,6),new wt({color:15658734}));Y.position.set(dt[0],w+1.3,dt[2]),s.add(Y);let et=new It(new Cs(1.5,.5,8,1,!0),new wt({color:[14826286,2784737,16106776,16777215,2864755][G],side:$t,roughness:.7}));et.position.set(dt[0],w+2.55,dt[2]),et.castShadow=!0,s.add(et);let ft=new It(new Ve(1.8,.3,.6),new wt({color:16053488})),rt=y(J+1.2,ct+.6,0);ft.position.set(rt[0],w+.35,rt[2]),ft.rotation.y=-x,s.add(ft)}}});let l=(u,d)=>{let f=new It(u.geometry(),d);f.receiveShadow=!0,s.add(f)};l(r,new wt({vertexColors:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),l(o,new wt({vertexColors:!0,roughness:.3,side:$t})),e.add(s);let h=n[0];return{group:s,center:[h[0],t.at(h[0],h[1]),h[1]]}}var zd=Be(()=>{Oe();Kn()});function kd(i){return new Set(((i.viaduct2||{}).ways||[]).map(t=>t.id))}function ma(i,t=0){let e=i.viaduct2;if(!e)return null;let n=[];for(let c of e.ways){let l=c.w/2+2.2+t;for(let h=0;h<c.pts.length-1;h++)n.push([c.pts[h][0],c.pts[h][1],c.pts[h+1][0],c.pts[h+1][1],l])}let s=1e9,r=-1e9,o=1e9,a=-1e9;for(let c of n)s=Math.min(s,c[0],c[2]),r=Math.max(r,c[0],c[2]),o=Math.min(o,c[1],c[3]),a=Math.max(a,c[1],c[3]);return(c,l)=>{if(c<s-8||c>r+8||l<o-8||l>a+8)return!1;for(let[h,u,d,f,m]of n){let x=d-h,g=f-u,p=x*x+g*g||1,v=((c-h)*x+(l-u)*g)/p;v=Math.max(0,Math.min(1,v));let y=h+x*v-c,_=u+g*v-l;if(y*y+_*_<m*m)return!0}return!1}}function Hd(i){let t=i.viaduct2;if(!t)return null;let e=new Map;for(let n of t.ways)e.set(n.id,new Rn(n.pts,n.h));return(n,s,r)=>{let o=e.get(n);if(!o)return null;let a=1e9,c=null;for(let l=0;l<=o.L;l+=1){let h=o.at(l),u=(h[0]-s)**2+(h[2]-r)**2;u<a&&(a=u,c=h[1])}return c}}function Vd(i,t,e,n){let s=i.viaduct2;if(!s)return null;let r=new fe;r.name="viaduto_centro";let o=new Qt,a=new Qt,c=new Qt,l=new Qt,h=new Qt,u=new Qt,d=Tt(222,218,208),f=Tt(196,192,184),m=Tt(236,233,226),x=Tt(232,226,214),g=(n||[]).filter(O=>{let k=O.at(O.L/2);return!0}),p=(O,k)=>{let U=1e9;for(let B of g)for(let C=0;C<B.L;C+=2){let H=B.at(C),G=Math.hypot(H[0]-O,H[2]-k);G<U&&(U=G)}return U},v=[],y=[];for(let O of s.ways){let k=Math.min(3.6,O.w/2-.4)+1.4;for(let U=0;U<O.pts.length-1;U++)y.push([O.id,O.pts[U][0],O.pts[U][1],O.pts[U+1][0],O.pts[U+1][1],k])}let _=(O,k,U,B=.05)=>{for(let[C,H,G,J,ct,dt]of y){if(C===O)continue;let Y=J-H,et=ct-G,ft=Y*Y+et*et||1,rt=((k-H)*Y+(U-G)*et)/ft;rt=Math.max(0,Math.min(1,rt));let Mt=H+Y*rt-k,_t=G+et*rt-U;if(Mt*Mt+_t*_t<(dt+B)*(dt+B))return!0}return!1};for(let O of s.ways){let k=new Rn(O.pts,O.h),U=Math.min(3.6,O.w/2-.4),B=.45,C=U+B,H=.62,G=k.L,J=ft=>{let rt=k.at(ft);return rt[1]-t.at(rt[0],rt[2])},ct=ft=>{let rt=k.at(ft);return p(rt[0],rt[2])<8.5},dt=ft=>rt=>rt+ft;vn(a,k,0,G,1,-C,C,dt(.06),[1,1,1],8,[0,1,0]),vn(h,k,0,G,1,-.12,-.02,dt(.09),Tt(236,186,40),1,[0,1,0]),vn(h,k,0,G,1,.02,.12,dt(.09),Tt(236,186,40),1,[0,1,0]);let Y=[],et=null;for(let ft=0;ft<=G;ft+=1){let rt=J(ft)>.3;rt&&!et&&(et=[Math.max(0,ft-1),ft]),rt&&(et[1]=Math.min(G,ft+1)),!rt&&et&&(Y.push(et),et=null)}et&&Y.push(et);for(let[ft,rt]of Y){for(let _t=ft;_t<rt-1e-6;_t+=1){let it=Math.min(rt,_t+1),St=$e(k,(_t+it)/2);for(let W of[1,-1]){let X=St.c[0]+St.nx*W*(C+.1),I=St.c[2]+St.nz*W*(C+.1),ot=St.c[0]+St.nx*W*(U+.3),V=St.c[2]+St.nz*W*(U+.3);if(_(O.id,X,I))continue;let Z=z=>W*(C+z),Q=[[Z(0),.06],[Z(0),.14],[Z(.18),.32],[Z(.39),.86],[Z(.62-0),.86],[Z(.62),-.25]],at=W>0?Q:Q.slice().reverse();Nn(o,k,_t,it,1,at,m,2);let q=W*(C+.5),R=Tt(208,150,42),b=(z,j)=>{let st=[];for(let tt=0;tt<=8;tt++){let pt=tt/8*6.283;st.push([q+Math.cos(pt)*j,z+Math.sin(pt)*j])}return st};Nn(u,k,_t,it,1,b(1.32,.045),R),Nn(u,k,_t,it,1,b(1.06,.03),R),Math.round(_t)%2===0&&dn(u,St,0,q,.05,.05,.48,St.c[1]+.86,R),ct((_t+it)/2)||Vs(l,k,_t,it,1,W*(C+H),z=>Math.min(t.at(z[0],z[2]),z[1])-.5,z=>z[1]-.25,[1,1,1],3,W<0)}}let Mt=null;for(let _t=ft;_t<=rt;_t+=1){let it=ct(_t);it&&Mt===null&&(Mt=_t),(!it||_t+1>rt)&&Mt!==null&&(P(k,Mt,_t,C+H),Mt=null)}for(let _t=ft+12;_t<rt-6;_t+=32)v.push([k,_t,C+.3])}}function P(O,k,U,B){vn(o,O,k,U,1,B,-B,C=>C-.35,f,2,[0,-1,0]);for(let[C,H]of[[B,!0],[-B,!1]])Vs(o,O,k,U,1,C,G=>G[1]-1.25,G=>G[1]-.25,m,2,H);for(let C of[-2.8,0,2.8])Nn(o,O,k+.3,U-.3,1,[[C-.2,-.35],[C-.2,-1.15],[C-.35,-1.3],[C+.35,-1.3],[C+.2,-1.15],[C+.2,-.35]],f,2);for(let C of[k,U]){let H=$e(O,C),G=Math.min(t.at(H.c[0],H.c[2]),H.c[1]-2)-.6,J=H.c[1]-.35-G;dn(l,H,0,0,.8,2*B+.4,J,G,[1,1,1],3)}if(U-k>18){let C=(k+U)/2,H=$e(O,C),G=H.c[1]-1.3;dn(o,H,0,0,1.2,2*B,.9,G-.9,f,2);for(let J of[-B*.55,B*.55]){let ct=H.c[0]+H.nx*J,dt=H.c[2]+H.nz*J,Y=t.at(ct,dt)-.3,et=new It(new Se(.45,.45,G-.9-Y,18),M);et.position.set(ct,(G-.9+Y)/2,dt),et.castShadow=!0,r.add(et)}}}var M=new wt({color:14473423,roughness:.85});for(let[O,k,U]of v){let B=$e(O,k),C=B.c[1]+.86,H=Tt(190,188,182);dn(o,B,0,U,.26,.26,2.5,C,H,2),dn(o,B,0,U,.2,.2,4.2,C+2.5,H,2),dn(o,B,0,U,.14,.14,2.6,C+6.7,H,2),dn(u,B,0,U-1,.08,2,.08,C+9.1,Tt(150,152,156)),dn(u,B,0,U-2.1,.5,.24,.14,C+9,Tt(235,235,228))}let T=ks(),w=Bs(),S=zs(),E=na(),A=(O,k,U=!0)=>{let B=new It(O.geometry(),k);return B.castShadow=U,B.receiveShadow=!0,r.add(B),B};A(o,new wt({vertexColors:!0,map:T.map,normalMap:T.normalMap,normalScale:new gt(.4,.4),roughness:.85,side:$t})),A(a,new wt({map:w.map,normalMap:w.normalMap,normalScale:new gt(.5,.5),roughness:.9,side:$t,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),!1),A(c,new wt({map:S.map,normalMap:S.normalMap,roughness:.9,side:$t}),!1),A(l,new wt({color:14210252,map:T.map,normalMap:T.normalMap,normalScale:new gt(.5,.5),roughness:.92,side:$t})),A(h,new wt({vertexColors:!0,roughness:.6,side:$t,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),A(u,new wt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let F=s.ways.find(O=>O.lab==="tabuleiro"),D=F.pts[Math.floor(F.pts.length/2)];return{group:r,center:[D[0],s.T,D[1]]}}var Gd=Be(()=>{Oe();Kn();pa();th();pi()});function en(i,t,e,n,s,r,o,a,c,l,h,u){let d=(_,P,M)=>[t[0]+n[0]*(s+_)+e[0]*(o+P),M,t[1]+n[1]*(s+_)+e[1]*(o+P)],f=-a/2,m=a/2,x=-c/2,g=c/2,p=h+r,v=h+r+l,y=(_,P,M,T)=>i.quad(_,P,M,T,[0,0],[1,0],[1,1],[0,1],u);y(d(f,g,p),d(m,g,p),d(m,g,v),d(f,g,v)),y(d(m,x,p),d(f,x,p),d(f,x,v),d(m,x,v)),y(d(m,g,p),d(m,x,p),d(m,x,v),d(m,g,v)),y(d(f,x,p),d(f,g,p),d(f,g,v),d(f,x,v)),y(d(f,x,v),d(f,g,v),d(m,g,v),d(m,x,v))}function ga(i,t,e,n,s,r,o,a,c,l){let h=(m,x,g)=>[t[0]+n[0]*(s+m)+e[0]*(r+x),g,t[1]+n[1]*(s+m)+e[1]*(r+x)],u=o/2,d=h(0,0,a+c),f=[h(-u,-u,a),h(u,-u,a),h(u,u,a),h(-u,u,a)];for(let m=0;m<4;m++)i.tri(f[m],f[(m+1)%4],d,[0,0],[1,0],[.5,1],l)}function Wd(i,t,e){let n=i.extras.church,s=1e9,r=null;for(let W of i.roads)if(!(W.hw==="footway"||W.hw==="path"))for(let X=0;X<W.p.length-1;X++){let I=W.p[X],ot=W.p[X+1],V=ot[0]-I[0],Z=ot[1]-I[1],Q=V*V+Z*Z,at=((n[0]-I[0])*V+(n[1]-I[1])*Z)/(Q||1);at=Math.max(0,Math.min(1,at));let q=I[0]+V*at,R=I[1]+Z*at,b=Math.hypot(q-n[0],R-n[1]);b<s&&(s=b,r=[q,R])}let o=[r[0]-n[0],r[1]-n[1]],a=Math.hypot(...o);o=[o[0]/a,o[1]/a];let c=[-o[1],o[0]],l=Math.max(0,s-22),h=[n[0]+o[0]*l,n[1]+o[1]*l],u=t.at(h[0],h[1])-.2,d=new fe;d.name="igreja";let f=new Qt,m=new Qt,x=new Qt,g=new Qt,p=new Qt,v=Tt(246,236,206),y=Tt(226,192,118),_=Tt(40,34,30),P=Tt(160,82,58),M=Tt(240,234,214),T=Tt(52,46,44),w=12,S=28,E=9.5;en(f,h,o,c,0,0,-4,w,S,E,u,v);for(let W=0;W<=7;W++){let X=-4-S/2+W*S/7;en(m,h,o,c,w/2,0,X,.5,.6,E,u,y),en(m,h,o,c,-w/2,0,X,.5,.6,E,u,y)}en(m,h,o,c,0,E-.5,-4,w+.6,S+.6,.6,u,y),en(m,h,o,c,0,0,-4,w+.4,S+.4,.8,u,y);for(let W=0;W<7;W++){let X=-4-S/2+(W+.5)*S/7;for(let I of[-1,1]){let ot=(V,Z,Q)=>[h[0]+c[0]*(I*(w/2+.03))+o[0]*(X+V),u+Q,h[1]+c[1]*(I*(w/2+.03))+o[1]*(X+V)];x.quad(ot(-.8,0,2.5),ot(.8,0,2.5),ot(.8,0,6.6),ot(-.8,0,6.6),[0,0],[1,0],[1,1],[0,1],Tt(60,70,95)),x.tri(ot(-.8,0,6.6),ot(.8,0,6.6),ot(0,0,7.8),[0,0],[1,0],[.5,1],Tt(60,70,95))}}let A=(W,X,I)=>[h[0]+c[0]*W+o[0]*X,I,h[1]+c[1]*W+o[1]*X],F=E+w/2*.75,D=-4-S/2-.6,O=-4+S/2+.3;g.quad(A(-w/2-.6,D,u+E),A(-w/2-.6,O,u+E),A(0,O,u+F),A(0,D,u+F),[0,0],[S/2.4,0],[S/2.4,4],[0,4],P),g.quad(A(w/2+.6,O,u+E),A(w/2+.6,D,u+E),A(0,D,u+F),A(0,O,u+F),[0,0],[S/2.4,0],[S/2.4,4],[0,4],P),f.tri(A(-w/2,O-.3,u+E),A(w/2,O-.3,u+E),A(0,O-.3,u+F),[0,0],[1,0],[.5,1],v),f.tri(A(w/2,D+.6,u+E),A(-w/2,D+.6,u+E),A(0,D+.6,u+F),[0,0],[1,0],[.5,1],v),en(f,h,o,c,0,0,-4-S/2-2.5,8,5,7.5,u,v),ga(g,h,o,c,0,-4-S/2-2.5,8.6,u+7.5,2.5,P);let k=-4+S/2+1.8,U=5.4;en(f,h,o,c,0,0,k,U,U,23.6,u,v);for(let[W,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])en(m,h,o,c,W*(U/2-.05),0,k+X*(U/2-.05),.7,.7,23.8,u,y);for(let[W,X]of[[10.6,.7],[17.6,.6],[23.4,.7]])en(m,h,o,c,0,W,k,U+.7,U+.7,X,u,y),en(m,h,o,c,0,W-.25,k,U+.35,U+.35,.25,u,y);let B=(W,X,I=0)=>A(W,k+U/2+.03+I,u+X),C=(W,X,I,ot,V,Z,Q=0)=>{let at=ot/2,q=[];for(let b=0;b<=8;b++){let j=b/8*Math.PI/3;q.push([X-at+ot*(1-Math.cos(j))*.5/(1-Math.cos(Math.PI/3))*.5*2*.5+0,I+V+Math.sin(j)*at*1.15])}W.quad(B(X-at,I,Q),B(X+at,I,Q),B(X+at,I+V,Q),B(X-at,I+V,Q),[0,0],[1,0],[1,1],[0,1],Z);let R=10;for(let b=0;b<R;b++){let z=b/R,j=(b+1)/R,st=X-at+at*z,tt=X-at+at*j,pt=I+V+Math.sqrt(Math.max(0,1-(1-z)**2))*at*1.25,ht=I+V+Math.sqrt(Math.max(0,1-(1-j)**2))*at*1.25;W.quad(B(st,I+V,Q),B(tt,I+V,Q),B(tt,ht,Q),B(st,pt,Q),[0,0],[1,0],[1,1],[0,1],Z),W.quad(B(2*X-tt,I+V,Q),B(2*X-st,I+V,Q),B(2*X-st,pt,Q),B(2*X-tt,ht,Q),[0,0],[1,0],[1,1],[0,1],Z)}};C(m,0,0,3.4,3.6,y,.01),C(x,0,0,2.6,3.3,T,.03);for(let W of[-1,1]){let X=A(W*1.75,k+U/2+.35,0),I=new It(new Se(.22,.24,3.6,14),new wt({color:16052714,roughness:.6}));I.position.set(X[0],u+1.8,X[2]),I.castShadow=!0,d.add(I);let ot=new It(new Ve(.6,.25,.6),new wt({color:16052714}));ot.position.set(X[0],u+3.7,X[2]),d.add(ot)}let H=(W,X,I,ot,V,Z)=>{for(let Q=0;Q<18;Q++){let at=Q/18*Math.PI*2,q=(Q+1)/18*Math.PI*2;W.tri(B(X,I,Z),B(X+Math.cos(at)*ot,I+Math.sin(at)*ot,Z),B(X+Math.cos(q)*ot,I+Math.sin(q)*ot,Z),[0,0],[1,0],[1,1],V)}};for(let[W,X]of[[0,.55],[0,-.55],[.55,0],[-.55,0]])H(m,W,7.4+X,.78,y,.02);for(let[W,X]of[[0,.5],[0,-.5],[.5,0],[-.5,0]])H(x,W,7.4+X,.55,T,.04);en(m,h,o,c,0,4.9,k+U/2+.06,.22,.12,1.4,u,y),en(m,h,o,c,0,5.8,k+U/2+.06,.9,.12,.22,u,y),C(m,0,12.6,1.5,2.6,y,.01),C(x,0,12.75,1.1,2.4,T,.03);for(let W of[-1,1]){let X=(I,ot)=>A(W*(U/2+.03),k+I,u+ot);x.quad(X(-.55,12.75),X(.55,12.75),X(.55,15.2),X(-.55,15.2),[0,0],[1,0],[1,1],[0,1],T),x.tri(X(-.55,15.2),X(.55,15.2),X(0,16.1),[0,0],[1,0],[.5,1],T)}H(m,0,20.6,.85,y,.02),H(x,0,20.6,.6,T,.04),ga(p,h,o,c,0,k,U-.4,u+24.1,10.5,M);for(let[W,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])en(p,h,o,c,W*(U/2-.1),24.1,k+X*(U/2-.1),.7,.7,1,u,M),ga(p,h,o,c,W*(U/2-.1),k+X*(U/2-.1),.75,u+25.1,2.4,M);for(let W of[-1,1]){let X=W*4,I=(ot,V)=>A(X+ot,-4+S/2+.03,u+V);x.quad(I(-.75,2.2),I(.75,2.2),I(.75,6.4),I(-.75,6.4),[0,0],[1,0],[1,1],[0,1],Tt(70,52,40)),x.tri(I(-.75,6.4),I(.75,6.4),I(0,7.6),[0,0],[1,0],[.5,1],Tt(70,52,40)),en(m,h,o,c,W*(w/2-.3),E,-4+S/2-.3,.8,.8,1.2,u,y),ga(m,h,o,c,W*(w/2-.3),-4+S/2-.3,.85,u+E+1.2,1.6,y)}en(m,h,o,c,0,34.5,k,.18,.18,2.2,u,Tt(240,240,236)),en(m,h,o,c,0,35.7,k,1.1,.18,.18,u,Tt(240,240,236)),en(m,h,o,c,0,0,k+5,9,4,.35,u,Tt(200,196,188));let G=new Qt,J=new Qt,ct=Tt(240,240,240),dt=10,Y=-4-S/2-5,et=k+8,ft=[[-dt,Y],[-dt,et],[-1.8,et],[1.8,et],[dt,et],[dt,Y]];for(let W=0;W<ft.length-1;W++){if(W===1)continue;let X=ft[W],I=ft[W+1],ot=Math.hypot(I[0]-X[0],I[1]-X[1]);for(let q=0;q<=ot;q+=.25){let R=q/ot,b=X[0]+(I[0]-X[0])*R,z=X[1]+(I[1]-X[1])*R,j=A(b,z,0),st=t.at(j[0],j[2]);G.quad([j[0]-.012,st+.95,j[2]],[j[0]+.012,st+.95,j[2]],[j[0]+.012,st+2.2,j[2]],[j[0]-.012,st+2.2,j[2]],[0,0],[1,0],[1,1],[0,1],ct)}let V=A(X[0],X[1],0),Z=A(I[0],I[1],0),Q=t.at(V[0],V[2]),at=t.at(Z[0],Z[2]);for(let q of[1,2.15])G.quad([V[0],Q+q,V[2]],[Z[0],at+q,Z[2]],[Z[0],at+q+.06,Z[2]],[V[0],Q+q+.06,V[2]],[0,0],[1,0],[1,1],[0,1],ct);J.quad([V[0],Q-.3,V[2]],[Z[0],at-.3,Z[2]],[Z[0],at+.85,Z[2]],[V[0],Q+.85,V[2]],[0,0],[ot/1.5,0],[ot/1.5,.8],[0,.8],Tt(150,150,148)),G.quad([V[0],Q+.85,V[2]],[Z[0],at+.85,Z[2]],[Z[0],at+.98,Z[2]],[V[0],Q+.98,V[2]],[0,0],[1,0],[1,1],[0,1],Tt(245,245,242))}let rt=(W,X,I={})=>{let ot=new It(W.geometry(),new wt(Object.assign({vertexColors:!0,map:X,roughness:.85,side:$t},I)));ot.castShadow=!0,ot.receiveShadow=!0,d.add(ot)};rt(f,$l()),rt(m,null),rt(x,null,{roughness:.3,metalness:.2}),rt(g,fd()),rt(p,$l(),{roughness:.8,metalness:0}),rt(G,null),rt(J,void 0?(void 0)():null,{roughness:.6});let Mt=new Qt,_t=Tt(205,200,190),it=[A(-dt,Y,0),A(dt,Y,0),A(dt,et,0),A(-dt,et,0)];for(let W=0;W<10;W++)for(let X=0;X<10;X++){let I=(ot,V)=>{let Z=[it[0][0]+(it[1][0]-it[0][0])*ot+(it[3][0]-it[0][0])*V,0,it[0][2]+(it[1][2]-it[0][2])*ot+(it[3][2]-it[0][2])*V];return Z[1]=t.at(Z[0],Z[2])+.12,Z};Mt.quad(I(W/10,X/10),I(W/10,(X+1)/10),I((W+1)/10,(X+1)/10),I((W+1)/10,X/10),[0,0],[0,1],[1,1],[1,0],_t)}let St=new It(Mt.geometry(),new wt({vertexColors:!0,map:ud(),roughness:.9,side:$t,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-10}));return St.receiveShadow=!0,d.add(St),e.add(d),{group:d,center:h,radius:Math.hypot(dt,(et-Y)/2)+2,front:o,frame:{C:h,f:o,r:c,fz0:Y,fz1:et,fx:dt}}}function Xd(i,t,e){let n=new fe;n.name="praca";let s=i.extras.park;if(!s)return null;let r=s.slice();r.length>2&&r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&r.pop();let o=ci.triangulateShape(r.map(C=>new gt(C[0],C[1])),[]),a=new Qt,c=-1e9;for(let C of r)c=Math.max(c,t.at(C[0],C[1]));let l=(C,H)=>t.at(C,H)+.3,h=0,u=0;for(let C of r)h+=C[0],u+=C[1];h/=r.length,u/=r.length;let d=0,f=[1,0];for(let C=0;C<r.length;C++){let H=r[C],G=r[(C+1)%r.length],J=Math.hypot(G[0]-H[0],G[1]-H[1]);J>d&&(d=J,f=[(G[0]-H[0])/J,(G[1]-H[1])/J])}let m=(C,H)=>{let G=1e9;for(let J=0;J<r.length;J++){let ct=r[J],dt=r[(J+1)%r.length],Y=dt[0]-ct[0],et=dt[1]-ct[1],ft=Y*Y+et*et,rt=((C-ct[0])*Y+(H-ct[1])*et)/ft;rt=Math.max(0,Math.min(1,rt)),G=Math.min(G,Math.hypot(ct[0]+Y*rt-C,ct[1]+et*rt-H))}return G},x=i.extras.fountains||[],g=(C,H)=>{if(m(C,H)<3.2)return!1;let G=C-h,J=H-u,ct=G*f[0]+J*f[1],dt=-G*f[1]+J*f[0];if(Math.abs(ct)<1.8||Math.abs(dt)<1.8)return!1;for(let Y of x)if(Math.hypot(Y[0]-C,Y[1]-H)<8)return!1;return!0},p=new Qt,v=(C,H,G,J)=>{if(Math.max(Math.hypot(C[0]-H[0],C[1]-H[1]),Math.hypot(H[0]-G[0],H[1]-G[1]),Math.hypot(C[0]-G[0],C[1]-G[1]))<.7||J>11){let ft=[C[0],l(C[0],C[1]),C[1]],rt=[H[0],l(H[0],H[1]),H[1]],Mt=[G[0],l(G[0],G[1]),G[1]],_t=(C[0]+H[0]+G[0])/3,it=(C[1]+H[1]+G[1])/3;g(_t,it)?(ft[1]+=.08,rt[1]+=.08,Mt[1]+=.08,p.tri(ft,Mt,rt,[C[0]/3,C[1]/3],[G[0]/3,G[1]/3],[H[0]/3,H[1]/3],Tt(118,148,74))):a.tri(ft,Mt,rt,[C[0]/4,C[1]/4],[G[0]/4,G[1]/4],[H[0]/4,H[1]/4],[1,1,1]);return}let dt=[(C[0]+H[0])/2,(C[1]+H[1])/2],Y=[(H[0]+G[0])/2,(H[1]+G[1])/2],et=[(G[0]+C[0])/2,(G[1]+C[1])/2];v(C,dt,et,J+1),v(dt,H,Y,J+1),v(et,Y,G,J+1),v(dt,Y,et,J+1)};for(let[C,H,G]of o)v(r[C],r[H],r[G],0);for(let C=0;C<r.length;C++){let H=r[C],G=r[(C+1)%r.length];a.quad([H[0],t.at(H[0],H[1])-.2,H[1]],[G[0],t.at(G[0],G[1])-.2,G[1]],[G[0],l(G[0],G[1]),G[1]],[H[0],l(H[0],H[1]),H[1]],[0,0],[1,0],[1,.1],[0,.1],Tt(170,166,160))}let y=new It(a.geometry(),new wt({vertexColors:!0,map:dd(),roughness:.85,side:$t,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}));y.receiveShadow=!0,n.add(y);{let C=ea(),H=new It(p.geometry(),new wt({vertexColors:!0,map:C.map,roughness:1,side:$t,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-14}));H.receiveShadow=!0,n.add(H)}let _=new wt({color:4169672,roughness:.3}),P=new wt({color:8376544,roughness:.05,metalness:.1,transparent:!0,opacity:.85}),M=new wt({color:15921906,roughness:.6}),T=new wt({color:2845872,roughness:.5});for(let[C,H]of i.extras.fountains){let G=l(C,H),J=new It(new Se(5.2,5.2,.7,40,1,!0),_);J.position.set(C,G+.3,H),n.add(J);let ct=new It(new Xi(5.2,.22,8,40),new wt({color:15263976}));ct.rotation.x=Math.PI/2,ct.position.set(C,G+.62,H),n.add(ct);let dt=new It(new No(5.1,40),P);dt.rotation.x=-Math.PI/2,dt.position.set(C,G+.4,H),n.add(dt);let Y=new It(new Cs(.35,1.6,12),new wt({color:14743295,transparent:!0,opacity:.6}));Y.position.set(C,G+1.2,H),n.add(Y);let et=new fe,ft=new Xi(5.2,.12,6,24,Math.PI);for(let Mt of[-.8,.8]){let _t=new It(ft,T);_t.position.set(0,-4.2,Mt),_t.scale.set(1,.25,1),et.add(_t);let it=new It(new Xi(5.2,.08,6,24,Math.PI),T);it.position.set(0,-3.4,Mt),it.scale.set(1,.25,1),et.add(it)}let rt=new It(new Xi(5.2,.18,4,24,Math.PI),M);rt.scale.set(1,.25,8),rt.position.set(0,-4.3,0),et.add(rt),et.position.set(C,G+4.6,H),et.rotation.y=Wt(C)*3,n.add(et)}let w=new Ve(1.8,.45,.5),S=new wt({color:8018492,roughness:.8}),E=new Se(.06,.09,4,6),A=new wt({color:3355443}),F=new Dn(.28,10,8),D=new wt({color:16777215,emissive:16773836,emissiveIntensity:.3}),O=0;for(let C=0;C<r.length;C++){let H=r[C],G=r[(C+1)%r.length],J=Math.hypot(G[0]-H[0],G[1]-H[1]),ct=(G[0]-H[0])/J,dt=(G[1]-H[1])/J,Y=0,et=0;for(let ft of r)Y+=ft[0],et+=ft[1];Y/=r.length,et/=r.length;for(let ft=4;ft<J-2;ft+=9){let rt=H[0]+ct*ft,Mt=H[1]+dt*ft,_t=Y-rt,it=et-Mt,St=Math.hypot(_t,it),W=rt+_t/St*2.2,X=Mt+it/St*2.2,I=l(W,X);if(O++%2===0){let ot=new It(w,S);ot.position.set(W,I+.45,X),ot.rotation.y=-Math.atan2(dt,ct),ot.castShadow=!0,n.add(ot)}else{let ot=new It(E,A);ot.position.set(W,I+2,X),n.add(ot);let V=new It(F,D);V.position.set(W,I+4.1,X),n.add(V)}}}e.add(n);let k=[],U=0,B=0;for(let C of r)U+=C[0],B+=C[1];U/=r.length,B/=r.length;for(let C=0;C<r.length;C+=Math.max(1,Math.floor(r.length/6))){let H=r[C];k.push([H[0]+(U-H[0])*.2,H[1]+(B-H[1])*.2])}return{group:n,palms:k,center:[U,B]}}function qd(i,t,e){let n=new fe;n.name="campos";for(let s of i.extras.pitches){if(s.k==="track")continue;let r=s.p.slice();r[0][0]===r[r.length-1][0]&&r.pop();let o=ra(r),a=o.ux,c=o.uz,l=-c,h=a,u=5212730,d=null;if(s.k==="pitch"){let p=document.createElement("canvas");p.width=512,p.height=320;let v=p.getContext("2d");for(let y=0;y<10;y++)v.fillStyle=y%2?"#4f8f3c":"#579a42",v.fillRect(y*51.2,0,51.2,320);v.strokeStyle="#f4f4f4",v.lineWidth=4,v.strokeRect(12,12,488,296),v.beginPath(),v.moveTo(256,12),v.lineTo(256,308),v.stroke(),v.beginPath(),v.arc(256,160,40,0,7),v.stroke(),v.strokeRect(12,95,60,130),v.strokeRect(440,95,60,130),d=new gn(p),d.colorSpace=Ce,u=16777215}else s.k==="swimming_pool"?u=4175584:s.k==="cemetery"?u=12169892:s.k==="track"&&(u=10507578);let f=new Qt,m=12,x=(p,v)=>{let y=o.cx+a*o.a*p+l*o.b*v,_=o.cz+c*o.a*p+h*o.b*v;return[y,t.at(y,_)+.16,_]};for(let p=0;p<m;p++)for(let v=0;v<m;v++){let y=-1+2*p/m,_=-1+2*(p+1)/m,P=-1+2*v/m,M=-1+2*(v+1)/m;f.quad(x(y,P),x(y,M),x(_,M),x(_,P),[(y+1)/2,(P+1)/2],[(y+1)/2,(M+1)/2],[(_+1)/2,(M+1)/2],[(_+1)/2,(P+1)/2],[1,1,1])}let g=new It(f.geometry(),new wt({color:u,map:d,roughness:s.k==="swimming_pool"?.1:.95,side:$t,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}));if(g.receiveShadow=!0,n.add(g),s.k==="cemetery"){let p=new Ve(1,.8,2.2),v=Math.floor(o.a*o.b*4/9),y=new Ge(p,new wt({color:15789800,roughness:.8}),v),_=new le,P=0;for(let M=-o.a+2;M<o.a-2&&P<v;M+=2.2)for(let T=-o.b+2;T<o.b-2&&P<v;T+=3.4){if(Wt(M*7+T)<.15)continue;let w=o.cx+a*M+l*T,S=o.cz+c*M+h*T;_.makeRotationY(-Math.atan2(c,a)),_.setPosition(w,t.at(w,S)+.4,S),y.setMatrixAt(P++,_)}y.count=P,y.castShadow=!0,n.add(y)}}return e.add(n),n}var Yd=Be(()=>{Oe();Kn();Jl();pi()});function sy(i){let t=new Gi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function Cr(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new oe(n,3)),i}function ya(i){i=i.map(a=>a.index?a.toNonIndexed():a);let t=i.reduce((a,c)=>a+c.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count;let o=new pe;return o.setAttribute("position",new oe(e,3)),o.setAttribute("normal",new oe(n,3)),o.setAttribute("color",new oe(s,3)),o}function jn(i,t,e,n){let s=new Ps(sy(i),{depth:t-2*e,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:2,steps:1});return s.translate(0,0,-(t-2*e)/2),Cr(s,n)}function va(i,t,e,n,s,r){for(let o of t)for(let a of[-s,s]){let c=new Se(e,e,n,r?8:14);c.rotateX(Math.PI/2),c.translate(o,e,a),i.push(Cr(c,ry));let l=new Se(e*.62,e*.62,n+.02,r?6:10);l.rotateX(Math.PI/2),l.translate(o,e,a),i.push(Cr(l,oy))}}function nn(i,t,e,n,s,r,o,a){let c=new Ve(t,e,n);c.translate(s,r,o),i.push(Cr(c,a))}function cy(i){let t=[];return t.push(jn([[-1.95,.32],[1.92,.32],[1.98,.55],[1.9,.82],[1.2,.95],[.55,1],[-1.9,1.02],[-1.98,.7]],1.68,.06,Ki)),t.push(jn([[.62,.98],[-.25,1.42],[-1.55,1.43],[-1.86,1]],1.68-.12,.05,eh)),t.push(jn([[.5,1.06],[-.28,1.45],[-1.5,1.46],[-1.5,1.4],[-.3,1.39],[.4,1.04]],1.68-.06,.03,Ki)),va(t,[1.25,-1.25],.31,.2,.72,i),nn(t,.04,.12,1.3,1.99,.7,0,nh),nn(t,.04,.14,1.4,-2,.82,0,_a),nn(t,.03,.12,.5,-2.01,.55,0,ay),nn(t,.06,.16,1.6,1.98,.42,0,Gs),ya(t)}function ly(i){let t=[];return t.push(jn([[-2.25,.33],[2.15,.33],[2.22,.56],[2.12,.8],[1.2,.92],[-1.6,.98],[-2.22,.95],[-2.28,.62]],1.74,.06,Ki)),t.push(jn([[.95,.93],[.15,1.38],[-.95,1.39],[-1.62,.97]],1.74-.12,.05,eh)),t.push(jn([[.82,1],[.12,1.41],[-.92,1.42],[-.92,1.36],[.1,1.35],[.74,.98]],1.74-.06,.03,Ki)),va(t,[1.38,-1.4],.31,.2,.75,i),nn(t,.04,.12,1.3,2.23,.7,0,nh),nn(t,.04,.12,1.5,-2.29,.84,0,_a),nn(t,.06,.16,1.6,2.2,.42,0,Gs),ya(t)}function hy(i){let t=[];return t.push(jn([[-2.5,.42],[2.4,.42],[2.46,.7],[2.35,1],[1.4,1.08],[-2.5,1.08]],1.8,.06,Ki)),t.push(jn([[1.3,1.06],[.7,1.62],[-.6,1.64],[-.75,1.06]],1.8-.1,.05,eh)),t.push(jn([[1.18,1.1],[.66,1.66],[-.58,1.67],[-.58,1.6],[.62,1.59],[1.1,1.08]],1.8-.04,.03,Ki)),nn(t,1.65,.08,1.6,-1.65,1,0,Gs),va(t,[1.55,-1.6],.38,.24,.78,i),nn(t,.04,.14,1.4,2.47,.85,0,nh),nn(t,.04,.2,.2,-2.51,.9,.72,_a),nn(t,.04,.2,.2,-2.51,.9,-.72,_a),nn(t,.08,.2,1.7,2.44,.52,0,Gs),ya(t)}function uy(i){let t=[];va(t,[.68,-.68],.3,.1,0,i),t.push(jn([[-.75,.55],[.55,.62],[.7,.95],[.3,.95],[-.1,.82],[-.8,.85]],.32,.04,Ki)),nn(t,.5,.12,.3,-.35,.92,0,Gs),nn(t,.06,.06,.7,.62,1.1,0,Gs),nn(t,.3,.55,.38,-.25,1.25,0,[.25,.3,.4]);let e=new Dn(.15,i?6:10,i?5:8);return e.translate(-.18,1.68,0),t.push(Cr(e,[.9,.9,.9])),nn(t,.4,.12,.12,0,1.15,.18,[.25,.3,.4]),nn(t,.4,.12,.12,0,1.15,-.18,[.25,.3,.4]),ya(t)}var Ki,eh,ry,oy,nh,_a,Gs,ay,Rr,xa,Zd=Be(()=>{Oe();Kn();Ki=[1,1,1],eh=[.05,.06,.07],ry=[.035,.035,.035],oy=[.55,.55,.56],nh=[2.2,2.2,2],_a=[.5,.03,.03],Gs=[.08,.08,.08],ay=[2,2,2];Rr=[[.92,.92,.92],[.92,.92,.92],[.92,.92,.92],[.62,.63,.66],[.62,.63,.66],[.04,.04,.05],[.04,.04,.05],[.32,.33,.35],[.5,.05,.04],[.06,.14,.36],[.78,.76,.7],[.2,.24,.2]],xa=class{constructor(t,e,n,s,r,o=.13,a="high"){this.H=e,this.hf=s;let c=a==="low"||a==="medium";this.roads=t.roads.filter(v=>!["footway","path","track","cycleway","steps"].includes(v.hw)&&v.s!=="dirt"&&v.p.length>1);let l=v=>Math.round(v[0]*2)+","+Math.round(v[1]*2);this.key=l,this.idx=new Map,this.roads.forEach((v,y)=>{v.len=[];for(let _=0;_<v.p.length-1;_++)v.len.push(Math.hypot(v.p[_+1][0]-v.p[_][0],v.p[_+1][1]-v.p[_][1]));v.p.forEach((_,P)=>{let M=l(_);this.idx.has(M)||this.idx.set(M,[]),this.idx.get(M).push([y,P])})});let h=this.roads.map(v=>(v.s==="asphalt"?3:1)*v.len.reduce((y,_)=>y+_,0)),u=h.reduce((v,y)=>v+y,0);this.geos=[cy(c),ly(c),hy(c),uy(c)];let d=[.42,.2,.16,.22],f=v=>{let y=0;for(let _=0;_<4;_++)if(y+=d[_],v<y)return _;return 0};this.cars=[];for(let v=0;v<r;v++){let y=Wt(v*3.7+1)*u,_=0;for(;y>h[_]&&_<h.length-1;)y-=h[_],_++;let P=this.roads[_],M=Math.floor(Wt(v*9.1)*(P.p.length-1)),T=P.o||Wt(v*1.3)<.5?1:-1;this.cars.push({ri:_,i:T>0?M:M+1,t:Wt(v*5.5),dir:T,v:0,type:f(Wt(v*4.4)),col:Rr[Math.floor(Wt(v*2.2)*Rr.length)]})}let m=new wt({vertexColors:!0,roughness:.3,metalness:.45});this.mat=m,this.mesh=new fe,this.mesh.name="carros",n.add(this.mesh),this.meshes=this.geos.map((v,y)=>{let _=this.cars.filter(M=>M.type===y).length,P=new Ge(v,m,Math.max(1,_));return P.count=_,P.castShadow=!0,P.receiveShadow=!0,this.mesh.add(P),P});let x=new Kt,g=[0,0,0,0];this.cars.forEach(v=>{v.slot=g[v.type]++,x.setRGB(...v.type===3?[.6+.4*Wt(v.slot),.1,.1]:v.col),this.meshes[v.type].setColorAt(v.slot,x)}),this.M=new le,this.Q=new ke,this.P=new N,this.S=new N(1,1,1),this.Y=new N(0,1,0),this.E=new An,this.tick(.01);let p=[[],[],[]];this.roads.forEach((v,y)=>{if(!(!["residential","tertiary","unclassified"].includes(v.hw)||v.b||v.id===1314627854||v.id===1314627855))for(let _=0;_<v.p.length-1;_++){let P=v.len[_],M=v.p[_],T=v.p[_+1],w=(T[0]-M[0])/P,S=(T[1]-M[1])/P;for(let E=8;E<P-8;E+=6)for(let A of[-1,1]){if(Wt(y*31+_*7+E*1.7+A)>o)continue;let F=A*(v.w/2-1.1),D=M[0]+w*E-S*F,O=M[1]+S*E+w*F;if(globalThis.__noPark&&globalThis.__noPark(D,O))continue;let k=Wt(y+E*.3+A);p[k<.55?0:k<.8?1:2].push([D,O,Math.atan2(S,w)+(Wt(E+y)<.5?0:Math.PI),Wt(y+E)])}}}),this.parked=new fe,p.forEach((v,y)=>{if(!v.length)return;let _=new Ge(this.geos[y],m,v.length);v.forEach(([P,M,T,w],S)=>{this.Q.setFromAxisAngle(this.Y,-T),this.P.set(P,e.at(P,M)+.1,M),this.M.compose(this.P,this.Q,this.S),_.setMatrixAt(S,this.M),x.setRGB(...Rr[Math.floor(w*Rr.length)%Rr.length]),_.setColorAt(S,x)}),_.castShadow=!0,_.receiveShadow=!0,this.parked.add(_)}),n.add(this.parked)}speed(t,e){return(e&&e.type===3?1.1:1)*(t.hw==="trunk"?15:t.hw==="tertiary"||t.hw==="trunk_link"?10:7)}tick(t){let e=this.M;this.cars.forEach((n,s)=>{let r=this.roads[n.ri],o=this.speed(r,n)*(.8+.4*Wt(s));n.v+=(o-n.v)*Math.min(1,t*.8);let a=n.v*t,c=0;for(;a>0&&c++<20;){let w=n.i,S=n.i+n.dir;if(S<0||S>=r.p.length){this.junction(n),r=this.roads[n.ri];continue}let E=r.len[Math.min(w,S)],A=(1-n.t)*E;a<A?(n.t+=a/E,a=0):(a-=A,n.i=S,n.t=0,this.junction(n,!0),r=this.roads[n.ri])}r=this.roads[n.ri];let l=n.i,h=n.i+n.dir;(h<0||h>=r.p.length)&&(h=l,l=l-n.dir);let u=r.p[l],d=r.p[h],f=u[0]+(d[0]-u[0])*n.t,m=u[1]+(d[1]-u[1])*n.t,x=d[0]-u[0],g=d[1]-u[1],p=Math.hypot(x,g)||1,v=r.o?0:Math.min(1.8,r.w/4)*(n.type===3?1.25:1),y=f-g/p*v,_=m+x/p*v,P=this.hf(r,y,_),M=this.hf(r,y+x/p*2,_+g/p*2),T=this.hf(r,y-x/p*2,_-g/p*2);this.E.set(0,-Math.atan2(g,x),Math.atan2(M-T,4),"YXZ"),this.Q.setFromEuler(this.E),this.P.set(y,P,_),e.compose(this.P,this.Q,this.S),this.meshes[n.type].setMatrixAt(n.slot,e)}),this.meshes.forEach(n=>n.instanceMatrix.needsUpdate=!0)}junction(t,e){let n=this.roads[t.ri],s=n.p[t.i],r=this.idx.get(this.key(s))||[],o=[];for(let[c,l]of r){let h=this.roads[c];l+1<h.p.length&&!(c===t.ri&&t.dir<0&&l===t.i)&&o.push([c,l,1]),l-1>=0&&!h.o&&!(c===t.ri&&t.dir>0&&l===t.i)&&o.push([c,l,-1])}if(e){let c=t.i+t.dir;if(c>=0&&c<n.p.length&&(o.length<=1||Math.random()<.7))return}if(!o.length){t.dir=n.o?1:-t.dir,n.o&&(t.i=0);return}let a=o[Math.floor(Math.random()*o.length)];t.ri=a[0],t.i=a[1],t.dir=a[2],t.t=0}}});var Ma,$d=Be(()=>{Oe();Ma=class{constructor(t){this.root=t,this.items=[],this.v=new N}add(t,e,n="lbl",s=4e3,r=null){let o=document.createElement("div");o.className=n,o.textContent=t,this.root.appendChild(o);let a={el:o,pos:e.clone?e:new N(...e),maxDist:s,visible:!0,group:n};return r&&(o.style.pointerEvents="auto",o.style.cursor="pointer",o.addEventListener("click",c=>{c.stopPropagation(),r()})),this.items.push(a),a}remove(t){t.el.remove(),this.items=this.items.filter(e=>e!==t)}_set(t,e,n,s){t._d!==e&&(t.el.style.display=e,t._d=e),e!=="none"&&(t._t!==n&&(t.el.style.transform=n,t._t=n),t._o!==s&&(t.el.style.opacity=s,t._o=s))}update(t,e,n){let s=[],r=[];for(let o of this.items){if(!o.visible){this._set(o,"none");continue}this.v.copy(o.pos);let a=this.v.distanceTo(t.position);if(this.v.project(t),this.v.z>1||a>o.maxDist||Math.abs(this.v.x)>1.1||Math.abs(this.v.y)>1.1){this._set(o,"none");continue}r.push({it:o,d:a,x:(this.v.x*.5+.5)*e,y:(-this.v.y*.5+.5)*n})}r.sort((o,a)=>(a.it.group==="lbl mark")-(o.it.group==="lbl mark")||o.d-a.d);for(let o of r){let a=(o.it.el.textContent.length*6.6+18)/2,l=[o.x-a,o.y-22,o.x+a,o.y];if(o.it.group!=="lbl mark"&&s.some(u=>l[0]<u[2]&&l[2]>u[0]&&l[1]<u[3]&&l[3]>u[1])){this._set(o.it,"none");continue}s.push(l);let h=o.it;this._set(h,"block",`translate(-50%,-100%) translate(${Math.round(o.x)}px,${Math.round(o.y)}px)`,String(Math.round(Math.max(.35,Math.min(1,1.6-o.d/h.maxDist))*20)/20))}}setGroupVisible(t,e){for(let n of this.items)n.group===t&&(n.visible=e)}}});var Jd,dy,Ea,Sa,Kd=Be(()=>{Oe();Jd="aimores3d_marcadores_v1",dy=[["Verde","#22c55e"],["Roxo","#a855f7"],["Azul","#3b82f6"],["Vermelho","#ef4444"],["Laranja","#f97316"],["Amarelo","#eab308"],["Rosa","#ec4899"],["Ciano","#06b6d4"],["Branco","#f8fafc"],["Preto","#111827"]],Ea=()=>Math.random().toString(36).slice(2,10),Sa=class{constructor(t){Object.assign(this,t),this.group=new fe,this.group.name="marcadores",this.scene.add(this.group),this.state=this.load(),this.mode="nav",this.selCat=this.state.cats[0]?.id||null,this.objs=new Map,this.ray=new Ds,this.mouse=new gt,this.headGeo=new Dn(1,20,14),this.stickGeo=new Se(.09,.09,1,8),this.stickGeo.translate(0,.5,0),this.ringGeo=new Fo(.8,1.2,24),this.ringGeo.rotateX(-Math.PI/2),this.state.marks.forEach(e=>this.makeObj(e)),this.bindCanvas(),this.render()}load(){try{let t=JSON.parse(localStorage.getItem(Jd));if(t&&t.cats&&t.marks)return t}catch{}return{cats:[{id:Ea(),name:"Ponto cego",color:"#ef4444",limit:null},{id:Ea(),name:"Ponto de interesse",color:"#3b82f6",limit:null}],marks:[]}}save(){localStorage.setItem(Jd,JSON.stringify(this.state))}cat(t){return this.state.cats.find(e=>e.id===t)}count(t){return this.state.marks.filter(e=>e.cat===t).length}makeObj(t){let e=this.cat(t.cat);if(!e)return;let n=new Kt(e.color),s=new fe,r=new wt({color:n,emissive:n,emissiveIntensity:.35,roughness:.4}),o=new It(this.headGeo,r);o.position.y=7,o.userData.markId=t.id;let a=new It(this.stickGeo,new wt({color:16777215,roughness:.5}));a.scale.y=6.2;let c=new It(this.ringGeo,new Ts({color:n,transparent:!0,opacity:.85,depthWrite:!1}));c.position.y=.3,s.add(o,a,c),s.position.set(t.x,t.y,t.z),s.userData.markId=t.id,o.castShadow=!0,this.group.add(s);let l=this.labels.add(t.name,new N(t.x,t.y+9,t.z),"lbl mark",6e3,()=>this.select(t.id));l.el.style.borderColor=e.color,this.objs.set(t.id,{g:s,head:o,lbl:l,mat:r,ring:c})}removeObj(t){let e=this.objs.get(t);e&&(this.group.remove(e.g),this.labels.remove(e.lbl),this.objs.delete(t))}refreshObj(t){this.removeObj(t.id),this.makeObj(t)}tickScale(t){for(let[e,n]of this.objs){let s=t.position.distanceTo(n.g.position),r=Math.max(.5,Math.min(8,s/160));n.g.scale.setScalar(r),n.lbl.pos.set(n.g.position.x,n.g.position.y+8.3*r,n.g.position.z)}}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect();return this.mouse.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.mouse,this.camera),this.ray.intersectObjects(e,!0)[0]}bindCanvas(){let t=this.renderer.domElement,e=null,n=null;t.addEventListener("pointerdown",s=>{if(e={x:s.clientX,y:s.clientY},this.mode==="move"){let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&(n=r.object.userData.markId,this.controls.enabled=!1,t.setPointerCapture(s.pointerId))}}),t.addEventListener("pointermove",s=>{if(!n)return;let r=this.pick(s,this.pickTargets());if(r){let o=this.state.marks.find(a=>a.id===n);o.x=r.point.x,o.y=r.point.y,o.z=r.point.z,this.objs.get(n).g.position.copy(r.point)}}),t.addEventListener("pointerup",s=>{if(n){n=null,this.controls.enabled=!0,this.save(),this.render();return}if(!(!e||Math.hypot(s.clientX-e.x,s.clientY-e.y)>6))if(this.mode==="place"){let r=this.cat(this.selCat);if(!r){this.toast("Escolha uma categoria primeiro");return}if(r.limit&&this.count(r.id)>=r.limit){this.toast(`Limite de ${r.limit} marcador(es) para "${r.name}" atingido`);return}let o=this.pick(s,this.pickTargets());if(!o)return;let a=this.count(r.id)+1,c={id:Ea(),cat:r.id,name:`${r.name} ${a}`,x:+o.point.x.toFixed(2),y:+o.point.y.toFixed(2),z:+o.point.z.toFixed(2),note:"",ts:Date.now()};this.state.marks.push(c),this.makeObj(c),this.save(),this.render(),this.selMark=c.id,this.render()}else{let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&this.select(r.object.userData.markId)}})}select(t){this.selMark=t,this.render();let e=this.objs.get(t);e&&(e.mat.emissiveIntensity=1,setTimeout(()=>e.mat.emissiveIntensity=.35,600))}setMode(t){this.mode=t,this.onMode&&setTimeout(()=>this.onMode(t),0),this.renderer.domElement.style.cursor=t==="place"?"crosshair":t==="move"?"grab":"",this.render()}toast(t){let e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>e.classList.remove("show"),2600)}latlon(t){let e=this.H;return[(e.LAT0-t.z/e.KZ).toFixed(6),(e.LON0+t.x/e.KX).toFixed(6)]}render(){let t=this.panel,e=this.state,n=c=>String(c).replace(/[&<>"]/g,l=>"&#"+l.charCodeAt(0)+";"),s=`<div class="modes"><button data-mode="nav" class="${this.mode==="nav"?"on":""}">\u{1F590} Navegar</button><button data-mode="place" class="${this.mode==="place"?"on":""}">\u{1F4CD} Colocar</button><button data-mode="move" class="${this.mode==="move"?"on":""}">\u2725 Mover</button></div>`;s+=`<div class="hint">${this.mode==="place"?innerWidth<=760?"Escolha a categoria e toque no mapa para colocar.":"Escolha a categoria e clique no mapa para colocar.":this.mode==="move"?"Arraste a bolinha do marcador para mudar de lugar.":"Clique num marcador para ver/editar."}</div>`,s+='<h3>Categorias</h3><div class="cats">';for(let c of e.cats){let l=this.count(c.id);s+=`<div class="cat ${c.id===this.selCat?"sel":""}" data-cat="${c.id}"><span class="sw" style="background:${c.color}"></span><span class="nm">${n(c.name)}</span><span class="ct">${l}${c.limit?"/"+c.limit:""}</span><button class="ic" data-editcat="${c.id}" title="Editar">\u270E</button><button class="ic" data-delcat="${c.id}" title="Apagar">\u{1F5D1}</button></div>`,this.editCat===c.id&&(s+=`<div class="form"><input id="ec_name" value="${n(c.name)}" placeholder="Nome"><input id="ec_color" type="color" value="${c.color}"><input id="ec_limit" type="number" min="1" value="${c.limit||""}" placeholder="Qtd. m\xE1x (opcional)"><button id="ec_ok">Salvar</button></div>`)}s+=`</div><details ${this.openNew?"open":""} id="newcat"><summary>+ Nova categoria</summary><div class="form"><div class="presets">${dy.map(([c,l])=>`<span class="sw pick" title="${c}" data-color="${l}" style="background:${l}"></span>`).join("")}</div>
      <input id="nc_name" placeholder="Nome (ex.: ferreiro)"><input id="nc_color" type="color" value="#22c55e"><input id="nc_limit" type="number" min="1" placeholder="Quantos? (vazio = sem limite)"><button id="nc_ok">Criar categoria</button></div></details>`,s+=`<h3>Marcadores (${e.marks.length})</h3><div class="marks">`;for(let c of e.cats){let l=e.marks.filter(h=>h.cat===c.id);if(l.length){s+=`<div class="mgrp"><span class="sw" style="background:${c.color}"></span>${n(c.name)}</div>`;for(let h of l)if(s+=`<div class="mk ${h.id===this.selMark?"sel":""}" data-mark="${h.id}"><span class="nm">${n(h.name)}</span><button class="ic" data-fly="${h.id}" title="Ir at\xE9">\u{1F441}</button><button class="ic" data-delmark="${h.id}" title="Apagar">\u{1F5D1}</button></div>`,h.id===this.selMark){let[u,d]=this.latlon(h);s+=`<div class="form"><input id="em_name" value="${n(h.name)}"><select id="em_cat">${e.cats.map(f=>`<option value="${f.id}" ${f.id===h.cat?"selected":""}>${n(f.name)}</option>`).join("")}</select><textarea id="em_note" placeholder="Observa\xE7\xE3o">${n(h.note||"")}</textarea><div class="coord">${u}, ${d}</div><button id="em_ok">Salvar</button></div>`}}}s+='</div><div class="io"><button id="exp">\u2B07 Exportar</button><label class="btn">\u2B06 Importar<input id="imp" type="file" accept=".json,application/json" hidden></label><button id="clr">Limpar</button></div>',t.innerHTML=s;let r=document.getElementById("mkstatus");if(r){let c=this.cat(this.selCat);r.textContent=this.mode==="place"&&c?`Colocando: ${c.name}`:this.mode==="move"?"Modo mover":`${e.marks.length} marcador(es)`}t.querySelectorAll("[data-mode]").forEach(c=>c.onclick=()=>this.setMode(c.dataset.mode)),t.querySelectorAll(".cat").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selCat=c.dataset.cat,this.mode==="nav"?this.setMode("place"):this.render())}),t.querySelectorAll("[data-editcat]").forEach(c=>c.onclick=()=>{this.editCat=this.editCat===c.dataset.editcat?null:c.dataset.editcat,this.render()}),t.querySelectorAll("[data-delcat]").forEach(c=>c.onclick=()=>{let l=this.cat(c.dataset.delcat),h=this.count(l.id);confirm(`Apagar a categoria "${l.name}"${h?` e seus ${h} marcador(es)`:""}?`)&&(e.marks.filter(u=>u.cat===l.id).forEach(u=>this.removeObj(u.id)),e.marks=e.marks.filter(u=>u.cat!==l.id),e.cats=e.cats.filter(u=>u!==l),this.selCat===l.id&&(this.selCat=e.cats[0]?.id),this.save(),this.render())});let o=t.querySelector("#ec_ok");o&&(o.onclick=()=>{let c=this.cat(this.editCat);c.name=t.querySelector("#ec_name").value.trim()||c.name,c.color=t.querySelector("#ec_color").value;let l=parseInt(t.querySelector("#ec_limit").value);c.limit=l>0?l:null,this.editCat=null,e.marks.filter(h=>h.cat===c.id).forEach(h=>this.refreshObj(h)),this.save(),this.render()}),t.querySelectorAll(".pick").forEach(c=>c.onclick=()=>{t.querySelector("#nc_color").value=c.dataset.color;let l=t.querySelector("#nc_name");l.value||(l.placeholder=`Nome (cor ${c.title.toLowerCase()})`)}),t.querySelector("#newcat").ontoggle=c=>{this.openNew=c.target.open},t.querySelector("#nc_ok").onclick=()=>{let c=t.querySelector("#nc_name").value.trim();if(!c){this.toast("D\xEA um nome para a categoria");return}let l=parseInt(t.querySelector("#nc_limit").value),h={id:Ea(),name:c,color:t.querySelector("#nc_color").value,limit:l>0?l:null};e.cats.push(h),this.selCat=h.id,this.openNew=!1,this.save(),this.setMode("place"),this.toast(`Categoria "${c}" criada. Clique no mapa para colocar.`)},t.querySelectorAll(".mk").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selMark=this.selMark===c.dataset.mark?null:c.dataset.mark,this.render())}),t.querySelectorAll("[data-fly]").forEach(c=>c.onclick=()=>{let l=e.marks.find(h=>h.id===c.dataset.fly);this.flyTo(new N(l.x,l.y,l.z),120),this.select(l.id)}),t.querySelectorAll("[data-delmark]").forEach(c=>c.onclick=()=>{let l=c.dataset.delmark;this.removeObj(l),e.marks=e.marks.filter(h=>h.id!==l),this.save(),this.render()});let a=t.querySelector("#em_ok");a&&(a.onclick=()=>{let c=e.marks.find(l=>l.id===this.selMark);c.name=t.querySelector("#em_name").value.trim()||c.name,c.cat=t.querySelector("#em_cat").value,c.note=t.querySelector("#em_note").value,this.refreshObj(c),this.save(),this.render(),this.toast("Marcador salvo")}),t.querySelector("#exp").onclick=()=>{let c=JSON.parse(JSON.stringify(e));c.marks.forEach(u=>{let[d,f]=this.latlon(u);u.lat=+d,u.lon=+f});let l=new Blob([JSON.stringify({app:"aimores-3d",version:1,exported:new Date().toISOString(),...c},null,2)],{type:"application/json"}),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download="marcadores-aimores.json",h.click()},t.querySelector("#imp").onchange=c=>{let l=c.target.files[0];l&&l.text().then(h=>{try{let u=JSON.parse(h);if(!u.cats||!u.marks)throw 0;confirm("Substituir os marcadores atuais? (Cancelar = juntar com os atuais)")&&(e.marks.forEach(x=>this.removeObj(x.id)),e.cats=[],e.marks=[]);let f=new Set(e.cats.map(x=>x.id));u.cats.forEach(x=>{f.has(x.id)||e.cats.push({id:x.id,name:x.name,color:x.color,limit:x.limit||null})});let m=new Set(e.marks.map(x=>x.id));u.marks.forEach(x=>{if(m.has(x.id))return;let g={id:x.id,cat:x.cat,name:x.name,x:x.x,y:x.y,z:x.z,note:x.note||"",ts:x.ts||Date.now()};e.marks.push(g),this.makeObj(g)}),this.selCat=e.cats[0]?.id,this.save(),this.render(),this.toast("Importado!")}catch{this.toast("Arquivo inv\xE1lido")}})},t.querySelector("#clr").onclick=()=>{confirm("Apagar TODOS os marcadores? (as categorias ficam)")&&(e.marks.forEach(c=>this.removeObj(c.id)),e.marks=[],this.save(),this.render())}}}});function Qd(i,t){let e=i.geometry,n=e.index?e.toNonIndexed():e,s=n.attributes.position,r=s.count/3,o=new Map;for(let l=0;l<r;l++){let h=(s.getX(l*3)+s.getX(l*3+1)+s.getX(l*3+2))/3,u=(s.getZ(l*3)+s.getZ(l*3+1)+s.getZ(l*3+2))/3,d=jd(h,u,t),f=o.get(d);f||o.set(d,f=[]),f.push(l)}let a=new fe;a.name=i.name;let c=Object.keys(n.attributes);for(let[l,h]of o){let u=new pe;for(let f of c){let m=n.attributes[f],x=m.itemSize,g=new m.array.constructor(h.length*3*x),p=0;for(let v of h)for(let y=0;y<3;y++){let _=(v*3+y)*x;for(let P=0;P<x;P++)g[p++]=m.array[_+P]}u.setAttribute(f,new oe(g,x,m.normalized))}u.computeBoundingBox(),u.computeBoundingSphere();let d=new It(u,i.material);d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,d.renderOrder=i.renderOrder,d.userData.box=u.boundingBox.clone().applyMatrix4(i.matrixWorld),d.name=i.name,a.add(d)}return a}function sh(i,t,e,n){let s=i.count,r=new le,o=new Map;for(let h=0;h<s;h++){i.getMatrixAt(h,r),ih.setFromMatrixPosition(r);let u=jd(ih.x,ih.z,t),d=o.get(u);d||o.set(u,d=[]),d.push(h)}let a=[],c=new Kt,l=(h,u,d)=>{let f=new Ge(h,u,d.length);return d.forEach((m,x)=>{i.getMatrixAt(m,r),f.setMatrixAt(x,r),i.instanceColor&&(i.getColorAt(m,c),f.setColorAt(x,c))}),f.castShadow=i.castShadow,f.receiveShadow=i.receiveShadow,f.customDepthMaterial=i.customDepthMaterial,f.name=i.name,f.computeBoundingSphere(),f.computeBoundingBox(),f.userData.box=f.boundingBox.clone(),f};for(let[h,u]of o){let d=l(i.geometry,i.material,u),f=e?l(e,n,u):null;f&&(f.castShadow=!1,f.userData.box=d.userData.box),a.push({near:d,far:f})}return a}function tf(i,t,e,n=96,s=[450,1100]){let r=i.geometry,o=t.GW,a=t.GH,c=r.attributes.position.array,l=[];for(let _=0;_<a-1;_+=n)for(let P=0;P<o-1;P+=n){let M=[];for(let T of[1,2,4]){let w=[],S=Math.min(a-1,_+n),E=Math.min(o-1,P+n);for(let U=_;U<S;U+=T)for(let B=P;B<E;B+=T){let C=Math.min(U+T,S),H=Math.min(B+T,E),G=U*o+B,J=U*o+H,ct=C*o+B,dt=C*o+H;w.push(G,ct,J,J,ct,dt)}let A=new pe;for(let U of Object.keys(r.attributes))A.setAttribute(U,r.attributes[U]);A.setIndex(w);let F=1e9,D=-1e9;for(let U=_;U<=S;U+=2)for(let B=P;B<=E;B+=2){let C=c[(U*o+B)*3+1];C<F&&(F=C),C>D&&(D=C)}let O=new pn(new N(t.XMIN+P*t.G,F,t.ZMIN+_*t.G),new N(t.XMIN+E*t.G,D,t.ZMIN+S*t.G));A.boundingBox=O,A.boundingSphere=O.getBoundingSphere(new Jn);let k=new It(A,i.material);k.receiveShadow=!0,k.userData.box=O,k.name="terrain",M.push(k)}l.push(M)}let h=8,u=[],d=[],f=[],m=[],x=Math.floor((a-1)/h)+1,g=Math.floor((o-1)/h)+1;for(let _=0;_<x;_++)for(let P=0;P<g;P++){let M=Math.min(a-1,_*h),T=Math.min(o-1,P*h),w=M*o+T;u.push(c[w*3],c[w*3+1]-1.2,c[w*3+2]),d.push(r.attributes.uv.array[w*2],r.attributes.uv.array[w*2+1]),f.push(r.attributes.uv1.array[w*2],r.attributes.uv1.array[w*2+1])}for(let _=0;_<x-1;_++)for(let P=0;P<g-1;P++){let M=_*g+P;m.push(M,M+g,M+1,M+1,M+g,M+g+1)}let p=new pe;p.setAttribute("position",new Zt(u,3)),p.setAttribute("uv",new Zt(d,2)),p.setAttribute("uv1",new Zt(f,2)),p.setIndex(m),p.computeVertexNormals();let v=i.geometry;i.geometry=p,i.userData.fullGeometry=v;for(let _ of l){for(let P of _)i.add(P);e.lods.push({tiles:_})}e.terrainD=s;let y=e.update.bind(e);return e.update=(_,P)=>{let M=_.position,T=P||M.distanceToSquared(e.last)>=4;if(y(_,P),!!T)for(let w of e.lods){if(!w.tiles)continue;let S=w.tiles[0].userData.box.distanceToPoint(M),E=e.scale,A=S<s[0]*E?0:S<s[1]*E?1:2;w.tiles.forEach((F,D)=>F.visible=D===A)}},i}var ih,ba,jd,ef=Be(()=>{Oe();ih=new N,ba=class{constructor(){this.items=[],this.lods=[],this.last=new N(1e9,0,0),this.scale=1}add(t,e){t.userData.maxD=e,this.items.push(t)}addLod(t,e,n,s=1e9){this.lods.push({near:t,far:e,switchD:n,maxD:s})}update(t,e){let n=t.position;if(!e&&n.distanceToSquared(this.last)<4)return;this.last.copy(n);let s=this.scale;for(let r of this.items){let o=r.userData.box.distanceToPoint(n);r.visible=o<r.userData.maxD*s}for(let r of this.lods){if(r.tiles)continue;let o=r.near.userData.box.distanceToPoint(n),a=o<r.switchD*s;r.near.visible=a,r.far&&(r.far.visible=!a&&o<r.maxD*s)}}},jd=(i,t,e)=>Math.floor(i/e)+","+Math.floor(t/e)});var my=sf(()=>{Oe();Zu();$u();hd();yd();jl();wd();pa();th();Od();zd();Gd();Yd();Zd();$d();Kd();ef();var Ws=window.AIMORES,Pr=new URLSearchParams(location.search).has("shot"),te=Ws.city,wa=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700,mi=new URLSearchParams(location.search),fy=wa||navigator.deviceMemory&&navigator.deviceMemory<=4||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,nf=wa?"low":fy?"medium":"high",Te=mi.get("q")||localStorage.getItem("aimores3d_q2")||nf;["low","medium","high","ultra"].includes(Te)||(Te=nf);var Pi=async i=>{document.getElementById("loadmsg").textContent=i,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))};async function py(){await Pi("Preparando o relevo\u2026");let i=new Mo({antialias:Te!=="low",powerPreference:"high-performance",preserveDrawingBuffer:mi.has("shot")}),t=mi.get("pr")?+mi.get("pr"):Math.min(devicePixelRatio,{low:1,medium:wa?1.25:1.5,high:2,ultra:2}[Te]),e=t;i.setPixelRatio(e),i.setSize(innerWidth,innerHeight),i.toneMapping=Rl,i.toneMappingExposure=.62,i.outputColorSpace=Ce,i.shadowMap.enabled=Te!=="low",i.shadowMap.type=Tl,document.getElementById("app").appendChild(i.domElement);let n=new fr,s=new ln(48,innerWidth/innerHeight,1.5,4e4),r=new Ko(s,i.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.maxPolarAngle=Math.PI*.47,r.minDistance=10,r.maxDistance=7e3,r.screenSpacePanning=!1,r.zoomToCursor=!0;let o=new ia(te.meta,sa(Ws.height)),a=sa(Ws.meshes),c=new Fs;c.scale.setScalar(45e4),n.add(c);let l=c.material.uniforms;l.turbidity.value=2.6,l.rayleigh.value=2,l.mieCoefficient.value=.0035,l.mieDirectionalG.value=.82;let h=new Vo(16773596,2.6);h.castShadow=!0;let u={low:1024,medium:2048,high:4096,ultra:8192}[Te];h.shadow.mapSize.set(u,u),h.shadow.bias=-4e-4,h.shadow.normalBias=.6,n.add(h),n.add(h.target);let d=new Ho(13624319,7035456,.9);n.add(d);let f=new Rs(i),m=null,x=new fr,g=new Fs;g.scale.setScalar(1e3),x.add(g),n.fog=new Eo(13227746,2200,24e3),c.visible=!1;let p=Fd(Te);n.add(p);let v=new N;function y(yt){let Ct=(yt-6)/12,Pt=Math.sin(Math.PI*Ct)*68+2,bt=-75+Ct*150,Ht=wr.degToRad(90-Pt),ie=wr.degToRad(bt+180);v.setFromSphericalCoords(1,Ht,ie),l.sunPosition.value.copy(v);for(let zt of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])g.material.uniforms[zt].value=l[zt].value;g.material.uniforms.sunPosition.value.copy(v),m&&m.dispose(),m=f.fromScene(x,0,1,3e4),n.environment=m.texture,n.environmentIntensity=.55;let ee=Math.max(0,Math.min(1,Pt/25));h.color.setRGB(1,.72+.26*ee,.5+.42*ee),h.intensity=.6+2.2*Math.max(0,Math.min(1,Pt/35)),d.intensity=.35+.6*ee+(d.userData.boost||0),n.fog.color.setRGB(.48+.08*ee,.58+.07*ee,.74+.06*ee),p.material.uniforms.sunDir.value.copy(v),p.material.uniforms.day.value=Math.max(.15,Math.min(1,(Pt+4)/20)),i.toneMappingExposure=.5+.15*ee}y(+(mi.get("h")||15.5)),await Pi("Montando terreno e serras ao redor\u2026");let _=await new Sr().loadAsync(Ws.ground);if(Te==="low"){let yt=_.image,Ct=document.createElement("canvas");Ct.width=2048,Ct.height=Math.round(2048*yt.height/yt.width),Ct.getContext("2d").drawImage(yt,0,0,Ct.width,Ct.height),_=new gn(Ct)}_.colorSpace=Ce,_.anisotropy=i.capabilities.getMaxAnisotropy();let P=cd(o,_,Te);n.add(P);let M=await new Sr().loadAsync(Ws.backtex);M.colorSpace=Ce,M.anisotropy=8;let T=ld(te.meta,sa(Ws.back),o,M,Te==="low"||Te==="medium");n.add(T),await Pi("Ruas, cal\xE7adas e meio-fio\u2026");let w=ma(te),S=kd(te),E=Hd(te);{let yt=ma(te,25);globalThis.__noPark=yt}if(w){te.trees=te.trees.filter(yt=>!w(yt[0],yt[1])&&!w(yt[0]+3,yt[1])&&!w(yt[0]-3,yt[1])&&!w(yt[0],yt[1]+3)&&!w(yt[0],yt[1]-3));{let yt=ma(te,7),Ct=Pt=>!yt((Pt[0]+Pt[2])/2,(Pt[1]+Pt[3])/2)&&!yt(Pt[0],Pt[1])&&!yt(Pt[2],Pt[3]);te.walls=te.walls.filter(Ct),te.gates&&(te.gates=te.gates.filter(Ct))}}let A=gd(te,o,a,n,{exclude:w,skipIds:S});if(w)for(let yt of te.roads)S.has(yt.id)&&(yt.b=!0);let F=_d(te,o,a,n);await Pi("Igreja, pra\xE7a e campos\u2026");let D=Wd(te,o,n),O=Xd(te,o,n);qd(te,o,n),await Pi("Casas, telhados e muros\u2026");let k=D.center,U=D.radius,B=D.frame,H=md(te,o,n,yt=>{let Ct=0,Pt=0;for(let zt of yt.p)Ct+=zt[0],Pt+=zt[1];Ct/=yt.p.length,Pt/=yt.p.length;let bt=Ct-B.C[0],Ht=Pt-B.C[1],ie=bt*B.f[0]+Ht*B.f[1],ee=bt*B.r[0]+Ht*B.r[1];return Math.abs(ee)<B.fx+2&&ie>B.fz0-2&&ie<B.fz1+2},Te);{let yt=[];for(let bt of te.rail)for(let Ht=0;Ht<bt.pts.length-1;Ht++)yt.push([bt.pts[Ht][0],bt.pts[Ht][1],bt.pts[Ht+1][0],bt.pts[Ht+1][1]]);let Ct=(bt,Ht)=>{for(let[ie,ee,zt,ae]of yt){if(Math.abs(bt-ie)>80&&Math.abs(bt-zt)>80)continue;let ne=zt-ie,Gt=ae-ee,re=ne*ne+Gt*Gt||1,Pe=((bt-ie)*ne+(Ht-ee)*Gt)/re;Pe=Math.max(0,Math.min(1,Pe));let Je=ie+ne*Pe-bt,L=ee+Gt*Pe-Ht;if(Je*Je+L*L<16)return!0}return!1};te.trees=te.trees.filter(bt=>!Ct(bt[0],bt[1]));let Pt=bt=>!Ct((bt[0]+bt[2])/2,(bt[1]+bt[3])/2)&&!Ct(bt[0],bt[1])&&!Ct(bt[2],bt[3]);te.walls=te.walls.filter(Pt),te.gates&&(te.gates=te.gates.filter(Pt))}let G=xd(te,o,n);await Pi("Ferrovia Vit\xF3ria-Minas, viaduto e passarelas\u2026");let J=Id(te,o,n),ct=Dd(J.paths,n),dt=Nd(te,o,n,J.paths),Y=Vd(te,o,n,J.paths),et=Bd(te,o,n),ft=Ud(te,o,n,te.viaduct.railtop);await Pi("\xC1rvores\u2026");let rt=bd(te,o,n,Te,O?O.palms:[]);await Pi("Tr\xE2nsito\u2026");let Mt=new Map,_t=te.viaduct,it=_t.ramps.map(yt=>new Rn(yt.pts,yt.h)),St=(yt,Ct)=>{let Pt=1e9,bt=null;for(let Ht of it)for(let ie=0;ie<Ht.L;ie+=3){let ee=Ht.at(ie),zt=Math.hypot(ee[0]-yt,ee[2]-Ct);zt<Pt&&(Pt=zt,bt=ee[1])}return Pt<7?bt:null},W=(yt,Ct,Pt)=>{if(S.has(yt.id)){let bt=E(yt.id,Ct,Pt);if(bt!==null)return bt+.12}if(yt.id===1314627853)return _t.h+.05;if(yt.id===1314627855||yt.id===1314627854){let bt=St(Ct,Pt);if(bt!==null)return bt+.2}return o.at(Ct,Pt)+.1},X=new xa(te,o,n,W,{low:35,medium:90,high:170,ultra:220}[Te],{low:0,medium:.04}[Te]||.11,Te),I=new ba;I.scale=Pr?4:{low:.75,medium:1,high:1.5,ultra:2}[Te];{let yt=(zt,ae,ne)=>{zt.remove(ae);for(let Gt of ne)zt.add(Gt)},Ct=(zt,ae,ne)=>{if(zt)for(let Gt of[...zt.children]){if(Gt.isInstancedMesh||!Gt.isMesh||!Gt.geometry.attributes.position||Gt.geometry.attributes.position.count<3e3)continue;Gt.updateMatrixWorld(!0);let re=Qd(Gt,ae);yt(zt,Gt,[re]);for(let Pe of re.children)I.add(Pe,ne);Gt.geometry.dispose()}},Pt=(zt,ae,ne,Gt,re=null)=>{let Pe=sh(ae,ne,re&&re.geo,re&&re.mat),Je=[];for(let{near:L,far:$}of Pe)Je.push(L),$?(Je.push($),I.addLod(L,$,re.switchD)):I.add(L,Gt);yt(zt,ae,Je)},bt=(zt,ae,ne,Gt=200,re=null)=>{if(zt)for(let Pe of[...zt.children]){if(!Pe.isInstancedMesh||Pe.count<Gt)continue;let Je=sh(Pe,ae,re&&re.geo,re&&re.mat),L=[];for(let{near:$,far:lt}of Je)L.push($),lt?(L.push(lt),I.addLod($,lt,re.switchD)):I.add($,ne);yt(zt,Pe,L)}};tf(P,o,I,96,Te==="low"?[300,800]:Te==="medium"?[450,1100]:[900,2200]),Ct(G,320,700),Ct(H,450,1e9),bt(H,450,3500,100),Ct(A,600,1e9),Ct(J&&J.group,400,1500);{let zt=n.getObjectByName("praca");if(zt)for(let ae of zt.children){if(!ae.isMesh&&!ae.isInstancedMesh&&!ae.isGroup)continue;ae.updateMatrixWorld(!0);let ne=new pn().setFromObject(ae);ne.isEmpty()||(ae.userData.box=ne,I.add(ae,1100))}}J&&J.group?bt(J.group,400,450,2e3):bt(n.getObjectByName("rail"),200,450,2e3),bt(n.getObjectByName("campos"),250,900,300),X.parked&&bt(X.parked,250,600,1);let Ht=new Is(.85,0);Ht.scale(1,.78,1);let ie=new Mr({color:new Kt(1.25,1.3,1.15),flatShading:!1});Ht.computeVertexNormals();let ee=rt;if(ee)for(let zt of[...ee.children]){if(!zt.isInstancedMesh)continue;zt.material&&zt.material.alphaTest>0&&zt.material.map&&zt.count>300?Pt(ee,zt,400,0,{geo:Ht,mat:ie,switchD:Te==="low"?200:Te==="medium"?350:700}):zt.count>300&&Pt(ee,zt,400,zt.geometry.attributes.position.count<200?350:700)}if(Te==="low"){let zt=new Map,ae=new Set;for(let ne of["viaduto","viaduto_centro"])n.getObjectByName(ne)?.traverse(Gt=>ae.add(Gt));n.traverse(ne=>{if(!(ne.isMesh||ne.isInstancedMesh)||ae.has(ne))return;let Gt=ne.material;if(!Gt||Array.isArray(Gt)||Gt.type!=="MeshStandardMaterial"||Object.prototype.hasOwnProperty.call(Gt,"onBeforeCompile")&&Gt.customProgramCacheKey()!=="paintmask"||Gt===P.material)return;let re=zt.get(Gt);re||(re=new Mr({color:Gt.color,map:Gt.map,vertexColors:Gt.vertexColors,alphaTest:Gt.alphaTest,side:Gt.side,transparent:Gt.transparent,opacity:Gt.opacity,polygonOffset:Gt.polygonOffset,polygonOffsetFactor:Gt.polygonOffsetFactor,polygonOffsetUnits:Gt.polygonOffsetUnits,emissive:Gt.emissive,depthWrite:Gt.depthWrite}),Gt.alphaTest>0&&Gt.map&&re.color.multiplyScalar(1.3),Gt.customProgramCacheKey()==="paintmask"&&(re.onBeforeCompile=Gt.onBeforeCompile,re.customProgramCacheKey=()=>"paintmaskL"),zt.set(Gt,re)),ne.material=re}),d.userData.boost=.45,y(+(mi.get("h")||15.5))}{let zt=[];n.traverse(ne=>{(ne.isMesh||ne.isInstancedMesh)&&(zt.push([ne,ne.visible,ne.frustumCulled]),ne.visible=!0,ne.frustumCulled=!1)}),i.compile(n,s);let ae=new gt;i.getSize(ae),i.setSize(64,64,!1),i.render(n,s),i.setSize(ae.x,ae.y,!1);for(let[ne,Gt,re]of zt)ne.visible=Gt,ne.frustumCulled=re}I.update(s,!0)}let ot=new Ma(document.getElementById("labels"));for(let[yt,Ct]of Object.entries(te.neigh)){if(Ct.area<2e4)continue;let[Pt,bt]=Ct.label;ot.add(yt==="Nilton Freire Sampaio"?"Residencial Nilton Freire Sampaio":yt,new N(Pt,o.at(Pt,bt)+40,bt),"lbl nb",3500)}for(let[yt,Ct,Pt]of te.extras.poi){let bt=yt.startsWith("Viaduto")?_t.h+12:o.at(Ct,Pt)+(yt.startsWith("Igreja")?42:18);ot.add(yt.replace("Estadio","Est\xE1dio"),new N(Ct,bt,Pt),"lbl poi",2600)}let V=new fe;V.name="limites";let Z=[16765286,448160,15681391,1149618,16223339,13073919,9485933,16369487],Q=0;for(let[yt,Ct]of Object.entries(te.neigh)){let Pt=Z[Q++%Z.length];for(let bt of Ct.rings){let Ht=[];for(let zt=0;zt<bt.length-1;zt++){let[ae,ne]=bt[zt],[Gt,re]=bt[zt+1],Pe=Math.hypot(Gt-ae,re-ne);for(let Je=0;Je<Pe;Je+=4){let L=ae+(Gt-ae)*Je/Pe,$=ne+(re-ne)*Je/Pe;Ht.push(new N(L,o.at(L,$)+1.2,$))}}if(Ht.length<2)continue;Ht.push(Ht[0].clone());let ie=new pe().setFromPoints(Ht),ee=new To(ie,new Bo({color:Pt,dashSize:8,gapSize:5,transparent:!0,opacity:.9,depthTest:!0}));ee.computeLineDistances(),V.add(ee)}}V.visible=!1,n.add(V);let at=yt=>{let Ct=te.neigh[yt];return Ct?Ct.label:[0,0]},q={geral:{t:[-120,0,120],d:2300,pol:.95,az:-.35},rua:{t:(()=>{let yt=te.neigh["Nilton Freire Sampaio"].label,Ct=null,Pt=1e9;for(let bt of te.roads)if(bt.s==="paver")for(let Ht of bt.p){let ie=Math.hypot(Ht[0]-yt[0],Ht[1]-yt[1]);ie<Pt&&(Pt=ie,Ct=Ht)}return[Ct[0],0,Ct[1]]})(),d:26,pol:1.38,az:.6},panorama:{t:[-300,0,150],d:1500,pol:1.33,az:-.25},viaduto:{t:[dt.center[0],dt.center[1]-3,dt.center[2]],d:120,pol:1.22,az:(()=>{let[yt,Ct]=te.viaduct.deck,Pt=Ct[0]-yt[0],bt=Ct[1]-yt[1],Ht=Math.hypot(Pt,bt),ie=-bt/Ht,ee=Pt/Ht,zt=ie*.85+Pt/Ht*.5,ae=ee*.85+bt/Ht*.5;return Math.atan2(zt,ae)})()},igreja:{t:[D.center[0],o.at(D.center[0],D.center[1]),D.center[1]],d:120,pol:1.05,az:Math.atan2(D.front[0],D.front[1])},praca:{t:[O.center[0],o.at(O.center[0],O.center[1]),O.center[1]],d:95,pol:.9,az:.5},residencial:{t:[at("Nilton Freire Sampaio")[0],0,at("Nilton Freire Sampaio")[1]],d:380,pol:.85,az:-.3},triangulo:{t:[at("Tri\xE2ngulo")[0],0,at("Tri\xE2ngulo")[1]],d:420,pol:.9,az:.3},sossego:{t:[at("Sossego")[0],0,at("Sossego")[1]],d:330,pol:.85,az:-.6},hospital:{t:[...(()=>{let yt=te.extras.poi.find(Ct=>Ct[0].startsWith("Hospital"));return[yt[1],0,yt[2]]})()],d:420,pol:.9,az:.6}},R=null;function b(yt,Ct=200,Pt=1,bt=null){let Ht=yt.clone?yt.clone():new N(...yt);Ht.y||(Ht.y=o.at(Ht.x,Ht.z));let ie=s.position.clone().sub(r.target),ee=new fi().setFromVector3(ie);bt===null&&(bt=ee.theta);let zt=new N().setFromSpherical(new fi(Ct,Pt,bt)).add(Ht);R={t0:performance.now(),dur:1600,fromP:s.position.clone(),fromT:r.target.clone(),toP:zt,toT:Ht}}function z(yt,Ct){if(yt==="rua"){let Ht=te.neigh["Nilton Freire Sampaio"].label,ie=null,ee=1e9;for(let lt of te.roads)if(lt.s==="paver")for(let ut=0;ut<lt.p.length-1;ut++){let nt=lt.p[ut],Rt=Math.hypot(nt[0]-Ht[0],nt[1]-Ht[1]);Rt<ee&&(ee=Rt,ie=[lt.p[ut],lt.p[ut+1]])}let[zt,ae]=ie,ne=ae[0]-zt[0],Gt=ae[1]-zt[1],re=Math.hypot(ne,Gt),Pe=zt[0]+ne/re*30,Je=zt[1]+Gt/re*30,L=new N(Pe,o.at(Pe,Je)+1.5,Je),$=new N(zt[0]-ne/re*6,o.at(zt[0],zt[1])+5,zt[1]-Gt/re*6);Ct?(r.target.copy(L),s.position.copy($),r.update()):R={t0:performance.now(),dur:1600,fromP:s.position.clone(),fromT:r.target.clone(),toP:$,toT:L};return}let Pt=q[yt],bt=new N(...Pt.t);Pt.t[1]||(bt.y=o.at(bt.x,bt.z)),Ct?(r.target.copy(bt),s.position.copy(new N().setFromSpherical(new fi(Pt.d,Pt.pol,Pt.az)).add(bt)),r.update()):b(bt,Pt.d,Pt.pol,Pt.az)}z(mi.get("view")||"geral",!0),i.domElement.addEventListener("dblclick",yt=>{let Ct=i.domElement.getBoundingClientRect(),Pt=new gt((yt.clientX-Ct.left)/Ct.width*2-1,-((yt.clientY-Ct.top)/Ct.height)*2+1),bt=new Ds;bt.setFromCamera(Pt,s);let Ht=bt.intersectObjects([P,A],!0)[0];Ht&&b(Ht.point.clone().add(new N(0,1.6,0)),25,1.45)});let j=()=>[P,A,H,G,D.group,dt.group,ft],st=new Sa({scene:n,camera:s,renderer:i,controls:r,labels:ot,pickTargets:j,H:o,flyTo:b,panel:document.getElementById("mkbody")});document.querySelectorAll("[data-view]").forEach(yt=>yt.onclick=()=>z(yt.dataset.view));let tt=(yt,Ct)=>{let Pt=document.getElementById(yt);Pt.onchange=()=>Ct(Pt.checked),Ct(Pt.checked)};tt("t_cars",yt=>{X.mesh.visible=yt,X.parked.visible=yt}),tt("t_train",yt=>{ct.group.userData.off=!yt}),tt("t_labels",yt=>{ot.setGroupVisible("lbl nb",yt),ot.setGroupVisible("lbl poi",yt)}),tt("t_limits",yt=>{V.visible=yt}),tt("t_trees",yt=>{rt.visible=yt}),tt("t_shadows",yt=>{h.castShadow=yt&&Te!=="low"});let pt=document.getElementById("hour");pt.value=mi.get("h")||15.5;let ht=document.getElementById("hourlbl"),xt=yt=>`${Math.floor(yt)}:${String(Math.round(yt%1*60)).padStart(2,"0")}`;ht.textContent=xt(+pt.value);let At=null;pt.oninput=()=>{ht.textContent=xt(+pt.value),clearTimeout(At),At=setTimeout(()=>y(+pt.value),60)};let vt=document.getElementById("quality");vt.value=Te,vt.onchange=()=>{localStorage.setItem("aimores3d_q2",vt.value),location.search="?q="+vt.value};let Lt=document.getElementById("mkpanel");document.getElementById("mkhead").onclick=()=>Lt.classList.toggle("closed"),st.onMode=yt=>{innerWidth<=760&&yt!=="nav"&&!st.state.marks.length&&yt==="place"&&Lt.classList.add("closed"),innerWidth<=760&&yt==="place"&&(Lt.classList.add("closed"),st.toast("Toque no mapa para colocar o pino"))},window.__culler=I;let kt=document.getElementById("touchmode"),Vt=!1,Dt=()=>{r.touches={ONE:Vt?_n.ROTATE:_n.PAN,TWO:_n.DOLLY_ROTATE},kt.textContent=Vt?"\u{1F504} 1 dedo: girar":"\u270B 1 dedo: mover",kt.classList.toggle("on",Vt)};Dt(),kt.onclick=()=>{Vt=!Vt,Dt()},document.getElementById("layersbtn").onclick=()=>{document.getElementById("layers").classList.toggle("open"),document.getElementById("layersbtn").classList.toggle("on")},wa&&document.getElementById("mkpanel").classList.add("closed"),document.getElementById("helpbtn").onclick=()=>document.getElementById("help").classList.toggle("show"),addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let he=new Go,se=0,ye=null,K=0,Ut=0,mt=new pn(new N(o.XMIN-300,-1e4,o.ZMIN-300),new N(o.XMAX+300,1e4,o.ZMAX+300)),Et=new le,Ft=0,Ot=0,jt={t0:performance.now(),n:0,slow:0,fast:0},Ae=[t,Math.min(t,.85),Math.min(t,.72),Math.min(t,.6)],Ue=0,ve=yt=>{if(Pr||mi.has("noadapt"))return;let Ct=performance.now();jt.n++;let Pt=Ct-jt.t0;if(Pt<2e3)return;let bt=jt.n*1e3/Pt;jt.t0=Ct,jt.n=0,yt&&(bt<28?(jt.slow++,jt.fast=0,jt.slow>=1&&(jt.slow=0,Ue<Ae.length-1&&Ae[Ue+1]<e?(Ue++,e=Ae[Ue],i.setPixelRatio(e),i.setSize(innerWidth,innerHeight)):I.scale>.45?(I.scale*=.8,I.update(s,!0)):h.castShadow?h.castShadow=!1:X.mesh.visible&&Te==="low"&&(X.mesh.visible=!1))):bt>52&&(jt.fast++,jt.slow=0,jt.fast>=3&&Ue>0&&(jt.fast=0,Ue--,e=Ae[Ue],i.setPixelRatio(e),i.setSize(innerWidth,innerHeight))))};window.__perf=()=>({pr:e,cullScale:I.scale,shadows:h.castShadow,quality:Te});let We=window.__lt={n:0,sum:0,cull:0,rend:0,tick:0};function Mn(){let yt=Pr?.05:Math.min(.05,he.getDelta());se+=yt;let Ct=performance.now();if(R){let re=Math.min(1,(performance.now()-R.t0)/R.dur),Pe=re<.5?4*re*re*re:1-Math.pow(-2*re+2,3)/2;s.position.lerpVectors(R.fromP,R.toP,Pe),r.target.lerpVectors(R.fromT,R.toT,Pe),re>=1&&(R=null)}r.update(),r.target.clamp(mt.min,mt.max),p.position.copy(s.position);let Pt=o.at(s.position.x,s.position.z);s.position.y<Pt+2&&(s.position.y=Pt+2);let bt=performance.now();X.mesh.visible&&X.tick(yt),ct.group.userData.off?ct.group.visible=!1:ct.tick(yt),F&&F.userData.tick(se),We.tick+=performance.now()-bt;let Ht=s.position.distanceTo(r.target),ie=Math.max(120,Math.min(1600,Ht*1.25)),ee=h.shadow.camera;ee.left=-ie,ee.right=ie,ee.top=ie,ee.bottom=-ie,ee.near=1,ee.far=6e3,ee.updateProjectionMatrix(),h.target.position.copy(r.target),h.position.copy(r.target).addScaledVector(v,3e3),Te==="medium"&&(i.shadowMap.autoUpdate=!1,Ut++,(!ye||ye.distanceTo(r.target)>ie*.04||Math.abs(K-ie)>ie*.05||Ut>20)&&(i.shadowMap.needsUpdate=!0,Ut=0,ye=(ye||new N).copy(r.target),K=ie)),st.tickScale(s);let zt=performance.now();I.update(s),We.cull+=performance.now()-zt,s.updateMatrixWorld();let ae=!Et.equals(s.matrixWorld)||!!R;Et.copy(s.matrixWorld),Ft=ae?0:Ft+1;let ne=Pr||ae||Ft<3||++Ot%3===0,Gt=performance.now();if(ne){i.render(n,s),We.rend+=performance.now()-Gt;let re=performance.now();ot.update(s,innerWidth,innerHeight),We.lab=(We.lab||0)+performance.now()-re}We.n++,We.sum+=performance.now()-Ct,ve(ae),Pr||requestAnimationFrame(Mn)}document.getElementById("loading").classList.add("done"),window.__ready=!0,window.__app={quality:Te,pr:()=>e,render:()=>i.render(n,s),setCam:(yt,Ct)=>{R=null,r.target.set(...Ct),s.position.set(...yt),r.update()},city:te,traffic:X,trainAt:(yt,Ct)=>ct.placeNear(yt,Ct),info:()=>({calls:i.info.render.calls,tris:i.info.render.triangles,geom:i.info.memory.geometries,tex:i.info.memory.textures}),renderFrame:(yt=1,Ct=.05)=>{for(let Pt=0;Pt<yt;Pt++)he.getDelta(),Mn();return!0},goView:z,camera:s,controls:r,markers:st,flyTo:b,H:o,setTime:y,scene:n,viad2:Y,club:et},window.__zincSpot=()=>{let yt=te.buildings.map(bt=>{let Ht=0,ie=0;for(let ee of bt.p)Ht+=ee[0],ie+=ee[1];return[Ht/bt.p.length,ie/bt.p.length,bt.rm==="metal"||bt.rm==="fiber"]}),Ct=null,Pt=-1;for(let bt of yt){if(!bt[2])continue;let Ht=0;for(let ie of yt)ie[2]&&Math.hypot(ie[0]-bt[0],ie[1]-bt[1])<40&&Ht++;Ht>Pt&&(Pt=Ht,Ct=bt)}return[Ct[0],o.at(Ct[0],Ct[1]),Ct[1]]},Mn()}py().catch(i=>{console.error(i),document.getElementById("loadmsg").textContent="Erro ao carregar: "+i.message})});my();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
