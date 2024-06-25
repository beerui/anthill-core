import { makeInstaller as r } from "./utils/install.js";
import e from "./installs.js";
import { TBaseBreadcrumb as p } from "./BaseBreadcrumb/index.js";
import { TBaseTableHead as l } from "./BaseTableHead/index.js";
import { TBaseTable as B } from "./BaseTable/index.js";
import { TBaseSearchBar as d } from "./BaseSearchBar/index.js";
import { TBaseOperator as n } from "./BaseOperator/index.js";
const t = r([...e]);
export {
  p as TBaseBreadcrumb,
  n as TBaseOperator,
  d as TBaseSearchBar,
  B as TBaseTable,
  l as TBaseTableHead,
  t as default
};
