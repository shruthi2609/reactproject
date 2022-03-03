import React from "react"
class ChildComponent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        console.log(this.props)
        return(
            <div>
            <input type="text" ref={this.props.usernameRef}></input>
            <input type="text" ref={this.props.passwordRef}></input>
            </div>
        )
    }
}
export default ChildComponent