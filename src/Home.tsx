import React from "react";
import Page from "./shared/Page";
import {graphql} from "gatsby";

export const query = graphql`
    query {
        linear {
            issues {
                nodes {
                    title
                }
            }
        }
    }
`;

interface HomePageProps {
    data: {linear: {issues: GatsbyTypes.Linear_IssueConnection}};
}
export default function HomePage({data}: HomePageProps): JSX.Element {
    return <Page></Page>;
}
