import  React from "react";
import * as ReactDOM from "react-dom";
import LoginForm from "./Components/Sign-Form/sign-form";
import Img from "./Img.jpg"
import "./style.scss";
const App = () => {
    return(
        <div>
          <h1>HELLO REACT APP Without CRA</h1>
          <img src={Img}></img>
          <LoginForm />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));