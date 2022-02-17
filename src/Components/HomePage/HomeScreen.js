import React from "react";
import BGImage from "./bg.jpg"
import "./HomeScreen.scss"

 const HomePage = () => {
     return(
        <div className="container " style={{backgroundImage : `url(${BGImage})`}}>
             <div className="text">HEY YOU HAVE SUCCESFULLY LOGGED IN!!!!!</div>

         </div>
     )
 }
 export default HomePage;