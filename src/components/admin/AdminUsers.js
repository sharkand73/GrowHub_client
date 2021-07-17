import React, {useState} from 'react';

const AdminUsers = ({users, adminPostUser}) => {

    const [formData, setFormdata] = useState(
        {
            shortName: "",
            position: "NONE",
            yearJoined: 2021,
            yearLeft: 0,
            password: "",
            plots: [],
            crops: []
        }
    )

    const currentYear = (new Date()).getFullYear();
    let years = [];
    for(let year = currentYear; year>2009; year--){
        years.push(year);
    }

    const yearOptions = years.map((year, index) => <option key={index} value={year}>{year}</option>);

    const positionTypes = ['NONE', 'ORDINARY', 'TREASURER', 'SECRETARY', 'COMMUNICATIONS', 'CHAIR', 'INACTIVE'];
    const positionTypeOptions = positionTypes.map((item, index) => {
        return (<option key={index} value={item}>{item}</option>)
    });

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

    const handleName = (e) => {
        let tempData = {...formData};
        tempData.shortName = e.target.value;
        setFormdata(tempData);
    }

    const handleSelect = (e) => {
        let newValue = e.target.value;
        if (e.target.id === 'yearLeft' && e.target.value === '----'){newValue = 0;} 
        let tempData = {...formData};
        tempData[e.target.name] = newValue;
        setFormdata(tempData);
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {...formData};
        newUser.yearJoined = parseInt(formData.yearJoined);
        newUser.yearLeft = parseInt(formData.yearLeft);
        let currentYear = (new Date()).getFullYear().toString();
        newUser.password = newUser.shortName.concat(currentYear);
        adminPostUser(newUser);
    }
        

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
                            <input type="text" onChange={handleName} value={formData.shortName} autofocus required/>
                        </td>
                        <td>
                            <select name="position" onChange={handleSelect}>
                                {positionTypeOptions}
                            </select>
                        </td>
                        <td>
                            <select name="yearJoined" onChange={handleSelect}>
                                {yearOptions}
                            </select>                               
                        </td>
                        <td>
                            <select name="yearLeft" onChange={handleSelect}>
                                <option value={0}>----</option>
                                {yearOptions}
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