function resolvePlugin(plugin, options) {
    return {
        resolve: plugin,
        options: options
    };
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    flags: {FAST_DEV: true, PARALLEL_SOURCING: true, LMDB_STORE: true, DEV_SSR: false},
    plugins: [
        // Source: file system (images)
        resolvePlugin("gatsby-source-filesystem", {
            name: "images",
            path: "./src/images/"
        }),

        // Transform: images
        resolvePlugin("gatsby-transformer-sharp"),

        resolvePlugin("gatsby-plugin-react-helmet"),
        resolvePlugin("gatsby-plugin-sass", {
            sassOptions: {
                includePaths: ["src/css"]
            }
        }),
        resolvePlugin("gatsby-source-graphql", {
            typeName: "Linear",
            fieldName: "linear",
            url: "https://api.linear.app/graphql",
            headers: {
                Authorization: process.env.LINEAR_TOKEN
            }
        }),

        // Misc plugins/dependencies
        resolvePlugin("gatsby-plugin-image"),
        resolvePlugin("gatsby-plugin-sharp"),
        resolvePlugin("gatsby-plugin-typegen")
    ]
};
