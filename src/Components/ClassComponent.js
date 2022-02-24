import React from "react"
class ClassComponent extends React.Component{
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
        console.log("function triggered")
        this.setState({message:"new"})
    }
    render(){
        return(
            <div>
            <h2>Welcome ! {this.state.message}</h2>
            <h3> Role : </h3>
            <h3>Status:  </h3>
            <button onClick={this.updateMessage}>update</button>
        </div>
        )
    }
}
export default ClassComponent