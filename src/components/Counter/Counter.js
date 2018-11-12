import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as OldActionCreators from '../../contains/counter.js';

const Counter = ({state,actions}) =>{
    console.log(JSON.stringify(state)+"~~~"+JSON.stringify(actions));
    return(
        <div>
            <input value={state.v} />
            {'  '}
            <button onClick={ actions.INCREMENT }>+</button>
            {'  '}
            <button onClick={ actions.DECREMENT }>-</button>
        </div>
     )
}  

export default connect(
    (state) =>{
        return {
            "v" : state.v
        }
    },
    (dispatch)=>{
        return {
            actions:{
                INCREMENT :function(){
                    dispatch({'type':"INCREMENT"});
                },
                DECREMENT :function(){
                    dispatch({'type':"DECREMENT"});
                }
            }
        }
    }
)(Counter);


