import React from "react";
import Page from "./shared/Page";

interface IssuePageProps {
    pageContext: {
        issue: GatsbyTypes.Linear_Issue;
    };
}
export default function IssuePage({pageContext}: IssuePageProps): JSX.Element {
    const issue = pageContext.issue;
    return (
        <Page>
            <h1>{issue.title}</h1>
        </Page>
    );
}
