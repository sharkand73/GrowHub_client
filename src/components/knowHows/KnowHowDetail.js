import React from 'react';

const KnowHowDetail = ({knowHow, currentUser}) => {

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    // String date, User author, String title, String body, Month month


    const replies = knowHow.replies.map((reply, index) => {
        return (
            <li key={index}>
                <ul>
                    <li>{reply.body}</li>
                    <li>By: {reply.author} on {reply.date}</li>
                </ul>
            </li>
        )
    })

    // If there are replies to the KnowHow, render a div with an UL of all knowHows
    const repliesRender = () => {
        if (knowHow.replies.length > 0){
            return(
                <div>
                    <h3>Replies:</h3>
                    <ul>
                        {replies}
                    </ul>
                </div>
            )
        }
    }

    return(
        <>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>

            {repliesRender()}
        </>
    )
}

export default KnowHowDetail;