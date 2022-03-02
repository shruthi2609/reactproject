import React from "react"
import axios from "axios"
import api from "../api/api"

class FetchAXiosData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
    }
    
    addContact=()=>{
        api.get("/comments").then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
            <h1> React News</h1>
            <button onClick={this.addContact}>post</button>
            {
                this.state.news.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <a href={item.url}>read here</a>
                    </div>
                ))
            }
            </div>

        )
    }
}
export default FetchAXiosData