import React from "react"
import _isEqual from "lodash/isEqual"
class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        
        if(!(_isEqual(nextProps.prop1,this.props.prop1))){
            return true
        }
        else{
            return false
        }
    }
   
    render(){
        console.log("bin")
        return(
            <div className="bin">
            <h2>Deleted Task</h2>
               {
                   this.props.prop1.map((item)=>(
                       <div key={item.id}>
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