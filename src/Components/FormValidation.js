import React from "react"
class FormValidation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[]
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const user=this.uname.value
        const pw=this.password.value
        const err=this.handleValidation(user,pw)
        console.log(err)
        this.setState({errors:err})
        
    }
    handleValidation=(user,pw)=>{
        const err=[];
        if(user===" "){
            err.push("username is empty")
        }
        if(pw===" "){
            err.push("password is empty")
        }
        this.uname.value=""
        this.password.value=""
        return err

    }
    render(){
        const errStyle={
            color:"red"
        }
        return(
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input type="text" ref={el=>this.uname=el}></input>
            <input type="text" ref={el=>this.password=el}></input>
            <input type="submit"></input>
            {
            this.state.errors.map((item)=>console.log(item))
            }
           
            </form>

        )
    }
}
export default FormValidation