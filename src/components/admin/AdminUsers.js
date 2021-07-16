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

    const usersList = usersArray.map((user, index) => {
            return (
                <tr key={index} style={ isActive(user) ? {color: 'blue'} : {color: 'grey'} }>

                    <td>{user.shortName}</td>
                    <td>{user.position}</td>
                    <td>{user.yearJoined}</td>
                    <td>{yearLeft(user)}</td>
                    <td>UPDATE</td>
                    <td>REMOVE</td>
                </tr>            
             )
    });

    return (
        <table>
            <thead>
                <th>USERNAME</th>
                <th>POSITION</th>
                <th>JOINED</th>
                <th>LEFT</th>

            </thead>
            <tbody>
                {usersList}
            </tbody>
        </table>
    )

}

export default AdminUsers;