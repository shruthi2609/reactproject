import React from "react"
import ChildComponent from "./ChildComponent"
class ParentComponent extends React.Component{
    constructor(props){
        super(props)
  {   /*   this.username=React.createRef()
  this.password=React.createRef()*/}
        this.state={
            uname:"",
            password:""
        }
    //    this.updateMessage=this.updateMessage.bind(this)
    // function using arrow
    // bind it during the event using arrow
    }
   handleSubmit(e){
       e.preventDefault()
     this.setState({uname:this.username.value,password:this.password.value})

   }
   
    render(){
        return(
            <div>
           <form onSubmit={(e)=>this.handleSubmit(e)}>
     <ChildComponent 
     usernameRef={el=>this.username=el}
     passwordRef={el=>this.password=el}
     ></ChildComponent>
          <input type="submit"></input>
           </form>
           <h3>{this.state.uname}</h3>
           <h3>{this.state.password}</h3>
        </div>
        )
    }
}
export default ParentComponent