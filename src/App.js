import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProfileComponent from "./Components/ProfileComponent"
import ClassComponent from "./Components/ClassComponent"
const userdata={
  username:"john",
  role:"admin",
  status:"available"
}
const AppComponent=()=>{
return(
<div>
<ClassComponent userdetails={userdata}></ClassComponent>

</div>
)
}


export default AppComponent