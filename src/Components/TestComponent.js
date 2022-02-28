import React from "react";
import PendingTaskComponent from "./PendingTask";
import CompletedTaskComponent from "./CompletedTask";
import BinComponent from "./BinComponent";

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

class TaskManagerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todo:tododata
        }
    }
    getPending=()=>{
        const arr=  this.state.todo.filter((item)=>item.status===false)
        return arr
    }
    getCompleted=()=>{
        const arr=  this.state.todo.filter((item)=>(item.status===true && item.active===true))
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

    changeArchivalStatus=(taskid)=>{
        let temp = [...this.state.todo]
        let obj=temp.find((item)=>item.id===taskid)
        obj.active=!obj.active
        this.setState({todo:temp})
    }


    addTask=()=>{
        console.log("add task")
        let currentStateTodo = this.state.todo
        console.log("current : state")
        console.log(currentStateTodo)
        //let taskId= currentStateTodo.length+1
        /*let newTask = {
            id:taskId,
            task:"Task : "+taskId,
            status:false,
            active:true,
        }
        currentStateTodo.push(newTask)
        this.setState({todo:currentStateTodo})*/
        fetch("https://jsonplaceholder.typicode.com/users/1/todos").then((res)=>{return res.json()})
            .then((data)=> {
                //console.log(data)
                data.forEach(function(item,index) {
                    let newTask = {
                        id:currentStateTodo.length+1,
                        task:item.title,
                        status:item.completed,
                        active:true,
                    }
                    currentStateTodo.push(newTask)
                })
                }
            )
            .catch((err)=>console.log("error",err))

        this.setState({todo:currentStateTodo})

        console.log("final state")
        console.log(this.state.todo)
    }

    render() {
        console.log("render")
       return(
            <div>
                <h1>TaskManager</h1>
                <PendingTaskComponent prop1={this.getPending()} func={this.changeStatus}></PendingTaskComponent>
                <CompletedTaskComponent prop1={this.getCompleted()} func={this.changeArchivalStatus}></CompletedTaskComponent>
                <BinComponent prop1={this.getDeleted()} func={this.changeArchivalStatus}></BinComponent>
               <button onClick={()=>this.addTask()}>test</button>
            </div>
        )

    }
}

export default TaskManagerComponent