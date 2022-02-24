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
                status:false
               },
               {
                task:"complete series",
                status:true
               }
           ],
           message:"Completed Tasks"
        }
    //    this.updateMessage=this.updateMessage.bind(this)
    // function using arrow
    // bind it during the event using arrow
    }
    getCompleted=()=>{
        const arr=  this.state.todo.filter((item)=>item.status===true)
        return arr
    }
    
    render(){
       /* const arr=  this.state.todo.filter((item)=>item.status===true)*/
        return(
        <div className="div-container">
        <h1 style={{"backgroundColor":"red"}}>{this.state.message}</h1>
        {
        //map((item)=>)
        /* arr.map((item)=>
            <div>
            <h2>{item.task}</h2>
            <button>delete</button>
            </div>) */
            this.getCompleted().map((item)=>
            <div>
            <h2>{item.task}</h2>
            <button>delete</button>
            </div>)
        }
        </div>
        )
    }
}
export default StateExamples