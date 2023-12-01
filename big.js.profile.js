var profile = {
        resourceTags: {
            amd: function (filename, mid) {
                // console.log(`amd saw filename (${filename}), mid (${mid})`);
                return /\.js$/.test(filename);
            },
            ignore: function (filename, mid) {
                // console.log(`ignore saw filename (${filename}), mid (${mid})`);
                return /perf/.test(filename) || /test/.test(filename);
            }
        }
}
