import React from 'react';

const PlotComment = ({comment, currentUser}) => {
    return (
        <div>
            <p>{comment.body}</p>
            <p>{comment.author.shortName}</p>
            <p>{comment.date}</p>
        </div>
    )
}

export default PlotComment;