const commonConfig = require("./webpack.common");

module.exports = {
    ...commonConfig,
    mode: "development",
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 3000
    },
    watch: true,
    devtool: "inline-source-map"
};
