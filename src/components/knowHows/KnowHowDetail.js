import React from 'react';
import NewKnowHowReply from './NewKnowHowReply';

const KnowHowDetail = ({knowHow, currentUser, getDate, postReply, replies}) => {

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const repliesArray = [];

    const getReplies = replies.forEach((reply) => {
        if (reply.knowhow.id === knowHow.id){
            repliesArray.push(
                <li key={reply.index}>
                    <div>
                        <h4>{reply.body}</h4>
                        <p><i>By: {reply.author.shortName} on {reply.date}</i></p>
                    </div>
                    {/* LINE BREAK, DELETE ONCE CSS IS IN */}
                    <br></br>
                </li>
            )
            }
        }
    )

    const repliesArrayLength = repliesArray.length

    return(
        <>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>

            <h3>Write a new reply:</h3>
            <NewKnowHowReply knowHow={knowHow} currentUser={currentUser} getDate={getDate}  postReply={postReply}/>

            {getReplies}
            {repliesArrayLength > 0 ? 
            <div>
                <h3>Replies:</h3>
                {repliesArray}
            </div>
            : null}
            
        </>
    )
}

export default KnowHowDetail;