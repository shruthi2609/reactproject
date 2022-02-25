import React from "react"
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            comments:"",
            status:"",
            interest:""
        }
    }
    handleInput=(e,key)=>{
        if(key==="username"){
            this.setState({username:e.target.value})
        }
        else if (key==="password"){
            this.setState({username:e.target.value})
        }
        else if(key==="comments"){
            this.setState({comments:e.target.value})
        }
        else{
            this.setState({interest:e.target.value})
        }
        
    }
    
    handleLogin=(e)=>{
       e.preventDefault()
        if(this.state.username==="john"&& this.state.password==="test123"){
            this.setState({msg:"login successful"})
        }
        else{
            this.setState({msg:"invalid credentials"})
        }
        
    }
    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.handleLogin(e)}>
        <input name="user" type="text" placeholder="username" onChange={(e)=>this.handleInput(e,"username")}></input>
        <input type="text" placeholder="password"
        onChange={(e)=>this.handleInput(e,"password")}></input>
        <textarea value={this.state.comments} onChange={(e)=>this.handleInput(e,"comments")}>
        </textarea>
        <select onChange={(e)=>this.handleInput(e,"interest")}>
            <option value="React">React</option>
            <option value="node js">node js</option>
            <option value="JS">JS</option>
        </select>
        <h1>{this.state.interest}</h1>
        <input type="submit"></input>
       
                </form>
            </div>
        )
    }
}
export default FormComponent