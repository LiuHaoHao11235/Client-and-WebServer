import { override, fixBabelImports, addWebpackAlias } from "customize-cra";
import { resolve } from "path";
export default override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addWebpackAlias({
    ["@"]: resolve(__dirname, "src"),
  })
);
