import {useState} from "react"
const SampleComponent=(props)=>{
    const [msg,setMsg]=useState("initial")
   const updateMessage=()=>{
        setMsg("new value")
    }
        return(
        <div>
            <h1>{props.username}</h1>
            <h2>{msg}</h2>

            <button onClick={()=>updateMessage()}>update</button>
        </div>
    )
    
}
export default SampleComponent