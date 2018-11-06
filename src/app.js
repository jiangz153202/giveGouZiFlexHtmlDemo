import React , { Component } from "react";
import Card from './card';
let arr = [1,2,3,4,5,6].map((val,index)=>{
    return (
        <div style={{"flex":"1","backgroundColor":"#000","display":"flex","padding":"50px"}}>
            <Card number={val} />
        </div>
    )
})
class App extends Component{
    constructor(){
        super()
        
    }
    render(){
        return (
            <div style={{"width":"100%","display":"flex","flexWrap":"wrap"}}>
                { arr }
            </div>
        );
    }
}
export default App;
