import React from "react"
import axios from "axios"
import api from "../api/api"
class DisplayContact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contacts:[]
        }
    }
    getContacts(){
        api.get("/contacts").then((res)=>this.setState({contacts:res.data})).catch((err)=>console.log(err))  
    }
    addContact(){
        api.post("/contacts",
        {
           id:"1",name:"peter",number:"902328932878372"
        }).then((res)=>console.log("success")).catch((err)=>console.log(err))
    }
    updateContact(){
        api.put("/contacts/1",{
             id:"1",name:"pete",number:"77827382"
        }).then((res)=>console.log("success")).catch((err)=>console.log(err))
    }
    deleteContact(){
        api.delete("/contacts/1").then((res)=>console.log("success")).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
            <DisplayCom ></DisplayCom>
            </div>
        )
    }
}
export default DisplayContact