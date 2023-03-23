import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Menu from "./Menu"

function Dashboard() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect (() => {
    
    if(cookies.get('Fk_User_Role') !== "2"  ){
      
      navigate("/home");
    }
  },[]);
  return (
    <div>
      <Menu></Menu>
      <h1>This is the Dashboard Page</h1>
    </div>
  )
}

export default Dashboard
