"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=(t,n)=>(t.install=e=>{for(const l of[t,...Object.values({})])e.component(l.name,l)},t),s=(t=[])=>({install:e=>{console.log(t),t.forEach(l=>e.use(l))}});exports.makeInstaller=s;exports.withInstall=o;
