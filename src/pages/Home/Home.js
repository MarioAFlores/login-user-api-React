import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

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
        navigate('/');
    }

  return (
    <div>
      <h5> Name: {cookies.get('Name')}</h5> 
      <h5> Last Name: {cookies.get('Last_Name')}</h5>
      <h5> Username: {cookies.get('User_Name')}</h5>
      <h5> Mail: {cookies.get('Mail')}</h5>
      <br />
      <br />
      <button className='btn btn-danger' onClick={() => closeSession()}>Close Session</button>
      <button className='btn btn-success' onClick={() => {navigate('/addUser')}}>Add New User</button>
    </div>
  )
}

export default Home
