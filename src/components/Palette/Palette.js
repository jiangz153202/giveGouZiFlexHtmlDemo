import React from 'react';
import Bar from './Bar';
import classNames from 'classnames';
import { connect } from 'react-redux';

require('./Palette.less')

class Palette extends React.Component{
    constructor(props){
        super(props);
       // console.log(JSON.stringify(props)+"UpdateTime"+(new Date).toLocaleTimeString());
    }

    render(){
        let arr = [];
        for (let [k, v] of Object.entries(this.props)) {
            let item = <Bar value={v} ss={k} ></Bar>;
            arr.push(item);
        }
        
        // for (let index = 0; index < array.length; index++) {
        //     if(typeof array[index] != 'function'){
               
        //     } // const element = array[index]; 
        // }

        return(
            <div className={'palette'}>
                <div className={'palette_block'} style={{"backgroundColor":`rgb(${this.props.r},${this.props.g},${this.props.b})`}}></div>
                <div>
                    {arr} 
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return state.palette
    },
    ()=>{}
)(Palette);