import React from 'react';

const KnowHowDetail = ({knowHow, currentUser}) => {

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const getReplies = () => {
        return knowHow.replies.map((reply, index) => {
                return (
                    <li key={index}>
                        <div>
                            <h4>{reply.body}</h4>
                            <p><i>By: {reply.author.shortName} on {reply.date}</i></p>
                        </div>
                        {/* LINE BREAK, DELETE ONCE CSS IS IN */}
                        <br></br>
                    </li>
                )
        })
    }

    const getRepliesSection = () => {
        if (knowHow.replies.length >=2){
            return(
                <div>
                    <h3>Replies:</h3>
                    <ul>
                        {getReplies()}
                    </ul>
                </div>
            )
        }
        return
    }

    return(
        <>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>

            {getRepliesSection()}
        </>
    )
}

export default KnowHowDetail;