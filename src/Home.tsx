import React from "react";
import Page from "./shared/Page";
import {graphql} from "gatsby";

export const query = graphql`
    query {
        linear {
            issues {
                nodes {
                    title
                    description
                    creator {
                        name
                        avatarUrl
                    }
                    identifier
                }
            }
        }
    }
`;

interface HomePageProps {
    data: {linear: {issues: GatsbyTypes.Linear_IssueConnection}};
}
export default function HomePage({data}: HomePageProps): JSX.Element {
    return (
        <Page>
            <div className="itemgrid">
                {data.linear.issues.nodes.map((issue) => (
                    <div className="griditem">
                        <div className="item-meta">
                            <div className="item-name">
                                <a href={`/issues/${issue.identifier}`}>{issue.title}</a>
                            </div>
                            <div className="item-desc">
                                {issue.description ? issue.description : <em>No description.</em>}
                            </div>
                        </div>
                        <div className="item-spacer"></div>
                        <div className="item-footer">
                            <img className="item-footer-image" src={issue.creator!.avatarUrl} alt={`${issue.creator!.name}'s profile picture`} />
                            {issue.creator!.name}
                        </div>
                    </div>
                ))}
            </div>
        </Page>
    );
}
