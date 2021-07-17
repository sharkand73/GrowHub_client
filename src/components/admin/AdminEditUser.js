import React from 'react';

const AdminEditUser = ({user, setUpdate, AdminEditUser}) => {

    return (
        <tr>
            <td>
                <input type="text"  autofocus required/>
            </td>
            <td>
                <select name="position" >
                    {/* {positionTypeOptions} */}
                </select>
            </td>
            <td>
                <select name="yearJoined" >
                    {/* {yearOptions} */}
                </select>                               
            </td>
            <td>
                <select name="yearLeft" >
                    <option value={0}>----</option>
                    {/* {yearOptions} */}
                </select> 
            </td>
            <td>
                <button type="submit">ADD USER</button>
            </td>
        </tr>
    )
}

export default AdminEditUser;