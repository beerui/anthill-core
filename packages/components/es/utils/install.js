const o = (t, l) => (t.install = (e) => {
  for (const n of [t, ...Object.values({})])
    e.component(n.name, n);
}, t), s = (t = []) => ({
  install: (e) => {
    t.forEach((n) => e.use(n));
  }
});
export {
  s as makeInstaller,
  o as withInstall
};
