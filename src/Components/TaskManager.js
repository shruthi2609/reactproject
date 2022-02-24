import React from "react"
import BinComponent from "./BinComponent"
import CompletedTask from "./CompletedTask"
import PendingTask from "./PendingTask"
const tododata=[{
id:1,
task:"buy milk",
status:true,
active:true,
},
{
id:2,
 task:"complete tasks",
 status:false,
 active:true,
},
{
    id:3,
    task:"complete tasks",
    status:false,
    active:true,
   },
{
    id:4,
 task:"complete series",
 status:true,
 active:true,
},
{
    id:5,
    task:"turn off motor",
    status:true,
    active:true,
},
{
    id:6,
    task:"schedule a call with client",
    status:false,
    active:true,
   }
]
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:tododata
        }
    }
    getPending=()=>{
        const arr=  this.state.todo.filter((item)=>item.status===false)
        return arr
    }
    getCompleted=()=>{
        const arr=  this.state.todo.filter((item)=>item.status===true)
        return arr
    }
    getDeleted=()=>{
        const arr=  this.state.todo.filter((item)=>item.active===false)
        return arr
    }
    changeStatus=(taskid)=>{
      let temp=  [...this.state.todo]
      let obj=temp.find((item)=>item.id===taskid)
      console.log("before",temp)
      obj.status=!obj.status
      this.setState({todo:temp})
    }
    
    render(){
        return(
            <div>
            <PendingTask prop1={this.getPending()}
            func={this.changeStatus}></PendingTask>
            <CompletedTask prop1={this.getCompleted()}></CompletedTask>
            <BinComponent prop1={this.getDeleted()}></BinComponent>
            </div>
        )
    }
}
export default TaskManager