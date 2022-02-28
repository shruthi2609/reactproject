import React from "react";
class PostDataClass extends React.Component{
    constructor(props){
        super(props)
        
    }
    handleAPI(){
        fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method:"POST",
            body:JSON.stringify({
                "title":"some title",
                "body":"some body",
                "userId":1
            }),
            headers:{
                "Content-type":"application/json"
            },
        }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
    }
    handleDelete(){
        fetch("https://jsonplaceholder.typicode.com/posts/id=1",
        {
            method:"DELETE",
            
        }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
           <button onClick={this.handleAPI}>add</button>
           <button onClick={this.handleAPI}>delete</button>
           </div>
        )
    }
}
export default PostDataClass