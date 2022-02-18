import  React from "react";
import * as ReactDOM from "react-dom";
import Header from "./Components/Sign-Form/Header/Header";
import LoginForm from "./Components/Sign-Form/sign-form";
import Signup from "./Components/Sign-up-page/sign-up";
import Img from "./Img.jpg"
import "./style.scss";
import { BrowserRouter ,Link,Switch,Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomeScreen";
const App = () => {
  const env = process.env.NODE_ENV
    return(
      <>
      <Routes>
       <Route path= '/'  element={<LoginForm />} />
       <Route path= '/sign'  element={<Signup />} />
       <Route path='/home' element={<HomePage />} />
      </Routes>
      </>
    )
}

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>,
 document.getElementById("root"));