import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Menu from '../../components/Menu';


function ShowAllUsers() {
    const URLbase = 'https://localhost:44380/api/users';
    //const Users [] = new {Id_User:"",Name:""};
    const navigate = useNavigate();
    const cookies = new Cookies();
 
    const [users, setUSers] = useState([{
        Id_User: "",
        Name: "",
        Last_Name: "",
        Mail: "",
        User_Name: "",
        Password: ""
    }]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        //await axios.get(URLbase)
        await axios({
            method: 'get',
            url: URLbase ,
            withCredentials: true,
            responseType: "json",
        })
            .then(response => {
                console.log(response.data);
                setUSers(response.data);
                //Users = response.data;
            }).catch(error => {
                alert('Error: Can not get all users: ' + error);
            });
        //console.log(Users)

    }

    useEffect (() => {
        if(!cookies.get('Id_User')){
          
          navigate("/");
        }
      },[]);
    return (
        <>
            <Menu></Menu>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mail</th>
                        <th scope='col'>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User key={user.id_User} user={user} />

                    ))}

                </tbody>
            </table>
            <button className='btn btn-danger' onClick={() => { navigate('/home') }}>Bact to Home</button>
        </>
    )
}

export default ShowAllUsers
