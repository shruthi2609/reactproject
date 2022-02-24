import React from "react"

class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      
        return(
            <div className="bin">
            <h2>Deleted Task</h2>
               {
                   this.props.prop1.map((item)=>(
                       <div>
                           <h3>{item.task}</h3>
                           <button>Restore</button>
                        </div>
                   ))
               }
            </div>
        )
    }
}
export default BinComponent;