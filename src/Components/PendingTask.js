import React from "react"
import "./PendingTask.css"
class PendingTask extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       console.log("PEnding")
        return(
            <div className="pending">
                <h2>Pending Task</h2>
               {
                   this.props.prop1.map((item)=>(
                       <div key={item.id}>
                           <h3>{item.task}</h3>
            <button onClick={()=>this.props.func(item.id)}>done</button>
                        </div>
                   ))
               }
            </div>
        )
    }
}
export default PendingTask;