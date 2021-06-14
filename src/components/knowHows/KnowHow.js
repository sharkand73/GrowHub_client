import React from 'react';

// Date
// Author
// Title
// body

const KnowHow = ({knowHow, currentUser, deleteClick, editClick}) =>{

    const knowHowEditDelete = () => {
        if (currentUser.email === knowHow.author.email) {
            return(
                <>
                <div>
                    <button type='button' onClick={deleteClick}>Delete</button>
                </div>
                <div>
                    <button type='button' onclick={editClick}>Edit</button>
                </div>
                </>
            )
        }
    }

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    return(
        <div>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>
            <>{knowHowEditDelete()}</>
        </div>
    )

}

export default KnowHow;