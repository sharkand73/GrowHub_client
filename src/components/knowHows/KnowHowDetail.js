import React from 'react';
import NewKnowHowReply from './NewKnowHowReply';

import '../../css/Knowhow.css';
import '../../css/Dash.css';
import LogoSmall from '../../css/LogoSmall.png';


const KnowHowDetail = ({knowHow, currentUser, getDate, postReply, replies}) => {

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const repliesArray = [];

    const getReplies = replies.forEach((reply) => {
        if (reply.knowhow.id === knowHow.id){
            repliesArray.push(
                <li key={reply.index}>
                    <div key={reply.index}>
                        <h4> {reply.body}</h4>
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

        <div id="knowledge-container">

            <div id="logo-grid2">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="header-grid">
                <p className="kHw-title2">Knowhow: {knowHow.title}</p>
            </div>
            
            <div  id="form-grid2">
                <ul>
                    <li  className="kHw-month">Applies to month: {month}</li>
                    <li className="kHw-content">{knowHow.body}</li>
                    <li className="kHw-author">Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
                </ul>
            </div>

            <div id="form-grid3">
                <p className="kHw-title2">Add a comment:</p>
                <NewKnowHowReply knowHow={knowHow} currentUser={currentUser} getDate={getDate}  postReply={postReply}/>

                {getReplies}
                {repliesArrayLength > 0 ? 
                
                
                <div> 
                    <p className="kHw-title">Previous comments:</p>

                    <div className="kHw-content2">
                    {repliesArray}
                    </div>
                
                </div>
                : null}
            </div>

        </div>   
        </>
    )
}

export default KnowHowDetail;