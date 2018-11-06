import React , { Component } from 'react';

const styles = {
    "width":"400px",
    "height":"200px",
    "backgroundColor":"red",
    "boxShadow": "0 1px 10px #ccc",
    "borderRadius": "5px",
    "padding": "5px"
}
class Card extends Component{
    constructor(props){
        super();
      
    }
    render(){
        return (
            <div style={styles}>
                我是card {this.props.number}
            </div>
        )
    }
}

export default Card;