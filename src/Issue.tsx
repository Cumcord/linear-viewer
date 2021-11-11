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
            <div className="container">
                <div className="issue-meta">
                    <div className="issue-meta-title">{issue.title}</div>
                    <div className="issue-meta-desc">{issue.description}</div>
                </div>
                <div className="issue-data">
                    <div className="issue-data-creator">
                        {issue.creator!.name}
                    </div>
                    <div className="issue-data-creationdate">
                        {issue.createdAt}
                    </div>
                    {issue.assignee && (
                        <div className="issue-data-assignee">
                            <div className="issue-data-assignee-header">
                                Assignee
                            </div>
                            <div className="issue-data-assignee-content">
                                <img className="issue-data-assignee-image" src={issue.assignee.avatarUrl} alt={`${issue.assignee.name}'s profile picture`} />
                                {issue.assignee.name}
                            </div>
                        </div>
                    )}
                    {issue.labels && (
                        <div className="issue-data-labels">
                            labels
                        </div>
                    )}
                </div>
            </div>
        </Page>
    );
}
