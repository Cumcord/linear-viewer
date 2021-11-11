// @ts-check
const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
    createPages: async ({actions, graphql}) => {
        actions.createPage({
            path: "/",
            component: path.resolve("./src/Home.tsx"),
            context: null
        });

        const issuesQueryResult = await graphql(`
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
        const issuesConnection = issuesQueryResult.data.linear.issues;

        issuesConnection.nodes.forEach((issue) => {
            actions.createPage({
                path: `/issues/${issue.identifier}`,
                component: path.resolve("./src/Issue.tsx"),
                context: {issue}
            });
        });
    }
};
