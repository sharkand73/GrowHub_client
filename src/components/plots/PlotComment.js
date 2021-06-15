import React from 'react';

const PlotComment = ({comment, currentUser}) => {
    console.log(comment);
    return (
        <div>
            <p>{comment.date}</p>
            <p>{comment.body}</p>
            <p>{comment.author.shortName}</p>
            
        </div>
    )
}

export default PlotComment;