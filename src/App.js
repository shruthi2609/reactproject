import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProfileComponent from "./Components/ProfileComponent"
//import ClassComponent from "./Components/ClassComponent"
import ToggleButton from "./Components/ToggleButton"
import StateExamples from "./Components/StateExamples"
import TaskManager from "./Components/TaskManager"
import LifeCycleMethods from "./Components/LifeCycleMethods"
import ParentComponent from "./Components/ParentComponent"
import FormComponent from "./Components/FormComponent"
import { Display } from "./Components/KeysInReact"
import FetchDataClass from "./Components/FetechDataClass"
import TaskManagerComponent from "./Components/TestComponent"
import PostDataClass from "./Components/PostDataClass"
import FetchAXiosData from "./Components/FetchAXiosData"
import api from "./api/api"
import DisplayContact from "./Components/DisplayContact"
import GetDBDataComponent from "./Components/NewContact"
import FormValidation from "./Components/FormValidation"
import {BrowserRouter , Link , Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Services from "./Components/Services"

const userdata={
  username:"john",
  role:"admin",
  status:"available"
}
const interest=["angular","react","node js"]
const AppComponent=()=>{

return(
<BrowserRouter>
<nav>
<Link to="/home">home </Link>
<Link to="/services">Services </Link>
</nav>
<Routes>
<Route path="/home" element={<Home></Home>}> </Route>
<Route path="/services" element={<Services></Services>}> </Route>
</Routes>
</BrowserRouter>
)
}


export default AppComponent