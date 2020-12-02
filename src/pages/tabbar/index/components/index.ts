const context = require.context("./", false, /\.vue$/);

// 要跳过的模块
const excludes: string[] = [];
const modules: any = context.keys().reduce((m, k) => {
  const name = k.slice(2, -4);
  if (!excludes.includes(name)) {
    m[name] = context(k).default;
  }
  return m;
}, {});

export default modules;
