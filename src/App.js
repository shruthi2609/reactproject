import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProfileComponent from "./Components/ProfileComponent"
import ClassComponent from "./Components/ClassComponent"
import ToggleButton from "./Components/ToggleButton"
import StateExamples from "./Components/StateExamples"
const userdata={
  username:"john",
  role:"admin",
  status:"available"
}
const AppComponent=()=>{
return(
<div>
<StateExamples></StateExamples>
</div>
)
}


export default AppComponent