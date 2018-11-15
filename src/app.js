import React , { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/counter.js';

class App extends React.Component{
    render(){
        return (
            <div>
                测试
                {this.props.v}
                <input type="button" value="加一" onClick={this.props.actions.addTodo} />
                {'  '}
                <input type="button" value="减一" onClick={this.props.actions.drcTodo} />
            </div>
        )
    }
}

// let App = ({v,actions}) => {
//     console.log(actions);
//     return (
//         <div>
//             <h1>{v}</h1>
//             {'  '}
//             <input type="button" value="加一" onClick={actions.addTodo} />
//             {'  '}
//             <input type="button" value="减一" onClick={actions.drcTodo} />
//         </div>
//     )
// }


export default connect(
    (state) =>{
        return {
            v : state.counter.v
        }
    },
    (dispatch) => {
        return {
            actions : bindActionCreators(actions,dispatch)
        }
    }
)(App);

 