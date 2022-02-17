import React from "react";
import './sign-form.scss';
import Twittericon from "../../Assets/icons8-twitter.svg"
import FacebookIcon from "../../Assets/icons8-facebook-f.svg"
import Googleicon from "../../Assets/icons8-google.svg"
import UserIcon from "../../Assets/icons8-user-64.png"
import LockIcon from "../../Assets/icons8-lock-50.png"
import BGImage from "./bg.jpg"
import Header from "./Header/Header";

const LoginForm = () => {
    
    return(
        <>
         <Header name="Sign Up" />
        <div className="container " style={{backgroundImage : `url(${BGImage})`}}>
           
          <div className="Inner-container">
                <span className="login-header">Login</span>
                <div className="userinfo">
                    <div  className="userdetails">Username</div>
                    <div>
                        <img className="userimage" src={UserIcon}></img>
                        <input  className="input100" type="text"  placeholder="Type your email"></input></div>
                </div>
                <img className="lockimage" src={LockIcon}></img>
                <div className="pass details">

                    <div className="userdetails">Password</div>
                    <div><input className="input100"type="password" placeholder="Type your password."></input></div>
                </div>
                <div className="forgot-text">
                    <a href="#">Forgot Password</a>
                </div>
                <button className="loginbtn">LOGIN</button>
                <div className="center-text">
                  <span>Or Sign Up Using</span>  
                 </div>
                 <div className="social-links">
                      <div className="link bg1"><img src={FacebookIcon} ></img></div>
                      <div className="link bg2"><img src={Twittericon} ></img></div>
                      <div className="link bg3"><img src={Googleicon} ></img></div>
                 </div>
                 <div className="footer">
                     <span className="center-text ">Or Sign Up Using</span>
                     <span>SIGN UP</span>
                
                 </div>
             </div>
            
        </div>
        </>
    )
}

export default LoginForm;