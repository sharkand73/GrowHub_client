import React from 'react';

const AdminUsers = ({users}) => {

    const isAdmin = (user) => {
        return (user.shortName === 'Admin')
    }

    const isActive = (user) => (user.position !== "INACTIVE");

    const yearLeft = (user) => {
        return (user.yearLeft > 0)? user.yearLeft : "-";   
    }

    const nameCompare = function(user1, user2){
        let name1 = user1.shortName.toUpperCase();
        let name2 = user2.shortName.toUpperCase();
        return (name1 < name2)? -1: (name1 > name2)? 1: 0;
    }

    const activeUsers = users.filter((user) => (isActive(user)));
    activeUsers.sort(nameCompare);
    const inactiveUsers = users.filter((user) => (!isActive(user) && !isAdmin(user)));
    inactiveUsers.sort(nameCompare);

    const usersArray = [...activeUsers, ...inactiveUsers];

    const moveButton = (user) => {
        if (isActive(user)){
            return (
                <button type="button" value={user.id} onClick={(e) => console.log(e.target.value)}>
                    REMOVE
                </button>
            )
        }
        else {
            return (
                <button type="button" onClick={() => user.position="NONE"}>
                    REINSTATE
                </button>
            )
        }
    } 
    const usersList = usersArray.map((user, index) => {
            return (
                <tr key={index} style={ isActive(user) ? {color: 'blue'} : {color: 'grey'} }>

                    <td>{user.shortName}</td>
                    <td>{user.position}</td>
                    <td>{user.yearJoined}</td>
                    <td>{yearLeft(user)}</td>
                    <td>
                        <button type="button">
                            UPDATE
                        </button>
                    </td>
                    <td>
                        {moveButton(user)}
                    </td>
                </tr>            
             )
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }

    const positionTypes = ['NONE', 'ORDINARY', 'TREASURER', 'SECRETARY', 'COMMUNICATIONS', 'CHAIR', 'INACTIVE'];
    const positionTypeOptions = positionTypes.map((item, index) => {
        return (<option key={index} value={item}>{item}</option>)
    });

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>POSITION</th>
                        <th>JOINED</th>
                        <th>LEFT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" />
                        </td>
                        <td>
                            <select>
                                {positionTypeOptions}
                            </select>
                        </td>
                        <td>
                            <select>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                            </select>                               
                        </td>
                        <td>
                        <select>
                                <option>----</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                            </select> 
                        </td>
                        <td>
                            <button type="submit">ADD USER</button>
                        </td>
                    </tr>
                
                    {usersList}
                </tbody>
            </table>
        </form>
    )

}

export default AdminUsers;