import React, { useState } from 'react'

function AddUser() {
 

    const [user, setUser] = useState({
        Name: "",
        Last_Name: "",
        Mail: "",
        User_Name: "",
        Password: ""
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
        console.log(user);
    }

    const handleSubmit = async (e) => {
        e.preventDeafult();
        alert(user);
        console.log(user);

    }


  return (
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
  )
}

export default AddUser
