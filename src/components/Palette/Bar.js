import React from 'react';
import { connect } from 'react-redux'
import { combineReducers } from 'redux'
import * as actions from '../../actions/counter';

class Bar extends React.Component{
    constructor(state){
        super(state);
        this.state = {
            ...state
        }
       
        this.rangeChange = (this.rangeChange).bind(this);
       
    }



    rangeChange(event){
        let value = event.target.value;
        let mykey = this.state.ss;
        console.log(JSON.stringify(this.state)+"更改一下111");
       
        this.setState({
            "value":value
        });
        
        // this.state.actions.rgbUpdate(mykey,value);
        // console.log(this.state.actions)
    }

    render(){
        return(
            <div> 
                <input type="number" value={this.state.value}  onChange={this.rangeChange} />
                <input type="range" min={0} max={255} value={this.state.value} defaultValue={this.state.value}  onChange={this.rangeChange} />
            </div>
        )
    }
}


export default connect(
    (state,ownProps)=>{
        return {...state.palette,...ownProps}
    },
    (dispatch)=>{
        return {
            actions:combineReducers(actions,dispatch)
        }
    }
)(Bar);