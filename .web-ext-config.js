// This doesn't work even though it's documented. Add ignored files to package.json build command arguments.
module.exports = {
    ignoreFiles: [
        "jsconfig.json",
        "icon425.png",
        "data/pageMods.json",
        "README.md",
        "tests/*",
        "docs/*",
        "deploy/*",
        "package*"
    ]
}