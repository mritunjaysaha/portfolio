const withImages = require("next-images");

module.exports = withImages({
    fileExtensions: ["gif"],
    webpack(config, options) {
        return config;
    },
});
