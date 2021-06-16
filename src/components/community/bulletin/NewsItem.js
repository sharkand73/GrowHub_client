import React from 'react';

const NewsItem = ({bulletin}, {currentUser}) => {

    return (

        <>
            <h1>{bulletin.title}</h1>
            <h2>{bulletin.author.shortName}</h2>
            <h3>{bulletin.date}</h3>
            <p>{bulletin.body}</p>
        </>

    )
}

export default NewsItem;