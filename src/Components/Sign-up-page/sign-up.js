import React from "react";
import Header from "../Sign-Form/Header/Header";
import BGImage from "./bg.jpg"
import { useNavigate } from "react-router-dom";

const Signup = ()=>  {
    const nav = useNavigate();
    return(
        <>
        <Header name="Login"/>
        <div className="container " style={{backgroundImage : `url(${BGImage})`}}>
        <div className="Inner-container">
        <span className="login-header">SIGN UP</span>
        <div className="userinfo">
                    <div  className="userdetails">Full Name</div>
                    <div><input  className="input100" type="text"  placeholder="Type your name"></input></div>

                    <div  className="userdetails">Phone</div>
                    <div><input  className="input100" type="number"  placeholder="Type your number"></input></div>
                    
                    <div  className="email">Email</div>
                    <div><input  className="input100" type="email"  placeholder="xyz@.com"></input></div>

                    <div  className="userdetails">Password</div>
                    <div><input  className="input100" type="password"  placeholder="Type your password"></input></div>

                    <div  className="userdetails">Repeat Password</div>
                    <div><input  className="input100" type="text"  placeholder="Re-enter your password"></input></div>
                    </div>
                    <div><button className="loginbtn" onClick={()=>{nav('/home')}}>SIGN UP</button>



          </div>
        </div>
        </div>
        </>
    )
}
export default Signup;