import React from "react"
import "./CompletedTask.css"
class CompletedTask extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("completed")
        return(
            <div className="completed">
            <h2>Completed Task</h2>
               {
                   this.props.prop1.map((item)=>(
                       <div key={item.id}>
                           <h3>{item.task}</h3>
                           <button>delete</button>
                        </div>
                   ))
               }
            </div>
        )
    }
}
export default CompletedTask;