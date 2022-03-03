import React from "react"
import api from "../api/api";
import _isEqual from "lodash/isEqual";
import DisplayData from "./DisplayData";

class GetDBDataComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            isLoading:true
           
        }
    }
    componentDidMount() {
        let result;
        console.log("Inside setting state")
        api.get("/contacts").then((res) => {
            this.setState({contacts: res.data,isLoading:false})
            }).catch((err) => console.log(err))
    }

    render() {
        console.log("Inside render")
        return (
            <div>
               {
                   this.state.isLoading?<h1>Loading...</h1>:this.state.contacts.map((item)=><p>{item.name}</p>)
                   }
               
            </div>
        );
    }

    deleteItem(e, id) {
        e.preventDefault()
        console.log("Inside Delete method")
        api.delete("/contacts/"+id).then((res) => {
            console.log("data",res)
            
            this.setState({contacts: res.data})

           
        }).catch((err) => console.log(err))
    }

   

   
}

export default GetDBDataComponent