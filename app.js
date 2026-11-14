(()=>{var Ae=(i,t)=>()=>(i&&(t=i(i=0)),t);var Zd=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Tl(i,t){return(i%t+t)%t}function Uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nf(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function Ff(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function Of(i,t=1){return t-Math.abs(Tl(i,t*2)-t)}function Bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hf(i,t){return i+Math.random()*(t-i)}function Vf(i){return i*(.5-Math.random())}function Gf(i){i!==void 0&&(oh=i);let t=oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wf(i){return i*$s}function Xf(i){return i*er}function qf(i){return(i&i-1)===0&&i!==0}function Yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jf(){let i=nr("canvas");return i.style.display="block",i}function Ys(i){i in ah||(ah[i]=!0,console.warn(i))}function Kf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function up(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===_i,a),c===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ur),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Fr);let h=up(i,t,e,n,Ur,Nr,Fr,bh);if(h){let u=new N;Li.getBarycoord(bh,Ur,Nr,Fr,u),s&&(h.uv=Li.getInterpolatedAttribute(s,a,c,l,u,new vt)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,c,l,u,new vt)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Li.getNormal(Ur,Nr,Fr,d.normal),h.face=d,h.barycoord=u}return h}function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}function Ru(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function j0(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1,x=m(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){let x=m(y);x&&(x.isCubeTexture||x.mapping===Bo)?(h===void 0&&(h=new Lt(new Pe(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Ri)),h.material.toneMapped=ce.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Lt(new vi(2,2),new nn({name:"BackgroundMaterial",uniforms:Ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ce.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Hr,Au(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:g}}function Q0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,A,F,U,B){let O=!1,D=u(U,F,A);r!==D&&(r=D,l(r.object)),O=f(M,U,F,B),O&&m(M,U,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(M,A,F,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,F){let U=F.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let O=B[A.id];O===void 0&&(O={},B[A.id]=O);let D=O[U];return D===void 0&&(D=d(c()),O[U]=D),D}function d(M){let A=[],F=[],U=[];for(let B=0;B<e;B++)A[B]=0,F[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,A,F,U){let B=r.attributes,O=A.attributes,D=0,V=F.getAttributes();for(let C in V)if(V[C].location>=0){let G=B[C],it=O[C];if(it===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),G===void 0||G.attribute!==it||it&&G.data!==it.data)return!0;D++}return r.attributesNum!==D||r.index!==U}function m(M,A,F,U){let B={},O=A.attributes,D=0,V=F.getAttributes();for(let C in V)if(V[C].location>=0){let G=O[C];G===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(G=M.instanceColor));let it={};it.attribute=G,G&&G.data&&(it.data=G.data),B[C]=it,D++}r.attributes=B,r.attributesNum=D,r.index=U}function _(){let M=r.newAttributes;for(let A=0,F=M.length;A<F;A++)M[A]=0}function g(M){p(M,0)}function p(M,A){let F=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),B[M]!==A&&(i.vertexAttribDivisor(M,A),B[M]=A)}function v(){let M=r.newAttributes,A=r.enabledAttributes;for(let F=0,U=A.length;F<U;F++)A[F]!==M[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function y(M,A,F,U,B,O,D){D===!0?i.vertexAttribIPointer(M,A,F,B,O):i.vertexAttribPointer(M,A,F,U,B,O)}function x(M,A,F,U){_();let B=U.attributes,O=F.getAttributes(),D=A.defaultAttributeValues;for(let V in O){let C=O[V];if(C.location>=0){let k=B[V];if(k===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(k=M.instanceColor)),k!==void 0){let G=k.normalized,it=k.itemSize,ft=t.get(k);if(ft===void 0)continue;let pt=ft.buffer,Z=ft.type,tt=ft.bytesPerElement,mt=Z===i.INT||Z===i.UNSIGNED_INT||k.gpuType===xl;if(k.isInterleavedBufferAttribute){let ot=k.data,bt=ot.stride,yt=k.offset;if(ot.isInstancedInterleavedBuffer){for(let et=0;et<C.locationSize;et++)p(C.location+et,ot.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<C.locationSize;et++)g(C.location+et);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let et=0;et<C.locationSize;et++)y(C.location+et,it/C.locationSize,Z,G,bt*tt,(yt+it/C.locationSize*et)*tt,mt)}else{if(k.isInstancedBufferAttribute){for(let ot=0;ot<C.locationSize;ot++)p(C.location+ot,k.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ot=0;ot<C.locationSize;ot++)g(C.location+ot);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ot=0;ot<C.locationSize;ot++)y(C.location+ot,it/C.locationSize,Z,G,it*tt,it/C.locationSize*ot*tt,mt)}}else if(D!==void 0){let G=D[V];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(C.location,G);break;case 3:i.vertexAttrib3fv(C.location,G);break;case 4:i.vertexAttrib4fv(C.location,G);break;default:i.vertexAttrib1fv(C.location,G)}}}}v()}function P(){T();for(let M in n){let A=n[M];for(let F in A){let U=A[F];for(let B in U)h(U[B].object),delete U[B];delete A[F]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let A=n[M.id];for(let F in A){let U=A[F];for(let B in U)h(U[B].object),delete U[B];delete A[F]}delete n[M.id]}function w(M){for(let A in n){let F=n[A];if(F[M.id]===void 0)continue;let U=F[M.id];for(let B in U)h(U[B].object),delete U[B];delete F[M.id]}}function T(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function tg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let T=w===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kn&&!T)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:S}}function ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Rn,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,y=v*4,x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let P=0;P!==y;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function ig(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=gs:a===rc&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===sc||a===rc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function sg(i){let t=[],e=[],n=[],s=i,r=i-ls+1+Ah.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ls?c=Ah[o-i+ls-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,T=S>2?0:-1,E=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];v.set(E,_*m*S),y.set(d,g*m*S);let M=[S,S,S,S,S,S];x.set(M,p*m*S)}let P=new oe;P.setAttribute("position",new jt(v,_)),P.setAttribute("uv",new jt(y,g)),P.setAttribute("faceIndex",new jt(x,p)),t.push(P),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ph(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){let n=new Float32Array(Di),s=new N(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ih(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Lh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===sc||c===rc,h=c===gs||c===_s;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Es(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Es(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){let P=v[y+0],S=v[y+1],w=v[y+2];d.push(P,S,S,w,w,P)}}else if(m!==void 0){let v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let P=y+0,S=y+1,w=y+2;d.push(P,S,S,w,w,P)}}else return;let g=new(wu(d)?ao:oo)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*P*4*u),w=new ro(S,x,P,u);w.type=kn,w.needsUpdate=!0;let T=y*4;for(let M=0;M<u;M++){let A=g[M],F=p[M],U=v[M],B=x*P*4*M;for(let O=0;O<A.count;O++){let D=O*T;f===!0&&(s.fromBufferAttribute(A,O),S[B+D+0]=s.x,S[B+D+1]=s.y,S[B+D+2]=s.z,S[B+D+3]=0),m===!0&&(s.fromBufferAttribute(F,O),S[B+D+4]=s.x,S[B+D+5]=s.y,S[B+D+6]=s.z,S[B+D+7]=0),_===!0&&(s.fromBufferAttribute(U,O),S[B+D+8]=s.x,S[B+D+9]=s.y,S[B+D+10]=s.z,S[B+D+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new vt(x,P)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ko(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),De(e,n)}}function xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),De(e,n)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Fh.set(n),i.uniformMatrix4fv(this.addr,!1,Fh),De(e,n)}}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=bu,r=Dh):r=Cu,e.setTexture2D(t||r,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lu,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function Lg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return Eg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return wg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Vg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cu,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Iu,r[o])}function Jg(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lu,r[o])}function Kg(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function jg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}function zh(i,t){i.seq.push(t),i.map[t.id]=t}function Qg(i,t,e){let n=i.name,s=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),o=Ga.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zh(e,l===void 0?new zc(a,i,t):new kc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Hc(a),zh(e,u)),e=u}}}function kh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function n_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function i_(i){ce._getMatrix(Hh,ce.workingColorSpace,i);let t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n_(i.getShaderSource(t),o)}else return s}function s_(i,t){let e=i_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function r_(i,t){let e;switch(t){case xf:e="Linear";break;case yf:e="Reinhard";break;case vf:e="Cineon";break;case _l:e="ACESFilmic";break;case Ef:e="AgX";break;case Sf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function o_(){ce.getLuminanceCoefficients(Gr);let i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function c_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function Gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Vc(i){return i.replace(h_,d_)}function d_(i,t){let e=ie[t];if(e===void 0){let n=u_.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}function Xh(i){return i.replace(f_,p_)}function p_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function g_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case du:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case _f:t="ENVMAP_BLENDING_ADD";break}return t}function y_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=m_(e),l=g_(e),h=__(e),u=x_(e),d=y_(e),f=a_(e),m=c_(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(g=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ie.tonemapping_pars_fragment:"",e.toneMapping!==gi?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,s_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Vc(o),o=Gh(o,e),o=Wh(o,e),a=Vc(a),a=Gh(a,e),a=Wh(a,e),o=Xh(o),a=Xh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+g+o,x=v+p+a,P=kh(s,s.VERTEX_SHADER,y),S=kh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(A){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(S).trim(),O=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,S);else{let V=Vh(s,P,"vertex"),C=Vh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+V+`
`+C)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(D=!1);D&&(A.diagnostics={runnable:O,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(P),s.deleteShader(S),T=new ps(s,_),E=l_(s,_)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,t_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}function E_(i,t,e,n,s,r,o){let a=new ir,c=new Gc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,M,A,F,U){let B=F.fog,O=U.geometry,D=E.isMeshStandardMaterial?F.environment:null,V=(E.isMeshStandardMaterial?e:t).get(E.envMap||D),C=V&&V.mapping===Bo?V.image.height:null,k=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=G!==void 0?G.length:0,ft=0;O.morphAttributes.position!==void 0&&(ft=1),O.morphAttributes.normal!==void 0&&(ft=2),O.morphAttributes.color!==void 0&&(ft=3);let pt,Z,tt,mt;if(k){let ne=Bn[k];pt=ne.vertexShader,Z=ne.fragmentShader}else pt=E.vertexShader,Z=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),mt=c.getFragmentShaderID(E);let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),yt=U.isInstancedMesh===!0,et=U.isBatchedMesh===!0,wt=!!E.map,W=!!E.matcap,q=!!V,I=!!E.aoMap,lt=!!E.lightMap,H=!!E.bumpMap,J=!!E.normalMap,$=!!E.displacementMap,ht=!!E.emissiveMap,X=!!E.metalnessMap,R=!!E.roughnessMap,b=E.anisotropy>0,z=E.clearcoat>0,j=E.dispersion>0,ct=E.iridescence>0,at=E.sheen>0,Mt=E.transmission>0,dt=b&&!!E.anisotropyMap,Et=z&&!!E.clearcoatMap,At=z&&!!E.clearcoatNormalMap,St=z&&!!E.clearcoatRoughnessMap,Dt=ct&&!!E.iridescenceMap,Ft=ct&&!!E.iridescenceThicknessMap,Ht=at&&!!E.sheenColorMap,It=at&&!!E.sheenRoughnessMap,Qt=!!E.specularMap,$t=!!E.specularColorMap,de=!!E.specularIntensityMap,K=Mt&&!!E.transmissionMap,Q=Mt&&!!E.thicknessMap,Y=!!E.gradientMap,st=!!E.alphaMap,ut=E.alphaTest>0,xt=!!E.alphaHash,Pt=!!E.extensions,Gt=gi;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Jt={shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:pt,fragmentShader:Z,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:et,batchingColor:et&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:As,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:W,envMap:q,envMapMode:q&&V.mapping,envMapCubeUVHeight:C,aoMap:I,lightMap:lt,bumpMap:H,normalMap:J,displacementMap:d&&$,emissiveMap:ht,normalMapObjectSpace:J&&E.normalMapType===Tf,normalMapTangentSpace:J&&E.normalMapType===Su,metalnessMap:X,roughnessMap:R,anisotropy:b,anisotropyMap:dt,clearcoat:z,clearcoatMap:Et,clearcoatNormalMap:At,clearcoatRoughnessMap:St,dispersion:j,iridescence:ct,iridescenceMap:Dt,iridescenceThicknessMap:Ft,sheen:at,sheenColorMap:Ht,sheenRoughnessMap:It,specularMap:Qt,specularColorMap:$t,specularIntensityMap:de,transmission:Mt,transmissionMap:K,thicknessMap:Q,gradientMap:Y,opaque:E.transparent===!1&&E.blending===us&&E.alphaToCoverage===!1,alphaMap:st,alphaTest:ut,alphaHash:xt,combine:E.combine,mapUv:wt&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:lt&&_(E.lightMap.channel),bumpMapUv:H&&_(E.bumpMap.channel),normalMapUv:J&&_(E.normalMap.channel),displacementMapUv:$&&_(E.displacementMap.channel),emissiveMapUv:ht&&_(E.emissiveMap.channel),metalnessMapUv:X&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:dt&&_(E.anisotropyMap.channel),clearcoatMapUv:Et&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(E.sheenRoughnessMap.channel),specularMapUv:Qt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:de&&_(E.specularIntensityMap.channel),transmissionMapUv:K&&_(E.transmissionMap.channel),thicknessMapUv:Q&&_(E.thicknessMap.channel),alphaMapUv:st&&_(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(J||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(wt||st),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:ht&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vt,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let A in E.defines)M.push(A),M.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let M=m[E.type],A;if(M){let F=Bn[M];A=Al.clone(F.uniforms)}else A=E.uniforms;return A}function P(E,M){let A;for(let F=0,U=h.length;F<U;F++){let B=h[F];if(B.cacheKey===M){A=B,++A.usedTimes;break}}return A===void 0&&(A=new v_(i,M,E,r),h.push(A)),A}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function S_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||b_),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Zh,i.set(n,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new T_,e=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new re,o=new re;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,P=0,S=0,w=0;l.sort(C_);for(let E=0,M=l.length;E<M;E++){let A=l[E],F=A.color,U=A.intensity,B=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(A.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(A.sh.coefficients[D],U);w++}else if(A.isDirectionalLight){let D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,C=e.get(A);C.shadowIntensity=V.intensity,C.shadowBias=V.bias,C.shadowNormalBias=V.normalBias,C.shadowRadius=V.radius,C.shadowMapSize=V.mapSize,n.directionalShadow[f]=C,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=D,f++}else if(A.isSpotLight){let D=t.get(A);D.position.setFromMatrixPosition(A.matrixWorld),D.color.copy(F).multiplyScalar(U),D.distance=B,D.coneCos=Math.cos(A.angle),D.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),D.decay=A.decay,n.spot[_]=D;let V=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,V.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[_]=V.matrix,A.castShadow){let C=e.get(A);C.shadowIntensity=V.intensity,C.shadowBias=V.bias,C.shadowNormalBias=V.normalBias,C.shadowRadius=V.radius,C.shadowMapSize=V.mapSize,n.spotShadow[_]=C,n.spotShadowMap[_]=O,x++}_++}else if(A.isRectAreaLight){let D=t.get(A);D.color.copy(F).multiplyScalar(U),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=D,g++}else if(A.isPointLight){let D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),D.distance=A.distance,D.decay=A.decay,A.castShadow){let V=A.shadow,C=e.get(A);C.shadowIntensity=V.intensity,C.shadowBias=V.bias,C.shadowNormalBias=V.normalBias,C.shadowRadius=V.radius,C.shadowMapSize=V.mapSize,C.shadowCameraNear=V.camera.near,C.shadowCameraFar=V.camera.far,n.pointShadow[m]=C,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=A.shadow.matrix,y++}n.point[m]=D,m++}else if(A.isHemisphereLight){let D=t.get(A);D.skyColor.copy(A.color).multiplyScalar(U),D.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==m||T.spotLength!==_||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==P||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=f,T.pointLength=m,T.spotLength=_,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=P,T.numLightProbes=w,n.version=R_++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function $h(i){let t=new P_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function I_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new $h(i),t.set(s,[a])):r>=o.length?(a=new $h(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function U_(i,t,e){let n=new sr,s=new vt,r=new vt,o=new be,a=new rr({depthPacking:wl}),c=new Xc,l={},h=e.maxTextureSize,u={[_i]:Be,[Be]:_i,[Vt]:Vt},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new oe;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let p=this.type;this.render=function(S,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=p!==$n&&this.type===$n,B=p===$n&&this.type!==$n;for(let O=0,D=S.length;O<D;O++){let V=S[O],C=V.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let k=C.getFrameExtents();if(s.multiply(k),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,C.mapSize.y=r.y)),C.map===null||U===!0||B===!0){let it=this.type!==$n?{minFilter:dn,magFilter:dn}:{};C.map!==null&&C.map.dispose(),C.map=new ei(s.x,s.y,it),C.map.texture.name=V.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let G=C.getViewportCount();for(let it=0;it<G;it++){let ft=C.getViewport(it);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),F.viewport(o),C.updateMatrices(V,it),n=C.getFrustum(),x(w,T,C.camera,V,this.type)}C.isPointLightShadow!==!0&&this.type===$n&&v(C,T),C.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,A)};function v(S,w){let T=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,T,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,T,f,_,null)}function y(S,w,T,E){let M=null,A=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=T.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=M.uuid,U=w.uuid,B=l[F];B===void 0&&(B={},l[F]=B);let O=B[U];O===void 0&&(O=M.clone(),B[U]=O,w.addEventListener("dispose",P)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,E===$n?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=T}return M}function x(S,w,T,E,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===$n)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let U=t.update(S),B=S.material;if(Array.isArray(B)){let O=U.groups;for(let D=0,V=O.length;D<V;D++){let C=O[D],k=B[C.materialIndex];if(k&&k.visible){let G=y(S,k,E,M);S.onBeforeShadow(i,S,w,T,U,G,C),i.renderBufferDirect(T,null,U,G,S,C),S.onAfterShadow(i,S,w,T,U,G,C)}}}else if(B.visible){let O=y(S,B,E,M);S.onBeforeShadow(i,S,w,T,U,O,null),i.renderBufferDirect(T,null,U,O,S,null),S.onAfterShadow(i,S,w,T,U,O,null)}}let F=S.children;for(let U=0,B=F.length;U<B;U++)x(F[U],w,T,E,M)}function P(S){S.target.removeEventListener("dispose",P);for(let T in l){let E=l[T],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function F_(i,t){function e(){let K=!1,Q=new be,Y=null,st=new be(0,0,0,0);return{setMask:function(ut){Y!==ut&&!K&&(i.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){K=ut},setClear:function(ut,xt,Pt,Gt,Jt){Jt===!0&&(ut*=Gt,xt*=Gt,Pt*=Gt),Q.set(ut,xt,Pt,Gt),st.equals(Q)===!1&&(i.clearColor(ut,xt,Pt,Gt),st.copy(Q))},reset:function(){K=!1,Y=null,st.set(-1,0,0,0)}}}function n(){let K=!1,Q=!1,Y=null,st=null,ut=null;return{setReversed:function(xt){if(Q!==xt){let Pt=t.get("EXT_clip_control");Q?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let Gt=ut;ut=null,this.setClear(Gt)}Q=xt},getReversed:function(){return Q},setTest:function(xt){xt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(xt){Y!==xt&&!K&&(i.depthMask(xt),Y=xt)},setFunc:function(xt){if(Q&&(xt=N_[xt]),st!==xt){switch(xt){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=xt}},setLocked:function(xt){K=xt},setClear:function(xt){ut!==xt&&(Q&&(xt=1-xt),i.clearDepth(xt),ut=xt)},reset:function(){K=!1,Y=null,st=null,ut=null,Q=!1}}}function s(){let K=!1,Q=null,Y=null,st=null,ut=null,xt=null,Pt=null,Gt=null,Jt=null;return{setTest:function(ne){K||(ne?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){Q!==ne&&!K&&(i.stencilMask(ne),Q=ne)},setFunc:function(ne,Me,Te){(Y!==ne||st!==Me||ut!==Te)&&(i.stencilFunc(ne,Me,Te),Y=ne,st=Me,ut=Te)},setOp:function(ne,Me,Te){(xt!==ne||Pt!==Me||Gt!==Te)&&(i.stencilOp(ne,Me,Te),xt=ne,Pt=Me,Gt=Te)},setLocked:function(ne){K=ne},setClear:function(ne){Jt!==ne&&(i.clearStencil(ne),Jt=ne)},reset:function(){K=!1,Q=null,Y=null,st=null,ut=null,xt=null,Pt=null,Gt=null,Jt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,P=null,S=null,w=new Yt(0,0,0),T=0,E=!1,M=null,A=null,F=null,U=null,B=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,V=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(C)[1]),D=V>=1):C.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),D=V>=2);let k=null,G={},it=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),pt=new be().fromArray(it),Z=new be().fromArray(ft);function tt(K,Q,Y,st){let ut=new Uint8Array(4),xt=i.createTexture();i.bindTexture(K,xt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Y;Pt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(Q+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return xt}let mt={};mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ms),H(!1),J(Jl),ot(i.CULL_FACE),I(mi);function ot(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function bt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function yt(K,Q){return u[K]!==Q?(i.bindFramebuffer(K,Q),u[K]=Q,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function et(K,Q){let Y=f,st=!1;if(K){Y=d.get(Q),Y===void 0&&(Y=[],d.set(Q,Y));let ut=K.textures;if(Y.length!==ut.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Pt=ut.length;xt<Pt;xt++)Y[xt]=i.COLOR_ATTACHMENT0+xt;Y.length=ut.length,st=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,st=!0);st&&i.drawBuffers(Y)}function wt(K){return m!==K?(i.useProgram(K),m=K,!0):!1}let W={[Ii]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};W[tf]=i.MIN,W[ef]=i.MAX;let q={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(K,Q,Y,st,ut,xt,Pt,Gt,Jt,ne){if(K===mi){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),K!==Kd){if(K!==g||ne!==E){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),ne)switch(K){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,y=null,P=null,S=null,w.set(0,0,0),T=0,g=K,E=ne}return}ut=ut||Q,xt=xt||Y,Pt=Pt||st,(Q!==p||ut!==x)&&(i.blendEquationSeparate(W[Q],W[ut]),p=Q,x=ut),(Y!==v||st!==y||xt!==P||Pt!==S)&&(i.blendFuncSeparate(q[Y],q[st],q[xt],q[Pt]),v=Y,y=st,P=xt,S=Pt),(Gt.equals(w)===!1||Jt!==T)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Jt),w.copy(Gt),T=Jt),g=K,E=!1}function lt(K,Q){K.side===Vt?bt(i.CULL_FACE):ot(i.CULL_FACE);let Y=K.side===Be;Q&&(Y=!Y),H(Y),K.blending===us&&K.transparent===!1?I(mi):I(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let st=K.stencilWrite;a.setTest(st),st&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ht(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(K){M!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),M=K)}function J(K){K!==$d?(ot(i.CULL_FACE),K!==A&&(K===Jl?i.cullFace(i.BACK):K===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),A=K}function $(K){K!==F&&(D&&i.lineWidth(K),F=K)}function ht(K,Q,Y){K?(ot(i.POLYGON_OFFSET_FILL),(U!==Q||B!==Y)&&(i.polygonOffset(Q,Y),U=Q,B=Y)):bt(i.POLYGON_OFFSET_FILL)}function X(K){K?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function R(K){K===void 0&&(K=i.TEXTURE0+O-1),k!==K&&(i.activeTexture(K),k=K)}function b(K,Q,Y){Y===void 0&&(k===null?Y=i.TEXTURE0+O-1:Y=k);let st=G[Y];st===void 0&&(st={type:void 0,texture:void 0},G[Y]=st),(st.type!==K||st.texture!==Q)&&(k!==Y&&(i.activeTexture(Y),k=Y),i.bindTexture(K,Q||mt[K]),st.type=K,st.texture=Q)}function z(){let K=G[k];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ht(K){pt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),pt.copy(K))}function It(K){Z.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Z.copy(K))}function Qt(K,Q){let Y=l.get(Q);Y===void 0&&(Y=new WeakMap,l.set(Q,Y));let st=Y.get(K);st===void 0&&(st=i.getUniformBlockIndex(Q,K.name),Y.set(K,st))}function $t(K,Q){let st=l.get(Q).get(K);c.get(Q)!==st&&(i.uniformBlockBinding(Q,st,K.__bindingPointIndex),c.set(Q,st))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,G={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,P=null,S=null,w=new Yt(0,0,0),T=0,E=!1,M=null,A=null,F=null,U=null,B=null,pt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:yt,drawBuffers:et,useProgram:wt,setBlending:I,setMaterial:lt,setFlipSided:H,setCullFace:J,setLineWidth:$,setPolygonOffset:ht,setScissorTest:X,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:ct,texImage2D:Dt,texImage3D:Ft,updateUBOMapping:Qt,uniformBlockBinding:$t,texStorage2D:At,texStorage3D:St,texSubImage2D:at,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Et,scissor:Ht,viewport:It,reset:de}}function Jh(i,t,e,n){let s=O_(n);switch(e){case _u:return i*t;case yu:return i*t;case vu:return i*t*2;case Ml:return i*t/s.components*s.byteLength;case El:return i*t/s.components*s.byteLength;case Mu:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case xu:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case lc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eo:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eu:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O_(i){switch(i){case Qn:case pu:return{byteLength:1,components:1};case tr:case mu:case gr:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case Ui:case xl:case kn:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):nr("canvas")}function _(R,b,z){let j=1,ct=X(R);if((ct.width>z||ct.height>z)&&(j=z/Math.max(ct.width,ct.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(j*ct.width),Mt=Math.floor(j*ct.height);u===void 0&&(u=m(at,Mt));let dt=b?m(at,Mt):u;return dt.width=at,dt.height=Mt,dt.getContext("2d").drawImage(R,0,0,at,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+at+"x"+Mt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,z,j,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=b;if(b===i.RED&&(z===i.FLOAT&&(at=i.R32F),z===i.HALF_FLOAT&&(at=i.R16F),z===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.R8UI),z===i.UNSIGNED_SHORT&&(at=i.R16UI),z===i.UNSIGNED_INT&&(at=i.R32UI),z===i.BYTE&&(at=i.R8I),z===i.SHORT&&(at=i.R16I),z===i.INT&&(at=i.R32I)),b===i.RG&&(z===i.FLOAT&&(at=i.RG32F),z===i.HALF_FLOAT&&(at=i.RG16F),z===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RG8UI),z===i.UNSIGNED_SHORT&&(at=i.RG16UI),z===i.UNSIGNED_INT&&(at=i.RG32UI),z===i.BYTE&&(at=i.RG8I),z===i.SHORT&&(at=i.RG16I),z===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RGB8UI),z===i.UNSIGNED_SHORT&&(at=i.RGB16UI),z===i.UNSIGNED_INT&&(at=i.RGB32UI),z===i.BYTE&&(at=i.RGB8I),z===i.SHORT&&(at=i.RGB16I),z===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),z===i.UNSIGNED_INT&&(at=i.RGBA32UI),z===i.BYTE&&(at=i.RGBA8I),z===i.SHORT&&(at=i.RGBA16I),z===i.INT&&(at=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),b===i.RGBA){let Mt=ct?zo:ce.getTransfer(j);z===i.FLOAT&&(at=i.RGBA32F),z===i.HALF_FLOAT&&(at=i.RGBA16F),z===i.UNSIGNED_BYTE&&(at=Mt===pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(R,b){let z;return R?b===null||b===Ui||b===xs?z=i.DEPTH24_STENCIL8:b===kn?z=i.DEPTH32F_STENCIL8:b===tr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===xs?z=i.DEPTH_COMPONENT24:b===kn?z=i.DEPTH_COMPONENT32F:b===tr&&(z=i.DEPTH_COMPONENT16),z}function P(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){let b=R.target;b.removeEventListener("dispose",S),T(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),M(b)}function T(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,j=d.get(z);if(j){let ct=j[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(R),Object.keys(j).length===0&&d.delete(z)}n.remove(R)}function E(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let z=R.source,j=d.get(z);delete j[b.__cacheKey],o.memory.textures--}function M(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ct=0;ct<b.__webglFramebuffer[j].length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[j][ct]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let j=0,ct=z.length;j<ct;j++){let at=n.get(z[j]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(R)}let A=0;function F(){A=0}function U(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function B(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){let z=n.get(R);if(R.isVideoTexture&&$(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,R,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function D(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Z(z,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function V(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Z(z,R,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function C(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){tt(z,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let k={[Pn]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},G={[dn]:i.NEAREST,[bf]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},it={[Af]:i.NEVER,[Df]:i.ALWAYS,[Rf]:i.LESS,[bu]:i.LEQUAL,[Cf]:i.EQUAL,[Lf]:i.GEQUAL,[Pf]:i.GREATER,[If]:i.NOTEQUAL};function ft(R,b){if(b.type===kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===ga||b.magFilter===Sr||b.magFilter===Cn||b.minFilter===yn||b.minFilter===ga||b.minFilter===Sr||b.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,k[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,k[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,k[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,G[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Sr&&b.minFilter!==Cn||b.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function pt(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));let j=b.source,ct=d.get(j);ct===void 0&&(ct={},d.set(j,ct));let at=B(b);if(at!==R.__cacheKey){ct[at]===void 0&&(ct[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ct[at].usedTimes++;let Mt=ct[R.__cacheKey];Mt!==void 0&&(ct[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(b)),R.__cacheKey=at,R.__webglTexture=ct[at].texture}return z}function Z(R,b,z){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);let ct=pt(R,b),at=b.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+z);let Mt=n.get(at);if(at.version!==Mt.__version||ct===!0){e.activeTexture(i.TEXTURE0+z);let dt=ce.getPrimaries(ce.workingColorSpace),Et=b.colorSpace===pi?null:ce.getPrimaries(b.colorSpace),At=b.colorSpace===pi||dt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let St=_(b.image,!1,s.maxTextureSize);St=ht(b,St);let Dt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),Ht=y(b.internalFormat,Dt,Ft,b.colorSpace,b.isVideoTexture);ft(j,b);let It,Qt=b.mipmaps,$t=b.isVideoTexture!==!0,de=Mt.__version===void 0||ct===!0,K=at.dataReady,Q=P(b,St);if(b.isDepthTexture)Ht=x(b.format===ys,b.type),de&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ht,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Ft,null));else if(b.isDataTexture)if(Qt.length>0){$t&&de&&e.texStorage2D(i.TEXTURE_2D,Q,Ht,Qt[0].width,Qt[0].height);for(let Y=0,st=Qt.length;Y<st;Y++)It=Qt[Y],$t?K&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,It.width,It.height,Dt,Ft,It.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,It.width,It.height,0,Dt,Ft,It.data);b.generateMipmaps=!1}else $t?(de&&e.texStorage2D(i.TEXTURE_2D,Q,Ht,St.width,St.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Dt,Ft,St.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Ft,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Ht,Qt[0].width,Qt[0].height,St.depth);for(let Y=0,st=Qt.length;Y<st;Y++)if(It=Qt[Y],b.format!==un)if(Dt!==null)if($t){if(K)if(b.layerUpdates.size>0){let ut=Jh(It.width,It.height,b.format,b.type);for(let xt of b.layerUpdates){let Pt=It.data.subarray(xt*ut/It.data.BYTES_PER_ELEMENT,(xt+1)*ut/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xt,It.width,It.height,1,Dt,Pt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,It.width,It.height,St.depth,Dt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,It.width,It.height,St.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,It.width,It.height,St.depth,Dt,Ft,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,It.width,It.height,St.depth,0,Dt,Ft,It.data)}else{$t&&de&&e.texStorage2D(i.TEXTURE_2D,Q,Ht,Qt[0].width,Qt[0].height);for(let Y=0,st=Qt.length;Y<st;Y++)It=Qt[Y],b.format!==un?Dt!==null?$t?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ht,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?K&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,It.width,It.height,Dt,Ft,It.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,It.width,It.height,0,Dt,Ft,It.data)}else if(b.isDataArrayTexture)if($t){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Ht,St.width,St.height,St.depth),K)if(b.layerUpdates.size>0){let Y=Jh(St.width,St.height,b.format,b.type);for(let st of b.layerUpdates){let ut=St.data.subarray(st*Y/St.data.BYTES_PER_ELEMENT,(st+1)*Y/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,St.width,St.height,1,Dt,Ft,ut)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Dt,Ft,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,St.width,St.height,St.depth,0,Dt,Ft,St.data);else if(b.isData3DTexture)$t?(de&&e.texStorage3D(i.TEXTURE_3D,Q,Ht,St.width,St.height,St.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Dt,Ft,St.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,St.width,St.height,St.depth,0,Dt,Ft,St.data);else if(b.isFramebufferTexture){if(de)if($t)e.texStorage2D(i.TEXTURE_2D,Q,Ht,St.width,St.height);else{let Y=St.width,st=St.height;for(let ut=0;ut<Q;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ht,Y,st,0,Dt,Ft,null),Y>>=1,st>>=1}}else if(Qt.length>0){if($t&&de){let Y=X(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Q,Ht,Y.width,Y.height)}for(let Y=0,st=Qt.length;Y<st;Y++)It=Qt[Y],$t?K&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Dt,Ft,It):e.texImage2D(i.TEXTURE_2D,Y,Ht,Dt,Ft,It);b.generateMipmaps=!1}else if($t){if(de){let Y=X(St);e.texStorage2D(i.TEXTURE_2D,Q,Ht,Y.width,Y.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Ft,St)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Dt,Ft,St);g(b)&&p(j),Mt.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function tt(R,b,z){if(b.image.length!==6)return;let j=pt(R,b),ct=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let at=n.get(ct);if(ct.version!==at.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let Mt=ce.getPrimaries(ce.workingColorSpace),dt=b.colorSpace===pi?null:ce.getPrimaries(b.colorSpace),Et=b.colorSpace===pi||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let st=0;st<6;st++)!At&&!St?Dt[st]=_(b.image[st],!0,s.maxCubemapSize):Dt[st]=St?b.image[st].image:b.image[st],Dt[st]=ht(b,Dt[st]);let Ft=Dt[0],Ht=r.convert(b.format,b.colorSpace),It=r.convert(b.type),Qt=y(b.internalFormat,Ht,It,b.colorSpace),$t=b.isVideoTexture!==!0,de=at.__version===void 0||j===!0,K=ct.dataReady,Q=P(b,Ft);ft(i.TEXTURE_CUBE_MAP,b);let Y;if(At){$t&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Qt,Ft.width,Ft.height);for(let st=0;st<6;st++){Y=Dt[st].mipmaps;for(let ut=0;ut<Y.length;ut++){let xt=Y[ut];b.format!==un?Ht!==null?$t?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,Qt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,xt.width,xt.height,Ht,It,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,Qt,xt.width,xt.height,0,Ht,It,xt.data)}}}else{if(Y=b.mipmaps,$t&&de){Y.length>0&&Q++;let st=X(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(St){$t?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt[st].width,Dt[st].height,Ht,It,Dt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Dt[st].width,Dt[st].height,0,Ht,It,Dt[st].data);for(let ut=0;ut<Y.length;ut++){let Pt=Y[ut].image[st].image;$t?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,Pt.width,Pt.height,Ht,It,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,Qt,Pt.width,Pt.height,0,Ht,It,Pt.data)}}else{$t?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ht,It,Dt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Ht,It,Dt[st]);for(let ut=0;ut<Y.length;ut++){let xt=Y[ut];$t?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,Ht,It,xt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,Qt,Ht,It,xt.image[st])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),at.__version=ct.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function mt(R,b,z,j,ct,at){let Mt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),Et=y(z.internalFormat,Mt,dt,z.colorSpace),At=n.get(b),St=n.get(z);if(St.__renderTarget=b,!At.__hasExternalTextures){let Dt=Math.max(1,b.width>>at),Ft=Math.max(1,b.height>>at);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,at,Et,Dt,Ft,b.depth,0,Mt,dt,null):e.texImage2D(ct,at,Et,Dt,Ft,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),J(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ct,St.__webglTexture,0,H(b)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ct,St.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let j=b.depthTexture,ct=j&&j.isDepthTexture?j.type:null,at=x(b.stencilBuffer,ct),Mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=H(b);J(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,at,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,R)}else{let j=b.textures;for(let ct=0;ct<j.length;ct++){let at=j[ct],Mt=r.convert(at.format,at.colorSpace),dt=r.convert(at.type),Et=y(at.internalFormat,Mt,dt,at.colorSpace),At=H(b);z&&J(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Et,b.width,b.height):J(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Et,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let ct=j.__webglTexture,at=H(b);if(b.depthTexture.format===ds)J(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(b.depthTexture.format===ys)J(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function yt(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ct)};j.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(b.__webglDepthbuffer[j],R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ot(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,b,z){let j=n.get(R);b!==void 0&&mt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&yt(R)}function wt(R){let b=R.texture,z=n.get(R),j=n.get(b);R.addEventListener("dispose",w);let ct=R.textures,at=R.isWebGLCubeRenderTarget===!0,Mt=ct.length>1;if(Mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),at){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)z.__webglFramebuffer[dt][Et]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let dt=0,Et=ct.length;dt<Et;dt++){let At=n.get(ct[dt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&J(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){let Et=ct[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let At=r.convert(Et.format,Et.colorSpace),St=r.convert(Et.type),Dt=y(Et.internalFormat,At,St,Et.colorSpace,R.isXRRenderTarget===!0),Ft=H(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ft(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)mt(z.__webglFramebuffer[dt][Et],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et);else mt(z.__webglFramebuffer[dt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let dt=0,Et=ct.length;dt<Et;dt++){let At=ct[dt],St=n.get(At);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),ft(i.TEXTURE_2D,At),mt(z.__webglFramebuffer,R,At,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(At)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),ft(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)mt(z.__webglFramebuffer[Et],R,b,i.COLOR_ATTACHMENT0,dt,Et);else mt(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}R.depthBuffer&&yt(R)}function W(R){let b=R.textures;for(let z=0,j=b.length;z<j;z++){let ct=b[z];if(g(ct)){let at=v(R),Mt=n.get(ct).__webglTexture;e.bindTexture(at,Mt),p(at),e.unbindTexture()}}}let q=[],I=[];function lt(R){if(R.samples>0){if(J(R)===!1){let b=R.textures,z=R.width,j=R.height,ct=i.COLOR_BUFFER_BIT,at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),dt=b.length>1;if(dt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let At=n.get(b[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,ct,i.NEAREST),c===!0&&(q.length=0,I.length=0,q.push(i.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(q.push(at),I.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let At=n.get(b[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function H(R){return Math.min(s.maxSamples,R.samples)}function J(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ht(R,b){let z=R.colorSpace,j=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==As&&z!==pi&&(ce.getTransfer(z)===pe?(j!==un||ct!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function X(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=V,this.setTextureCube=C,this.rebindTextures=et,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=J}function z_(i,t){function e(n,s=pi){let r,o=ce.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===gr)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===xu)return i.RGB;if(n===un)return i.RGBA;if(n===yu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Mu)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Qr||n===to)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===cc||n===lc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Ec||n===Sc||n===bc||n===wc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===Rc||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Pc||n===Ic||n===Lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function W_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Au(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Ci)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let P=y.program;n.updateUBOMapping(v,P);let S=t.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function h(v){let y=u();v.__bindingPointIndex=y;let x=i.createBuffer(),P=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],x=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,w=x.length;S<w;S++){let T=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,M=T.length;E<M;E++){let A=T[E];if(f(A,S,E,P)===!0){let F=A.__offset,U=Array.isArray(A.value)?A.value:[A.value],B=0;for(let O=0;O<U.length;O++){let D=U[O],V=_(D);typeof D=="number"||typeof D=="boolean"?(A.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,F+B,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=0,A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=0,A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=0):(D.toArray(A.__data,B),B+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,P){let S=v.value,w=y+"_"+x;if(P[w]===void 0)return typeof S=="number"||typeof S=="boolean"?P[w]=S:P[w]=S.clone(),!0;{let T=P[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return P[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(v){let y=v.uniforms,x=0,P=16;for(let w=0,T=y.length;w<T;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,A=E.length;M<A;M++){let F=E[M],U=Array.isArray(F.value)?F.value:[F.value];for(let B=0,O=U.length;B<O;B++){let D=U[B],V=_(D),C=x%P,k=C%V.boundary,G=C+k;x+=k,G!==0&&P-G<V.storage&&(x+=P-G),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=V.storage}}}let S=x%P;return S>0&&(x+=P-S),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function qr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(go.fromBufferAttribute(o,s),_o.fromBufferAttribute(o,r),e.distanceSqToSegment(go,_o,Wa,tu)>n)return;Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);if(!(c<t.near||c>t.far))return{distance:c,point:tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Cl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function eu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Y_(i,t){let e=1-i;return e*e*t}function Z_(i,t){return 2*(1-i)*i*t}function $_(i,t){return i*i*t}function js(i,t,e,n){return Y_(i,t)+Z_(i,e)+$_(i,n)}function J_(i,t){let e=1-i;return e*e*e*t}function K_(i,t){let e=1-i;return 3*e*e*i*t}function j_(i,t){return 3*(1-i)*i*i*t}function Q_(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return J_(i,t)+K_(i,e)+j_(i,n)+Q_(i,s)}function Du(i,t,e,n,s){let r,o;if(s===gx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=nu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=nu(r,i[r],i[r+1],o);return o&&Ho(o,o.next)&&(fr(o),o=o.next),o}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ho(e,e.next)||Se(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?nx(i,n,s,r):ex(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),fr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ix(Oi(i),t,e),ur(i,t,e,n,s,r,2)):o===2&&sx(i,t,e,n,s,r):ur(Oi(i),t,e,n,s,r,1);break}}}function ex(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&hs(s,a,r,c,o,l,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=tl(f,m,t,e,n),v=tl(_,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&hs(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&hs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&hs(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&hs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ix(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ho(s,r)&&Uu(s,n,n.next,r)&&dr(s,r)&&dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return Oi(n)}function sx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fx(o,a)){let c=Nu(o,a);o=Oi(o,o.next),c=Oi(c,c.next),ur(o,t,e,n,s,r,0),ur(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Du(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(dx(l));for(s.sort(ox),r=0;r<s.length;r++)e=ax(s[r],e);return e}function ox(i,t){return i.x-t.x}function ax(i,t){let e=cx(i,t);if(!e)return t;let n=Nu(e,i);return Oi(n,n.next),Oi(e,e.next)}function cx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&hs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function lx(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function hx(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!px(i,t)&&(dr(i,t)&&dr(t,i)&&mx(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Ho(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ho(i,t){return i.x===t.x&&i.y===t.y}function Uu(i,t,e,n){let s=$r(Se(i,t,e)),r=$r(Se(i,t,n)),o=$r(Se(e,n,i)),a=$r(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Zr(i,e,t)||r===0&&Zr(i,n,t)||o===0&&Zr(e,i,n)||a===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $r(i){return i>0?1:i<0?-1:0}function px(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function mx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nu(i,t){let e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nu(i,t,e,n){let s=new el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function iu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function xx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cu(){return performance.now()}function hu(i,t){return i.distance-t.distance}function pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)pl(r[o],t,e,!0)}}var ml,Dn,rn,$d,Jl,Jd,uu,gl,$n,_i,Be,Vt,mi,us,Kl,jl,Ql,Kd,Ii,jd,Qd,tf,ef,nf,sf,rf,of,$a,Ja,af,cf,lf,hf,uf,df,ff,pf,mf,Ka,ja,Qa,ms,tc,ec,nc,ic,du,gf,_f,gi,xf,yf,vf,_l,Mf,Ef,Sf,fu,gs,_s,sc,rc,Bo,Pn,zn,oc,dn,bf,Sr,yn,ga,Cn,Qn,pu,mu,tr,xl,Ui,kn,gr,yl,vl,xs,gu,_u,xu,un,yu,vu,ds,ys,Ml,El,Mu,Sl,bl,Kr,jr,Qr,to,ac,cc,lc,hc,uc,dc,fc,pc,mc,gc,_c,xc,yc,vc,Mc,Ec,Sc,bc,wc,Tc,Ac,eo,Rc,Cc,Eu,Pc,Ic,Lc,no,Dc,_a,th,eh,nh,wf,wl,Su,Tf,pi,_e,As,zo,pe,Yi,ih,Af,Rf,Cf,bu,Pf,If,Lf,Df,sh,rh,Jn,io,ti,We,oh,$s,er,_r,vt,ee,xa,ah,ce,ch,lh,hh,uh,dh,Zi,Uc,tp,so,ep,Ke,be,Nc,ei,ro,Fc,Re,N,va,fh,In,Wn,wn,br,$i,Ji,Ki,ci,li,bi,ks,wr,Tr,wi,np,Hs,Ea,xi,Xn,Sa,Ar,hi,ba,Rr,wa,Ni,re,ji,Tn,ip,sp,ui,Cr,ln,ph,mh,vn,ir,rp,gh,Qi,qn,Pr,Vs,op,ap,_h,xh,yh,vh,cp,ts,Ta,qe,An,Yn,Aa,Zn,es,ns,Mh,Ra,Ca,Pa,Ia,La,Da,Li,Tu,di,Ir,Yt,Xe,lp,yi,vs,Ce,Lr,jt,oo,ao,Xt,hp,xn,Na,is,hn,Gs,Oe,oe,Eh,Ti,Dr,Sh,Ur,Nr,Fr,Fa,Or,bh,Br,Lt,Pe,Al,fp,pp,nn,co,fi,wh,Th,Je,ss,rs,Oc,lo,Bc,Oa,mp,gp,Rn,Ai,kr,sr,vi,xp,yp,vp,Mp,Ep,Sp,bp,wp,Tp,Ap,Rp,Cp,Pp,Ip,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Em,Sm,bm,wm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,jm,Qm,t0,e0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,E0,S0,b0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,O0,B0,z0,k0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,J0,ie,Ut,Bn,Hr,Ri,K0,ho,ls,Ah,Di,Ba,Rh,za,ka,Ha,Va,Pi,os,Ch,Es,uo,Cu,Dh,Pu,Iu,Lu,Uh,Nh,Fh,Oh,Bh,zc,kc,Hc,Ga,ps,t_,e_,Hh,Gr,h_,u_,f_,M_,Gc,Wc,R_,rr,Xc,L_,D_,N_,qc,se,k_,Ks,H_,V_,Yc,Zc,Ci,G_,fo,po,or,ar,cr,as,Kh,Wr,jh,q_,Ws,Xs,ze,mo,go,_o,Qh,qs,Xr,Wa,tu,xo,sn,Mn,lr,$c,Yr,Xa,qa,Ya,hr,yo,Jc,vo,Kc,Mo,Eo,So,bo,jc,wo,To,Ao,fe,Ss,Qc,Fi,tx,jn,bs,_x,Ro,Co,En,Bi,Po,Rt,Io,ws,nl,il,sl,Ln,zi,rl,ol,al,Lo,ki,cl,ru,ll,vx,pr,hl,mr,Do,Uo,Za,ou,au,ul,dl,No,Fo,Pl,Mx,Il,Ex,Sx,bx,wx,Tx,Ax,Rx,fl,Ee,ay,lu,Ts,ni,Oo,we=Ae(()=>{ml="170",Dn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Jl=1,Jd=2,uu=1,gl=2,$n=3,_i=0,Be=1,Vt=2,mi=0,us=1,Kl=2,jl=3,Ql=4,Kd=5,Ii=100,jd=101,Qd=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,$a=204,Ja=205,af=206,cf=207,lf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Ka=0,ja=1,Qa=2,ms=3,tc=4,ec=5,nc=6,ic=7,du=0,gf=1,_f=2,gi=0,xf=1,yf=2,vf=3,_l=4,Mf=5,Ef=6,Sf=7,fu=300,gs=301,_s=302,sc=303,rc=304,Bo=306,Pn=1e3,zn=1001,oc=1002,dn=1003,bf=1004,Sr=1005,yn=1006,ga=1007,Cn=1008,Qn=1009,pu=1010,mu=1011,tr=1012,xl=1013,Ui=1014,kn=1015,gr=1016,yl=1017,vl=1018,xs=1020,gu=35902,_u=1021,xu=1022,un=1023,yu=1024,vu=1025,ds=1026,ys=1027,Ml=1028,El=1029,Mu=1030,Sl=1031,bl=1033,Kr=33776,jr=33777,Qr=33778,to=33779,ac=35840,cc=35841,lc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,yc=37813,vc=37814,Mc=37815,Ec=37816,Sc=37817,bc=37818,wc=37819,Tc=37820,Ac=37821,eo=36492,Rc=36494,Cc=36495,Eu=36283,Pc=36284,Ic=36285,Lc=36286,no=2300,Dc=2301,_a=2302,th=2400,eh=2401,nh=2402,wf=3200,wl=3201,Su=0,Tf=1,pi="",_e="srgb",As="srgb-linear",zo="linear",pe="srgb",Yi=7680,ih=519,Af=512,Rf=513,Cf=514,bu=515,Pf=516,If=517,Lf=518,Df=519,sh=35044,rh="300 es",Jn=2e3,io=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,$s=Math.PI/180,er=180/Math.PI;_r={DEG2RAD:$s,RAD2DEG:er,generateUUID:Hi,clamp:Ie,euclideanModulo:Tl,mapLinear:Uf,inverseLerp:Nf,lerp:Js,damp:Ff,pingpong:Of,smoothstep:Bf,smootherstep:zf,randInt:kf,randFloat:Hf,randFloatSpread:Vf,seededRandom:Gf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:$f,normalize:Ze,denormalize:cs},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],y=s[4],x=s[7],P=s[2],S=s[5],w=s[8];return r[0]=o*_+a*v+c*P,r[3]=o*g+a*y+c*S,r[6]=o*p+a*x+c*w,r[1]=l*_+h*v+u*P,r[4]=l*g+h*y+u*S,r[7]=l*p+h*x+u*w,r[2]=d*_+f*v+m*P,r[5]=d*g+f*y+m*S,r[8]=d*p+f*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xa=new ee;ah={};ce={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};ch=[.64,.33,.3,.6,.15,.06],lh=[.2126,.7152,.0722],hh=[.3127,.329],uh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[As]:{primaries:ch,whitePoint:hh,transfer:zo,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:lh,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:ch,whitePoint:hh,transfer:pe,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:lh,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}});Uc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=nr("canvas")),Zi.width=t.width,Zi.height=t.height;let n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,so=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};ep=0,Ke=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zn,s=zn,r=yn,o=Cn,a=un,c=Qn,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Hi(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=fu;Ke.DEFAULT_ANISOTROPY=1;be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(f+1)/2,P=(p+1)/2,S=(h+d)/4,w=(u+_)/4,T=(m+g)/4;return y>x&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=w/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=T/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=T/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nc=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new so(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ro=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Fc=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Re=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),S=Math.atan2(P,p*v);g=Math.sin(g*S)/P,a=Math.sin(a*S)/P}let x=a*v;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new N,fh=new Re,In=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),wr.subVectors(this.max,ks),$i.subVectors(t.a,ks),Ji.subVectors(t.b,ks),Ki.subVectors(t.c,ks),ci.subVectors(Ji,$i),li.subVectors(Ki,Ji),bi.subVectors($i,Ki);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-bi.z,bi.y,ci.z,0,-ci.x,li.z,0,-li.x,bi.z,0,-bi.x,-ci.y,ci.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!Ma(e,$i,Ji,Ki,wr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,$i,Ji,Ki,wr))?!1:(Tr.crossVectors(ci,li),e=[Tr.x,Tr.y,Tr.z],Ma(e,$i,Ji,Ki,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,br=new In,$i=new N,Ji=new N,Ki=new N,ci=new N,li=new N,bi=new N,ks=new N,wr=new N,Tr=new N,wi=new N;np=new In,Hs=new N,Ea=new N,xi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Ea)),this.expandByPoint(Hs.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new N,Sa=new N,Ar=new N,hi=new N,ba=new N,Rr=new N,wa=new N,Ni=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ar),a=hi.dot(this.direction),c=-hi.dot(Ar),l=hi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(Ar,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),Rr.subVectors(n,t),wa.crossVectors(ba,Rr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);let c=a*this.direction.dot(Rr.crossVectors(hi,Rr));if(c<0)return null;let l=a*this.direction.dot(ba.cross(hi));if(l<0||c+l>o)return null;let h=-a*hi.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ui.crossVectors(n,ln),ui.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ui.crossVectors(n,ln)),ui.normalize(),Cr.crossVectors(ln,ui),s[0]=ui.x,s[4]=Cr.x,s[8]=ln.x,s[1]=ui.y,s[5]=Cr.y,s[9]=ln.y,s[2]=ui.z,s[6]=Cr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],P=n[15],S=s[0],w=s[4],T=s[8],E=s[12],M=s[1],A=s[5],F=s[9],U=s[13],B=s[2],O=s[6],D=s[10],V=s[14],C=s[3],k=s[7],G=s[11],it=s[15];return r[0]=o*S+a*M+c*B+l*C,r[4]=o*w+a*A+c*O+l*k,r[8]=o*T+a*F+c*D+l*G,r[12]=o*E+a*U+c*V+l*it,r[1]=h*S+u*M+d*B+f*C,r[5]=h*w+u*A+d*O+f*k,r[9]=h*T+u*F+d*D+f*G,r[13]=h*E+u*U+d*V+f*it,r[2]=m*S+_*M+g*B+p*C,r[6]=m*w+_*A+g*O+p*k,r[10]=m*T+_*F+g*D+p*G,r[14]=m*E+_*U+g*V+p*it,r[3]=v*S+y*M+x*B+P*C,r[7]=v*w+y*A+x*O+P*k,r[11]=v*T+y*F+x*D+P*G,r[15]=v*E+y*U+x*V+P*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,P=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,S=e*v+n*y+s*x+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=v*w,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*w,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*w,t[4]=y*w,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*w,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*w,t[8]=x*w,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=P*w,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*w,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=c*l,y=c*h,x=c*u,P=n.x,S=n.y,w=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+x)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(m+y)*w,s[9]=(g-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===Jn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===io)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,_;if(a===Jn)m=(o+r)*u,_=-2*u;else if(a===io)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new N,Tn=new re,ip=new N(0,0,0),sp=new N(1,1,1),ui=new N,Cr=new N,ln=new N,ph=new re,mh=new Re,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rp=0,gh=new N,Qi=new Re,qn=new re,Pr=new N,Vs=new N,op=new N,ap=new Re,_h=new N(1,0,0),xh=new N(0,1,0),yh=new N(0,0,1),vh={type:"added"},cp={type:"removed"},ts={type:"childadded",child:null},Ta={type:"childremoved",child:null},qe=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new vn,n=new Re,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ee}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Vs,Pr,this.up):qn.lookAt(Pr,Vs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;An=new N,Yn=new N,Aa=new N,Zn=new N,es=new N,ns=new N,Mh=new N,Ra=new N,Ca=new N,Pa=new N,Ia=new be,La=new be,Da=new be,Li=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Yn.subVectors(n,e),Aa.subVectors(t,e);let o=An.dot(An),a=An.dot(Yn),c=An.dot(Aa),l=Yn.dot(Yn),h=Yn.dot(Aa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;es.subVectors(s,n),ns.subVectors(r,n),Ra.subVectors(t,n);let c=es.dot(Ra),l=ns.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Ca.subVectors(t,s);let h=es.dot(Ca),u=ns.dot(Ca);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(es,o);Pa.subVectors(t,r);let f=es.dot(Pa),m=ns.dot(Pa);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ns,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Mh,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ir={h:0,s:0,l:0};Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Tl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return ce.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ie(Xe.r*255,0,255))*65536+Math.round(Ie(Xe.g*255,0,255))*256+Math.round(Ie(Xe.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=_e){ce.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Ir);let n=Js(di.h,Ir.h,e),s=Js(di.s,Ir.s,e),r=Js(di.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Yt;Yt.NAMES=Tu;lp=0,yi=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Hi(),this.name="",this.blending=us,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ja,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vs=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ce=new N,Lr=new vt,jt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}},oo=class extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},ao=class extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Xt=class extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},hp=0,xn=new re,Na=new qe,is=new N,hn=new In,Gs=new In,Oe=new N,oe=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(hn.min,Gs.min),hn.expandByPoint(Oe),Oe.addVectors(hn.max,Gs.max),hn.expandByPoint(Oe)):(hn.expandByPoint(Gs.min),hn.expandByPoint(Gs.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(t,l),Oe.add(is)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new N,c[T]=new N;let l=new N,h=new N,u=new N,d=new vt,f=new vt,m=new vt,_=new N,g=new N;function p(T,E,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(A),a[T].add(_),a[E].add(_),a[M].add(_),c[T].add(g),c[E].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,E=v.length;T<E;++T){let M=v[T],A=M.start,F=M.count;for(let U=A,B=A+F;U<B;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new N,x=new N,P=new N,S=new N;function w(T){P.fromBufferAttribute(s,T),S.copy(P);let E=a[T];y.copy(E),y.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(S,E);let A=x.dot(c[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,A)}for(let T=0,E=v.length;T<E;++T){let M=v[T],A=M.start,F=M.count;for(let U=A,B=A+F;U<B;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new re,Ti=new Ni,Dr=new xi,Sh=new N,Ur=new N,Nr=new N,Fr=new N,Fa=new N,Or=new N,bh=new N,Br=new N,Lt=class extends qe{constructor(t=new oe,e=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Fa.fromBufferAttribute(u,t),o?Or.addScaledVector(Fa,h):Or.addScaledVector(Fa.sub(e),h))}e.add(Or)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Dr,Sh)===null||Ti.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){let S=a.getX(x),w=a.getX(x+1),T=a.getX(x+2);s=zr(this,p,t,n,l,h,u,S,w,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=zr(this,o,t,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){let S=x,w=x+1,T=x+2;s=zr(this,p,t,n,l,h,u,S,w,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,y=g+1,x=g+2;s=zr(this,o,t,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};Pe=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function m(_,g,p,v,y,x,P,S,w,T,E){let M=x/w,A=P/T,F=x/2,U=P/2,B=S/2,O=w+1,D=T+1,V=0,C=0,k=new N;for(let G=0;G<D;G++){let it=G*A-U;for(let ft=0;ft<O;ft++){let pt=ft*M-F;k[_]=pt*v,k[g]=it*y,k[p]=B,l.push(k.x,k.y,k.z),k[_]=0,k[g]=0,k[p]=S>0?1:-1,h.push(k.x,k.y,k.z),u.push(ft/w),u.push(1-G/T),V+=1}}for(let G=0;G<T;G++)for(let it=0;it<w;it++){let ft=d+it+O*G,pt=d+it+O*(G+1),Z=d+(it+1)+O*(G+1),tt=d+(it+1)+O*G;c.push(ft,pt,tt),c.push(pt,Z,tt),C+=6}a.addGroup(f,C,E),f+=C,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Al={clone:Ms,merge:$e},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new N,wh=new vt,Th=new vt,Je=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,Oc=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new Je(ss,rs,t,e);r.layers=this.layers,this.add(r);let o=new Je(ss,rs,t,e);o.layers=this.layers,this.add(o);let a=new Je(ss,rs,t,e);a.layers=this.layers,this.add(a);let c=new Je(ss,rs,t,e);c.layers=this.layers,this.add(c);let l=new Je(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},lo=class extends Ke{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bc=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:mi});r.uniforms.tEquirect.value=e;let o=new Lt(s,r),a=e.minFilter;return e.minFilter===Cn&&(e.minFilter=yn),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Oa=new N,mp=new N,gp=new ee,Rn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oa.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new xi,kr=new N,sr=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+v).normalize(),n[3].setComponents(c-o,d-h,g-m,x-v).normalize(),n[4].setComponents(c-a,d-u,g-_,x-y).normalize(),e===Jn)n[5].setComponents(c+a,d+u,g+_,x+y).normalize();else if(e===io)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};vi=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let y=0;y<l;y++){let x=y*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let y=v+l*p,x=v+l*(p+1),P=v+1+l*(p+1),S=v+1+l*p;f.push(y,x,S),f.push(x,P,S)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:xp,alphahash_pars_fragment:yp,alphamap_fragment:vp,alphamap_pars_fragment:Mp,alphatest_fragment:Ep,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:$p,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:ym,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Sm,map_fragment:bm,map_pars_fragment:wm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:$m,dithering_pars_fragment:Jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:c0,tonemapping_fragment:l0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:x0,backgroundCube_vert:y0,backgroundCube_frag:v0,cube_vert:M0,cube_frag:E0,depth_vert:S0,depth_frag:b0,distanceRGBA_vert:w0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:k0,meshphysical_vert:H0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:$0,sprite_frag:J0},Ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Bn={basic:{uniforms:$e([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:$e([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:$e([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:$e([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:$e([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:$e([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:$e([Ut.points,Ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:$e([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:$e([Ut.common,Ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:$e([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:$e([Ut.sprite,Ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:$e([Ut.common,Ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:$e([Ut.lights,Ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Bn.physical={uniforms:$e([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};Hr={r:0,b:0,g:0},Ri=new vn,K0=new re;ho=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,Ah=[.125,.215,.35,.446,.526,.582],Di=20,Ba=new ho,Rh=new Yt,za=null,ka=0,Ha=0,Va=!1,Pi=(1+Math.sqrt(5))/2,os=1/Pi,Ch=[new N(-Pi,os,0),new N(Pi,os,0),new N(-os,0,Pi),new N(os,0,Pi),new N(0,Pi,-os),new N(0,Pi,os),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:gr,format:un,colorSpace:As,depthBuffer:!1},s=Ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rh),h.toneMapping=gi,h.autoClear=!1;let f=new vs({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new Lt(new Pe,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Rh),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Vr(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ch[(s-r-1)%Ch.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);let p=[],v=0;for(let w=0;w<Di;++w){let T=w/_,E=Math.exp(-T*T/2);p.push(E),w===0?v+=E:w<g&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[s],P=3*x*(s>y-ls?s-y+ls:0),S=4*(this._cubeSize-x);Vr(e,P,S,3*x,2*x),c.setRenderTarget(e),c.render(u,Ba)}};uo=class extends Ke{constructor(t,e,n,s,r,o,a,c,l,h=ds){if(h!==ds&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Ui),n===void 0&&h===ys&&(n=xs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new Ke,Dh=new uo(1,1),Pu=new ro,Iu=new Fc,Lu=new lo,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}},kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}},Hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Qg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};t_=37297,e_=0;Hh=new ee;Gr=new N;h_=/^[ \t]*#include +<([\w\d./]+)>/gm;u_=new Map;f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;M_=0,Gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wc(t),e.set(t,n)),n}},Wc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};R_=0;rr=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xc=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;N_={[Ka]:ja,[Qa]:nc,[tc]:ic,[ms]:ec,[ja]:Ka,[nc]:Qa,[ic]:tc,[ec]:ms};qc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:H_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=new Yc,g=e.getContextAttributes(),p=null,v=null,y=[],x=[],P=new vt,S=null,w=new Je;w.viewport=new be;let T=new Je;T.viewport=new be;let E=[w,T],M=new qc,A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=y[Z];return tt===void 0&&(tt=new Ks,y[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=y[Z];return tt===void 0&&(tt=new Ks,y[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=y[Z];return tt===void 0&&(tt=new Ks,y[Z]=tt),tt.getHandSpace()};function U(Z){let tt=x.indexOf(Z.inputSource);if(tt===-1)return;let mt=y[tt];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||o),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",O);for(let Z=0;Z<y.length;Z++){let tt=x[Z];tt!==null&&(x[Z]=null,y[Z].disconnect(tt))}A=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ei(f.framebufferWidth,f.framebufferHeight,{format:un,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,mt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?ys:ds,mt=g.stencil?xs:Ui);let bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ei(d.textureWidth,d.textureHeight,{format:un,type:Qn,depthTexture:new uo(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(Z){for(let tt=0;tt<Z.removed.length;tt++){let mt=Z.removed[tt],ot=x.indexOf(mt);ot>=0&&(x[ot]=null,y[ot].disconnect(mt))}for(let tt=0;tt<Z.added.length;tt++){let mt=Z.added[tt],ot=x.indexOf(mt);if(ot===-1){for(let yt=0;yt<y.length;yt++)if(yt>=x.length){x.push(mt),ot=yt;break}else if(x[yt]===null){x[yt]=mt,ot=yt;break}if(ot===-1)break}let bt=y[ot];bt&&bt.connect(mt)}}let D=new N,V=new N;function C(Z,tt,mt){D.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(mt.matrixWorld);let ot=D.distanceTo(V),bt=tt.projectionMatrix.elements,yt=mt.projectionMatrix.elements,et=bt[14]/(bt[10]-1),wt=bt[14]/(bt[10]+1),W=(bt[9]+1)/bt[5],q=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],lt=(yt[8]+1)/yt[0],H=et*I,J=et*lt,$=ot/(-I+lt),ht=$*-I;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ($),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let X=et+$,R=wt+$,b=H-ht,z=J+(ot-ht),j=W*wt/R*X,ct=q*wt/R*X;Z.projectionMatrix.makePerspective(b,z,j,ct,X,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function k(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,mt=Z.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),M.near=T.near=w.near=tt,M.far=T.far=w.far=mt,(A!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,F=M.far),w.layers.mask=Z.layers.mask|2,T.layers.mask=Z.layers.mask|4,M.layers.mask=w.layers.mask|T.layers.mask;let ot=Z.parent,bt=M.cameras;k(M,ot);for(let yt=0;yt<bt.length;yt++)k(bt[yt],ot);bt.length===2?C(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),G(Z,M,ot)};function G(Z,tt,mt){mt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let it=null;function ft(Z,tt){if(h=tt.getViewerPose(l||o),m=tt,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let yt=0;yt<mt.length;yt++){let et=mt[yt],wt=null;if(f!==null)wt=f.getViewport(et);else{let q=u.getViewSubImage(d,et);wt=q.viewport,yt===0&&(t.setRenderTargetTextures(v,q.colorTexture,d.ignoreDepthValues?void 0:q.depthStencilTexture),t.setRenderTarget(v))}let W=E[yt];W===void 0&&(W=new Je,W.layers.enable(yt),W.viewport=new be,E[yt]=W),W.matrix.fromArray(et.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(et.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(wt.x,wt.y,wt.width,wt.height),yt===0&&(M.matrix.copy(W.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(W)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let yt=u.getDepthInformation(mt[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,s.renderState)}}for(let mt=0;mt<y.length;mt++){let ot=x[mt],bt=y[mt];ot!==null&&bt!==void 0&&bt.update(ot,tt,l||o)}it&&it(Z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let pt=new Ru;pt.setAnimationLoop(ft),this.setAnimationLoop=function(Z){it=Z},this.dispose=function(){}}},Ci=new vn,G_=new re;fo=class{constructor(t={}){let{canvas:e=Jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=gi,this.toneMappingExposure=1;let x=this,P=!1,S=0,w=0,T=null,E=-1,M=null,A=new be,F=new be,U=null,B=new Yt(0),O=0,D=e.width,V=e.height,C=1,k=null,G=null,it=new be(0,0,D,V),ft=new be(0,0,D,V),pt=!1,Z=new sr,tt=!1,mt=!1,ot=new re,bt=new re,yt=new N,et=new be,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},W=!1;function q(){return T===null?C:1}let I=n;function lt(L,nt){return e.getContext(L,nt)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",xt,!1),I===null){let nt="webgl2";if(I=lt(nt,L),I===null)throw lt(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let H,J,$,ht,X,R,b,z,j,ct,at,Mt,dt,Et,At,St,Dt,Ft,Ht,It,Qt,$t,de,K;function Q(){H=new ag(I),H.init(),$t=new z_(I,H),J=new eg(I,H,t,$t),$=new F_(I,H),J.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ht=new hg(I),X=new S_,R=new B_(I,H,$,X,J,$t,ht),b=new ig(x),z=new og(x),j=new _p(I),de=new Q0(I,j),ct=new cg(I,j,ht,de),at=new dg(I,ct,j,ht),Ht=new ug(I,J,R),St=new ng(X),Mt=new E_(x,b,z,H,J,de,St),dt=new W_(x,X),Et=new w_,At=new I_(H),Ft=new j0(x,b,z,$,at,f,c),Dt=new U_(x,at,J),K=new X_(I,ht,J,$),It=new tg(I,H,ht),Qt=new lg(I,H,ht),ht.programs=Mt.programs,x.capabilities=J,x.extensions=H,x.properties=X,x.renderLists=Et,x.shadowMap=Dt,x.state=$,x.info=ht}Q();let Y=new Zc(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=H.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=H.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(L){L!==void 0&&(C=L,this.setSize(D,V,!1))},this.getSize=function(L){return L.set(D,V)},this.setSize=function(L,nt,gt=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=L,V=nt,e.width=Math.floor(L*C),e.height=Math.floor(nt*C),gt===!0&&(e.style.width=L+"px",e.style.height=nt+"px"),this.setViewport(0,0,L,nt)},this.getDrawingBufferSize=function(L){return L.set(D*C,V*C).floor()},this.setDrawingBufferSize=function(L,nt,gt){D=L,V=nt,C=gt,e.width=Math.floor(L*gt),e.height=Math.floor(nt*gt),this.setViewport(0,0,L,nt)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(it)},this.setViewport=function(L,nt,gt,_t){L.isVector4?it.set(L.x,L.y,L.z,L.w):it.set(L,nt,gt,_t),$.viewport(A.copy(it).multiplyScalar(C).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,nt,gt,_t){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,nt,gt,_t),$.scissor(F.copy(ft).multiplyScalar(C).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(L){$.setScissorTest(pt=L)},this.setOpaqueSort=function(L){k=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(L=!0,nt=!0,gt=!0){let _t=0;if(L){let rt=!1;if(T!==null){let Ct=T.texture.format;rt=Ct===bl||Ct===Sl||Ct===El}if(rt){let Ct=T.texture.type,Nt=Ct===Qn||Ct===Ui||Ct===tr||Ct===xs||Ct===yl||Ct===vl,Ot=Ft.getClearColor(),Bt=Ft.getClearAlpha(),Kt=Ot.r,te=Ot.g,zt=Ot.b;Nt?(m[0]=Kt,m[1]=te,m[2]=zt,m[3]=Bt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Kt,_[1]=te,_[2]=zt,_[3]=Bt,I.clearBufferiv(I.COLOR,0,_))}else _t|=I.COLOR_BUFFER_BIT}nt&&(_t|=I.DEPTH_BUFFER_BIT),gt&&(_t|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),At.dispose(),X.dispose(),b.dispose(),z.dispose(),at.dispose(),de.dispose(),K.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",mn),Y.removeEventListener("sessionend",tn),Fe.stop()};function st(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let L=ht.autoReset,nt=Dt.enabled,gt=Dt.autoUpdate,_t=Dt.needsUpdate,rt=Dt.type;Q(),ht.autoReset=L,Dt.enabled=nt,Dt.autoUpdate=gt,Dt.needsUpdate=_t,Dt.type=rt}function xt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Pt(L){let nt=L.target;nt.removeEventListener("dispose",Pt),Gt(nt)}function Gt(L){Jt(L),X.remove(L)}function Jt(L){let nt=X.get(L).programs;nt!==void 0&&(nt.forEach(function(gt){Mt.releaseProgram(gt)}),L.isShaderMaterial&&Mt.releaseShaderCache(L))}this.renderBufferDirect=function(L,nt,gt,_t,rt,Ct){nt===null&&(nt=wt);let Nt=rt.isMesh&&rt.matrixWorld.determinant()<0,Ot=Xd(L,nt,gt,_t,rt);$.setMaterial(_t,Nt);let Bt=gt.index,Kt=1;if(_t.wireframe===!0){if(Bt=ct.getWireframeAttribute(gt),Bt===void 0)return;Kt=2}let te=gt.drawRange,zt=gt.attributes.position,le=te.start*Kt,ge=(te.start+te.count)*Kt;Ct!==null&&(le=Math.max(le,Ct.start*Kt),ge=Math.min(ge,(Ct.start+Ct.count)*Kt)),Bt!==null?(le=Math.max(le,0),ge=Math.min(ge,Bt.count)):zt!=null&&(le=Math.max(le,0),ge=Math.min(ge,zt.count));let xe=ge-le;if(xe<0||xe===1/0)return;de.setup(rt,_t,Ot,gt,Bt);let en,he=It;if(Bt!==null&&(en=j.get(Bt),he=Qt,he.setIndex(en)),rt.isMesh)_t.wireframe===!0?($.setLineWidth(_t.wireframeLinewidth*q()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(rt.isLine){let Wt=_t.linewidth;Wt===void 0&&(Wt=1),$.setLineWidth(Wt*q()),rt.isLineSegments?he.setMode(I.LINES):rt.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else rt.isPoints?he.setMode(I.POINTS):rt.isSprite&&he.setMode(I.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)he.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))he.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let Wt=rt._multiDrawStarts,Gn=rt._multiDrawCounts,ue=rt._multiDrawCount,bn=Bt?j.get(Bt).bytesPerElement:1,qi=X.get(_t).currentProgram.getUniforms();for(let cn=0;cn<ue;cn++)qi.setValue(I,"_gl_DrawID",cn),he.render(Wt[cn]/bn,Gn[cn])}else if(rt.isInstancedMesh)he.renderInstances(le,xe,rt.count);else if(gt.isInstancedBufferGeometry){let Wt=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Gn=Math.min(gt.instanceCount,Wt);he.renderInstances(le,xe,Gn)}else he.render(le,xe)};function ne(L,nt,gt){L.transparent===!0&&L.side===Vt&&L.forceSinglePass===!1?(L.side=Be,L.needsUpdate=!0,Si(L,nt,gt),L.side=_i,L.needsUpdate=!0,Si(L,nt,gt),L.side=Vt):Si(L,nt,gt)}this.compile=function(L,nt,gt=null){gt===null&&(gt=L),p=At.get(gt),p.init(nt),y.push(p),gt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(nt.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),L!==gt&&L.traverseVisible(function(rt){rt.isLight&&rt.layers.test(nt.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),p.setupLights();let _t=new Set;return L.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Ct=rt.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){let Ot=Ct[Nt];ne(Ot,gt,rt),_t.add(Ot)}else ne(Ct,gt,rt),_t.add(Ct)}),y.pop(),p=null,_t},this.compileAsync=function(L,nt,gt=null){let _t=this.compile(L,nt,gt);return new Promise(rt=>{function Ct(){if(_t.forEach(function(Nt){X.get(Nt).currentProgram.isReady()&&_t.delete(Nt)}),_t.size===0){rt(L);return}setTimeout(Ct,10)}H.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Me=null;function Te(L){Me&&Me(L)}function mn(){Fe.stop()}function tn(){Fe.start()}let Fe=new Ru;Fe.setAnimationLoop(Te),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(L){Me=L,Y.setAnimationLoop(L),L===null?Fe.stop():Fe.start()},Y.addEventListener("sessionstart",mn),Y.addEventListener("sessionend",tn),this.render=function(L,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(nt),nt=Y.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,nt,T),p=At.get(L,y.length),p.init(nt),y.push(p),bt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),Z.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,tt=St.init(this.clippingPlanes,mt),g=Et.get(L,v.length),g.init(),v.push(g),Y.enabled===!0&&Y.isPresenting===!0){let Ct=x.xr.getDepthSensingMesh();Ct!==null&&gn(Ct,nt,-1/0,x.sortObjects)}gn(L,nt,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,G),W=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,W&&Ft.addToRenderList(g,L),this.info.render.frame++,tt===!0&&St.beginShadows();let gt=p.state.shadowsArray;Dt.render(gt,L,nt),tt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=g.opaque,rt=g.transmissive;if(p.setupLights(),nt.isArrayCamera){let Ct=nt.cameras;if(rt.length>0)for(let Nt=0,Ot=Ct.length;Nt<Ot;Nt++){let Bt=Ct[Nt];ri(_t,rt,L,Bt)}W&&Ft.render(L);for(let Nt=0,Ot=Ct.length;Nt<Ot;Nt++){let Bt=Ct[Nt];si(g,L,Bt,Bt.viewport)}}else rt.length>0&&ri(_t,rt,L,nt),W&&Ft.render(L),si(g,L,nt);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(x,L,nt),de.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&St.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function gn(L,nt,gt,_t){if(L.visible===!1)return;if(L.layers.test(nt.layers)){if(L.isGroup)gt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(nt);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Z.intersectsSprite(L)){_t&&et.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);let Nt=at.update(L),Ot=L.material;Ot.visible&&g.push(L,Nt,Ot,gt,et.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Z.intersectsObject(L))){let Nt=at.update(L),Ot=L.material;if(_t&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),et.copy(L.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),et.copy(Nt.boundingSphere.center)),et.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray(Ot)){let Bt=Nt.groups;for(let Kt=0,te=Bt.length;Kt<te;Kt++){let zt=Bt[Kt],le=Ot[zt.materialIndex];le&&le.visible&&g.push(L,Nt,le,gt,et.z,zt)}}else Ot.visible&&g.push(L,Nt,Ot,gt,et.z,null)}}let Ct=L.children;for(let Nt=0,Ot=Ct.length;Nt<Ot;Nt++)gn(Ct[Nt],nt,gt,_t)}function si(L,nt,gt,_t){let rt=L.opaque,Ct=L.transmissive,Nt=L.transparent;p.setupLightsView(gt),tt===!0&&St.setGlobalState(x.clippingPlanes,gt),_t&&$.viewport(A.copy(_t)),rt.length>0&&Fn(rt,nt,gt),Ct.length>0&&Fn(Ct,nt,gt),Nt.length>0&&Fn(Nt,nt,gt),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ri(L,nt,gt,_t){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[_t.id]===void 0&&(p.state.transmissionRenderTarget[_t.id]=new ei(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?gr:Qn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let Ct=p.state.transmissionRenderTarget[_t.id],Nt=_t.viewport||A;Ct.setSize(Nt.z,Nt.w);let Ot=x.getRenderTarget();x.setRenderTarget(Ct),x.getClearColor(B),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),W&&Ft.render(gt);let Bt=x.toneMapping;x.toneMapping=gi;let Kt=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),p.setupLightsView(_t),tt===!0&&St.setGlobalState(x.clippingPlanes,_t),Fn(L,gt,_t),R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct),H.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let zt=0,le=nt.length;zt<le;zt++){let ge=nt[zt],xe=ge.object,en=ge.geometry,he=ge.material,Wt=ge.group;if(he.side===Vt&&xe.layers.test(_t.layers)){let Gn=he.side;he.side=Be,he.needsUpdate=!0,Os(xe,gt,_t,en,he,Wt),he.side=Gn,he.needsUpdate=!0,te=!0}}te===!0&&(R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct))}x.setRenderTarget(Ot),x.setClearColor(B,O),Kt!==void 0&&(_t.viewport=Kt),x.toneMapping=Bt}function Fn(L,nt,gt){let _t=nt.isScene===!0?nt.overrideMaterial:null;for(let rt=0,Ct=L.length;rt<Ct;rt++){let Nt=L[rt],Ot=Nt.object,Bt=Nt.geometry,Kt=_t===null?Nt.material:_t,te=Nt.group;Ot.layers.test(gt.layers)&&Os(Ot,nt,gt,Bt,Kt,te)}}function Os(L,nt,gt,_t,rt,Ct){L.onBeforeRender(x,nt,gt,_t,rt,Ct),L.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),rt.onBeforeRender(x,nt,gt,_t,L,Ct),rt.transparent===!0&&rt.side===Vt&&rt.forceSinglePass===!1?(rt.side=Be,rt.needsUpdate=!0,x.renderBufferDirect(gt,nt,_t,rt,L,Ct),rt.side=_i,rt.needsUpdate=!0,x.renderBufferDirect(gt,nt,_t,rt,L,Ct),rt.side=Vt):x.renderBufferDirect(gt,nt,_t,rt,L,Ct),L.onAfterRender(x,nt,gt,_t,rt,Ct)}function Si(L,nt,gt){nt.isScene!==!0&&(nt=wt);let _t=X.get(L),rt=p.state.lights,Ct=p.state.shadowsArray,Nt=rt.state.version,Ot=Mt.getParameters(L,rt.state,Ct,nt,gt),Bt=Mt.getProgramCacheKey(Ot),Kt=_t.programs;_t.environment=L.isMeshStandardMaterial?nt.environment:null,_t.fog=nt.fog,_t.envMap=(L.isMeshStandardMaterial?z:b).get(L.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&L.envMap===null?nt.environmentRotation:L.envMapRotation,Kt===void 0&&(L.addEventListener("dispose",Pt),Kt=new Map,_t.programs=Kt);let te=Kt.get(Bt);if(te!==void 0){if(_t.currentProgram===te&&_t.lightsStateVersion===Nt)return Zl(L,Ot),te}else Ot.uniforms=Mt.getUniforms(L),L.onBeforeCompile(Ot,x),te=Mt.acquireProgram(Ot,Bt),Kt.set(Bt,te),_t.uniforms=Ot.uniforms;let zt=_t.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(zt.clippingPlanes=St.uniform),Zl(L,Ot),_t.needsLights=Yd(L),_t.lightsStateVersion=Nt,_t.needsLights&&(zt.ambientLightColor.value=rt.state.ambient,zt.lightProbe.value=rt.state.probe,zt.directionalLights.value=rt.state.directional,zt.directionalLightShadows.value=rt.state.directionalShadow,zt.spotLights.value=rt.state.spot,zt.spotLightShadows.value=rt.state.spotShadow,zt.rectAreaLights.value=rt.state.rectArea,zt.ltc_1.value=rt.state.rectAreaLTC1,zt.ltc_2.value=rt.state.rectAreaLTC2,zt.pointLights.value=rt.state.point,zt.pointLightShadows.value=rt.state.pointShadow,zt.hemisphereLights.value=rt.state.hemi,zt.directionalShadowMap.value=rt.state.directionalShadowMap,zt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,zt.spotShadowMap.value=rt.state.spotShadowMap,zt.spotLightMatrix.value=rt.state.spotLightMatrix,zt.spotLightMap.value=rt.state.spotLightMap,zt.pointShadowMap.value=rt.state.pointShadowMap,zt.pointShadowMatrix.value=rt.state.pointShadowMatrix),_t.currentProgram=te,_t.uniformsList=null,te}function Yl(L){if(L.uniformsList===null){let nt=L.currentProgram.getUniforms();L.uniformsList=ps.seqWithValue(nt.seq,L.uniforms)}return L.uniformsList}function Zl(L,nt){let gt=X.get(L);gt.outputColorSpace=nt.outputColorSpace,gt.batching=nt.batching,gt.batchingColor=nt.batchingColor,gt.instancing=nt.instancing,gt.instancingColor=nt.instancingColor,gt.instancingMorph=nt.instancingMorph,gt.skinning=nt.skinning,gt.morphTargets=nt.morphTargets,gt.morphNormals=nt.morphNormals,gt.morphColors=nt.morphColors,gt.morphTargetsCount=nt.morphTargetsCount,gt.numClippingPlanes=nt.numClippingPlanes,gt.numIntersection=nt.numClipIntersection,gt.vertexAlphas=nt.vertexAlphas,gt.vertexTangents=nt.vertexTangents,gt.toneMapping=nt.toneMapping}function Xd(L,nt,gt,_t,rt){nt.isScene!==!0&&(nt=wt),R.resetTextureUnits();let Ct=nt.fog,Nt=_t.isMeshStandardMaterial?nt.environment:null,Ot=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:As,Bt=(_t.isMeshStandardMaterial?z:b).get(_t.envMap||Nt),Kt=_t.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,te=!!gt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),zt=!!gt.morphAttributes.position,le=!!gt.morphAttributes.normal,ge=!!gt.morphAttributes.color,xe=gi;_t.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xe=x.toneMapping);let en=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,he=en!==void 0?en.length:0,Wt=X.get(_t),Gn=p.state.lights;if(tt===!0&&(mt===!0||L!==M)){let _n=L===M&&_t.id===E;St.setState(_t,L,_n)}let ue=!1;_t.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Gn.state.version||Wt.outputColorSpace!==Ot||rt.isBatchedMesh&&Wt.batching===!1||!rt.isBatchedMesh&&Wt.batching===!0||rt.isBatchedMesh&&Wt.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&Wt.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&Wt.instancing===!1||!rt.isInstancedMesh&&Wt.instancing===!0||rt.isSkinnedMesh&&Wt.skinning===!1||!rt.isSkinnedMesh&&Wt.skinning===!0||rt.isInstancedMesh&&Wt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Wt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Wt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Wt.instancingMorph===!1&&rt.morphTexture!==null||Wt.envMap!==Bt||_t.fog===!0&&Wt.fog!==Ct||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==St.numPlanes||Wt.numIntersection!==St.numIntersection)||Wt.vertexAlphas!==Kt||Wt.vertexTangents!==te||Wt.morphTargets!==zt||Wt.morphNormals!==le||Wt.morphColors!==ge||Wt.toneMapping!==xe||Wt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Wt.__version=_t.version);let bn=Wt.currentProgram;ue===!0&&(bn=Si(_t,nt,rt));let qi=!1,cn=!1,Bs=!1,ye=bn.getUniforms(),On=Wt.uniforms;if($.useProgram(bn.program)&&(qi=!0,cn=!0,Bs=!0),_t.id!==E&&(E=_t.id,cn=!0),qi||M!==L){$.buffers.depth.getReversed()?(ot.copy(L.projectionMatrix),jf(ot),Qf(ot),ye.setValue(I,"projectionMatrix",ot)):ye.setValue(I,"projectionMatrix",L.projectionMatrix),ye.setValue(I,"viewMatrix",L.matrixWorldInverse);let oi=ye.map.cameraPosition;oi!==void 0&&oi.setValue(I,yt.setFromMatrixPosition(L.matrixWorld)),J.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&ye.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,cn=!0,Bs=!0)}if(rt.isSkinnedMesh){ye.setOptional(I,rt,"bindMatrix"),ye.setOptional(I,rt,"bindMatrixInverse");let _n=rt.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ye.setValue(I,"boneTexture",_n.boneTexture,R))}rt.isBatchedMesh&&(ye.setOptional(I,rt,"batchingTexture"),ye.setValue(I,"batchingTexture",rt._matricesTexture,R),ye.setOptional(I,rt,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",rt._indirectTexture,R),ye.setOptional(I,rt,"batchingColorTexture"),rt._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",rt._colorsTexture,R));let zs=gt.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Ht.update(rt,gt,bn),(cn||Wt.receiveShadow!==rt.receiveShadow)&&(Wt.receiveShadow=rt.receiveShadow,ye.setValue(I,"receiveShadow",rt.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(On.envMap.value=Bt,On.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&nt.environment!==null&&(On.envMapIntensity.value=nt.environmentIntensity),cn&&(ye.setValue(I,"toneMappingExposure",x.toneMappingExposure),Wt.needsLights&&qd(On,Bs),Ct&&_t.fog===!0&&dt.refreshFogUniforms(On,Ct),dt.refreshMaterialUniforms(On,_t,C,V,p.state.transmissionRenderTarget[L.id]),ps.upload(I,Yl(Wt),On,R)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(ps.upload(I,Yl(Wt),On,R),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&ye.setValue(I,"center",rt.center),ye.setValue(I,"modelViewMatrix",rt.modelViewMatrix),ye.setValue(I,"normalMatrix",rt.normalMatrix),ye.setValue(I,"modelMatrix",rt.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let _n=_t.uniformsGroups;for(let oi=0,ai=_n.length;oi<ai;oi++){let $l=_n[oi];K.update($l,bn),K.bind($l,bn)}}return bn}function qd(L,nt){L.ambientLightColor.needsUpdate=nt,L.lightProbe.needsUpdate=nt,L.directionalLights.needsUpdate=nt,L.directionalLightShadows.needsUpdate=nt,L.pointLights.needsUpdate=nt,L.pointLightShadows.needsUpdate=nt,L.spotLights.needsUpdate=nt,L.spotLightShadows.needsUpdate=nt,L.rectAreaLights.needsUpdate=nt,L.hemisphereLights.needsUpdate=nt}function Yd(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,nt,gt){X.get(L.texture).__webglTexture=nt,X.get(L.depthTexture).__webglTexture=gt;let _t=X.get(L);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=gt===void 0,_t.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,nt){let gt=X.get(L);gt.__webglFramebuffer=nt,gt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(L,nt=0,gt=0){T=L,S=nt,w=gt;let _t=!0,rt=null,Ct=!1,Nt=!1;if(L){let Bt=X.get(L);if(Bt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(I.FRAMEBUFFER,null),_t=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(Bt.__hasExternalTextures)R.rebindTextures(L,X.get(L.texture).__webglTexture,X.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let zt=L.depthTexture;if(Bt.__boundDepthTexture!==zt){if(zt!==null&&X.has(zt)&&(L.width!==zt.image.width||L.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}let Kt=L.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);let te=X.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(te[nt])?rt=te[nt][gt]:rt=te[nt],Ct=!0):L.samples>0&&R.useMultisampledRTT(L)===!1?rt=X.get(L).__webglMultisampledFramebuffer:Array.isArray(te)?rt=te[gt]:rt=te,A.copy(L.viewport),F.copy(L.scissor),U=L.scissorTest}else A.copy(it).multiplyScalar(C).floor(),F.copy(ft).multiplyScalar(C).floor(),U=pt;if($.bindFramebuffer(I.FRAMEBUFFER,rt)&&_t&&$.drawBuffers(L,rt),$.viewport(A),$.scissor(F),$.setScissorTest(U),Ct){let Bt=X.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt.__webglTexture,gt)}else if(Nt){let Bt=X.get(L.texture),Kt=nt||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,gt||0,Kt)}E=-1},this.readRenderTargetPixels=function(L,nt,gt,_t,rt,Ct,Nt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=X.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){$.bindFramebuffer(I.FRAMEBUFFER,Ot);try{let Bt=L.texture,Kt=Bt.format,te=Bt.type;if(!J.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=L.width-_t&&gt>=0&&gt<=L.height-rt&&I.readPixels(nt,gt,_t,rt,$t.convert(Kt),$t.convert(te),Ct)}finally{let Bt=T!==null?X.get(T).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(L,nt,gt,_t,rt,Ct,Nt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=X.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){let Bt=L.texture,Kt=Bt.format,te=Bt.type;if(!J.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=L.width-_t&&gt>=0&&gt<=L.height-rt){$.bindFramebuffer(I.FRAMEBUFFER,Ot);let zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,zt),I.bufferData(I.PIXEL_PACK_BUFFER,Ct.byteLength,I.STREAM_READ),I.readPixels(nt,gt,_t,rt,$t.convert(Kt),$t.convert(te),0);let le=T!==null?X.get(T).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,le);let ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Kf(I,ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ct),I.deleteBuffer(zt),I.deleteSync(ge),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,nt=null,gt=0){L.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,L=arguments[1]);let _t=Math.pow(2,-gt),rt=Math.floor(L.image.width*_t),Ct=Math.floor(L.image.height*_t),Nt=nt!==null?nt.x:0,Ot=nt!==null?nt.y:0;R.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,gt,0,0,Nt,Ot,rt,Ct),$.unbindTexture()},this.copyTextureToTexture=function(L,nt,gt=null,_t=null,rt=0){L.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,L=arguments[1],nt=arguments[2],rt=arguments[3]||0,gt=null);let Ct,Nt,Ot,Bt,Kt,te,zt,le,ge,xe=L.isCompressedTexture?L.mipmaps[rt]:L.image;gt!==null?(Ct=gt.max.x-gt.min.x,Nt=gt.max.y-gt.min.y,Ot=gt.isBox3?gt.max.z-gt.min.z:1,Bt=gt.min.x,Kt=gt.min.y,te=gt.isBox3?gt.min.z:0):(Ct=xe.width,Nt=xe.height,Ot=xe.depth||1,Bt=0,Kt=0,te=0),_t!==null?(zt=_t.x,le=_t.y,ge=_t.z):(zt=0,le=0,ge=0);let en=$t.convert(nt.format),he=$t.convert(nt.type),Wt;nt.isData3DTexture?(R.setTexture3D(nt,0),Wt=I.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(R.setTexture2DArray(nt,0),Wt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(nt,0),Wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,nt.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,nt.unpackAlignment);let Gn=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=I.getParameter(I.UNPACK_SKIP_PIXELS),qi=I.getParameter(I.UNPACK_SKIP_ROWS),cn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);let Bs=L.isDataArrayTexture||L.isData3DTexture,ye=nt.isDataArrayTexture||nt.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let On=X.get(L),zs=X.get(nt),_n=X.get(On.__renderTarget),oi=X.get(zs.__renderTarget);$.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ai=0;ai<Ot;ai++)Bs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(L).__webglTexture,rt,te+ai),L.isDepthTexture?(ye&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(nt).__webglTexture,rt,ge+ai),I.blitFramebuffer(Bt,Kt,Ct,Nt,zt,le,Ct,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ye?I.copyTexSubImage3D(Wt,rt,zt,le,ge+ai,Bt,Kt,Ct,Nt):I.copyTexSubImage2D(Wt,rt,zt,le,ge+ai,Bt,Kt,Ct,Nt);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ye?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(Wt,rt,zt,le,ge,Ct,Nt,Ot,en,he,xe.data):nt.isCompressedArrayTexture?I.compressedTexSubImage3D(Wt,rt,zt,le,ge,Ct,Nt,Ot,en,xe.data):I.texSubImage3D(Wt,rt,zt,le,ge,Ct,Nt,Ot,en,he,xe):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,rt,zt,le,Ct,Nt,en,he,xe.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,rt,zt,le,xe.width,xe.height,en,xe.data):I.texSubImage2D(I.TEXTURE_2D,rt,zt,le,Ct,Nt,en,he,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Gn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,qi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cn),rt===0&&nt.generateMipmaps&&I.generateMipmap(Wt),$.unbindTexture()},this.copyTextureToTexture3D=function(L,nt,gt=null,_t=null,rt=0){return L.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),gt=arguments[0]||null,_t=arguments[1]||null,L=arguments[2],nt=arguments[3],rt=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,nt,gt,_t,rt)},this.initRenderTarget=function(L){X.get(L).__webglFramebuffer===void 0&&R.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),$.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,$.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}},po=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ar=class extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cr=class extends jt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new re,Kh=new re,Wr=[],jh=new In,q_=new re,Ws=new Lt,Xs=new xi,ze=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),jh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(jh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Xs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Kh.multiplyMatrices(n,as),Ws.matrixWorld=Kh,Ws.raycast(t,Wr);for(let o=0,a=Wr.length;o<a;o++){let c=Wr[o];c.instanceId=r,c.object=this,e.push(c)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,Ml,kn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},mo=class extends yi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},go=new N,_o=new N,Qh=new re,qs=new Ni,Xr=new xi,Wa=new N,tu=new N,xo=class extends qe{constructor(t=new oe,e=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)go.fromBufferAttribute(e,s-1),_o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=go.distanceTo(_o);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Qh.copy(s).invert(),qs.copy(t.ray).applyMatrix4(Qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),v=h.getX(_+1),y=qr(this,t,qs,c,p,v);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=qr(this,t,qs,c,_,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=qr(this,t,qs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=qr(this,t,qs,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};sn=class extends Ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new vt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,c=new re;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$c=class extends lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Yr=new N,Xa=new Cl,qa=new Cl,Ya=new Cl,hr=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),l=Yr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Xa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),qa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Ya.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),qa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ya.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};yo=class extends Mn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jc=class extends Mn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y),Qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends Mn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends Mn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Mn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Mn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(eu(a,c.x,l.x,h.x,u.x),eu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},bo=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:hr,CubicBezierCurve:yo,CubicBezierCurve3:Jc,EllipseCurve:lr,LineCurve:vo,LineCurve3:Kc,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Eo,SplineCurve:So}),jc=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bo[s.type]().fromJSON(s))}return this}},wo=class extends jc{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new yo(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new So(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new lr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},To=class i extends oe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new N,d=new vt,f=new N,m=new N,_=new N,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){let y=n+v*h*s,x=Math.sin(y),P=Math.cos(y);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*x,u.y=t[S].y,u.z=t[S].x*P,o.push(u.x,u.y,u.z),d.x=v/e,d.y=S/(t.length-1),a.push(d.x,d.y);let w=c[3*S+0]*x,T=c[3*S+1],E=c[3*S+0]*P;l.push(w,T,E)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let x=y+v*t.length,P=x,S=x+t.length,w=x+t.length+1,T=x+1;r.push(P,S,T),r.push(w,T,S)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ao=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function v(){let x=new N,P=new N,S=0,w=(e-t)/n;for(let T=0;T<=r;T++){let E=[],M=T/r,A=M*(e-t)+t;for(let F=0;F<=s;F++){let U=F/s,B=U*c+a,O=Math.sin(B),D=Math.cos(B);P.x=A*O,P.y=-M*n+g,P.z=A*D,u.push(P.x,P.y,P.z),x.set(O,w,D).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-M),E.push(m++)}_.push(E)}for(let T=0;T<s;T++)for(let E=0;E<r;E++){let M=_[E][T],A=_[E+1][T],F=_[E+1][T+1],U=_[E][T+1];(t>0||E!==0)&&(h.push(M,A,U),S+=3),(e>0||E!==r-1)&&(h.push(A,F,U),S+=3)}l.addGroup(p,S,0),p+=S}function y(x){let P=m,S=new vt,w=new N,T=0,E=x===!0?t:e,M=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let A=m;for(let F=0;F<=s;F++){let B=F/s*c+a,O=Math.cos(B),D=Math.sin(B);w.x=E*D,w.y=g*M,w.z=E*O,u.push(w.x,w.y,w.z),d.push(0,M,0),S.x=O*.5+.5,S.y=D*.5*M+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let U=P+F,B=A+F;x===!0?h.push(B,B+1,U):h.push(B+1,B,U),T+=3}l.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ss=class i extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qc=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new N,x=new N,P=new N;for(let S=0;S<e.length;S+=3)f(e[S+0],y),f(e[S+1],x),f(e[S+2],P),c(y,x,P,v)}function c(v,y,x,P){let S=P+1,w=[];for(let T=0;T<=S;T++){w[T]=[];let E=v.clone().lerp(x,T/S),M=y.clone().lerp(x,T/S),A=S-T;for(let F=0;F<=A;F++)F===0&&T===S?w[T][F]=E:w[T][F]=E.clone().lerp(M,F/A)}for(let T=0;T<S;T++)for(let E=0;E<2*(S-T)-1;E++){let M=Math.floor(E/2);E%2===0?(d(w[T][M+1]),d(w[T+1][M]),d(w[T][M])):(d(w[T][M+1]),d(w[T+1][M+1]),d(w[T+1][M]))}}function l(v){let y=new N;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let v=new N;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let x=g(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(x,1-P)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],P=o[v+4],S=Math.max(y,x,P),w=Math.min(y,x,P);S>.9&&w<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){let v=new N,y=new N,x=new N,P=new N,S=new vt,w=new vt,T=new vt;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),S.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),P.copy(v).add(y).add(x).divideScalar(3);let A=g(P);_(S,M+0,v,A),_(w,M+2,y,A),_(T,M+4,x,A)}}function _(v,y,x,P){P<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Fi=class extends wo{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wo().fromJSON(s))}return this}},tx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ur(r,o,e,a,c,f,0),o}};jn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];iu(t),su(n,t);let o=t.length;e.forEach(iu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,su(n,e[c]);let a=tx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};bs=class i extends oe{constructor(t=new Fi([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:_x,y,x=!1,P,S,w,T;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),S=new N,w=new N,T=new N),d||(g=0,f=0,m=0,_=0);let E=a.extractPoints(l),M=E.shape,A=E.holes;if(!jn.isClockWise(M)){M=M.reverse();for(let W=0,q=A.length;W<q;W++){let I=A[W];jn.isClockWise(I)&&(A[W]=I.reverse())}}let U=jn.triangulateShape(M,A),B=M;for(let W=0,q=A.length;W<q;W++){let I=A[W];M=M.concat(I)}function O(W,q,I){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(q,I)}let D=M.length,V=U.length;function C(W,q,I){let lt,H,J,$=W.x-q.x,ht=W.y-q.y,X=I.x-W.x,R=I.y-W.y,b=$*$+ht*ht,z=$*R-ht*X;if(Math.abs(z)>Number.EPSILON){let j=Math.sqrt(b),ct=Math.sqrt(X*X+R*R),at=q.x-ht/j,Mt=q.y+$/j,dt=I.x-R/ct,Et=I.y+X/ct,At=((dt-at)*R-(Et-Mt)*X)/($*R-ht*X);lt=at+$*At-W.x,H=Mt+ht*At-W.y;let St=lt*lt+H*H;if(St<=2)return new vt(lt,H);J=Math.sqrt(St/2)}else{let j=!1;$>Number.EPSILON?X>Number.EPSILON&&(j=!0):$<-Number.EPSILON?X<-Number.EPSILON&&(j=!0):Math.sign(ht)===Math.sign(R)&&(j=!0),j?(lt=-ht,H=$,J=Math.sqrt(b)):(lt=$,H=ht,J=Math.sqrt(b/2))}return new vt(lt/J,H/J)}let k=[];for(let W=0,q=B.length,I=q-1,lt=W+1;W<q;W++,I++,lt++)I===q&&(I=0),lt===q&&(lt=0),k[W]=C(B[W],B[I],B[lt]);let G=[],it,ft=k.concat();for(let W=0,q=A.length;W<q;W++){let I=A[W];it=[];for(let lt=0,H=I.length,J=H-1,$=lt+1;lt<H;lt++,J++,$++)J===H&&(J=0),$===H&&($=0),it[lt]=C(I[lt],I[J],I[$]);G.push(it),ft=ft.concat(it)}for(let W=0;W<g;W++){let q=W/g,I=f*Math.cos(q*Math.PI/2),lt=m*Math.sin(q*Math.PI/2)+_;for(let H=0,J=B.length;H<J;H++){let $=O(B[H],k[H],lt);ot($.x,$.y,-I)}for(let H=0,J=A.length;H<J;H++){let $=A[H];it=G[H];for(let ht=0,X=$.length;ht<X;ht++){let R=O($[ht],it[ht],lt);ot(R.x,R.y,-I)}}}let pt=m+_;for(let W=0;W<D;W++){let q=d?O(M[W],ft[W],pt):M[W];x?(w.copy(P.normals[0]).multiplyScalar(q.x),S.copy(P.binormals[0]).multiplyScalar(q.y),T.copy(y[0]).add(w).add(S),ot(T.x,T.y,T.z)):ot(q.x,q.y,0)}for(let W=1;W<=h;W++)for(let q=0;q<D;q++){let I=d?O(M[q],ft[q],pt):M[q];x?(w.copy(P.normals[W]).multiplyScalar(I.x),S.copy(P.binormals[W]).multiplyScalar(I.y),T.copy(y[W]).add(w).add(S),ot(T.x,T.y,T.z)):ot(I.x,I.y,u/h*W)}for(let W=g-1;W>=0;W--){let q=W/g,I=f*Math.cos(q*Math.PI/2),lt=m*Math.sin(q*Math.PI/2)+_;for(let H=0,J=B.length;H<J;H++){let $=O(B[H],k[H],lt);ot($.x,$.y,u+I)}for(let H=0,J=A.length;H<J;H++){let $=A[H];it=G[H];for(let ht=0,X=$.length;ht<X;ht++){let R=O($[ht],it[ht],lt);x?ot(R.x,R.y+y[h-1].y,y[h-1].x+I):ot(R.x,R.y,u+I)}}}Z(),tt();function Z(){let W=s.length/3;if(d){let q=0,I=D*q;for(let lt=0;lt<V;lt++){let H=U[lt];bt(H[2]+I,H[1]+I,H[0]+I)}q=h+g*2,I=D*q;for(let lt=0;lt<V;lt++){let H=U[lt];bt(H[0]+I,H[1]+I,H[2]+I)}}else{for(let q=0;q<V;q++){let I=U[q];bt(I[2],I[1],I[0])}for(let q=0;q<V;q++){let I=U[q];bt(I[0]+D*h,I[1]+D*h,I[2]+D*h)}}n.addGroup(W,s.length/3-W,0)}function tt(){let W=s.length/3,q=0;mt(B,q),q+=B.length;for(let I=0,lt=A.length;I<lt;I++){let H=A[I];mt(H,q),q+=H.length}n.addGroup(W,s.length/3-W,1)}function mt(W,q){let I=W.length;for(;--I>=0;){let lt=I,H=I-1;H<0&&(H=W.length-1);for(let J=0,$=h+g*2;J<$;J++){let ht=D*J,X=D*(J+1),R=q+lt+ht,b=q+H+ht,z=q+H+X,j=q+lt+X;yt(R,b,z,j)}}}function ot(W,q,I){c.push(W),c.push(q),c.push(I)}function bt(W,q,I){et(W),et(q),et(I);let lt=s.length/3,H=v.generateTopUV(n,s,lt-3,lt-2,lt-1);wt(H[0]),wt(H[1]),wt(H[2])}function yt(W,q,I,lt){et(W),et(q),et(lt),et(q),et(I),et(lt);let H=s.length/3,J=v.generateSideWallUV(n,s,H-6,H-3,H-2,H-1);wt(J[0]),wt(J[1]),wt(J[3]),wt(J[1]),wt(J[2]),wt(J[3])}function et(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function wt(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bo[s.type]().fromJSON(s)),new i(n,t.options)}},_x={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,c),new vt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new vt(o,1-c),new vt(l,1-u),new vt(d,1-m),new vt(_,1-p)]:[new vt(a,1-c),new vt(h,1-u),new vt(f,1-m),new vt(g,1-p)]}};Ro=class i extends Qc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Co=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new N,m=new vt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,x=v+n+1,P=v+n+2,S=v+1;a.push(y,x,S),a.push(x,P,S)}}this.setIndex(a),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},En=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let S=P/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(S+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],x=h[p][v],P=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,S),(p!==n-1||c<Math.PI)&&f.push(x,P,S)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Bi=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Po=class i extends oe{constructor(t=new Eo(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new vt,h=new N,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);let x=o.normals[y],P=o.binormals[y];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,T=Math.sin(w),E=-Math.cos(w);c.x=E*x.x+T*P.x,c.y=E*x.y+T*P.y,c.z=E*x.z+T*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let P=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),w=(s+1)*y+x,T=(s+1)*(y-1)+x;m.push(P,S,T),m.push(S,w,T)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Rt=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Io=class extends mo{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-n;break;case nh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case eh:o=t,c=2*n-e;break;case nh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[l+P]+y*o[c+P]+x*o[u+P];return r}},il=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},sl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case Dc:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Dc;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&yx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Dc;zi=class extends Ln{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=no;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;rl=class extends Ln{};rl.prototype.ValueTypeName="color";ol=class extends Ln{};ol.prototype.ValueTypeName="number";al=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Re.slerpFlat(r,0,o,l-a,o,l,c);return r}},Lo=class extends Ln{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;ki=class extends Ln{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=no;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;cl=class extends Ln{};cl.prototype.ValueTypeName="vector";ru={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ll=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},vx=new ll,pr=class{constructor(t){this.manager=t!==void 0?t:vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pr.DEFAULT_MATERIAL_NAME="__DEFAULT";hl=class extends pr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ru.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=nr("img");function c(){h(),ru.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},mr=class extends pr{constructor(t){super(t)}load(t,e,n,s){let r=new Ke,o=new hl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Do=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Za=new re,ou=new N,au=new N,ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dl=class extends ul{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Pl="\\[\\]\\.:\\/",Mx=new RegExp("["+Pl+"]","g"),Il="[^"+Pl+"]",Ex="[^"+Pl.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Il),bx=/(WCOD+)?/.source.replace("WCOD",Ex),wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),Tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),Ax=new RegExp("^"+Sx+bx+wx+Tx+"$"),Rx=["material","materials","bones","map"],fl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mx,"")}static parseTrackName(t){let e=Ax.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=fl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ay=new Float32Array(1),lu=new re,Ts=class{constructor(t,e,n=0,s=1/0){this.ray=new Ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(hu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pl(t[s],this,n,e);return n.sort(hu),n}};ni=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Oo=class extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml)});function Px(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bu),this.state=me.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case Dn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case Dn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Dl)}function Ux(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Nx(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(Dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bu))}function Fx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ox(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case rn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case rn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case rn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Dl)}function Bx(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function zx(i){this.enabled!==!1&&i.preventDefault()}function kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fu,Dl,Bu,Vo,Ou,Cx,Ue,on,me,Ll,Go,zu=Ae(()=>{we();Fu={type:"change"},Dl={type:"start"},Bu={type:"end"},Vo=new Ni,Ou=new Rn,Cx=Math.cos(70*_r.DEG2RAD),Ue=new N,on=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ll=1e-6,Go=class extends Oo{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.DOLLY,RIGHT:Dn.PAN},this.touches={ONE:rn.ROTATE,TWO:rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Re,this._lastTargetPosition=new N,this._quat=new Re().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ni,this._sphericalDelta=new ni,this._scale=1,this._panOffset=new N,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new N,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ix.bind(this),this._onPointerDown=Px.bind(this),this._onPointerUp=Lx.bind(this),this._onContextMenu=zx.bind(this),this._onMouseWheel=Nx.bind(this),this._onKeyDown=Fx.bind(this),this._onTouchStart=Ox.bind(this),this._onTouchMove=Bx.bind(this),this._onMouseDown=Dx.bind(this),this._onMouseMove=Ux.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Hx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fu),this.update(),this.state=me.NONE}update(t=null){let e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ue.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<Cx?this.object.lookAt(this.target):(Ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(Ou,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ll||this._lastTargetPosition.distanceToSquared(this.target)>Ll?(this.dispatchEvent(Fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var Wo,ku=Ae(()=>{we();zu();Wo=class extends Go{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Dn.PAN,MIDDLE:Dn.DOLLY,RIGHT:Dn.ROTATE},this.touches={ONE:rn.PAN,TWO:rn.DOLLY_ROTATE}}}});var Cs,Hu=Ae(()=>{we();Cs=class i extends Lt{constructor(){let t=i.SkyShader,e=new nn({name:t.name,uniforms:Al.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Be,depthWrite:!1});super(new Pe(1,1,1),e),this.isSky=!0}};Cs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
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

		}`}});function Sn(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Mi(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function ve(i,t){let e=Sn(t),n=new Float32Array(i*i);for(let s=0;s<i*i;s++)n[s]=e();return(s,r)=>{s=(s%i+i)%i,r=(r%i+i)%i;let o=Math.floor(s),a=Math.floor(r),c=(o+1)%i,l=(a+1)%i,h=s-o,u=r-a,d=h*h*(3-2*h),f=u*u*(3-2*u),m=n[a*i+o],_=n[a*i+c],g=n[l*i+o],p=n[l*i+c];return(m*(1-d)+_*d)*(1-f)+(g*(1-d)+p*d)*f}}function an(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let c=0;c<n;c++)s+=r*i(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}function Gu(i,t){return i.wrapS=i.wrapT=Pn,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Cn,i.magFilter=yn,t&&(i.colorSpace=_e),i.needsUpdate=!0,i}function xr(i,t,e,n=!0){let s=new ar(i,t,e,un);return Gu(s,n)}function Xo(i,t=!0){return Gu(new sn(i),t)}function qo(i,t,e,n=2){let s=new Uint8Array(t*e*4);for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=i[r*t+(o-1+t)%t],c=i[r*t+(o+1)%t],l=i[(r-1+e)%e*t+o],h=i[(r+1)%e*t+o],u=(a-c)*n,d=(h-l)*n,f=1,m=Math.hypot(u,d,f);u/=m,d/=m,f/=m;let _=(r*t+o)*4;s[_]=(u*.5+.5)*255,s[_+1]=(d*.5+.5)*255,s[_+2]=(f*.5+.5)*255,s[_+3]=255}return xr(s,t,e,!1)}function Un(i,t,e,n,s=!1){let r=new Uint8Array(i*t*4),o=new Float32Array(i*t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=e(c,a),h=(a*i+c)*4;r[h]=Math.max(0,Math.min(255,l[0])),r[h+1]=Math.max(0,Math.min(255,l[1])),r[h+2]=Math.max(0,Math.min(255,l[2])),r[h+3]=s?Math.max(0,Math.min(255,(l[4]??1)*255)):255,o[a*i+c]=l[3]||0}return{map:xr(r,i,t,!0),normalMap:n?qo(o,i,t,n):null}}function ke(i,t){return Vu[i]||(Vu[i]=t())}function Wu(){return ke("cer",()=>{let i=je,t=Sn(5),e=ve(16,7),n=ve(64,9),s=8,r=3,o=[];for(let a=0;a<s*r*4;a++)o.push(t());return Un(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(l),d=Math.floor(h),f=l-u,m=h-d,_=u%2===1,g=Math.sin(Math.PI*f),p=_?.55+.45*g:.35-.3*g;p+=(1-m)*.35;let v=o[(d*s+u)%o.length],y=.8+.2*v;v>.95&&(y*=.78),v<.04&&(y*=1.12);let x=_?.86+.18*g:.74+.12*(1-g),P=m>.9?.6+(1-m)*4:1,S=an(e,a/i*16,c/i*16,3),w=Math.max(0,an(n,a/i*64*.25,c/i*64*.25,3)-.58)*2.2,T=255*y*x*P*(.92+.16*S),E=T*(.92-.05*v),M=T*(.88-.08*v);return T=T*(1-w)+w*70,E=E*(1-w)+w*68,M=M*(1-w)+w*58,[T,E,M,p]},3.5)})}function Xu(){return ke("fib",()=>{let i=je,t=ve(32,11),e=ve(16,13),n=ve(128,15);return Un(i,i,(s,r)=>{let o=s/i,a=r/i,c=Math.sin(o*12*Math.PI*2),l=.5+.5*c,h=a*2.2/1.22%1;h<.025&&(l+=.6);let d=o*2%1<.02?.9:1,f=an(t,o*8,a*8,4),m=an(e,o*40,a*3,3),_=n(o*128,a*128),g=228*(.86+.3*(f-.5))*(.94+.12*m)*(.97+.06*_)*(.92+.08*c)*d;return f<.34&&(g*=.88),h<.025&&(g*=.8),[g,g*.995,g*.97,l]},1.3)})}function qu(){return ke("met",()=>{let i=je>>1,t=ve(16,17),e=ve(64,19);return Un(i,i,(n,s)=>{let r=n/i*4,o=s/i,a=r-Math.floor(r),c=a<.12?a/.12:a<.3?1:a<.42?1-(a-.3)/.12:0;c+=.15*Math.sin(a*Math.PI*8)*(a>.45?1:0);let l=an(t,n/i*4,s/i*6,3),h=e(n/i*64,s/i*8),u=225*(.86+.2*l)*(.95+.08*h)*(c>.9?1.04:.97),d=Math.max(0,l-.72)*3;return[u*(1-d*.25)+d*40,u*(1-d*.35)+d*14,u*(1-d*.5),c]},2)})}function Yu(){return ke("slab",()=>{let i=je,t=ve(16,21),e=ve(128,23),n=ve(8,25);return Un(i,i,(s,r)=>{let o=s/i,a=r/i,c=an(t,o*16,a*16,4),l=e(o*128,a*128),h=an(n,o*8,a*8,2),u=200*(.8+.3*(c-.5))*(.93+.12*l);return h>.66&&(u*=.62),c<.32&&(u*=.8),[u,u*.98,u*.95,l*.3]},1)})}function Zu(){return ke("fac",()=>{let i=Ps?512:1024,t=Ps?128:256,e=i/1024,[n,s]=Mi(i,t),[r,o]=Mi(i,t);s.scale(e,e),o.scale(e,e);let a=Sn(77);s.fillStyle="#f4f2ee",s.fillRect(0,0,1024,256),o.fillStyle="#fff",o.fillRect(0,0,1024,256);for(let y=0;y<9e3;y++){let x=225+a()*30;s.fillStyle=`rgba(${x},${x},${x-3},0.35)`,s.fillRect(a()*1024,a()*256,1+a()*3,1+a()*3)}let c=s.createLinearGradient(0,200,0,256);c.addColorStop(0,"rgba(120,105,85,0)"),c.addColorStop(1,"rgba(110,95,75,0.35)"),s.fillStyle=c,s.fillRect(0,200,1024,56),s.fillStyle="rgba(150,145,138,0.55)",s.fillRect(0,232,1024,24);let l=y=>{y(s,!1),y(o,!0)},h=(y,x,P,S,w,T,E)=>{y.fillStyle=E?"#000":x,y.fillRect(P,S,w,T)},u=(y,x,P,S)=>l((w,T)=>{if(h(w,"#e9e7e2",y-7,x-7,P+14,S+14,T),h(w,"#2a3036",y,x,P,S,T),!T){let E=w.createLinearGradient(y,x,y+P,x+S);E.addColorStop(0,"rgba(170,195,215,0.55)"),E.addColorStop(.5,"rgba(60,75,90,0.2)"),E.addColorStop(1,"rgba(150,175,195,0.45)"),w.fillStyle=E,w.fillRect(y+3,x+3,P-6,S-6),w.fillStyle="#c9ccce",w.fillRect(y+P/2-2,x,4,S),w.fillRect(y,x+S*.42,P,3),w.strokeStyle="rgba(25,25,25,0.85)",w.lineWidth=2.2;for(let M=y+8;M<y+P;M+=11)w.beginPath(),w.moveTo(M,x),w.lineTo(M,x+S),w.stroke();w.beginPath(),w.moveTo(y,x+S/2),w.lineTo(y+P,x+S/2),w.stroke(),w.fillStyle="#d8d6d0",w.fillRect(y-12,x+S+6,P+24,7),w.fillStyle="rgba(80,70,60,0.18)",w.fillRect(y-6,x+S+13,P+12,26)}}),d=(y,x,P,S,w)=>l((T,E)=>{if(h(T,"#ecebe6",y-7,x-7,P+14,S+14,E),!E){T.fillStyle=w,T.fillRect(y,x,P,S),T.fillStyle="rgba(0,0,0,0.25)";for(let M=x+4;M<x+S;M+=6)T.fillRect(y+2,M,P-4,2);T.fillStyle="rgba(0,0,0,0.4)",T.fillRect(y+P/2-1.5,x,3,S),T.fillStyle="#d8d6d0",T.fillRect(y-12,x+S+6,P+24,7)}}),f=(y,x,P,S)=>l((w,T)=>{if(h(w,"#e9e7e2",y-5,x-5,P+10,S+10,T),h(w,"#3a4148",y,x,P,S,T),!T){w.fillStyle="rgba(200,210,215,0.7)";for(let E=x+3;E<x+S-2;E+=8)w.fillRect(y+3,E,P-6,5)}}),m=(y,x,P,S)=>l((w,T)=>{if(h(w,"#e4e2dc",y-8,54,x+16,202,T),!T){if(w.fillStyle=P,w.fillRect(y,62,x,194),S===0)w.fillStyle="rgba(0,0,0,0.22)",w.fillRect(y+8,74,x-16,194*.38),w.fillRect(y+8,62+194*.5,x-16,194*.42);else{w.fillStyle="rgba(255,255,255,0.18)";for(let A=68;A<256;A+=10)w.fillRect(y+3,A,x-6,4)}w.fillStyle="#caa64a",w.fillRect(y+x-14,62+194*.52,5,10)}});u(64,70,128,104),m(300,84,["#6b4a2e","#7c5a3a","#4a5560","#8a8d90"][Math.floor(a()*4)],0),f(430,70,52,40),d(576,70,120,104,"#7a5a3c"),u(832,78,112,96);for(let y=0;y<40;y++){let x=a()*1024;s.fillStyle=`rgba(90,80,70,${.04+a()*.06})`,s.fillRect(x,190+a()*20,2+a()*4,30+a()*40)}let _=s.getImageData(0,0,i,t).data,g=o.getImageData(0,0,i,t).data,p=new Uint8Array(i*t*4);for(let y=0;y<i*t;y++)p[y*4]=_[y*4],p[y*4+1]=_[y*4+1],p[y*4+2]=_[y*4+2],p[y*4+3]=g[y*4];let v=new Uint8Array(i*t*4);for(let y=0;y<t;y++)v.set(p.subarray((t-1-y)*i*4,(t-y)*i*4),y*i*4);return xr(v,i,t,!0)})}function Yo(){return ke("wall",()=>{let i=je,t=je>>2,e=ve(64,31),n=ve(16,33),s=new Uint8Array(i*t*4),r=new Float32Array(i*t);for(let o=0;o<t;o++)for(let a=0;a<i;a++){let c=a/i,l=o/t,h=e(c*64*3,l*64*.5*2),u=an(n,c*16,l*4,3),d=235*(.9+.12*h)*(.88+.2*u),f=1;l<.12&&(d*=.82+l),l>.93&&(d*=.92);let m=(o*i+a)*4;s[m]=d,s[m+1]=d,s[m+2]=d*.98,s[m+3]=255*f,r[o*i+a]=h*.6}return{map:xr(s,i,t,!0),normalMap:qo(r,i,t,1.5)}})}function $u(){return ke("brick",()=>{let i=je,t=Sn(41),e=ve(64,43),n=i/6,s=i/16,r=[];for(let o=0;o<200;o++)r.push(t());return Un(i,i,(o,a)=>{let c=Math.floor(a/s),l=c%2*n/2,h=Math.floor((o+l)/n),u=(o+l)%n/n,d=a%s/s,f=u<.05||d<.12,m=r[(c*7+h*13)%200],_=e(o/i*64,a/i*64);if(f)return[175+_*20,165+_*20,150+_*20,0,0];let g=.75+.3*m;return[196*g*(.9+.15*_),104*g*(.9+.15*_),66*g*(.9+.15*_),1,0]},2,!0)})}function Is(){return ke("asph",()=>{let i=je,t=ve(256,51),e=ve(16,53),n=ve(8,55);return Un(i,i,(s,r)=>{let o=s/i,a=r/i,c=t(o*256,a*256),l=an(e,o*16,a*16,4),h=an(n,o*8,a*8,2),u=72*(.84+.32*c)*(.92+.16*l);h>.7&&(u*=.92),h<.22&&(u*=1.05);let d=Math.abs(o*8/3.5%1-.5);return u*=1-.06*Math.exp(-Math.pow((d-.22)/.06,2)),c>.93&&(u*=1.6),[u,u,u*1.02,c*.5]},1.6)})}function Ju(){return ke("pav",()=>{let i=je,t=Sn(61),e=ve(128,63),n=ve(16,65),s=12,r=20,o=[];for(let a=0;a<s*r*2;a++)o.push([t(),t(),t()]);return Un(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(h),d=l+u%2*.5+o[u*s%o.length][2]*.3,f=Math.floor(d),m=d-f,_=h-u,g=Math.min(m,1-m)/.5,p=Math.min(_,1-_)/.5,v=Math.min(g*2.2,p*1.4,1),y=Math.sqrt(Math.max(0,v)),x=o[(u*s+f%s)%o.length],P=e(a/i*128,c/i*128),S=an(n,a/i*16,c/i*16,3);if(v<.18){let E=.55+.3*S;return[92*E+20,84*E+18,70*E+12,0]}let w=(.68+.36*x[0])*(.85+.25*P)*(.85+.25*S),T=x[1];return[150*w+(T>.8?18:0),142*w+(T>.8?8:0),132*w,y*.9+P*.1]},3.2)})}function Ku(){return ke("dirt",()=>{let i=je,t=ve(128,71),e=ve(16,73),n=Sn(75),s=[];for(let o=0;o<500;o++)s.push([n()*i,n()*i,1+n()*2.5,n()]);return Un(i,i,(o,a)=>{let c=o/i,l=a/i,h=t(c*128,l*128),u=an(e,c*16,l*16,4),d=Math.abs(c*6/3%1-.5),f=Math.exp(-Math.pow((d-.25)/.07,2)),m=(.8+.3*u)*(.9+.2*h);return m*=1-.1*f,[178*m,128*m,88*m,h*.5+u*.8-f*.4]},2.5)})}function Ls(){return ke("side",()=>{let i=je,t=ve(128,81),e=ve(8,83),n=Sn(85),s=[];for(let r=0;r<64;r++)s.push(n());return Un(i,i,(r,o)=>{let a=r/i*2,c=o/i*2,l=a%1,h=c%1,u=l<.012||h<.012||l>.988||h>.988,d=(Math.floor(a)+Math.floor(c)*2)%64,f=t(r/i*128,o/i*128),m=an(e,r/i*8,o/i*8,3),_=192*(.93+.07*s[d])*(.92+.1*f)*(.88+.2*m);return u&&(_*=.78),[_,_*.975,_*.94,u?0:.4+f*.2]},1.6)})}function Zo(){return ke("gd",()=>{let i=je,t=Sn(91),[e,n]=Mi(i,i);n.fillStyle="rgb(118,118,118)",n.fillRect(0,0,i,i);let s=i/512;for(let u=0;u<26e3*s*s;u++){let d=60+t()*140;n.strokeStyle=`rgba(${d},${d},${d},0.55)`,n.lineWidth=.8+t()*1.2;let f=t()*i,m=t()*i,_=t()*Math.PI*2,g=(2+t()*5)*s;n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(_)*g,m+Math.sin(_)*g),n.stroke()}let r=n.getImageData(0,0,i,i).data,[o,a]=Mi(i,i);a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,i,i);for(let u=0;u<9e3*s*s;u++){let d=70+t()*130;a.fillStyle=`rgba(${d},${d},${d},${.4+t()*.5})`,a.beginPath(),a.ellipse(t()*i,t()*i,(.6+t()*2.2)*s,(.5+t()*1.8)*s,t()*3,0,7),a.fill()}let c=a.getImageData(0,0,i,i).data,l=new Uint8Array(i*i*4),h=new Float32Array(i*i);for(let u=0;u<i*i;u++)l[u*4]=r[u*4],l[u*4+1]=c[u*4],l[u*4+2]=128,l[u*4+3]=255,h[u]=(r[u*4]*.5+c[u*4]*.5)/255;return{map:xr(l,i,i,!1),normalMap:qo(h,i,i,2.5)}})}function Ul(i=0){return ke("leaf"+i,()=>{let t=Ps?128:256,[e,n]=Mi(t,t),s=Sn(101+i);n.clearRect(0,0,t,t);let r=i===1?520:700,o=t/256;n.fillStyle=i===1?"rgb(130,150,70)":"rgb(170,195,140)",n.beginPath(),n.arc(t/2,t/2,9*o,0,7),n.fill();for(let c=0;c<r;c++){let l=s()*Math.PI*2,h=Math.pow(s(),.6)*t*.46,u=t/2+Math.cos(l)*h,d=t/2+Math.sin(l)*h,f=s(),m=i===1?[120+f*60,140+f*60,60+f*30]:[150+f*80,175+f*70,120+f*60];n.fillStyle=`rgb(${m[0]|0},${m[1]|0},${m[2]|0})`,n.save(),n.translate(u,d),n.rotate(s()*Math.PI*2),n.beginPath(),n.ellipse(0,0,(i===1?7:6)*o*(.7+s()*.6),(i===1?3.2:3)*o*(.7+s()*.5),0,0,7),n.fill(),n.restore()}let a=Xo(e,!0);return a.wrapS=a.wrapT=zn,a})}function Nl(){return ke("frond",()=>{let i=Ps?64:128,t=Ps?256:512,[e,n]=Mi(i,t);n.clearRect(0,0,i,t);let s=Sn(111);n.strokeStyle="#7a8a4a",n.lineWidth=3*i/128,n.beginPath(),n.moveTo(i/2,0),n.lineTo(i/2,t),n.stroke();for(let o=6;o<t;o+=5*t/512){let a=i*.48*Math.sin(Math.min(1,o/t*1.15)*Math.PI*.95+.15);for(let c of[-1,1]){let l=s();n.strokeStyle=`rgb(${70+l*40|0},${110+l*45|0},${40+l*25|0})`,n.lineWidth=(2.4+s())*i/128,n.beginPath(),n.moveTo(i/2,o),n.quadraticCurveTo(i/2+c*a*.5,o+6*t/512,i/2+c*a,o+16*t/512+s()*6),n.stroke()}}let r=Xo(e,!0);return r.wrapS=r.wrapT=zn,r})}function $o(){return ke("ta",()=>{let i=je,t=ve(64,121),e=Sn(123),n=[];for(let s=0;s<32;s++)n.push(e());return Un(i,i,(s,r)=>{let o=s/i*2,a=r/i*2,c=Math.floor(a),l=o+c%2*.5,h=Math.floor(l),u=l-h,d=a-c,f=u<.015||d<.015,m=n[(c*5+h*3)%32],_=t(s/i*64,r/i*64),g=f?.72:(.9+.07*m)*(.95+.06*_);return[205*g,192*g,170*g,f?0:.6+.1*_]},2)})}function Ds(){return ke("conc",()=>{let i=je,t=ve(128,131),e=ve(8,133);return Un(i,i,(n,s)=>{let r=n/i,o=s/i,a=t(r*128,o*128),c=an(e,r*8,o*8,3),l=r<.004||o<.006,h=200*(.94+.06*a)*(.93+.1*c);return l&&(h*=.88),[h,h*.985,h*.96,a*.3+(l?-.4:0)]},1)})}function ju(){return ke("bal",()=>{let i=je,t=Sn(141),[e,n]=Mi(i,i);n.fillStyle="#5b5650",n.fillRect(0,0,i,i);let s=i/512;for(let a=0;a<14e3*s*s;a++){let c=70+t()*110;n.fillStyle=`rgb(${c+8|0},${c|0},${c-8|0})`,n.beginPath(),n.ellipse(t()*i,t()*i,(1.5+t()*3)*s,(1.2+t()*2.5)*s,t()*3,0,7),n.fill()}let r=n.getImageData(0,0,i,i).data,o=new Float32Array(i*i);for(let a=0;a<i*i;a++)o[a]=r[a*4]/255;return{map:Xo(e,!0),normalMap:qo(o,i,i,3)}})}function Qu(){return ke("gate",()=>{let[e,n]=Mi(256,256);n.clearRect(0,0,256,256),n.fillStyle="#fff",n.fillRect(0,128,256,10),n.fillRect(0,246,256,10),n.fillRect(0,186,256,5);for(let r=0;r<256;r+=12)n.fillRect(r,128,4,128);n.fillRect(0,128,6,128),n.fillRect(256/2-3,128,6,128),n.fillStyle="#f0f0f0",n.fillRect(0,0,256,128),n.fillStyle="rgba(0,0,0,0.18)";for(let r=4;r<128;r+=8)n.fillRect(0,r,256,2);n.clearRect(0,6,256,18),n.fillStyle="#fff";for(let r=0;r<256;r+=10)n.fillRect(r,6,3,18);n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(256/2-1,0,2,128);let s=Xo(e,!0);return s.flipY=!0,s})}var Ps,je,Vu,ii=Ae(()=>{we();Ps=(()=>{try{let i=new URLSearchParams(location.search).get("q")||localStorage.getItem("aimores3d_q");return i==="low"||i==="medium"||!i&&(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700)}catch{return!1}})(),je=Ps?256:512;Vu={}});function Ko(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}function td(i,t,e){let n=i.GW,s=i.GH,r=new Float32Array(n*s*3),o=new Float32Array(n*s*2);for(let S=0;S<s;S++)for(let w=0;w<n;w++){let T=S*n+w,E=i.XMIN+w*i.G,M=i.ZMIN+S*i.G;r[T*3]=E,r[T*3+1]=i.raw(S,w),r[T*3+2]=M,o[T*2]=(E-i.XMIN)/(i.XMAX-i.XMIN),o[T*2+1]=1-(M-i.ZMIN)/(i.ZMAX-i.ZMIN)}let a=new Uint32Array((n-1)*(s-1)*6),c=0;for(let S=0;S<s-1;S++)for(let w=0;w<n-1;w++){let T=S*n+w,E=T+1,M=T+n,A=M+1;a[c++]=T,a[c++]=M,a[c++]=E,a[c++]=E,a[c++]=M,a[c++]=A}let l=new oe;l.setAttribute("position",new jt(r,3)),l.setAttribute("uv",new jt(o,2)),l.setIndex(new jt(a,1)),l.computeVertexNormals();let h=new Float32Array(n*s*2);for(let S=0;S<n*s;S++)h[S*2]=r[S*3]/3.5,h[S*2+1]=r[S*3+2]/3.5;l.setAttribute("uv1",new jt(h,2));let u=Zo();u.normalMap.channel=1;let d=new Rt({map:t,roughness:.97,metalness:0,normalMap:e==="low"?null:u.normalMap,normalScale:new vt(.9,.9)});d.onBeforeCompile=S=>{S.uniforms.gDetail={value:u.map},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos=(modelMatrix*vec4(transformed,1.0)).xyz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
      diffuseColor.rgb*=mix(vec3(1.0+0.10*hp,1.0+0.04*hp,1.0-0.12*hp), vec3(1.0+0.06*hp,1.0-0.02*hp,1.0-0.06*hp), 1.0-veg);`)};let f=new Lt(l,d);f.receiveShadow=!0,f.name="terrain";let m=[],_=S=>{for(let w=0;w<S.length-1;w++){let[T,E]=S[w],[M,A]=S[w+1],F=i.at(T,E),U=i.at(M,A);m.push(T,F,E,M,U,A,T,F-60,E,M,U,A,M,U-60,A,T,F-60,E)}},g=[];for(let S=0;S<n;S++)g.push([i.XMIN+S*i.G,i.ZMIN]);_(g);let p=[];for(let S=n-1;S>=0;S--)p.push([i.XMIN+S*i.G,i.ZMIN+(s-1)*i.G]);_(p);let v=[];for(let S=s-1;S>=0;S--)v.push([i.XMIN,i.ZMIN+S*i.G]);_(v);let y=[];for(let S=0;S<s;S++)y.push([i.XMIN+(n-1)*i.G,i.ZMIN+S*i.G]);_(y);let x=new oe;x.setAttribute("position",new Xt(m,3)),x.computeVertexNormals();let P=new Lt(x,new Rt({color:5662010,roughness:1,side:Vt}));return f.add(P),f}function ed(i,t,e,n){let s=new Uint16Array(t),r=i.BG,o=i.BR,a=2*o/(r-1),c=(E,M)=>(E=Math.max(0,Math.min(r-1,E)),M=Math.max(0,Math.min(r-1,M)),i.HB+s[E*r+M]/10),l=(E,M)=>{let A=(E+o)/a,F=(M+o)/a,U=Math.floor(A),B=Math.floor(F),O=A-U,D=F-B;return(c(B,U)*(1-O)+c(B,U+1)*O)*(1-D)+(c(B+1,U)*(1-O)+c(B+1,U+1)*O)*D},h=(E,M,A)=>{let F=Math.max(e.XMIN,Math.min(e.XMAX,E)),U=Math.max(e.ZMIN,Math.min(e.ZMAX,M)),B=Math.hypot(E-F,M-U);if(B<.5)return e.at(F,U)-6;let O=Math.min(1,B/700),D=O*O*(3-2*O);return(e.at(F,U)-.6)*(1-D)+A*D},u=new se;u.name="backdrop";let d=3600,f=181,m=[],_=[];for(let E=0;E<f;E++)for(let M=0;M<f;M++){let A=-d+M*2*d/(f-1),F=-d+E*2*d/(f-1);m.push(A,h(A,F,l(A,F)),F),_.push((A+d)/(2*d),1-(F+d)/(2*d))}let g=[];for(let E=0;E<f-1;E++)for(let M=0;M<f-1;M++){let A=E*f+M;g.push(A,A+f,A+1,A+1,A+f,A+f+1)}let p=new oe;p.setAttribute("position",new Xt(m,3)),p.setAttribute("uv",new Xt(_,2)),p.setIndex(g),p.computeVertexNormals();let v=new Lt(p,new Rt({map:n,roughness:1}));v.receiveShadow=!0,u.add(v);let y=[],x=[],P=new Yt;for(let E=0;E<r;E++)for(let M=0;M<r;M++){let A=-o+M*a,F=-o+E*a,U=c(E,M);Math.abs(A)<d-50&&Math.abs(F)<d-50&&(U-=60),y.push(A,U,F)}let S=[];for(let E=0;E<r-1;E++)for(let M=0;M<r-1;M++){let A=E*r+M;S.push(A,A+r,A+1,A+1,A+r,A+r+1)}let w=new oe;w.setAttribute("position",new Xt(y,3)),w.setIndex(S),w.computeVertexNormals();let T=w.attributes.normal;for(let E=0;E<y.length/3;E++){let A=1-T.getY(E),F=Math.min(1,Math.max(0,(A-.3)*3)),U=Math.random()*.04;P.setRGB(.2+U,.27+U,.13),P.lerp(new Yt(.36,.33,.28),F*.8),x.push(P.r,P.g,P.b)}return w.setAttribute("color",new Xt(x,3)),u.add(new Lt(w,new Rt({vertexColors:!0,roughness:1}))),u}var Jo,nd=Ae(()=>{we();ii();Jo=class{constructor(t,e){Object.assign(this,t),this.a=new Uint16Array(e)}raw(t,e){return t=Math.max(0,Math.min(this.GH-1,t)),e=Math.max(0,Math.min(this.GW-1,e)),this.HB+this.a[t*this.GW+e]/100}at(t,e){let n=(t-this.XMIN)/this.G,s=(e-this.ZMIN)/this.G,r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=this.raw(o,r),h=this.raw(o,r+1),u=this.raw(o+1,r),d=this.raw(o+1,r+1);return a+c<=1?l+(h-l)*a+(u-l)*c:d+(u-d)*(1-a)+(h-d)*(1-c)}}});function Tt(i,t,e){let n=new Yt;return n.setRGB(i/255,t/255,e/255,_e),[n.r,n.g,n.b]}function kt(i){let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function jo(i){let t=null;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=s[0]-n[0],o=s[1]-n[1],a=Math.hypot(r,o);if(a<.01)continue;r/=a,o/=a;let c=-o,l=r,h=1e9,u=-1e9,d=1e9,f=-1e9;for(let _ of i){let g=_[0]*r+_[1]*o,p=_[0]*c+_[1]*l;h=Math.min(h,g),u=Math.max(u,g),d=Math.min(d,p),f=Math.max(f,p)}let m=(u-h)*(f-d);if(!t||m<t.area){let _=(h+u)/2,g=(d+f)/2;t={area:m,cx:_*r+g*c,cz:_*o+g*l,ux:r,uz:o,a:(u-h)/2,b:(f-d)/2}}}if(t.a<t.b){let e=t.a;t.a=t.b,t.b=e;let n=t.ux;t.ux=-t.uz,t.uz=n}return t}function Fl(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}var qt,Hn=Ae(()=>{we();qt=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,c,l){let h,u,d;if(c)[h,u,d]=c;else{let f=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],m=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];h=f[1]*m[2]-f[2]*m[1],u=f[2]*m[0]-f[0]*m[2],d=f[0]*m[1]-f[1]*m[0];let _=Math.hypot(h,u,d)||1;h/=_,u/=_,d/=_}if(this.p.push(...t,...e,...n),this.n.push(h,u,d,h,u,d,h,u,d),this.u.push(...s,...r,...o),l)this.c.push(...l[0],...l[1],...l[2]);else{let f=a||[1,1,1];this.c.push(...f,...f,...f)}}quad(t,e,n,s,r,o,a,c,l,h,u){this.tri(t,e,n,r,o,a,l,h,u?[u[0],u[1],u[2]]:null),this.tri(t,n,s,r,a,c,l,h,u?[u[0],u[2],u[3]]:null)}geometry(){let t=new oe;return t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("normal",new Xt(this.n,3)),t.setAttribute("uv",new Xt(this.u,2)),t.setAttribute("color",new Xt(this.c,3)),t.computeBoundingSphere(),t}get count(){return this.p.length/9}}});function Qo(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function ta(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Vx(i,t,e,n,s,r,o=1){let a=i.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(r()-.5)*s;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let m=((l+d)*t+(h+f))*4;c[m]=n[0]+u,c[m+1]=n[1]+u,c[m+2]=n[2]+u,c[m+3]=255}}i.putImageData(a,0,0)}function ea(i,t=!0,e=!0){let n=new sn(i);return t&&(n.wrapS=n.wrapT=Pn),n.anisotropy=8,e&&(n.colorSpace=_e),n.generateMipmaps=!0,n.minFilter=Cn,n}function id(){let[i,t]=ta(256,256),e=Qo(9);Vx(t,256,256,[196,192,184],16,e),t.strokeStyle="rgba(110,105,98,0.55)",t.lineWidth=2;for(let n=0;n<=256;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,256),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();for(let n=0;n<60;n++)t.fillStyle=`rgba(90,85,80,${e()*.08})`,t.fillRect(e()*256,e()*256,10+e()*30,10+e()*30);return ea(i)}function sd(){let[t,e]=ta(512,512),n=Qo(21);e.fillStyle="#8f8a86",e.fillRect(0,0,512,512);let s=16;e.save(),e.translate(512/2,512/2),e.rotate(Math.PI/4),e.translate(-512,-512);for(let r=-2;r<2*512/s+2;r++)for(let o=-2;o<2*512/s+2;o++){let a=n()*22-11,c=n()<.5?6:0;e.fillStyle=`rgb(${176+a+c|0},${168+a|0},${162+a-c/2|0})`;let l=r*s,h=o*s;(r+o)%2===0?e.fillRect(l+1,h+1,2*s-2,s-2):e.fillRect(l+1,h+1,s-2,2*s-2)}return e.restore(),ea(t)}function Ol(){let[i,t]=ta(128,128),e=Qo(41);t.fillStyle="#fff",t.fillRect(0,0,128,128);for(let n=0;n<800;n++){let s=220+e()*35;t.fillStyle=`rgba(${s},${s},${s},0.6)`,t.fillRect(e()*128,e()*128,2,2)}return t.fillStyle="rgba(140,140,140,0.3)",t.fillRect(0,116,128,12),ea(i)}function rd(){let[i,t]=ta(256,256),e=Qo(51);t.fillStyle="#fff",t.fillRect(0,0,256,256);let n=8,s=10;for(let r=0;r<n;r++){for(let o=0;o<s;o++){let a=.82+e()*.18,c=Math.floor(255*a),l=o*256/s,h=r*256/n,u=t.createLinearGradient(l,0,l+256/s,0);u.addColorStop(0,`rgb(${c*.78|0},${c*.78|0},${c*.78|0})`),u.addColorStop(.5,`rgb(${c},${c},${c})`),u.addColorStop(1,`rgb(${c*.72|0},${c*.72|0},${c*.72|0})`),t.fillStyle=u,t.fillRect(l,h,256/s,256/n)}t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(0,(r+1)*256/n-4,256,4)}for(let r=0;r<40;r++)t.fillStyle=`rgba(40,30,20,${e()*.12})`,t.fillRect(e()*256,e()*256,20+e()*40,10+e()*20);return ea(i)}var Bl=Ae(()=>{we()});function Gx(i){let t=zl.reduce((e,n)=>e+n,0)*i;for(let e=0;e<zl.length;e++)if(t-=zl[e],t<=0)return od[e];return od[0]}function ia(i){let t=new Rt(i);return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#if defined( USE_COLOR ) && defined( USE_MAP )
    diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
  #elif defined( USE_COLOR )
    diffuseColor.rgb *= vColor.rgb;
  #endif
  diffuseColor.a = 1.0;`)},t.customProgramCacheKey=()=>"paintmask",t}function Wx(i){let[t,e,n]=i.rc,s=.3*t+.59*e+.11*n;if(i.rm==="ceramic"){let o=Vi(165/Math.max(60,s),.75,1.35),a=[t*o,e*o*.97,n*o*.92],c=(a[0]+a[1]+a[2])/3;return a=a.map(h=>c+(h-c)*.9),kt(i.p[0][0]*3.3+i.p[0][1])<.25&&(a=a.map(h=>h*.82)),Tt(Vi(a[0]*1.18,0,255),Vi(a[1]*1.12,0,255),Vi(a[2]*1.1,0,255))}if(i.rm==="fiber"){let o=Vi(s*1.05,170,225);return Tt(o,o*.99,o*.97)}if(i.rm==="metal"){let o=Vi(s*1,185,250),a=kt(i.p[0][1]*1.7);return a<.06?Tt(120,150,175):a<.09?Tt(170,70,60):Tt(o,o,o*1.01)}let r=Vi(s*1.02,140,225);return Tt(r,r*.985,r*.96)}function ad(i,t,e,n,s){let r=new qt,o=new qt,a=new qt,c=new qt,l=new qt,h=new qt,u=new qt,d=[],f=[],m=[],_=Math.tan(24*Math.PI/180),g=Math.tan(12*Math.PI/180),p=Math.tan(8*Math.PI/180),v=s==="low";for(let U=0;U<i.buildings.length;U++){let B=i.buildings[U];if(n&&n(B))continue;let O=B.p.slice();Fl(O)<0&&O.reverse();let D=1e9,V=-1e9;for(let[ht,X]of O){let R=t.at(ht,X);D=Math.min(D,R),V=Math.max(V,R)}let C=V+B.h,k=D-.5,G=Math.abs(Fl(O)),it=B.osm&&/Esta|train/i.test(B.osm),ft=it?[250,250,246]:Gx(B.hv),pt=Tt(...ft),Z=G>=450||B.r==="shed"||B.rm==="metal"&&G>220,tt=!Z&&G>=30||it?r:o,mt=Math.floor(kt(U*1.37)*4),ot=pt.map(ht=>ht*.62),bt=Math.min(C,V+1.3);for(let ht=0;ht<O.length;ht++){let[X,R]=O[ht],[b,z]=O[(ht+1)%O.length],j=Math.hypot(b-X,z-R);if(j<.05)continue;let ct=j/3.2,at=(k-V)/3,Mt=(bt-V)/3,dt=B.h/3;tt.quad([X,k,R],[X,bt,R],[b,bt,z],[b,k,z],[mt,at],[mt,Mt],[mt+ct,Mt],[mt+ct,at],ot,null,[ot,pt,pt,ot]),tt.quad([X,bt,R],[X,C,R],[b,C,z],[b,bt,z],[mt,Mt],[mt,dt],[mt+ct,dt],[mt+ct,Mt],pt),mt+=ct}let yt=Wx(B),et=jo(O),wt=et.ux,W=et.uz,q=-W,I=wt,lt=(ht,X,R)=>[et.cx+wt*ht+q*X,R,et.cz+W*ht+I*X],H=(ht,X,R,b)=>{u.quad([ht[0],ht[1]-R,ht[2]],[X[0],X[1]-R,X[2]],X,ht,[0,0],[1,0],[1,1],[0,1],b)},J=kt(U*7.7)<.6?Tt(236,234,228):Tt(120,86,60),$=B.rm;if($==="ceramic"&&B.r==="flat"&&G>300&&($="fiber"),$==="ceramic"){let X=et.a+.55,R=et.b+.55,b=1.2;if(B.r==="gable"||G>500||et.a>2.6*et.b){let z=C+R*_*.85,j=lt(-X,-R,C),ct=lt(X,-R,C),at=lt(X,R,C),Mt=lt(-X,R,C),dt=lt(-X,0,z),Et=lt(X,0,z),At=Math.hypot(R,z-C);a.quad(j,dt,Et,ct,[0,0],[0,At/b],[2*X/b,At/b],[2*X/b,0],yt),a.quad(at,Et,dt,Mt,[0,0],[0,At/b],[2*X/b,At/b],[2*X/b,0],yt),o.tri(lt(-et.a,-et.b,C),lt(-et.a,et.b,C),lt(-et.a,0,z-.55*_*.85),[0,0],[1,0],[.5,1],pt),o.tri(lt(et.a,et.b,C),lt(et.a,-et.b,C),lt(et.a,0,z-.55*_*.85),[0,0],[1,0],[.5,1],pt),H(j,ct,.2,J),H(at,Mt,.2,J),Gi(a,dt,Et,yt)}else{let z=C+R*_,j=Math.max(0,X-R),ct=lt(-X,-R,C),at=lt(X,-R,C),Mt=lt(X,R,C),dt=lt(-X,R,C),Et=lt(-j,0,z),At=lt(j,0,z),St=Math.hypot(R,z-C);a.quad(ct,Et,At,at,[0,0],[(X-j)/b,St/b],[(X+j)/b,St/b],[2*X/b,0],yt),a.quad(Mt,At,Et,dt,[0,0],[(X-j)/b,St/b],[(X+j)/b,St/b],[2*X/b,0],yt),a.tri(dt,Et,ct,[0,0],[R/b,St/b],[2*R/b,0],yt),a.tri(at,At,Mt,[0,0],[R/b,St/b],[2*R/b,0],yt),H(ct,at,.2,J),H(at,Mt,.2,J),H(Mt,dt,.2,J),H(dt,ct,.2,J),j>.2&&Gi(a,Et,At,yt),Gi(a,Et,ct,yt,.08),Gi(a,Et,dt,yt,.08),Gi(a,At,at,yt,.08),Gi(a,At,Mt,yt,.08)}h.quad(lt(-X,-R,C-.03),lt(X,-R,C-.03),lt(X,R,C-.03),lt(-X,R,C-.03),[0,0],[0,0],[0,0],[0,0],Tt(150,140,128))}else if($==="fiber"||$==="metal"){let ht=$==="metal"?.3:.4,X=et.a+ht,R=et.b+ht,b=$==="metal"?l:c,z=$==="metal"?1:2.2,j=et.a*et.b*4<G*1.3;if($==="metal"&&G>120||j&&G>70&&kt(U*2.9)<.55||Z){let at=$==="metal"?p:g,Mt=C+R*at,dt=lt(-X,-R,C),Et=lt(X,-R,C),At=lt(X,R,C),St=lt(-X,R,C),Dt=lt(-X,0,Mt),Ft=lt(X,0,Mt),Ht=Math.hypot(R,Mt-C);b.quad(dt,Dt,Ft,Et,[0,0],[0,Ht/z],[2*X/z,Ht/z],[2*X/z,0],yt),b.quad(At,Ft,Dt,St,[0,0],[0,Ht/z],[2*X/z,Ht/z],[2*X/z,0],yt),o.tri(lt(-et.a,-et.b,C),lt(-et.a,et.b,C),lt(-et.a,0,Mt-ht*at),[0,0],[1,0],[.5,1],pt),o.tri(lt(et.a,et.b,C),lt(et.a,-et.b,C),lt(et.a,0,Mt-ht*at),[0,0],[1,0],[.5,1],pt),Gi(b,Dt,Ft,yt.map(It=>It*.92),.18),H(dt,Et,.08,yt.map(It=>It*.8)),H(At,St,.08,yt.map(It=>It*.8))}else{let at=g*.9,Mt=C+2*R*at,dt=lt(-X,-R,C+.05),Et=lt(X,-R,C+.05),At=lt(X,R,Mt),St=lt(-X,R,Mt),Dt=Math.hypot(2*R,Mt-C);b.quad(dt,St,At,Et,[0,0],[0,Dt/z],[2*X/z,Dt/z],[2*X/z,0],yt),o.tri(lt(-et.a,-et.b,C),lt(-et.a,et.b,C),lt(-et.a,et.b,Mt-ht*at),[0,0],[1,0],[1,1],pt),o.tri(lt(et.a,et.b,C),lt(et.a,-et.b,C),lt(et.a,et.b,Mt-ht*at),[0,0],[1,0],[1,1],pt),o.quad(lt(-et.a,et.b,C),lt(et.a,et.b,C),lt(et.a,et.b,Mt-ht*at),lt(-et.a,et.b,Mt-ht*at),[0,0],[1,0],[1,1],[0,1],pt),H(dt,Et,.06,yt.map(Ft=>Ft*.8))}h.quad(lt(-X,-R,C),lt(X,-R,C),lt(X,R,C),lt(-X,R,C),[0,0],[0,0],[0,0],[0,0],Tt(130,126,120)),$==="fiber"&&!Z&&kt(U*5.3)<.35&&d.push([et.cx+wt*et.a*.5,C+.15+R*.1,et.cz+W*et.a*.5,kt(U)])}else{let ht=jn.triangulateShape(O.map(ct=>new vt(ct[0],ct[1])),[]);for(let[ct,at,Mt]of ht){let dt=O[ct],Et=O[at],At=O[Mt];h.tri([dt[0],C,dt[1]],[At[0],C,At[1]],[Et[0],C,Et[1]],[dt[0]/6,dt[1]/6],[At[0]/6,At[1]/6],[Et[0]/6,Et[1]/6],yt,[0,1,0])}let X=.55+.4*kt(U*3.1),R=C+X,b=.15,z=O.length;for(let ct=0;ct<z;ct++){let[at,Mt]=O[ct],[dt,Et]=O[(ct+1)%z],At=Math.hypot(dt-at,Et-Mt);if(At<.05)continue;let St=(Et-Mt)/At,Dt=-(dt-at)/At;o.quad([at,C,Mt],[at,R,Mt],[dt,R,Et],[dt,C,Et],[0,0],[0,.2],[1,.2],[1,0],pt);let Ft=at-St*b,Ht=Mt-Dt*b,It=dt-St*b,Qt=Et-Dt*b;o.quad([It,C,Qt],[It,R,Qt],[Ft,R,Ht],[Ft,C,Ht],[0,0],[0,.2],[1,.2],[1,0],pt.map($t=>$t*.85)),u.quad([at,R+.04,Mt],[Ft,R+.04,Ht],[It,R+.04,Qt],[dt,R+.04,Et],[0,0],[0,0],[0,0],[0,0],Tt(205,202,196))}let j=kt(U*4.1);if(G>22&&j<.82){let ct=[et.cx+wt*et.a*(.25+.3*kt(U*1.1))+q*et.b*.3*(kt(U*1.9)-.5),C,et.cz+W*et.a*(.25+.3*kt(U*1.1))+I*et.b*.3*(kt(U*1.9)-.5),kt(U*6.6)];if((j<.62?d:f).push(ct),B.h>5&&G>70&&kt(U*8.8)<.5){let at=[ct[0]-wt*1.6,ct[2]-W*1.6],Mt=1.3,dt=[[-Mt,-Mt],[Mt,-Mt],[Mt,Mt],[-Mt,Mt]].map(([Et,At])=>[at[0]+wt*Et+q*At,at[1]+W*Et+I*At]);for(let Et=0;Et<4;Et++){let At=dt[Et],St=dt[(Et+1)%4];o.quad([At[0],C,At[1]],[At[0],C+2.3,At[1]],[St[0],C+2.3,St[1]],[St[0],C,St[1]],[0,0],[0,.76],[.8,.76],[.8,0],pt)}h.quad([dt[0][0],C+2.35,dt[0][1]],[dt[3][0],C+2.35,dt[3][1]],[dt[2][0],C+2.35,dt[2][1]],[dt[1][0],C+2.35,dt[1][1]],[0,0],[0,1],[1,1],[1,0],yt,[0,1,0]),ct[1]=C+2.35,ct[0]=at[0],ct[2]=at[1]}}kt(U*9.4)<.12&&G>30&&m.push([et.cx-wt*et.a*.6,R,et.cz-W*et.a*.6,kt(U)])}}let y=new se;y.name="buildings";let x=Zu(),P=(U,B,O=!0)=>{let D=new Lt(U.geometry(),B);return D.castShadow=O,D.receiveShadow=!0,y.add(D),D};P(r,ia({vertexColors:!0,map:x,roughness:.88,side:Vt}));let S=Yo();P(o,new Rt({vertexColors:!0,map:S.map,normalMap:S.normalMap,normalScale:new vt(.4,.4),roughness:.92,side:Vt}));let w=Wu(),T=Xu(),E=qu(),M=Yu();P(a,new Rt({vertexColors:!0,map:w.map,normalMap:w.normalMap,normalScale:new vt(1,1),roughness:.78,side:Vt})),P(c,new Rt({vertexColors:!0,map:T.map,normalMap:T.normalMap,normalScale:new vt(1.1,1.1),roughness:.86,side:Vt})),P(l,new Rt({vertexColors:!0,map:E.map,normalMap:E.normalMap,normalScale:new vt(1.2,1.2),roughness:.38,metalness:.55,side:Vt})),P(h,new Rt({vertexColors:!0,map:M.map,normalMap:M.normalMap,roughness:.95,side:Vt})),P(u,new Rt({vertexColors:!0,roughness:.8,side:Vt}));let A=(()=>{let U=[new vt(0,0),new vt(.62,0),new vt(.72,.75),new vt(.76,.8),new vt(.74,.86),new vt(.5,1),new vt(.15,1.06),new vt(0,1.07)];return new To(U,v?8:16)})(),F=(U,B,O,D=1)=>{if(!U.length)return;let V=new ze(B,O,U.length),C=new re,k=new Re,G=new N,it=new N,ft=new N(0,1,0);U.forEach((pt,Z)=>{let tt=(.85+.35*pt[3])*D;G.set(tt,tt,tt),k.setFromAxisAngle(ft,pt[3]*6.28),it.set(pt[0],pt[1],pt[2]),C.compose(it,k,G),V.setMatrixAt(Z,C)}),V.castShadow=!0,V.receiveShadow=!0,y.add(V)};if(F(d,A,new Rt({color:2057136,roughness:.45})),F(f,new fe(.7,.62,1,v?8:14).translate(0,.5,0),new Rt({color:10131600,roughness:.9})),m.length){let U=new En(.45,10,6,0,Math.PI*2,0,.9).rotateX(-1.1).translate(0,.7,0);F(m,U,new Rt({color:14211284,roughness:.6,side:Vt}))}return e.add(y),y}function Gi(i,t,e,n,s=.14){let r=e[0]-t[0],o=e[2]-t[2],a=Math.hypot(r,o)||1,c=-o/a*s,l=r/a*s,h=n.map(u=>u*.85);i.quad([t[0]+c,t[1],t[2]+l],[e[0]+c,e[1],e[2]+l],[e[0],e[1]+.09,e[2]],[t[0],t[1]+.09,t[2]],[0,0],[0,0],[0,.1],[0,.1],h),i.quad([t[0],t[1]+.09,t[2]],[e[0],e[1]+.09,e[2]],[e[0]-c,e[1],e[2]-l],[t[0]-c,t[1],t[2]-l],[0,.1],[0,.1],[0,0],[0,0],h)}var od,zl,Vi,kl=Ae(()=>{we();Hn();ii();od=[[240,236,226],[246,240,220],[238,224,180],[244,214,170],[232,196,160],[206,224,236],[200,226,204],[236,190,170],[226,170,130],[214,214,210],[190,186,178],[230,210,120],[250,250,248],[180,206,226],[224,200,216],[200,120,90],[160,190,150],[245,230,160],[210,160,150]],zl=[14,10,8,7,6,5,5,5,3,6,4,3,10,3,1.5,2,2,3,1.5];Vi=(i,t,e)=>Math.max(t,Math.min(e,i))});function cd(i,t,e,n,s){let r=i.meshes,o={asphalt:Is(),paver:Ju(),dirt:Ku(),sidewalk:Ls()},a={asphalt:8,paver:2.4,dirt:6,sidewalk:2},c={asphalt:.09,paver:.09,dirt:.05,sidewalk:.24},l={asphalt:-3,paver:-3,dirt:-2,sidewalk:-4},h={asphalt:.9,paver:.82,dirt:1,sidewalk:.9},u={asphalt:.5,paver:1.4,dirt:.8,sidewalk:.6},d=new se,f=s&&s.exclude;for(let S of["asphalt","paver","dirt","sidewalk"]){let[w,T]=r["m_"+S];if(!T)continue;let E=new Float32Array(e,w,T),M=r["a_"+S]?new Float32Array(e,r["a_"+S][0],r["a_"+S][1]):null;if(f){let V=[],C=[];for(let k=0;k<T/6;k++){let G=(E[k*6]+E[k*6+2]+E[k*6+4])/3,it=(E[k*6+1]+E[k*6+3]+E[k*6+5])/3;if(!f(G,it)){for(let ft=0;ft<6;ft++)V.push(E[k*6+ft]);M&&C.push(M[k])}}E=new Float32Array(V),M&&(M=new Float32Array(C))}let A=E.length/2,F=new Float32Array(A*3),U=new Float32Array(A*2);for(let V=0;V<A;V++){let C=E[V*2],k=E[V*2+1];if(F[V*3]=C,F[V*3+1]=t.at(C,k)+c[S],F[V*3+2]=k,M){let G=M[Math.floor(V/3)],it=Math.cos(G),ft=Math.sin(G);U[V*2]=(-C*ft+k*it)/a[S],U[V*2+1]=(C*it+k*ft)/a[S]}else U[V*2]=C/a[S],U[V*2+1]=k/a[S]}let B=new oe;B.setAttribute("position",new jt(F,3)),B.setAttribute("uv",new jt(U,2)),B.computeVertexNormals();let O=new Rt({map:o[S].map,normalMap:o[S].normalMap,normalScale:new vt(u[S],u[S]),roughness:h[S],polygonOffset:!0,polygonOffsetFactor:l[S],polygonOffsetUnits:l[S]*2}),D=new Lt(B,O);D.receiveShadow=!0,D.name="road_"+S,d.add(D)}let m=new qt;for(let[S,w,T,E]of i.curbs){let M=Math.hypot(T-S,E-w);if(M<.05||f&&f((S+T)/2,(w+E)/2))continue;let A=-(E-w)/M*.07,F=(T-S)/M*.07,U=t.at(S,w),B=t.at(T,E),O=kt(S*.37+w*.11),D=O<.55?Tt(226,225,219):O<.85?Tt(196,194,188):Tt(214,200,120),V=D.map(C=>C*.82);m.quad([S-A,U+.04,w-F],[T-A,B+.04,E-F],[T-A,B+.26,E-F],[S-A,U+.26,w-F],[0,0],[M,0],[M,.2],[0,.2],V),m.quad([T+A,B+.04,E+F],[S+A,U+.04,w+F],[S+A,U+.26,w+F],[T+A,B+.26,E+F],[0,0],[M,0],[M,.2],[0,.2],V),m.quad([S-A,U+.26,w-F],[T-A,B+.26,E-F],[T+A,B+.26,E+F],[S+A,U+.26,w+F],[0,0],[M,0],[M,.15],[0,.15],D,[0,1,0])}let _=Ds(),g=new Lt(m.geometry(),new Rt({vertexColors:!0,map:_.map,roughness:.85,side:Vt}));g.receiveShadow=!0,g.castShadow=!1,d.add(g);let p=new qt,v=Tt(232,232,226),y=Tt(236,186,40);for(let S of i.roads){if(S.s!=="asphalt"||S.b||S.id===1314627854||S.id===1314627855||s&&s.skipIds&&s.skipIds.has(S.id)||!["trunk","tertiary","trunk_link","residential","primary","secondary"].includes(S.hw)||S.w<7)continue;let w=S.hw==="trunk",T=S.p,E=0;for(let M=0;M<T.length-1;M++){let[A,F]=T[M],[U,B]=T[M+1],O=Math.hypot(U-A,B-F);if(O<.1)continue;let D=(U-A)/O,V=(B-F)/O,C=-V,k=D;for(let G=0;G<O;G+=1.5){let it=Math.min(O,G+1.5),pt=(E+G)%8<4,Z=A+D*G,tt=F+V*G,mt=A+D*it,ot=F+V*it,bt=t.at(Z,tt)+.13,yt=t.at(mt,ot)+.13,et=(wt,W,q)=>{p.quad([Z+C*(wt-W),bt,tt+k*(wt-W)],[Z+C*(wt+W),bt,tt+k*(wt+W)],[mt+C*(wt+W),yt,ot+k*(wt+W)],[mt+C*(wt-W),yt,ot+k*(wt-W)],[0,0],[1,0],[1,1],[0,1],q,[0,1,0])};if(w){et(-.12,.06,y),et(.12,.06,y);let wt=S.w/2-.4;et(wt,.07,v),et(-wt,.07,v)}else!S.o&&pt&&et(0,.06,S.hw==="residential"?v:y)}E+=O}}let x=new Rt({vertexColors:!0,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,side:Vt}),P=new Lt(p.geometry(),x);return P.receiveShadow=!0,d.add(P),n.add(d),d}function ld(i,t,e,n){let[s,r]=i.meshes.m_water;if(!r)return null;let o=new Float32Array(e,s,r),a=r/2,c=new Float32Array(a*3),l=i.meta.WL;for(let v=0;v<a;v++)c[v*3]=o[v*2],c[v*3+1]=l,c[v*3+2]=o[v*2+1];let h=new oe;h.setAttribute("position",new jt(c,3)),h.computeVertexNormals();let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),f=d.createImageData(256,256);for(let v=0;v<256;v++)for(let y=0;y<256;y++){let x=Math.sin(v/256*Math.PI*8+Math.sin(y/256*Math.PI*4)*2)*.5+Math.sin(y/256*Math.PI*10+v/40)*.5,P=Math.cos(y/256*Math.PI*6+Math.sin(v/256*Math.PI*6))*.5,S=(v*256+y)*4;f.data[S]=128+x*40,f.data[S+1]=128+P*40,f.data[S+2]=255,f.data[S+3]=255}d.putImageData(f,0,0);let m=new sn(u);m.wrapS=m.wrapT=Pn,m.repeat.set(1,1);let _=new Float32Array(a*2);for(let v=0;v<a;v++)_[v*2]=o[v*2]/40,_[v*2+1]=o[v*2+1]/40;h.setAttribute("uv",new jt(_,2));let g=new Rt({color:3103322,roughness:.12,metalness:.1,normalMap:m,normalScale:new vt(.35,.35),transparent:!0,opacity:.92}),p=new Lt(h,g);return p.receiveShadow=!0,p.userData.tick=v=>{m.offset.set(v*.01,v*.004)},n.add(p),p}function hd(i,t,e){let n=new qt,s=new qt,r=new qt,o=new qt,a=i.wallc.map(p=>Tt(...p)),c=i.gatec.map(p=>Tt(...p)),l=.09;for(let[p,v,y,x,P,S]of i.walls){let w=Math.hypot(y-p,x-v);if(w<.05)continue;let T=-(x-v)/w*l,E=(y-p)/w*l,M=t.at(p,v),A=t.at(y,x),F=M-.4,U=A-.4,B=M+P,O=A+P,D=a[S],V=kt(Math.round(p*3)*.71+Math.round(v*3)*1.37)<.2,C=V?s:n,k=V?[1,1,1]:D,G=[p+T,F,v+E],it=[y+T,U,x+E],ft=[y+T,O,x+E],pt=[p+T,B,v+E],Z=[p-T,F,v-E],tt=[y-T,U,x-E],mt=[y-T,O,x-E],ot=[p-T,B,v-E],bt=w/3,yt=-.4/(V?2:1),et=P/(V?2:1),wt=k.map(lt=>lt*.7);C.quad(G,it,ft,pt,[0,yt],[bt,yt],[bt,et],[0,et],k,null,[wt,wt,k,k]),C.quad(tt,Z,ot,mt,[bt,yt],[0,yt],[0,et],[bt,et],k,null,[wt,wt,k,k]);let W=V?Tt(190,188,182):D.map(lt=>lt*.9),q=T*1.6,I=E*1.6;n.quad([p+q,B+.05,v+I],[y+q,O+.05,x+I],[y-q,O+.05,x-I],[p-q,B+.05,v-I],[0,1],[bt,1],[bt,1],[0,1],W,[0,1,0]),n.quad([p+q,B-.02,v+I],[y+q,O-.02,x+I],[y+q,O+.05,x+I],[p+q,B+.05,v+I],[0,1],[bt,1],[bt,1],[0,1],W),n.quad([y-q,O-.02,x-I],[p-q,B-.02,v-I],[p-q,B+.05,v-I],[y-q,O+.05,x-I],[0,1],[bt,1],[bt,1],[0,1],W),C.quad(Z,G,pt,ot,[0,0],[.05,0],[.05,1],[0,1],k),C.quad(it,tt,mt,ft,[0,0],[.05,0],[.05,1],[0,1],k)}for(let[p,v,y,x,P,S]of i.gates){let w=Math.hypot(y-p,x-v),T=t.at(p,v),E=t.at(y,x),M=Math.min(T,E),A=c[S],F=-(x-v)/w*.03,U=(y-p)/w*.03,O=(kt(p*1.3+x*.7)<.5?0:1)*.5;r.quad([p+F,M,v+U],[y+F,M,x+U],[y+F,M+P,x+U],[p+F,M+P,v+U],[0,O],[w/1.5,O],[w/1.5,O+.5],[0,O+.5],A),r.quad([y-F,M,x-U],[p-F,M,v-U],[p-F,M+P,v-U],[y-F,M+P,x-U],[0,O],[w/1.5,O],[w/1.5,O+.5],[0,O+.5],A);for(let[D,V,C]of[[p,v,T],[y,x,E]]){let G=C+P+.2,it=a[(S+1)%a.length],ft=(pt,Z,tt,mt,ot)=>o.quad(pt,Z,tt,mt,[0,0],[.1,0],[.1,1],[0,1],it,ot);ft([D-.17,C-.3,V-.17],[D+.17,C-.3,V-.17],[D+.17,G,V-.17],[D-.17,G,V-.17]),ft([D+.17,C-.3,V+.17],[D-.17,C-.3,V+.17],[D-.17,G,V+.17],[D+.17,G,V+.17]),ft([D-.17,C-.3,V+.17],[D-.17,C-.3,V-.17],[D-.17,G,V-.17],[D-.17,G,V+.17]),ft([D+.17,C-.3,V-.17],[D+.17,C-.3,V+.17],[D+.17,G,V+.17],[D+.17,G,V-.17]),ft([D-.17-.03,G,V-.17-.03],[D+.17+.03,G,V-.17-.03],[D+.17+.03,G,V+.17+.03],[D-.17-.03,G,V+.17+.03],[0,1,0])}}let h=new se,u=Yo(),d=$u(),f=new Lt(n.geometry(),ia({vertexColors:!0,map:u.map,normalMap:u.normalMap,normalScale:new vt(.6,.6),roughness:.95,side:Vt}));f.castShadow=!0,f.receiveShadow=!0,h.add(f);let m=new Lt(o.geometry(),ia({vertexColors:!0,map:u.map,roughness:.95,side:Vt}));m.castShadow=!0,m.receiveShadow=!0,h.add(m);let _=new Lt(s.geometry(),new Rt({vertexColors:!0,map:d.map,normalMap:d.normalMap,roughness:.95,side:Vt}));_.castShadow=!0,_.receiveShadow=!0,h.add(_);let g=new Lt(r.geometry(),new Rt({vertexColors:!0,map:Qu(),roughness:.5,metalness:.4,side:Vt,alphaTest:.4}));return g.castShadow=!0,h.add(g),h.name="walls",e.add(h),h}var ud=Ae(()=>{we();Hn();Bl();ii();kl()});function md(i){let t=0;for(let c of i){let l=c.index?c.toNonIndexed():c;c._ni=l,t+=l.attributes.position.count}let e=new Float32Array(t*3),n=new Float32Array(t*3),r=i.every(c=>c._ni.attributes.uv)?new Float32Array(t*2):null,o=0;for(let c of i){let l=c._ni;e.set(l.attributes.position.array,o*3),l.attributes.normal&&n.set(l.attributes.normal.array,o*3),r&&r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count}let a=new oe;return a.setAttribute("position",new jt(e,3)),a.setAttribute("normal",new jt(n,3)),r&&a.setAttribute("uv",new jt(r,2)),a}function sa(i){let t=i;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function dd(i,t,e){let n=sa(i*7919+13),s=[],r=[],o=[],a=[],c=new N,l=new N,h=new N,u=new N,d=new Re;for(let m=0;m<t;m++){let _=n()*Math.PI*2,g=Math.acos(2*n()-1)*(e.flat||1),p=.55+.45*Math.pow(n(),.5);c.set(Math.sin(g)*Math.cos(_)*p,Math.cos(g)*p*e.ry,Math.sin(g)*Math.sin(_)*p),c.y+=e.dy||0,l.set(c.x,c.y/(e.ry*e.ry),c.z).normalize();let v=e.card*(.75+.5*n());h.set(n()-.5,n()-.5,n()-.5).normalize(),d.setFromAxisAngle(h,n()*Math.PI);let y=new N(1,0,0).applyQuaternion(d),x=new N(0,1,0).applyQuaternion(d),P=[[-1,-1],[1,-1],[1,1],[-1,1]],S=P.map(([E,M])=>new N().copy(c).addScaledVector(y,E*v/2).addScaledVector(x,M*v/2)),w=.62+.38*Math.min(1,Math.max(0,(c.y/e.ry+.6)/1.4)),T=.9+.2*n();for(let E of[0,1,2,0,2,3]){let M=S[E];s.push(M.x,M.y,M.z);let A=new N(M.x,(M.y-(e.dy||0))/(e.ry*e.ry),M.z).normalize().lerp(l,.3).normalize();r.push(A.x,A.y,A.z),o.push((P[E][0]+1)/2,(P[E][1]+1)/2),a.push(w*T,w*T,w*T)}}let f=new oe;return f.setAttribute("position",new Xt(s,3)),f.setAttribute("normal",new Xt(r,3)),f.setAttribute("uv",new Xt(o,2)),f.setAttribute("color",new Xt(a,3)),f}function fd(i,t,e){let n=new Ro(.62,t),s=n.attributes.position,r=sa(i);for(let u=0;u<s.count;u++){let d=s.getX(u),f=s.getY(u),m=s.getZ(u),_=.85+.25*kt(i*3+Math.round(d*50)*1.3+Math.round(f*50)*2.1+Math.round(m*50)*3.7);s.setXYZ(u,d*_,f*_*e,m*_)}let o=n.index?n.toNonIndexed():n;o.computeVertexNormals();let a=o.attributes.normal,c=o.attributes.position,l=[];for(let u=0;u<c.count;u++){let d=new N(c.getX(u),c.getY(u),c.getZ(u)).normalize(),f=new N(a.getX(u),a.getY(u),a.getZ(u)).lerp(d,.8).normalize();a.setXYZ(u,f.x,f.y,f.z);let m=.3+.22*Math.min(1,Math.max(0,(c.getY(u)/e+.8)/1.6));l.push(m,m,m)}o.setAttribute("color",new Xt(l,3));let h=new Float32Array(c.count*2).fill(.5);return o.setAttribute("uv",new jt(h,2)),o}function pd(i){let t=i.reduce((c,l)=>c+l.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=new Float32Array(t*3),o=0;for(let c of i)e.set(c.attributes.position.array,o*3),n.set(c.attributes.normal.array,o*3),s.set(c.attributes.uv.array,o*2),r.set(c.attributes.color.array,o*3),o+=c.attributes.position.count;let a=new oe;return a.setAttribute("position",new jt(e,3)),a.setAttribute("normal",new jt(n,3)),a.setAttribute("uv",new jt(s,2)),a.setAttribute("color",new jt(r,3)),a}function Xx(i,t){let e=sa(i+5),n=[],s=t?5:7,r=new fe(.11,.19,1,s,1,!0);r.translate(0,.5,0),n.push(r);let o=t?2:4;for(let a=0;a<o;a++){let c=new fe(.035,.08,.75,s-2,1,!0);c.translate(0,.375,0),c.rotateZ(.5+.4*e()),c.rotateY(a/o*Math.PI*2+e()),c.translate(0,.85+.1*e(),0),n.push(c)}return md(n)}function qx(i){let t=[],e=i?9:14,n=sa(77);for(let a=0;a<e;a++){let c=a/e*Math.PI*2+n()*.3,l=a%3===0?.5:a%3===1?0:-.35,h=2.6+n()*.8,u=new vi(1,h,1,6),d=u.attributes.position;for(let f=0;f<d.count;f++){let m=d.getY(f)+h/2,_=m/h,g=d.getX(f)*(.35+.65*Math.sin(Math.min(1,_*1.2)*Math.PI*.9+.1)),p=m*Math.cos(l),v=m*Math.sin(l)-.55*_*_*h*.45;d.setXYZ(f,g,v,p)}u.rotateY(c),t.push(u)}let s=md(t);s.computeVertexNormals();let r=s.attributes.normal;for(let a=0;a<r.count;a++){let c=new N(r.getX(a),Math.abs(r.getY(a))+.6,r.getZ(a)).normalize();r.setXYZ(a,c.x,c.y,c.z)}let o=new Float32Array(s.attributes.position.count*3).fill(1);return s.setAttribute("color",new jt(o,3)),s}function gd(i,t,e,n,s){let r=[],o=[],a=i.extras.fountains||[];for(let it of i.trees)a.some(ft=>Math.hypot(ft[0]-it[0],ft[1]-it[1])<7.5)||(it[3]>=1e3?o:r).push(it);let c=n==="low"||n==="medium",l={low:3,medium:2}[n]||1,h=new se;h.name="trees";let u=Ul(0),d=Ul(1),f=it=>{let ft=new Rt({map:it,alphaTest:.42,vertexColors:!0,roughness:.85,side:Vt});return ft.onBeforeCompile=pt=>{pt.fragmentShader=pt.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
`)},ft},m=f(u),_=f(d),g=it=>new rr({depthPacking:wl,map:it,alphaTest:.42}),p=new Rt({vertexColors:!0,roughness:.95,map:null}),v=n==="low"?12:c?18:44,y=[{ry:.78,card:1.2,dy:0},{ry:.62,card:1.3,dy:-.05,flat:.9},{ry:1.05,card:1.1,dy:.05}],x=y.map((it,ft)=>pd([fd(ft+3,c?0:1,it.ry*.9),dd(ft+1,v,it)])),P=pd([fd(9,0,.7),dd(9,c?10:18,{ry:.7,card:1.35,dy:0})]),S=new re,w=new Re,T=new N,E=new N,M=new Yt,A=new N(0,1,0),F=[[.34,.5,.2],[.4,.56,.22],[.3,.44,.18],[.44,.58,.26],[.36,.54,.27],[.48,.58,.28],[.28,.42,.2]],U=[[.98,.82,.18],[.88,.45,.66],[.92,.4,.18]],B=[],O=x.map(()=>[]);r.forEach((it,ft)=>{kt(it[3]+ft*.37)<.06&&it[2]<3.5?B.push(it):O[Math.floor(kt(it[3]*3.1+ft)*3)%3].push(it)});let D=[];O.forEach((it,ft)=>{if(!it.length)return;let pt=new ze(x[ft],ft===1?_:m,it.length);it.forEach((Z,tt)=>{let[mt,ot,bt]=Z,yt=t.at(mt,ot),et=Math.max(1.6,bt*.95)*(.9+.2*kt(tt*3.3+ft)),wt=et*y[ft].ry*.9+1.6+kt(tt+ft*999)*1;w.setFromAxisAngle(A,kt(tt*7+ft)*6.28),T.set(et,et,et),E.set(mt,yt+wt,ot),S.compose(E,w,T),pt.setMatrixAt(tt,S);let W=kt(Z[3]*1.7+tt),q=F[Math.floor(W*F.length)%F.length];kt(tt*13.3+ft)<.012&&(q=U[Math.floor(kt(tt)*3)%3]),M.setRGB(q[0],q[1],q[2]),pt.setColorAt(tt,M),D.push([mt,yt,ot,wt-et*y[ft].ry*.35,et])}),pt.castShadow=!0,pt.receiveShadow=!0,pt.customDepthMaterial=g(ft===1?d:u),h.add(pt)});let V=o.filter((it,ft)=>ft%l===0);if(V.length){let it=new ze(P,_,V.length);V.forEach((ft,pt)=>{let[Z,tt,mt]=ft,ot=t.at(Z,tt),bt=mt*1.15*(c&&l>1?1.15:1),yt=bt*.7+1.5+kt(pt)*2.5+(ft[3]>=2e6?2.5+kt(pt*1.7)*3:0);w.setFromAxisAngle(A,kt(pt*3)*6.28),T.set(bt,bt,bt),E.set(Z,ot+yt,tt),S.compose(E,w,T),it.setMatrixAt(pt,S);let et=F[Math.floor(kt(pt*1.3)*F.length)%F.length],wt=.78+.15*kt(pt*2.7);M.setRGB(et[0]*wt,et[1]*wt,et[2]*wt),it.setColorAt(pt,M),!c&&kt(pt*5.1)<.2&&D.push([Z,ot,tt,yt-bt*.3,bt])}),it.castShadow=!c,it.receiveShadow=!0,it.customDepthMaterial=g(d),h.add(it)}let C=Xx(3,c),k=new ze(C,new Rt({color:6179384,roughness:1}),D.length);D.forEach(([it,ft,pt,Z,tt],mt)=>{let ot=.7+tt*.12;T.set(ot,Z,ot),w.setFromAxisAngle(A,kt(mt*1.9)*6.28),E.set(it,ft-.2,pt),S.compose(E,w,T),k.setMatrixAt(mt,S)}),k.castShadow=!0,h.add(k);let G=B.concat(s||[]);if(G.length){let it=qx(c),ft=new Rt({map:Nl(),alphaTest:.4,vertexColors:!0,side:Vt,roughness:.85}),pt=new ze(it,ft,G.length);pt.customDepthMaterial=g(Nl());let Z=new fe(.16,.24,1,c?6:10,1,!0);Z.translate(0,.5,0);let tt=new ze(Z,new Rt({color:10261898,roughness:.95}),G.length);G.forEach((mt,ot)=>{let[bt,yt]=mt,et=t.at(bt,yt),wt=7+kt(ot*9.1)*7;w.setFromAxisAngle(A,kt(ot)*6.28),T.set(1.25,1.25,1.25),E.set(bt,et+wt,yt),S.compose(E,w,T),pt.setMatrixAt(ot,S),M.setRGB(.75+.2*kt(ot*2.2),.85,.7),pt.setColorAt(ot,M),T.set(1,wt,1),E.set(bt,et,yt),S.compose(E,w,T),tt.setMatrixAt(ot,S)}),pt.castShadow=tt.castShadow=!0,h.add(pt),h.add(tt)}return e.add(h),h}var _d=Ae(()=>{we();Hn();ii()});function yd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new oe,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=xd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=xd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function xd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new jt(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var vd=Ae(()=>{we()});function ra(i,t,e,n,s,r,o,a=1){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,_=-f/m,g=d/m,p=r(h,c),v=r(u,l);i.quad([h[0]+_*n,p,h[2]+g*n],[u[0]+_*n,v,u[2]+g*n],[u[0]+_*s,v,u[2]+g*s],[h[0]+_*s,p,h[2]+g*s],[c/a,0],[l/a,0],[l/a,1],[c/a,1],o)}}function Md(i,t,e,n,s,r,o,a){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,_=-f/m,g=d/m;i.quad([h[0]+_*n,h[1]+r,h[2]+g*n],[u[0]+_*n,u[1]+r,u[2]+g*n],[u[0]+_*s,u[1]+o,u[2]+g*s],[h[0]+_*s,h[1]+o,h[2]+g*s],[c/3.4,0],[l/3.4,0],[l/3.4,.3],[c/3.4,.3],a)}}function Us(i,t,e,n,s,r,o,a=0,c=null){c=c??t.L;for(let l=a;l<c;l+=e){let h=Math.min(c,l+e),u=t.at(l),d=t.at(h),f=d[0]-u[0],m=d[2]-u[2],_=Math.hypot(f,m)||1,g=-m/_,p=f/_,v=[u[0]+g*n,s(u,l),u[2]+p*n],y=[d[0]+g*n,s(d,h),d[2]+p*n],x=[d[0]+g*n,r(d,h),d[2]+p*n],P=[u[0]+g*n,r(u,l),u[2]+p*n];i.quad(v,y,x,P,[l,0],[h,0],[h,1],[l,1],o)}}function Sd(i,t,e){let n=new se;n.name="rail";let s=new qt,r=new qt,o=[],a=x=>x[0]>t.XMIN-40&&x[0]<t.XMAX+40&&x[1]>t.ZMIN-40&&x[1]<t.ZMAX+40;for(let x of i.rail){let P=[],S=[];if(x.pts.forEach((M,A)=>{a(M)&&(P.push(M),S.push(x.h[A]))}),P.length<2)continue;let w=new fn(P,S);o.push(w);let T=Tt(255,228,205);ra(s,w,3,-1.7,1.7,M=>M[1]+.35,T,3.4),Md(s,w,3,-1.7,-2.6,.35,-.25,Tt(225,195,170)),Md(s,w,3,2.6,1.7,-.25,.35,Tt(225,195,170));let E=Tt(150,150,155);for(let M of[-.5,.5])ra(r,w,3,M-.04,M+.04,A=>A[1]+.62,E),Us(r,w,3,M-.04,A=>A[1]+.47,A=>A[1]+.62,Tt(90,80,70)),Us(r,w,3,M+.04,A=>A[1]+.62,A=>A[1]+.47,Tt(90,80,70))}let c=ju(),l=new Lt(s.geometry(),new Rt({vertexColors:!0,map:c.map,normalMap:c.normalMap,side:Vt,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));l.receiveShadow=!0,n.add(l);let h=new Lt(r.geometry(),new Rt({vertexColors:!0,roughness:.35,metalness:.8}));n.add(h);let u=0;for(let x of o)u+=Math.floor(x.L/.65);let d=new Pe(2,.14,.24),f=new ze(d,new Rt({color:10657430,roughness:.9}),u),m=new re,_=new Re,g=new N,p=new N(1,1,1),v=new N(0,1,0),y=0;for(let x of o)for(let P=0;P<x.L-.65;P+=.65){let S=x.at(P),w=x.at(P+.6),T=Math.atan2(w[2]-S[2],w[0]-S[0]);_.setFromAxisAngle(v,-T+Math.PI/2),g.set(S[0],S[1]+.42,S[2]),m.compose(g,_,p),f.setMatrixAt(y++,m)}return f.count=y,f.receiveShadow=!0,n.add(f),e.add(n),{group:n,paths:o}}function bd(i){let t=[];for(let[e,n]of i){let s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n[0],r[o*3+1]=n[1],r[o*3+2]=n[2];e.setAttribute("color",new jt(r,3)),e.attributes.uv||e.setAttribute("uv",new jt(new Float32Array(s*2),2)),t.push(e.index?e.toNonIndexed():e)}return yd(t,!1)}function ae(i,t,e,n,s,r){let o=new Pe(i,t,e);return o.translate(n,s+t/2,r),o}function Ed(i,t,e=.5){let n=new fe(e,e,.14,14);return n.rotateX(Math.PI/2),n.translate(i,e,t),n}function oa(i,t,e,n,s){i.push([ae(n*(e-1)+1.6,.55,.22,t,.45,1.18),s],[ae(n*(e-1)+1.6,.55,.22,t,.45,-1.18),s]);for(let r=0;r<e;r++){let o=t+(r-(e-1)/2)*n;i.push([Ed(o,.72,.48),s],[Ed(o,-.72,.48),s])}i.push([ae(.5,.35,2.2,t,.62,0),s])}function Yx(){let i=Tt(232,186,40),t=Tt(20,110,88),e=Tt(52,54,58),n=Tt(26,30,34),s=Tt(235,235,230),r=Tt(120,124,128),o=[];o.push([ae(21.6,.38,3.14,0,1.42,0),e]),o.push([ae(21.8,.12,3.18,0,1.8,0),Tt(200,160,30)]),oa(o,6.9,3,1.75,n),oa(o,-6.9,3,1.75,n),o.push([ae(7,1,2.5,0,.55,0),e]),o.push([ae(13.2,2.65,2.5,-3,1.92,0),i]),o.push([ae(13.25,.32,2.54,-3,2.55,0),t]),o.push([ae(3.4,.35,3,-8.4,4.55,0),i]),o.push([ae(3.2,.2,2.9,-8.4,4.9,0),r]);for(let a of[-7.5,-9.3]){let c=new fe(.62,.62,.06,16);c.translate(a,5.12,0),o.push([c,n])}for(let a of[-1,-3.2]){let c=new fe(.5,.5,.06,14);c.translate(a,4.6,0),o.push([c,n])}o.push([ae(1.2,.4,.8,-5,4.57,0),e]),o.push([ae(3.4,3,3.1,5.4,1.92,0),i]),o.push([ae(3.45,.32,3.14,5.4,2.55,0),t]),o.push([ae(3.5,.18,3.16,5.4,4.92,0),Tt(210,170,36)]),o.push([ae(.06,.95,2.5,7.13,3.72,0),n]),o.push([ae(1.6,.85,.06,5.6,3.75,1.56),n]),o.push([ae(1.6,.85,.06,5.6,3.75,-1.56),n]),o.push([ae(2.6,1.55,2.6,8.4,1.92,0),i]),o.push([ae(2.62,.32,2.64,8.4,2.55,0),t]),o.push([ae(.1,.25,.5,9.74,3,0),s]),o.push([ae(.1,.18,.3,9.74,2.2,.9),s]),o.push([ae(.1,.18,.3,9.74,2.2,-.9),s]);for(let a of[1.52,-1.52]){o.push([ae(20.6,.05,.05,-.5,2.85,a),s]);for(let c=-10;c<=9.8;c+=2.2)o.push([ae(.05,1,.05,c,1.86,a),s])}return o.push([ae(.4,.5,.9,10.6,1,0),e]),o.push([ae(.4,.5,.9,-10.6,1,0),e]),o.push([ae(.6,.5,3,10.2,.6,0),i]),o.push([ae(.6,.5,3,-10.6,.6,0),i]),bd(o)}function Zx(){let i=Tt(110,70,52),t=Tt(86,54,40),e=Tt(30,30,32),n=Tt(70,44,36),s=[];oa(s,3.5,2,1.75,e),oa(s,-3.5,2,1.75,e),s.push([ae(9.9,.3,2.4,0,1.15,0),e]),s.push([ae(9.6,2.5,3.05,0,1.42,0),i]);for(let a=0;a<9;a++){let c=-4.4+a*1.1;s.push([ae(.12,2.5,3.17,c,1.42,0),t])}s.push([ae(9.7,.12,3.15,0,3.85,0),t]);let r=new Fi;r.moveTo(-1.42,0),r.lineTo(-1,.35),r.lineTo(-.3,.62),r.lineTo(.3,.62),r.lineTo(1,.35),r.lineTo(1.42,0);let o=new bs(r,{depth:8.8,bevelEnabled:!1});return o.rotateY(Math.PI/2),o.translate(-4.4,3.86,0),s.push([o,n]),s.push([ae(.5,.3,.4,5.2,1,0),e]),s.push([ae(.5,.3,.4,-5.2,1,0),e]),bd(s)}function wd(i,t){let e=i.slice().sort((S,w)=>w.L-S.L).slice(0,2),n=new se;n.name="train";let s=10.5,r=22,o=60,a=new Rt({vertexColors:!0,roughness:.7,metalness:.15}),c=new ze(Zx(),a,o);c.castShadow=!0,c.receiveShadow=!0,n.add(c);let l=Yx(),h=new Rt({vertexColors:!0,roughness:.45,metalness:.25}),u=[];for(let S=0;S<2;S++){let w=new se,T=new Lt(l,h);T.castShadow=!0,T.receiveShadow=!0,w.add(T),n.add(w),u.push(w)}t.add(n);let d=new re,f=new Re,m=new N,_=new N(1,1,1),g=new N(0,1,0),p=-200,v=1,y=0,x=0;function P(S,w,T){let E=S.at(w-T/2*.8),M=S.at(w+T/2*.8),A=S.at(w),F=Math.atan2(M[2]-E[2],M[0]-E[0]);return f.setFromAxisAngle(g,-F),m.set(A[0],A[1]+.62,A[2]),F}return{group:n,placeNear(S,w){let T=e[0],E=0,M=1e9;for(let A=0;A<T.L;A+=5){let F=T.at(A),U=Math.hypot(F[0]-S,F[2]-w);U<M&&(M=U,E=A)}y=0,v=1,x=0,p=E+r*1.5},tick(S){let w=e[y];if(!w)return;if(x>0){x-=S,n.visible=!1;return}n.visible=!0,p+=S*13*v;let T=p;for(let A=0;A<2;A++)P(w,T-r/2*v,r),u[A].position.copy(m),u[A].quaternion.copy(f),v<0&&u[A].rotateY(Math.PI),T-=r*v;for(let A=0;A<o;A++){let F=T-s/2*v;P(w,F,s),d.compose(m,f,_),c.setMatrixAt(A,d),T-=s*v}c.instanceMatrix.needsUpdate=!0;let E=T;(v>0?E>w.L+50:E<-50)&&(x=40,y=(y+1)%e.length,v=-v,p=v>0?-50:w.L+50)}}}function Td(i,t,e,n){let s=new se;s.name="passarelas";let r=new qt,o=new qt,a=Tt(40,110,140),c=Tt(150,150,150);for(let m of i.extras.footbridges){let _=new fn(m,m.map(()=>0)),g=t.at(m[0][0],m[0][1]),p=t.at(m[m.length-1][0],m[m.length-1][1]),v=_.at(_.L/2),y=t.at(v[0],v[2])+7.2,x=_.s[1],P=_.s[_.s.length-2],S=m.map((A,F)=>F===0?g+.2:F===m.length-1?p+.2:y),w=new fn(m,S),T=1.2;ra(r,w,1,-T,T,A=>A[1],c),ra(r,w,1,T,-T,A=>A[1]-.35,a),Us(r,w,1,-T,A=>A[1]-.35,A=>A[1],a),Us(r,w,1,T,A=>A[1],A=>A[1]-.35,a);for(let A of[-T,T])Us(o,w,1,A,F=>F[1],F=>F[1]+1.1,a);for(let A of[-T,T])Us(o,w,1,A,F=>F[1]+1.1,F=>F[1]+2.6,a,x,P);let E=new Pe(.35,1,.35),M=new Rt({color:2780812,roughness:.6,metalness:.4});for(let A=4;A<w.L-2;A+=7){let F=w.at(A),U=t.at(F[0],F[2]),B=F[1]-.35-U;if(!(B<.8))for(let O of[-1,1]){let D=new Lt(E,M);D.scale.y=B,D.position.set(F[0],U+B/2,F[2]),s.add(D),D.castShadow=!0}}}let l=new Lt(r.geometry(),new Rt({vertexColors:!0,roughness:.6,metalness:.3,side:Vt}));l.castShadow=l.receiveShadow=!0;let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.clearRect(0,0,64,64),u.strokeStyle="#2c6f8e",u.lineWidth=3,u.strokeRect(0,0,64,64),u.beginPath(),u.moveTo(0,32),u.lineTo(64,32),u.moveTo(32,0),u.lineTo(32,64),u.stroke();let d=new sn(h);d.wrapS=d.wrapT=Pn,d.repeat.set(1,4),d.colorSpace=_e;let f=new Lt(o.geometry(),new Rt({map:d,transparent:!0,alphaTest:.3,side:Vt,metalness:.4,roughness:.5}));return s.add(l,f),e.add(s),s}var fn,aa=Ae(()=>{we();Hn();vd();ii();fn=class{constructor(t,e){this.p=t,this.h=e,this.s=[0];for(let n=1;n<t.length;n++)this.s.push(this.s[n-1]+Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1]));this.L=this.s[this.s.length-1]}at(t){t=Math.max(0,Math.min(this.L,t));let e=0,n=this.s.length-1;for(;n-e>1;){let a=e+n>>1;this.s[a]<=t?e=a:n=a}let s=(t-this.s[e])/Math.max(1e-6,this.s[n]-this.s[e]),r=this.p[e],o=this.p[n];return[r[0]+(o[0]-r[0])*s,this.h[e]+(this.h[n]-this.h[e])*s,r[1]+(o[1]-r[1])*s]}}});function Hl(i,t,e,n=1){let s=[],r=[];for(let a=t;a<e+1e-6;a+=n){let c=i.at(Math.min(a,e));s.push([c[0],c[2]]),r.push(c[1])}let o=i.at(e);return Math.hypot(s[s.length-1][0]-o[0],s[s.length-1][1]-o[2])>.05&&(s.push([o[0],o[2]]),r.push(o[1])),new fn(s,r)}function Ne(i,t){let e=i.at(Math.max(0,t-.5)),n=i.at(Math.min(i.L,t+.5)),s=n[0]-e[0],r=n[2]-e[2],o=Math.hypot(s,r)||1;return{c:i.at(t),ux:s/o,uz:r/o,nx:-r/o,nz:s/o}}function Qe(i,t,e,n,s,r,o,a,c,l=1,h=null){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=Ne(t,u),m=Ne(t,d),_=(g,p,v)=>[g.c[0]+g.nx*p,a(g.c[1],p,v),g.c[2]+g.nz*p];i.quad(_(f,r,u),_(m,r,d),_(m,o,d),_(f,o,u),[r/l,u/l],[r/l,d/l],[o/l,d/l],[o/l,u/l],c,h)}}function Wi(i,t,e,n,s,r,o,a,c,l=1,h=!1){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=Ne(t,u),m=Ne(t,d),_=[f.c[0]+f.nx*r,o(f.c,u),f.c[2]+f.nz*r],g=[m.c[0]+m.nx*r,o(m.c,d),m.c[2]+m.nz*r],p=[m.c[0]+m.nx*r,a(m.c,d),m.c[2]+m.nz*r],v=[f.c[0]+f.nx*r,a(f.c,u),f.c[2]+f.nz*r];h?i.quad(g,_,v,p,[d/l,g[1]/l],[u/l,_[1]/l],[u/l,v[1]/l],[d/l,p[1]/l],c):i.quad(_,g,p,v,[u/l,_[1]/l],[d/l,g[1]/l],[d/l,p[1]/l],[u/l,v[1]/l],c)}}function Nn(i,t,e,n,s,r,o,a=1){for(let c=e;c<n-1e-6;c+=s){let l=Math.min(n,c+s),h=Ne(t,c),u=Ne(t,l);for(let d=0;d<r.length-1;d++){let[f,m]=r[d],[_,g]=r[d+1],p=(v,y,x)=>[v.c[0]+v.nx*y,v.c[1]+x,v.c[2]+v.nz*y];i.quad(p(h,f,m),p(u,f,m),p(u,_,g),p(h,_,g),[c/a,m/a],[l/a,m/a],[l/a,g/a],[c/a,g/a],o)}}}function pn(i,t,e,n,s,r,o,a,c,l=1){let h=(g,p,v)=>[t.c[0]+t.ux*(e+g)+t.nx*(n+p),v,t.c[2]+t.uz*(e+g)+t.nz*(n+p)],u=s/2,d=r/2,f=a,m=a+o,_=(g,p,v,y,x,P)=>i.quad(g,p,v,y,[0,0],[x/l,0],[x/l,P/l],[0,P/l],c);_(h(-u,-d,f),h(u,-d,f),h(u,-d,m),h(-u,-d,m),s,o),_(h(u,d,f),h(-u,d,f),h(-u,d,m),h(u,d,m),s,o),_(h(u,-d,f),h(u,d,f),h(u,d,m),h(u,-d,m),r,o),_(h(-u,d,f),h(-u,-d,f),h(-u,-d,m),h(-u,d,m),r,o),_(h(-u,-d,m),h(u,-d,m),h(u,d,m),h(-u,d,m),s,r),_(h(-u,d,f),h(u,d,f),h(u,-d,f),h(-u,-d,f),s,r)}function Ad(i,t,e,n){let s=i.viaduct,r=new se;r.name="viaduto";let o=new qt,a=new qt,c=new qt,l=new qt,h=new qt,u=new qt,d=new qt,f=Tt(214,210,202),m=Tt(188,184,176),_=Tt(228,225,218),[g,p]=s.deck,v=s.ramps.find(H=>Math.hypot(H.pts[0][0]-g[0],H.pts[0][1]-g[1])<1)||s.ramps[1],y=s.ramps.find(H=>H!==v),x=[...v.pts.slice().reverse(),...y.pts.slice(1)],P=[...v.h.slice().reverse(),...y.h.slice(1)],S=new fn(x,P),w=0;{let H=0;for(let J=1;J<v.pts.length;J++)H+=Math.hypot(v.pts[J][0]-v.pts[J-1][0],v.pts[J][1]-v.pts[J-1][1]);w=H}let T=[];for(let H of n||[])for(let J=w-5;J<w+40;J+=.25){let $=S.at(J),ht=1e9;for(let X=0;X<H.L;X+=2){let R=H.at(X),b=Math.hypot($[0]-R[0],$[2]-R[2]);b<ht&&(ht=b)}ht<.6&&(T.push(J),J+=3)}T.length||(T=[w+13.5,w+18.1]),T.sort((H,J)=>H-J);let E=w+7.5,M=w+24.5,A=w+44,F=w+62,U=Hl(S,E-.6,F+.6,1),B=E-.6,O=-6.3,D=6.3,V=0,C=8;Qe(a,U,0,U.L,1,-5.85,3.55,H=>H+.02,[1,1,1],C,[0,1,0]),Qe(c,U,0,U.L,1,4.05,6,H=>H+.17,[1,1,1],2,[0,1,0]),Wi(o,U,0,U.L,1,4.05,H=>H[1]+.02,H=>H[1]+.17,f,2,!0),Qe(o,U,0,U.L,1,D,O,H=>H-.3,m,2,[0,-1,0]);for(let[H,J]of[[O,!1],[D,!0]])Wi(o,U,0,U.L,1,H,$=>$[1]-.75,$=>$[1]+.25,_,2,J);Qe(o,U,0,U.L,1,O,O+.25,H=>H+.25,_,2,[0,1,0]),Qe(o,U,0,U.L,1,D-.2,D,H=>H+.25,_,2,[0,1,0]);let k=(H,J)=>[[H,.02],[H+J*.04,.1],[H+J*.17,.33],[H+J*.31,.85],[H+J*.42,.85],[H+J*.42,.02]].map(([$,ht])=>[$,ht]),G=k(-6.27,1),it=[[3.55,.02],[3.59,.1],[3.72,.33],[3.86,.85],[3.97,.85],[4.05,.17]];Nn(o,U,0,U.L,1,G,_,2),Nn(o,U,0,U.L,1,it.slice().reverse(),_,2),Nn(o,U,0,U.L,1,[[6,.17],[6,.75],[6.3,.75],[6.3,.25]],_,2);let ft=Tt(246,196,18);for(let[H,J]of[[-6.1,.85],[6.15,.75]]){for(let $=.3;$<U.L;$+=.22){let ht=Ne(U,$),X=ht.c[0]+ht.nx*H,R=ht.c[2]+ht.nz*H,b=ht.c[1]+J,z=.025;u.quad([X-ht.ux*z,b,R-ht.uz*z],[X+ht.ux*z,b,R+ht.uz*z],[X+ht.ux*z,b+1.9,R+ht.uz*z],[X-ht.ux*z,b+1.9,R-ht.uz*z],[0,0],[1,0],[1,1],[0,1],ft),u.quad([X-ht.nx*z,b,R-ht.nz*z],[X+ht.nx*z,b,R+ht.nz*z],[X+ht.nx*z,b+1.9,R+ht.nz*z],[X-ht.nx*z,b+1.9,R-ht.nz*z],[0,0],[1,0],[1,1],[0,1],ft)}for(let $ of[.06,1.86])Nn(u,U,0,U.L,1,[[H-.03,J+$],[H+.03,J+$],[H+.03,J+$+.06],[H-.03,J+$+.06],[H-.03,J+$]],ft);for(let $=.3;$<U.L;$+=2.5){let ht=Ne(U,$);pn(u,ht,0,H,.08,.08,1.95,ht.c[1]+J,ft)}}let pt=Tt(236,236,230);for(let[H,J,$,ht]of[[-1.25,.06,ft,!1],[-1.05,.06,ft,!1],[-5.5,.07,pt,!1],[3.2,.07,pt,!1]])Qe(h,U,0,U.L,1,H-J,H+J,X=>X+.04,$,1,[0,1,0]);let Z=[[E,M],[M,A],[A,F]];for(let[H,J]of Z){let $=H-B+.4,ht=J-B-.4;for(let X of[-4.6,-1.55,1.55,4.6])Nn(o,U,$,ht,1,[[X-.17,-.3],[X-.17,-1.45],[X-.38,-1.6],[X-.38,-1.82],[X+.38,-1.82],[X+.38,-1.6],[X+.17,-1.45],[X+.17,-.3]],m,2);for(let X of[.03,.5,.97]){let R=$+(ht-$)*X,b=Ne(U,R);pn(o,b,0,0,.25,9,1.2,b.c[1]-1.55,m,2)}}let tt=new fe(.55,.55,1,24,1,!0),mt=Ds(),ot=new Rt({color:14078666,map:mt.map,normalMap:mt.normalMap,roughness:.85}),bt=(H,J)=>{let $=t.at(H,J);for(let ht of n||[])for(let X=0;X<ht.L;X+=3){let R=ht.at(X);Math.hypot(R[0]-H,R[2]-J)<6&&($=Math.min($,R[1]+.2))}return $};for(let H of[M,A]){let J=Ne(U,H-B),$=J.c[1]-1.82,ht=1.5,X=[[-6,0],[6,0],[6,-.6],[4.6,-ht],[-4.6,-ht],[-6,-.6]],R=(b,z,j)=>[J.c[0]+J.nx*b+J.ux*j,$+z,J.c[2]+J.nz*b+J.uz*j];for(let b=0;b<X.length;b++){let[z,j]=X[b],[ct,at]=X[(b+1)%X.length];o.quad(R(z,j,-.85),R(ct,at,-.85),R(ct,at,.85),R(z,j,.85),[0,0],[1,0],[1,.5],[0,.5],m)}for(let b of[-.85,.85]){let z=X.map(([j,ct])=>R(j,ct,b));o.tri(z[0],z[1],z[2],[0,0],[1,0],[1,1],m),o.tri(z[0],z[2],z[3],[0,0],[1,0],[1,1],m),o.tri(z[0],z[3],z[4],[0,0],[1,0],[1,1],m),o.tri(z[0],z[4],z[5],[0,0],[1,0],[1,1],m)}for(let b of[-3.2,3.2]){let z=J.c[0]+J.nx*b,j=J.c[2]+J.nz*b,ct=bt(z,j)-.3,at=$-ht-ct+.05,Mt=new Lt(tt,ot);Mt.scale.set(1,at,1),Mt.position.set(z,ct+at/2,j),Mt.castShadow=!0,Mt.receiveShadow=!0,r.add(Mt);let dt=new Lt(new fe(.75,.8,.5,20),ot);dt.position.set(z,ct+.25,j),r.add(dt)}}for(let[H,J]of[[E,-1],[F,1]]){let $=Ne(S,H),ht=$.c[1]-1.82;pn(o,$,J*.6,0,1.4,13,1.3,ht-1.3,m,2);let X=14;for(let R=0;R<X;R++){let b=-6.6+13.2*R/X,z=-6.6+13.2*(R+1)/X,j=[$.c[0]+$.nx*b+$.ux*J*1.3,0,$.c[2]+$.nz*b+$.uz*J*1.3],ct=[$.c[0]+$.nx*z+$.ux*J*1.3,0,$.c[2]+$.nz*z+$.uz*J*1.3],at=bt(j[0],j[2])-.5,Mt=bt(ct[0],ct[2])-.5,dt=ht-1.3,Et=dt,At=J<0?[[ct[0],Mt,ct[2]],[j[0],at,j[2]],[j[0],dt,j[2]],[ct[0],Et,ct[2]]]:[[j[0],at,j[2]],[ct[0],Mt,ct[2]],[ct[0],Et,ct[2]],[j[0],dt,j[2]]];l.quad(At[0],At[1],At[2],At[3],[b/3,at/3],[z/3,Mt/3],[z/3,Et/3],[b/3,dt/3],[1,1,1])}}let yt=Hl(S,0,E+1.5,1),et=Hl(S,F-1.5,S.L,1);for(let[H,J]of[[yt,"N"],[et,"S"]]){Qe(a,H,0,H.L,1,-5.85,5.85,dt=>dt+.12,[1,1,1],C,[0,1,0]);for(let[dt,Et,At]of[[-.12,.06,ft],[.12,.06,ft],[-5.5,.07,pt],[5.5,.07,pt]])Qe(h,H,0,H.L,1,dt-Et,dt+Et,St=>St+.14,At,1,[0,1,0]);Nn(o,H,0,H.L,1,k(-6.27,1),_,2),Nn(o,H,0,H.L,1,k(6.27,-1).slice().reverse(),_,2);let ht=dt=>dt[1]-t.at(dt[0],dt[2]),X=0;for(let dt=0;dt<H.L;dt+=1){let Et=Ne(H,dt);ht(Et.c)>.25&&(X=dt)}let R=Math.min(H.L,X+2),b=0,z=J==="N"?H.L:R,j=J==="N"?Math.max(0,H.L-R):0,ct=J==="N"?(()=>{let dt=H.L;for(let Et=H.L;Et>=0;Et-=1){let At=Ne(H,Et);if(ht(At.c)>.25)dt=Et;else break}return Math.max(0,dt-2)})():0,at=J==="N"?ct:0,Mt=J==="N"?H.L:R;for(let[dt,Et]of[[-6.3,!0],[6.3,!1]])Wi(l,H,at,Mt,1,dt,At=>Math.min(t.at(At[0]+0,At[2]),At[1])-.6,At=>At[1]+.02,[1,1,1],3,Et);Qe(o,H,at,Mt,1,-6.3,-6.3+1e-4,dt=>dt,_)}for(let H of[6,U.L/2,U.L-6]){let J=Ne(U,H),$=J.c[0]+J.nx*5.8,ht=J.c[2]+J.nz*5.8,X=J.c[1]+.17;pn(d,J,0,5.8,.16,.16,8.5,X,Tt(150,152,156)),pn(d,J,0,4.6,.12,2.4,.12,X+8.4,Tt(150,152,156)),pn(d,J,0,3.4,.5,.25,.12,X+8.3,Tt(230,230,225))}let wt=Is(),W=Ls(),q=$o(),I=(H,J,$=!0)=>{let ht=new Lt(H.geometry(),J);return ht.castShadow=$,ht.receiveShadow=!0,r.add(ht),ht};I(o,new Rt({vertexColors:!0,map:mt.map,normalMap:mt.normalMap,normalScale:new vt(.5,.5),roughness:.85,side:Vt})),I(a,new Rt({map:wt.map,normalMap:wt.normalMap,normalScale:new vt(.5,.5),roughness:.9,side:Vt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),!1),I(c,new Rt({map:W.map,normalMap:W.normalMap,roughness:.9,side:Vt}),!1),I(l,new Rt({map:q.map,normalMap:q.normalMap,roughness:.92,side:Vt})),I(h,new Rt({vertexColors:!0,roughness:.6,side:Vt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),I(u,new Rt({vertexColors:!0,roughness:.45,metalness:.3,side:Vt})),I(d,new Rt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let lt=U.at(U.L/2);return{group:r,deck:U,center:lt,supports:{sAN:E,sP1:M,sP2:A,sAS:F},cross:T}}var Vl=Ae(()=>{we();Hn();aa();ii()});function Rd(i){let t=new nn({depthWrite:!1,side:Be,fog:!1,toneMapped:!1,uniforms:{sunDir:{value:new N(0,1,0)},zen:{value:new Yt(.045,.17,.55)},hor:{value:new Yt(.5,.62,.8)},day:{value:1},clouds:{value:i==="low"?0:1}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*0.99999;}",fragmentShader:`uniform vec3 sunDir,zen,hor;uniform float day,clouds;varying vec3 vW;
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
      }`}),e=new Lt(new En(3e4,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="ceu",e}var Cd=Ae(()=>{we()});function Pd(i,t,e){let n=(i.extras||{}).pools;if(!n||!n.length)return null;let s=new se;s.name="clube";let r=new qt,o=new qt,a=new qt,c=new Rt({color:3127e3,roughness:.06,metalness:.1,emissive:674394,emissiveIntensity:.35,transparent:!0,opacity:.92});n.forEach(([u,d,f,m,_],g)=>{f<m&&([f,m]=[m,f],_+=Math.PI/2);let p=Math.cos(_),v=Math.sin(_),y=(D,V,C)=>[u+D*p-V*v,C,d+D*v+V*p],x=f/2,P=m/2,S=1.8,w=1.2,T=-1e9;for(let[D,V]of[[-x-2,-P-2],[x+2,-P-2],[x+2,P+2],[-x-2,P+2],[0,0]]){let C=y(D,V,0);T=Math.max(T,t.at(C[0],C[2]))}T+=.1;{let D=S+3.5,V=[[-x-D,-P-D],[x+D,-P-D],[x+D,P+D],[-x-D,P+D]];for(let C=0;C<4;C++){let[k,G]=V[C],[it,ft]=V[(C+1)%4];o.quad(y(k,G,T-3.5),y(it,ft,T-3.5),y(it,ft,T+.12),y(k,G,T+.12),[0,0],[1,0],[1,1],[0,1],Tt(200,194,180))}}let E=Tt(214,206,190),M=Tt(240,238,232),A=(D,V,C,k)=>{let G=(it,ft,pt,Z)=>r.quad(y(it,ft,C),y(pt,ft,C),y(pt,Z,C),y(it,Z,C),[it/2,ft/2],[pt/2,ft/2],[pt/2,Z/2],[it/2,Z/2],k,[0,1,0]);G(-x-V,-P-V,x+V,-P-D),G(-x-V,P+D,x+V,P+V),G(-x-V,-P-D,-x-D,P+D),G(x+D,-P-D,x+V,P+D)};A(0,.45,T+.18,M),A(.45,S+3.5,T+.12,E);let F=Tt(120,200,225),U=[[-x,-P],[x,-P],[x,P],[-x,P]];for(let D=0;D<4;D++){let[V,C]=U[D],[k,G]=U[(D+1)%4];o.quad(y(V,C,T-w),y(k,G,T-w),y(k,G,T+.18),y(V,C,T+.18),[0,0],[1,0],[1,1],[0,1],F)}o.quad(y(-x,-P,T-w),y(-x,P,T-w),y(x,P,T-w),y(x,-P,T-w),[0,0],[1,0],[1,1],[0,1],Tt(90,180,210),[0,1,0]);let B=new vi(f,m);B.rotateX(-Math.PI/2);let O=new Lt(B,c);if(O.position.set(u,T-.05,d),O.rotation.y=-_,O.receiveShadow=!0,s.add(O),g===0){let D=x+1.2,V=-P-1.2,C=y(D,V,T),k=new Lt(new Pe(2.2,5.2,2.2),new Rt({color:14210252,roughness:.8}));k.position.set(C[0],T+2.6,C[2]),k.rotation.y=-_,k.castShadow=!0,s.add(k),[[1994704,1],[15905815,-1]].forEach(([G,it],ft)=>{let pt=[];for(let tt=0;tt<=24;tt++){let mt=tt/24,ot=mt*Math.PI*1.3*it,yt=D-1.2-mt*6.5+Math.sin(ot)*3.2*.4,et=V+.8+mt*4.5*it*.6+(1-Math.cos(ot))*1.2*it,wt=y(yt,et,T+5-mt*4.8);pt.push(new N(wt[0],wt[1],wt[2]))}let Z=new Lt(new Po(new hr(pt),48,.55,10,!1),new Rt({color:G,roughness:.35,side:Vt}));Z.castShadow=!0,s.add(Z)});for(let G=0;G<5;G++){let it=-x+2+G*(f-4)/4,ft=P+2.6,pt=y(it,ft,T+.12),Z=new Lt(new fe(.04,.04,2.4,6),new Rt({color:15658734}));Z.position.set(pt[0],T+1.3,pt[2]),s.add(Z);let tt=new Lt(new Ss(1.5,.5,8,1,!0),new Rt({color:[14826286,2784737,16106776,16777215,2864755][G],side:Vt,roughness:.7}));tt.position.set(pt[0],T+2.55,pt[2]),tt.castShadow=!0,s.add(tt);let mt=new Lt(new Pe(1.8,.3,.6),new Rt({color:16053488})),ot=y(it+1.2,ft+.6,0);mt.position.set(ot[0],T+.35,ot[2]),mt.rotation.y=-_,s.add(mt)}}});let l=(u,d)=>{let f=new Lt(u.geometry(),d);f.receiveShadow=!0,s.add(f)};l(r,new Rt({vertexColors:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),l(o,new Rt({vertexColors:!0,roughness:.3,side:Vt})),e.add(s);let h=n[0];return{group:s,center:[h[0],t.at(h[0],h[1]),h[1]]}}var Id=Ae(()=>{we();Hn()});function Ld(i){return new Set(((i.viaduct2||{}).ways||[]).map(t=>t.id))}function Gl(i,t=0){let e=i.viaduct2;if(!e)return null;let n=[];for(let c of e.ways){let l=c.w/2+2.2+t;for(let h=0;h<c.pts.length-1;h++)n.push([c.pts[h][0],c.pts[h][1],c.pts[h+1][0],c.pts[h+1][1],l])}let s=1e9,r=-1e9,o=1e9,a=-1e9;for(let c of n)s=Math.min(s,c[0],c[2]),r=Math.max(r,c[0],c[2]),o=Math.min(o,c[1],c[3]),a=Math.max(a,c[1],c[3]);return(c,l)=>{if(c<s-8||c>r+8||l<o-8||l>a+8)return!1;for(let[h,u,d,f,m]of n){let _=d-h,g=f-u,p=_*_+g*g||1,v=((c-h)*_+(l-u)*g)/p;v=Math.max(0,Math.min(1,v));let y=h+_*v-c,x=u+g*v-l;if(y*y+x*x<m*m)return!0}return!1}}function Dd(i){let t=i.viaduct2;if(!t)return null;let e=new Map;for(let n of t.ways)e.set(n.id,new fn(n.pts,n.h));return(n,s,r)=>{let o=e.get(n);if(!o)return null;let a=1e9,c=null;for(let l=0;l<=o.L;l+=1){let h=o.at(l),u=(h[0]-s)**2+(h[2]-r)**2;u<a&&(a=u,c=h[1])}return c}}function Ud(i,t,e,n){let s=i.viaduct2;if(!s)return null;let r=new se;r.name="viaduto_centro";let o=new qt,a=new qt,c=new qt,l=new qt,h=new qt,u=new qt,d=Tt(222,218,208),f=Tt(196,192,184),m=Tt(236,233,226),_=Tt(232,226,214),g=(n||[]).filter(B=>{let O=B.at(B.L/2);return!0}),p=(B,O)=>{let D=1e9;for(let V of g)for(let C=0;C<V.L;C+=2){let k=V.at(C),G=Math.hypot(k[0]-B,k[2]-O);G<D&&(D=G)}return D},v=[],y=[];for(let B of s.ways){let O=Math.min(3.6,B.w/2-.4)+1.4;for(let D=0;D<B.pts.length-1;D++)y.push([B.id,B.pts[D][0],B.pts[D][1],B.pts[D+1][0],B.pts[D+1][1],O])}let x=(B,O,D,V=.05)=>{for(let[C,k,G,it,ft,pt]of y){if(C===B)continue;let Z=it-k,tt=ft-G,mt=Z*Z+tt*tt||1,ot=((O-k)*Z+(D-G)*tt)/mt;ot=Math.max(0,Math.min(1,ot));let bt=k+Z*ot-O,yt=G+tt*ot-D;if(bt*bt+yt*yt<(pt+V)*(pt+V))return!0}return!1};for(let B of s.ways){let O=new fn(B.pts,B.h),D=Math.min(3.6,B.w/2-.4),V=1.4,C=D+V,k=.22,G=O.L,it=mt=>{let ot=O.at(mt);return ot[1]-t.at(ot[0],ot[2])},ft=mt=>{let ot=O.at(mt);return p(ot[0],ot[2])<8.5},pt=mt=>ot=>ot+mt;Qe(a,O,0,G,1,-D,D,pt(.06),[1,1,1],8,[0,1,0]),Qe(h,O,0,G,1,-.12,-.02,pt(.09),Tt(236,186,40),1,[0,1,0]),Qe(h,O,0,G,1,.02,.12,pt(.09),Tt(236,186,40),1,[0,1,0]);let Z=[],tt=null;for(let mt=0;mt<=G;mt+=1){let ot=it(mt)>.3;ot&&!tt&&(tt=[Math.max(0,mt-1),mt]),ot&&(tt[1]=Math.min(G,mt+1)),!ot&&tt&&(Z.push(tt),tt=null)}tt&&Z.push(tt);for(let[mt,ot]of Z){for(let yt=mt;yt<ot-1e-6;yt+=1){let et=Math.min(ot,yt+1),wt=Ne(O,(yt+et)/2);for(let W of[1,-1]){let q=wt.c[0]+wt.nx*W*(C+.1),I=wt.c[2]+wt.nz*W*(C+.1),lt=wt.c[0]+wt.nx*W*(D+.3),H=wt.c[2]+wt.nz*W*(D+.3);if(x(B.id,lt,H,-.3)||(Qe(c,O,yt,et,1,W>0?D:-C,W>0?C:-D,pt(.22),[1,1,1],2,[0,1,0]),Wi(o,O,yt,et,1,W*D,R=>R[1]+.06,R=>R[1]+.22,m,2,W>0)),x(B.id,q,I))continue;let J=W*C,$=W*(C+k),ht=W>0?[[J,.22],[J,1.05],[$,1.05],[$,-.25]]:[[$,-.25],[$,1.05],[J,1.05],[J,.22]];Nn(o,O,yt,et,1,ht,d,2);let X=W*(C+k/2);Nn(u,O,yt,et,1,[[X-.03,1.35],[X+.03,1.35],[X+.03,1.41],[X-.03,1.41],[X-.03,1.35]],Tt(70,90,96)),Math.round(yt)%2===0&&pn(u,wt,0,X,.05,.05,.36,wt.c[1]+1.05,Tt(70,90,96)),ft((yt+et)/2)||Wi(l,O,yt,et,1,W*(C+k),R=>Math.min(t.at(R[0],R[2]),R[1])-.5,R=>R[1]-.25,[1,1,1],3,W<0)}}let bt=null;for(let yt=mt;yt<=ot;yt+=1){let et=ft(yt);et&&bt===null&&(bt=yt),(!et||yt+1>ot)&&bt!==null&&(P(O,bt,yt,C+k),bt=null)}for(let yt=mt+8;yt<ot-4;yt+=26)v.push([O,yt,C-.1])}}function P(B,O,D,V){Qe(o,B,O,D,1,V,-V,C=>C-.35,f,2,[0,-1,0]);for(let[C,k]of[[V,!0],[-V,!1]])Wi(o,B,O,D,1,C,G=>G[1]-1.25,G=>G[1]-.25,m,2,k);for(let C of[-2.8,0,2.8])Nn(o,B,O+.3,D-.3,1,[[C-.2,-.35],[C-.2,-1.15],[C-.35,-1.3],[C+.35,-1.3],[C+.2,-1.15],[C+.2,-.35]],f,2);for(let C of[O,D]){let k=Ne(B,C),G=Math.min(t.at(k.c[0],k.c[2]),k.c[1]-2)-.6,it=k.c[1]-.35-G;pn(l,k,0,0,.8,2*V+.4,it,G,[1,1,1],3)}if(D-O>18){let C=(O+D)/2,k=Ne(B,C),G=k.c[1]-1.3;pn(o,k,0,0,1.2,2*V,.9,G-.9,f,2);for(let it of[-V*.55,V*.55]){let ft=k.c[0]+k.nx*it,pt=k.c[2]+k.nz*it,Z=t.at(ft,pt)-.3,tt=new Lt(new fe(.45,.45,G-.9-Z,18),S);tt.position.set(ft,(G-.9+Z)/2,pt),tt.castShadow=!0,r.add(tt)}}}var S=new Rt({color:14473423,roughness:.85});for(let[B,O,D]of v){let V=Ne(B,O),C=V.c[1]+.22;pn(u,V,0,D,.14,.14,8,C,Tt(150,152,156)),pn(u,V,0,D-1.1,.1,2.2,.1,C+7.9,Tt(150,152,156)),pn(u,V,0,D-2.2,.45,.22,.12,C+7.8,Tt(235,235,228))}let w=Ds(),T=Is(),E=Ls(),M=$o(),A=(B,O,D=!0)=>{let V=new Lt(B.geometry(),O);return V.castShadow=D,V.receiveShadow=!0,r.add(V),V};A(o,new Rt({vertexColors:!0,map:w.map,normalMap:w.normalMap,normalScale:new vt(.4,.4),roughness:.85,side:Vt})),A(a,new Rt({map:T.map,normalMap:T.normalMap,normalScale:new vt(.5,.5),roughness:.9,side:Vt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),!1),A(c,new Rt({map:E.map,normalMap:E.normalMap,roughness:.9,side:Vt}),!1),A(l,new Rt({color:15920610,map:M.map,normalMap:M.normalMap,roughness:.92,side:Vt})),A(h,new Rt({vertexColors:!0,roughness:.6,side:Vt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),A(u,new Rt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let F=s.ways.find(B=>B.lab==="tabuleiro"),U=F.pts[Math.floor(F.pts.length/2)];return{group:r,center:[U[0],s.T,U[1]]}}var Nd=Ae(()=>{we();Hn();aa();Vl();ii()});function Ve(i,t,e,n,s,r,o,a,c,l,h,u){let d=(x,P,S)=>[t[0]+n[0]*(s+x)+e[0]*(o+P),S,t[1]+n[1]*(s+x)+e[1]*(o+P)],f=-a/2,m=a/2,_=-c/2,g=c/2,p=h+r,v=h+r+l,y=(x,P,S,w)=>i.quad(x,P,S,w,[0,0],[1,0],[1,1],[0,1],u);y(d(f,g,p),d(m,g,p),d(m,g,v),d(f,g,v)),y(d(m,_,p),d(f,_,p),d(f,_,v),d(m,_,v)),y(d(m,g,p),d(m,_,p),d(m,_,v),d(m,g,v)),y(d(f,_,p),d(f,g,p),d(f,g,v),d(f,_,v)),y(d(f,_,v),d(f,g,v),d(m,g,v),d(m,_,v))}function ca(i,t,e,n,s,r,o,a,c,l){let h=(m,_,g)=>[t[0]+n[0]*(s+m)+e[0]*(r+_),g,t[1]+n[1]*(s+m)+e[1]*(r+_)],u=o/2,d=h(0,0,a+c),f=[h(-u,-u,a),h(u,-u,a),h(u,u,a),h(-u,u,a)];for(let m=0;m<4;m++)i.tri(f[m],f[(m+1)%4],d,[0,0],[1,0],[.5,1],l)}function Fd(i,t,e){let n=i.extras.church,s=1e9,r=null;for(let W of i.roads)if(!(W.hw==="footway"||W.hw==="path"))for(let q=0;q<W.p.length-1;q++){let I=W.p[q],lt=W.p[q+1],H=lt[0]-I[0],J=lt[1]-I[1],$=H*H+J*J,ht=((n[0]-I[0])*H+(n[1]-I[1])*J)/($||1);ht=Math.max(0,Math.min(1,ht));let X=I[0]+H*ht,R=I[1]+J*ht,b=Math.hypot(X-n[0],R-n[1]);b<s&&(s=b,r=[X,R])}let o=[r[0]-n[0],r[1]-n[1]],a=Math.hypot(...o);o=[o[0]/a,o[1]/a];let c=[-o[1],o[0]],l=Math.max(0,s-22),h=[n[0]+o[0]*l,n[1]+o[1]*l],u=t.at(h[0],h[1])-.2,d=new se;d.name="igreja";let f=new qt,m=new qt,_=new qt,g=new qt,p=new qt,v=Tt(246,236,206),y=Tt(226,192,118),x=Tt(40,34,30),P=Tt(160,82,58),S=Tt(240,234,214),w=Tt(52,46,44),T=12,E=28,M=9.5;Ve(f,h,o,c,0,0,-4,T,E,M,u,v);for(let W=0;W<=7;W++){let q=-4-E/2+W*E/7;Ve(m,h,o,c,T/2,0,q,.5,.6,M,u,y),Ve(m,h,o,c,-T/2,0,q,.5,.6,M,u,y)}Ve(m,h,o,c,0,M-.5,-4,T+.6,E+.6,.6,u,y),Ve(m,h,o,c,0,0,-4,T+.4,E+.4,.8,u,y);for(let W=0;W<7;W++){let q=-4-E/2+(W+.5)*E/7;for(let I of[-1,1]){let lt=(H,J,$)=>[h[0]+c[0]*(I*(T/2+.03))+o[0]*(q+H),u+$,h[1]+c[1]*(I*(T/2+.03))+o[1]*(q+H)];_.quad(lt(-.8,0,2.5),lt(.8,0,2.5),lt(.8,0,6.6),lt(-.8,0,6.6),[0,0],[1,0],[1,1],[0,1],Tt(60,70,95)),_.tri(lt(-.8,0,6.6),lt(.8,0,6.6),lt(0,0,7.8),[0,0],[1,0],[.5,1],Tt(60,70,95))}}let A=(W,q,I)=>[h[0]+c[0]*W+o[0]*q,I,h[1]+c[1]*W+o[1]*q],F=M+T/2*.75,U=-4-E/2-.6,B=-4+E/2+.3;g.quad(A(-T/2-.6,U,u+M),A(-T/2-.6,B,u+M),A(0,B,u+F),A(0,U,u+F),[0,0],[E/2.4,0],[E/2.4,4],[0,4],P),g.quad(A(T/2+.6,B,u+M),A(T/2+.6,U,u+M),A(0,U,u+F),A(0,B,u+F),[0,0],[E/2.4,0],[E/2.4,4],[0,4],P),f.tri(A(-T/2,B-.3,u+M),A(T/2,B-.3,u+M),A(0,B-.3,u+F),[0,0],[1,0],[.5,1],v),f.tri(A(T/2,U+.6,u+M),A(-T/2,U+.6,u+M),A(0,U+.6,u+F),[0,0],[1,0],[.5,1],v),Ve(f,h,o,c,0,0,-4-E/2-2.5,8,5,7.5,u,v),ca(g,h,o,c,0,-4-E/2-2.5,8.6,u+7.5,2.5,P);let O=-4+E/2+1.8,D=5.4;Ve(f,h,o,c,0,0,O,D,D,23.6,u,v);for(let[W,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])Ve(m,h,o,c,W*(D/2-.05),0,O+q*(D/2-.05),.7,.7,23.8,u,y);for(let[W,q]of[[10.6,.7],[17.6,.6],[23.4,.7]])Ve(m,h,o,c,0,W,O,D+.7,D+.7,q,u,y),Ve(m,h,o,c,0,W-.25,O,D+.35,D+.35,.25,u,y);let V=(W,q,I=0)=>A(W,O+D/2+.03+I,u+q),C=(W,q,I,lt,H,J,$=0)=>{let ht=lt/2,X=[];for(let b=0;b<=8;b++){let j=b/8*Math.PI/3;X.push([q-ht+lt*(1-Math.cos(j))*.5/(1-Math.cos(Math.PI/3))*.5*2*.5+0,I+H+Math.sin(j)*ht*1.15])}W.quad(V(q-ht,I,$),V(q+ht,I,$),V(q+ht,I+H,$),V(q-ht,I+H,$),[0,0],[1,0],[1,1],[0,1],J);let R=10;for(let b=0;b<R;b++){let z=b/R,j=(b+1)/R,ct=q-ht+ht*z,at=q-ht+ht*j,Mt=I+H+Math.sqrt(Math.max(0,1-(1-z)**2))*ht*1.25,dt=I+H+Math.sqrt(Math.max(0,1-(1-j)**2))*ht*1.25;W.quad(V(ct,I+H,$),V(at,I+H,$),V(at,dt,$),V(ct,Mt,$),[0,0],[1,0],[1,1],[0,1],J),W.quad(V(2*q-at,I+H,$),V(2*q-ct,I+H,$),V(2*q-ct,Mt,$),V(2*q-at,dt,$),[0,0],[1,0],[1,1],[0,1],J)}};C(m,0,0,3.4,3.6,y,.01),C(_,0,0,2.6,3.3,w,.03);for(let W of[-1,1]){let q=A(W*1.75,O+D/2+.35,0),I=new Lt(new fe(.22,.24,3.6,14),new Rt({color:16052714,roughness:.6}));I.position.set(q[0],u+1.8,q[2]),I.castShadow=!0,d.add(I);let lt=new Lt(new Pe(.6,.25,.6),new Rt({color:16052714}));lt.position.set(q[0],u+3.7,q[2]),d.add(lt)}let k=(W,q,I,lt,H,J)=>{for(let $=0;$<18;$++){let ht=$/18*Math.PI*2,X=($+1)/18*Math.PI*2;W.tri(V(q,I,J),V(q+Math.cos(ht)*lt,I+Math.sin(ht)*lt,J),V(q+Math.cos(X)*lt,I+Math.sin(X)*lt,J),[0,0],[1,0],[1,1],H)}};for(let[W,q]of[[0,.55],[0,-.55],[.55,0],[-.55,0]])k(m,W,7.4+q,.78,y,.02);for(let[W,q]of[[0,.5],[0,-.5],[.5,0],[-.5,0]])k(_,W,7.4+q,.55,w,.04);Ve(m,h,o,c,0,4.9,O+D/2+.06,.22,.12,1.4,u,y),Ve(m,h,o,c,0,5.8,O+D/2+.06,.9,.12,.22,u,y),C(m,0,12.6,1.5,2.6,y,.01),C(_,0,12.75,1.1,2.4,w,.03);for(let W of[-1,1]){let q=(I,lt)=>A(W*(D/2+.03),O+I,u+lt);_.quad(q(-.55,12.75),q(.55,12.75),q(.55,15.2),q(-.55,15.2),[0,0],[1,0],[1,1],[0,1],w),_.tri(q(-.55,15.2),q(.55,15.2),q(0,16.1),[0,0],[1,0],[.5,1],w)}k(m,0,20.6,.85,y,.02),k(_,0,20.6,.6,w,.04),ca(p,h,o,c,0,O,D-.4,u+24.1,10.5,S);for(let[W,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])Ve(p,h,o,c,W*(D/2-.1),24.1,O+q*(D/2-.1),.7,.7,1,u,S),ca(p,h,o,c,W*(D/2-.1),O+q*(D/2-.1),.75,u+25.1,2.4,S);for(let W of[-1,1]){let q=W*4,I=(lt,H)=>A(q+lt,-4+E/2+.03,u+H);_.quad(I(-.75,2.2),I(.75,2.2),I(.75,6.4),I(-.75,6.4),[0,0],[1,0],[1,1],[0,1],Tt(70,52,40)),_.tri(I(-.75,6.4),I(.75,6.4),I(0,7.6),[0,0],[1,0],[.5,1],Tt(70,52,40)),Ve(m,h,o,c,W*(T/2-.3),M,-4+E/2-.3,.8,.8,1.2,u,y),ca(m,h,o,c,W*(T/2-.3),-4+E/2-.3,.85,u+M+1.2,1.6,y)}Ve(m,h,o,c,0,34.5,O,.18,.18,2.2,u,Tt(240,240,236)),Ve(m,h,o,c,0,35.7,O,1.1,.18,.18,u,Tt(240,240,236)),Ve(m,h,o,c,0,0,O+5,9,4,.35,u,Tt(200,196,188));let G=new qt,it=new qt,ft=Tt(240,240,240),pt=10,Z=-4-E/2-5,tt=O+8,mt=[[-pt,Z],[-pt,tt],[-1.8,tt],[1.8,tt],[pt,tt],[pt,Z]];for(let W=0;W<mt.length-1;W++){if(W===1)continue;let q=mt[W],I=mt[W+1],lt=Math.hypot(I[0]-q[0],I[1]-q[1]);for(let X=0;X<=lt;X+=.25){let R=X/lt,b=q[0]+(I[0]-q[0])*R,z=q[1]+(I[1]-q[1])*R,j=A(b,z,0),ct=t.at(j[0],j[2]);G.quad([j[0]-.012,ct+.95,j[2]],[j[0]+.012,ct+.95,j[2]],[j[0]+.012,ct+2.2,j[2]],[j[0]-.012,ct+2.2,j[2]],[0,0],[1,0],[1,1],[0,1],ft)}let H=A(q[0],q[1],0),J=A(I[0],I[1],0),$=t.at(H[0],H[2]),ht=t.at(J[0],J[2]);for(let X of[1,2.15])G.quad([H[0],$+X,H[2]],[J[0],ht+X,J[2]],[J[0],ht+X+.06,J[2]],[H[0],$+X+.06,H[2]],[0,0],[1,0],[1,1],[0,1],ft);it.quad([H[0],$-.3,H[2]],[J[0],ht-.3,J[2]],[J[0],ht+.85,J[2]],[H[0],$+.85,H[2]],[0,0],[lt/1.5,0],[lt/1.5,.8],[0,.8],Tt(150,150,148)),G.quad([H[0],$+.85,H[2]],[J[0],ht+.85,J[2]],[J[0],ht+.98,J[2]],[H[0],$+.98,H[2]],[0,0],[1,0],[1,1],[0,1],Tt(245,245,242))}let ot=(W,q,I={})=>{let lt=new Lt(W.geometry(),new Rt(Object.assign({vertexColors:!0,map:q,roughness:.85,side:Vt},I)));lt.castShadow=!0,lt.receiveShadow=!0,d.add(lt)};ot(f,Ol()),ot(m,null),ot(_,null,{roughness:.3,metalness:.2}),ot(g,rd()),ot(p,Ol(),{roughness:.8,metalness:0}),ot(G,null),ot(it,void 0?(void 0)():null,{roughness:.6});let bt=new qt,yt=Tt(205,200,190),et=[A(-pt,Z,0),A(pt,Z,0),A(pt,tt,0),A(-pt,tt,0)];for(let W=0;W<10;W++)for(let q=0;q<10;q++){let I=(lt,H)=>{let J=[et[0][0]+(et[1][0]-et[0][0])*lt+(et[3][0]-et[0][0])*H,0,et[0][2]+(et[1][2]-et[0][2])*lt+(et[3][2]-et[0][2])*H];return J[1]=t.at(J[0],J[2])+.12,J};bt.quad(I(W/10,q/10),I(W/10,(q+1)/10),I((W+1)/10,(q+1)/10),I((W+1)/10,q/10),[0,0],[0,1],[1,1],[1,0],yt)}let wt=new Lt(bt.geometry(),new Rt({vertexColors:!0,map:id(),roughness:.9,side:Vt,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-10}));return wt.receiveShadow=!0,d.add(wt),e.add(d),{group:d,center:h,radius:Math.hypot(pt,(tt-Z)/2)+2,front:o,frame:{C:h,f:o,r:c,fz0:Z,fz1:tt,fx:pt}}}function Od(i,t,e){let n=new se;n.name="praca";let s=i.extras.park;if(!s)return null;let r=s.slice();r.length>2&&r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&r.pop();let o=jn.triangulateShape(r.map(C=>new vt(C[0],C[1])),[]),a=new qt,c=-1e9;for(let C of r)c=Math.max(c,t.at(C[0],C[1]));let l=(C,k)=>t.at(C,k)+.3,h=0,u=0;for(let C of r)h+=C[0],u+=C[1];h/=r.length,u/=r.length;let d=0,f=[1,0];for(let C=0;C<r.length;C++){let k=r[C],G=r[(C+1)%r.length],it=Math.hypot(G[0]-k[0],G[1]-k[1]);it>d&&(d=it,f=[(G[0]-k[0])/it,(G[1]-k[1])/it])}let m=(C,k)=>{let G=1e9;for(let it=0;it<r.length;it++){let ft=r[it],pt=r[(it+1)%r.length],Z=pt[0]-ft[0],tt=pt[1]-ft[1],mt=Z*Z+tt*tt,ot=((C-ft[0])*Z+(k-ft[1])*tt)/mt;ot=Math.max(0,Math.min(1,ot)),G=Math.min(G,Math.hypot(ft[0]+Z*ot-C,ft[1]+tt*ot-k))}return G},_=i.extras.fountains||[],g=(C,k)=>{if(m(C,k)<3.2)return!1;let G=C-h,it=k-u,ft=G*f[0]+it*f[1],pt=-G*f[1]+it*f[0];if(Math.abs(ft)<1.8||Math.abs(pt)<1.8)return!1;for(let Z of _)if(Math.hypot(Z[0]-C,Z[1]-k)<8)return!1;return!0},p=new qt,v=(C,k,G,it)=>{if(Math.max(Math.hypot(C[0]-k[0],C[1]-k[1]),Math.hypot(k[0]-G[0],k[1]-G[1]),Math.hypot(C[0]-G[0],C[1]-G[1]))<.7||it>11){let mt=[C[0],l(C[0],C[1]),C[1]],ot=[k[0],l(k[0],k[1]),k[1]],bt=[G[0],l(G[0],G[1]),G[1]],yt=(C[0]+k[0]+G[0])/3,et=(C[1]+k[1]+G[1])/3;g(yt,et)?(mt[1]+=.08,ot[1]+=.08,bt[1]+=.08,p.tri(mt,bt,ot,[C[0]/3,C[1]/3],[G[0]/3,G[1]/3],[k[0]/3,k[1]/3],Tt(118,148,74))):a.tri(mt,bt,ot,[C[0]/4,C[1]/4],[G[0]/4,G[1]/4],[k[0]/4,k[1]/4],[1,1,1]);return}let pt=[(C[0]+k[0])/2,(C[1]+k[1])/2],Z=[(k[0]+G[0])/2,(k[1]+G[1])/2],tt=[(G[0]+C[0])/2,(G[1]+C[1])/2];v(C,pt,tt,it+1),v(pt,k,Z,it+1),v(tt,Z,G,it+1),v(pt,Z,tt,it+1)};for(let[C,k,G]of o)v(r[C],r[k],r[G],0);for(let C=0;C<r.length;C++){let k=r[C],G=r[(C+1)%r.length];a.quad([k[0],t.at(k[0],k[1])-.2,k[1]],[G[0],t.at(G[0],G[1])-.2,G[1]],[G[0],l(G[0],G[1]),G[1]],[k[0],l(k[0],k[1]),k[1]],[0,0],[1,0],[1,.1],[0,.1],Tt(170,166,160))}let y=new Lt(a.geometry(),new Rt({vertexColors:!0,map:sd(),roughness:.85,side:Vt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}));y.receiveShadow=!0,n.add(y);{let C=Zo(),k=new Lt(p.geometry(),new Rt({vertexColors:!0,map:C.map,roughness:1,side:Vt,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-14}));k.receiveShadow=!0,n.add(k)}let x=new Rt({color:4169672,roughness:.3}),P=new Rt({color:8376544,roughness:.05,metalness:.1,transparent:!0,opacity:.85}),S=new Rt({color:15921906,roughness:.6}),w=new Rt({color:2845872,roughness:.5});for(let[C,k]of i.extras.fountains){let G=l(C,k),it=new Lt(new fe(5.2,5.2,.7,40,1,!0),x);it.position.set(C,G+.3,k),n.add(it);let ft=new Lt(new Bi(5.2,.22,8,40),new Rt({color:15263976}));ft.rotation.x=Math.PI/2,ft.position.set(C,G+.62,k),n.add(ft);let pt=new Lt(new Ao(5.1,40),P);pt.rotation.x=-Math.PI/2,pt.position.set(C,G+.4,k),n.add(pt);let Z=new Lt(new Ss(.35,1.6,12),new Rt({color:14743295,transparent:!0,opacity:.6}));Z.position.set(C,G+1.2,k),n.add(Z);let tt=new se,mt=new Bi(5.2,.12,6,24,Math.PI);for(let bt of[-.8,.8]){let yt=new Lt(mt,w);yt.position.set(0,-4.2,bt),yt.scale.set(1,.25,1),tt.add(yt);let et=new Lt(new Bi(5.2,.08,6,24,Math.PI),w);et.position.set(0,-3.4,bt),et.scale.set(1,.25,1),tt.add(et)}let ot=new Lt(new Bi(5.2,.18,4,24,Math.PI),S);ot.scale.set(1,.25,8),ot.position.set(0,-4.3,0),tt.add(ot),tt.position.set(C,G+4.6,k),tt.rotation.y=kt(C)*3,n.add(tt)}let T=new Pe(1.8,.45,.5),E=new Rt({color:8018492,roughness:.8}),M=new fe(.06,.09,4,6),A=new Rt({color:3355443}),F=new En(.28,10,8),U=new Rt({color:16777215,emissive:16773836,emissiveIntensity:.3}),B=0;for(let C=0;C<r.length;C++){let k=r[C],G=r[(C+1)%r.length],it=Math.hypot(G[0]-k[0],G[1]-k[1]),ft=(G[0]-k[0])/it,pt=(G[1]-k[1])/it,Z=0,tt=0;for(let mt of r)Z+=mt[0],tt+=mt[1];Z/=r.length,tt/=r.length;for(let mt=4;mt<it-2;mt+=9){let ot=k[0]+ft*mt,bt=k[1]+pt*mt,yt=Z-ot,et=tt-bt,wt=Math.hypot(yt,et),W=ot+yt/wt*2.2,q=bt+et/wt*2.2,I=l(W,q);if(B++%2===0){let lt=new Lt(T,E);lt.position.set(W,I+.45,q),lt.rotation.y=-Math.atan2(pt,ft),lt.castShadow=!0,n.add(lt)}else{let lt=new Lt(M,A);lt.position.set(W,I+2,q),n.add(lt);let H=new Lt(F,U);H.position.set(W,I+4.1,q),n.add(H)}}}e.add(n);let O=[],D=0,V=0;for(let C of r)D+=C[0],V+=C[1];D/=r.length,V/=r.length;for(let C=0;C<r.length;C+=Math.max(1,Math.floor(r.length/6))){let k=r[C];O.push([k[0]+(D-k[0])*.2,k[1]+(V-k[1])*.2])}return{group:n,palms:O,center:[D,V]}}function Bd(i,t,e){let n=new se;n.name="campos";for(let s of i.extras.pitches){if(s.k==="track")continue;let r=s.p.slice();r[0][0]===r[r.length-1][0]&&r.pop();let o=jo(r),a=o.ux,c=o.uz,l=-c,h=a,u=5212730,d=null;if(s.k==="pitch"){let p=document.createElement("canvas");p.width=512,p.height=320;let v=p.getContext("2d");for(let y=0;y<10;y++)v.fillStyle=y%2?"#4f8f3c":"#579a42",v.fillRect(y*51.2,0,51.2,320);v.strokeStyle="#f4f4f4",v.lineWidth=4,v.strokeRect(12,12,488,296),v.beginPath(),v.moveTo(256,12),v.lineTo(256,308),v.stroke(),v.beginPath(),v.arc(256,160,40,0,7),v.stroke(),v.strokeRect(12,95,60,130),v.strokeRect(440,95,60,130),d=new sn(p),d.colorSpace=_e,u=16777215}else s.k==="swimming_pool"?u=4175584:s.k==="cemetery"?u=12169892:s.k==="track"&&(u=10507578);let f=new qt,m=12,_=(p,v)=>{let y=o.cx+a*o.a*p+l*o.b*v,x=o.cz+c*o.a*p+h*o.b*v;return[y,t.at(y,x)+.16,x]};for(let p=0;p<m;p++)for(let v=0;v<m;v++){let y=-1+2*p/m,x=-1+2*(p+1)/m,P=-1+2*v/m,S=-1+2*(v+1)/m;f.quad(_(y,P),_(y,S),_(x,S),_(x,P),[(y+1)/2,(P+1)/2],[(y+1)/2,(S+1)/2],[(x+1)/2,(S+1)/2],[(x+1)/2,(P+1)/2],[1,1,1])}let g=new Lt(f.geometry(),new Rt({color:u,map:d,roughness:s.k==="swimming_pool"?.1:.95,side:Vt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}));if(g.receiveShadow=!0,n.add(g),s.k==="cemetery"){let p=new Pe(1,.8,2.2),v=Math.floor(o.a*o.b*4/9),y=new ze(p,new Rt({color:15789800,roughness:.8}),v),x=new re,P=0;for(let S=-o.a+2;S<o.a-2&&P<v;S+=2.2)for(let w=-o.b+2;w<o.b-2&&P<v;w+=3.4){if(kt(S*7+w)<.15)continue;let T=o.cx+a*S+l*w,E=o.cz+c*S+h*w;x.makeRotationY(-Math.atan2(c,a)),x.setPosition(T,t.at(T,E)+.4,E),y.setMatrixAt(P++,x)}y.count=P,y.castShadow=!0,n.add(y)}}return e.add(n),n}var zd=Ae(()=>{we();Hn();Bl();ii()});function $x(i){let t=new Fi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function Mr(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new jt(n,3)),i}function ua(i){i=i.map(a=>a.index?a.toNonIndexed():a);let t=i.reduce((a,c)=>a+c.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count;let o=new oe;return o.setAttribute("position",new jt(e,3)),o.setAttribute("normal",new jt(n,3)),o.setAttribute("color",new jt(s,3)),o}function Vn(i,t,e,n){let s=new bs($x(i),{depth:t-2*e,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:2,steps:1});return s.translate(0,0,-(t-2*e)/2),Mr(s,n)}function da(i,t,e,n,s,r){for(let o of t)for(let a of[-s,s]){let c=new fe(e,e,n,r?8:14);c.rotateX(Math.PI/2),c.translate(o,e,a),i.push(Mr(c,Jx));let l=new fe(e*.62,e*.62,n+.02,r?6:10);l.rotateX(Math.PI/2),l.translate(o,e,a),i.push(Mr(l,Kx))}}function Ge(i,t,e,n,s,r,o,a){let c=new Pe(t,e,n);c.translate(s,r,o),i.push(Mr(c,a))}function Qx(i){let t=[];return t.push(Vn([[-1.95,.32],[1.92,.32],[1.98,.55],[1.9,.82],[1.2,.95],[.55,1],[-1.9,1.02],[-1.98,.7]],1.68,.06,Xi)),t.push(Vn([[.62,.98],[-.25,1.42],[-1.55,1.43],[-1.86,1]],1.68-.12,.05,Wl)),t.push(Vn([[.5,1.06],[-.28,1.45],[-1.5,1.46],[-1.5,1.4],[-.3,1.39],[.4,1.04]],1.68-.06,.03,Xi)),da(t,[1.25,-1.25],.31,.2,.72,i),Ge(t,.04,.12,1.3,1.99,.7,0,Xl),Ge(t,.04,.14,1.4,-2,.82,0,la),Ge(t,.03,.12,.5,-2.01,.55,0,jx),Ge(t,.06,.16,1.6,1.98,.42,0,Ns),ua(t)}function ty(i){let t=[];return t.push(Vn([[-2.25,.33],[2.15,.33],[2.22,.56],[2.12,.8],[1.2,.92],[-1.6,.98],[-2.22,.95],[-2.28,.62]],1.74,.06,Xi)),t.push(Vn([[.95,.93],[.15,1.38],[-.95,1.39],[-1.62,.97]],1.74-.12,.05,Wl)),t.push(Vn([[.82,1],[.12,1.41],[-.92,1.42],[-.92,1.36],[.1,1.35],[.74,.98]],1.74-.06,.03,Xi)),da(t,[1.38,-1.4],.31,.2,.75,i),Ge(t,.04,.12,1.3,2.23,.7,0,Xl),Ge(t,.04,.12,1.5,-2.29,.84,0,la),Ge(t,.06,.16,1.6,2.2,.42,0,Ns),ua(t)}function ey(i){let t=[];return t.push(Vn([[-2.5,.42],[2.4,.42],[2.46,.7],[2.35,1],[1.4,1.08],[-2.5,1.08]],1.8,.06,Xi)),t.push(Vn([[1.3,1.06],[.7,1.62],[-.6,1.64],[-.75,1.06]],1.8-.1,.05,Wl)),t.push(Vn([[1.18,1.1],[.66,1.66],[-.58,1.67],[-.58,1.6],[.62,1.59],[1.1,1.08]],1.8-.04,.03,Xi)),Ge(t,1.65,.08,1.6,-1.65,1,0,Ns),da(t,[1.55,-1.6],.38,.24,.78,i),Ge(t,.04,.14,1.4,2.47,.85,0,Xl),Ge(t,.04,.2,.2,-2.51,.9,.72,la),Ge(t,.04,.2,.2,-2.51,.9,-.72,la),Ge(t,.08,.2,1.7,2.44,.52,0,Ns),ua(t)}function ny(i){let t=[];da(t,[.68,-.68],.3,.1,0,i),t.push(Vn([[-.75,.55],[.55,.62],[.7,.95],[.3,.95],[-.1,.82],[-.8,.85]],.32,.04,Xi)),Ge(t,.5,.12,.3,-.35,.92,0,Ns),Ge(t,.06,.06,.7,.62,1.1,0,Ns),Ge(t,.3,.55,.38,-.25,1.25,0,[.25,.3,.4]);let e=new En(.15,i?6:10,i?5:8);return e.translate(-.18,1.68,0),t.push(Mr(e,[.9,.9,.9])),Ge(t,.4,.12,.12,0,1.15,.18,[.25,.3,.4]),Ge(t,.4,.12,.12,0,1.15,-.18,[.25,.3,.4]),ua(t)}var Xi,Wl,Jx,Kx,Xl,la,Ns,jx,vr,ha,kd=Ae(()=>{we();Hn();Xi=[1,1,1],Wl=[.05,.06,.07],Jx=[.035,.035,.035],Kx=[.55,.55,.56],Xl=[2.2,2.2,2],la=[.5,.03,.03],Ns=[.08,.08,.08],jx=[2,2,2];vr=[[.92,.92,.92],[.92,.92,.92],[.92,.92,.92],[.62,.63,.66],[.62,.63,.66],[.04,.04,.05],[.04,.04,.05],[.32,.33,.35],[.5,.05,.04],[.06,.14,.36],[.78,.76,.7],[.2,.24,.2]],ha=class{constructor(t,e,n,s,r,o=.13,a="high"){this.H=e,this.hf=s;let c=a==="low"||a==="medium";this.roads=t.roads.filter(v=>!["footway","path","track","cycleway","steps"].includes(v.hw)&&v.s!=="dirt"&&v.p.length>1);let l=v=>Math.round(v[0]*2)+","+Math.round(v[1]*2);this.key=l,this.idx=new Map,this.roads.forEach((v,y)=>{v.len=[];for(let x=0;x<v.p.length-1;x++)v.len.push(Math.hypot(v.p[x+1][0]-v.p[x][0],v.p[x+1][1]-v.p[x][1]));v.p.forEach((x,P)=>{let S=l(x);this.idx.has(S)||this.idx.set(S,[]),this.idx.get(S).push([y,P])})});let h=this.roads.map(v=>(v.s==="asphalt"?3:1)*v.len.reduce((y,x)=>y+x,0)),u=h.reduce((v,y)=>v+y,0);this.geos=[Qx(c),ty(c),ey(c),ny(c)];let d=[.42,.2,.16,.22],f=v=>{let y=0;for(let x=0;x<4;x++)if(y+=d[x],v<y)return x;return 0};this.cars=[];for(let v=0;v<r;v++){let y=kt(v*3.7+1)*u,x=0;for(;y>h[x]&&x<h.length-1;)y-=h[x],x++;let P=this.roads[x],S=Math.floor(kt(v*9.1)*(P.p.length-1)),w=P.o||kt(v*1.3)<.5?1:-1;this.cars.push({ri:x,i:w>0?S:S+1,t:kt(v*5.5),dir:w,v:0,type:f(kt(v*4.4)),col:vr[Math.floor(kt(v*2.2)*vr.length)]})}let m=new Rt({vertexColors:!0,roughness:.3,metalness:.45});this.mat=m,this.mesh=new se,this.mesh.name="carros",n.add(this.mesh),this.meshes=this.geos.map((v,y)=>{let x=this.cars.filter(S=>S.type===y).length,P=new ze(v,m,Math.max(1,x));return P.count=x,P.castShadow=!0,P.receiveShadow=!0,this.mesh.add(P),P});let _=new Yt,g=[0,0,0,0];this.cars.forEach(v=>{v.slot=g[v.type]++,_.setRGB(...v.type===3?[.6+.4*kt(v.slot),.1,.1]:v.col),this.meshes[v.type].setColorAt(v.slot,_)}),this.M=new re,this.Q=new Re,this.P=new N,this.S=new N(1,1,1),this.Y=new N(0,1,0),this.E=new vn,this.tick(.01);let p=[[],[],[]];this.roads.forEach((v,y)=>{if(!(!["residential","tertiary","unclassified"].includes(v.hw)||v.b||v.id===1314627854||v.id===1314627855))for(let x=0;x<v.p.length-1;x++){let P=v.len[x],S=v.p[x],w=v.p[x+1],T=(w[0]-S[0])/P,E=(w[1]-S[1])/P;for(let M=8;M<P-8;M+=6)for(let A of[-1,1]){if(kt(y*31+x*7+M*1.7+A)>o)continue;let F=A*(v.w/2-1.1),U=S[0]+T*M-E*F,B=S[1]+E*M+T*F,O=kt(y+M*.3+A);p[O<.55?0:O<.8?1:2].push([U,B,Math.atan2(E,T)+(kt(M+y)<.5?0:Math.PI),kt(y+M)])}}}),this.parked=new se,p.forEach((v,y)=>{if(!v.length)return;let x=new ze(this.geos[y],m,v.length);v.forEach(([P,S,w,T],E)=>{this.Q.setFromAxisAngle(this.Y,-w),this.P.set(P,e.at(P,S)+.1,S),this.M.compose(this.P,this.Q,this.S),x.setMatrixAt(E,this.M),_.setRGB(...vr[Math.floor(T*vr.length)%vr.length]),x.setColorAt(E,_)}),x.castShadow=!0,x.receiveShadow=!0,this.parked.add(x)}),n.add(this.parked)}speed(t,e){return(e&&e.type===3?1.1:1)*(t.hw==="trunk"?15:t.hw==="tertiary"||t.hw==="trunk_link"?10:7)}tick(t){let e=this.M;this.cars.forEach((n,s)=>{let r=this.roads[n.ri],o=this.speed(r,n)*(.8+.4*kt(s));n.v+=(o-n.v)*Math.min(1,t*.8);let a=n.v*t,c=0;for(;a>0&&c++<20;){let T=n.i,E=n.i+n.dir;if(E<0||E>=r.p.length){this.junction(n),r=this.roads[n.ri];continue}let M=r.len[Math.min(T,E)],A=(1-n.t)*M;a<A?(n.t+=a/M,a=0):(a-=A,n.i=E,n.t=0,this.junction(n,!0),r=this.roads[n.ri])}r=this.roads[n.ri];let l=n.i,h=n.i+n.dir;(h<0||h>=r.p.length)&&(h=l,l=l-n.dir);let u=r.p[l],d=r.p[h],f=u[0]+(d[0]-u[0])*n.t,m=u[1]+(d[1]-u[1])*n.t,_=d[0]-u[0],g=d[1]-u[1],p=Math.hypot(_,g)||1,v=r.o?0:Math.min(1.8,r.w/4)*(n.type===3?1.25:1),y=f-g/p*v,x=m+_/p*v,P=this.hf(r,y,x),S=this.hf(r,y+_/p*2,x+g/p*2),w=this.hf(r,y-_/p*2,x-g/p*2);this.E.set(0,-Math.atan2(g,_),Math.atan2(S-w,4),"YXZ"),this.Q.setFromEuler(this.E),this.P.set(y,P,x),e.compose(this.P,this.Q,this.S),this.meshes[n.type].setMatrixAt(n.slot,e)}),this.meshes.forEach(n=>n.instanceMatrix.needsUpdate=!0)}junction(t,e){let n=this.roads[t.ri],s=n.p[t.i],r=this.idx.get(this.key(s))||[],o=[];for(let[c,l]of r){let h=this.roads[c];l+1<h.p.length&&!(c===t.ri&&t.dir<0&&l===t.i)&&o.push([c,l,1]),l-1>=0&&!h.o&&!(c===t.ri&&t.dir>0&&l===t.i)&&o.push([c,l,-1])}if(e){let c=t.i+t.dir;if(c>=0&&c<n.p.length&&(o.length<=1||Math.random()<.7))return}if(!o.length){t.dir=n.o?1:-t.dir,n.o&&(t.i=0);return}let a=o[Math.floor(Math.random()*o.length)];t.ri=a[0],t.i=a[1],t.dir=a[2],t.t=0}}});var fa,Hd=Ae(()=>{we();fa=class{constructor(t){this.root=t,this.items=[],this.v=new N}add(t,e,n="lbl",s=4e3,r=null){let o=document.createElement("div");o.className=n,o.textContent=t,this.root.appendChild(o);let a={el:o,pos:e.clone?e:new N(...e),maxDist:s,visible:!0,group:n};return r&&(o.style.pointerEvents="auto",o.style.cursor="pointer",o.addEventListener("click",c=>{c.stopPropagation(),r()})),this.items.push(a),a}remove(t){t.el.remove(),this.items=this.items.filter(e=>e!==t)}update(t,e,n){let s=[],r=[];for(let o of this.items){if(!o.visible){o.el.style.display="none";continue}this.v.copy(o.pos);let a=this.v.distanceTo(t.position);if(this.v.project(t),this.v.z>1||a>o.maxDist||Math.abs(this.v.x)>1.1||Math.abs(this.v.y)>1.1){o.el.style.display="none";continue}r.push({it:o,d:a,x:(this.v.x*.5+.5)*e,y:(-this.v.y*.5+.5)*n})}r.sort((o,a)=>(a.it.group==="lbl mark")-(o.it.group==="lbl mark")||o.d-a.d);for(let o of r){let a=(o.it.el.textContent.length*6.6+18)/2,l=[o.x-a,o.y-22,o.x+a,o.y];if(o.it.group!=="lbl mark"&&s.some(u=>l[0]<u[2]&&l[2]>u[0]&&l[1]<u[3]&&l[3]>u[1])){o.it.el.style.display="none";continue}s.push(l);let h=o.it;h.el.style.display="block",h.el.style.transform=`translate(-50%,-100%) translate(${o.x}px,${o.y}px)`,h.el.style.opacity=Math.max(.35,Math.min(1,1.6-o.d/h.maxDist))}}setGroupVisible(t,e){for(let n of this.items)n.group===t&&(n.visible=e)}}});var Vd,iy,pa,ma,Gd=Ae(()=>{we();Vd="aimores3d_marcadores_v1",iy=[["Verde","#22c55e"],["Roxo","#a855f7"],["Azul","#3b82f6"],["Vermelho","#ef4444"],["Laranja","#f97316"],["Amarelo","#eab308"],["Rosa","#ec4899"],["Ciano","#06b6d4"],["Branco","#f8fafc"],["Preto","#111827"]],pa=()=>Math.random().toString(36).slice(2,10),ma=class{constructor(t){Object.assign(this,t),this.group=new se,this.group.name="marcadores",this.scene.add(this.group),this.state=this.load(),this.mode="nav",this.selCat=this.state.cats[0]?.id||null,this.objs=new Map,this.ray=new Ts,this.mouse=new vt,this.headGeo=new En(1,20,14),this.stickGeo=new fe(.09,.09,1,8),this.stickGeo.translate(0,.5,0),this.ringGeo=new Co(.8,1.2,24),this.ringGeo.rotateX(-Math.PI/2),this.state.marks.forEach(e=>this.makeObj(e)),this.bindCanvas(),this.render()}load(){try{let t=JSON.parse(localStorage.getItem(Vd));if(t&&t.cats&&t.marks)return t}catch{}return{cats:[{id:pa(),name:"Ponto cego",color:"#ef4444",limit:null},{id:pa(),name:"Ponto de interesse",color:"#3b82f6",limit:null}],marks:[]}}save(){localStorage.setItem(Vd,JSON.stringify(this.state))}cat(t){return this.state.cats.find(e=>e.id===t)}count(t){return this.state.marks.filter(e=>e.cat===t).length}makeObj(t){let e=this.cat(t.cat);if(!e)return;let n=new Yt(e.color),s=new se,r=new Rt({color:n,emissive:n,emissiveIntensity:.35,roughness:.4}),o=new Lt(this.headGeo,r);o.position.y=7,o.userData.markId=t.id;let a=new Lt(this.stickGeo,new Rt({color:16777215,roughness:.5}));a.scale.y=6.2;let c=new Lt(this.ringGeo,new vs({color:n,transparent:!0,opacity:.85,depthWrite:!1}));c.position.y=.3,s.add(o,a,c),s.position.set(t.x,t.y,t.z),s.userData.markId=t.id,o.castShadow=!0,this.group.add(s);let l=this.labels.add(t.name,new N(t.x,t.y+9,t.z),"lbl mark",6e3,()=>this.select(t.id));l.el.style.borderColor=e.color,this.objs.set(t.id,{g:s,head:o,lbl:l,mat:r,ring:c})}removeObj(t){let e=this.objs.get(t);e&&(this.group.remove(e.g),this.labels.remove(e.lbl),this.objs.delete(t))}refreshObj(t){this.removeObj(t.id),this.makeObj(t)}tickScale(t){for(let[e,n]of this.objs){let s=t.position.distanceTo(n.g.position),r=Math.max(.5,Math.min(8,s/160));n.g.scale.setScalar(r),n.lbl.pos.set(n.g.position.x,n.g.position.y+8.3*r,n.g.position.z)}}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect();return this.mouse.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.mouse,this.camera),this.ray.intersectObjects(e,!0)[0]}bindCanvas(){let t=this.renderer.domElement,e=null,n=null;t.addEventListener("pointerdown",s=>{if(e={x:s.clientX,y:s.clientY},this.mode==="move"){let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&(n=r.object.userData.markId,this.controls.enabled=!1,t.setPointerCapture(s.pointerId))}}),t.addEventListener("pointermove",s=>{if(!n)return;let r=this.pick(s,this.pickTargets());if(r){let o=this.state.marks.find(a=>a.id===n);o.x=r.point.x,o.y=r.point.y,o.z=r.point.z,this.objs.get(n).g.position.copy(r.point)}}),t.addEventListener("pointerup",s=>{if(n){n=null,this.controls.enabled=!0,this.save(),this.render();return}if(!(!e||Math.hypot(s.clientX-e.x,s.clientY-e.y)>6))if(this.mode==="place"){let r=this.cat(this.selCat);if(!r){this.toast("Escolha uma categoria primeiro");return}if(r.limit&&this.count(r.id)>=r.limit){this.toast(`Limite de ${r.limit} marcador(es) para "${r.name}" atingido`);return}let o=this.pick(s,this.pickTargets());if(!o)return;let a=this.count(r.id)+1,c={id:pa(),cat:r.id,name:`${r.name} ${a}`,x:+o.point.x.toFixed(2),y:+o.point.y.toFixed(2),z:+o.point.z.toFixed(2),note:"",ts:Date.now()};this.state.marks.push(c),this.makeObj(c),this.save(),this.render(),this.selMark=c.id,this.render()}else{let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&this.select(r.object.userData.markId)}})}select(t){this.selMark=t,this.render();let e=this.objs.get(t);e&&(e.mat.emissiveIntensity=1,setTimeout(()=>e.mat.emissiveIntensity=.35,600))}setMode(t){this.mode=t,this.onMode&&setTimeout(()=>this.onMode(t),0),this.renderer.domElement.style.cursor=t==="place"?"crosshair":t==="move"?"grab":"",this.render()}toast(t){let e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>e.classList.remove("show"),2600)}latlon(t){let e=this.H;return[(e.LAT0-t.z/e.KZ).toFixed(6),(e.LON0+t.x/e.KX).toFixed(6)]}render(){let t=this.panel,e=this.state,n=c=>String(c).replace(/[&<>"]/g,l=>"&#"+l.charCodeAt(0)+";"),s=`<div class="modes"><button data-mode="nav" class="${this.mode==="nav"?"on":""}">\u{1F590} Navegar</button><button data-mode="place" class="${this.mode==="place"?"on":""}">\u{1F4CD} Colocar</button><button data-mode="move" class="${this.mode==="move"?"on":""}">\u2725 Mover</button></div>`;s+=`<div class="hint">${this.mode==="place"?innerWidth<=760?"Escolha a categoria e toque no mapa para colocar.":"Escolha a categoria e clique no mapa para colocar.":this.mode==="move"?"Arraste a bolinha do marcador para mudar de lugar.":"Clique num marcador para ver/editar."}</div>`,s+='<h3>Categorias</h3><div class="cats">';for(let c of e.cats){let l=this.count(c.id);s+=`<div class="cat ${c.id===this.selCat?"sel":""}" data-cat="${c.id}"><span class="sw" style="background:${c.color}"></span><span class="nm">${n(c.name)}</span><span class="ct">${l}${c.limit?"/"+c.limit:""}</span><button class="ic" data-editcat="${c.id}" title="Editar">\u270E</button><button class="ic" data-delcat="${c.id}" title="Apagar">\u{1F5D1}</button></div>`,this.editCat===c.id&&(s+=`<div class="form"><input id="ec_name" value="${n(c.name)}" placeholder="Nome"><input id="ec_color" type="color" value="${c.color}"><input id="ec_limit" type="number" min="1" value="${c.limit||""}" placeholder="Qtd. m\xE1x (opcional)"><button id="ec_ok">Salvar</button></div>`)}s+=`</div><details ${this.openNew?"open":""} id="newcat"><summary>+ Nova categoria</summary><div class="form"><div class="presets">${iy.map(([c,l])=>`<span class="sw pick" title="${c}" data-color="${l}" style="background:${l}"></span>`).join("")}</div>
      <input id="nc_name" placeholder="Nome (ex.: ferreiro)"><input id="nc_color" type="color" value="#22c55e"><input id="nc_limit" type="number" min="1" placeholder="Quantos? (vazio = sem limite)"><button id="nc_ok">Criar categoria</button></div></details>`,s+=`<h3>Marcadores (${e.marks.length})</h3><div class="marks">`;for(let c of e.cats){let l=e.marks.filter(h=>h.cat===c.id);if(l.length){s+=`<div class="mgrp"><span class="sw" style="background:${c.color}"></span>${n(c.name)}</div>`;for(let h of l)if(s+=`<div class="mk ${h.id===this.selMark?"sel":""}" data-mark="${h.id}"><span class="nm">${n(h.name)}</span><button class="ic" data-fly="${h.id}" title="Ir at\xE9">\u{1F441}</button><button class="ic" data-delmark="${h.id}" title="Apagar">\u{1F5D1}</button></div>`,h.id===this.selMark){let[u,d]=this.latlon(h);s+=`<div class="form"><input id="em_name" value="${n(h.name)}"><select id="em_cat">${e.cats.map(f=>`<option value="${f.id}" ${f.id===h.cat?"selected":""}>${n(f.name)}</option>`).join("")}</select><textarea id="em_note" placeholder="Observa\xE7\xE3o">${n(h.note||"")}</textarea><div class="coord">${u}, ${d}</div><button id="em_ok">Salvar</button></div>`}}}s+='</div><div class="io"><button id="exp">\u2B07 Exportar</button><label class="btn">\u2B06 Importar<input id="imp" type="file" accept=".json,application/json" hidden></label><button id="clr">Limpar</button></div>',t.innerHTML=s;let r=document.getElementById("mkstatus");if(r){let c=this.cat(this.selCat);r.textContent=this.mode==="place"&&c?`Colocando: ${c.name}`:this.mode==="move"?"Modo mover":`${e.marks.length} marcador(es)`}t.querySelectorAll("[data-mode]").forEach(c=>c.onclick=()=>this.setMode(c.dataset.mode)),t.querySelectorAll(".cat").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selCat=c.dataset.cat,this.mode==="nav"?this.setMode("place"):this.render())}),t.querySelectorAll("[data-editcat]").forEach(c=>c.onclick=()=>{this.editCat=this.editCat===c.dataset.editcat?null:c.dataset.editcat,this.render()}),t.querySelectorAll("[data-delcat]").forEach(c=>c.onclick=()=>{let l=this.cat(c.dataset.delcat),h=this.count(l.id);confirm(`Apagar a categoria "${l.name}"${h?` e seus ${h} marcador(es)`:""}?`)&&(e.marks.filter(u=>u.cat===l.id).forEach(u=>this.removeObj(u.id)),e.marks=e.marks.filter(u=>u.cat!==l.id),e.cats=e.cats.filter(u=>u!==l),this.selCat===l.id&&(this.selCat=e.cats[0]?.id),this.save(),this.render())});let o=t.querySelector("#ec_ok");o&&(o.onclick=()=>{let c=this.cat(this.editCat);c.name=t.querySelector("#ec_name").value.trim()||c.name,c.color=t.querySelector("#ec_color").value;let l=parseInt(t.querySelector("#ec_limit").value);c.limit=l>0?l:null,this.editCat=null,e.marks.filter(h=>h.cat===c.id).forEach(h=>this.refreshObj(h)),this.save(),this.render()}),t.querySelectorAll(".pick").forEach(c=>c.onclick=()=>{t.querySelector("#nc_color").value=c.dataset.color;let l=t.querySelector("#nc_name");l.value||(l.placeholder=`Nome (cor ${c.title.toLowerCase()})`)}),t.querySelector("#newcat").ontoggle=c=>{this.openNew=c.target.open},t.querySelector("#nc_ok").onclick=()=>{let c=t.querySelector("#nc_name").value.trim();if(!c){this.toast("D\xEA um nome para a categoria");return}let l=parseInt(t.querySelector("#nc_limit").value),h={id:pa(),name:c,color:t.querySelector("#nc_color").value,limit:l>0?l:null};e.cats.push(h),this.selCat=h.id,this.openNew=!1,this.save(),this.setMode("place"),this.toast(`Categoria "${c}" criada. Clique no mapa para colocar.`)},t.querySelectorAll(".mk").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selMark=this.selMark===c.dataset.mark?null:c.dataset.mark,this.render())}),t.querySelectorAll("[data-fly]").forEach(c=>c.onclick=()=>{let l=e.marks.find(h=>h.id===c.dataset.fly);this.flyTo(new N(l.x,l.y,l.z),120),this.select(l.id)}),t.querySelectorAll("[data-delmark]").forEach(c=>c.onclick=()=>{let l=c.dataset.delmark;this.removeObj(l),e.marks=e.marks.filter(h=>h.id!==l),this.save(),this.render()});let a=t.querySelector("#em_ok");a&&(a.onclick=()=>{let c=e.marks.find(l=>l.id===this.selMark);c.name=t.querySelector("#em_name").value.trim()||c.name,c.cat=t.querySelector("#em_cat").value,c.note=t.querySelector("#em_note").value,this.refreshObj(c),this.save(),this.render(),this.toast("Marcador salvo")}),t.querySelector("#exp").onclick=()=>{let c=JSON.parse(JSON.stringify(e));c.marks.forEach(u=>{let[d,f]=this.latlon(u);u.lat=+d,u.lon=+f});let l=new Blob([JSON.stringify({app:"aimores-3d",version:1,exported:new Date().toISOString(),...c},null,2)],{type:"application/json"}),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download="marcadores-aimores.json",h.click()},t.querySelector("#imp").onchange=c=>{let l=c.target.files[0];l&&l.text().then(h=>{try{let u=JSON.parse(h);if(!u.cats||!u.marks)throw 0;confirm("Substituir os marcadores atuais? (Cancelar = juntar com os atuais)")&&(e.marks.forEach(_=>this.removeObj(_.id)),e.cats=[],e.marks=[]);let f=new Set(e.cats.map(_=>_.id));u.cats.forEach(_=>{f.has(_.id)||e.cats.push({id:_.id,name:_.name,color:_.color,limit:_.limit||null})});let m=new Set(e.marks.map(_=>_.id));u.marks.forEach(_=>{if(m.has(_.id))return;let g={id:_.id,cat:_.cat,name:_.name,x:_.x,y:_.y,z:_.z,note:_.note||"",ts:_.ts||Date.now()};e.marks.push(g),this.makeObj(g)}),this.selCat=e.cats[0]?.id,this.save(),this.render(),this.toast("Importado!")}catch{this.toast("Arquivo inv\xE1lido")}})},t.querySelector("#clr").onclick=()=>{confirm("Apagar TODOS os marcadores? (as categorias ficam)")&&(e.marks.forEach(c=>this.removeObj(c.id)),e.marks=[],this.save(),this.render())}}}});var ry=Zd(()=>{we();ku();Hu();nd();ud();kl();_d();aa();Vl();Cd();Id();Nd();zd();kd();Hd();Gd();var Fs=window.AIMORES,Wd=new URLSearchParams(location.search).has("shot"),Zt=Fs.city,ql=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700,Er=new URLSearchParams(location.search),Ye=Er.get("q")||localStorage.getItem("aimores3d_q")||(ql?"medium":"high");["low","medium","high","ultra"].includes(Ye)||(Ye=ql?"medium":"high");var Ei=async i=>{document.getElementById("loadmsg").textContent=i,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))};async function sy(){await Ei("Preparando o relevo\u2026");let i=new fo({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:Er.has("shot")});i.setPixelRatio(Math.min(devicePixelRatio,{low:1,medium:1.5,high:2,ultra:2}[Ye])),i.setSize(innerWidth,innerHeight),i.toneMapping=_l,i.toneMappingExposure=.62,i.outputColorSpace=_e,i.shadowMap.enabled=Ye!=="low",i.shadowMap.type=gl,document.getElementById("app").appendChild(i.domElement);let t=new or,e=new Je(48,innerWidth/innerHeight,1.5,4e4),n=new Wo(e,i.domElement);n.enableDamping=!0,n.dampingFactor=.08,n.maxPolarAngle=Math.PI*.47,n.minDistance=10,n.maxDistance=7e3,n.screenSpacePanning=!1,n.zoomToCursor=!0;let s=new Jo(Zt.meta,Ko(Fs.height)),r=Ko(Fs.meshes),o=new Cs;o.scale.setScalar(45e4),t.add(o);let a=o.material.uniforms;a.turbidity.value=2.6,a.rayleigh.value=2,a.mieCoefficient.value=.0035,a.mieDirectionalG.value=.82;let c=new No(16773596,2.6);c.castShadow=!0;let l={low:1024,medium:2048,high:4096,ultra:8192}[Ye];c.shadow.mapSize.set(l,l),c.shadow.bias=-4e-4,c.shadow.normalBias=.6,t.add(c),t.add(c.target);let h=new Uo(13624319,7035456,.9);t.add(h);let u=new Es(i),d=null,f=new or,m=new Cs;m.scale.setScalar(1e3),f.add(m),t.fog=new po(13227746,2200,24e3),o.visible=!1;let _=Rd(Ye);t.add(_);let g=new N;function p(Q){let Y=(Q-6)/12,st=Math.sin(Math.PI*Y)*68+2,ut=-75+Y*150,xt=_r.degToRad(90-st),Pt=_r.degToRad(ut+180);g.setFromSphericalCoords(1,xt,Pt),a.sunPosition.value.copy(g);for(let Jt of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])m.material.uniforms[Jt].value=a[Jt].value;m.material.uniforms.sunPosition.value.copy(g),d&&d.dispose(),d=u.fromScene(f,0,1,3e4),t.environment=d.texture,t.environmentIntensity=.55;let Gt=Math.max(0,Math.min(1,st/25));c.color.setRGB(1,.72+.26*Gt,.5+.42*Gt),c.intensity=.6+2.2*Math.max(0,Math.min(1,st/35)),h.intensity=.35+.6*Gt,t.fog.color.setRGB(.48+.08*Gt,.58+.07*Gt,.74+.06*Gt),_.material.uniforms.sunDir.value.copy(g),_.material.uniforms.day.value=Math.max(.15,Math.min(1,(st+4)/20)),i.toneMappingExposure=.5+.15*Gt}p(+(Er.get("h")||15.5)),await Ei("Montando terreno e serras ao redor\u2026");let v=await new mr().loadAsync(Fs.ground);if(Ye==="low"){let Q=v.image,Y=document.createElement("canvas");Y.width=2048,Y.height=Math.round(2048*Q.height/Q.width),Y.getContext("2d").drawImage(Q,0,0,Y.width,Y.height),v=new sn(Y)}v.colorSpace=_e,v.anisotropy=i.capabilities.getMaxAnisotropy();let y=td(s,v,Ye);t.add(y);let x=await new mr().loadAsync(Fs.backtex);x.colorSpace=_e,x.anisotropy=8;let P=ed(Zt.meta,Ko(Fs.back),s,x);t.add(P),await Ei("Ruas, cal\xE7adas e meio-fio\u2026");let S=Gl(Zt),w=Ld(Zt),T=Dd(Zt);if(S){Zt.trees=Zt.trees.filter(Q=>!S(Q[0],Q[1])&&!S(Q[0]+3,Q[1])&&!S(Q[0]-3,Q[1])&&!S(Q[0],Q[1]+3)&&!S(Q[0],Q[1]-3));{let Q=Gl(Zt,7),Y=st=>!Q((st[0]+st[2])/2,(st[1]+st[3])/2)&&!Q(st[0],st[1])&&!Q(st[2],st[3]);Zt.walls=Zt.walls.filter(Y),Zt.gates&&(Zt.gates=Zt.gates.filter(Y))}}let E=cd(Zt,s,r,t,{exclude:S,skipIds:w});if(S)for(let Q of Zt.roads)w.has(Q.id)&&(Q.b=!0);let M=ld(Zt,s,r,t);await Ei("Igreja, pra\xE7a e campos\u2026");let A=Fd(Zt,s,t),F=Od(Zt,s,t);Bd(Zt,s,t),await Ei("Casas, telhados e muros\u2026");let U=A.center,B=A.radius,O=A.frame,V=ad(Zt,s,t,Q=>{let Y=0,st=0;for(let Jt of Q.p)Y+=Jt[0],st+=Jt[1];Y/=Q.p.length,st/=Q.p.length;let ut=Y-O.C[0],xt=st-O.C[1],Pt=ut*O.f[0]+xt*O.f[1],Gt=ut*O.r[0]+xt*O.r[1];return Math.abs(Gt)<O.fx+2&&Pt>O.fz0-2&&Pt<O.fz1+2},Ye);{let Q=[];for(let ut of Zt.rail)for(let xt=0;xt<ut.pts.length-1;xt++)Q.push([ut.pts[xt][0],ut.pts[xt][1],ut.pts[xt+1][0],ut.pts[xt+1][1]]);let Y=(ut,xt)=>{for(let[Pt,Gt,Jt,ne]of Q){if(Math.abs(ut-Pt)>80&&Math.abs(ut-Jt)>80)continue;let Me=Jt-Pt,Te=ne-Gt,mn=Me*Me+Te*Te||1,tn=((ut-Pt)*Me+(xt-Gt)*Te)/mn;tn=Math.max(0,Math.min(1,tn));let Fe=Pt+Me*tn-ut,gn=Gt+Te*tn-xt;if(Fe*Fe+gn*gn<16)return!0}return!1};Zt.trees=Zt.trees.filter(ut=>!Y(ut[0],ut[1]));let st=ut=>!Y((ut[0]+ut[2])/2,(ut[1]+ut[3])/2)&&!Y(ut[0],ut[1])&&!Y(ut[2],ut[3]);Zt.walls=Zt.walls.filter(st),Zt.gates&&(Zt.gates=Zt.gates.filter(st))}let C=hd(Zt,s,t);await Ei("Ferrovia Vit\xF3ria-Minas, viaduto e passarelas\u2026");let k=Sd(Zt,s,t),G=wd(k.paths,t),it=Ad(Zt,s,t,k.paths),ft=Ud(Zt,s,t,k.paths),pt=Pd(Zt,s,t),Z=Td(Zt,s,t,Zt.viaduct.railtop);await Ei("\xC1rvores\u2026");let tt=gd(Zt,s,t,Ye,F?F.palms:[]);await Ei("Tr\xE2nsito\u2026");let mt=new Map,ot=Zt.viaduct,bt=ot.ramps.map(Q=>new fn(Q.pts,Q.h)),yt=(Q,Y)=>{let st=1e9,ut=null;for(let xt of bt)for(let Pt=0;Pt<xt.L;Pt+=3){let Gt=xt.at(Pt),Jt=Math.hypot(Gt[0]-Q,Gt[2]-Y);Jt<st&&(st=Jt,ut=Gt[1])}return st<7?ut:null},et=(Q,Y,st)=>{if(w.has(Q.id)){let ut=T(Q.id,Y,st);if(ut!==null)return ut+.12}if(Q.id===1314627853)return ot.h+.05;if(Q.id===1314627855||Q.id===1314627854){let ut=yt(Y,st);if(ut!==null)return ut+.2}return s.at(Y,st)+.1},wt=new ha(Zt,s,t,et,{low:60,medium:110,high:170,ultra:220}[Ye],{low:.03,medium:.05}[Ye]||.11,Ye),W=new fa(document.getElementById("labels"));for(let[Q,Y]of Object.entries(Zt.neigh)){if(Y.area<2e4)continue;let[st,ut]=Y.label;W.add(Q==="Nilton Freire Sampaio"?"Residencial Nilton Freire Sampaio":Q,new N(st,s.at(st,ut)+40,ut),"lbl nb",3500)}for(let[Q,Y,st]of Zt.extras.poi){let ut=Q.startsWith("Viaduto")?ot.h+12:s.at(Y,st)+(Q.startsWith("Igreja")?42:18);W.add(Q.replace("Estadio","Est\xE1dio"),new N(Y,ut,st),"lbl poi",2600)}let q=new se;q.name="limites";let I=[16765286,448160,15681391,1149618,16223339,13073919,9485933,16369487],lt=0;for(let[Q,Y]of Object.entries(Zt.neigh)){let st=I[lt++%I.length];for(let ut of Y.rings){let xt=[];for(let Jt=0;Jt<ut.length-1;Jt++){let[ne,Me]=ut[Jt],[Te,mn]=ut[Jt+1],tn=Math.hypot(Te-ne,mn-Me);for(let Fe=0;Fe<tn;Fe+=4){let gn=ne+(Te-ne)*Fe/tn,si=Me+(mn-Me)*Fe/tn;xt.push(new N(gn,s.at(gn,si)+1.2,si))}}if(xt.length<2)continue;xt.push(xt[0].clone());let Pt=new oe().setFromPoints(xt),Gt=new xo(Pt,new Io({color:st,dashSize:8,gapSize:5,transparent:!0,opacity:.9,depthTest:!0}));Gt.computeLineDistances(),q.add(Gt)}}q.visible=!1,t.add(q);let H=Q=>{let Y=Zt.neigh[Q];return Y?Y.label:[0,0]},J={geral:{t:[-120,0,120],d:2300,pol:.95,az:-.35},rua:{t:(()=>{let Q=Zt.neigh["Nilton Freire Sampaio"].label,Y=null,st=1e9;for(let ut of Zt.roads)if(ut.s==="paver")for(let xt of ut.p){let Pt=Math.hypot(xt[0]-Q[0],xt[1]-Q[1]);Pt<st&&(st=Pt,Y=xt)}return[Y[0],0,Y[1]]})(),d:26,pol:1.38,az:.6},panorama:{t:[-300,0,150],d:1500,pol:1.33,az:-.25},viaduto:{t:[it.center[0],it.center[1]-3,it.center[2]],d:120,pol:1.22,az:(()=>{let[Q,Y]=Zt.viaduct.deck,st=Y[0]-Q[0],ut=Y[1]-Q[1],xt=Math.hypot(st,ut),Pt=-ut/xt,Gt=st/xt,Jt=Pt*.85+st/xt*.5,ne=Gt*.85+ut/xt*.5;return Math.atan2(Jt,ne)})()},igreja:{t:[A.center[0],s.at(A.center[0],A.center[1]),A.center[1]],d:120,pol:1.05,az:Math.atan2(A.front[0],A.front[1])},praca:{t:[F.center[0],s.at(F.center[0],F.center[1]),F.center[1]],d:95,pol:.9,az:.5},residencial:{t:[H("Nilton Freire Sampaio")[0],0,H("Nilton Freire Sampaio")[1]],d:380,pol:.85,az:-.3},triangulo:{t:[H("Tri\xE2ngulo")[0],0,H("Tri\xE2ngulo")[1]],d:420,pol:.9,az:.3},sossego:{t:[H("Sossego")[0],0,H("Sossego")[1]],d:330,pol:.85,az:-.6},hospital:{t:[...(()=>{let Q=Zt.extras.poi.find(Y=>Y[0].startsWith("Hospital"));return[Q[1],0,Q[2]]})()],d:420,pol:.9,az:.6}},$=null;function ht(Q,Y=200,st=1,ut=null){let xt=Q.clone?Q.clone():new N(...Q);xt.y||(xt.y=s.at(xt.x,xt.z));let Pt=e.position.clone().sub(n.target),Gt=new ni().setFromVector3(Pt);ut===null&&(ut=Gt.theta);let Jt=new N().setFromSpherical(new ni(Y,st,ut)).add(xt);$={t0:performance.now(),dur:1600,fromP:e.position.clone(),fromT:n.target.clone(),toP:Jt,toT:xt}}function X(Q,Y){if(Q==="rua"){let xt=Zt.neigh["Nilton Freire Sampaio"].label,Pt=null,Gt=1e9;for(let ri of Zt.roads)if(ri.s==="paver")for(let Fn=0;Fn<ri.p.length-1;Fn++){let Os=ri.p[Fn],Si=Math.hypot(Os[0]-xt[0],Os[1]-xt[1]);Si<Gt&&(Gt=Si,Pt=[ri.p[Fn],ri.p[Fn+1]])}let[Jt,ne]=Pt,Me=ne[0]-Jt[0],Te=ne[1]-Jt[1],mn=Math.hypot(Me,Te),tn=Jt[0]+Me/mn*30,Fe=Jt[1]+Te/mn*30,gn=new N(tn,s.at(tn,Fe)+1.5,Fe),si=new N(Jt[0]-Me/mn*6,s.at(Jt[0],Jt[1])+5,Jt[1]-Te/mn*6);Y?(n.target.copy(gn),e.position.copy(si),n.update()):$={t0:performance.now(),dur:1600,fromP:e.position.clone(),fromT:n.target.clone(),toP:si,toT:gn};return}let st=J[Q],ut=new N(...st.t);st.t[1]||(ut.y=s.at(ut.x,ut.z)),Y?(n.target.copy(ut),e.position.copy(new N().setFromSpherical(new ni(st.d,st.pol,st.az)).add(ut)),n.update()):ht(ut,st.d,st.pol,st.az)}X(Er.get("view")||"geral",!0),i.domElement.addEventListener("dblclick",Q=>{let Y=i.domElement.getBoundingClientRect(),st=new vt((Q.clientX-Y.left)/Y.width*2-1,-((Q.clientY-Y.top)/Y.height)*2+1),ut=new Ts;ut.setFromCamera(st,e);let xt=ut.intersectObjects([y,E],!0)[0];xt&&ht(xt.point.clone().add(new N(0,1.6,0)),25,1.45)});let R=()=>[y,E,V,C,A.group,it.group,Z],b=new ma({scene:t,camera:e,renderer:i,controls:n,labels:W,pickTargets:R,H:s,flyTo:ht,panel:document.getElementById("mkbody")});document.querySelectorAll("[data-view]").forEach(Q=>Q.onclick=()=>X(Q.dataset.view));let z=(Q,Y)=>{let st=document.getElementById(Q);st.onchange=()=>Y(st.checked),Y(st.checked)};z("t_cars",Q=>{wt.mesh.visible=Q,wt.parked.visible=Q}),z("t_train",Q=>{G.group.userData.off=!Q}),z("t_labels",Q=>{W.setGroupVisible("lbl nb",Q),W.setGroupVisible("lbl poi",Q)}),z("t_limits",Q=>{q.visible=Q}),z("t_trees",Q=>{tt.visible=Q}),z("t_shadows",Q=>{c.castShadow=Q&&Ye!=="low"});let j=document.getElementById("hour");j.value=Er.get("h")||15.5;let ct=document.getElementById("hourlbl"),at=Q=>`${Math.floor(Q)}:${String(Math.round(Q%1*60)).padStart(2,"0")}`;ct.textContent=at(+j.value);let Mt=null;j.oninput=()=>{ct.textContent=at(+j.value),clearTimeout(Mt),Mt=setTimeout(()=>p(+j.value),60)};let dt=document.getElementById("quality");dt.value=Ye,dt.onchange=()=>{localStorage.setItem("aimores3d_q",dt.value),location.search="?q="+dt.value};let Et=document.getElementById("mkpanel");document.getElementById("mkhead").onclick=()=>Et.classList.toggle("closed"),b.onMode=Q=>{innerWidth<=760&&Q!=="nav"&&!b.state.marks.length&&Q==="place"&&Et.classList.add("closed"),innerWidth<=760&&Q==="place"&&(Et.classList.add("closed"),b.toast("Toque no mapa para colocar o pino"))};let At=document.getElementById("touchmode"),St=!1,Dt=()=>{n.touches={ONE:St?rn.ROTATE:rn.PAN,TWO:rn.DOLLY_ROTATE},At.textContent=St?"\u{1F504} 1 dedo: girar":"\u270B 1 dedo: mover",At.classList.toggle("on",St)};Dt(),At.onclick=()=>{St=!St,Dt()},document.getElementById("layersbtn").onclick=()=>{document.getElementById("layers").classList.toggle("open"),document.getElementById("layersbtn").classList.toggle("on")},ql&&document.getElementById("mkpanel").classList.add("closed"),document.getElementById("helpbtn").onclick=()=>document.getElementById("help").classList.toggle("show"),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let Ft=new Fo,Ht=0,It=null,Qt=0,$t=0,de=new In(new N(s.XMIN-300,-1e4,s.ZMIN-300),new N(s.XMAX+300,1e4,s.ZMAX+300));function K(){let Q=Wd?.05:Math.min(.05,Ft.getDelta());if(Ht+=Q,$){let Pt=Math.min(1,(performance.now()-$.t0)/$.dur),Gt=Pt<.5?4*Pt*Pt*Pt:1-Math.pow(-2*Pt+2,3)/2;e.position.lerpVectors($.fromP,$.toP,Gt),n.target.lerpVectors($.fromT,$.toT,Gt),Pt>=1&&($=null)}n.update(),n.target.clamp(de.min,de.max),_.position.copy(e.position);let Y=s.at(e.position.x,e.position.z);e.position.y<Y+2&&(e.position.y=Y+2),wt.mesh.visible&&wt.tick(Q),G.group.userData.off?G.group.visible=!1:G.tick(Q),M&&M.userData.tick(Ht);let st=e.position.distanceTo(n.target),ut=Math.max(120,Math.min(1600,st*1.25)),xt=c.shadow.camera;xt.left=-ut,xt.right=ut,xt.top=ut,xt.bottom=-ut,xt.near=1,xt.far=6e3,xt.updateProjectionMatrix(),c.target.position.copy(n.target),c.position.copy(n.target).addScaledVector(g,3e3),Ye==="medium"&&(i.shadowMap.autoUpdate=!1,$t++,(!It||It.distanceTo(n.target)>ut*.04||Math.abs(Qt-ut)>ut*.05||$t>20)&&(i.shadowMap.needsUpdate=!0,$t=0,It=(It||new N).copy(n.target),Qt=ut)),b.tickScale(e),i.render(t,e),W.update(e,innerWidth,innerHeight),Wd||requestAnimationFrame(K)}document.getElementById("loading").classList.add("done"),window.__ready=!0,window.__app={setCam:(Q,Y)=>{$=null,n.target.set(...Y),e.position.set(...Q),n.update()},city:Zt,traffic:wt,trainAt:(Q,Y)=>G.placeNear(Q,Y),info:()=>({calls:i.info.render.calls,tris:i.info.render.triangles,geom:i.info.memory.geometries,tex:i.info.memory.textures}),renderFrame:(Q=1,Y=.05)=>{for(let st=0;st<Q;st++)Ft.getDelta(),K();return!0},goView:X,camera:e,controls:n,markers:b,flyTo:ht,H:s,setTime:p,scene:t,viad2:ft,club:pt},window.__zincSpot=()=>{let Q=Zt.buildings.map(ut=>{let xt=0,Pt=0;for(let Gt of ut.p)xt+=Gt[0],Pt+=Gt[1];return[xt/ut.p.length,Pt/ut.p.length,ut.rm==="metal"||ut.rm==="fiber"]}),Y=null,st=-1;for(let ut of Q){if(!ut[2])continue;let xt=0;for(let Pt of Q)Pt[2]&&Math.hypot(Pt[0]-ut[0],Pt[1]-ut[1])<40&&xt++;xt>st&&(st=xt,Y=ut)}return[Y[0],s.at(Y[0],Y[1]),Y[1]]},K()}sy().catch(i=>{console.error(i),document.getElementById("loadmsg").textContent="Erro ao carregar: "+i.message})});ry();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
