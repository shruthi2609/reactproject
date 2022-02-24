import React from "react"
import "./StateExamples.css"
class StateExamples extends React.Component{
    constructor(props){
        super(props)
        this.state={
           todo:[
               {
                   task:"buy milk",
                   status:true
               },
               {
                task:"complete tasks",
                status:true
               }
           ],
           message:"Pending Tasks"
        }
    //    this.updateMessage=this.updateMessage.bind(this)
    // function using arrow
    // bind it during the event using arrow
    }
    
    render(){

        return(
        <div className="div-container">
        <h1 style={{"backgroundColor":"red"}}>{this.state.message}</h1>
        {
        //map((item)=>)
        this.state.todo.map((item)=><h3>{item.task}</h3>)
        }
        </div>
        )
    }
}
export default StateExamples