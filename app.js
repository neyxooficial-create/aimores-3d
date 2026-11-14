(()=>{var Ae=(i,t)=>()=>(i&&(t=i(i=0)),t);var zd=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function ml(i,t){return(i%t+t)%t}function wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tf(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function Af(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function Rf(i,t=1){return t-Math.abs(ml(i,t*2)-t)}function Cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function If(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lf(i,t){return i+Math.random()*(t-i)}function Df(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*zs}function Ff(i){return i*Xs}function Of(i){return(i&i-1)===0&&i!==0}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hf(){let i=qs("canvas");return i.style.display="block",i}function Os(i){i in th||(th[i]=!0,console.warn(i))}function Vf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function np(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===li,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,br),i.getVertexPosition(c,wr),i.getVertexPosition(l,Tr);let h=np(i,t,e,n,br,wr,Tr,_h);if(h){let u=new U;Ei.getBarycoord(_h,br,wr,Tr,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,a,c,l,u,new _t)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,a,c,l,u,new _t)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Ei.getNormal(br,wr,Tr,d.normal),h.face=d,h.barycoord=u}return h}function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function ip(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}function Mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function G0(i,t,e,n,s,r,o){let a=new qt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1,y=m(v);y===null?p(a,c):y&&y.isColor&&(p(y,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,M){let y=m(M);y&&(y.isCubeTexture||y.mapping===To)?(h===void 0&&(h=new Ot(new He(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:ps(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(yi)),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==ue,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ot(new ms(2,2),new Ke({name:"BackgroundMaterial",uniforms:ps(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Ir,vu(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:g}}function W0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,T,L,I,z){let k=!1,B=u(I,L,T);r!==B&&(r=B,l(r.object)),k=f(x,I,L,z),k&&m(x,I,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(x,T,L,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,T,L){let I=L.wireframe===!0,z=n[x.id];z===void 0&&(z={},n[x.id]=z);let k=z[T.id];k===void 0&&(k={},z[T.id]=k);let B=k[I];return B===void 0&&(B=d(c()),k[I]=B),B}function d(x){let T=[],L=[],I=[];for(let z=0;z<e;z++)T[z]=0,L[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:I,object:x,attributes:{},index:null}}function f(x,T,L,I){let z=r.attributes,k=T.attributes,B=0,Z=L.getAttributes();for(let N in Z)if(Z[N].location>=0){let dt=z[N],mt=k[N];if(mt===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function m(x,T,L,I){let z={},k=T.attributes,B=0,Z=L.getAttributes();for(let N in Z)if(Z[N].location>=0){let dt=k[N];dt===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));let mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),z[N]=mt,B++}r.attributes=z,r.attributesNum=B,r.index=I}function _(){let x=r.newAttributes;for(let T=0,L=x.length;T<L;T++)x[T]=0}function g(x){p(x,0)}function p(x,T){let L=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;L[x]=1,I[x]===0&&(i.enableVertexAttribArray(x),I[x]=1),z[x]!==T&&(i.vertexAttribDivisor(x,T),z[x]=T)}function v(){let x=r.newAttributes,T=r.enabledAttributes;for(let L=0,I=T.length;L<I;L++)T[L]!==x[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function M(x,T,L,I,z,k,B){B===!0?i.vertexAttribIPointer(x,T,L,z,k):i.vertexAttribPointer(x,T,L,I,z,k)}function y(x,T,L,I){_();let z=I.attributes,k=L.getAttributes(),B=T.defaultAttributeValues;for(let Z in k){let N=k[Z];if(N.location>=0){let ft=z[Z];if(ft===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),ft!==void 0){let dt=ft.normalized,mt=ft.itemSize,yt=t.get(ft);if(yt===void 0)continue;let bt=yt.buffer,et=yt.type,ct=yt.bytesPerElement,Mt=et===i.INT||et===i.UNSIGNED_INT||ft.gpuType===al;if(ft.isInterleavedBufferAttribute){let G=ft.data,it=G.stride,pt=ft.offset;if(G.isInstancedInterleavedBuffer){for(let q=0;q<N.locationSize;q++)p(N.location+q,G.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let q=0;q<N.locationSize;q++)g(N.location+q);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let q=0;q<N.locationSize;q++)M(N.location+q,mt/N.locationSize,et,dt,it*ct,(pt+mt/N.locationSize*q)*ct,Mt)}else{if(ft.isInstancedBufferAttribute){for(let G=0;G<N.locationSize;G++)p(N.location+G,ft.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let G=0;G<N.locationSize;G++)g(N.location+G);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let G=0;G<N.locationSize;G++)M(N.location+G,mt/N.locationSize,et,dt,mt*ct,mt/N.locationSize*G*ct,Mt)}}else if(B!==void 0){let dt=B[Z];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(N.location,dt);break;case 3:i.vertexAttrib3fv(N.location,dt);break;case 4:i.vertexAttrib4fv(N.location,dt);break;default:i.vertexAttrib1fv(N.location,dt)}}}}v()}function C(){A();for(let x in n){let T=n[x];for(let L in T){let I=T[L];for(let z in I)h(I[z].object),delete I[z];delete T[L]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let T=n[x.id];for(let L in T){let I=T[L];for(let z in I)h(I[z].object),delete I[z];delete T[L]}delete n[x.id]}function b(x){for(let T in n){let L=n[T];if(L[x.id]===void 0)continue;let I=L[x.id];for(let z in I)h(I[z].object),delete I[z];delete L[x.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function X0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==an&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let A=b===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ln&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function Y0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Mn,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,M=v*4,y=p.clippingState||null;c.value=y,y=h(m,d,M,f);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=f;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Z0(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=ls:a===Xa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function $0(i){let t=[],e=[],n=[],s=i,r=i-ns+1+vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ns?c=vh[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),M=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let b=E%3*2/3-1,A=E>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];v.set(S,_*m*E),M.set(d,g*m*E);let x=[E,E,E,E,E,E];y.set(x,p*m*E)}let C=new ie;C.setAttribute("position",new Jt(v,_)),C.setAttribute("uv",new Jt(M,g)),C.setAttribute("faceIndex",new Jt(y,p)),t.push(C),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eh(i,t,e){let n=new Yn(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J0(i,t,e){let n=new Float32Array(bi),s=new U(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bh(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function wh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function K0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wa||c===Xa,h=c===ls||c===hs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new gs(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function j0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let M=0,y=v.length;M<y;M+=3){let C=v[M+0],E=v[M+1],b=v[M+2];d.push(C,E,E,b,b,C)}}else if(m!==void 0){let v=m.array;_=m.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let C=M+0,E=M+1,b=M+2;d.push(C,E,E,b,b,C)}}else return;let g=new(xu(d)?Kr:Jr)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*u),b=new $r(E,y,C,u);b.type=Ln,b.needsUpdate=!0;let A=M*4;for(let x=0;x<u;x++){let T=g[x],L=p[x],I=v[x],z=y*C*4*x;for(let k=0;k<T.count;k++){let B=k*A;f===!0&&(s.fromBufferAttribute(T,k),E[z+B+0]=s.x,E[z+B+1]=s.y,E[z+B+2]=s.z,E[z+B+3]=0),m===!0&&(s.fromBufferAttribute(L,k),E[z+B+4]=s.x,E[z+B+5]=s.y,E[z+B+6]=s.z,E[z+B+7]=0),_===!0&&(s.fromBufferAttribute(I,k),E[z+B+8]=s.x,E[z+B+9]=s.y,E[z+B+10]=s.z,E[z+B+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new _t(y,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ig(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),Pe(e,n)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),Pe(e,n)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),Pe(e,n)}}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=_u,r=Th):r=Su,e.setTexture2D(t||r,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bu,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wu,s)}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function Eg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ig(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Su,r[o])}function kg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bu,r[o])}function Hg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wu,r[o])}function Vg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Eu,r[o])}function Gg(i){switch(i){case 5126:return bg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function Wg(i,t,e){let n=i.name,s=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),o=Ca.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lh(e,l===void 0?new wc(a,i,t):new Tc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ac(a),Lh(e,u)),e=u}}}function Dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Yg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Zg(i){oe._getMatrix(Uh,oe.workingColorSpace,i);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(t),o)}else return s}function $g(i,t){let e=Zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jg(i,t){let e;switch(t){case lf:e="Linear";break;case hf:e="Reinhard";break;case uf:e="Cineon";break;case ol:e="ACESFilmic";break;case ff:e="AgX";break;case pf:e="Neutral";break;case df:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kg(){oe.getLuminanceCoefficients(Dr);let i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Qg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bs(i){return i!==""}function Fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Rc(i){return i.replace(e_,i_)}function i_(i,t){let e=Qt[t];if(e===void 0){let n=n_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}function Bh(i){return i.replace(s_,r_)}function r_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function o_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function a_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function l_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:t="ENVMAP_BLENDING_MULTIPLY";break;case af:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=o_(e),l=a_(e),h=c_(e),u=l_(e),d=h_(e),f=jg(e),m=Qg(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Rc(o),o=Fh(o,e),o=Oh(o,e),a=Rc(a),a=Fh(a,e),a=Oh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,y=v+p+a,C=Dh(s,s.VERTEX_SHADER,M),E=Dh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(T){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(C).trim(),z=s.getShaderInfoLog(E).trim(),k=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,E);else{let Z=Nh(s,C,"vertex"),N=Nh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+Z+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||z==="")&&(B=!1);B&&(T.diagnostics={runnable:k,programLog:L,vertexShader:{log:I,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(C),s.deleteShader(E),A=new as(s,_),S=t_(s,_)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Xg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}function f_(i,t,e,n,s,r,o){let a=new Ys,c=new Cc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,x,T,L,I){let z=L.fog,k=I.geometry,B=S.isMeshStandardMaterial?L.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),N=Z&&Z.mapping===To?Z.image.height:null,ft=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=dt!==void 0?dt.length:0,yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let bt,et,ct,Mt;if(ft){let ne=Pn[ft];bt=ne.vertexShader,et=ne.fragmentShader}else bt=S.vertexShader,et=S.fragmentShader,c.update(S),ct=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);let G=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),pt=I.isInstancedMesh===!0,q=I.isBatchedMesh===!0,Tt=!!S.map,st=!!S.matcap,ht=!!Z,D=!!S.aoMap,ut=!!S.lightMap,H=!!S.bumpMap,j=!!S.normalMap,tt=!!S.displacementMap,nt=!!S.emissiveMap,V=!!S.metalnessMap,R=!!S.roughnessMap,w=S.anisotropy>0,F=S.clearcoat>0,$=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,xt=S.transmission>0,rt=w&&!!S.anisotropyMap,gt=F&&!!S.clearcoatMap,At=F&&!!S.clearcoatNormalMap,vt=F&&!!S.clearcoatRoughnessMap,Lt=J&&!!S.iridescenceMap,Bt=J&&!!S.iridescenceThicknessMap,zt=Y&&!!S.sheenColorMap,K=Y&&!!S.sheenRoughnessMap,Et=!!S.specularMap,wt=!!S.specularColorMap,Rt=!!S.specularIntensityMap,O=xt&&!!S.transmissionMap,St=xt&&!!S.thicknessMap,Q=!!S.gradientMap,lt=!!S.alphaMap,Pt=S.alphaTest>0,It=!!S.alphaHash,Yt=!!S.extensions,ce=ci;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Me={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:bt,fragmentShader:et,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:q,batchingColor:q&&I._colorsTexture!==null,instancing:pt,instancingColor:pt&&I.instanceColor!==null,instancingMorph:pt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:Tt,matcap:st,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:ut,bumpMap:H,normalMap:j,displacementMap:d&&tt,emissiveMap:nt,normalMapObjectSpace:j&&S.normalMapType===_f,normalMapTangentSpace:j&&S.normalMapType===gu,metalnessMap:V,roughnessMap:R,anisotropy:w,anisotropyMap:rt,clearcoat:F,clearcoatMap:gt,clearcoatNormalMap:At,clearcoatRoughnessMap:vt,dispersion:$,iridescence:J,iridescenceMap:Lt,iridescenceThicknessMap:Bt,sheen:Y,sheenColorMap:zt,sheenRoughnessMap:K,specularMap:Et,specularColorMap:wt,specularIntensityMap:Rt,transmission:xt,transmissionMap:O,thicknessMap:St,gradientMap:Q,opaque:S.transparent===!1&&S.blending===ss&&S.alphaToCoverage===!1,alphaMap:lt,alphaTest:Pt,alphaHash:It,combine:S.combine,mapUv:Tt&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:ut&&_(S.lightMap.channel),bumpMapUv:H&&_(S.bumpMap.channel),normalMapUv:j&&_(S.normalMap.channel),displacementMapUv:tt&&_(S.displacementMap.channel),emissiveMapUv:nt&&_(S.emissiveMap.channel),metalnessMapUv:V&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&_(S.sheenRoughnessMap.channel),specularMapUv:Et&&_(S.specularMap.channel),specularColorMapUv:wt&&_(S.specularColorMap.channel),specularIntensityMapUv:Rt&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:St&&_(S.thicknessMap.channel),alphaMapUv:lt&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(j||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Tt||lt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:yt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Tt&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(v(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function v(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let x=m[S.type],T;if(x){let L=Pn[x];T=gl.clone(L.uniforms)}else T=S.uniforms;return T}function C(S,x){let T;for(let L=0,I=h.length;L<I;L++){let z=h[L];if(z.cacheKey===x){T=z,++T.usedTimes;break}}return T===void 0&&(T=new u_(i,x,S,r),h.push(T)),T}function E(S){if(--S.usedTimes===0){let x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:A}}function p_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||m_),n.length>1&&n.sort(d||kh),s.length>1&&s.sort(d||kh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function g_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hh,i.set(n,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){let t=new __,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,M=0,y=0,C=0,E=0,b=0;l.sort(v_);for(let S=0,x=l.length;S<x;S++){let T=l[S],L=T.color,I=T.intensity,z=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*I,u+=L.g*I,d+=L.b*I;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],I);b++}else if(T.isDirectionalLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,N=e.get(T);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,v++}n.directional[f]=B,f++}else if(T.isSpotLight){let B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(L).multiplyScalar(I),B.distance=z,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[_]=B;let Z=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,Z.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,T.castShadow){let N=e.get(T);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=k,y++}_++}else if(T.isRectAreaLight){let B=t.get(T);B.color.copy(L).multiplyScalar(I),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=B,g++}else if(T.isPointLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let Z=T.shadow,N=e.get(T);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=B,m++}else if(T.isHemisphereLight){let B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(I),B.groundColor.copy(T.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==M||A.numSpotShadows!==y||A.numSpotMaps!==C||A.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,A.directionalLength=f,A.pointLength=m,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=M,A.numSpotShadows=y,A.numSpotMaps=C,A.numLightProbes=b,n.version=y_++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let M=l[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Vh(i){let t=new M_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function S_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(i),t.set(s,[a])):r>=o.length?(a=new Vh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function w_(i,t,e){let n=new Zs,s=new _t,r=new _t,o=new Ee,a=new $s({depthPacking:pl}),c=new Ic,l={},h=e.maxTextureSize,u={[li]:De,[De]:li,[Zt]:Zt},d=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ie;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(E,b,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ai),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==Hn&&this.type===Hn,z=p===Hn&&this.type!==Hn;for(let k=0,B=E.length;k<B;k++){let Z=E[k],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let ft=N.getFrameExtents();if(s.multiply(ft),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,N.mapSize.y=r.y)),N.map===null||I===!0||z===!0){let mt=this.type!==Hn?{minFilter:cn,magFilter:cn}:{};N.map!==null&&N.map.dispose(),N.map=new Yn(s.x,s.y,mt),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let dt=N.getViewportCount();for(let mt=0;mt<dt;mt++){let yt=N.getViewport(mt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),L.viewport(o),N.updateMatrices(Z,mt),n=N.getFrustum(),y(b,A,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Hn&&v(N,A),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,x,T)};function v(E,b){let A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,A,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,A,f,_,null)}function M(E,b,A,S){let x=null,T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)x=T;else if(x=A.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let L=x.uuid,I=b.uuid,z=l[L];z===void 0&&(z={},l[L]=z);let k=z[I];k===void 0&&(k=x.clone(),z[I]=k,b.addEventListener("dispose",C)),x=k}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Hn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let L=i.properties.get(x);L.light=A}return x}function y(E,b,A,S,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let k=I.groups;for(let B=0,Z=k.length;B<Z;B++){let N=k[B],ft=z[N.materialIndex];if(ft&&ft.visible){let dt=M(E,ft,S,x);E.onBeforeShadow(i,E,b,A,I,dt,N),i.renderBufferDirect(A,null,I,dt,E,N),E.onAfterShadow(i,E,b,A,I,dt,N)}}}else if(z.visible){let k=M(E,z,S,x);E.onBeforeShadow(i,E,b,A,I,k,null),i.renderBufferDirect(A,null,I,k,E,null),E.onAfterShadow(i,E,b,A,I,k,null)}}let L=E.children;for(let I=0,z=L.length;I<z;I++)y(L[I],b,A,S,x)}function C(E){E.target.removeEventListener("dispose",C);for(let A in l){let S=l[A],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function A_(i,t){function e(){let O=!1,St=new Ee,Q=null,lt=new Ee(0,0,0,0);return{setMask:function(Pt){Q!==Pt&&!O&&(i.colorMask(Pt,Pt,Pt,Pt),Q=Pt)},setLocked:function(Pt){O=Pt},setClear:function(Pt,It,Yt,ce,Me){Me===!0&&(Pt*=ce,It*=ce,Yt*=ce),St.set(Pt,It,Yt,ce),lt.equals(St)===!1&&(i.clearColor(Pt,It,Yt,ce),lt.copy(St))},reset:function(){O=!1,Q=null,lt.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,Q=null,lt=null,Pt=null;return{setReversed:function(It){if(St!==It){let Yt=t.get("EXT_clip_control");St?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let ce=Pt;Pt=null,this.setClear(ce)}St=It},getReversed:function(){return St},setTest:function(It){It?G(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(It){Q!==It&&!O&&(i.depthMask(It),Q=It)},setFunc:function(It){if(St&&(It=T_[It]),lt!==It){switch(It){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=It}},setLocked:function(It){O=It},setClear:function(It){Pt!==It&&(St&&(It=1-It),i.clearDepth(It),Pt=It)},reset:function(){O=!1,Q=null,lt=null,Pt=null,St=!1}}}function s(){let O=!1,St=null,Q=null,lt=null,Pt=null,It=null,Yt=null,ce=null,Me=null;return{setTest:function(ne){O||(ne?G(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ne){St!==ne&&!O&&(i.stencilMask(ne),St=ne)},setFunc:function(ne,Fe,Ge){(Q!==ne||lt!==Fe||Pt!==Ge)&&(i.stencilFunc(ne,Fe,Ge),Q=ne,lt=Fe,Pt=Ge)},setOp:function(ne,Fe,Ge){(It!==ne||Yt!==Fe||ce!==Ge)&&(i.stencilOp(ne,Fe,Ge),It=ne,Yt=Fe,ce=Ge)},setLocked:function(ne){O=ne},setClear:function(ne){Me!==ne&&(i.clearStencil(ne),Me=ne)},reset:function(){O=!1,St=null,Q=null,lt=null,Pt=null,It=null,Yt=null,ce=null,Me=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,C=null,E=null,b=new qt(0,0,0),A=0,S=!1,x=null,T=null,L=null,I=null,z=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=Z>=2);let ft=null,dt={},mt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),bt=new Ee().fromArray(mt),et=new Ee().fromArray(yt);function ct(O,St,Q,lt){let Pt=new Uint8Array(4),It=i.createTexture();i.bindTexture(O,It),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Q;Yt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(St+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return It}let Mt={};Mt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(cs),H(!1),j(Gl),G(i.CULL_FACE),D(ai);function G(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function it(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function pt(O,St){return u[O]!==St?(i.bindFramebuffer(O,St),u[O]=St,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function q(O,St){let Q=f,lt=!1;if(O){Q=d.get(St),Q===void 0&&(Q=[],d.set(St,Q));let Pt=O.textures;if(Q.length!==Pt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Yt=Pt.length;It<Yt;It++)Q[It]=i.COLOR_ATTACHMENT0+It;Q.length=Pt.length,lt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,lt=!0);lt&&i.drawBuffers(Q)}function Tt(O){return m!==O?(i.useProgram(O),m=O,!0):!1}let st={[Si]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Wd]:i.FUNC_REVERSE_SUBTRACT};st[Xd]=i.MIN,st[qd]=i.MAX;let ht={[Yd]:i.ZERO,[Zd]:i.ONE,[$d]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[ef]:i.SRC_ALPHA_SATURATE,[Qd]:i.DST_COLOR,[Kd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[tf]:i.ONE_MINUS_DST_COLOR,[jd]:i.ONE_MINUS_DST_ALPHA,[nf]:i.CONSTANT_COLOR,[sf]:i.ONE_MINUS_CONSTANT_COLOR,[rf]:i.CONSTANT_ALPHA,[of]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,St,Q,lt,Pt,It,Yt,ce,Me,ne){if(O===ai){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&(G(i.BLEND),_=!0),O!==Vd){if(O!==g||ne!==S){if((p!==Si||y!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,y=Si),ne)switch(O){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,M=null,C=null,E=null,b.set(0,0,0),A=0,g=O,S=ne}return}Pt=Pt||St,It=It||Q,Yt=Yt||lt,(St!==p||Pt!==y)&&(i.blendEquationSeparate(st[St],st[Pt]),p=St,y=Pt),(Q!==v||lt!==M||It!==C||Yt!==E)&&(i.blendFuncSeparate(ht[Q],ht[lt],ht[It],ht[Yt]),v=Q,M=lt,C=It,E=Yt),(ce.equals(b)===!1||Me!==A)&&(i.blendColor(ce.r,ce.g,ce.b,Me),b.copy(ce),A=Me),g=O,S=!1}function ut(O,St){O.side===Zt?it(i.CULL_FACE):G(i.CULL_FACE);let Q=O.side===De;St&&(Q=!Q),H(Q),O.blending===ss&&O.transparent===!1?D(ai):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let lt=O.stencilWrite;a.setTest(lt),lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function j(O){O!==kd?(G(i.CULL_FACE),O!==T&&(O===Gl?i.cullFace(i.BACK):O===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),T=O}function tt(O){O!==L&&(B&&i.lineWidth(O),L=O)}function nt(O,St,Q){O?(G(i.POLYGON_OFFSET_FILL),(I!==St||z!==Q)&&(i.polygonOffset(St,Q),I=St,z=Q)):it(i.POLYGON_OFFSET_FILL)}function V(O){O?G(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+k-1),ft!==O&&(i.activeTexture(O),ft=O)}function w(O,St,Q){Q===void 0&&(ft===null?Q=i.TEXTURE0+k-1:Q=ft);let lt=dt[Q];lt===void 0&&(lt={type:void 0,texture:void 0},dt[Q]=lt),(lt.type!==O||lt.texture!==St)&&(ft!==Q&&(i.activeTexture(Q),ft=Q),i.bindTexture(O,St||Mt[O]),lt.type=O,lt.texture=St)}function F(){let O=dt[ft];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(O){bt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),bt.copy(O))}function K(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Et(O,St){let Q=l.get(St);Q===void 0&&(Q=new WeakMap,l.set(St,Q));let lt=Q.get(O);lt===void 0&&(lt=i.getUniformBlockIndex(St,O.name),Q.set(O,lt))}function wt(O,St){let lt=l.get(St).get(O);c.get(St)!==lt&&(i.uniformBlockBinding(St,lt,O.__bindingPointIndex),c.set(St,lt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,dt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,C=null,E=null,b=new qt(0,0,0),A=0,S=!1,x=null,T=null,L=null,I=null,z=null,bt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:it,bindFramebuffer:pt,drawBuffers:q,useProgram:Tt,setBlending:D,setMaterial:ut,setFlipSided:H,setCullFace:j,setLineWidth:tt,setPolygonOffset:nt,setScissorTest:V,activeTexture:R,bindTexture:w,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:Lt,texImage3D:Bt,updateUBOMapping:Et,uniformBlockBinding:wt,texStorage2D:At,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:gt,scissor:zt,viewport:K,reset:Rt}}function Gh(i,t,e,n){let s=R_(n);switch(e){case hu:return i*t;case du:return i*t;case fu:return i*t*2;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case pu:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case uu:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mu:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _c:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R_(i){switch(i){case Xn:case au:return{byteLength:1,components:1};case Ws:case cu:case rr:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case wi:case al:case Ln:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):qs("canvas")}function _(R,w,F){let $=1,J=V(R);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor($*J.width),xt=Math.floor($*J.height);u===void 0&&(u=m(Y,xt));let rt=w?m(Y,xt):u;return rt.width=Y,rt.height=xt,rt.getContext("2d").drawImage(R,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+xt+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,w,F,$,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=w;if(w===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),w===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),w===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),w===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),w===i.RGBA){let xt=J?Ao:oe.getTransfer($);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=xt===ue?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,w){let F;return R?w===null||w===wi||w===us?F=i.DEPTH24_STENCIL8:w===Ln?F=i.DEPTH32F_STENCIL8:w===Ws&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===wi||w===us?F=i.DEPTH_COMPONENT24:w===Ln?F=i.DEPTH_COMPONENT32F:w===Ws&&(F=i.DEPTH_COMPONENT16),F}function C(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){let w=R.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&h.delete(w)}function b(R){let w=R.target;w.removeEventListener("dispose",b),x(w)}function A(R){let w=n.get(R);if(w.__webglInit===void 0)return;let F=R.source,$=d.get(F);if($){let J=$[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(R),Object.keys($).length===0&&d.delete(F)}n.remove(R)}function S(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let F=R.source,$=d.get(F);delete $[w.__cacheKey],o.memory.textures--}function x(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let J=0;J<w.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[$][J]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let F=R.textures;for(let $=0,J=F.length;$<J;$++){let Y=n.get(F[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(R)}let T=0;function L(){T=0}function I(){let R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function z(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){let F=n.get(R);if(R.isVideoTexture&&tt(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(F,R,w);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+w)}function B(R,w){let F=n.get(R);if(R.version>0&&F.__version!==R.version){et(F,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+w)}function Z(R,w){let F=n.get(R);if(R.version>0&&F.__version!==R.version){et(F,R,w);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+w)}function N(R,w){let F=n.get(R);if(R.version>0&&F.__version!==R.version){ct(F,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+w)}let ft={[En]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},dt={[cn]:i.NEAREST,[mf]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},mt={[xf]:i.NEVER,[bf]:i.ALWAYS,[yf]:i.LESS,[_u]:i.LEQUAL,[vf]:i.EQUAL,[Ef]:i.GEQUAL,[Mf]:i.GREATER,[Sf]:i.NOTEQUAL};function yt(R,w){if(w.type===Ln&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===na||w.magFilter===fr||w.magFilter===Sn||w.minFilter===un||w.minFilter===na||w.minFilter===fr||w.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ft[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ft[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ft[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==fr&&w.minFilter!==Sn||w.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function bt(R,w){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));let $=w.source,J=d.get($);J===void 0&&(J={},d.set($,J));let Y=z(w);if(Y!==R.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Y].usedTimes++;let xt=J[R.__cacheKey];xt!==void 0&&(J[R.__cacheKey].usedTimes--,xt.usedTimes===0&&S(w)),R.__cacheKey=Y,R.__webglTexture=J[Y].texture}return F}function et(R,w,F){let $=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=i.TEXTURE_3D);let J=bt(R,w),Y=w.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+F);let xt=n.get(Y);if(Y.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let rt=oe.getPrimaries(oe.workingColorSpace),gt=w.colorSpace===oi?null:oe.getPrimaries(w.colorSpace),At=w.colorSpace===oi||rt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let vt=_(w.image,!1,s.maxTextureSize);vt=nt(w,vt);let Lt=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type),zt=M(w.internalFormat,Lt,Bt,w.colorSpace,w.isVideoTexture);yt($,w);let K,Et=w.mipmaps,wt=w.isVideoTexture!==!0,Rt=xt.__version===void 0||J===!0,O=Y.dataReady,St=C(w,vt);if(w.isDepthTexture)zt=y(w.format===ds,w.type),Rt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,zt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,zt,vt.width,vt.height,0,Lt,Bt,null));else if(w.isDataTexture)if(Et.length>0){wt&&Rt&&e.texStorage2D(i.TEXTURE_2D,St,zt,Et[0].width,Et[0].height);for(let Q=0,lt=Et.length;Q<lt;Q++)K=Et[Q],wt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,Lt,Bt,K.data):e.texImage2D(i.TEXTURE_2D,Q,zt,K.width,K.height,0,Lt,Bt,K.data);w.generateMipmaps=!1}else wt?(Rt&&e.texStorage2D(i.TEXTURE_2D,St,zt,vt.width,vt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Lt,Bt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,zt,vt.width,vt.height,0,Lt,Bt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){wt&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,zt,Et[0].width,Et[0].height,vt.depth);for(let Q=0,lt=Et.length;Q<lt;Q++)if(K=Et[Q],w.format!==an)if(Lt!==null)if(wt){if(O)if(w.layerUpdates.size>0){let Pt=Gh(K.width,K.height,w.format,w.type);for(let It of w.layerUpdates){let Yt=K.data.subarray(It*Pt/K.data.BYTES_PER_ELEMENT,(It+1)*Pt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,It,K.width,K.height,1,Lt,Yt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,K.width,K.height,vt.depth,Lt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,zt,K.width,K.height,vt.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,K.width,K.height,vt.depth,Lt,Bt,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,zt,K.width,K.height,vt.depth,0,Lt,Bt,K.data)}else{wt&&Rt&&e.texStorage2D(i.TEXTURE_2D,St,zt,Et[0].width,Et[0].height);for(let Q=0,lt=Et.length;Q<lt;Q++)K=Et[Q],w.format!==an?Lt!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,Lt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,zt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,Lt,Bt,K.data):e.texImage2D(i.TEXTURE_2D,Q,zt,K.width,K.height,0,Lt,Bt,K.data)}else if(w.isDataArrayTexture)if(wt){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,zt,vt.width,vt.height,vt.depth),O)if(w.layerUpdates.size>0){let Q=Gh(vt.width,vt.height,w.format,w.type);for(let lt of w.layerUpdates){let Pt=vt.data.subarray(lt*Q/vt.data.BYTES_PER_ELEMENT,(lt+1)*Q/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,vt.width,vt.height,1,Lt,Bt,Pt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Lt,Bt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,vt.width,vt.height,vt.depth,0,Lt,Bt,vt.data);else if(w.isData3DTexture)wt?(Rt&&e.texStorage3D(i.TEXTURE_3D,St,zt,vt.width,vt.height,vt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Lt,Bt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,vt.width,vt.height,vt.depth,0,Lt,Bt,vt.data);else if(w.isFramebufferTexture){if(Rt)if(wt)e.texStorage2D(i.TEXTURE_2D,St,zt,vt.width,vt.height);else{let Q=vt.width,lt=vt.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,zt,Q,lt,0,Lt,Bt,null),Q>>=1,lt>>=1}}else if(Et.length>0){if(wt&&Rt){let Q=V(Et[0]);e.texStorage2D(i.TEXTURE_2D,St,zt,Q.width,Q.height)}for(let Q=0,lt=Et.length;Q<lt;Q++)K=Et[Q],wt?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Lt,Bt,K):e.texImage2D(i.TEXTURE_2D,Q,zt,Lt,Bt,K);w.generateMipmaps=!1}else if(wt){if(Rt){let Q=V(vt);e.texStorage2D(i.TEXTURE_2D,St,zt,Q.width,Q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Bt,vt)}else e.texImage2D(i.TEXTURE_2D,0,zt,Lt,Bt,vt);g(w)&&p($),xt.__version=Y.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ct(R,w,F){if(w.image.length!==6)return;let $=bt(R,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);let Y=n.get(J);if(J.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+F);let xt=oe.getPrimaries(oe.workingColorSpace),rt=w.colorSpace===oi?null:oe.getPrimaries(w.colorSpace),gt=w.colorSpace===oi||xt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let At=w.isCompressedTexture||w.image[0].isCompressedTexture,vt=w.image[0]&&w.image[0].isDataTexture,Lt=[];for(let lt=0;lt<6;lt++)!At&&!vt?Lt[lt]=_(w.image[lt],!0,s.maxCubemapSize):Lt[lt]=vt?w.image[lt].image:w.image[lt],Lt[lt]=nt(w,Lt[lt]);let Bt=Lt[0],zt=r.convert(w.format,w.colorSpace),K=r.convert(w.type),Et=M(w.internalFormat,zt,K,w.colorSpace),wt=w.isVideoTexture!==!0,Rt=Y.__version===void 0||$===!0,O=J.dataReady,St=C(w,Bt);yt(i.TEXTURE_CUBE_MAP,w);let Q;if(At){wt&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Et,Bt.width,Bt.height);for(let lt=0;lt<6;lt++){Q=Lt[lt].mipmaps;for(let Pt=0;Pt<Q.length;Pt++){let It=Q[Pt];w.format!==an?zt!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,It.width,It.height,zt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,Et,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,It.width,It.height,zt,K,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,Et,It.width,It.height,0,zt,K,It.data)}}}else{if(Q=w.mipmaps,wt&&Rt){Q.length>0&&St++;let lt=V(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Et,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(vt){wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt[lt].width,Lt[lt].height,zt,K,Lt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Et,Lt[lt].width,Lt[lt].height,0,zt,K,Lt[lt].data);for(let Pt=0;Pt<Q.length;Pt++){let Yt=Q[Pt].image[lt].image;wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,Yt.width,Yt.height,zt,K,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,Et,Yt.width,Yt.height,0,zt,K,Yt.data)}}else{wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,zt,K,Lt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Et,zt,K,Lt[lt]);for(let Pt=0;Pt<Q.length;Pt++){let It=Q[Pt];wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,zt,K,It.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,Et,zt,K,It.image[lt])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Mt(R,w,F,$,J,Y){let xt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),gt=M(F.internalFormat,xt,rt,F.colorSpace),At=n.get(w),vt=n.get(F);if(vt.__renderTarget=w,!At.__hasExternalTextures){let Lt=Math.max(1,w.width>>Y),Bt=Math.max(1,w.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,gt,Lt,Bt,w.depth,0,xt,rt,null):e.texImage2D(J,Y,gt,Lt,Bt,0,xt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),j(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,vt.__webglTexture,0,H(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,vt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(R,w,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let $=w.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=y(w.stencilBuffer,J),xt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=H(w);j(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,w.width,w.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,R)}else{let $=w.textures;for(let J=0;J<$.length;J++){let Y=$[J],xt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),gt=M(Y.internalFormat,xt,rt,Y.colorSpace),At=H(w);F&&j(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,w.width,w.height):j(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);let J=$.__webglTexture,Y=H(w);if(w.depthTexture.format===rs)j(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===ds)j(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function pt(R){let w=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=$}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");it(w.__webglFramebuffer,R)}else if(F){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=i.createRenderbuffer(),G(w.__webglDepthbuffer[$],R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),G(w.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(R,w,F){let $=n.get(R);w!==void 0&&Mt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&pt(R)}function Tt(R){let w=R.texture,F=n.get(R),$=n.get(w);R.addEventListener("dispose",b);let J=R.textures,Y=R.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=w.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let gt=0;gt<w.mipmaps.length;gt++)F.__webglFramebuffer[rt][gt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<w.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xt)for(let rt=0,gt=J.length;rt<gt;rt++){let At=n.get(J[rt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&j(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let gt=J[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let At=r.convert(gt.format,gt.colorSpace),vt=r.convert(gt.type),Lt=M(gt.internalFormat,At,vt,gt.colorSpace,R.isXRRenderTarget===!0),Bt=H(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),G(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),yt(i.TEXTURE_CUBE_MAP,w);for(let rt=0;rt<6;rt++)if(w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)Mt(F.__webglFramebuffer[rt][gt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt);else Mt(F.__webglFramebuffer[rt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,gt=J.length;rt<gt;rt++){let At=J[rt],vt=n.get(At);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),yt(i.TEXTURE_2D,At),Mt(F.__webglFramebuffer,R,At,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(At)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),yt(rt,w),w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)Mt(F.__webglFramebuffer[gt],R,w,i.COLOR_ATTACHMENT0,rt,gt);else Mt(F.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,rt,0);g(w)&&p(rt),e.unbindTexture()}R.depthBuffer&&pt(R)}function st(R){let w=R.textures;for(let F=0,$=w.length;F<$;F++){let J=w[F];if(g(J)){let Y=v(R),xt=n.get(J).__webglTexture;e.bindTexture(Y,xt),p(Y),e.unbindTexture()}}}let ht=[],D=[];function ut(R){if(R.samples>0){if(j(R)===!1){let w=R.textures,F=R.width,$=R.height,J=i.COLOR_BUFFER_BIT,Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),rt=w.length>1;if(rt)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let At=n.get(w[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,J,i.NEAREST),c===!0&&(ht.length=0,D.length=0,ht.push(i.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let At=n.get(w[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function H(R){return Math.min(s.maxSamples,R.samples)}function j(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function nt(R,w){let F=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==vs&&F!==oi&&(oe.getTransfer(F)===ue?($!==an||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function V(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=q,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=j}function P_(i,t){function e(n,s=oi){let r,o=oe.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.BYTE;if(n===cu)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===uu)return i.RGB;if(n===an)return i.RGBA;if(n===du)return i.LUMINANCE;if(n===fu)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===pu)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===$a||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===ja)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===gc||n===_c||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function N_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===De&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===De&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(vi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let y=M.program;n.uniformBlockBinding(v,y)}function l(v,M){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let C=M.program;n.updateUBOMapping(v,C);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let y=i.createBuffer(),C=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,b=y.length;E<b;E++){let A=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,x=A.length;S<x;S++){let T=A[S];if(f(T,E,S,C)===!0){let L=T.__offset,I=Array.isArray(T.value)?T.value:[T.value],z=0;for(let k=0;k<I.length;k++){let B=I[k],Z=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+z,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,y,C){let E=v.value,b=M+"_"+y;if(C[b]===void 0)return typeof E=="number"||typeof E=="boolean"?C[b]=E:C[b]=E.clone(),!0;{let A=C[b];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return C[b]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function m(v){let M=v.uniforms,y=0,C=16;for(let b=0,A=M.length;b<A;b++){let S=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,T=S.length;x<T;x++){let L=S[x],I=Array.isArray(L.value)?L.value:[L.value];for(let z=0,k=I.length;z<k;z++){let B=I[z],Z=_(B),N=y%C,ft=N%Z.boundary,dt=N+ft;y+=ft,dt!==0&&C-dt<Z.storage&&(y+=C-dt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Z.storage}}}let E=y%C;return E>0&&(y+=C-E),v.__size=y,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function Fr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ro.fromBufferAttribute(o,s),oo.fromBufferAttribute(o,r),e.distanceSqToSegment(ro,oo,Pa,Yh)>n)return;Pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:Yh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function Zh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function B_(i,t){let e=1-i;return e*e*t}function z_(i,t){return 2*(1-i)*i*t}function k_(i,t){return i*i*t}function Vs(i,t,e,n){return B_(i,t)+z_(i,e)+k_(i,n)}function H_(i,t){let e=1-i;return e*e*e*t}function V_(i,t){let e=1-i;return 3*e*e*i*t}function G_(i,t){return 3*(1-i)*i*i*t}function W_(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return H_(i,t)+V_(i,e)+G_(i,n)+W_(i,s)}function Tu(i,t,e,n,s){let r,o;if(s===ax(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$h(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$h(r,i[r],i[r+1],o);return o&&Co(o,o.next)&&(nr(o),o=o.next),o}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||Se(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ex(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Y_(i,n,s,r):q_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),nr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Z_(Ri(i),t,e),tr(i,t,e,n,s,r,2)):o===2&&$_(i,t,e,n,s,r):tr(Ri(i),t,e,n,s,r,1);break}}}function q_(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&is(s,a,r,c,o,l,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Y_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Gc(f,m,t,e,n),v=Gc(_,g,t,e,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&is(a,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&is(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&is(a,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&is(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Z_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Co(s,r)&&Au(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function $_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sx(o,a)){let c=Ru(o,a);o=Ri(o,o.next),c=Ri(c,c.next),tr(o,t,e,n,s,r,0),tr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function J_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Tu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ix(l));for(s.sort(K_),r=0;r<s.length;r++)e=j_(s[r],e);return e}function K_(i,t){return i.x-t.x}function j_(i,t){let e=Q_(i,t);if(!e)return t;let n=Ru(e,i);return Ri(n,n.next),Ri(e,e.next)}function Q_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&is(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&tx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function tx(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function ex(i,t,e,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nx(s)}function nx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ix(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function sx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rx(i,t)&&(er(i,t)&&er(t,i)&&ox(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Co(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Co(i,t){return i.x===t.x&&i.y===t.y}function Au(i,t,e,n){let s=zr(Se(i,t,e)),r=zr(Se(i,t,n)),o=zr(Se(e,n,i)),a=zr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Br(i,e,t)||r===0&&Br(i,n,t)||o===0&&Br(e,i,n)||a===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Au(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function ox(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ru(i,t){let e=new Wc(i.i,i.x,i.y),n=new Wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $h(i,t,e,n){let s=new Wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ax(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function lx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eu(){return performance.now()}function iu(i,t){return i.distance-t.distance}function il(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)il(r[o],t,e,!0)}}var sl,Tn,Qe,kd,Gl,Hd,su,rl,Hn,li,De,Zt,ai,ss,Wl,Xl,ql,Vd,Si,Gd,Wd,Xd,qd,Yd,Zd,$d,Jd,Na,Fa,Kd,jd,Qd,tf,ef,nf,sf,rf,of,Oa,Ba,za,cs,ka,Ha,Va,Ga,ru,af,cf,ci,lf,hf,uf,ol,df,ff,pf,ou,ls,hs,Wa,Xa,To,En,In,qa,cn,mf,fr,un,na,Sn,Xn,au,cu,Ws,al,wi,Ln,rr,cl,ll,us,lu,hu,uu,an,du,fu,rs,ds,hl,ul,pu,dl,fl,Hr,Vr,Gr,Wr,Ya,Za,$a,Ja,Ka,ja,Qa,tc,ec,nc,ic,sc,rc,oc,ac,cc,lc,hc,uc,dc,fc,Xr,pc,mc,mu,gc,_c,xc,qr,yc,ia,Yl,Zl,$l,gf,pl,gu,_f,oi,me,vs,Ao,ue,ki,Jl,xf,yf,vf,_u,Mf,Sf,Ef,bf,Kl,jl,Vn,Yr,qn,Be,Ql,zs,Xs,or,_t,jt,sa,th,oe,eh,nh,ih,sh,rh,Hi,vc,Xf,Zr,qf,Ye,Ee,Mc,Yn,$r,Sc,be,U,oa,oh,bn,Fn,xn,pr,Vi,Gi,Wi,ti,ei,mi,Ps,mr,gr,gi,Yf,Is,ca,hi,On,la,_r,ni,ha,xr,ua,Ti,ee,Xi,yn,Zf,$f,ii,yr,rn,ah,ch,dn,Ys,Jf,lh,qi,Bn,vr,Ls,Kf,jf,hh,uh,dh,fh,Qf,Yi,da,ke,vn,zn,fa,kn,Zi,$i,ph,pa,ma,ga,_a,xa,ya,Ei,yu,si,Mr,qt,ze,tp,ui,fs,we,Sr,Jt,Jr,Kr,Xt,ep,hn,Ma,Ji,on,Ds,Le,ie,mh,_i,Er,gh,br,wr,Tr,Sa,Ar,_h,Rr,Ot,He,gl,sp,rp,Ke,jr,ri,xh,yh,qe,Ki,ji,Ec,Qr,bc,Ea,op,ap,Mn,xi,Pr,Zs,ms,lp,hp,up,dp,fp,pp,mp,gp,_p,xp,yp,vp,Mp,Sp,Ep,bp,wp,Tp,Ap,Rp,Cp,Pp,Ip,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Sm,Em,bm,wm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,jm,Qm,t0,e0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,S0,E0,b0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,O0,B0,z0,k0,H0,Qt,Dt,Pn,Ir,yi,V0,to,ns,vh,bi,ba,Mh,wa,Ta,Aa,Ra,Mi,Qi,Sh,gs,eo,Su,Th,Eu,bu,wu,Ah,Rh,Ch,Ph,Ih,wc,Tc,Ac,Ca,as,Xg,qg,Uh,Dr,e_,n_,s_,d_,Cc,Pc,y_,$s,Ic,E_,b_,T_,Lc,se,I_,Hs,L_,D_,Dc,Uc,vi,U_,no,io,Js,Ks,js,ts,Wh,Ur,Xh,O_,Us,Ns,Ue,so,ro,oo,qh,Fs,Nr,Pa,Yh,ao,je,fn,Qs,Nc,Or,Ia,La,Da,Fc,co,Oc,lo,Bc,ho,zc,uo,kc,Hc,fo,po,mo,ve,go,Vc,Ai,X_,Wn,_s,cx,_o,xo,pn,Ci,Nt,yo,xs,Xc,qc,Yc,wn,Pi,Zc,$c,Jc,vo,Ii,Kc,jh,jc,ux,ir,Qc,sr,Mo,So,Ua,Qh,tu,tl,el,Eo,bo,yl,dx,vl,fx,px,mx,gx,_x,xx,yx,nl,ye,Qx,nu,ys,Zn,wo,Te=Ae(()=>{sl="170",Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qe={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kd=0,Gl=1,Hd=2,su=1,rl=2,Hn=3,li=0,De=1,Zt=2,ai=0,ss=1,Wl=2,Xl=3,ql=4,Vd=5,Si=100,Gd=101,Wd=102,Xd=103,qd=104,Yd=200,Zd=201,$d=202,Jd=203,Na=204,Fa=205,Kd=206,jd=207,Qd=208,tf=209,ef=210,nf=211,sf=212,rf=213,of=214,Oa=0,Ba=1,za=2,cs=3,ka=4,Ha=5,Va=6,Ga=7,ru=0,af=1,cf=2,ci=0,lf=1,hf=2,uf=3,ol=4,df=5,ff=6,pf=7,ou=300,ls=301,hs=302,Wa=303,Xa=304,To=306,En=1e3,In=1001,qa=1002,cn=1003,mf=1004,fr=1005,un=1006,na=1007,Sn=1008,Xn=1009,au=1010,cu=1011,Ws=1012,al=1013,wi=1014,Ln=1015,rr=1016,cl=1017,ll=1018,us=1020,lu=35902,hu=1021,uu=1022,an=1023,du=1024,fu=1025,rs=1026,ds=1027,hl=1028,ul=1029,pu=1030,dl=1031,fl=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,Ya=35840,Za=35841,$a=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,Xr=36492,pc=36494,mc=36495,mu=36283,gc=36284,_c=36285,xc=36286,qr=2300,yc=2301,ia=2302,Yl=2400,Zl=2401,$l=2402,gf=3200,pl=3201,gu=0,_f=1,oi="",me="srgb",vs="srgb-linear",Ao="linear",ue="srgb",ki=7680,Jl=519,xf=512,yf=513,vf=514,_u=515,Mf=516,Sf=517,Ef=518,bf=519,Kl=35044,jl="300 es",Vn=2e3,Yr=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,zs=Math.PI/180,Xs=180/Math.PI;or={DEG2RAD:zs,RAD2DEG:Xs,generateUUID:Li,clamp:Re,euclideanModulo:ml,mapLinear:wf,inverseLerp:Tf,lerp:ks,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:If,randFloat:Lf,randFloatSpread:Df,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:kf,normalize:We,denormalize:es},_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],M=s[4],y=s[7],C=s[2],E=s[5],b=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*g+a*M+c*E,r[6]=o*p+a*y+c*b,r[1]=l*_+h*v+u*C,r[4]=l*g+h*M+u*E,r[7]=l*p+h*y+u*b,r[2]=d*_+f*v+m*C,r[5]=d*g+f*M+m*E,r[8]=d*p+f*y+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sa=new jt;th={};oe={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[vs]:{primaries:eh,whitePoint:ih,transfer:Ao,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:eh,whitePoint:ih,transfer:ue,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});vc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=qs("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,Zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};qf=0,Ye=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=un,o=Sn,a=an,c=Xn,l=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Li(),this.name="",this.source=new Zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case En:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case En:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ou;Ye.DEFAULT_ANISOTROPY=1;Ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,y=(f+1)/2,C=(p+1)/2,E=(h+d)/4,b=(u+_)/4,A=(m+g)/4;return M>y&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=b/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=b/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$r=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Sc=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),E=Math.atan2(C,p*v);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}let y=a*v;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new U,oh=new be,bn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),mr.subVectors(this.max,Ps),Vi.subVectors(t.a,Ps),Gi.subVectors(t.b,Ps),Wi.subVectors(t.c,Ps),ti.subVectors(Gi,Vi),ei.subVectors(Wi,Gi),mi.subVectors(Vi,Wi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-mi.y,mi.x,0];return!aa(e,Vi,Gi,Wi,mr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Vi,Gi,Wi,mr))?!1:(gr.crossVectors(ti,ei),e=[gr.x,gr.y,gr.z],aa(e,Vi,Gi,Wi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Fn=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,pr=new bn,Vi=new U,Gi=new U,Wi=new U,ti=new U,ei=new U,mi=new U,Ps=new U,mr=new U,gr=new U,gi=new U;Yf=new bn,Is=new U,ca=new U,hi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(ca)),this.expandByPoint(Is.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new U,la=new U,_r=new U,ni=new U,ha=new U,xr=new U,ua=new U,Ti=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(la);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ni.dot(this.direction),c=-ni.dot(_r),l=ni.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(_r,d),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),xr.subVectors(n,t),ua.crossVectors(ha,xr);let o=this.direction.dot(ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);let c=a*this.direction.dot(xr.crossVectors(ni,xr));if(c<0)return null;let l=a*this.direction.dot(ha.cross(ni));if(l<0||c+l>o)return null;let h=-a*ni.dot(ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,$f)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),yr.crossVectors(rn,ii),s[0]=ii.x,s[4]=yr.x,s[8]=rn.x,s[1]=ii.y,s[5]=yr.y,s[9]=rn.y,s[2]=ii.z,s[6]=yr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],M=n[7],y=n[11],C=n[15],E=s[0],b=s[4],A=s[8],S=s[12],x=s[1],T=s[5],L=s[9],I=s[13],z=s[2],k=s[6],B=s[10],Z=s[14],N=s[3],ft=s[7],dt=s[11],mt=s[15];return r[0]=o*E+a*x+c*z+l*N,r[4]=o*b+a*T+c*k+l*ft,r[8]=o*A+a*L+c*B+l*dt,r[12]=o*S+a*I+c*Z+l*mt,r[1]=h*E+u*x+d*z+f*N,r[5]=h*b+u*T+d*k+f*ft,r[9]=h*A+u*L+d*B+f*dt,r[13]=h*S+u*I+d*Z+f*mt,r[2]=m*E+_*x+g*z+p*N,r[6]=m*b+_*T+g*k+p*ft,r[10]=m*A+_*L+g*B+p*dt,r[14]=m*S+_*I+g*Z+p*mt,r[3]=v*E+M*x+y*z+C*N,r[7]=v*b+M*T+y*k+C*ft,r[11]=v*A+M*L+y*B+C*dt,r[15]=v*S+M*I+y*Z+C*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,M=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,y=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,C=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,E=e*v+n*M+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/E;return t[0]=v*b,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*b,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=M*b,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*b,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=y*b,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=C*b,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*b,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=c*l,M=c*h,y=c*u,C=n.x,E=n.y,b=n.z;return s[0]=(1-(_+p))*C,s[1]=(f+y)*C,s[2]=(m-M)*C,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+M)*b,s[9]=(g-v)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===Vn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Yr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,_;if(a===Vn)m=(o+r)*u,_=-2*u;else if(a===Yr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new U,yn=new ee,Zf=new U(0,0,0),$f=new U(1,1,1),ii=new U,yr=new U,rn=new U,ah=new ee,ch=new be,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jf=0,lh=new U,qi=new be,Bn=new ee,vr=new U,Ls=new U,Kf=new U,jf=new be,hh=new U(1,0,0),uh=new U(0,1,0),dh=new U(0,0,1),fh={type:"added"},Qf={type:"removed"},Yi={type:"childadded",child:null},da={type:"childremoved",child:null},ke=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new dn,n=new be,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ls,vr,this.up):Bn.lookAt(vr,Ls,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new U(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;vn=new U,zn=new U,fa=new U,kn=new U,Zi=new U,$i=new U,ph=new U,pa=new U,ma=new U,ga=new U,_a=new Ee,xa=new Ee,ya=new Ee,Ei=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),zn.subVectors(n,e),fa.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(zn),c=vn.dot(fa),l=zn.dot(zn),h=zn.dot(fa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _a.setScalar(0),xa.setScalar(0),ya.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),zn.subVectors(t,e),vn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),$i.subVectors(r,n),pa.subVectors(t,n);let c=Zi.dot(pa),l=$i.dot(pa);if(c<=0&&l<=0)return e.copy(n);ma.subVectors(t,s);let h=Zi.dot(ma),u=$i.dot(ma);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Zi,o);ga.subVectors(t,r);let f=Zi.dot(ga),m=$i.dot(ga);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector($i,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ph.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(ph,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Mr={h:0,s:0,l:0};qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=ml(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=va(o,r,t+1/3),this.g=va(o,r,t),this.b=va(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return oe.fromWorkingColorSpace(ze.copy(this),t),Math.round(Re(ze.r*255,0,255))*65536+Math.round(Re(ze.g*255,0,255))*256+Math.round(Re(ze.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=me){oe.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Mr);let n=ks(si.h,Mr.h,e),s=ks(si.s,Mr.s,e),r=ks(si.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new qt;qt.NAMES=yu;tp=0,ui=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Li(),this.name="",this.blending=ss,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fs=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},we=new U,Sr=new _t,Jt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}},Jr=class extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Kr=class extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Xt=class extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},ep=0,hn=new ee,Ma=new ke,Ji=new U,on=new bn,Ds=new bn,Le=new U,ie=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(on.min,Ds.min),on.expandByPoint(Le),Le.addVectors(on.max,Ds.max),on.expandByPoint(Le)):(on.expandByPoint(Ds.min),on.expandByPoint(Ds.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(t,l),Le.add(Ji)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new U,c[A]=new U;let l=new U,h=new U,u=new U,d=new _t,f=new _t,m=new _t,_=new U,g=new U;function p(A,S,x){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),a[A].add(_),a[S].add(_),a[x].add(_),c[A].add(g),c[S].add(g),c[x].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){let x=v[A],T=x.start,L=x.count;for(let I=T,z=T+L;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new U,y=new U,C=new U,E=new U;function b(A){C.fromBufferAttribute(s,A),E.copy(C);let S=a[A];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(E,S);let T=y.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,T)}for(let A=0,S=v.length;A<S;++A){let x=v[A],T=x.start,L=x.count;for(let I=T,z=T+L;I<z;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new ee,_i=new Ti,Er=new hi,gh=new U,br=new U,wr=new U,Tr=new U,Sa=new U,Ar=new U,_h=new U,Rr=new U,Ot=class extends ke{constructor(t=new ie,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),o?Ar.addScaledVector(Sa,h):Ar.addScaledVector(Sa.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Er.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Er,gh)===null||_i.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),_i.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let E=a.getX(y),b=a.getX(y+1),A=a.getX(y+2);s=Cr(this,p,t,n,l,h,u,E,b,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Cr(this,o,t,n,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let E=y,b=y+1,A=y+2;s=Cr(this,p,t,n,l,h,u,E,b,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,M=g+1,y=g+2;s=Cr(this,o,t,n,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};He=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function m(_,g,p,v,M,y,C,E,b,A,S){let x=y/b,T=C/A,L=y/2,I=C/2,z=E/2,k=b+1,B=A+1,Z=0,N=0,ft=new U;for(let dt=0;dt<B;dt++){let mt=dt*T-I;for(let yt=0;yt<k;yt++){let bt=yt*x-L;ft[_]=bt*v,ft[g]=mt*M,ft[p]=z,l.push(ft.x,ft.y,ft.z),ft[_]=0,ft[g]=0,ft[p]=E>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(yt/b),u.push(1-dt/A),Z+=1}}for(let dt=0;dt<A;dt++)for(let mt=0;mt<b;mt++){let yt=d+mt+k*dt,bt=d+mt+k*(dt+1),et=d+(mt+1)+k*(dt+1),ct=d+(mt+1)+k*dt;c.push(yt,bt,ct),c.push(bt,et,ct),N+=6}a.addGroup(f,N,S),f+=N,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};gl={clone:ps,merge:Xe},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},jr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new U,xh=new _t,yh=new _t,qe=class extends jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,xh,yh),e.subVectors(yh,xh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,Ec=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Ki,ji,t,e);s.layers=this.layers,this.add(s);let r=new qe(Ki,ji,t,e);r.layers=this.layers,this.add(r);let o=new qe(Ki,ji,t,e);o.layers=this.layers,this.add(o);let a=new qe(Ki,ji,t,e);a.layers=this.layers,this.add(a);let c=new qe(Ki,ji,t,e);c.layers=this.layers,this.add(c);let l=new qe(Ki,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Qr=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bc=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ai});r.uniforms.tEquirect.value=e;let o=new Ot(s,r),a=e.minFilter;return e.minFilter===Sn&&(e.minFilter=un),new Ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ea=new U,op=new U,ap=new jt,Mn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ea.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ap.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new hi,Pr=new U,Zs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+o,d+h,g+m,y+v).normalize(),n[3].setComponents(c-o,d-h,g-m,y-v).normalize(),n[4].setComponents(c-a,d-u,g-_,y-M).normalize(),e===Vn)n[5].setComponents(c+a,d+u,g+_,y+M).normalize();else if(e===Yr)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};ms=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<l;M++){let y=M*u-r;m.push(y,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let M=v+l*p,y=v+l*(p+1),C=v+1+l*(p+1),E=v+1+l*p;f.push(M,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:lp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:xp,begin_vertex:yp,beginnormal_vertex:vp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:bp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Hp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:$p,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:cm,lights_fragment_maps:lm,lights_fragment_end:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:vm,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:wm,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:km,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Zm,skinning_pars_vertex:$m,skinning_vertex:Jm,skinnormal_vertex:Km,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:c0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:E0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:I0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:k0,sprite_frag:H0},Dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([Dt.points,Dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([Dt.common,Dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([Dt.sprite,Dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Xe([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Xe([Dt.lights,Dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};Ir={r:0,b:0,g:0},yi=new dn,V0=new ee;to=class extends jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,vh=[.125,.215,.35,.446,.526,.582],bi=20,ba=new to,Mh=new qt,wa=null,Ta=0,Aa=0,Ra=!1,Mi=(1+Math.sqrt(5))/2,Qi=1/Mi,Sh=[new U(-Mi,Qi,0),new U(Mi,Qi,0),new U(-Qi,0,Mi),new U(Qi,0,Mi),new U(0,Mi,-Qi),new U(0,Mi,Qi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ta,Aa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:rr,format:an,colorSpace:vs,depthBuffer:!1},s=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(r)),this._blurMaterial=J0(r,t,e)}return s}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let a=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mh),h.toneMapping=ci,h.autoClear=!1;let f=new fs({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new Ot(new He,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Mh),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;Lr(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(s-r-1)%Sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);let p=[],v=0;for(let b=0;b<bi;++b){let A=b/_,S=Math.exp(-A*A/2);p.push(S),b===0?v+=S:b<g&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let y=this._sizeLods[s],C=3*y*(s>M-ns?s-M+ns:0),E=4*(this._cubeSize-y);Lr(e,C,E,3*y,2*y),c.setRenderTarget(e),c.render(u,ba)}};eo=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h=rs){if(h!==rs&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=wi),n===void 0&&h===ds&&(n=us),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Su=new Ye,Th=new eo(1,1),Eu=new $r,bu=new Sc,wu=new Qr,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};Xg=37297,qg=0;Uh=new jt;Dr=new U;e_=/^[ \t]*#include +<([\w\d./]+)>/gm;n_=new Map;s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;d_=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}};y_=0;$s=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ic=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;T_={[Oa]:Ba,[za]:Va,[ka]:Ga,[cs]:Ha,[Ba]:Oa,[Va]:za,[Ga]:ka,[Ha]:cs};Lc=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},I_={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:L_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=new Dc,g=e.getContextAttributes(),p=null,v=null,M=[],y=[],C=new _t,E=null,b=new qe;b.viewport=new Ee;let A=new qe;A.viewport=new Ee;let S=[b,A],x=new Lc,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=M[et];return ct===void 0&&(ct=new Hs,M[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=M[et];return ct===void 0&&(ct=new Hs,M[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=M[et];return ct===void 0&&(ct=new Hs,M[et]=ct),ct.getHandSpace()};function I(et){let ct=y.indexOf(et.inputSource);if(ct===-1)return;let Mt=M[ct];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,l||o),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let et=0;et<M.length;et++){let ct=y[et];ct!==null&&(y[et]=null,M[et].disconnect(ct))}T=null,L=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ct=null,Mt=null,G=null;g.depth&&(G=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=g.stencil?ds:rs,Mt=g.stencil?us:wi);let it={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Yn(d.textureWidth,d.textureHeight,{format:an,type:Xn,depthTexture:new eo(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(et){for(let ct=0;ct<et.removed.length;ct++){let Mt=et.removed[ct],G=y.indexOf(Mt);G>=0&&(y[G]=null,M[G].disconnect(Mt))}for(let ct=0;ct<et.added.length;ct++){let Mt=et.added[ct],G=y.indexOf(Mt);if(G===-1){for(let pt=0;pt<M.length;pt++)if(pt>=y.length){y.push(Mt),G=pt;break}else if(y[pt]===null){y[pt]=Mt,G=pt;break}if(G===-1)break}let it=M[G];it&&it.connect(Mt)}}let B=new U,Z=new U;function N(et,ct,Mt){B.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);let G=B.distanceTo(Z),it=ct.projectionMatrix.elements,pt=Mt.projectionMatrix.elements,q=it[14]/(it[10]-1),Tt=it[14]/(it[10]+1),st=(it[9]+1)/it[5],ht=(it[9]-1)/it[5],D=(it[8]-1)/it[0],ut=(pt[8]+1)/pt[0],H=q*D,j=q*ut,tt=G/(-D+ut),nt=tt*-D;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(nt),et.translateZ(tt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),it[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let V=q+tt,R=Tt+tt,w=H-nt,F=j+(G-nt),$=st*Tt/R*V,J=ht*Tt/R*V;et.projectionMatrix.makePerspective(w,F,$,J,V,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function ft(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ct=et.near,Mt=et.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),x.near=A.near=b.near=ct,x.far=A.far=b.far=Mt,(T!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,L=x.far),b.layers.mask=et.layers.mask|2,A.layers.mask=et.layers.mask|4,x.layers.mask=b.layers.mask|A.layers.mask;let G=et.parent,it=x.cameras;ft(x,G);for(let pt=0;pt<it.length;pt++)ft(it[pt],G);it.length===2?N(x,b,A):x.projectionMatrix.copy(b.projectionMatrix),dt(et,x,G)};function dt(et,ct,Mt){Mt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(et){c=et,d!==null&&(d.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let mt=null;function yt(et,ct){if(h=ct.getViewerPose(l||o),m=ct,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let G=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,G=!0);for(let pt=0;pt<Mt.length;pt++){let q=Mt[pt],Tt=null;if(f!==null)Tt=f.getViewport(q);else{let ht=u.getViewSubImage(d,q);Tt=ht.viewport,pt===0&&(t.setRenderTargetTextures(v,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let st=S[pt];st===void 0&&(st=new qe,st.layers.enable(pt),st.viewport=new Ee,S[pt]=st),st.matrix.fromArray(q.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(q.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),pt===0&&(x.matrix.copy(st.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),G===!0&&x.cameras.push(st)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){let pt=u.getDepthInformation(Mt[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let Mt=0;Mt<M.length;Mt++){let G=y[Mt],it=M[Mt];G!==null&&it!==void 0&&it.update(G,ct,l||o)}mt&&mt(et,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}let bt=new Mu;bt.setAnimationLoop(yt),this.setAnimationLoop=function(et){mt=et},this.dispose=function(){}}},vi=new dn,U_=new ee;no=class{constructor(t={}){let{canvas:e=Hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=ci,this.toneMappingExposure=1;let y=this,C=!1,E=0,b=0,A=null,S=-1,x=null,T=new Ee,L=new Ee,I=null,z=new qt(0),k=0,B=e.width,Z=e.height,N=1,ft=null,dt=null,mt=new Ee(0,0,B,Z),yt=new Ee(0,0,B,Z),bt=!1,et=new Zs,ct=!1,Mt=!1,G=new ee,it=new ee,pt=new U,q=new Ee,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function ht(){return A===null?N:1}let D=n;function ut(P,W){return e.getContext(P,W)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",It,!1),D===null){let W="webgl2";if(D=ut(W,P),D===null)throw ut(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let H,j,tt,nt,V,R,w,F,$,J,Y,xt,rt,gt,At,vt,Lt,Bt,zt,K,Et,wt,Rt,O;function St(){H=new j0(D),H.init(),wt=new P_(D,H),j=new q0(D,H,t,wt),tt=new A_(D,H),j.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),nt=new eg(D),V=new p_,R=new C_(D,H,tt,V,j,wt,nt),w=new Z0(y),F=new K0(y),$=new cp(D),Rt=new W0(D,$),J=new Q0(D,$,nt,Rt),Y=new ig(D,J,$,nt),zt=new ng(D,j,R),vt=new Y0(V),xt=new f_(y,w,F,H,j,Rt,vt),rt=new N_(y,V),gt=new g_,At=new S_(H),Bt=new G0(y,w,F,tt,Y,f,c),Lt=new w_(y,Y,j),O=new F_(D,nt,j,tt),K=new X0(D,H,nt),Et=new tg(D,H,nt),nt.programs=xt.programs,y.capabilities=j,y.extensions=H,y.properties=V,y.renderLists=gt,y.shadowMap=Lt,y.state=tt,y.info=nt}St();let Q=new Uc(y,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let P=H.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=H.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(B,Z,!1))},this.getSize=function(P){return P.set(B,Z)},this.setSize=function(P,W,ot=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,Z=W,e.width=Math.floor(P*N),e.height=Math.floor(W*N),ot===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(B*N,Z*N).floor()},this.setDrawingBufferSize=function(P,W,ot){B=P,Z=W,N=ot,e.width=Math.floor(P*ot),e.height=Math.floor(W*ot),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(mt)},this.setViewport=function(P,W,ot,at){P.isVector4?mt.set(P.x,P.y,P.z,P.w):mt.set(P,W,ot,at),tt.viewport(T.copy(mt).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(yt)},this.setScissor=function(P,W,ot,at){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,W,ot,at),tt.scissor(L.copy(yt).multiplyScalar(N).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(P){tt.setScissorTest(bt=P)},this.setOpaqueSort=function(P){ft=P},this.setTransparentSort=function(P){dt=P},this.getClearColor=function(P){return P.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(P=!0,W=!0,ot=!0){let at=0;if(P){let X=!1;if(A!==null){let Ct=A.texture.format;X=Ct===fl||Ct===dl||Ct===ul}if(X){let Ct=A.texture.type,Ut=Ct===Xn||Ct===wi||Ct===Ws||Ct===us||Ct===cl||Ct===ll,kt=Bt.getClearColor(),Ht=Bt.getClearAlpha(),$t=kt.r,Kt=kt.g,Vt=kt.b;Ut?(m[0]=$t,m[1]=Kt,m[2]=Vt,m[3]=Ht,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=$t,_[1]=Kt,_[2]=Vt,_[3]=Ht,D.clearBufferiv(D.COLOR,0,_))}else at|=D.COLOR_BUFFER_BIT}W&&(at|=D.DEPTH_BUFFER_BIT),ot&&(at|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),gt.dispose(),At.dispose(),V.dispose(),w.dispose(),F.dispose(),Y.dispose(),Rt.dispose(),O.dispose(),xt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Jn),Q.removeEventListener("sessionend",Kn),Rn.stop()};function lt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=nt.autoReset,W=Lt.enabled,ot=Lt.autoUpdate,at=Lt.needsUpdate,X=Lt.type;St(),nt.autoReset=P,Lt.enabled=W,Lt.autoUpdate=ot,Lt.needsUpdate=at,Lt.type=X}function It(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Yt(P){let W=P.target;W.removeEventListener("dispose",Yt),ce(W)}function ce(P){Me(P),V.remove(P)}function Me(P){let W=V.get(P).programs;W!==void 0&&(W.forEach(function(ot){xt.releaseProgram(ot)}),P.isShaderMaterial&&xt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,ot,at,X,Ct){W===null&&(W=Tt);let Ut=X.isMesh&&X.matrixWorld.determinant()<0,kt=Fd(P,W,ot,at,X);tt.setMaterial(at,Ut);let Ht=ot.index,$t=1;if(at.wireframe===!0){if(Ht=J.getWireframeAttribute(ot),Ht===void 0)return;$t=2}let Kt=ot.drawRange,Vt=ot.attributes.position,ae=Kt.start*$t,pe=(Kt.start+Kt.count)*$t;Ct!==null&&(ae=Math.max(ae,Ct.start*$t),pe=Math.min(pe,(Ct.start+Ct.count)*$t)),Ht!==null?(ae=Math.max(ae,0),pe=Math.min(pe,Ht.count)):Vt!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,Vt.count));let ge=pe-ae;if(ge<0||ge===1/0)return;Rt.setup(X,at,kt,ot,Ht);let Je,le=K;if(Ht!==null&&(Je=$.get(Ht),le=Et,le.setIndex(Je)),X.isMesh)at.wireframe===!0?(tt.setLineWidth(at.wireframeLinewidth*ht()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(X.isLine){let Wt=at.linewidth;Wt===void 0&&(Wt=1),tt.setLineWidth(Wt*ht()),X.isLineSegments?le.setMode(D.LINES):X.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else X.isPoints?le.setMode(D.POINTS):X.isSprite&&le.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)le.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Wt=X._multiDrawStarts,Nn=X._multiDrawCounts,he=X._multiDrawCount,_n=Ht?$.get(Ht).bytesPerElement:1,zi=V.get(at).currentProgram.getUniforms();for(let sn=0;sn<he;sn++)zi.setValue(D,"_gl_DrawID",sn),le.render(Wt[sn]/_n,Nn[sn])}else if(X.isInstancedMesh)le.renderInstances(ae,ge,X.count);else if(ot.isInstancedBufferGeometry){let Wt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Nn=Math.min(ot.instanceCount,Wt);le.renderInstances(ae,ge,Nn)}else le.render(ae,ge)};function ne(P,W,ot){P.transparent===!0&&P.side===Zt&&P.forceSinglePass===!1?(P.side=De,P.needsUpdate=!0,dr(P,W,ot),P.side=li,P.needsUpdate=!0,dr(P,W,ot),P.side=Zt):dr(P,W,ot)}this.compile=function(P,W,ot=null){ot===null&&(ot=P),p=At.get(ot),p.init(W),M.push(p),ot.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),P!==ot&&P.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let at=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ct=X.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){let kt=Ct[Ut];ne(kt,ot,X),at.add(kt)}else ne(Ct,ot,X),at.add(Ct)}),M.pop(),p=null,at},this.compileAsync=function(P,W,ot=null){let at=this.compile(P,W,ot);return new Promise(X=>{function Ct(){if(at.forEach(function(Ut){V.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){X(P);return}setTimeout(Ct,10)}H.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Fe=null;function Ge(P){Fe&&Fe(P)}function Jn(){Rn.stop()}function Kn(){Rn.start()}let Rn=new Mu;Rn.setAnimationLoop(Ge),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(P){Fe=P,Q.setAnimationLoop(P),P===null?Rn.stop():Rn.start()},Q.addEventListener("sessionstart",Jn),Q.addEventListener("sessionend",Kn),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,W,A),p=At.get(P,M.length),p.init(W),M.push(p),it.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(it),Mt=this.localClippingEnabled,ct=vt.init(this.clippingPlanes,Mt),g=gt.get(P,v.length),g.init(),v.push(g),Q.enabled===!0&&Q.isPresenting===!0){let Ct=y.xr.getDepthSensingMesh();Ct!==null&&Bi(Ct,W,-1/0,y.sortObjects)}Bi(P,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ft,dt),st=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,st&&Bt.addToRenderList(g,P),this.info.render.frame++,ct===!0&&vt.beginShadows();let ot=p.state.shadowsArray;Lt.render(ot,P,W),ct===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let Ct=W.cameras;if(X.length>0)for(let Ut=0,kt=Ct.length;Ut<kt;Ut++){let Ht=Ct[Ut];Bl(at,X,P,Ht)}st&&Bt.render(P);for(let Ut=0,kt=Ct.length;Ut<kt;Ut++){let Ht=Ct[Ut];Ol(g,P,Ht,Ht.viewport)}}else X.length>0&&Bl(at,X,P,W),st&&Bt.render(P),Ol(g,P,W);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(y,P,W),Rt.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],ct===!0&&vt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Bi(P,W,ot,at){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)ot=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){at&&q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(it);let Ut=Y.update(P),kt=P.material;kt.visible&&g.push(P,Ut,kt,ot,q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){let Ut=Y.update(P),kt=P.material;if(at&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),q.copy(Ut.boundingSphere.center)),q.applyMatrix4(P.matrixWorld).applyMatrix4(it)),Array.isArray(kt)){let Ht=Ut.groups;for(let $t=0,Kt=Ht.length;$t<Kt;$t++){let Vt=Ht[$t],ae=kt[Vt.materialIndex];ae&&ae.visible&&g.push(P,Ut,ae,ot,q.z,Vt)}}else kt.visible&&g.push(P,Ut,kt,ot,q.z,null)}}let Ct=P.children;for(let Ut=0,kt=Ct.length;Ut<kt;Ut++)Bi(Ct[Ut],W,ot,at)}function Ol(P,W,ot,at){let X=P.opaque,Ct=P.transmissive,Ut=P.transparent;p.setupLightsView(ot),ct===!0&&vt.setGlobalState(y.clippingPlanes,ot),at&&tt.viewport(T.copy(at)),X.length>0&&ur(X,W,ot),Ct.length>0&&ur(Ct,W,ot),Ut.length>0&&ur(Ut,W,ot),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Bl(P,W,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new Yn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?rr:Xn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let Ct=p.state.transmissionRenderTarget[at.id],Ut=at.viewport||T;Ct.setSize(Ut.z,Ut.w);let kt=y.getRenderTarget();y.setRenderTarget(Ct),y.getClearColor(z),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),st&&Bt.render(ot);let Ht=y.toneMapping;y.toneMapping=ci;let $t=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),ct===!0&&vt.setGlobalState(y.clippingPlanes,at),ur(P,ot,at),R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct),H.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Vt=0,ae=W.length;Vt<ae;Vt++){let pe=W[Vt],ge=pe.object,Je=pe.geometry,le=pe.material,Wt=pe.group;if(le.side===Zt&&ge.layers.test(at.layers)){let Nn=le.side;le.side=De,le.needsUpdate=!0,zl(ge,ot,at,Je,le,Wt),le.side=Nn,le.needsUpdate=!0,Kt=!0}}Kt===!0&&(R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct))}y.setRenderTarget(kt),y.setClearColor(z,k),$t!==void 0&&(at.viewport=$t),y.toneMapping=Ht}function ur(P,W,ot){let at=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ct=P.length;X<Ct;X++){let Ut=P[X],kt=Ut.object,Ht=Ut.geometry,$t=at===null?Ut.material:at,Kt=Ut.group;kt.layers.test(ot.layers)&&zl(kt,W,ot,Ht,$t,Kt)}}function zl(P,W,ot,at,X,Ct){P.onBeforeRender(y,W,ot,at,X,Ct),P.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(y,W,ot,at,P,Ct),X.transparent===!0&&X.side===Zt&&X.forceSinglePass===!1?(X.side=De,X.needsUpdate=!0,y.renderBufferDirect(ot,W,at,X,P,Ct),X.side=li,X.needsUpdate=!0,y.renderBufferDirect(ot,W,at,X,P,Ct),X.side=Zt):y.renderBufferDirect(ot,W,at,X,P,Ct),P.onAfterRender(y,W,ot,at,X,Ct)}function dr(P,W,ot){W.isScene!==!0&&(W=Tt);let at=V.get(P),X=p.state.lights,Ct=p.state.shadowsArray,Ut=X.state.version,kt=xt.getParameters(P,X.state,Ct,W,ot),Ht=xt.getProgramCacheKey(kt),$t=at.programs;at.environment=P.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(P.isMeshStandardMaterial?F:w).get(P.envMap||at.environment),at.envMapRotation=at.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",Yt),$t=new Map,at.programs=$t);let Kt=$t.get(Ht);if(Kt!==void 0){if(at.currentProgram===Kt&&at.lightsStateVersion===Ut)return Hl(P,kt),Kt}else kt.uniforms=xt.getUniforms(P),P.onBeforeCompile(kt,y),Kt=xt.acquireProgram(kt,Ht),$t.set(Ht,Kt),at.uniforms=kt.uniforms;let Vt=at.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=vt.uniform),Hl(P,kt),at.needsLights=Bd(P),at.lightsStateVersion=Ut,at.needsLights&&(Vt.ambientLightColor.value=X.state.ambient,Vt.lightProbe.value=X.state.probe,Vt.directionalLights.value=X.state.directional,Vt.directionalLightShadows.value=X.state.directionalShadow,Vt.spotLights.value=X.state.spot,Vt.spotLightShadows.value=X.state.spotShadow,Vt.rectAreaLights.value=X.state.rectArea,Vt.ltc_1.value=X.state.rectAreaLTC1,Vt.ltc_2.value=X.state.rectAreaLTC2,Vt.pointLights.value=X.state.point,Vt.pointLightShadows.value=X.state.pointShadow,Vt.hemisphereLights.value=X.state.hemi,Vt.directionalShadowMap.value=X.state.directionalShadowMap,Vt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Vt.spotShadowMap.value=X.state.spotShadowMap,Vt.spotLightMatrix.value=X.state.spotLightMatrix,Vt.spotLightMap.value=X.state.spotLightMap,Vt.pointShadowMap.value=X.state.pointShadowMap,Vt.pointShadowMatrix.value=X.state.pointShadowMatrix),at.currentProgram=Kt,at.uniformsList=null,Kt}function kl(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=as.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Hl(P,W){let ot=V.get(P);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Fd(P,W,ot,at,X){W.isScene!==!0&&(W=Tt),R.resetTextureUnits();let Ct=W.fog,Ut=at.isMeshStandardMaterial?W.environment:null,kt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vs,Ht=(at.isMeshStandardMaterial?F:w).get(at.envMap||Ut),$t=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Kt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Vt=!!ot.morphAttributes.position,ae=!!ot.morphAttributes.normal,pe=!!ot.morphAttributes.color,ge=ci;at.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ge=y.toneMapping);let Je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,le=Je!==void 0?Je.length:0,Wt=V.get(at),Nn=p.state.lights;if(ct===!0&&(Mt===!0||P!==x)){let ln=P===x&&at.id===S;vt.setState(at,P,ln)}let he=!1;at.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Nn.state.version||Wt.outputColorSpace!==kt||X.isBatchedMesh&&Wt.batching===!1||!X.isBatchedMesh&&Wt.batching===!0||X.isBatchedMesh&&Wt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Wt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Wt.instancing===!1||!X.isInstancedMesh&&Wt.instancing===!0||X.isSkinnedMesh&&Wt.skinning===!1||!X.isSkinnedMesh&&Wt.skinning===!0||X.isInstancedMesh&&Wt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Wt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Wt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Wt.instancingMorph===!1&&X.morphTexture!==null||Wt.envMap!==Ht||at.fog===!0&&Wt.fog!==Ct||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==vt.numPlanes||Wt.numIntersection!==vt.numIntersection)||Wt.vertexAlphas!==$t||Wt.vertexTangents!==Kt||Wt.morphTargets!==Vt||Wt.morphNormals!==ae||Wt.morphColors!==pe||Wt.toneMapping!==ge||Wt.morphTargetsCount!==le)&&(he=!0):(he=!0,Wt.__version=at.version);let _n=Wt.currentProgram;he===!0&&(_n=dr(at,W,X));let zi=!1,sn=!1,Rs=!1,_e=_n.getUniforms(),Cn=Wt.uniforms;if(tt.useProgram(_n.program)&&(zi=!0,sn=!0,Rs=!0),at.id!==S&&(S=at.id,sn=!0),zi||x!==P){tt.buffers.depth.getReversed()?(G.copy(P.projectionMatrix),Gf(G),Wf(G),_e.setValue(D,"projectionMatrix",G)):_e.setValue(D,"projectionMatrix",P.projectionMatrix),_e.setValue(D,"viewMatrix",P.matrixWorldInverse);let jn=_e.map.cameraPosition;jn!==void 0&&jn.setValue(D,pt.setFromMatrixPosition(P.matrixWorld)),j.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&_e.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,sn=!0,Rs=!0)}if(X.isSkinnedMesh){_e.setOptional(D,X,"bindMatrix"),_e.setOptional(D,X,"bindMatrixInverse");let ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_e.setValue(D,"boneTexture",ln.boneTexture,R))}X.isBatchedMesh&&(_e.setOptional(D,X,"batchingTexture"),_e.setValue(D,"batchingTexture",X._matricesTexture,R),_e.setOptional(D,X,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",X._indirectTexture,R),_e.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",X._colorsTexture,R));let Cs=ot.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&zt.update(X,ot,_n),(sn||Wt.receiveShadow!==X.receiveShadow)&&(Wt.receiveShadow=X.receiveShadow,_e.setValue(D,"receiveShadow",X.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Cn.envMap.value=Ht,Cn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),sn&&(_e.setValue(D,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Od(Cn,Rs),Ct&&at.fog===!0&&rt.refreshFogUniforms(Cn,Ct),rt.refreshMaterialUniforms(Cn,at,N,Z,p.state.transmissionRenderTarget[P.id]),as.upload(D,kl(Wt),Cn,R)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(as.upload(D,kl(Wt),Cn,R),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&_e.setValue(D,"center",X.center),_e.setValue(D,"modelViewMatrix",X.modelViewMatrix),_e.setValue(D,"normalMatrix",X.normalMatrix),_e.setValue(D,"modelMatrix",X.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let ln=at.uniformsGroups;for(let jn=0,Qn=ln.length;jn<Qn;jn++){let Vl=ln[jn];O.update(Vl,_n),O.bind(Vl,_n)}}return _n}function Od(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Bd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,W,ot){V.get(P.texture).__webglTexture=W,V.get(P.depthTexture).__webglTexture=ot;let at=V.get(P);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let ot=V.get(P);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,ot=0){A=P,E=W,b=ot;let at=!0,X=null,Ct=!1,Ut=!1;if(P){let Ht=V.get(P);if(Ht.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(D.FRAMEBUFFER,null),at=!1;else if(Ht.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Ht.__hasExternalTextures)R.rebindTextures(P,V.get(P.texture).__webglTexture,V.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Vt=P.depthTexture;if(Ht.__boundDepthTexture!==Vt){if(Vt!==null&&V.has(Vt)&&(P.width!==Vt.image.width||P.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}let $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);let Kt=V.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Kt[W])?X=Kt[W][ot]:X=Kt[W],Ct=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?X=V.get(P).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[ot]:X=Kt,T.copy(P.viewport),L.copy(P.scissor),I=P.scissorTest}else T.copy(mt).multiplyScalar(N).floor(),L.copy(yt).multiplyScalar(N).floor(),I=bt;if(tt.bindFramebuffer(D.FRAMEBUFFER,X)&&at&&tt.drawBuffers(P,X),tt.viewport(T),tt.scissor(L),tt.setScissorTest(I),Ct){let Ht=V.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ht.__webglTexture,ot)}else if(Ut){let Ht=V.get(P.texture),$t=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,ot||0,$t)}S=-1},this.readRenderTargetPixels=function(P,W,ot,at,X,Ct,Ut){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){tt.bindFramebuffer(D.FRAMEBUFFER,kt);try{let Ht=P.texture,$t=Ht.format,Kt=Ht.type;if(!j.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-at&&ot>=0&&ot<=P.height-X&&D.readPixels(W,ot,at,X,wt.convert($t),wt.convert(Kt),Ct)}finally{let Ht=A!==null?V.get(A).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,W,ot,at,X,Ct,Ut){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){let Ht=P.texture,$t=Ht.format,Kt=Ht.type;if(!j.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-at&&ot>=0&&ot<=P.height-X){tt.bindFramebuffer(D.FRAMEBUFFER,kt);let Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,Ct.byteLength,D.STREAM_READ),D.readPixels(W,ot,at,X,wt.convert($t),wt.convert(Kt),0);let ae=A!==null?V.get(A).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,ae);let pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Vf(D,pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ct),D.deleteBuffer(Vt),D.deleteSync(pe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,ot=0){P.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);let at=Math.pow(2,-ot),X=Math.floor(P.image.width*at),Ct=Math.floor(P.image.height*at),Ut=W!==null?W.x:0,kt=W!==null?W.y:0;R.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,ot,0,0,Ut,kt,X,Ct),tt.unbindTexture()},this.copyTextureToTexture=function(P,W,ot=null,at=null,X=0){P.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,P=arguments[1],W=arguments[2],X=arguments[3]||0,ot=null);let Ct,Ut,kt,Ht,$t,Kt,Vt,ae,pe,ge=P.isCompressedTexture?P.mipmaps[X]:P.image;ot!==null?(Ct=ot.max.x-ot.min.x,Ut=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Ht=ot.min.x,$t=ot.min.y,Kt=ot.isBox3?ot.min.z:0):(Ct=ge.width,Ut=ge.height,kt=ge.depth||1,Ht=0,$t=0,Kt=0),at!==null?(Vt=at.x,ae=at.y,pe=at.z):(Vt=0,ae=0,pe=0);let Je=wt.convert(W.format),le=wt.convert(W.type),Wt;W.isData3DTexture?(R.setTexture3D(W,0),Wt=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(R.setTexture2DArray(W,0),Wt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(W,0),Wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let Nn=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_n=D.getParameter(D.UNPACK_SKIP_PIXELS),zi=D.getParameter(D.UNPACK_SKIP_ROWS),sn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);let Rs=P.isDataArrayTexture||P.isData3DTexture,_e=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Cn=V.get(P),Cs=V.get(W),ln=V.get(Cn.__renderTarget),jn=V.get(Cs.__renderTarget);tt.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<kt;Qn++)Rs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(P).__webglTexture,X,Kt+Qn),P.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(W).__webglTexture,X,pe+Qn),D.blitFramebuffer(Ht,$t,Ct,Ut,Vt,ae,Ct,Ut,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(Wt,X,Vt,ae,pe+Qn,Ht,$t,Ct,Ut):D.copyTexSubImage2D(Wt,X,Vt,ae,pe+Qn,Ht,$t,Ct,Ut);tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Wt,X,Vt,ae,pe,Ct,Ut,kt,Je,le,ge.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Wt,X,Vt,ae,pe,Ct,Ut,kt,Je,ge.data):D.texSubImage3D(Wt,X,Vt,ae,pe,Ct,Ut,kt,Je,le,ge):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,Vt,ae,Ct,Ut,Je,le,ge.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,Vt,ae,ge.width,ge.height,Je,ge.data):D.texSubImage2D(D.TEXTURE_2D,X,Vt,ae,Ct,Ut,Je,le,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_n),D.pixelStorei(D.UNPACK_SKIP_ROWS,zi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,sn),X===0&&W.generateMipmaps&&D.generateMipmap(Wt),tt.unbindTexture()},this.copyTextureToTexture3D=function(P,W,ot=null,at=null,X=0){return P.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,P=arguments[2],W=arguments[3],X=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,ot,at,X)},this.initRenderTarget=function(P){V.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),tt.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,tt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}},io=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ks=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=cn,h=cn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},js=class extends Jt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new ee,Wh=new ee,Ur=[],Xh=new bn,O_=new ee,Us=new Ot,Ns=new hi,Ue=class extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Xh.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ns.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Wh.multiplyMatrices(n,ts),Us.matrixWorld=Wh,Us.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){let c=Ur[o];c.instanceId=r,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(s*this.count),s,this.count,hl,Ln));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},so=class extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ro=new U,oo=new U,qh=new ee,Fs=new Ti,Nr=new hi,Pa=new U,Yh=new U,ao=class extends ke{constructor(t=new ie,e=new so){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ro.fromBufferAttribute(e,s-1),oo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ro.distanceTo(oo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;qh.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),v=h.getX(_+1),M=Fr(this,t,Fs,c,p,v);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Fr(this,t,Fs,c,_,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=Fr(this,t,Fs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Fr(this,t,Fs,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};je=class extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],o=[],a=new U,c=new ee;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nc=class extends Qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Or=new U,Ia=new xl,La=new xl,Da=new xl,Fc=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),l=Or);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),La.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Da.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),La.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Da.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),La.calc(c),Da.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};co=class extends fn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends fn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends fn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends fn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends fn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zc=class extends fn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zh(a,c.x,l.x,h.x,u.x),Zh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Fc,CubicBezierCurve:co,CubicBezierCurve3:Oc,EllipseCurve:Qs,LineCurve:lo,LineCurve3:Bc,QuadraticBezierCurve:ho,QuadraticBezierCurve3:zc,SplineCurve:uo}),Hc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new kc[s.type]().fromJSON(s))}return this}},fo=class extends Hc{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ho(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new co(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Qs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},po=class i extends ie{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new U,d=new _t,f=new U,m=new U,_=new U,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){let M=n+v*h*s,y=Math.sin(M),C=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*C,o.push(u.x,u.y,u.z),d.x=v/e,d.y=E/(t.length-1),a.push(d.x,d.y);let b=c[3*E+0]*y,A=c[3*E+1],S=c[3*E+0]*C;l.push(b,A,S)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let y=M+v*t.length,C=y,E=y+t.length,b=y+t.length+1,A=y+1;r.push(C,E,A),r.push(b,A,E)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},mo=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new _t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function v(){let y=new U,C=new U,E=0,b=(e-t)/n;for(let A=0;A<=r;A++){let S=[],x=A/r,T=x*(e-t)+t;for(let L=0;L<=s;L++){let I=L/s,z=I*c+a,k=Math.sin(z),B=Math.cos(z);C.x=T*k,C.y=-x*n+g,C.z=T*B,u.push(C.x,C.y,C.z),y.set(k,b,B).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-x),S.push(m++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){let x=_[S][A],T=_[S+1][A],L=_[S+1][A+1],I=_[S][A+1];(t>0||S!==0)&&(h.push(x,T,I),E+=3),(e>0||S!==r-1)&&(h.push(T,L,I),E+=3)}l.addGroup(p,E,0),p+=E}function M(y){let C=m,E=new _t,b=new U,A=0,S=y===!0?t:e,x=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;let T=m;for(let L=0;L<=s;L++){let z=L/s*c+a,k=Math.cos(z),B=Math.sin(z);b.x=S*B,b.y=g*x,b.z=S*k,u.push(b.x,b.y,b.z),d.push(0,x,0),E.x=k*.5+.5,E.y=B*.5*x+.5,f.push(E.x,E.y),m++}for(let L=0;L<s;L++){let I=C+L,z=T+L;y===!0?h.push(z,z+1,I):h.push(z+1,z,I),A+=3}l.addGroup(p,A,y===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class i extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vc=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new U,y=new U,C=new U;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],y),f(e[E+2],C),c(M,y,C,v)}function c(v,M,y,C){let E=C+1,b=[];for(let A=0;A<=E;A++){b[A]=[];let S=v.clone().lerp(y,A/E),x=M.clone().lerp(y,A/E),T=E-A;for(let L=0;L<=T;L++)L===0&&A===E?b[A][L]=S:b[A][L]=S.clone().lerp(x,L/T)}for(let A=0;A<E;A++)for(let S=0;S<2*(E-A)-1;S++){let x=Math.floor(S/2);S%2===0?(d(b[A][x+1]),d(b[A+1][x]),d(b[A][x])):(d(b[A][x+1]),d(b[A+1][x+1]),d(b[A+1][x]))}}function l(v){let M=new U;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new U;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],C=o[v+4],E=Math.max(M,y,C),b=Math.min(M,y,C);E>.9&&b<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){let v=new U,M=new U,y=new U,C=new U,E=new _t,b=new _t,A=new _t;for(let S=0,x=0;S<r.length;S+=9,x+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),C.copy(v).add(M).add(y).divideScalar(3);let T=g(C);_(E,x+0,v,T),_(b,x+2,M,T),_(A,x+4,y,T)}}function _(v,M,y,C){C<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ai=class extends fo{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fo().fromJSON(s))}return this}},X_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Tu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=J_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return tr(r,o,e,a,c,f,0),o}};Wn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jh(t),Kh(n,t);let o=t.length;e.forEach(Jh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Kh(n,e[c]);let a=X_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};_s=class i extends ie{constructor(t=new Ai([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:cx,M,y=!1,C,E,b,A;p&&(M=p.getSpacedPoints(h),y=!0,d=!1,C=p.computeFrenetFrames(h,!1),E=new U,b=new U,A=new U),d||(g=0,f=0,m=0,_=0);let S=a.extractPoints(l),x=S.shape,T=S.holes;if(!Wn.isClockWise(x)){x=x.reverse();for(let st=0,ht=T.length;st<ht;st++){let D=T[st];Wn.isClockWise(D)&&(T[st]=D.reverse())}}let I=Wn.triangulateShape(x,T),z=x;for(let st=0,ht=T.length;st<ht;st++){let D=T[st];x=x.concat(D)}function k(st,ht,D){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ht,D)}let B=x.length,Z=I.length;function N(st,ht,D){let ut,H,j,tt=st.x-ht.x,nt=st.y-ht.y,V=D.x-st.x,R=D.y-st.y,w=tt*tt+nt*nt,F=tt*R-nt*V;if(Math.abs(F)>Number.EPSILON){let $=Math.sqrt(w),J=Math.sqrt(V*V+R*R),Y=ht.x-nt/$,xt=ht.y+tt/$,rt=D.x-R/J,gt=D.y+V/J,At=((rt-Y)*R-(gt-xt)*V)/(tt*R-nt*V);ut=Y+tt*At-st.x,H=xt+nt*At-st.y;let vt=ut*ut+H*H;if(vt<=2)return new _t(ut,H);j=Math.sqrt(vt/2)}else{let $=!1;tt>Number.EPSILON?V>Number.EPSILON&&($=!0):tt<-Number.EPSILON?V<-Number.EPSILON&&($=!0):Math.sign(nt)===Math.sign(R)&&($=!0),$?(ut=-nt,H=tt,j=Math.sqrt(w)):(ut=tt,H=nt,j=Math.sqrt(w/2))}return new _t(ut/j,H/j)}let ft=[];for(let st=0,ht=z.length,D=ht-1,ut=st+1;st<ht;st++,D++,ut++)D===ht&&(D=0),ut===ht&&(ut=0),ft[st]=N(z[st],z[D],z[ut]);let dt=[],mt,yt=ft.concat();for(let st=0,ht=T.length;st<ht;st++){let D=T[st];mt=[];for(let ut=0,H=D.length,j=H-1,tt=ut+1;ut<H;ut++,j++,tt++)j===H&&(j=0),tt===H&&(tt=0),mt[ut]=N(D[ut],D[j],D[tt]);dt.push(mt),yt=yt.concat(mt)}for(let st=0;st<g;st++){let ht=st/g,D=f*Math.cos(ht*Math.PI/2),ut=m*Math.sin(ht*Math.PI/2)+_;for(let H=0,j=z.length;H<j;H++){let tt=k(z[H],ft[H],ut);G(tt.x,tt.y,-D)}for(let H=0,j=T.length;H<j;H++){let tt=T[H];mt=dt[H];for(let nt=0,V=tt.length;nt<V;nt++){let R=k(tt[nt],mt[nt],ut);G(R.x,R.y,-D)}}}let bt=m+_;for(let st=0;st<B;st++){let ht=d?k(x[st],yt[st],bt):x[st];y?(b.copy(C.normals[0]).multiplyScalar(ht.x),E.copy(C.binormals[0]).multiplyScalar(ht.y),A.copy(M[0]).add(b).add(E),G(A.x,A.y,A.z)):G(ht.x,ht.y,0)}for(let st=1;st<=h;st++)for(let ht=0;ht<B;ht++){let D=d?k(x[ht],yt[ht],bt):x[ht];y?(b.copy(C.normals[st]).multiplyScalar(D.x),E.copy(C.binormals[st]).multiplyScalar(D.y),A.copy(M[st]).add(b).add(E),G(A.x,A.y,A.z)):G(D.x,D.y,u/h*st)}for(let st=g-1;st>=0;st--){let ht=st/g,D=f*Math.cos(ht*Math.PI/2),ut=m*Math.sin(ht*Math.PI/2)+_;for(let H=0,j=z.length;H<j;H++){let tt=k(z[H],ft[H],ut);G(tt.x,tt.y,u+D)}for(let H=0,j=T.length;H<j;H++){let tt=T[H];mt=dt[H];for(let nt=0,V=tt.length;nt<V;nt++){let R=k(tt[nt],mt[nt],ut);y?G(R.x,R.y+M[h-1].y,M[h-1].x+D):G(R.x,R.y,u+D)}}}et(),ct();function et(){let st=s.length/3;if(d){let ht=0,D=B*ht;for(let ut=0;ut<Z;ut++){let H=I[ut];it(H[2]+D,H[1]+D,H[0]+D)}ht=h+g*2,D=B*ht;for(let ut=0;ut<Z;ut++){let H=I[ut];it(H[0]+D,H[1]+D,H[2]+D)}}else{for(let ht=0;ht<Z;ht++){let D=I[ht];it(D[2],D[1],D[0])}for(let ht=0;ht<Z;ht++){let D=I[ht];it(D[0]+B*h,D[1]+B*h,D[2]+B*h)}}n.addGroup(st,s.length/3-st,0)}function ct(){let st=s.length/3,ht=0;Mt(z,ht),ht+=z.length;for(let D=0,ut=T.length;D<ut;D++){let H=T[D];Mt(H,ht),ht+=H.length}n.addGroup(st,s.length/3-st,1)}function Mt(st,ht){let D=st.length;for(;--D>=0;){let ut=D,H=D-1;H<0&&(H=st.length-1);for(let j=0,tt=h+g*2;j<tt;j++){let nt=B*j,V=B*(j+1),R=ht+ut+nt,w=ht+H+nt,F=ht+H+V,$=ht+ut+V;pt(R,w,F,$)}}}function G(st,ht,D){c.push(st),c.push(ht),c.push(D)}function it(st,ht,D){q(st),q(ht),q(D);let ut=s.length/3,H=v.generateTopUV(n,s,ut-3,ut-2,ut-1);Tt(H[0]),Tt(H[1]),Tt(H[2])}function pt(st,ht,D,ut){q(st),q(ht),q(ut),q(ht),q(D),q(ut);let H=s.length/3,j=v.generateSideWallUV(n,s,H-6,H-3,H-2,H-1);Tt(j[0]),Tt(j[1]),Tt(j[3]),Tt(j[1]),Tt(j[2]),Tt(j[3])}function q(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function Tt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kc[s.type]().fromJSON(s)),new i(n,t.options)}},cx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _t(o,1-c),new _t(l,1-u),new _t(d,1-m),new _t(_,1-p)]:[new _t(a,1-c),new _t(h,1-u),new _t(f,1-m),new _t(g,1-p)]}};_o=class i extends Vc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},xo=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new U,m=new _t;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,M=v,y=v+n+1,C=v+n+2,E=v+1;a.push(M,y,E),a.push(y,C,E)}}this.setIndex(a),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},pn=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],M=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+y,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],y=h[p][v],C=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(M,y,E),(p!==n-1||c<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ci=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Nt=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yo=class extends so{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xc=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zl:r=t,a=2*e-n;break;case $l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:o=t,c=2*n-e;break;case $l:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+v*o[l+C]+M*o[c+C]+y*o[u+C];return r}},qc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Yc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&hx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=yc;Pi=class extends wn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=qr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;Zc=class extends wn{};Zc.prototype.ValueTypeName="color";$c=class extends wn{};$c.prototype.ValueTypeName="number";Jc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)be.slerpFlat(r,0,o,l-a,o,l,c);return r}},vo=class extends wn{InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;Ii=class extends wn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;Kc=class extends wn{};Kc.prototype.ValueTypeName="vector";jh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},jc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},ux=new jc,ir=class{constructor(t){this.manager=t!==void 0?t:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ir.DEFAULT_MATERIAL_NAME="__DEFAULT";Qc=class extends ir{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=jh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=qs("img");function c(){h(),jh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},sr=class extends ir{constructor(t){super(t)}load(t,e,n,s){let r=new Ye,o=new Qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Mo=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},So=class extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ua=new ee,Qh=new U,tu=new U,tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},el=class extends tl{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new el}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};yl="\\[\\]\\.:\\/",dx=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",fx="[^"+yl.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",vl),mx=/(WCOD+)?/.source.replace("WCOD",fx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),xx=new RegExp("^"+px+mx+gx+_x+"$"),yx=["material","materials","bones","map"],nl=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(t){let e=xx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=nl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Qx=new Float32Array(1),nu=new ee,ys=class{constructor(t,e,n=0,s=1/0){this.ray=new Ti(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)il(t[s],this,n,e);return n.sort(iu),n}};Zn=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},wo=class extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl)});function Mx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Sx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ex(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=de.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Sl)}function wx(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Tx(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Iu))}function Ax(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case Qe.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Qe.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case Qe.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Sl)}function Cx(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function Px(i){this.enabled!==!1&&i.preventDefault()}function Ix(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cu,Sl,Iu,Po,Pu,vx,Ie,tn,de,Ml,Io,Lu=Ae(()=>{Te();Cu={type:"change"},Sl={type:"start"},Iu={type:"end"},Po=new Ti,Pu=new Mn,vx=Math.cos(70*or.DEG2RAD),Ie=new U,tn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ml=1e-6,Io=class extends wo{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:Qe.ROTATE,TWO:Qe.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new be,this._lastTargetPosition=new U,this._quat=new be().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zn,this._sphericalDelta=new Zn,this._scale=1,this._panOffset=new U,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new U,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sx.bind(this),this._onPointerDown=Mx.bind(this),this._onPointerUp=Ex.bind(this),this._onContextMenu=Px.bind(this),this._onMouseWheel=Tx.bind(this),this._onKeyDown=Ax.bind(this),this._onTouchStart=Rx.bind(this),this._onTouchMove=Cx.bind(this),this._onMouseDown=bx.bind(this),this._onMouseMove=wx.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Lx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=de.NONE}update(t=null){let e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ie.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Po.origin.copy(this.object.position),Po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Po.direction))<vx?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Po.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ml||this._lastTargetPosition.distanceToSquared(this.target)>Ml?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var Lo,Du=Ae(()=>{Te();Lu();Lo=class extends Io{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Tn.PAN,MIDDLE:Tn.DOLLY,RIGHT:Tn.ROTATE},this.touches={ONE:Qe.PAN,TWO:Qe.DOLLY_ROTATE}}}});var Ss,Uu=Ae(()=>{Te();Ss=class i extends Ot{constructor(){let t=i.SkyShader,e=new Ke({name:t.name,uniforms:gl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:De,depthWrite:!1});super(new He(1,1,1),e),this.isSky=!0}};Ss.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`}});function mn(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function di(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function xe(i,t){let e=mn(t),n=new Float32Array(i*i);for(let s=0;s<i*i;s++)n[s]=e();return(s,r)=>{s=(s%i+i)%i,r=(r%i+i)%i;let o=Math.floor(s),a=Math.floor(r),c=(o+1)%i,l=(a+1)%i,h=s-o,u=r-a,d=h*h*(3-2*h),f=u*u*(3-2*u),m=n[a*i+o],_=n[a*i+c],g=n[l*i+o],p=n[l*i+c];return(m*(1-d)+_*d)*(1-f)+(g*(1-d)+p*d)*f}}function en(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let c=0;c<n;c++)s+=r*i(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}function Fu(i,t){return i.wrapS=i.wrapT=En,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Sn,i.magFilter=un,t&&(i.colorSpace=me),i.needsUpdate=!0,i}function ar(i,t,e,n=!0){let s=new Ks(i,t,e,an);return Fu(s,n)}function Do(i,t=!0){return Fu(new je(i),t)}function Uo(i,t,e,n=2){let s=new Uint8Array(t*e*4);for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=i[r*t+(o-1+t)%t],c=i[r*t+(o+1)%t],l=i[(r-1+e)%e*t+o],h=i[(r+1)%e*t+o],u=(a-c)*n,d=(h-l)*n,f=1,m=Math.hypot(u,d,f);u/=m,d/=m,f/=m;let _=(r*t+o)*4;s[_]=(u*.5+.5)*255,s[_+1]=(d*.5+.5)*255,s[_+2]=(f*.5+.5)*255,s[_+3]=255}return ar(s,t,e,!1)}function An(i,t,e,n,s=!1){let r=new Uint8Array(i*t*4),o=new Float32Array(i*t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=e(c,a),h=(a*i+c)*4;r[h]=Math.max(0,Math.min(255,l[0])),r[h+1]=Math.max(0,Math.min(255,l[1])),r[h+2]=Math.max(0,Math.min(255,l[2])),r[h+3]=s?Math.max(0,Math.min(255,(l[4]??1)*255)):255,o[a*i+c]=l[3]||0}return{map:ar(r,i,t,!0),normalMap:n?Uo(o,i,t,n):null}}function Ne(i,t){return Nu[i]||(Nu[i]=t())}function Ou(){return Ne("cer",()=>{let i=$e,t=mn(5),e=xe(16,7),n=xe(64,9),s=8,r=3,o=[];for(let a=0;a<s*r*4;a++)o.push(t());return An(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(l),d=Math.floor(h),f=l-u,m=h-d,_=u%2===1,g=Math.sin(Math.PI*f),p=_?.55+.45*g:.35-.3*g;p+=(1-m)*.35;let v=o[(d*s+u)%o.length],M=.8+.2*v;v>.95&&(M*=.78),v<.04&&(M*=1.12);let y=_?.86+.18*g:.74+.12*(1-g),C=m>.9?.6+(1-m)*4:1,E=en(e,a/i*16,c/i*16,3),b=Math.max(0,en(n,a/i*64*.25,c/i*64*.25,3)-.58)*2.2,A=255*M*y*C*(.92+.16*E),S=A*(.92-.05*v),x=A*(.88-.08*v);return A=A*(1-b)+b*70,S=S*(1-b)+b*68,x=x*(1-b)+b*58,[A,S,x,p]},3.5)})}function Bu(){return Ne("fib",()=>{let i=$e,t=xe(32,11),e=xe(16,13),n=xe(128,15);return An(i,i,(s,r)=>{let o=s/i,a=r/i,c=Math.sin(o*12*Math.PI*2),l=.5+.5*c,h=a*2.2/1.22%1;h<.025&&(l+=.6);let d=o*2%1<.02?.9:1,f=en(t,o*8,a*8,4),m=en(e,o*40,a*3,3),_=n(o*128,a*128),g=228*(.86+.3*(f-.5))*(.94+.12*m)*(.97+.06*_)*(.92+.08*c)*d;return f<.34&&(g*=.88),h<.025&&(g*=.8),[g,g*.995,g*.97,l]},1.3)})}function zu(){return Ne("met",()=>{let i=$e>>1,t=xe(16,17),e=xe(64,19);return An(i,i,(n,s)=>{let r=n/i*4,o=s/i,a=r-Math.floor(r),c=a<.12?a/.12:a<.3?1:a<.42?1-(a-.3)/.12:0;c+=.15*Math.sin(a*Math.PI*8)*(a>.45?1:0);let l=en(t,n/i*4,s/i*6,3),h=e(n/i*64,s/i*8),u=225*(.86+.2*l)*(.95+.08*h)*(c>.9?1.04:.97),d=Math.max(0,l-.72)*3;return[u*(1-d*.25)+d*40,u*(1-d*.35)+d*14,u*(1-d*.5),c]},2)})}function ku(){return Ne("slab",()=>{let i=$e,t=xe(16,21),e=xe(128,23),n=xe(8,25);return An(i,i,(s,r)=>{let o=s/i,a=r/i,c=en(t,o*16,a*16,4),l=e(o*128,a*128),h=en(n,o*8,a*8,2),u=200*(.8+.3*(c-.5))*(.93+.12*l);return h>.66&&(u*=.62),c<.32&&(u*=.8),[u,u*.98,u*.95,l*.3]},1)})}function Hu(){return Ne("fac",()=>{let i=Es?512:1024,t=Es?128:256,e=i/1024,[n,s]=di(i,t),[r,o]=di(i,t);s.scale(e,e),o.scale(e,e);let a=mn(77);s.fillStyle="#f4f2ee",s.fillRect(0,0,1024,256),o.fillStyle="#fff",o.fillRect(0,0,1024,256);for(let M=0;M<9e3;M++){let y=225+a()*30;s.fillStyle=`rgba(${y},${y},${y-3},0.35)`,s.fillRect(a()*1024,a()*256,1+a()*3,1+a()*3)}let c=s.createLinearGradient(0,200,0,256);c.addColorStop(0,"rgba(120,105,85,0)"),c.addColorStop(1,"rgba(110,95,75,0.35)"),s.fillStyle=c,s.fillRect(0,200,1024,56),s.fillStyle="rgba(150,145,138,0.55)",s.fillRect(0,232,1024,24);let l=M=>{M(s,!1),M(o,!0)},h=(M,y,C,E,b,A,S)=>{M.fillStyle=S?"#000":y,M.fillRect(C,E,b,A)},u=(M,y,C,E)=>l((b,A)=>{if(h(b,"#e9e7e2",M-7,y-7,C+14,E+14,A),h(b,"#2a3036",M,y,C,E,A),!A){let S=b.createLinearGradient(M,y,M+C,y+E);S.addColorStop(0,"rgba(170,195,215,0.55)"),S.addColorStop(.5,"rgba(60,75,90,0.2)"),S.addColorStop(1,"rgba(150,175,195,0.45)"),b.fillStyle=S,b.fillRect(M+3,y+3,C-6,E-6),b.fillStyle="#c9ccce",b.fillRect(M+C/2-2,y,4,E),b.fillRect(M,y+E*.42,C,3),b.strokeStyle="rgba(25,25,25,0.85)",b.lineWidth=2.2;for(let x=M+8;x<M+C;x+=11)b.beginPath(),b.moveTo(x,y),b.lineTo(x,y+E),b.stroke();b.beginPath(),b.moveTo(M,y+E/2),b.lineTo(M+C,y+E/2),b.stroke(),b.fillStyle="#d8d6d0",b.fillRect(M-12,y+E+6,C+24,7),b.fillStyle="rgba(80,70,60,0.18)",b.fillRect(M-6,y+E+13,C+12,26)}}),d=(M,y,C,E,b)=>l((A,S)=>{if(h(A,"#ecebe6",M-7,y-7,C+14,E+14,S),!S){A.fillStyle=b,A.fillRect(M,y,C,E),A.fillStyle="rgba(0,0,0,0.25)";for(let x=y+4;x<y+E;x+=6)A.fillRect(M+2,x,C-4,2);A.fillStyle="rgba(0,0,0,0.4)",A.fillRect(M+C/2-1.5,y,3,E),A.fillStyle="#d8d6d0",A.fillRect(M-12,y+E+6,C+24,7)}}),f=(M,y,C,E)=>l((b,A)=>{if(h(b,"#e9e7e2",M-5,y-5,C+10,E+10,A),h(b,"#3a4148",M,y,C,E,A),!A){b.fillStyle="rgba(200,210,215,0.7)";for(let S=y+3;S<y+E-2;S+=8)b.fillRect(M+3,S,C-6,5)}}),m=(M,y,C,E)=>l((b,A)=>{if(h(b,"#e4e2dc",M-8,54,y+16,202,A),!A){if(b.fillStyle=C,b.fillRect(M,62,y,194),E===0)b.fillStyle="rgba(0,0,0,0.22)",b.fillRect(M+8,74,y-16,194*.38),b.fillRect(M+8,62+194*.5,y-16,194*.42);else{b.fillStyle="rgba(255,255,255,0.18)";for(let T=68;T<256;T+=10)b.fillRect(M+3,T,y-6,4)}b.fillStyle="#caa64a",b.fillRect(M+y-14,62+194*.52,5,10)}});u(64,70,128,104),m(300,84,["#6b4a2e","#7c5a3a","#4a5560","#8a8d90"][Math.floor(a()*4)],0),f(430,70,52,40),d(576,70,120,104,"#7a5a3c"),u(832,78,112,96);for(let M=0;M<40;M++){let y=a()*1024;s.fillStyle=`rgba(90,80,70,${.04+a()*.06})`,s.fillRect(y,190+a()*20,2+a()*4,30+a()*40)}let _=s.getImageData(0,0,i,t).data,g=o.getImageData(0,0,i,t).data,p=new Uint8Array(i*t*4);for(let M=0;M<i*t;M++)p[M*4]=_[M*4],p[M*4+1]=_[M*4+1],p[M*4+2]=_[M*4+2],p[M*4+3]=g[M*4];let v=new Uint8Array(i*t*4);for(let M=0;M<t;M++)v.set(p.subarray((t-1-M)*i*4,(t-M)*i*4),M*i*4);return ar(v,i,t,!0)})}function No(){return Ne("wall",()=>{let i=$e,t=$e>>2,e=xe(64,31),n=xe(16,33),s=new Uint8Array(i*t*4),r=new Float32Array(i*t);for(let o=0;o<t;o++)for(let a=0;a<i;a++){let c=a/i,l=o/t,h=e(c*64*3,l*64*.5*2),u=en(n,c*16,l*4,3),d=235*(.9+.12*h)*(.88+.2*u),f=1;l<.12&&(d*=.82+l),l>.93&&(d*=.92);let m=(o*i+a)*4;s[m]=d,s[m+1]=d,s[m+2]=d*.98,s[m+3]=255*f,r[o*i+a]=h*.6}return{map:ar(s,i,t,!0),normalMap:Uo(r,i,t,1.5)}})}function Vu(){return Ne("brick",()=>{let i=$e,t=mn(41),e=xe(64,43),n=i/6,s=i/16,r=[];for(let o=0;o<200;o++)r.push(t());return An(i,i,(o,a)=>{let c=Math.floor(a/s),l=c%2*n/2,h=Math.floor((o+l)/n),u=(o+l)%n/n,d=a%s/s,f=u<.05||d<.12,m=r[(c*7+h*13)%200],_=e(o/i*64,a/i*64);if(f)return[175+_*20,165+_*20,150+_*20,0,0];let g=.75+.3*m;return[196*g*(.9+.15*_),104*g*(.9+.15*_),66*g*(.9+.15*_),1,0]},2,!0)})}function Fo(){return Ne("asph",()=>{let i=$e,t=xe(256,51),e=xe(16,53),n=xe(8,55);return An(i,i,(s,r)=>{let o=s/i,a=r/i,c=t(o*256,a*256),l=en(e,o*16,a*16,4),h=en(n,o*8,a*8,2),u=72*(.84+.32*c)*(.92+.16*l);h>.7&&(u*=.92),h<.22&&(u*=1.05);let d=Math.abs(o*8/3.5%1-.5);return u*=1-.06*Math.exp(-Math.pow((d-.22)/.06,2)),c>.93&&(u*=1.6),[u,u,u*1.02,c*.5]},1.6)})}function Gu(){return Ne("pav",()=>{let i=$e,t=mn(61),e=xe(128,63),n=xe(16,65),s=12,r=20,o=[];for(let a=0;a<s*r*2;a++)o.push([t(),t(),t()]);return An(i,i,(a,c)=>{let l=a/i*s,h=c/i*r,u=Math.floor(h),d=l+u%2*.5+o[u*s%o.length][2]*.3,f=Math.floor(d),m=d-f,_=h-u,g=Math.min(m,1-m)/.5,p=Math.min(_,1-_)/.5,v=Math.min(g*2.2,p*1.4,1),M=Math.sqrt(Math.max(0,v)),y=o[(u*s+f%s)%o.length],C=e(a/i*128,c/i*128),E=en(n,a/i*16,c/i*16,3);if(v<.18){let S=.55+.3*E;return[92*S+20,84*S+18,70*S+12,0]}let b=(.68+.36*y[0])*(.85+.25*C)*(.85+.25*E),A=y[1];return[150*b+(A>.8?18:0),142*b+(A>.8?8:0),132*b,M*.9+C*.1]},3.2)})}function Wu(){return Ne("dirt",()=>{let i=$e,t=xe(128,71),e=xe(16,73),n=mn(75),s=[];for(let o=0;o<500;o++)s.push([n()*i,n()*i,1+n()*2.5,n()]);return An(i,i,(o,a)=>{let c=o/i,l=a/i,h=t(c*128,l*128),u=en(e,c*16,l*16,4),d=Math.abs(c*6/3%1-.5),f=Math.exp(-Math.pow((d-.25)/.07,2)),m=(.8+.3*u)*(.9+.2*h);return m*=1-.1*f,[178*m,128*m,88*m,h*.5+u*.8-f*.4]},2.5)})}function Oo(){return Ne("side",()=>{let i=$e,t=xe(128,81),e=xe(8,83),n=mn(85),s=[];for(let r=0;r<64;r++)s.push(n());return An(i,i,(r,o)=>{let a=r/i*2,c=o/i*2,l=a%1,h=c%1,u=l<.012||h<.012||l>.988||h>.988,d=(Math.floor(a)+Math.floor(c)*2)%64,f=t(r/i*128,o/i*128),m=en(e,r/i*8,o/i*8,3),_=192*(.93+.07*s[d])*(.92+.1*f)*(.88+.2*m);return u&&(_*=.78),[_,_*.975,_*.94,u?0:.4+f*.2]},1.6)})}function Xu(){return Ne("gd",()=>{let i=$e,t=mn(91),[e,n]=di(i,i);n.fillStyle="rgb(118,118,118)",n.fillRect(0,0,i,i);let s=i/512;for(let u=0;u<26e3*s*s;u++){let d=60+t()*140;n.strokeStyle=`rgba(${d},${d},${d},0.55)`,n.lineWidth=.8+t()*1.2;let f=t()*i,m=t()*i,_=t()*Math.PI*2,g=(2+t()*5)*s;n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(_)*g,m+Math.sin(_)*g),n.stroke()}let r=n.getImageData(0,0,i,i).data,[o,a]=di(i,i);a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,i,i);for(let u=0;u<9e3*s*s;u++){let d=70+t()*130;a.fillStyle=`rgba(${d},${d},${d},${.4+t()*.5})`,a.beginPath(),a.ellipse(t()*i,t()*i,(.6+t()*2.2)*s,(.5+t()*1.8)*s,t()*3,0,7),a.fill()}let c=a.getImageData(0,0,i,i).data,l=new Uint8Array(i*i*4),h=new Float32Array(i*i);for(let u=0;u<i*i;u++)l[u*4]=r[u*4],l[u*4+1]=c[u*4],l[u*4+2]=128,l[u*4+3]=255,h[u]=(r[u*4]*.5+c[u*4]*.5)/255;return{map:ar(l,i,i,!1),normalMap:Uo(h,i,i,2.5)}})}function El(i=0){return Ne("leaf"+i,()=>{let t=Es?128:256,[e,n]=di(t,t),s=mn(101+i);n.clearRect(0,0,t,t);let r=i===1?520:700,o=t/256;n.fillStyle=i===1?"rgb(130,150,70)":"rgb(170,195,140)",n.beginPath(),n.arc(t/2,t/2,9*o,0,7),n.fill();for(let c=0;c<r;c++){let l=s()*Math.PI*2,h=Math.pow(s(),.6)*t*.46,u=t/2+Math.cos(l)*h,d=t/2+Math.sin(l)*h,f=s(),m=i===1?[120+f*60,140+f*60,60+f*30]:[150+f*80,175+f*70,120+f*60];n.fillStyle=`rgb(${m[0]|0},${m[1]|0},${m[2]|0})`,n.save(),n.translate(u,d),n.rotate(s()*Math.PI*2),n.beginPath(),n.ellipse(0,0,(i===1?7:6)*o*(.7+s()*.6),(i===1?3.2:3)*o*(.7+s()*.5),0,0,7),n.fill(),n.restore()}let a=Do(e,!0);return a.wrapS=a.wrapT=In,a})}function bl(){return Ne("frond",()=>{let i=Es?64:128,t=Es?256:512,[e,n]=di(i,t);n.clearRect(0,0,i,t);let s=mn(111);n.strokeStyle="#7a8a4a",n.lineWidth=3*i/128,n.beginPath(),n.moveTo(i/2,0),n.lineTo(i/2,t),n.stroke();for(let o=6;o<t;o+=5*t/512){let a=i*.48*Math.sin(Math.min(1,o/t*1.15)*Math.PI*.95+.15);for(let c of[-1,1]){let l=s();n.strokeStyle=`rgb(${70+l*40|0},${110+l*45|0},${40+l*25|0})`,n.lineWidth=(2.4+s())*i/128,n.beginPath(),n.moveTo(i/2,o),n.quadraticCurveTo(i/2+c*a*.5,o+6*t/512,i/2+c*a,o+16*t/512+s()*6),n.stroke()}}let r=Do(e,!0);return r.wrapS=r.wrapT=In,r})}function qu(){return Ne("ta",()=>{let i=$e,t=xe(64,121),e=mn(123),n=[];for(let s=0;s<32;s++)n.push(e());return An(i,i,(s,r)=>{let o=s/i*2,a=r/i*2,c=Math.floor(a),l=o+c%2*.5,h=Math.floor(l),u=l-h,d=a-c,f=u<.015||d<.015,m=n[(c*5+h*3)%32],_=t(s/i*64,r/i*64),g=f?.72:(.9+.07*m)*(.95+.06*_);return[205*g,192*g,170*g,f?0:.6+.1*_]},2)})}function Bo(){return Ne("conc",()=>{let i=$e,t=xe(128,131),e=xe(8,133);return An(i,i,(n,s)=>{let r=n/i,o=s/i,a=t(r*128,o*128),c=en(e,r*8,o*8,3),l=r<.004||o<.006,h=200*(.94+.06*a)*(.93+.1*c);return l&&(h*=.88),[h,h*.985,h*.96,a*.3+(l?-.4:0)]},1)})}function Yu(){return Ne("bal",()=>{let i=$e,t=mn(141),[e,n]=di(i,i);n.fillStyle="#5b5650",n.fillRect(0,0,i,i);let s=i/512;for(let a=0;a<14e3*s*s;a++){let c=70+t()*110;n.fillStyle=`rgb(${c+8|0},${c|0},${c-8|0})`,n.beginPath(),n.ellipse(t()*i,t()*i,(1.5+t()*3)*s,(1.2+t()*2.5)*s,t()*3,0,7),n.fill()}let r=n.getImageData(0,0,i,i).data,o=new Float32Array(i*i);for(let a=0;a<i*i;a++)o[a]=r[a*4]/255;return{map:Do(e,!0),normalMap:Uo(o,i,i,3)}})}function Zu(){return Ne("gate",()=>{let[e,n]=di(256,256);n.clearRect(0,0,256,256),n.fillStyle="#fff",n.fillRect(0,128,256,10),n.fillRect(0,246,256,10),n.fillRect(0,186,256,5);for(let r=0;r<256;r+=12)n.fillRect(r,128,4,128);n.fillRect(0,128,6,128),n.fillRect(256/2-3,128,6,128),n.fillStyle="#f0f0f0",n.fillRect(0,0,256,128),n.fillStyle="rgba(0,0,0,0.18)";for(let r=4;r<128;r+=8)n.fillRect(0,r,256,2);n.clearRect(0,6,256,18),n.fillStyle="#fff";for(let r=0;r<256;r+=10)n.fillRect(r,6,3,18);n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(256/2-1,0,2,128);let s=Do(e,!0);return s.flipY=!0,s})}var Es,$e,Nu,Di=Ae(()=>{Te();Es=(()=>{try{let i=new URLSearchParams(location.search).get("q")||localStorage.getItem("aimores3d_q");return i==="low"||i==="medium"||!i&&(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700)}catch{return!1}})(),$e=Es?256:512;Nu={}});function ko(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}function $u(i,t,e){let n=i.GW,s=i.GH,r=new Float32Array(n*s*3),o=new Float32Array(n*s*2);for(let E=0;E<s;E++)for(let b=0;b<n;b++){let A=E*n+b,S=i.XMIN+b*i.G,x=i.ZMIN+E*i.G;r[A*3]=S,r[A*3+1]=i.raw(E,b),r[A*3+2]=x,o[A*2]=(S-i.XMIN)/(i.XMAX-i.XMIN),o[A*2+1]=1-(x-i.ZMIN)/(i.ZMAX-i.ZMIN)}let a=new Uint32Array((n-1)*(s-1)*6),c=0;for(let E=0;E<s-1;E++)for(let b=0;b<n-1;b++){let A=E*n+b,S=A+1,x=A+n,T=x+1;a[c++]=A,a[c++]=x,a[c++]=S,a[c++]=S,a[c++]=x,a[c++]=T}let l=new ie;l.setAttribute("position",new Jt(r,3)),l.setAttribute("uv",new Jt(o,2)),l.setIndex(new Jt(a,1)),l.computeVertexNormals();let h=new Float32Array(n*s*2);for(let E=0;E<n*s;E++)h[E*2]=r[E*3]/3.5,h[E*2+1]=r[E*3+2]/3.5;l.setAttribute("uv1",new Jt(h,2));let u=Xu();u.normalMap.channel=1;let d=new Nt({map:t,roughness:.97,metalness:0,normalMap:e==="low"?null:u.normalMap,normalScale:new _t(.9,.9)});d.onBeforeCompile=E=>{E.uniforms.gDetail={value:u.map},E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos=(modelMatrix*vec4(transformed,1.0)).xyz;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;uniform sampler2D gDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
      vec3 base=diffuseColor.rgb;
      float veg=smoothstep(0.004,0.035,base.g-max(base.r,base.b)*0.93);
      vec4 d1=texture2D(gDetail,vWPos.xz/3.5); vec4 d2=texture2D(gDetail,vWPos.xz/13.0+0.37); vec4 d3=texture2D(gDetail,vWPos.xz/71.0+0.11);
      float gr=(d1.r*0.65+d2.r*0.35)*2.0; float dr=(d1.g*0.65+d2.g*0.35)*2.0;
      float det=mix(dr,gr,veg);
      float dist=length(vWPos-cameraPosition);
      float fade=1.0-smoothstep(120.0,1100.0,dist);
      diffuseColor.rgb=base*mix(1.0,det,0.25+0.6*fade);
      float mac=(d3.r*0.5+d3.g*0.5)*2.0; diffuseColor.rgb*=mix(1.0,mac,0.22);
      // grass: patchy yellow/green hue shifts; dirt: reddish laterite variation
      float hp=d2.g*2.0-1.0;
      diffuseColor.rgb*=mix(vec3(1.0+0.10*hp,1.0+0.04*hp,1.0-0.12*hp), vec3(1.0+0.06*hp,1.0-0.02*hp,1.0-0.06*hp), 1.0-veg);`)};let f=new Ot(l,d);f.receiveShadow=!0,f.name="terrain";let m=[],_=E=>{for(let b=0;b<E.length-1;b++){let[A,S]=E[b],[x,T]=E[b+1],L=i.at(A,S),I=i.at(x,T);m.push(A,L,S,x,I,T,A,L-60,S,x,I,T,x,I-60,T,A,L-60,S)}},g=[];for(let E=0;E<n;E++)g.push([i.XMIN+E*i.G,i.ZMIN]);_(g);let p=[];for(let E=n-1;E>=0;E--)p.push([i.XMIN+E*i.G,i.ZMIN+(s-1)*i.G]);_(p);let v=[];for(let E=s-1;E>=0;E--)v.push([i.XMIN,i.ZMIN+E*i.G]);_(v);let M=[];for(let E=0;E<s;E++)M.push([i.XMIN+(n-1)*i.G,i.ZMIN+E*i.G]);_(M);let y=new ie;y.setAttribute("position",new Xt(m,3)),y.computeVertexNormals();let C=new Ot(y,new Nt({color:5662010,roughness:1,side:Zt}));return f.add(C),f}function Ju(i,t,e,n){let s=new Uint16Array(t),r=i.BG,o=i.BR,a=2*o/(r-1),c=(S,x)=>(S=Math.max(0,Math.min(r-1,S)),x=Math.max(0,Math.min(r-1,x)),i.HB+s[S*r+x]/10),l=(S,x)=>{let T=(S+o)/a,L=(x+o)/a,I=Math.floor(T),z=Math.floor(L),k=T-I,B=L-z;return(c(z,I)*(1-k)+c(z,I+1)*k)*(1-B)+(c(z+1,I)*(1-k)+c(z+1,I+1)*k)*B},h=(S,x,T)=>{let L=Math.max(e.XMIN,Math.min(e.XMAX,S)),I=Math.max(e.ZMIN,Math.min(e.ZMAX,x)),z=Math.hypot(S-L,x-I);if(z<.5)return e.at(L,I)-6;let k=Math.min(1,z/700),B=k*k*(3-2*k);return(e.at(L,I)-.6)*(1-B)+T*B},u=new se;u.name="backdrop";let d=3600,f=181,m=[],_=[];for(let S=0;S<f;S++)for(let x=0;x<f;x++){let T=-d+x*2*d/(f-1),L=-d+S*2*d/(f-1);m.push(T,h(T,L,l(T,L)),L),_.push((T+d)/(2*d),1-(L+d)/(2*d))}let g=[];for(let S=0;S<f-1;S++)for(let x=0;x<f-1;x++){let T=S*f+x;g.push(T,T+f,T+1,T+1,T+f,T+f+1)}let p=new ie;p.setAttribute("position",new Xt(m,3)),p.setAttribute("uv",new Xt(_,2)),p.setIndex(g),p.computeVertexNormals();let v=new Ot(p,new Nt({map:n,roughness:1}));v.receiveShadow=!0,u.add(v);let M=[],y=[],C=new qt;for(let S=0;S<r;S++)for(let x=0;x<r;x++){let T=-o+x*a,L=-o+S*a,I=c(S,x);Math.abs(T)<d-50&&Math.abs(L)<d-50&&(I-=60),M.push(T,I,L)}let E=[];for(let S=0;S<r-1;S++)for(let x=0;x<r-1;x++){let T=S*r+x;E.push(T,T+r,T+1,T+1,T+r,T+r+1)}let b=new ie;b.setAttribute("position",new Xt(M,3)),b.setIndex(E),b.computeVertexNormals();let A=b.attributes.normal;for(let S=0;S<M.length/3;S++){let T=1-A.getY(S),L=Math.min(1,Math.max(0,(T-.3)*3)),I=Math.random()*.04;C.setRGB(.2+I,.27+I,.13),C.lerp(new qt(.36,.33,.28),L*.8),y.push(C.r,C.g,C.b)}return b.setAttribute("color",new Xt(y,3)),u.add(new Ot(b,new Nt({vertexColors:!0,roughness:1}))),u}var zo,Ku=Ae(()=>{Te();Di();zo=class{constructor(t,e){Object.assign(this,t),this.a=new Uint16Array(e)}raw(t,e){return t=Math.max(0,Math.min(this.GH-1,t)),e=Math.max(0,Math.min(this.GW-1,e)),this.HB+this.a[t*this.GW+e]/100}at(t,e){let n=(t-this.XMIN)/this.G,s=(e-this.ZMIN)/this.G,r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=this.raw(o,r),h=this.raw(o,r+1),u=this.raw(o+1,r),d=this.raw(o+1,r+1);return a+c<=1?l+(h-l)*a+(u-l)*c:d+(u-d)*(1-a)+(h-d)*(1-c)}}});function Ft(i,t,e){let n=new qt;return n.setRGB(i/255,t/255,e/255,me),[n.r,n.g,n.b]}function Gt(i){let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function Ho(i){let t=null;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=s[0]-n[0],o=s[1]-n[1],a=Math.hypot(r,o);if(a<.01)continue;r/=a,o/=a;let c=-o,l=r,h=1e9,u=-1e9,d=1e9,f=-1e9;for(let _ of i){let g=_[0]*r+_[1]*o,p=_[0]*c+_[1]*l;h=Math.min(h,g),u=Math.max(u,g),d=Math.min(d,p),f=Math.max(f,p)}let m=(u-h)*(f-d);if(!t||m<t.area){let _=(h+u)/2,g=(d+f)/2;t={area:m,cx:_*r+g*c,cz:_*o+g*l,ux:r,uz:o,a:(u-h)/2,b:(f-d)/2}}}if(t.a<t.b){let e=t.a;t.a=t.b,t.b=e;let n=t.ux;t.ux=-t.uz,t.uz=n}return t}function Tl(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}var te,fi=Ae(()=>{Te();te=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(t,e,n,s,r,o,a,c,l){let h,u,d;if(c)[h,u,d]=c;else{let f=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],m=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];h=f[1]*m[2]-f[2]*m[1],u=f[2]*m[0]-f[0]*m[2],d=f[0]*m[1]-f[1]*m[0];let _=Math.hypot(h,u,d)||1;h/=_,u/=_,d/=_}if(this.p.push(...t,...e,...n),this.n.push(h,u,d,h,u,d,h,u,d),this.u.push(...s,...r,...o),l)this.c.push(...l[0],...l[1],...l[2]);else{let f=a||[1,1,1];this.c.push(...f,...f,...f)}}quad(t,e,n,s,r,o,a,c,l,h,u){this.tri(t,e,n,r,o,a,l,h,u?[u[0],u[1],u[2]]:null),this.tri(t,n,s,r,a,c,l,h,u?[u[0],u[2],u[3]]:null)}geometry(){let t=new ie;return t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("normal",new Xt(this.n,3)),t.setAttribute("uv",new Xt(this.u,2)),t.setAttribute("color",new Xt(this.c,3)),t.computeBoundingSphere(),t}get count(){return this.p.length/9}}});function Vo(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Go(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Dx(i,t,e,n,s,r,o=1){let a=i.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(r()-.5)*s;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let m=((l+d)*t+(h+f))*4;c[m]=n[0]+u,c[m+1]=n[1]+u,c[m+2]=n[2]+u,c[m+3]=255}}i.putImageData(a,0,0)}function Wo(i,t=!0,e=!0){let n=new je(i);return t&&(n.wrapS=n.wrapT=En),n.anisotropy=8,e&&(n.colorSpace=me),n.generateMipmaps=!0,n.minFilter=Sn,n}function ju(){let[i,t]=Go(256,256),e=Vo(9);Dx(t,256,256,[196,192,184],16,e),t.strokeStyle="rgba(110,105,98,0.55)",t.lineWidth=2;for(let n=0;n<=256;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,256),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();for(let n=0;n<60;n++)t.fillStyle=`rgba(90,85,80,${e()*.08})`,t.fillRect(e()*256,e()*256,10+e()*30,10+e()*30);return Wo(i)}function Qu(){let[i,t]=Go(512,512),e=Vo(21);t.fillStyle="#bdb6aa",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=16)for(let s=0;s<512;s+=16){let r=e()*30,o=(Math.floor(s/128)+Math.floor(n/128))%2==0&&s%128<64&&n%128<64;t.fillStyle=o?`rgb(${150+r},${78+r/2},${66+r/2})`:`rgb(${190+r},${184+r},${172+r})`,t.fillRect(s+1,n+1,14,14)}return Wo(i)}function td(){let[i,t]=Go(128,128),e=Vo(41);t.fillStyle="#fff",t.fillRect(0,0,128,128);for(let n=0;n<800;n++){let s=220+e()*35;t.fillStyle=`rgba(${s},${s},${s},0.6)`,t.fillRect(e()*128,e()*128,2,2)}return t.fillStyle="rgba(140,140,140,0.3)",t.fillRect(0,116,128,12),Wo(i)}function ed(){let[i,t]=Go(256,256),e=Vo(51);t.fillStyle="#fff",t.fillRect(0,0,256,256);let n=8,s=10;for(let r=0;r<n;r++){for(let o=0;o<s;o++){let a=.82+e()*.18,c=Math.floor(255*a),l=o*256/s,h=r*256/n,u=t.createLinearGradient(l,0,l+256/s,0);u.addColorStop(0,`rgb(${c*.78|0},${c*.78|0},${c*.78|0})`),u.addColorStop(.5,`rgb(${c},${c},${c})`),u.addColorStop(1,`rgb(${c*.72|0},${c*.72|0},${c*.72|0})`),t.fillStyle=u,t.fillRect(l,h,256/s,256/n)}t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(0,(r+1)*256/n-4,256,4)}for(let r=0;r<40;r++)t.fillStyle=`rgba(40,30,20,${e()*.12})`,t.fillRect(e()*256,e()*256,20+e()*40,10+e()*20);return Wo(i)}var Al=Ae(()=>{Te()});function Nx(i){let t=Rl.reduce((e,n)=>e+n,0)*i;for(let e=0;e<Rl.length;e++)if(t-=Rl[e],t<=0)return nd[e];return nd[0]}function Xo(i){let t=new Nt(i);return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#if defined( USE_COLOR ) && defined( USE_MAP )
    diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
  #elif defined( USE_COLOR )
    diffuseColor.rgb *= vColor.rgb;
  #endif
  diffuseColor.a = 1.0;`)},t.customProgramCacheKey=()=>"paintmask",t}function Fx(i){let[t,e,n]=i.rc,s=.3*t+.59*e+.11*n;if(i.rm==="ceramic"){let o=Ui(165/Math.max(60,s),.75,1.35),a=[t*o,e*o*.97,n*o*.92],c=(a[0]+a[1]+a[2])/3;return a=a.map(h=>c+(h-c)*.9),Gt(i.p[0][0]*3.3+i.p[0][1])<.25&&(a=a.map(h=>h*.82)),Ft(Ui(a[0]*1.18,0,255),Ui(a[1]*1.12,0,255),Ui(a[2]*1.1,0,255))}if(i.rm==="fiber"){let o=Ui(s*1.05,170,225);return Ft(o,o*.99,o*.97)}if(i.rm==="metal"){let o=Ui(s*1,185,250),a=Gt(i.p[0][1]*1.7);return a<.06?Ft(120,150,175):a<.09?Ft(170,70,60):Ft(o,o,o*1.01)}let r=Ui(s*1.02,140,225);return Ft(r,r*.985,r*.96)}function id(i,t,e,n,s){let r=new te,o=new te,a=new te,c=new te,l=new te,h=new te,u=new te,d=[],f=[],m=[],_=Math.tan(24*Math.PI/180),g=Math.tan(12*Math.PI/180),p=Math.tan(8*Math.PI/180),v=s==="low";for(let I=0;I<i.buildings.length;I++){let z=i.buildings[I];if(n&&n(z))continue;let k=z.p.slice();Tl(k)<0&&k.reverse();let B=1e9,Z=-1e9;for(let[nt,V]of k){let R=t.at(nt,V);B=Math.min(B,R),Z=Math.max(Z,R)}let N=Z+z.h,ft=B-.5,dt=Math.abs(Tl(k)),mt=z.osm&&/Esta|train/i.test(z.osm),yt=mt?[250,250,246]:Nx(z.hv),bt=Ft(...yt),et=dt>=450||z.r==="shed"||z.rm==="metal"&&dt>220,ct=!et&&dt>=30||mt?r:o,Mt=Math.floor(Gt(I*1.37)*4),G=bt.map(nt=>nt*.62),it=Math.min(N,Z+1.3);for(let nt=0;nt<k.length;nt++){let[V,R]=k[nt],[w,F]=k[(nt+1)%k.length],$=Math.hypot(w-V,F-R);if($<.05)continue;let J=$/3.2,Y=(ft-Z)/3,xt=(it-Z)/3,rt=z.h/3;ct.quad([V,ft,R],[V,it,R],[w,it,F],[w,ft,F],[Mt,Y],[Mt,xt],[Mt+J,xt],[Mt+J,Y],G,null,[G,bt,bt,G]),ct.quad([V,it,R],[V,N,R],[w,N,F],[w,it,F],[Mt,xt],[Mt,rt],[Mt+J,rt],[Mt+J,xt],bt),Mt+=J}let pt=Fx(z),q=Ho(k),Tt=q.ux,st=q.uz,ht=-st,D=Tt,ut=(nt,V,R)=>[q.cx+Tt*nt+ht*V,R,q.cz+st*nt+D*V],H=(nt,V,R,w)=>{u.quad([nt[0],nt[1]-R,nt[2]],[V[0],V[1]-R,V[2]],V,nt,[0,0],[1,0],[1,1],[0,1],w)},j=Gt(I*7.7)<.6?Ft(236,234,228):Ft(120,86,60),tt=z.rm;if(tt==="ceramic"&&z.r==="flat"&&dt>300&&(tt="fiber"),tt==="ceramic"){let V=q.a+.55,R=q.b+.55,w=1.2;if(z.r==="gable"||dt>500||q.a>2.6*q.b){let F=N+R*_*.85,$=ut(-V,-R,N),J=ut(V,-R,N),Y=ut(V,R,N),xt=ut(-V,R,N),rt=ut(-V,0,F),gt=ut(V,0,F),At=Math.hypot(R,F-N);a.quad($,rt,gt,J,[0,0],[0,At/w],[2*V/w,At/w],[2*V/w,0],pt),a.quad(Y,gt,rt,xt,[0,0],[0,At/w],[2*V/w,At/w],[2*V/w,0],pt),o.tri(ut(-q.a,-q.b,N),ut(-q.a,q.b,N),ut(-q.a,0,F-.55*_*.85),[0,0],[1,0],[.5,1],bt),o.tri(ut(q.a,q.b,N),ut(q.a,-q.b,N),ut(q.a,0,F-.55*_*.85),[0,0],[1,0],[.5,1],bt),H($,J,.2,j),H(Y,xt,.2,j),Ni(a,rt,gt,pt)}else{let F=N+R*_,$=Math.max(0,V-R),J=ut(-V,-R,N),Y=ut(V,-R,N),xt=ut(V,R,N),rt=ut(-V,R,N),gt=ut(-$,0,F),At=ut($,0,F),vt=Math.hypot(R,F-N);a.quad(J,gt,At,Y,[0,0],[(V-$)/w,vt/w],[(V+$)/w,vt/w],[2*V/w,0],pt),a.quad(xt,At,gt,rt,[0,0],[(V-$)/w,vt/w],[(V+$)/w,vt/w],[2*V/w,0],pt),a.tri(rt,gt,J,[0,0],[R/w,vt/w],[2*R/w,0],pt),a.tri(Y,At,xt,[0,0],[R/w,vt/w],[2*R/w,0],pt),H(J,Y,.2,j),H(Y,xt,.2,j),H(xt,rt,.2,j),H(rt,J,.2,j),$>.2&&Ni(a,gt,At,pt),Ni(a,gt,J,pt,.08),Ni(a,gt,rt,pt,.08),Ni(a,At,Y,pt,.08),Ni(a,At,xt,pt,.08)}h.quad(ut(-V,-R,N-.03),ut(V,-R,N-.03),ut(V,R,N-.03),ut(-V,R,N-.03),[0,0],[0,0],[0,0],[0,0],Ft(150,140,128))}else if(tt==="fiber"||tt==="metal"){let nt=tt==="metal"?.3:.4,V=q.a+nt,R=q.b+nt,w=tt==="metal"?l:c,F=tt==="metal"?1:2.2,$=q.a*q.b*4<dt*1.3;if(tt==="metal"&&dt>120||$&&dt>70&&Gt(I*2.9)<.55||et){let Y=tt==="metal"?p:g,xt=N+R*Y,rt=ut(-V,-R,N),gt=ut(V,-R,N),At=ut(V,R,N),vt=ut(-V,R,N),Lt=ut(-V,0,xt),Bt=ut(V,0,xt),zt=Math.hypot(R,xt-N);w.quad(rt,Lt,Bt,gt,[0,0],[0,zt/F],[2*V/F,zt/F],[2*V/F,0],pt),w.quad(At,Bt,Lt,vt,[0,0],[0,zt/F],[2*V/F,zt/F],[2*V/F,0],pt),o.tri(ut(-q.a,-q.b,N),ut(-q.a,q.b,N),ut(-q.a,0,xt-nt*Y),[0,0],[1,0],[.5,1],bt),o.tri(ut(q.a,q.b,N),ut(q.a,-q.b,N),ut(q.a,0,xt-nt*Y),[0,0],[1,0],[.5,1],bt),Ni(w,Lt,Bt,pt.map(K=>K*.92),.18),H(rt,gt,.08,pt.map(K=>K*.8)),H(At,vt,.08,pt.map(K=>K*.8))}else{let Y=g*.9,xt=N+2*R*Y,rt=ut(-V,-R,N+.05),gt=ut(V,-R,N+.05),At=ut(V,R,xt),vt=ut(-V,R,xt),Lt=Math.hypot(2*R,xt-N);w.quad(rt,vt,At,gt,[0,0],[0,Lt/F],[2*V/F,Lt/F],[2*V/F,0],pt),o.tri(ut(-q.a,-q.b,N),ut(-q.a,q.b,N),ut(-q.a,q.b,xt-nt*Y),[0,0],[1,0],[1,1],bt),o.tri(ut(q.a,q.b,N),ut(q.a,-q.b,N),ut(q.a,q.b,xt-nt*Y),[0,0],[1,0],[1,1],bt),o.quad(ut(-q.a,q.b,N),ut(q.a,q.b,N),ut(q.a,q.b,xt-nt*Y),ut(-q.a,q.b,xt-nt*Y),[0,0],[1,0],[1,1],[0,1],bt),H(rt,gt,.06,pt.map(Bt=>Bt*.8))}h.quad(ut(-V,-R,N),ut(V,-R,N),ut(V,R,N),ut(-V,R,N),[0,0],[0,0],[0,0],[0,0],Ft(130,126,120)),tt==="fiber"&&!et&&Gt(I*5.3)<.35&&d.push([q.cx+Tt*q.a*.5,N+.15+R*.1,q.cz+st*q.a*.5,Gt(I)])}else{let nt=Wn.triangulateShape(k.map(J=>new _t(J[0],J[1])),[]);for(let[J,Y,xt]of nt){let rt=k[J],gt=k[Y],At=k[xt];h.tri([rt[0],N,rt[1]],[At[0],N,At[1]],[gt[0],N,gt[1]],[rt[0]/6,rt[1]/6],[At[0]/6,At[1]/6],[gt[0]/6,gt[1]/6],pt,[0,1,0])}let V=.55+.4*Gt(I*3.1),R=N+V,w=.15,F=k.length;for(let J=0;J<F;J++){let[Y,xt]=k[J],[rt,gt]=k[(J+1)%F],At=Math.hypot(rt-Y,gt-xt);if(At<.05)continue;let vt=(gt-xt)/At,Lt=-(rt-Y)/At;o.quad([Y,N,xt],[Y,R,xt],[rt,R,gt],[rt,N,gt],[0,0],[0,.2],[1,.2],[1,0],bt);let Bt=Y-vt*w,zt=xt-Lt*w,K=rt-vt*w,Et=gt-Lt*w;o.quad([K,N,Et],[K,R,Et],[Bt,R,zt],[Bt,N,zt],[0,0],[0,.2],[1,.2],[1,0],bt.map(wt=>wt*.85)),u.quad([Y,R+.04,xt],[Bt,R+.04,zt],[K,R+.04,Et],[rt,R+.04,gt],[0,0],[0,0],[0,0],[0,0],Ft(205,202,196))}let $=Gt(I*4.1);if(dt>22&&$<.82){let J=[q.cx+Tt*q.a*(.25+.3*Gt(I*1.1))+ht*q.b*.3*(Gt(I*1.9)-.5),N,q.cz+st*q.a*(.25+.3*Gt(I*1.1))+D*q.b*.3*(Gt(I*1.9)-.5),Gt(I*6.6)];if(($<.62?d:f).push(J),z.h>5&&dt>70&&Gt(I*8.8)<.5){let Y=[J[0]-Tt*1.6,J[2]-st*1.6],xt=1.3,rt=[[-xt,-xt],[xt,-xt],[xt,xt],[-xt,xt]].map(([gt,At])=>[Y[0]+Tt*gt+ht*At,Y[1]+st*gt+D*At]);for(let gt=0;gt<4;gt++){let At=rt[gt],vt=rt[(gt+1)%4];o.quad([At[0],N,At[1]],[At[0],N+2.3,At[1]],[vt[0],N+2.3,vt[1]],[vt[0],N,vt[1]],[0,0],[0,.76],[.8,.76],[.8,0],bt)}h.quad([rt[0][0],N+2.35,rt[0][1]],[rt[3][0],N+2.35,rt[3][1]],[rt[2][0],N+2.35,rt[2][1]],[rt[1][0],N+2.35,rt[1][1]],[0,0],[0,1],[1,1],[1,0],pt,[0,1,0]),J[1]=N+2.35,J[0]=Y[0],J[2]=Y[1]}}Gt(I*9.4)<.12&&dt>30&&m.push([q.cx-Tt*q.a*.6,R,q.cz-st*q.a*.6,Gt(I)])}}let M=new se;M.name="buildings";let y=Hu(),C=(I,z,k=!0)=>{let B=new Ot(I.geometry(),z);return B.castShadow=k,B.receiveShadow=!0,M.add(B),B};C(r,Xo({vertexColors:!0,map:y,roughness:.88,side:Zt}));let E=No();C(o,new Nt({vertexColors:!0,map:E.map,normalMap:E.normalMap,normalScale:new _t(.4,.4),roughness:.92,side:Zt}));let b=Ou(),A=Bu(),S=zu(),x=ku();C(a,new Nt({vertexColors:!0,map:b.map,normalMap:b.normalMap,normalScale:new _t(1,1),roughness:.78,side:Zt})),C(c,new Nt({vertexColors:!0,map:A.map,normalMap:A.normalMap,normalScale:new _t(1.1,1.1),roughness:.86,side:Zt})),C(l,new Nt({vertexColors:!0,map:S.map,normalMap:S.normalMap,normalScale:new _t(1.2,1.2),roughness:.38,metalness:.55,side:Zt})),C(h,new Nt({vertexColors:!0,map:x.map,normalMap:x.normalMap,roughness:.95,side:Zt})),C(u,new Nt({vertexColors:!0,roughness:.8,side:Zt}));let T=(()=>{let I=[new _t(0,0),new _t(.62,0),new _t(.72,.75),new _t(.76,.8),new _t(.74,.86),new _t(.5,1),new _t(.15,1.06),new _t(0,1.07)];return new po(I,v?8:16)})(),L=(I,z,k,B=1)=>{if(!I.length)return;let Z=new Ue(z,k,I.length),N=new ee,ft=new be,dt=new U,mt=new U,yt=new U(0,1,0);I.forEach((bt,et)=>{let ct=(.85+.35*bt[3])*B;dt.set(ct,ct,ct),ft.setFromAxisAngle(yt,bt[3]*6.28),mt.set(bt[0],bt[1],bt[2]),N.compose(mt,ft,dt),Z.setMatrixAt(et,N)}),Z.castShadow=!0,Z.receiveShadow=!0,M.add(Z)};if(L(d,T,new Nt({color:2057136,roughness:.45})),L(f,new ve(.7,.62,1,v?8:14).translate(0,.5,0),new Nt({color:10131600,roughness:.9})),m.length){let I=new pn(.45,10,6,0,Math.PI*2,0,.9).rotateX(-1.1).translate(0,.7,0);L(m,I,new Nt({color:14211284,roughness:.6,side:Zt}))}return e.add(M),M}function Ni(i,t,e,n,s=.14){let r=e[0]-t[0],o=e[2]-t[2],a=Math.hypot(r,o)||1,c=-o/a*s,l=r/a*s,h=n.map(u=>u*.85);i.quad([t[0]+c,t[1],t[2]+l],[e[0]+c,e[1],e[2]+l],[e[0],e[1]+.09,e[2]],[t[0],t[1]+.09,t[2]],[0,0],[0,0],[0,.1],[0,.1],h),i.quad([t[0],t[1]+.09,t[2]],[e[0],e[1]+.09,e[2]],[e[0]-c,e[1],e[2]-l],[t[0]-c,t[1],t[2]-l],[0,.1],[0,.1],[0,0],[0,0],h)}var nd,Rl,Ui,Cl=Ae(()=>{Te();fi();Di();nd=[[240,236,226],[246,240,220],[238,224,180],[244,214,170],[232,196,160],[206,224,236],[200,226,204],[236,190,170],[226,170,130],[214,214,210],[190,186,178],[230,210,120],[250,250,248],[180,206,226],[224,200,216],[200,120,90],[160,190,150],[245,230,160],[210,160,150]],Rl=[14,10,8,7,6,5,5,5,3,6,4,3,10,3,1.5,2,2,3,1.5];Ui=(i,t,e)=>Math.max(t,Math.min(e,i))});function sd(i,t,e,n,s){let r=i.meshes,o={asphalt:Fo(),paver:Gu(),dirt:Wu(),sidewalk:Oo()},a={asphalt:8,paver:2.4,dirt:6,sidewalk:2},c={asphalt:.09,paver:.09,dirt:.05,sidewalk:.24},l={asphalt:-3,paver:-3,dirt:-2,sidewalk:-4},h={asphalt:.9,paver:.82,dirt:1,sidewalk:.9},u={asphalt:.5,paver:1.4,dirt:.8,sidewalk:.6},d=new se;for(let C of["asphalt","paver","dirt","sidewalk"]){let[E,b]=r["m_"+C];if(!b)continue;let A=new Float32Array(e,E,b),S=b/2,x=r["a_"+C]?new Float32Array(e,r["a_"+C][0],r["a_"+C][1]):null,T=new Float32Array(S*3),L=new Float32Array(S*2);for(let B=0;B<S;B++){let Z=A[B*2],N=A[B*2+1];if(T[B*3]=Z,T[B*3+1]=t.at(Z,N)+c[C],T[B*3+2]=N,x){let ft=x[Math.floor(B/3)],dt=Math.cos(ft),mt=Math.sin(ft);L[B*2]=(-Z*mt+N*dt)/a[C],L[B*2+1]=(Z*dt+N*mt)/a[C]}else L[B*2]=Z/a[C],L[B*2+1]=N/a[C]}let I=new ie;I.setAttribute("position",new Jt(T,3)),I.setAttribute("uv",new Jt(L,2)),I.computeVertexNormals();let z=new Nt({map:o[C].map,normalMap:o[C].normalMap,normalScale:new _t(u[C],u[C]),roughness:h[C],polygonOffset:!0,polygonOffsetFactor:l[C],polygonOffsetUnits:l[C]*2}),k=new Ot(I,z);k.receiveShadow=!0,k.name="road_"+C,d.add(k)}let f=new te;for(let[C,E,b,A]of i.curbs){let S=Math.hypot(b-C,A-E);if(S<.05)continue;let x=-(A-E)/S*.07,T=(b-C)/S*.07,L=t.at(C,E),I=t.at(b,A),z=Gt(C*.37+E*.11),k=z<.55?Ft(226,225,219):z<.85?Ft(196,194,188):Ft(214,200,120),B=k.map(Z=>Z*.82);f.quad([C-x,L+.04,E-T],[b-x,I+.04,A-T],[b-x,I+.26,A-T],[C-x,L+.26,E-T],[0,0],[S,0],[S,.2],[0,.2],B),f.quad([b+x,I+.04,A+T],[C+x,L+.04,E+T],[C+x,L+.26,E+T],[b+x,I+.26,A+T],[0,0],[S,0],[S,.2],[0,.2],B),f.quad([C-x,L+.26,E-T],[b-x,I+.26,A-T],[b+x,I+.26,A+T],[C+x,L+.26,E+T],[0,0],[S,0],[S,.15],[0,.15],k,[0,1,0])}let m=Bo(),_=new Ot(f.geometry(),new Nt({vertexColors:!0,map:m.map,roughness:.85,side:Zt}));_.receiveShadow=!0,_.castShadow=!1,d.add(_);let g=new te,p=Ft(232,232,226),v=Ft(236,186,40);for(let C of i.roads){if(C.s!=="asphalt"||C.b||C.id===1314627854||C.id===1314627855||!["trunk","tertiary","trunk_link","residential","primary","secondary"].includes(C.hw)||C.w<7)continue;let E=C.hw==="trunk",b=C.p,A=0;for(let S=0;S<b.length-1;S++){let[x,T]=b[S],[L,I]=b[S+1],z=Math.hypot(L-x,I-T);if(z<.1)continue;let k=(L-x)/z,B=(I-T)/z,Z=-B,N=k;for(let ft=0;ft<z;ft+=1.5){let dt=Math.min(z,ft+1.5),yt=(A+ft)%8<4,bt=x+k*ft,et=T+B*ft,ct=x+k*dt,Mt=T+B*dt,G=t.at(bt,et)+.13,it=t.at(ct,Mt)+.13,pt=(q,Tt,st)=>{g.quad([bt+Z*(q-Tt),G,et+N*(q-Tt)],[bt+Z*(q+Tt),G,et+N*(q+Tt)],[ct+Z*(q+Tt),it,Mt+N*(q+Tt)],[ct+Z*(q-Tt),it,Mt+N*(q-Tt)],[0,0],[1,0],[1,1],[0,1],st,[0,1,0])};if(E){pt(-.12,.06,v),pt(.12,.06,v);let q=C.w/2-.4;pt(q,.07,p),pt(-q,.07,p)}else!C.o&&yt&&pt(0,.06,C.hw==="residential"?p:v)}A+=z}}let M=new Nt({vertexColors:!0,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,side:Zt}),y=new Ot(g.geometry(),M);return y.receiveShadow=!0,d.add(y),n.add(d),d}function rd(i,t,e,n){let[s,r]=i.meshes.m_water;if(!r)return null;let o=new Float32Array(e,s,r),a=r/2,c=new Float32Array(a*3),l=i.meta.WL;for(let v=0;v<a;v++)c[v*3]=o[v*2],c[v*3+1]=l,c[v*3+2]=o[v*2+1];let h=new ie;h.setAttribute("position",new Jt(c,3)),h.computeVertexNormals();let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),f=d.createImageData(256,256);for(let v=0;v<256;v++)for(let M=0;M<256;M++){let y=Math.sin(v/256*Math.PI*8+Math.sin(M/256*Math.PI*4)*2)*.5+Math.sin(M/256*Math.PI*10+v/40)*.5,C=Math.cos(M/256*Math.PI*6+Math.sin(v/256*Math.PI*6))*.5,E=(v*256+M)*4;f.data[E]=128+y*40,f.data[E+1]=128+C*40,f.data[E+2]=255,f.data[E+3]=255}d.putImageData(f,0,0);let m=new je(u);m.wrapS=m.wrapT=En,m.repeat.set(1,1);let _=new Float32Array(a*2);for(let v=0;v<a;v++)_[v*2]=o[v*2]/40,_[v*2+1]=o[v*2+1]/40;h.setAttribute("uv",new Jt(_,2));let g=new Nt({color:3103322,roughness:.12,metalness:.1,normalMap:m,normalScale:new _t(.35,.35),transparent:!0,opacity:.92}),p=new Ot(h,g);return p.receiveShadow=!0,p.userData.tick=v=>{m.offset.set(v*.01,v*.004)},n.add(p),p}function od(i,t,e){let n=new te,s=new te,r=new te,o=new te,a=i.wallc.map(p=>Ft(...p)),c=i.gatec.map(p=>Ft(...p)),l=.09;for(let[p,v,M,y,C,E]of i.walls){let b=Math.hypot(M-p,y-v);if(b<.05)continue;let A=-(y-v)/b*l,S=(M-p)/b*l,x=t.at(p,v),T=t.at(M,y),L=x-.4,I=T-.4,z=x+C,k=T+C,B=a[E],Z=Gt(Math.round(p*3)*.71+Math.round(v*3)*1.37)<.2,N=Z?s:n,ft=Z?[1,1,1]:B,dt=[p+A,L,v+S],mt=[M+A,I,y+S],yt=[M+A,k,y+S],bt=[p+A,z,v+S],et=[p-A,L,v-S],ct=[M-A,I,y-S],Mt=[M-A,k,y-S],G=[p-A,z,v-S],it=b/3,pt=-.4/(Z?2:1),q=C/(Z?2:1),Tt=ft.map(ut=>ut*.7);N.quad(dt,mt,yt,bt,[0,pt],[it,pt],[it,q],[0,q],ft,null,[Tt,Tt,ft,ft]),N.quad(ct,et,G,Mt,[it,pt],[0,pt],[0,q],[it,q],ft,null,[Tt,Tt,ft,ft]);let st=Z?Ft(190,188,182):B.map(ut=>ut*.9),ht=A*1.6,D=S*1.6;n.quad([p+ht,z+.05,v+D],[M+ht,k+.05,y+D],[M-ht,k+.05,y-D],[p-ht,z+.05,v-D],[0,1],[it,1],[it,1],[0,1],st,[0,1,0]),n.quad([p+ht,z-.02,v+D],[M+ht,k-.02,y+D],[M+ht,k+.05,y+D],[p+ht,z+.05,v+D],[0,1],[it,1],[it,1],[0,1],st),n.quad([M-ht,k-.02,y-D],[p-ht,z-.02,v-D],[p-ht,z+.05,v-D],[M-ht,k+.05,y-D],[0,1],[it,1],[it,1],[0,1],st),N.quad(et,dt,bt,G,[0,0],[.05,0],[.05,1],[0,1],ft),N.quad(mt,ct,Mt,yt,[0,0],[.05,0],[.05,1],[0,1],ft)}for(let[p,v,M,y,C,E]of i.gates){let b=Math.hypot(M-p,y-v),A=t.at(p,v),S=t.at(M,y),x=Math.min(A,S),T=c[E],L=-(y-v)/b*.03,I=(M-p)/b*.03,k=(Gt(p*1.3+y*.7)<.5?0:1)*.5;r.quad([p+L,x,v+I],[M+L,x,y+I],[M+L,x+C,y+I],[p+L,x+C,v+I],[0,k],[b/1.5,k],[b/1.5,k+.5],[0,k+.5],T),r.quad([M-L,x,y-I],[p-L,x,v-I],[p-L,x+C,v-I],[M-L,x+C,y-I],[0,k],[b/1.5,k],[b/1.5,k+.5],[0,k+.5],T);for(let[B,Z,N]of[[p,v,A],[M,y,S]]){let dt=N+C+.2,mt=a[(E+1)%a.length],yt=(bt,et,ct,Mt,G)=>o.quad(bt,et,ct,Mt,[0,0],[.1,0],[.1,1],[0,1],mt,G);yt([B-.17,N-.3,Z-.17],[B+.17,N-.3,Z-.17],[B+.17,dt,Z-.17],[B-.17,dt,Z-.17]),yt([B+.17,N-.3,Z+.17],[B-.17,N-.3,Z+.17],[B-.17,dt,Z+.17],[B+.17,dt,Z+.17]),yt([B-.17,N-.3,Z+.17],[B-.17,N-.3,Z-.17],[B-.17,dt,Z-.17],[B-.17,dt,Z+.17]),yt([B+.17,N-.3,Z-.17],[B+.17,N-.3,Z+.17],[B+.17,dt,Z+.17],[B+.17,dt,Z-.17]),yt([B-.17-.03,dt,Z-.17-.03],[B+.17+.03,dt,Z-.17-.03],[B+.17+.03,dt,Z+.17+.03],[B-.17-.03,dt,Z+.17+.03],[0,1,0])}}let h=new se,u=No(),d=Vu(),f=new Ot(n.geometry(),Xo({vertexColors:!0,map:u.map,normalMap:u.normalMap,normalScale:new _t(.6,.6),roughness:.95,side:Zt}));f.castShadow=!0,f.receiveShadow=!0,h.add(f);let m=new Ot(o.geometry(),Xo({vertexColors:!0,map:u.map,roughness:.95,side:Zt}));m.castShadow=!0,m.receiveShadow=!0,h.add(m);let _=new Ot(s.geometry(),new Nt({vertexColors:!0,map:d.map,normalMap:d.normalMap,roughness:.95,side:Zt}));_.castShadow=!0,_.receiveShadow=!0,h.add(_);let g=new Ot(r.geometry(),new Nt({vertexColors:!0,map:Zu(),roughness:.5,metalness:.4,side:Zt,alphaTest:.4}));return g.castShadow=!0,h.add(g),h.name="walls",e.add(h),h}var ad=Ae(()=>{Te();fi();Al();Di();Cl()});function ud(i){let t=0;for(let c of i){let l=c.index?c.toNonIndexed():c;c._ni=l,t+=l.attributes.position.count}let e=new Float32Array(t*3),n=new Float32Array(t*3),r=i.every(c=>c._ni.attributes.uv)?new Float32Array(t*2):null,o=0;for(let c of i){let l=c._ni;e.set(l.attributes.position.array,o*3),l.attributes.normal&&n.set(l.attributes.normal.array,o*3),r&&r.set(l.attributes.uv.array,o*2),o+=l.attributes.position.count}let a=new ie;return a.setAttribute("position",new Jt(e,3)),a.setAttribute("normal",new Jt(n,3)),r&&a.setAttribute("uv",new Jt(r,2)),a}function qo(i){let t=i;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function cd(i,t,e){let n=qo(i*7919+13),s=[],r=[],o=[],a=[],c=new U,l=new U,h=new U,u=new U,d=new be;for(let m=0;m<t;m++){let _=n()*Math.PI*2,g=Math.acos(2*n()-1)*(e.flat||1),p=.55+.45*Math.pow(n(),.5);c.set(Math.sin(g)*Math.cos(_)*p,Math.cos(g)*p*e.ry,Math.sin(g)*Math.sin(_)*p),c.y+=e.dy||0,l.set(c.x,c.y/(e.ry*e.ry),c.z).normalize();let v=e.card*(.75+.5*n());h.set(n()-.5,n()-.5,n()-.5).normalize(),d.setFromAxisAngle(h,n()*Math.PI);let M=new U(1,0,0).applyQuaternion(d),y=new U(0,1,0).applyQuaternion(d),C=[[-1,-1],[1,-1],[1,1],[-1,1]],E=C.map(([S,x])=>new U().copy(c).addScaledVector(M,S*v/2).addScaledVector(y,x*v/2)),b=.62+.38*Math.min(1,Math.max(0,(c.y/e.ry+.6)/1.4)),A=.9+.2*n();for(let S of[0,1,2,0,2,3]){let x=E[S];s.push(x.x,x.y,x.z);let T=new U(x.x,(x.y-(e.dy||0))/(e.ry*e.ry),x.z).normalize().lerp(l,.3).normalize();r.push(T.x,T.y,T.z),o.push((C[S][0]+1)/2,(C[S][1]+1)/2),a.push(b*A,b*A,b*A)}}let f=new ie;return f.setAttribute("position",new Xt(s,3)),f.setAttribute("normal",new Xt(r,3)),f.setAttribute("uv",new Xt(o,2)),f.setAttribute("color",new Xt(a,3)),f}function ld(i,t,e){let n=new _o(.62,t),s=n.attributes.position,r=qo(i);for(let u=0;u<s.count;u++){let d=s.getX(u),f=s.getY(u),m=s.getZ(u),_=.85+.25*Gt(i*3+Math.round(d*50)*1.3+Math.round(f*50)*2.1+Math.round(m*50)*3.7);s.setXYZ(u,d*_,f*_*e,m*_)}let o=n.index?n.toNonIndexed():n;o.computeVertexNormals();let a=o.attributes.normal,c=o.attributes.position,l=[];for(let u=0;u<c.count;u++){let d=new U(c.getX(u),c.getY(u),c.getZ(u)).normalize(),f=new U(a.getX(u),a.getY(u),a.getZ(u)).lerp(d,.8).normalize();a.setXYZ(u,f.x,f.y,f.z);let m=.3+.22*Math.min(1,Math.max(0,(c.getY(u)/e+.8)/1.6));l.push(m,m,m)}o.setAttribute("color",new Xt(l,3));let h=new Float32Array(c.count*2).fill(.5);return o.setAttribute("uv",new Jt(h,2)),o}function hd(i){let t=i.reduce((c,l)=>c+l.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=new Float32Array(t*3),o=0;for(let c of i)e.set(c.attributes.position.array,o*3),n.set(c.attributes.normal.array,o*3),s.set(c.attributes.uv.array,o*2),r.set(c.attributes.color.array,o*3),o+=c.attributes.position.count;let a=new ie;return a.setAttribute("position",new Jt(e,3)),a.setAttribute("normal",new Jt(n,3)),a.setAttribute("uv",new Jt(s,2)),a.setAttribute("color",new Jt(r,3)),a}function Ox(i,t){let e=qo(i+5),n=[],s=t?5:7,r=new ve(.11,.19,1,s,1,!0);r.translate(0,.5,0),n.push(r);let o=t?2:4;for(let a=0;a<o;a++){let c=new ve(.035,.08,.75,s-2,1,!0);c.translate(0,.375,0),c.rotateZ(.5+.4*e()),c.rotateY(a/o*Math.PI*2+e()),c.translate(0,.85+.1*e(),0),n.push(c)}return ud(n)}function Bx(i){let t=[],e=i?9:14,n=qo(77);for(let a=0;a<e;a++){let c=a/e*Math.PI*2+n()*.3,l=a%3===0?.5:a%3===1?0:-.35,h=2.6+n()*.8,u=new ms(1,h,1,6),d=u.attributes.position;for(let f=0;f<d.count;f++){let m=d.getY(f)+h/2,_=m/h,g=d.getX(f)*(.35+.65*Math.sin(Math.min(1,_*1.2)*Math.PI*.9+.1)),p=m*Math.cos(l),v=m*Math.sin(l)-.55*_*_*h*.45;d.setXYZ(f,g,v,p)}u.rotateY(c),t.push(u)}let s=ud(t);s.computeVertexNormals();let r=s.attributes.normal;for(let a=0;a<r.count;a++){let c=new U(r.getX(a),Math.abs(r.getY(a))+.6,r.getZ(a)).normalize();r.setXYZ(a,c.x,c.y,c.z)}let o=new Float32Array(s.attributes.position.count*3).fill(1);return s.setAttribute("color",new Jt(o,3)),s}function dd(i,t,e,n,s){let r=[],o=[],a=i.extras.fountains||[];for(let mt of i.trees)a.some(yt=>Math.hypot(yt[0]-mt[0],yt[1]-mt[1])<7.5)||(mt[3]>=1e3?o:r).push(mt);let c=n==="low"||n==="medium",l={low:3,medium:2}[n]||1,h=new se;h.name="trees";let u=El(0),d=El(1),f=mt=>{let yt=new Nt({map:mt,alphaTest:.42,vertexColors:!0,roughness:.85,side:Zt});return yt.onBeforeCompile=bt=>{bt.fragmentShader=bt.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
`)},yt},m=f(u),_=f(d),g=mt=>new $s({depthPacking:pl,map:mt,alphaTest:.42}),p=new Nt({vertexColors:!0,roughness:.95,map:null}),v=n==="low"?12:c?18:44,M=[{ry:.78,card:1.2,dy:0},{ry:.62,card:1.3,dy:-.05,flat:.9},{ry:1.05,card:1.1,dy:.05}],y=M.map((mt,yt)=>hd([ld(yt+3,c?0:1,mt.ry*.9),cd(yt+1,v,mt)])),C=hd([ld(9,0,.7),cd(9,c?10:18,{ry:.7,card:1.35,dy:0})]),E=new ee,b=new be,A=new U,S=new U,x=new qt,T=new U(0,1,0),L=[[.34,.5,.2],[.4,.56,.22],[.3,.44,.18],[.44,.58,.26],[.36,.54,.27],[.48,.58,.28],[.28,.42,.2]],I=[[.98,.82,.18],[.88,.45,.66],[.92,.4,.18]],z=[],k=y.map(()=>[]);r.forEach((mt,yt)=>{Gt(mt[3]+yt*.37)<.06&&mt[2]<3.5?z.push(mt):k[Math.floor(Gt(mt[3]*3.1+yt)*3)%3].push(mt)});let B=[];k.forEach((mt,yt)=>{if(!mt.length)return;let bt=new Ue(y[yt],yt===1?_:m,mt.length);mt.forEach((et,ct)=>{let[Mt,G,it]=et,pt=t.at(Mt,G),q=Math.max(1.6,it*.95)*(.9+.2*Gt(ct*3.3+yt)),Tt=q*M[yt].ry*.9+1.6+Gt(ct+yt*999)*1;b.setFromAxisAngle(T,Gt(ct*7+yt)*6.28),A.set(q,q,q),S.set(Mt,pt+Tt,G),E.compose(S,b,A),bt.setMatrixAt(ct,E);let st=Gt(et[3]*1.7+ct),ht=L[Math.floor(st*L.length)%L.length];Gt(ct*13.3+yt)<.012&&(ht=I[Math.floor(Gt(ct)*3)%3]),x.setRGB(ht[0],ht[1],ht[2]),bt.setColorAt(ct,x),B.push([Mt,pt,G,Tt-q*M[yt].ry*.35,q])}),bt.castShadow=!0,bt.receiveShadow=!0,bt.customDepthMaterial=g(yt===1?d:u),h.add(bt)});let Z=o.filter((mt,yt)=>yt%l===0);if(Z.length){let mt=new Ue(C,_,Z.length);Z.forEach((yt,bt)=>{let[et,ct,Mt]=yt,G=t.at(et,ct),it=Mt*1.15*(c&&l>1?1.15:1),pt=it*.7+1.5+Gt(bt)*2.5;b.setFromAxisAngle(T,Gt(bt*3)*6.28),A.set(it,it,it),S.set(et,G+pt,ct),E.compose(S,b,A),mt.setMatrixAt(bt,E);let q=L[Math.floor(Gt(bt*1.3)*L.length)%L.length],Tt=.78+.15*Gt(bt*2.7);x.setRGB(q[0]*Tt,q[1]*Tt,q[2]*Tt),mt.setColorAt(bt,x),!c&&Gt(bt*5.1)<.2&&B.push([et,G,ct,pt-it*.3,it])}),mt.castShadow=!c,mt.receiveShadow=!0,mt.customDepthMaterial=g(d),h.add(mt)}let N=Ox(3,c),ft=new Ue(N,new Nt({color:6179384,roughness:1}),B.length);B.forEach(([mt,yt,bt,et,ct],Mt)=>{let G=.7+ct*.12;A.set(G,et,G),b.setFromAxisAngle(T,Gt(Mt*1.9)*6.28),S.set(mt,yt-.2,bt),E.compose(S,b,A),ft.setMatrixAt(Mt,E)}),ft.castShadow=!0,h.add(ft);let dt=z.concat(s||[]);if(dt.length){let mt=Bx(c),yt=new Nt({map:bl(),alphaTest:.4,vertexColors:!0,side:Zt,roughness:.85}),bt=new Ue(mt,yt,dt.length);bt.customDepthMaterial=g(bl());let et=new ve(.16,.24,1,c?6:10,1,!0);et.translate(0,.5,0);let ct=new Ue(et,new Nt({color:10261898,roughness:.95}),dt.length);dt.forEach((Mt,G)=>{let[it,pt]=Mt,q=t.at(it,pt),Tt=7+Gt(G*9.1)*7;b.setFromAxisAngle(T,Gt(G)*6.28),A.set(1.25,1.25,1.25),S.set(it,q+Tt,pt),E.compose(S,b,A),bt.setMatrixAt(G,E),x.setRGB(.75+.2*Gt(G*2.2),.85,.7),bt.setColorAt(G,x),A.set(1,Tt,1),S.set(it,q,pt),E.compose(S,b,A),ct.setMatrixAt(G,E)}),bt.castShadow=ct.castShadow=!0,h.add(bt),h.add(ct)}return e.add(h),h}var fd=Ae(()=>{Te();fi();Di()});function md(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ie,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=pd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function pd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Jt(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var gd=Ae(()=>{Te()});function Yo(i,t,e,n,s,r,o,a=1){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,_=-f/m,g=d/m,p=r(h,c),v=r(u,l);i.quad([h[0]+_*n,p,h[2]+g*n],[u[0]+_*n,v,u[2]+g*n],[u[0]+_*s,v,u[2]+g*s],[h[0]+_*s,p,h[2]+g*s],[c/a,0],[l/a,0],[l/a,1],[c/a,1],o)}}function _d(i,t,e,n,s,r,o,a){for(let c=0;c<t.L;c+=e){let l=Math.min(t.L,c+e),h=t.at(c),u=t.at(l),d=u[0]-h[0],f=u[2]-h[2],m=Math.hypot(d,f)||1,_=-f/m,g=d/m;i.quad([h[0]+_*n,h[1]+r,h[2]+g*n],[u[0]+_*n,u[1]+r,u[2]+g*n],[u[0]+_*s,u[1]+o,u[2]+g*s],[h[0]+_*s,h[1]+o,h[2]+g*s],[c/3.4,0],[l/3.4,0],[l/3.4,.3],[c/3.4,.3],a)}}function bs(i,t,e,n,s,r,o,a=0,c=null){c=c??t.L;for(let l=a;l<c;l+=e){let h=Math.min(c,l+e),u=t.at(l),d=t.at(h),f=d[0]-u[0],m=d[2]-u[2],_=Math.hypot(f,m)||1,g=-m/_,p=f/_,v=[u[0]+g*n,s(u,l),u[2]+p*n],M=[d[0]+g*n,s(d,h),d[2]+p*n],y=[d[0]+g*n,r(d,h),d[2]+p*n],C=[u[0]+g*n,r(u,l),u[2]+p*n];i.quad(v,M,y,C,[l,0],[h,0],[h,1],[l,1],o)}}function yd(i,t,e){let n=new se;n.name="rail";let s=new te,r=new te,o=[],a=y=>y[0]>t.XMIN-40&&y[0]<t.XMAX+40&&y[1]>t.ZMIN-40&&y[1]<t.ZMAX+40;for(let y of i.rail){let C=[],E=[];if(y.pts.forEach((x,T)=>{a(x)&&(C.push(x),E.push(y.h[T]))}),C.length<2)continue;let b=new Dn(C,E);o.push(b);let A=Ft(255,228,205);Yo(s,b,3,-1.7,1.7,x=>x[1]+.35,A,3.4),_d(s,b,3,-1.7,-2.6,.35,-.25,Ft(225,195,170)),_d(s,b,3,2.6,1.7,-.25,.35,Ft(225,195,170));let S=Ft(150,150,155);for(let x of[-.5,.5])Yo(r,b,3,x-.04,x+.04,T=>T[1]+.62,S),bs(r,b,3,x-.04,T=>T[1]+.47,T=>T[1]+.62,Ft(90,80,70)),bs(r,b,3,x+.04,T=>T[1]+.62,T=>T[1]+.47,Ft(90,80,70))}let c=Yu(),l=new Ot(s.geometry(),new Nt({vertexColors:!0,map:c.map,normalMap:c.normalMap,side:Zt,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));l.receiveShadow=!0,n.add(l);let h=new Ot(r.geometry(),new Nt({vertexColors:!0,roughness:.35,metalness:.8}));n.add(h);let u=0;for(let y of o)u+=Math.floor(y.L/.65);let d=new He(2,.14,.24),f=new Ue(d,new Nt({color:10657430,roughness:.9}),u),m=new ee,_=new be,g=new U,p=new U(1,1,1),v=new U(0,1,0),M=0;for(let y of o)for(let C=0;C<y.L-.65;C+=.65){let E=y.at(C),b=y.at(C+.6),A=Math.atan2(b[2]-E[2],b[0]-E[0]);_.setFromAxisAngle(v,-A+Math.PI/2),g.set(E[0],E[1]+.42,E[2]),m.compose(g,_,p),f.setMatrixAt(M++,m)}return f.count=M,f.receiveShadow=!0,n.add(f),e.add(n),{group:n,paths:o}}function vd(i){let t=[];for(let[e,n]of i){let s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n[0],r[o*3+1]=n[1],r[o*3+2]=n[2];e.setAttribute("color",new Jt(r,3)),e.attributes.uv||e.setAttribute("uv",new Jt(new Float32Array(s*2),2)),t.push(e.index?e.toNonIndexed():e)}return md(t,!1)}function re(i,t,e,n,s,r){let o=new He(i,t,e);return o.translate(n,s+t/2,r),o}function xd(i,t,e=.5){let n=new ve(e,e,.14,14);return n.rotateX(Math.PI/2),n.translate(i,e,t),n}function Zo(i,t,e,n,s){i.push([re(n*(e-1)+1.6,.55,.22,t,.45,1.18),s],[re(n*(e-1)+1.6,.55,.22,t,.45,-1.18),s]);for(let r=0;r<e;r++){let o=t+(r-(e-1)/2)*n;i.push([xd(o,.72,.48),s],[xd(o,-.72,.48),s])}i.push([re(.5,.35,2.2,t,.62,0),s])}function zx(){let i=Ft(232,186,40),t=Ft(20,110,88),e=Ft(52,54,58),n=Ft(26,30,34),s=Ft(235,235,230),r=Ft(120,124,128),o=[];o.push([re(21.6,.38,3.14,0,1.42,0),e]),o.push([re(21.8,.12,3.18,0,1.8,0),Ft(200,160,30)]),Zo(o,6.9,3,1.75,n),Zo(o,-6.9,3,1.75,n),o.push([re(7,1,2.5,0,.55,0),e]),o.push([re(13.2,2.65,2.5,-3,1.92,0),i]),o.push([re(13.25,.32,2.54,-3,2.55,0),t]),o.push([re(3.4,.35,3,-8.4,4.55,0),i]),o.push([re(3.2,.2,2.9,-8.4,4.9,0),r]);for(let a of[-7.5,-9.3]){let c=new ve(.62,.62,.06,16);c.translate(a,5.12,0),o.push([c,n])}for(let a of[-1,-3.2]){let c=new ve(.5,.5,.06,14);c.translate(a,4.6,0),o.push([c,n])}o.push([re(1.2,.4,.8,-5,4.57,0),e]),o.push([re(3.4,3,3.1,5.4,1.92,0),i]),o.push([re(3.45,.32,3.14,5.4,2.55,0),t]),o.push([re(3.5,.18,3.16,5.4,4.92,0),Ft(210,170,36)]),o.push([re(.06,.95,2.5,7.13,3.72,0),n]),o.push([re(1.6,.85,.06,5.6,3.75,1.56),n]),o.push([re(1.6,.85,.06,5.6,3.75,-1.56),n]),o.push([re(2.6,1.55,2.6,8.4,1.92,0),i]),o.push([re(2.62,.32,2.64,8.4,2.55,0),t]),o.push([re(.1,.25,.5,9.74,3,0),s]),o.push([re(.1,.18,.3,9.74,2.2,.9),s]),o.push([re(.1,.18,.3,9.74,2.2,-.9),s]);for(let a of[1.52,-1.52]){o.push([re(20.6,.05,.05,-.5,2.85,a),s]);for(let c=-10;c<=9.8;c+=2.2)o.push([re(.05,1,.05,c,1.86,a),s])}return o.push([re(.4,.5,.9,10.6,1,0),e]),o.push([re(.4,.5,.9,-10.6,1,0),e]),o.push([re(.6,.5,3,10.2,.6,0),i]),o.push([re(.6,.5,3,-10.6,.6,0),i]),vd(o)}function kx(){let i=Ft(110,70,52),t=Ft(86,54,40),e=Ft(30,30,32),n=Ft(70,44,36),s=[];Zo(s,3.5,2,1.75,e),Zo(s,-3.5,2,1.75,e),s.push([re(9.9,.3,2.4,0,1.15,0),e]),s.push([re(9.6,2.5,3.05,0,1.42,0),i]);for(let a=0;a<9;a++){let c=-4.4+a*1.1;s.push([re(.12,2.5,3.17,c,1.42,0),t])}s.push([re(9.7,.12,3.15,0,3.85,0),t]);let r=new Ai;r.moveTo(-1.42,0),r.lineTo(-1,.35),r.lineTo(-.3,.62),r.lineTo(.3,.62),r.lineTo(1,.35),r.lineTo(1.42,0);let o=new _s(r,{depth:8.8,bevelEnabled:!1});return o.rotateY(Math.PI/2),o.translate(-4.4,3.86,0),s.push([o,n]),s.push([re(.5,.3,.4,5.2,1,0),e]),s.push([re(.5,.3,.4,-5.2,1,0),e]),vd(s)}function Md(i,t){let e=i.slice().sort((E,b)=>b.L-E.L).slice(0,2),n=new se;n.name="train";let s=10.5,r=22,o=60,a=new Nt({vertexColors:!0,roughness:.7,metalness:.15}),c=new Ue(kx(),a,o);c.castShadow=!0,c.receiveShadow=!0,n.add(c);let l=zx(),h=new Nt({vertexColors:!0,roughness:.45,metalness:.25}),u=[];for(let E=0;E<2;E++){let b=new se,A=new Ot(l,h);A.castShadow=!0,A.receiveShadow=!0,b.add(A),n.add(b),u.push(b)}t.add(n);let d=new ee,f=new be,m=new U,_=new U(1,1,1),g=new U(0,1,0),p=-200,v=1,M=0,y=0;function C(E,b,A){let S=E.at(b-A/2*.8),x=E.at(b+A/2*.8),T=E.at(b),L=Math.atan2(x[2]-S[2],x[0]-S[0]);return f.setFromAxisAngle(g,-L),m.set(T[0],T[1]+.62,T[2]),L}return{group:n,placeNear(E,b){let A=e[0],S=0,x=1e9;for(let T=0;T<A.L;T+=5){let L=A.at(T),I=Math.hypot(L[0]-E,L[2]-b);I<x&&(x=I,S=T)}M=0,v=1,y=0,p=S+r*1.5},tick(E){let b=e[M];if(!b)return;if(y>0){y-=E,n.visible=!1;return}n.visible=!0,p+=E*13*v;let A=p;for(let T=0;T<2;T++)C(b,A-r/2*v,r),u[T].position.copy(m),u[T].quaternion.copy(f),v<0&&u[T].rotateY(Math.PI),A-=r*v;for(let T=0;T<o;T++){let L=A-s/2*v;C(b,L,s),d.compose(m,f,_),c.setMatrixAt(T,d),A-=s*v}c.instanceMatrix.needsUpdate=!0;let S=A;(v>0?S>b.L+50:S<-50)&&(y=40,M=(M+1)%e.length,v=-v,p=v>0?-50:b.L+50)}}}function Sd(i,t,e,n){let s=new se;s.name="passarelas";let r=new te,o=new te,a=Ft(40,110,140),c=Ft(150,150,150);for(let m of i.extras.footbridges){let _=new Dn(m,m.map(()=>0)),g=t.at(m[0][0],m[0][1]),p=t.at(m[m.length-1][0],m[m.length-1][1]),v=_.at(_.L/2),M=t.at(v[0],v[2])+7.2,y=_.s[1],C=_.s[_.s.length-2],E=m.map((T,L)=>L===0?g+.2:L===m.length-1?p+.2:M),b=new Dn(m,E),A=1.2;Yo(r,b,1,-A,A,T=>T[1],c),Yo(r,b,1,A,-A,T=>T[1]-.35,a),bs(r,b,1,-A,T=>T[1]-.35,T=>T[1],a),bs(r,b,1,A,T=>T[1],T=>T[1]-.35,a);for(let T of[-A,A])bs(o,b,1,T,L=>L[1],L=>L[1]+1.1,a);for(let T of[-A,A])bs(o,b,1,T,L=>L[1]+1.1,L=>L[1]+2.6,a,y,C);let S=new He(.35,1,.35),x=new Nt({color:2780812,roughness:.6,metalness:.4});for(let T=4;T<b.L-2;T+=7){let L=b.at(T),I=t.at(L[0],L[2]),z=L[1]-.35-I;if(!(z<.8))for(let k of[-1,1]){let B=new Ot(S,x);B.scale.y=z,B.position.set(L[0],I+z/2,L[2]),s.add(B),B.castShadow=!0}}}let l=new Ot(r.geometry(),new Nt({vertexColors:!0,roughness:.6,metalness:.3,side:Zt}));l.castShadow=l.receiveShadow=!0;let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.clearRect(0,0,64,64),u.strokeStyle="#2c6f8e",u.lineWidth=3,u.strokeRect(0,0,64,64),u.beginPath(),u.moveTo(0,32),u.lineTo(64,32),u.moveTo(32,0),u.lineTo(32,64),u.stroke();let d=new je(h);d.wrapS=d.wrapT=En,d.repeat.set(1,4),d.colorSpace=me;let f=new Ot(o.geometry(),new Nt({map:d,transparent:!0,alphaTest:.3,side:Zt,metalness:.4,roughness:.5}));return s.add(l,f),e.add(s),s}var Dn,Pl=Ae(()=>{Te();fi();gd();Di();Dn=class{constructor(t,e){this.p=t,this.h=e,this.s=[0];for(let n=1;n<t.length;n++)this.s.push(this.s[n-1]+Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1]));this.L=this.s[this.s.length-1]}at(t){t=Math.max(0,Math.min(this.L,t));let e=0,n=this.s.length-1;for(;n-e>1;){let a=e+n>>1;this.s[a]<=t?e=a:n=a}let s=(t-this.s[e])/Math.max(1e-6,this.s[n]-this.s[e]),r=this.p[e],o=this.p[n];return[r[0]+(o[0]-r[0])*s,this.h[e]+(this.h[n]-this.h[e])*s,r[1]+(o[1]-r[1])*s]}}});function Il(i,t,e,n=1){let s=[],r=[];for(let a=t;a<e+1e-6;a+=n){let c=i.at(Math.min(a,e));s.push([c[0],c[2]]),r.push(c[1])}let o=i.at(e);return Math.hypot(s[s.length-1][0]-o[0],s[s.length-1][1]-o[2])>.05&&(s.push([o[0],o[2]]),r.push(o[1])),new Dn(s,r)}function nn(i,t){let e=i.at(Math.max(0,t-.5)),n=i.at(Math.min(i.L,t+.5)),s=n[0]-e[0],r=n[2]-e[2],o=Math.hypot(s,r)||1;return{c:i.at(t),ux:s/o,uz:r/o,nx:-r/o,nz:s/o}}function $n(i,t,e,n,s,r,o,a,c,l=1,h=null){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=nn(t,u),m=nn(t,d),_=(g,p,v)=>[g.c[0]+g.nx*p,a(g.c[1],p,v),g.c[2]+g.nz*p];i.quad(_(f,r,u),_(m,r,d),_(m,o,d),_(f,o,u),[r/l,u/l],[r/l,d/l],[o/l,d/l],[o/l,u/l],c,h)}}function Ll(i,t,e,n,s,r,o,a,c,l=1,h=!1){for(let u=e;u<n-1e-6;u+=s){let d=Math.min(n,u+s),f=nn(t,u),m=nn(t,d),_=[f.c[0]+f.nx*r,o(f.c,u),f.c[2]+f.nz*r],g=[m.c[0]+m.nx*r,o(m.c,d),m.c[2]+m.nz*r],p=[m.c[0]+m.nx*r,a(m.c,d),m.c[2]+m.nz*r],v=[f.c[0]+f.nx*r,a(f.c,u),f.c[2]+f.nz*r];h?i.quad(g,_,v,p,[d/l,g[1]/l],[u/l,_[1]/l],[u/l,v[1]/l],[d/l,p[1]/l],c):i.quad(_,g,p,v,[u/l,_[1]/l],[d/l,g[1]/l],[d/l,p[1]/l],[u/l,v[1]/l],c)}}function Fi(i,t,e,n,s,r,o,a=1){for(let c=e;c<n-1e-6;c+=s){let l=Math.min(n,c+s),h=nn(t,c),u=nn(t,l);for(let d=0;d<r.length-1;d++){let[f,m]=r[d],[_,g]=r[d+1],p=(v,M,y)=>[v.c[0]+v.nx*M,v.c[1]+y,v.c[2]+v.nz*M];i.quad(p(h,f,m),p(u,f,m),p(u,_,g),p(h,_,g),[c/a,m/a],[l/a,m/a],[l/a,g/a],[c/a,g/a],o)}}}function ws(i,t,e,n,s,r,o,a,c,l=1){let h=(g,p,v)=>[t.c[0]+t.ux*(e+g)+t.nx*(n+p),v,t.c[2]+t.uz*(e+g)+t.nz*(n+p)],u=s/2,d=r/2,f=a,m=a+o,_=(g,p,v,M,y,C)=>i.quad(g,p,v,M,[0,0],[y/l,0],[y/l,C/l],[0,C/l],c);_(h(-u,-d,f),h(u,-d,f),h(u,-d,m),h(-u,-d,m),s,o),_(h(u,d,f),h(-u,d,f),h(-u,d,m),h(u,d,m),s,o),_(h(u,-d,f),h(u,d,f),h(u,d,m),h(u,-d,m),r,o),_(h(-u,d,f),h(-u,-d,f),h(-u,-d,m),h(-u,d,m),r,o),_(h(-u,-d,m),h(u,-d,m),h(u,d,m),h(-u,d,m),s,r),_(h(-u,d,f),h(u,d,f),h(u,-d,f),h(-u,-d,f),s,r)}function Ed(i,t,e,n){let s=i.viaduct,r=new se;r.name="viaduto";let o=new te,a=new te,c=new te,l=new te,h=new te,u=new te,d=new te,f=Ft(214,210,202),m=Ft(188,184,176),_=Ft(228,225,218),[g,p]=s.deck,v=s.ramps.find(H=>Math.hypot(H.pts[0][0]-g[0],H.pts[0][1]-g[1])<1)||s.ramps[1],M=s.ramps.find(H=>H!==v),y=[...v.pts.slice().reverse(),...M.pts.slice(1)],C=[...v.h.slice().reverse(),...M.h.slice(1)],E=new Dn(y,C),b=0;{let H=0;for(let j=1;j<v.pts.length;j++)H+=Math.hypot(v.pts[j][0]-v.pts[j-1][0],v.pts[j][1]-v.pts[j-1][1]);b=H}let A=[];for(let H of n||[])for(let j=b-5;j<b+40;j+=.25){let tt=E.at(j),nt=1e9;for(let V=0;V<H.L;V+=2){let R=H.at(V),w=Math.hypot(tt[0]-R[0],tt[2]-R[2]);w<nt&&(nt=w)}nt<.6&&(A.push(j),j+=3)}A.length||(A=[b+13.5,b+18.1]),A.sort((H,j)=>H-j);let S=b+7.5,x=b+24.5,T=b+44,L=b+62,I=Il(E,S-.6,L+.6,1),z=S-.6,k=-6.3,B=6.3,Z=0,N=8;$n(a,I,0,I.L,1,-5.85,3.55,H=>H+.02,[1,1,1],N,[0,1,0]),$n(c,I,0,I.L,1,4.05,6,H=>H+.17,[1,1,1],2,[0,1,0]),Ll(o,I,0,I.L,1,4.05,H=>H[1]+.02,H=>H[1]+.17,f,2,!0),$n(o,I,0,I.L,1,B,k,H=>H-.3,m,2,[0,-1,0]);for(let[H,j]of[[k,!1],[B,!0]])Ll(o,I,0,I.L,1,H,tt=>tt[1]-.75,tt=>tt[1]+.25,_,2,j);$n(o,I,0,I.L,1,k,k+.25,H=>H+.25,_,2,[0,1,0]),$n(o,I,0,I.L,1,B-.2,B,H=>H+.25,_,2,[0,1,0]);let ft=(H,j)=>[[H,.02],[H+j*.04,.1],[H+j*.17,.33],[H+j*.31,.85],[H+j*.42,.85],[H+j*.42,.02]].map(([tt,nt])=>[tt,nt]),dt=ft(-6.27,1),mt=[[3.55,.02],[3.59,.1],[3.72,.33],[3.86,.85],[3.97,.85],[4.05,.17]];Fi(o,I,0,I.L,1,dt,_,2),Fi(o,I,0,I.L,1,mt.slice().reverse(),_,2),Fi(o,I,0,I.L,1,[[6,.17],[6,.75],[6.3,.75],[6.3,.25]],_,2);let yt=Ft(246,196,18);for(let[H,j]of[[-6.1,.85],[6.15,.75]]){for(let tt=.3;tt<I.L;tt+=.22){let nt=nn(I,tt),V=nt.c[0]+nt.nx*H,R=nt.c[2]+nt.nz*H,w=nt.c[1]+j,F=.025;u.quad([V-nt.ux*F,w,R-nt.uz*F],[V+nt.ux*F,w,R+nt.uz*F],[V+nt.ux*F,w+1.9,R+nt.uz*F],[V-nt.ux*F,w+1.9,R-nt.uz*F],[0,0],[1,0],[1,1],[0,1],yt),u.quad([V-nt.nx*F,w,R-nt.nz*F],[V+nt.nx*F,w,R+nt.nz*F],[V+nt.nx*F,w+1.9,R+nt.nz*F],[V-nt.nx*F,w+1.9,R-nt.nz*F],[0,0],[1,0],[1,1],[0,1],yt)}for(let tt of[.06,1.86])Fi(u,I,0,I.L,1,[[H-.03,j+tt],[H+.03,j+tt],[H+.03,j+tt+.06],[H-.03,j+tt+.06],[H-.03,j+tt]],yt);for(let tt=.3;tt<I.L;tt+=2.5){let nt=nn(I,tt);ws(u,nt,0,H,.08,.08,1.95,nt.c[1]+j,yt)}}let bt=Ft(236,236,230);for(let[H,j,tt,nt]of[[-1.25,.06,yt,!1],[-1.05,.06,yt,!1],[-5.5,.07,bt,!1],[3.2,.07,bt,!1]])$n(h,I,0,I.L,1,H-j,H+j,V=>V+.04,tt,1,[0,1,0]);let et=[[S,x],[x,T],[T,L]];for(let[H,j]of et){let tt=H-z+.4,nt=j-z-.4;for(let V of[-4.6,-1.55,1.55,4.6])Fi(o,I,tt,nt,1,[[V-.17,-.3],[V-.17,-1.45],[V-.38,-1.6],[V-.38,-1.82],[V+.38,-1.82],[V+.38,-1.6],[V+.17,-1.45],[V+.17,-.3]],m,2);for(let V of[.03,.5,.97]){let R=tt+(nt-tt)*V,w=nn(I,R);ws(o,w,0,0,.25,9,1.2,w.c[1]-1.55,m,2)}}let ct=new ve(.55,.55,1,24,1,!0),Mt=Bo(),G=new Nt({color:14078666,map:Mt.map,normalMap:Mt.normalMap,roughness:.85}),it=(H,j)=>{let tt=t.at(H,j);for(let nt of n||[])for(let V=0;V<nt.L;V+=3){let R=nt.at(V);Math.hypot(R[0]-H,R[2]-j)<6&&(tt=Math.min(tt,R[1]+.2))}return tt};for(let H of[x,T]){let j=nn(I,H-z),tt=j.c[1]-1.82,nt=1.5,V=[[-6,0],[6,0],[6,-.6],[4.6,-nt],[-4.6,-nt],[-6,-.6]],R=(w,F,$)=>[j.c[0]+j.nx*w+j.ux*$,tt+F,j.c[2]+j.nz*w+j.uz*$];for(let w=0;w<V.length;w++){let[F,$]=V[w],[J,Y]=V[(w+1)%V.length];o.quad(R(F,$,-.85),R(J,Y,-.85),R(J,Y,.85),R(F,$,.85),[0,0],[1,0],[1,.5],[0,.5],m)}for(let w of[-.85,.85]){let F=V.map(([$,J])=>R($,J,w));o.tri(F[0],F[1],F[2],[0,0],[1,0],[1,1],m),o.tri(F[0],F[2],F[3],[0,0],[1,0],[1,1],m),o.tri(F[0],F[3],F[4],[0,0],[1,0],[1,1],m),o.tri(F[0],F[4],F[5],[0,0],[1,0],[1,1],m)}for(let w of[-3.2,3.2]){let F=j.c[0]+j.nx*w,$=j.c[2]+j.nz*w,J=it(F,$)-.3,Y=tt-nt-J+.05,xt=new Ot(ct,G);xt.scale.set(1,Y,1),xt.position.set(F,J+Y/2,$),xt.castShadow=!0,xt.receiveShadow=!0,r.add(xt);let rt=new Ot(new ve(.75,.8,.5,20),G);rt.position.set(F,J+.25,$),r.add(rt)}}for(let[H,j]of[[S,-1],[L,1]]){let tt=nn(E,H),nt=tt.c[1]-1.82;ws(o,tt,j*.6,0,1.4,13,1.3,nt-1.3,m,2);let V=14;for(let R=0;R<V;R++){let w=-6.6+13.2*R/V,F=-6.6+13.2*(R+1)/V,$=[tt.c[0]+tt.nx*w+tt.ux*j*1.3,0,tt.c[2]+tt.nz*w+tt.uz*j*1.3],J=[tt.c[0]+tt.nx*F+tt.ux*j*1.3,0,tt.c[2]+tt.nz*F+tt.uz*j*1.3],Y=it($[0],$[2])-.5,xt=it(J[0],J[2])-.5,rt=nt-1.3,gt=rt,At=j<0?[[J[0],xt,J[2]],[$[0],Y,$[2]],[$[0],rt,$[2]],[J[0],gt,J[2]]]:[[$[0],Y,$[2]],[J[0],xt,J[2]],[J[0],gt,J[2]],[$[0],rt,$[2]]];l.quad(At[0],At[1],At[2],At[3],[w/3,Y/3],[F/3,xt/3],[F/3,gt/3],[w/3,rt/3],[1,1,1])}}let pt=Il(E,0,S+1.5,1),q=Il(E,L-1.5,E.L,1);for(let[H,j]of[[pt,"N"],[q,"S"]]){$n(a,H,0,H.L,1,-5.85,5.85,rt=>rt+.12,[1,1,1],N,[0,1,0]);for(let[rt,gt,At]of[[-.12,.06,yt],[.12,.06,yt],[-5.5,.07,bt],[5.5,.07,bt]])$n(h,H,0,H.L,1,rt-gt,rt+gt,vt=>vt+.14,At,1,[0,1,0]);Fi(o,H,0,H.L,1,ft(-6.27,1),_,2),Fi(o,H,0,H.L,1,ft(6.27,-1).slice().reverse(),_,2);let nt=rt=>rt[1]-t.at(rt[0],rt[2]),V=0;for(let rt=0;rt<H.L;rt+=1){let gt=nn(H,rt);nt(gt.c)>.25&&(V=rt)}let R=Math.min(H.L,V+2),w=0,F=j==="N"?H.L:R,$=j==="N"?Math.max(0,H.L-R):0,J=j==="N"?(()=>{let rt=H.L;for(let gt=H.L;gt>=0;gt-=1){let At=nn(H,gt);if(nt(At.c)>.25)rt=gt;else break}return Math.max(0,rt-2)})():0,Y=j==="N"?J:0,xt=j==="N"?H.L:R;for(let[rt,gt]of[[-6.3,!0],[6.3,!1]])Ll(l,H,Y,xt,1,rt,At=>Math.min(t.at(At[0]+0,At[2]),At[1])-.6,At=>At[1]+.02,[1,1,1],3,gt);$n(o,H,Y,xt,1,-6.3,-6.3+1e-4,rt=>rt,_)}for(let H of[6,I.L/2,I.L-6]){let j=nn(I,H),tt=j.c[0]+j.nx*5.8,nt=j.c[2]+j.nz*5.8,V=j.c[1]+.17;ws(d,j,0,5.8,.16,.16,8.5,V,Ft(150,152,156)),ws(d,j,0,4.6,.12,2.4,.12,V+8.4,Ft(150,152,156)),ws(d,j,0,3.4,.5,.25,.12,V+8.3,Ft(230,230,225))}let Tt=Fo(),st=Oo(),ht=qu(),D=(H,j,tt=!0)=>{let nt=new Ot(H.geometry(),j);return nt.castShadow=tt,nt.receiveShadow=!0,r.add(nt),nt};D(o,new Nt({vertexColors:!0,map:Mt.map,normalMap:Mt.normalMap,normalScale:new _t(.5,.5),roughness:.85,side:Zt})),D(a,new Nt({map:Tt.map,normalMap:Tt.normalMap,normalScale:new _t(.5,.5),roughness:.9,side:Zt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),!1),D(c,new Nt({map:st.map,normalMap:st.normalMap,roughness:.9,side:Zt}),!1),D(l,new Nt({map:ht.map,normalMap:ht.normalMap,roughness:.92,side:Zt})),D(h,new Nt({vertexColors:!0,roughness:.6,side:Zt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),!1),D(u,new Nt({vertexColors:!0,roughness:.45,metalness:.3,side:Zt})),D(d,new Nt({vertexColors:!0,roughness:.5,metalness:.5})),e.add(r);let ut=I.at(I.L/2);return{group:r,deck:I,center:ut,supports:{sAN:S,sP1:x,sP2:T,sAS:L},cross:A}}var bd=Ae(()=>{Te();fi();Pl();Di()});function wd(i){let t=new Ke({depthWrite:!1,side:De,fog:!1,toneMapped:!1,uniforms:{sunDir:{value:new U(0,1,0)},zen:{value:new qt(.045,.17,.55)},hor:{value:new qt(.5,.62,.8)},day:{value:1},clouds:{value:i==="low"?0:1}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*w;gl_Position.z=gl_Position.w*0.99999;}",fragmentShader:`uniform vec3 sunDir,zen,hor;uniform float day,clouds;varying vec3 vW;
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
      }`}),e=new Ot(new pn(3e4,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="ceu",e}var Td=Ae(()=>{Te()});function gn(i,t,e,n,s,r,o,a,c,l,h,u){let d=(y,C,E)=>[t[0]+n[0]*(s+y)+e[0]*(o+C),E,t[1]+n[1]*(s+y)+e[1]*(o+C)],f=-a/2,m=a/2,_=-c/2,g=c/2,p=h+r,v=h+r+l,M=(y,C,E,b)=>i.quad(y,C,E,b,[0,0],[1,0],[1,1],[0,1],u);M(d(f,g,p),d(m,g,p),d(m,g,v),d(f,g,v)),M(d(m,_,p),d(f,_,p),d(f,_,v),d(m,_,v)),M(d(m,g,p),d(m,_,p),d(m,_,v),d(m,g,v)),M(d(f,_,p),d(f,g,p),d(f,g,v),d(f,_,v)),M(d(f,_,v),d(f,g,v),d(m,g,v),d(m,_,v))}function Dl(i,t,e,n,s,r,o,a,c,l){let h=(m,_,g)=>[t[0]+n[0]*(s+m)+e[0]*(r+_),g,t[1]+n[1]*(s+m)+e[1]*(r+_)],u=o/2,d=h(0,0,a+c),f=[h(-u,-u,a),h(u,-u,a),h(u,u,a),h(-u,u,a)];for(let m=0;m<4;m++)i.tri(f[m],f[(m+1)%4],d,[0,0],[1,0],[.5,1],l)}function Ad(i,t,e){let n=i.extras.church,s=1e9,r=null;for(let G of i.roads)if(!(G.hw==="footway"||G.hw==="path"))for(let it=0;it<G.p.length-1;it++){let pt=G.p[it],q=G.p[it+1],Tt=q[0]-pt[0],st=q[1]-pt[1],ht=Tt*Tt+st*st,D=((n[0]-pt[0])*Tt+(n[1]-pt[1])*st)/(ht||1);D=Math.max(0,Math.min(1,D));let ut=pt[0]+Tt*D,H=pt[1]+st*D,j=Math.hypot(ut-n[0],H-n[1]);j<s&&(s=j,r=[ut,H])}let o=[r[0]-n[0],r[1]-n[1]],a=Math.hypot(...o);o=[o[0]/a,o[1]/a];let c=[-o[1],o[0]],l=Math.max(0,s-22),h=[n[0]+o[0]*l,n[1]+o[1]*l],u=t.at(h[0],h[1])-.2,d=new se;d.name="igreja";let f=new te,m=new te,_=new te,g=new te,p=new te,v=Ft(232,190,82),M=Ft(246,243,234),y=Ft(40,34,30),C=Ft(160,82,58),E=Ft(80,84,92),b=12,A=28,S=9.5;gn(f,h,o,c,0,0,-4,b,A,S,u,v);for(let G=0;G<=7;G++){let it=-4-A/2+G*A/7;gn(m,h,o,c,b/2,0,it,.5,.6,S,u,M),gn(m,h,o,c,-b/2,0,it,.5,.6,S,u,M)}gn(m,h,o,c,0,S-.5,-4,b+.6,A+.6,.6,u,M),gn(m,h,o,c,0,0,-4,b+.4,A+.4,.8,u,M);for(let G=0;G<7;G++){let it=-4-A/2+(G+.5)*A/7;for(let pt of[-1,1]){let q=(Tt,st,ht)=>[h[0]+c[0]*(pt*(b/2+.03))+o[0]*(it+Tt),u+ht,h[1]+c[1]*(pt*(b/2+.03))+o[1]*(it+Tt)];_.quad(q(-.8,0,2.5),q(.8,0,2.5),q(.8,0,6.6),q(-.8,0,6.6),[0,0],[1,0],[1,1],[0,1],Ft(60,70,95)),_.tri(q(-.8,0,6.6),q(.8,0,6.6),q(0,0,7.8),[0,0],[1,0],[.5,1],Ft(60,70,95))}}let x=(G,it,pt)=>[h[0]+c[0]*G+o[0]*it,pt,h[1]+c[1]*G+o[1]*it],T=S+b/2*.75,L=-4-A/2-.6,I=-4+A/2+.3;g.quad(x(-b/2-.6,L,u+S),x(-b/2-.6,I,u+S),x(0,I,u+T),x(0,L,u+T),[0,0],[A/2.4,0],[A/2.4,4],[0,4],C),g.quad(x(b/2+.6,I,u+S),x(b/2+.6,L,u+S),x(0,L,u+T),x(0,I,u+T),[0,0],[A/2.4,0],[A/2.4,4],[0,4],C),f.tri(x(-b/2,I-.3,u+S),x(b/2,I-.3,u+S),x(0,I-.3,u+T),[0,0],[1,0],[.5,1],v),f.tri(x(b/2,L+.6,u+S),x(-b/2,L+.6,u+S),x(0,L+.6,u+T),[0,0],[1,0],[.5,1],v),gn(f,h,o,c,0,0,-4-A/2-2.5,8,5,7.5,u,v),Dl(g,h,o,c,0,-4-A/2-2.5,8.6,u+7.5,2.5,C);let z=-4+A/2+1.8;gn(f,h,o,c,0,0,z,5.2,5.2,24,u,v);for(let[G,it]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])gn(m,h,o,c,G,0,z+it,.6,.6,24.4,u,M);for(let G of[9.5,16,23.6])gn(m,h,o,c,0,G,z,5.8,5.8,.6,u,M);let k=(G,it,pt=0)=>x(G,z+2.62+pt,u+it);_.quad(k(-1.2,0),k(1.2,0),k(1.2,4.2),k(-1.2,4.2),[0,0],[1,0],[1,1],[0,1],Ft(92,58,36)),_.tri(k(-1.2,4.2),k(1.2,4.2),k(0,5.4),[0,0],[1,0],[.5,1],Ft(92,58,36));for(let G=0;G<16;G++){let it=G/16*Math.PI*2,pt=(G+1)/16*Math.PI*2;_.tri(k(0,12.5),k(Math.cos(it)*1.3,12.5+Math.sin(it)*1.3),k(Math.cos(pt)*1.3,12.5+Math.sin(pt)*1.3),[0,0],[1,0],[1,1],Ft(70,80,110))}for(let G=0;G<20;G++){let it=G/20*Math.PI*2,pt=(G+1)/20*Math.PI*2;m.tri(k(0,19.6,.02),k(Math.cos(it)*1,19.6+Math.sin(it)*1,.02),k(Math.cos(pt)*1,19.6+Math.sin(pt)*1,.02),[0,0],[1,0],[1,1],M)}for(let G of[-1,1]){let it=(pt,q)=>x(G*2.63,z+pt,u+q);_.quad(it(-.9,17),it(.9,17),it(.9,21.5),it(-.9,21.5),[0,0],[1,0],[1,1],[0,1],y)}Dl(p,h,o,c,0,z,5,u+24.2,11,E);for(let[G,it]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])Dl(m,h,o,c,G,z+it,.8,u+24.4,2.2,M);gn(m,h,o,c,0,35.2,z,.18,.18,2.2,u,M),gn(m,h,o,c,0,36.4,z,1.1,.18,.18,u,M),gn(m,h,o,c,0,0,z+5,9,4,.35,u,Ft(200,196,188));let B=new te,Z=Ft(240,240,240),N=10,ft=-4-A/2-5,dt=z+8,mt=[[-N,ft],[-N,dt],[-1.8,dt],[1.8,dt],[N,dt],[N,ft]];for(let G=0;G<mt.length-1;G++){if(G===1)continue;let it=mt[G],pt=mt[G+1],q=Math.hypot(pt[0]-it[0],pt[1]-it[1]);for(let ut=0;ut<=q;ut+=.25){let H=ut/q,j=it[0]+(pt[0]-it[0])*H,tt=it[1]+(pt[1]-it[1])*H,nt=x(j,tt,0),V=t.at(nt[0],nt[2]);B.quad([nt[0]-.02,V,nt[2]],[nt[0]+.02,V,nt[2]],[nt[0]+.02,V+1.6,nt[2]],[nt[0]-.02,V+1.6,nt[2]],[0,0],[1,0],[1,1],[0,1],Z)}let Tt=x(it[0],it[1],0),st=x(pt[0],pt[1],0),ht=t.at(Tt[0],Tt[2]),D=t.at(st[0],st[2]);for(let ut of[.5,1.5])B.quad([Tt[0],ht+ut,Tt[2]],[st[0],D+ut,st[2]],[st[0],D+ut+.06,st[2]],[Tt[0],ht+ut+.06,Tt[2]],[0,0],[1,0],[1,1],[0,1],Z);B.quad([Tt[0],ht-.3,Tt[2]],[st[0],D-.3,st[2]],[st[0],D+.45,st[2]],[Tt[0],ht+.45,Tt[2]],[0,0],[1,0],[1,1],[0,1],Ft(170,170,168))}let yt=(G,it,pt={})=>{let q=new Ot(G.geometry(),new Nt(Object.assign({vertexColors:!0,map:it,roughness:.85,side:Zt},pt)));q.castShadow=!0,q.receiveShadow=!0,d.add(q)};yt(f,td()),yt(m,null),yt(_,null,{roughness:.3,metalness:.2}),yt(g,ed()),yt(p,null,{roughness:.4,metalness:.5}),yt(B,null);let bt=new te,et=Ft(205,200,190),ct=[x(-N,ft,0),x(N,ft,0),x(N,dt,0),x(-N,dt,0)];for(let G=0;G<10;G++)for(let it=0;it<10;it++){let pt=(q,Tt)=>{let st=[ct[0][0]+(ct[1][0]-ct[0][0])*q+(ct[3][0]-ct[0][0])*Tt,0,ct[0][2]+(ct[1][2]-ct[0][2])*q+(ct[3][2]-ct[0][2])*Tt];return st[1]=t.at(st[0],st[2])+.12,st};bt.quad(pt(G/10,it/10),pt(G/10,(it+1)/10),pt((G+1)/10,(it+1)/10),pt((G+1)/10,it/10),[0,0],[0,1],[1,1],[1,0],et)}let Mt=new Ot(bt.geometry(),new Nt({vertexColors:!0,map:ju(),roughness:.9,side:Zt,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-10}));return Mt.receiveShadow=!0,d.add(Mt),e.add(d),{group:d,center:h,radius:Math.hypot(N,(dt-ft)/2)+2,front:o,frame:{C:h,f:o,r:c,fz0:ft,fz1:dt,fx:N}}}function Rd(i,t,e){let n=new se;n.name="praca";let s=i.extras.park;if(!s)return null;let r=s.slice();r.length>2&&r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&r.pop();let o=Wn.triangulateShape(r.map(x=>new _t(x[0],x[1])),[]),a=new te,c=-1e9;for(let x of r)c=Math.max(c,t.at(x[0],x[1]));let l=(x,T)=>t.at(x,T)+.3,h=(x,T,L,I)=>{if(Math.max(Math.hypot(x[0]-T[0],x[1]-T[1]),Math.hypot(T[0]-L[0],T[1]-L[1]),Math.hypot(x[0]-L[0],x[1]-L[1]))<6||I>6){let N=[x[0],l(x[0],x[1]),x[1]],ft=[T[0],l(T[0],T[1]),T[1]],dt=[L[0],l(L[0],L[1]),L[1]];a.tri(N,dt,ft,[x[0]/4,x[1]/4],[L[0]/4,L[1]/4],[T[0]/4,T[1]/4],[1,1,1]);return}let k=[(x[0]+T[0])/2,(x[1]+T[1])/2],B=[(T[0]+L[0])/2,(T[1]+L[1])/2],Z=[(L[0]+x[0])/2,(L[1]+x[1])/2];h(x,k,Z,I+1),h(k,T,B,I+1),h(Z,B,L,I+1),h(k,B,Z,I+1)};for(let[x,T,L]of o)h(r[x],r[T],r[L],0);for(let x=0;x<r.length;x++){let T=r[x],L=r[(x+1)%r.length];a.quad([T[0],t.at(T[0],T[1])-.2,T[1]],[L[0],t.at(L[0],L[1])-.2,L[1]],[L[0],l(L[0],L[1]),L[1]],[T[0],l(T[0],T[1]),T[1]],[0,0],[1,0],[1,.1],[0,.1],Ft(170,166,160))}let u=new Ot(a.geometry(),new Nt({vertexColors:!0,map:Qu(),roughness:.85,side:Zt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}));u.receiveShadow=!0,n.add(u);let d=new Nt({color:4169672,roughness:.3}),f=new Nt({color:8376544,roughness:.05,metalness:.1,transparent:!0,opacity:.85}),m=new Nt({color:15921906,roughness:.6}),_=new Nt({color:2845872,roughness:.5});for(let[x,T]of i.extras.fountains){let L=l(x,T),I=new Ot(new ve(5.2,5.2,.7,40,1,!0),d);I.position.set(x,L+.3,T),n.add(I);let z=new Ot(new Ci(5.2,.22,8,40),new Nt({color:15263976}));z.rotation.x=Math.PI/2,z.position.set(x,L+.62,T),n.add(z);let k=new Ot(new mo(5.1,40),f);k.rotation.x=-Math.PI/2,k.position.set(x,L+.4,T),n.add(k);let B=new Ot(new go(.35,1.6,12),new Nt({color:14743295,transparent:!0,opacity:.6}));B.position.set(x,L+1.2,T),n.add(B);let Z=new se,N=new Ci(5.2,.12,6,24,Math.PI);for(let dt of[-.8,.8]){let mt=new Ot(N,_);mt.position.set(0,-4.2,dt),mt.scale.set(1,.25,1),Z.add(mt);let yt=new Ot(new Ci(5.2,.08,6,24,Math.PI),_);yt.position.set(0,-3.4,dt),yt.scale.set(1,.25,1),Z.add(yt)}let ft=new Ot(new Ci(5.2,.18,4,24,Math.PI),m);ft.scale.set(1,.25,8),ft.position.set(0,-4.3,0),Z.add(ft),Z.position.set(x,L+4.6,T),Z.rotation.y=Gt(x)*3,n.add(Z)}let g=new He(1.8,.45,.5),p=new Nt({color:8018492,roughness:.8}),v=new ve(.06,.09,4,6),M=new Nt({color:3355443}),y=new pn(.28,10,8),C=new Nt({color:16777215,emissive:16773836,emissiveIntensity:.3}),E=0;for(let x=0;x<r.length;x++){let T=r[x],L=r[(x+1)%r.length],I=Math.hypot(L[0]-T[0],L[1]-T[1]),z=(L[0]-T[0])/I,k=(L[1]-T[1])/I,B=0,Z=0;for(let N of r)B+=N[0],Z+=N[1];B/=r.length,Z/=r.length;for(let N=4;N<I-2;N+=9){let ft=T[0]+z*N,dt=T[1]+k*N,mt=B-ft,yt=Z-dt,bt=Math.hypot(mt,yt),et=ft+mt/bt*2.2,ct=dt+yt/bt*2.2,Mt=l(et,ct);if(E++%2===0){let G=new Ot(g,p);G.position.set(et,Mt+.45,ct),G.rotation.y=-Math.atan2(k,z),G.castShadow=!0,n.add(G)}else{let G=new Ot(v,M);G.position.set(et,Mt+2,ct),n.add(G);let it=new Ot(y,C);it.position.set(et,Mt+4.1,ct),n.add(it)}}}e.add(n);let b=[],A=0,S=0;for(let x of r)A+=x[0],S+=x[1];A/=r.length,S/=r.length;for(let x=0;x<r.length;x+=Math.max(1,Math.floor(r.length/6))){let T=r[x];b.push([T[0]+(A-T[0])*.2,T[1]+(S-T[1])*.2])}return{group:n,palms:b,center:[A,S]}}function Cd(i,t,e){let n=new se;n.name="campos";for(let s of i.extras.pitches){if(s.k==="track")continue;let r=s.p.slice();r[0][0]===r[r.length-1][0]&&r.pop();let o=Ho(r),a=o.ux,c=o.uz,l=-c,h=a,u=5212730,d=null;if(s.k==="pitch"){let p=document.createElement("canvas");p.width=512,p.height=320;let v=p.getContext("2d");for(let M=0;M<10;M++)v.fillStyle=M%2?"#4f8f3c":"#579a42",v.fillRect(M*51.2,0,51.2,320);v.strokeStyle="#f4f4f4",v.lineWidth=4,v.strokeRect(12,12,488,296),v.beginPath(),v.moveTo(256,12),v.lineTo(256,308),v.stroke(),v.beginPath(),v.arc(256,160,40,0,7),v.stroke(),v.strokeRect(12,95,60,130),v.strokeRect(440,95,60,130),d=new je(p),d.colorSpace=me,u=16777215}else s.k==="swimming_pool"?u=4175584:s.k==="cemetery"?u=12169892:s.k==="track"&&(u=10507578);let f=new te,m=12,_=(p,v)=>{let M=o.cx+a*o.a*p+l*o.b*v,y=o.cz+c*o.a*p+h*o.b*v;return[M,t.at(M,y)+.16,y]};for(let p=0;p<m;p++)for(let v=0;v<m;v++){let M=-1+2*p/m,y=-1+2*(p+1)/m,C=-1+2*v/m,E=-1+2*(v+1)/m;f.quad(_(M,C),_(M,E),_(y,E),_(y,C),[(M+1)/2,(C+1)/2],[(M+1)/2,(E+1)/2],[(y+1)/2,(E+1)/2],[(y+1)/2,(C+1)/2],[1,1,1])}let g=new Ot(f.geometry(),new Nt({color:u,map:d,roughness:s.k==="swimming_pool"?.1:.95,side:Zt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}));if(g.receiveShadow=!0,n.add(g),s.k==="cemetery"){let p=new He(1,.8,2.2),v=Math.floor(o.a*o.b*4/9),M=new Ue(p,new Nt({color:15789800,roughness:.8}),v),y=new ee,C=0;for(let E=-o.a+2;E<o.a-2&&C<v;E+=2.2)for(let b=-o.b+2;b<o.b-2&&C<v;b+=3.4){if(Gt(E*7+b)<.15)continue;let A=o.cx+a*E+l*b,S=o.cz+c*E+h*b;y.makeRotationY(-Math.atan2(c,a)),y.setPosition(A,t.at(A,S)+.4,S),M.setMatrixAt(C++,y)}M.count=C,M.castShadow=!0,n.add(M)}}return e.add(n),n}var Pd=Ae(()=>{Te();fi();Al()});function Hx(i){let t=new Ai;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function lr(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new Jt(n,3)),i}function Ko(i){i=i.map(a=>a.index?a.toNonIndexed():a);let t=i.reduce((a,c)=>a+c.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count;let o=new ie;return o.setAttribute("position",new Jt(e,3)),o.setAttribute("normal",new Jt(n,3)),o.setAttribute("color",new Jt(s,3)),o}function Un(i,t,e,n){let s=new _s(Hx(i),{depth:t-2*e,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:2,steps:1});return s.translate(0,0,-(t-2*e)/2),lr(s,n)}function jo(i,t,e,n,s,r){for(let o of t)for(let a of[-s,s]){let c=new ve(e,e,n,r?8:14);c.rotateX(Math.PI/2),c.translate(o,e,a),i.push(lr(c,Vx));let l=new ve(e*.62,e*.62,n+.02,r?6:10);l.rotateX(Math.PI/2),l.translate(o,e,a),i.push(lr(l,Gx))}}function Oe(i,t,e,n,s,r,o,a){let c=new He(t,e,n);c.translate(s,r,o),i.push(lr(c,a))}function Xx(i){let t=[];return t.push(Un([[-1.95,.32],[1.92,.32],[1.98,.55],[1.9,.82],[1.2,.95],[.55,1],[-1.9,1.02],[-1.98,.7]],1.68,.06,Oi)),t.push(Un([[.62,.98],[-.25,1.42],[-1.55,1.43],[-1.86,1]],1.68-.12,.05,Ul)),t.push(Un([[.5,1.06],[-.28,1.45],[-1.5,1.46],[-1.5,1.4],[-.3,1.39],[.4,1.04]],1.68-.06,.03,Oi)),jo(t,[1.25,-1.25],.31,.2,.72,i),Oe(t,.04,.12,1.3,1.99,.7,0,Nl),Oe(t,.04,.14,1.4,-2,.82,0,$o),Oe(t,.03,.12,.5,-2.01,.55,0,Wx),Oe(t,.06,.16,1.6,1.98,.42,0,Ts),Ko(t)}function qx(i){let t=[];return t.push(Un([[-2.25,.33],[2.15,.33],[2.22,.56],[2.12,.8],[1.2,.92],[-1.6,.98],[-2.22,.95],[-2.28,.62]],1.74,.06,Oi)),t.push(Un([[.95,.93],[.15,1.38],[-.95,1.39],[-1.62,.97]],1.74-.12,.05,Ul)),t.push(Un([[.82,1],[.12,1.41],[-.92,1.42],[-.92,1.36],[.1,1.35],[.74,.98]],1.74-.06,.03,Oi)),jo(t,[1.38,-1.4],.31,.2,.75,i),Oe(t,.04,.12,1.3,2.23,.7,0,Nl),Oe(t,.04,.12,1.5,-2.29,.84,0,$o),Oe(t,.06,.16,1.6,2.2,.42,0,Ts),Ko(t)}function Yx(i){let t=[];return t.push(Un([[-2.5,.42],[2.4,.42],[2.46,.7],[2.35,1],[1.4,1.08],[-2.5,1.08]],1.8,.06,Oi)),t.push(Un([[1.3,1.06],[.7,1.62],[-.6,1.64],[-.75,1.06]],1.8-.1,.05,Ul)),t.push(Un([[1.18,1.1],[.66,1.66],[-.58,1.67],[-.58,1.6],[.62,1.59],[1.1,1.08]],1.8-.04,.03,Oi)),Oe(t,1.65,.08,1.6,-1.65,1,0,Ts),jo(t,[1.55,-1.6],.38,.24,.78,i),Oe(t,.04,.14,1.4,2.47,.85,0,Nl),Oe(t,.04,.2,.2,-2.51,.9,.72,$o),Oe(t,.04,.2,.2,-2.51,.9,-.72,$o),Oe(t,.08,.2,1.7,2.44,.52,0,Ts),Ko(t)}function Zx(i){let t=[];jo(t,[.68,-.68],.3,.1,0,i),t.push(Un([[-.75,.55],[.55,.62],[.7,.95],[.3,.95],[-.1,.82],[-.8,.85]],.32,.04,Oi)),Oe(t,.5,.12,.3,-.35,.92,0,Ts),Oe(t,.06,.06,.7,.62,1.1,0,Ts),Oe(t,.3,.55,.38,-.25,1.25,0,[.25,.3,.4]);let e=new pn(.15,i?6:10,i?5:8);return e.translate(-.18,1.68,0),t.push(lr(e,[.9,.9,.9])),Oe(t,.4,.12,.12,0,1.15,.18,[.25,.3,.4]),Oe(t,.4,.12,.12,0,1.15,-.18,[.25,.3,.4]),Ko(t)}var Oi,Ul,Vx,Gx,Nl,$o,Ts,Wx,cr,Jo,Id=Ae(()=>{Te();fi();Oi=[1,1,1],Ul=[.05,.06,.07],Vx=[.035,.035,.035],Gx=[.55,.55,.56],Nl=[2.2,2.2,2],$o=[.5,.03,.03],Ts=[.08,.08,.08],Wx=[2,2,2];cr=[[.92,.92,.92],[.92,.92,.92],[.92,.92,.92],[.62,.63,.66],[.62,.63,.66],[.04,.04,.05],[.04,.04,.05],[.32,.33,.35],[.5,.05,.04],[.06,.14,.36],[.78,.76,.7],[.2,.24,.2]],Jo=class{constructor(t,e,n,s,r,o=.13,a="high"){this.H=e,this.hf=s;let c=a==="low"||a==="medium";this.roads=t.roads.filter(v=>!["footway","path","track","cycleway","steps"].includes(v.hw)&&v.s!=="dirt"&&v.p.length>1);let l=v=>Math.round(v[0]*2)+","+Math.round(v[1]*2);this.key=l,this.idx=new Map,this.roads.forEach((v,M)=>{v.len=[];for(let y=0;y<v.p.length-1;y++)v.len.push(Math.hypot(v.p[y+1][0]-v.p[y][0],v.p[y+1][1]-v.p[y][1]));v.p.forEach((y,C)=>{let E=l(y);this.idx.has(E)||this.idx.set(E,[]),this.idx.get(E).push([M,C])})});let h=this.roads.map(v=>(v.s==="asphalt"?3:1)*v.len.reduce((M,y)=>M+y,0)),u=h.reduce((v,M)=>v+M,0);this.geos=[Xx(c),qx(c),Yx(c),Zx(c)];let d=[.42,.2,.16,.22],f=v=>{let M=0;for(let y=0;y<4;y++)if(M+=d[y],v<M)return y;return 0};this.cars=[];for(let v=0;v<r;v++){let M=Gt(v*3.7+1)*u,y=0;for(;M>h[y]&&y<h.length-1;)M-=h[y],y++;let C=this.roads[y],E=Math.floor(Gt(v*9.1)*(C.p.length-1)),b=C.o||Gt(v*1.3)<.5?1:-1;this.cars.push({ri:y,i:b>0?E:E+1,t:Gt(v*5.5),dir:b,v:0,type:f(Gt(v*4.4)),col:cr[Math.floor(Gt(v*2.2)*cr.length)]})}let m=new Nt({vertexColors:!0,roughness:.3,metalness:.45});this.mat=m,this.mesh=new se,this.mesh.name="carros",n.add(this.mesh),this.meshes=this.geos.map((v,M)=>{let y=this.cars.filter(E=>E.type===M).length,C=new Ue(v,m,Math.max(1,y));return C.count=y,C.castShadow=!0,C.receiveShadow=!0,this.mesh.add(C),C});let _=new qt,g=[0,0,0,0];this.cars.forEach(v=>{v.slot=g[v.type]++,_.setRGB(...v.type===3?[.6+.4*Gt(v.slot),.1,.1]:v.col),this.meshes[v.type].setColorAt(v.slot,_)}),this.M=new ee,this.Q=new be,this.P=new U,this.S=new U(1,1,1),this.Y=new U(0,1,0),this.E=new dn,this.tick(.01);let p=[[],[],[]];this.roads.forEach((v,M)=>{if(!(!["residential","tertiary","unclassified"].includes(v.hw)||v.b||v.id===1314627854||v.id===1314627855))for(let y=0;y<v.p.length-1;y++){let C=v.len[y],E=v.p[y],b=v.p[y+1],A=(b[0]-E[0])/C,S=(b[1]-E[1])/C;for(let x=8;x<C-8;x+=6)for(let T of[-1,1]){if(Gt(M*31+y*7+x*1.7+T)>o)continue;let L=T*(v.w/2-1.1),I=E[0]+A*x-S*L,z=E[1]+S*x+A*L,k=Gt(M+x*.3+T);p[k<.55?0:k<.8?1:2].push([I,z,Math.atan2(S,A)+(Gt(x+M)<.5?0:Math.PI),Gt(M+x)])}}}),this.parked=new se,p.forEach((v,M)=>{if(!v.length)return;let y=new Ue(this.geos[M],m,v.length);v.forEach(([C,E,b,A],S)=>{this.Q.setFromAxisAngle(this.Y,-b),this.P.set(C,e.at(C,E)+.1,E),this.M.compose(this.P,this.Q,this.S),y.setMatrixAt(S,this.M),_.setRGB(...cr[Math.floor(A*cr.length)%cr.length]),y.setColorAt(S,_)}),y.castShadow=!0,y.receiveShadow=!0,this.parked.add(y)}),n.add(this.parked)}speed(t,e){return(e&&e.type===3?1.1:1)*(t.hw==="trunk"?15:t.hw==="tertiary"||t.hw==="trunk_link"?10:7)}tick(t){let e=this.M;this.cars.forEach((n,s)=>{let r=this.roads[n.ri],o=this.speed(r,n)*(.8+.4*Gt(s));n.v+=(o-n.v)*Math.min(1,t*.8);let a=n.v*t,c=0;for(;a>0&&c++<20;){let A=n.i,S=n.i+n.dir;if(S<0||S>=r.p.length){this.junction(n),r=this.roads[n.ri];continue}let x=r.len[Math.min(A,S)],T=(1-n.t)*x;a<T?(n.t+=a/x,a=0):(a-=T,n.i=S,n.t=0,this.junction(n,!0),r=this.roads[n.ri])}r=this.roads[n.ri];let l=n.i,h=n.i+n.dir;(h<0||h>=r.p.length)&&(h=l,l=l-n.dir);let u=r.p[l],d=r.p[h],f=u[0]+(d[0]-u[0])*n.t,m=u[1]+(d[1]-u[1])*n.t,_=d[0]-u[0],g=d[1]-u[1],p=Math.hypot(_,g)||1,v=r.o?0:Math.min(1.8,r.w/4)*(n.type===3?1.25:1),M=f-g/p*v,y=m+_/p*v,C=this.hf(r,M,y),E=this.hf(r,M+_/p*2,y+g/p*2),b=this.hf(r,M-_/p*2,y-g/p*2);this.E.set(0,-Math.atan2(g,_),Math.atan2(E-b,4),"YXZ"),this.Q.setFromEuler(this.E),this.P.set(M,C,y),e.compose(this.P,this.Q,this.S),this.meshes[n.type].setMatrixAt(n.slot,e)}),this.meshes.forEach(n=>n.instanceMatrix.needsUpdate=!0)}junction(t,e){let n=this.roads[t.ri],s=n.p[t.i],r=this.idx.get(this.key(s))||[],o=[];for(let[c,l]of r){let h=this.roads[c];l+1<h.p.length&&!(c===t.ri&&t.dir<0&&l===t.i)&&o.push([c,l,1]),l-1>=0&&!h.o&&!(c===t.ri&&t.dir>0&&l===t.i)&&o.push([c,l,-1])}if(e){let c=t.i+t.dir;if(c>=0&&c<n.p.length&&(o.length<=1||Math.random()<.7))return}if(!o.length){t.dir=n.o?1:-t.dir,n.o&&(t.i=0);return}let a=o[Math.floor(Math.random()*o.length)];t.ri=a[0],t.i=a[1],t.dir=a[2],t.t=0}}});var Qo,Ld=Ae(()=>{Te();Qo=class{constructor(t){this.root=t,this.items=[],this.v=new U}add(t,e,n="lbl",s=4e3,r=null){let o=document.createElement("div");o.className=n,o.textContent=t,this.root.appendChild(o);let a={el:o,pos:e.clone?e:new U(...e),maxDist:s,visible:!0,group:n};return r&&(o.style.pointerEvents="auto",o.style.cursor="pointer",o.addEventListener("click",c=>{c.stopPropagation(),r()})),this.items.push(a),a}remove(t){t.el.remove(),this.items=this.items.filter(e=>e!==t)}update(t,e,n){let s=[],r=[];for(let o of this.items){if(!o.visible){o.el.style.display="none";continue}this.v.copy(o.pos);let a=this.v.distanceTo(t.position);if(this.v.project(t),this.v.z>1||a>o.maxDist||Math.abs(this.v.x)>1.1||Math.abs(this.v.y)>1.1){o.el.style.display="none";continue}r.push({it:o,d:a,x:(this.v.x*.5+.5)*e,y:(-this.v.y*.5+.5)*n})}r.sort((o,a)=>(a.it.group==="lbl mark")-(o.it.group==="lbl mark")||o.d-a.d);for(let o of r){let a=(o.it.el.textContent.length*6.6+18)/2,l=[o.x-a,o.y-22,o.x+a,o.y];if(o.it.group!=="lbl mark"&&s.some(u=>l[0]<u[2]&&l[2]>u[0]&&l[1]<u[3]&&l[3]>u[1])){o.it.el.style.display="none";continue}s.push(l);let h=o.it;h.el.style.display="block",h.el.style.transform=`translate(-50%,-100%) translate(${o.x}px,${o.y}px)`,h.el.style.opacity=Math.max(.35,Math.min(1,1.6-o.d/h.maxDist))}}setGroupVisible(t,e){for(let n of this.items)n.group===t&&(n.visible=e)}}});var Dd,$x,ta,ea,Ud=Ae(()=>{Te();Dd="aimores3d_marcadores_v1",$x=[["Verde","#22c55e"],["Roxo","#a855f7"],["Azul","#3b82f6"],["Vermelho","#ef4444"],["Laranja","#f97316"],["Amarelo","#eab308"],["Rosa","#ec4899"],["Ciano","#06b6d4"],["Branco","#f8fafc"],["Preto","#111827"]],ta=()=>Math.random().toString(36).slice(2,10),ea=class{constructor(t){Object.assign(this,t),this.group=new se,this.group.name="marcadores",this.scene.add(this.group),this.state=this.load(),this.mode="nav",this.selCat=this.state.cats[0]?.id||null,this.objs=new Map,this.ray=new ys,this.mouse=new _t,this.headGeo=new pn(1,20,14),this.stickGeo=new ve(.09,.09,1,8),this.stickGeo.translate(0,.5,0),this.ringGeo=new xo(.8,1.2,24),this.ringGeo.rotateX(-Math.PI/2),this.state.marks.forEach(e=>this.makeObj(e)),this.bindCanvas(),this.render()}load(){try{let t=JSON.parse(localStorage.getItem(Dd));if(t&&t.cats&&t.marks)return t}catch{}return{cats:[{id:ta(),name:"Ponto cego",color:"#ef4444",limit:null},{id:ta(),name:"Ponto de interesse",color:"#3b82f6",limit:null}],marks:[]}}save(){localStorage.setItem(Dd,JSON.stringify(this.state))}cat(t){return this.state.cats.find(e=>e.id===t)}count(t){return this.state.marks.filter(e=>e.cat===t).length}makeObj(t){let e=this.cat(t.cat);if(!e)return;let n=new qt(e.color),s=new se,r=new Nt({color:n,emissive:n,emissiveIntensity:.35,roughness:.4}),o=new Ot(this.headGeo,r);o.position.y=7,o.userData.markId=t.id;let a=new Ot(this.stickGeo,new Nt({color:16777215,roughness:.5}));a.scale.y=6.2;let c=new Ot(this.ringGeo,new fs({color:n,transparent:!0,opacity:.85,depthWrite:!1}));c.position.y=.3,s.add(o,a,c),s.position.set(t.x,t.y,t.z),s.userData.markId=t.id,o.castShadow=!0,this.group.add(s);let l=this.labels.add(t.name,new U(t.x,t.y+9,t.z),"lbl mark",6e3,()=>this.select(t.id));l.el.style.borderColor=e.color,this.objs.set(t.id,{g:s,head:o,lbl:l,mat:r,ring:c})}removeObj(t){let e=this.objs.get(t);e&&(this.group.remove(e.g),this.labels.remove(e.lbl),this.objs.delete(t))}refreshObj(t){this.removeObj(t.id),this.makeObj(t)}tickScale(t){for(let[e,n]of this.objs){let s=t.position.distanceTo(n.g.position),r=Math.max(.5,Math.min(8,s/160));n.g.scale.setScalar(r),n.lbl.pos.set(n.g.position.x,n.g.position.y+8.3*r,n.g.position.z)}}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect();return this.mouse.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.mouse,this.camera),this.ray.intersectObjects(e,!0)[0]}bindCanvas(){let t=this.renderer.domElement,e=null,n=null;t.addEventListener("pointerdown",s=>{if(e={x:s.clientX,y:s.clientY},this.mode==="move"){let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&(n=r.object.userData.markId,this.controls.enabled=!1,t.setPointerCapture(s.pointerId))}}),t.addEventListener("pointermove",s=>{if(!n)return;let r=this.pick(s,this.pickTargets());if(r){let o=this.state.marks.find(a=>a.id===n);o.x=r.point.x,o.y=r.point.y,o.z=r.point.z,this.objs.get(n).g.position.copy(r.point)}}),t.addEventListener("pointerup",s=>{if(n){n=null,this.controls.enabled=!0,this.save(),this.render();return}if(!(!e||Math.hypot(s.clientX-e.x,s.clientY-e.y)>6))if(this.mode==="place"){let r=this.cat(this.selCat);if(!r){this.toast("Escolha uma categoria primeiro");return}if(r.limit&&this.count(r.id)>=r.limit){this.toast(`Limite de ${r.limit} marcador(es) para "${r.name}" atingido`);return}let o=this.pick(s,this.pickTargets());if(!o)return;let a=this.count(r.id)+1,c={id:ta(),cat:r.id,name:`${r.name} ${a}`,x:+o.point.x.toFixed(2),y:+o.point.y.toFixed(2),z:+o.point.z.toFixed(2),note:"",ts:Date.now()};this.state.marks.push(c),this.makeObj(c),this.save(),this.render(),this.selMark=c.id,this.render()}else{let r=this.pick(s,[...this.objs.values()].map(o=>o.head));r&&this.select(r.object.userData.markId)}})}select(t){this.selMark=t,this.render();let e=this.objs.get(t);e&&(e.mat.emissiveIntensity=1,setTimeout(()=>e.mat.emissiveIntensity=.35,600))}setMode(t){this.mode=t,this.onMode&&setTimeout(()=>this.onMode(t),0),this.renderer.domElement.style.cursor=t==="place"?"crosshair":t==="move"?"grab":"",this.render()}toast(t){let e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>e.classList.remove("show"),2600)}latlon(t){let e=this.H;return[(e.LAT0-t.z/e.KZ).toFixed(6),(e.LON0+t.x/e.KX).toFixed(6)]}render(){let t=this.panel,e=this.state,n=c=>String(c).replace(/[&<>"]/g,l=>"&#"+l.charCodeAt(0)+";"),s=`<div class="modes"><button data-mode="nav" class="${this.mode==="nav"?"on":""}">\u{1F590} Navegar</button><button data-mode="place" class="${this.mode==="place"?"on":""}">\u{1F4CD} Colocar</button><button data-mode="move" class="${this.mode==="move"?"on":""}">\u2725 Mover</button></div>`;s+=`<div class="hint">${this.mode==="place"?innerWidth<=760?"Escolha a categoria e toque no mapa para colocar.":"Escolha a categoria e clique no mapa para colocar.":this.mode==="move"?"Arraste a bolinha do marcador para mudar de lugar.":"Clique num marcador para ver/editar."}</div>`,s+='<h3>Categorias</h3><div class="cats">';for(let c of e.cats){let l=this.count(c.id);s+=`<div class="cat ${c.id===this.selCat?"sel":""}" data-cat="${c.id}"><span class="sw" style="background:${c.color}"></span><span class="nm">${n(c.name)}</span><span class="ct">${l}${c.limit?"/"+c.limit:""}</span><button class="ic" data-editcat="${c.id}" title="Editar">\u270E</button><button class="ic" data-delcat="${c.id}" title="Apagar">\u{1F5D1}</button></div>`,this.editCat===c.id&&(s+=`<div class="form"><input id="ec_name" value="${n(c.name)}" placeholder="Nome"><input id="ec_color" type="color" value="${c.color}"><input id="ec_limit" type="number" min="1" value="${c.limit||""}" placeholder="Qtd. m\xE1x (opcional)"><button id="ec_ok">Salvar</button></div>`)}s+=`</div><details ${this.openNew?"open":""} id="newcat"><summary>+ Nova categoria</summary><div class="form"><div class="presets">${$x.map(([c,l])=>`<span class="sw pick" title="${c}" data-color="${l}" style="background:${l}"></span>`).join("")}</div>
      <input id="nc_name" placeholder="Nome (ex.: ferreiro)"><input id="nc_color" type="color" value="#22c55e"><input id="nc_limit" type="number" min="1" placeholder="Quantos? (vazio = sem limite)"><button id="nc_ok">Criar categoria</button></div></details>`,s+=`<h3>Marcadores (${e.marks.length})</h3><div class="marks">`;for(let c of e.cats){let l=e.marks.filter(h=>h.cat===c.id);if(l.length){s+=`<div class="mgrp"><span class="sw" style="background:${c.color}"></span>${n(c.name)}</div>`;for(let h of l)if(s+=`<div class="mk ${h.id===this.selMark?"sel":""}" data-mark="${h.id}"><span class="nm">${n(h.name)}</span><button class="ic" data-fly="${h.id}" title="Ir at\xE9">\u{1F441}</button><button class="ic" data-delmark="${h.id}" title="Apagar">\u{1F5D1}</button></div>`,h.id===this.selMark){let[u,d]=this.latlon(h);s+=`<div class="form"><input id="em_name" value="${n(h.name)}"><select id="em_cat">${e.cats.map(f=>`<option value="${f.id}" ${f.id===h.cat?"selected":""}>${n(f.name)}</option>`).join("")}</select><textarea id="em_note" placeholder="Observa\xE7\xE3o">${n(h.note||"")}</textarea><div class="coord">${u}, ${d}</div><button id="em_ok">Salvar</button></div>`}}}s+='</div><div class="io"><button id="exp">\u2B07 Exportar</button><label class="btn">\u2B06 Importar<input id="imp" type="file" accept=".json,application/json" hidden></label><button id="clr">Limpar</button></div>',t.innerHTML=s;let r=document.getElementById("mkstatus");if(r){let c=this.cat(this.selCat);r.textContent=this.mode==="place"&&c?`Colocando: ${c.name}`:this.mode==="move"?"Modo mover":`${e.marks.length} marcador(es)`}t.querySelectorAll("[data-mode]").forEach(c=>c.onclick=()=>this.setMode(c.dataset.mode)),t.querySelectorAll(".cat").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selCat=c.dataset.cat,this.mode==="nav"?this.setMode("place"):this.render())}),t.querySelectorAll("[data-editcat]").forEach(c=>c.onclick=()=>{this.editCat=this.editCat===c.dataset.editcat?null:c.dataset.editcat,this.render()}),t.querySelectorAll("[data-delcat]").forEach(c=>c.onclick=()=>{let l=this.cat(c.dataset.delcat),h=this.count(l.id);confirm(`Apagar a categoria "${l.name}"${h?` e seus ${h} marcador(es)`:""}?`)&&(e.marks.filter(u=>u.cat===l.id).forEach(u=>this.removeObj(u.id)),e.marks=e.marks.filter(u=>u.cat!==l.id),e.cats=e.cats.filter(u=>u!==l),this.selCat===l.id&&(this.selCat=e.cats[0]?.id),this.save(),this.render())});let o=t.querySelector("#ec_ok");o&&(o.onclick=()=>{let c=this.cat(this.editCat);c.name=t.querySelector("#ec_name").value.trim()||c.name,c.color=t.querySelector("#ec_color").value;let l=parseInt(t.querySelector("#ec_limit").value);c.limit=l>0?l:null,this.editCat=null,e.marks.filter(h=>h.cat===c.id).forEach(h=>this.refreshObj(h)),this.save(),this.render()}),t.querySelectorAll(".pick").forEach(c=>c.onclick=()=>{t.querySelector("#nc_color").value=c.dataset.color;let l=t.querySelector("#nc_name");l.value||(l.placeholder=`Nome (cor ${c.title.toLowerCase()})`)}),t.querySelector("#newcat").ontoggle=c=>{this.openNew=c.target.open},t.querySelector("#nc_ok").onclick=()=>{let c=t.querySelector("#nc_name").value.trim();if(!c){this.toast("D\xEA um nome para a categoria");return}let l=parseInt(t.querySelector("#nc_limit").value),h={id:ta(),name:c,color:t.querySelector("#nc_color").value,limit:l>0?l:null};e.cats.push(h),this.selCat=h.id,this.openNew=!1,this.save(),this.setMode("place"),this.toast(`Categoria "${c}" criada. Clique no mapa para colocar.`)},t.querySelectorAll(".mk").forEach(c=>c.onclick=l=>{l.target.closest("button")||(this.selMark=this.selMark===c.dataset.mark?null:c.dataset.mark,this.render())}),t.querySelectorAll("[data-fly]").forEach(c=>c.onclick=()=>{let l=e.marks.find(h=>h.id===c.dataset.fly);this.flyTo(new U(l.x,l.y,l.z),120),this.select(l.id)}),t.querySelectorAll("[data-delmark]").forEach(c=>c.onclick=()=>{let l=c.dataset.delmark;this.removeObj(l),e.marks=e.marks.filter(h=>h.id!==l),this.save(),this.render()});let a=t.querySelector("#em_ok");a&&(a.onclick=()=>{let c=e.marks.find(l=>l.id===this.selMark);c.name=t.querySelector("#em_name").value.trim()||c.name,c.cat=t.querySelector("#em_cat").value,c.note=t.querySelector("#em_note").value,this.refreshObj(c),this.save(),this.render(),this.toast("Marcador salvo")}),t.querySelector("#exp").onclick=()=>{let c=JSON.parse(JSON.stringify(e));c.marks.forEach(u=>{let[d,f]=this.latlon(u);u.lat=+d,u.lon=+f});let l=new Blob([JSON.stringify({app:"aimores-3d",version:1,exported:new Date().toISOString(),...c},null,2)],{type:"application/json"}),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download="marcadores-aimores.json",h.click()},t.querySelector("#imp").onchange=c=>{let l=c.target.files[0];l&&l.text().then(h=>{try{let u=JSON.parse(h);if(!u.cats||!u.marks)throw 0;confirm("Substituir os marcadores atuais? (Cancelar = juntar com os atuais)")&&(e.marks.forEach(_=>this.removeObj(_.id)),e.cats=[],e.marks=[]);let f=new Set(e.cats.map(_=>_.id));u.cats.forEach(_=>{f.has(_.id)||e.cats.push({id:_.id,name:_.name,color:_.color,limit:_.limit||null})});let m=new Set(e.marks.map(_=>_.id));u.marks.forEach(_=>{if(m.has(_.id))return;let g={id:_.id,cat:_.cat,name:_.name,x:_.x,y:_.y,z:_.z,note:_.note||"",ts:_.ts||Date.now()};e.marks.push(g),this.makeObj(g)}),this.selCat=e.cats[0]?.id,this.save(),this.render(),this.toast("Importado!")}catch{this.toast("Arquivo inv\xE1lido")}})},t.querySelector("#clr").onclick=()=>{confirm("Apagar TODOS os marcadores? (as categorias ficam)")&&(e.marks.forEach(c=>this.removeObj(c.id)),e.marks=[],this.save(),this.render())}}}});var Kx=zd(()=>{Te();Du();Uu();Ku();ad();Cl();fd();Pl();bd();Td();Pd();Id();Ld();Ud();var As=window.AIMORES,Nd=new URLSearchParams(location.search).has("shot"),fe=As.city,Fl=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700,hr=new URLSearchParams(location.search),Ve=hr.get("q")||localStorage.getItem("aimores3d_q")||(Fl?"medium":"high");["low","medium","high","ultra"].includes(Ve)||(Ve=Fl?"medium":"high");var pi=async i=>{document.getElementById("loadmsg").textContent=i,await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)))};async function Jx(){await pi("Preparando o relevo\u2026");let i=new no({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:hr.has("shot")});i.setPixelRatio(Math.min(devicePixelRatio,{low:1,medium:1.5,high:2,ultra:2}[Ve])),i.setSize(innerWidth,innerHeight),i.toneMapping=ol,i.toneMappingExposure=.62,i.outputColorSpace=me,i.shadowMap.enabled=Ve!=="low",i.shadowMap.type=rl,document.getElementById("app").appendChild(i.domElement);let t=new Js,e=new qe(48,innerWidth/innerHeight,1.5,4e4),n=new Lo(e,i.domElement);n.enableDamping=!0,n.dampingFactor=.08,n.maxPolarAngle=Math.PI*.47,n.minDistance=10,n.maxDistance=7e3,n.screenSpacePanning=!1,n.zoomToCursor=!0;let s=new zo(fe.meta,ko(As.height)),r=ko(As.meshes),o=new Ss;o.scale.setScalar(45e4),t.add(o);let a=o.material.uniforms;a.turbidity.value=2.6,a.rayleigh.value=2,a.mieCoefficient.value=.0035,a.mieDirectionalG.value=.82;let c=new Eo(16773596,2.6);c.castShadow=!0;let l={low:1024,medium:2048,high:4096,ultra:8192}[Ve];c.shadow.mapSize.set(l,l),c.shadow.bias=-4e-4,c.shadow.normalBias=.6,t.add(c),t.add(c.target);let h=new So(13624319,7035456,.9);t.add(h);let u=new gs(i),d=null,f=new Js,m=new Ss;m.scale.setScalar(1e3),f.add(m),t.fog=new io(13227746,2200,24e3),o.visible=!1;let _=wd(Ve);t.add(_);let g=new U;function p(K){let Et=(K-6)/12,wt=Math.sin(Math.PI*Et)*68+2,Rt=-75+Et*150,O=or.degToRad(90-wt),St=or.degToRad(Rt+180);g.setFromSphericalCoords(1,O,St),a.sunPosition.value.copy(g);for(let lt of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])m.material.uniforms[lt].value=a[lt].value;m.material.uniforms.sunPosition.value.copy(g),d&&d.dispose(),d=u.fromScene(f,0,1,3e4),t.environment=d.texture,t.environmentIntensity=.55;let Q=Math.max(0,Math.min(1,wt/25));c.color.setRGB(1,.72+.26*Q,.5+.42*Q),c.intensity=.6+2.2*Math.max(0,Math.min(1,wt/35)),h.intensity=.35+.6*Q,t.fog.color.setRGB(.48+.08*Q,.58+.07*Q,.74+.06*Q),_.material.uniforms.sunDir.value.copy(g),_.material.uniforms.day.value=Math.max(.15,Math.min(1,(wt+4)/20)),i.toneMappingExposure=.5+.15*Q}p(+(hr.get("h")||15.5)),await pi("Montando terreno e serras ao redor\u2026");let v=await new sr().loadAsync(As.ground);if(Ve==="low"){let K=v.image,Et=document.createElement("canvas");Et.width=2048,Et.height=Math.round(2048*K.height/K.width),Et.getContext("2d").drawImage(K,0,0,Et.width,Et.height),v=new je(Et)}v.colorSpace=me,v.anisotropy=i.capabilities.getMaxAnisotropy();let M=$u(s,v,Ve);t.add(M);let y=await new sr().loadAsync(As.backtex);y.colorSpace=me,y.anisotropy=8;let C=Ju(fe.meta,ko(As.back),s,y);t.add(C),await pi("Ruas, cal\xE7adas e meio-fio\u2026");let E=sd(fe,s,r,t),b=rd(fe,s,r,t);await pi("Igreja, pra\xE7a e campos\u2026");let A=Ad(fe,s,t),S=Rd(fe,s,t);Cd(fe,s,t),await pi("Casas, telhados e muros\u2026");let x=A.center,T=A.radius,L=A.frame,z=id(fe,s,t,K=>{let Et=0,wt=0;for(let lt of K.p)Et+=lt[0],wt+=lt[1];Et/=K.p.length,wt/=K.p.length;let Rt=Et-L.C[0],O=wt-L.C[1],St=Rt*L.f[0]+O*L.f[1],Q=Rt*L.r[0]+O*L.r[1];return Math.abs(Q)<L.fx+2&&St>L.fz0-2&&St<L.fz1+2},Ve),k=od(fe,s,t);await pi("Ferrovia Vit\xF3ria-Minas, viaduto e passarelas\u2026");let B=yd(fe,s,t),Z=Md(B.paths,t),N=Ed(fe,s,t,B.paths),ft=Sd(fe,s,t,fe.viaduct.railtop);await pi("\xC1rvores\u2026");let dt=dd(fe,s,t,Ve,S?S.palms:[]);await pi("Tr\xE2nsito\u2026");let mt=new Map,yt=fe.viaduct,bt=yt.ramps.map(K=>new Dn(K.pts,K.h)),et=(K,Et)=>{let wt=1e9,Rt=null;for(let O of bt)for(let St=0;St<O.L;St+=3){let Q=O.at(St),lt=Math.hypot(Q[0]-K,Q[2]-Et);lt<wt&&(wt=lt,Rt=Q[1])}return wt<7?Rt:null},ct=(K,Et,wt)=>{if(K.id===1314627853)return yt.h+.05;if(K.id===1314627855||K.id===1314627854){let Rt=et(Et,wt);if(Rt!==null)return Rt+.2}return s.at(Et,wt)+.1},Mt=new Jo(fe,s,t,ct,{low:60,medium:110,high:170,ultra:220}[Ve],{low:.03,medium:.05}[Ve]||.11,Ve),G=new Qo(document.getElementById("labels"));for(let[K,Et]of Object.entries(fe.neigh)){if(Et.area<2e4)continue;let[wt,Rt]=Et.label;G.add(K==="Nilton Freire Sampaio"?"Residencial Nilton Freire Sampaio":K,new U(wt,s.at(wt,Rt)+40,Rt),"lbl nb",3500)}for(let[K,Et,wt]of fe.extras.poi){let Rt=K.startsWith("Viaduto")?yt.h+12:s.at(Et,wt)+(K.startsWith("Igreja")?42:18);G.add(K.replace("Estadio","Est\xE1dio"),new U(Et,Rt,wt),"lbl poi",2600)}let it=new se;it.name="limites";let pt=[16765286,448160,15681391,1149618,16223339,13073919,9485933,16369487],q=0;for(let[K,Et]of Object.entries(fe.neigh)){let wt=pt[q++%pt.length];for(let Rt of Et.rings){let O=[];for(let lt=0;lt<Rt.length-1;lt++){let[Pt,It]=Rt[lt],[Yt,ce]=Rt[lt+1],Me=Math.hypot(Yt-Pt,ce-It);for(let ne=0;ne<Me;ne+=4){let Fe=Pt+(Yt-Pt)*ne/Me,Ge=It+(ce-It)*ne/Me;O.push(new U(Fe,s.at(Fe,Ge)+1.2,Ge))}}if(O.length<2)continue;O.push(O[0].clone());let St=new ie().setFromPoints(O),Q=new ao(St,new yo({color:wt,dashSize:8,gapSize:5,transparent:!0,opacity:.9,depthTest:!0}));Q.computeLineDistances(),it.add(Q)}}it.visible=!1,t.add(it);let Tt=K=>{let Et=fe.neigh[K];return Et?Et.label:[0,0]},st={geral:{t:[-120,0,120],d:2300,pol:.95,az:-.35},rua:{t:(()=>{let K=fe.neigh["Nilton Freire Sampaio"].label,Et=null,wt=1e9;for(let Rt of fe.roads)if(Rt.s==="paver")for(let O of Rt.p){let St=Math.hypot(O[0]-K[0],O[1]-K[1]);St<wt&&(wt=St,Et=O)}return[Et[0],0,Et[1]]})(),d:26,pol:1.38,az:.6},panorama:{t:[-300,0,150],d:1500,pol:1.33,az:-.25},viaduto:{t:[N.center[0],N.center[1]-3,N.center[2]],d:120,pol:1.22,az:(()=>{let[K,Et]=fe.viaduct.deck,wt=Et[0]-K[0],Rt=Et[1]-K[1],O=Math.hypot(wt,Rt),St=-Rt/O,Q=wt/O,lt=St*.85+wt/O*.5,Pt=Q*.85+Rt/O*.5;return Math.atan2(lt,Pt)})()},igreja:{t:[A.center[0],s.at(A.center[0],A.center[1]),A.center[1]],d:120,pol:1.05,az:Math.atan2(A.front[0],A.front[1])},praca:{t:[S.center[0],s.at(S.center[0],S.center[1]),S.center[1]],d:95,pol:.9,az:.5},residencial:{t:[Tt("Nilton Freire Sampaio")[0],0,Tt("Nilton Freire Sampaio")[1]],d:380,pol:.85,az:-.3},triangulo:{t:[Tt("Tri\xE2ngulo")[0],0,Tt("Tri\xE2ngulo")[1]],d:420,pol:.9,az:.3},sossego:{t:[Tt("Sossego")[0],0,Tt("Sossego")[1]],d:330,pol:.85,az:-.6},hospital:{t:[...(()=>{let K=fe.extras.poi.find(Et=>Et[0].startsWith("Hospital"));return[K[1],0,K[2]]})()],d:420,pol:.9,az:.6}},ht=null;function D(K,Et=200,wt=1,Rt=null){let O=K.clone?K.clone():new U(...K);O.y||(O.y=s.at(O.x,O.z));let St=e.position.clone().sub(n.target),Q=new Zn().setFromVector3(St);Rt===null&&(Rt=Q.theta);let lt=new U().setFromSpherical(new Zn(Et,wt,Rt)).add(O);ht={t0:performance.now(),dur:1600,fromP:e.position.clone(),fromT:n.target.clone(),toP:lt,toT:O}}function ut(K,Et){if(K==="rua"){let O=fe.neigh["Nilton Freire Sampaio"].label,St=null,Q=1e9;for(let Jn of fe.roads)if(Jn.s==="paver")for(let Kn=0;Kn<Jn.p.length-1;Kn++){let Rn=Jn.p[Kn],Bi=Math.hypot(Rn[0]-O[0],Rn[1]-O[1]);Bi<Q&&(Q=Bi,St=[Jn.p[Kn],Jn.p[Kn+1]])}let[lt,Pt]=St,It=Pt[0]-lt[0],Yt=Pt[1]-lt[1],ce=Math.hypot(It,Yt),Me=lt[0]+It/ce*30,ne=lt[1]+Yt/ce*30,Fe=new U(Me,s.at(Me,ne)+1.5,ne),Ge=new U(lt[0]-It/ce*6,s.at(lt[0],lt[1])+5,lt[1]-Yt/ce*6);Et?(n.target.copy(Fe),e.position.copy(Ge),n.update()):ht={t0:performance.now(),dur:1600,fromP:e.position.clone(),fromT:n.target.clone(),toP:Ge,toT:Fe};return}let wt=st[K],Rt=new U(...wt.t);wt.t[1]||(Rt.y=s.at(Rt.x,Rt.z)),Et?(n.target.copy(Rt),e.position.copy(new U().setFromSpherical(new Zn(wt.d,wt.pol,wt.az)).add(Rt)),n.update()):D(Rt,wt.d,wt.pol,wt.az)}ut(hr.get("view")||"geral",!0),i.domElement.addEventListener("dblclick",K=>{let Et=i.domElement.getBoundingClientRect(),wt=new _t((K.clientX-Et.left)/Et.width*2-1,-((K.clientY-Et.top)/Et.height)*2+1),Rt=new ys;Rt.setFromCamera(wt,e);let O=Rt.intersectObjects([M,E],!0)[0];O&&D(O.point.clone().add(new U(0,1.6,0)),25,1.45)});let H=()=>[M,E,z,k,A.group,N.group,ft],j=new ea({scene:t,camera:e,renderer:i,controls:n,labels:G,pickTargets:H,H:s,flyTo:D,panel:document.getElementById("mkbody")});document.querySelectorAll("[data-view]").forEach(K=>K.onclick=()=>ut(K.dataset.view));let tt=(K,Et)=>{let wt=document.getElementById(K);wt.onchange=()=>Et(wt.checked),Et(wt.checked)};tt("t_cars",K=>{Mt.mesh.visible=K,Mt.parked.visible=K}),tt("t_train",K=>{Z.group.userData.off=!K}),tt("t_labels",K=>{G.setGroupVisible("lbl nb",K),G.setGroupVisible("lbl poi",K)}),tt("t_limits",K=>{it.visible=K}),tt("t_trees",K=>{dt.visible=K}),tt("t_shadows",K=>{c.castShadow=K&&Ve!=="low"});let nt=document.getElementById("hour");nt.value=hr.get("h")||15.5;let V=document.getElementById("hourlbl"),R=K=>`${Math.floor(K)}:${String(Math.round(K%1*60)).padStart(2,"0")}`;V.textContent=R(+nt.value);let w=null;nt.oninput=()=>{V.textContent=R(+nt.value),clearTimeout(w),w=setTimeout(()=>p(+nt.value),60)};let F=document.getElementById("quality");F.value=Ve,F.onchange=()=>{localStorage.setItem("aimores3d_q",F.value),location.search="?q="+F.value};let $=document.getElementById("mkpanel");document.getElementById("mkhead").onclick=()=>$.classList.toggle("closed"),j.onMode=K=>{innerWidth<=760&&K!=="nav"&&!j.state.marks.length&&K==="place"&&$.classList.add("closed"),innerWidth<=760&&K==="place"&&($.classList.add("closed"),j.toast("Toque no mapa para colocar o pino"))};let J=document.getElementById("touchmode"),Y=!1,xt=()=>{n.touches={ONE:Y?Qe.ROTATE:Qe.PAN,TWO:Qe.DOLLY_ROTATE},J.textContent=Y?"\u{1F504} 1 dedo: girar":"\u270B 1 dedo: mover",J.classList.toggle("on",Y)};xt(),J.onclick=()=>{Y=!Y,xt()},document.getElementById("layersbtn").onclick=()=>{document.getElementById("layers").classList.toggle("open"),document.getElementById("layersbtn").classList.toggle("on")},Fl&&document.getElementById("mkpanel").classList.add("closed"),document.getElementById("helpbtn").onclick=()=>document.getElementById("help").classList.toggle("show"),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight)});let rt=new bo,gt=0,At=null,vt=0,Lt=0,Bt=new bn(new U(s.XMIN-300,-1e4,s.ZMIN-300),new U(s.XMAX+300,1e4,s.ZMAX+300));function zt(){let K=Nd?.05:Math.min(.05,rt.getDelta());if(gt+=K,ht){let St=Math.min(1,(performance.now()-ht.t0)/ht.dur),Q=St<.5?4*St*St*St:1-Math.pow(-2*St+2,3)/2;e.position.lerpVectors(ht.fromP,ht.toP,Q),n.target.lerpVectors(ht.fromT,ht.toT,Q),St>=1&&(ht=null)}n.update(),n.target.clamp(Bt.min,Bt.max),_.position.copy(e.position);let Et=s.at(e.position.x,e.position.z);e.position.y<Et+2&&(e.position.y=Et+2),Mt.mesh.visible&&Mt.tick(K),Z.group.userData.off?Z.group.visible=!1:Z.tick(K),b&&b.userData.tick(gt);let wt=e.position.distanceTo(n.target),Rt=Math.max(120,Math.min(1600,wt*1.25)),O=c.shadow.camera;O.left=-Rt,O.right=Rt,O.top=Rt,O.bottom=-Rt,O.near=1,O.far=6e3,O.updateProjectionMatrix(),c.target.position.copy(n.target),c.position.copy(n.target).addScaledVector(g,3e3),Ve==="medium"&&(i.shadowMap.autoUpdate=!1,Lt++,(!At||At.distanceTo(n.target)>Rt*.04||Math.abs(vt-Rt)>Rt*.05||Lt>20)&&(i.shadowMap.needsUpdate=!0,Lt=0,At=(At||new U).copy(n.target),vt=Rt)),j.tickScale(e),i.render(t,e),G.update(e,innerWidth,innerHeight),Nd||requestAnimationFrame(zt)}document.getElementById("loading").classList.add("done"),window.__ready=!0,window.__app={setCam:(K,Et)=>{ht=null,n.target.set(...Et),e.position.set(...K),n.update()},city:fe,traffic:Mt,trainAt:(K,Et)=>Z.placeNear(K,Et),info:()=>({calls:i.info.render.calls,tris:i.info.render.triangles,geom:i.info.memory.geometries,tex:i.info.memory.textures}),renderFrame:(K=1,Et=.05)=>{for(let wt=0;wt<K;wt++)rt.getDelta(),zt();return!0},goView:ut,camera:e,controls:n,markers:j,flyTo:D,H:s,setTime:p,scene:t},window.__zincSpot=()=>{let K=fe.buildings.map(Rt=>{let O=0,St=0;for(let Q of Rt.p)O+=Q[0],St+=Q[1];return[O/Rt.p.length,St/Rt.p.length,Rt.rm==="metal"||Rt.rm==="fiber"]}),Et=null,wt=-1;for(let Rt of K){if(!Rt[2])continue;let O=0;for(let St of K)St[2]&&Math.hypot(St[0]-Rt[0],St[1]-Rt[1])<40&&O++;O>wt&&(wt=O,Et=Rt)}return[Et[0],s.at(Et[0],Et[1]),Et[1]]},zt()}Jx().catch(i=>{console.error(i),document.getElementById("loadmsg").textContent="Erro ao carregar: "+i.message})});Kx();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
