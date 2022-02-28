import React from "react";
class FetchDataClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            postname:""
        }
    }
  /*  componentDidMount(){
        setTimeout(()=>{
           this.handleAPI()
        },3000) 
    }
    handleAPI(){
        fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{return res.json()})
        .then((data)=>this.setState({posts:data}))
        .catch((err)=>console.log("error",err))
    }*/
    handleInput(e,key){
        if(key==="name"){
            this.setState({postname:e.target.value})
        }
    }
   handleSubmit(e){
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/comments?name="+this.state.postname).then((res)=>{return res.json()})
        .then((data)=>this.setState({posts:data}))
        .catch((err)=>console.log("error",err))
    }
    render(){
        return(
            <div>
   <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input type="text" onChange={(e)=>this.handleInput(e,"name")}></input>
                <input type="submit"></input>
        </form>
                {
                    this.state.posts.map((item)=>(
                        <div>
                            <h1> {item.email}</h1>
                            <h2>{item.body}</h2>
                        </div>
                    ))
                }
                </div>
           
        )
    }
}
export default FetchDataClass