// @ts-check
const {graphql, useStaticQuery} = require("gatsby");
const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
    createPages: async ({actions}) => {
        actions.createPage({
            path: "/",
            component: path.resolve("./src/Home.tsx"),
            context: null
        });

        const issuesQueryResult = graphql(`
            query {
                linear {
                    issues {
                        nodes {
                            title
                            description
                            identifier
                        }
                    }
                }
            }
        `);
        if (issuesQueryResult.errors) throw issuesQueryResult.errors;

        /**
         * @type {GatsbyTypes.Linear_IssueConnection}
         */
        const issuesConnection = issuesQueryResult.data.issues;

        issuesConnection.nodes.forEach((issue) => {
            actions.createPage({
                path: `/issues/${issue.identifier}`,
                component: path.resolve("./src/Issue.tsx"),
                context: {issue}
            });
        });
    }
};
