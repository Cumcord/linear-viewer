import React from "react";

interface ItemProps {
    header: string;
    content: string;
    image?: string;
    imageAlt?: string;
}
export default function IssueMetaItem({header, content, image, imageAlt}: ItemProps): JSX.Element {
    return (
        <div className="issue-data-item">
            <div className="issue-data-item-header">{header}</div>
            <div className="item-data-item-content">
                {image && <img className="issue-data-item-image" src={image} alt={imageAlt} />}
                {content}
            </div>
        </div>
    );
}
