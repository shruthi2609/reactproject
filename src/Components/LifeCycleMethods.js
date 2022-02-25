import React from "react"
class LifeCycleMethods extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            count:0,
            message:""
        }
    }
  /*  componentDidMount(){
        console.log("did mount")
        setTimeout(()=>this.setState({count:this.state.count+1}),5000)
    }
    static getDerivedStateFromProps(props,state){
        console.log("getderivedState method")
        return {
            message:props.msgFromParent
        }
    }
    shouldComponentUpdate=(nextProps,newState)=>{
        console.log("inside shouldcomponentupdate")
    if(nextProps.prop1!==this.props.prop1){
        return true
    }
    else{
        return false
    }
    return true
      /*  if(newState.count!==this.state.count){
            return true
        }
        else{
            return false
        }
        
    }*/
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot")
        console.log("accessing prev state in snapshot",prevState.count)
        return false
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        console.log("did update")
        if(prevState.count!==this.state.count){
            console.log("count changed")
        }
        else{
            console.log("count not changed")
        }

    }
    
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("inside child")
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <h4>{this.props.prop1}</h4>
            </div>

        )
    }
}
export default LifeCycleMethods