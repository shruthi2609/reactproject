import React from "react"
class ToggleButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    handleLogin=()=>{
        this.setState({isLogin:true})
    }
    handleLogout=()=>{
        this.setState({isLogin:false})
    }
    render(){
        return(
        <div>
        <button onClick={this.handleLogin}>login</button>
        <button onClick={this.handleLogout}>logout</button>
         {
        this.state.isLogin?<h1>Profile Information</h1>:
        <h1>Please Login</h1>
         }
         </div>
        )
    }
}
export default ToggleButton