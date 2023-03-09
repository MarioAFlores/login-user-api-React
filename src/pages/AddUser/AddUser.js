import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {

    const cookies = new Cookies();
 
    const URLbase = 'https://localhost:44380/api/users/';

    const [user, setUser] = useState({
        Name: "",
        Last_Name: "",
        Mail: "",
        User_Name: "",
        Password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
        console.log(user);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser(user.Password= md5(user.Password));
        alert("voy a hacer el axios");
        
        
        await axios.post(URLbase, user)
            .then(function (response){
                alert("User added successfully" );
                console.log(response);
            } )
            .catch(function (error){
                alert("Error, could not add user");
                console.log(error);
            });
        
    }
    useEffect (() => {
        if(!cookies.get('Id_User')){
          
          navigate("/");
        }
      },[]);


  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>Add New User</h2>
        
        <label>Name:</label>
        <input type="text" 
            className='form-control' 
            name="Name" 
            onChange={handleChange}
            placeholder='Enter name' 
        />
        <label>Last Name:</label>
        <input type="text" 
            className='form-control' 
            name="Last_Name" 
            onChange={(e) => handleChange(e)}
            placeholder='Enter Last Name' 
        />
        <label>Mail:</label>
        <input type="text" 
            className='form-control' 
            name="Mail" 
            onChange={(e) => handleChange(e)}
            placeholder='Enter mail' 
        />
        <label>User Name:</label>
        <input type="text" 
            className='form-control' 
            name="User_Name" 
            onChange={(e) => handleChange(e)}
            placeholder='Enter user name' 
        />
        <label>Password:</label>
        <input type="text" 
            className='form-control' 
            name="Password" 
            onChange={(e) => handleChange(e)}
            placeholder='Enter a Password' 
        />

        <br /><br />
        <button type='submit' className='btn btn-primary' >Insert User</button>
        
    </form>
    <button className='btn btn-danger' onClick={() => {navigate('/home')}}>Bact to Home</button>
    </>
  )
}

export default AddUser
