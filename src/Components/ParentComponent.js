import React from "react"
import LifeCycleMethods from "./LifeCycleMethods"
class ParentComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"initial"
        }
    //    this.updateMessage=this.updateMessage.bind(this)
    // function using arrow
    // bind it during the event using arrow
    }
    updateMessage=()=>{
        
        this.setState({message:"new"})
    }
    render(){
        console.log("inside parent")
        return(
            <div>
            <h2>Welcome ! {this.state.message}</h2>
            <h3> Role : </h3>
            <h3>Status:  </h3>
            <button onClick={this.updateMessage}>update</button>
           <LifeCycleMethods prop1="john has updated"></LifeCycleMethods> 
        </div>
        )
    }
}
export default ParentComponent