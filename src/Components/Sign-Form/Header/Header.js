import React from "react";
import Logo from "./Coditas-logo-profile.jpg"
 import "./Header.scss"
 import { useNavigate } from "react-router-dom"

const Header = (props) => {
    let nav = useNavigate();
   
 return (
     <div className="main-header">
         <div className="logo"><img src={Logo}></img></div>
        
          <div className="logo"> <button  onClick={()=>{
              if(props.name=="Sign Up") nav("/sign")
              else nav("/")
              
              }}>{props.name}</button></div>

     </div>
 )
}
export default Header;