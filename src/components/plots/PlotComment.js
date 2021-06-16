import React from 'react';

const PlotComment = ({comment}) => {
    return (
        <div>
            <p><b>{comment.title}</b></p>
            <p>{comment.date}</p>
            <p>{comment.body}</p>
            <p>{comment.author.shortName}</p>
            
        </div>
    )
}

export default PlotComment;