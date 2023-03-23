import Menu from "./Menu"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import Cookies from "universal-cookie";

function Admin() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect (() => {
    if(cookies.get('Fk_User_Role') !== "1"  ){
      
      navigate("/home");
    }
  },[]);
  return (
    <div>
      <Menu></Menu>  
      <h1>This is the Admin Page</h1>
    </div>
  )
}

export default Admin
