import React, { useState} from 'react'
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {

    const URLbase = 'https://localhost:44380/api/users';
    const cookies = new Cookies();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        //console.log(form);
    }

    const navigate = useNavigate();

    

    const beginSession = async() => {
        
        
        await axios({
            method: 'get',
            url: URLbase + `/${form.username}/${md5(form.password)}`,
            withCredentials: true,
            responseType: "json",
        })
        .then(respose => {
                return respose.data;
            }).then(response => {
                if(response.length > 0){
                    var respuesta = response[0];
                    cookies.set('Id_User', respuesta.id_User, {path: '/'});
                    cookies.set('Last_Name', respuesta.last_Name, {path: '/'});
                    cookies.set('Mail', respuesta.mail, {path: '/'});
                    cookies.set('Name', respuesta.name, {path: '/'});
                    cookies.set('Password', respuesta.password, {path: '/'});
                    cookies.set('User_Name', respuesta.user_Name, {path: '/'});
                    cookies.set('Fk_User_Role', respuesta.fk_User_Role, {path: '/'});
                    alert("Welcome " + respuesta.name + " " + respuesta.last_Name);
                    navigate('/home');
                }else{
                    alert('User or password is incorrect');
                }
            }).catch(error => {
                console.log(error);
            });

    }



    return (
        <div className='containerPrincipal'>
            <div className='containerLogin'>
                <div className='form-group'>
                    <label>User:</label>
                    <br />
                    <input type="text" 
                    className='form-control' 
                    name="username" 
                    placeholder='Enter username or mail' 
                    onChange={handleChange} />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input type="password" 
                    className='form-control' 
                    name='password' 
                    placeholder='Enter Password' 
                    onChange={handleChange} />
                    <br />
                    <button className='btn btn-primary' onClick={() => beginSession()}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
