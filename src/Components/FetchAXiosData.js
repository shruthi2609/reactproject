import React from "react"
import axios from "axios"
import jsonplaceholder from "../api/api"
import algolia from "../api/algolia"
class FetchAXiosData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
    }
    componentDidMount(){
        axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res)=>this.setState({news:res.data.hits})).catch((err)=>console.log(err))
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