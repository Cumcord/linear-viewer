import React from "react";
import Page from "./shared/Page";
import MetaItem from "./shared/IssueMetaItem";

interface IssuePageProps {
    pageContext: {
        issue: GatsbyTypes.Linear_Issue;
    };
}
export default function IssuePage({pageContext}: IssuePageProps): JSX.Element {
    const issue = pageContext.issue;
    return (
        <Page>
            <div className="container">
                <div className="issue-meta">
                    <div className="issue-meta-title">{issue.title}</div>
                    <div className="issue-meta-desc">{issue.description}</div>
                </div>

                <div className="issue-data">
                    <MetaItem
                        header="Creator"
                        content={issue.creator!.name}
                        image={issue.creator!.avatarUrl}
                        imageAlt={`${issue.creator!.name}'s profile picture`}
                    />

                    <MetaItem header="Creation date" content={new Date(issue.createdAt).toLocaleDateString()} />

                    {issue.assignee ? (
                        <MetaItem
                            header="Assignee"
                            content={issue.assignee.name}
                            image={issue.assignee.avatarUrl}
                            imageAlt={`${issue.assignee.name}'s profile picture`}
                        />
                    ) : (
                        <MetaItem header="Assignee" content="Nobody was assigned." />
                    )}

                    {/* TODO: map over the labels */}
                </div>
            </div>
        </Page>
    );
}
