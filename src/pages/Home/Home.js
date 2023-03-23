import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '../../components/Menu';

function Home() {
    const navigate= useNavigate();
    const cookies = new Cookies();
    const closeSession = () => {
        cookies.remove('Id_User', {path: '/'});
        cookies.remove('Last_Name', {path: '/'});
        cookies.remove('Mail', {path: '/'});
        cookies.remove('Name', {path: '/'});
        cookies.remove('Password', {path: '/'});
        cookies.remove('User_Name', {path: '/'});
        cookies.remove('Fk_User_Role', {path: '/'});
        navigate('/');
    }
    useEffect (() => {
      if(!cookies.get('Id_User')){
        
        navigate("/");
      }
    },[]);

  return (
    <div>
      <Menu></Menu>
      <br />
      <h5> Name: {cookies.get('Name')}</h5> 
      <h5> Last Name: {cookies.get('Last_Name')}</h5>
      <h5> Username: {cookies.get('User_Name')}</h5>
      <h5> Mail: {cookies.get('Mail')}</h5>
      <br />
      <br />
      <button className='btn btn-danger' onClick={() => closeSession()}>Close Session</button>      
    </div>
  )
}

export default Home
