/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function User({ user }) {
    const navigate = useNavigate();
    const URLbase = 'https://localhost:44380/api/users';
    const deleteUSer = async () => {
        if (confirm("Are you sure to delete the User?")) {
            
            await axios({
                method: 'delete',
                url: URLbase + `/${user.id_User}`,
                withCredentials: true,
                responseType: "json",
            }).then(response => {
                    alert("User was successfully removed");
                    navigate("/home");

                }).catch(error => {
                    alert("Error: user was not deleted. error: " + error);

                });

        }
    }

    return (
        
            <tr>
                <th scope='row'>{user.id_User}</th>
                <td>{user.user_Name}</td>
                <td>{user.name}</td>
                <td>{user.last_Name}</td>
                <td>{user.mail}</td>
                <td><button className='btn btn-danger' onClick={() => deleteUSer()}>Delete User</button></td>
            </tr>
            
        
    )
}

export default User
