import React, {useState} from 'react';
import EditBulletin from './EditBulletin';

const BulletinDetails = ({bulletin, clickAway, deleteBulletin, currentUser, getDate, editBulletin}) => {

    const [editClick, setEditClick] = useState(null)

    const handleEdit = (item) => {
        setEditClick(item)
    }

    const reverseEditClick = () => {
        setEditClick(null)
    }

    
    const bulletinEditDelete = () => {
        // console.log(`Current user: ${currentUser.id}`);
        // console.log(`Bulletin author ${bulletin.author.id}`);

        const editForm = () => {
            if (editClick){
                return(
                    <div>
                        <EditBulletin bulletin={bulletin} currentUser={currentUser} getDate={getDate} editBulletin={editBulletin} reverseEditClick={reverseEditClick} /> 
                    </div>
                )
            }
        }

        if (currentUser.email === bulletin.author.email) {
            return(   
                <>     
                <div className = "edit-delete">
                    <span className="edit-text" onClick={() => handleEdit(bulletin)} >Edit</span>
                    <span className="delete-text" onClick={() => deleteBulletin(bulletin)}>Delete</span>
                </div>
                <>{editForm()}</>
                </>
            )
        }
    }
    return(
        <div>
            <div id = "large-post-it" onClick = {clickAway}>
                <h2>{bulletin.title}</h2>
                <h3>{bulletin.author.shortName}</h3>
                <h3>{bulletin.date}</h3>
                <div>
                <p>{bulletin.body}</p>
                </div>
            </div>
            {bulletinEditDelete()}
        </div>
    )
}

export default BulletinDetails;