import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props){
     super(props)
     this.state = { count : 0 } 
    }  
    
    handleIncrease = (e) =>{
     e.preventDefault();
     this.setState({count: this.state.count +1}) 
    }

    handleDecrease = (e) =>{
     e.preventDefault();
     this.setState({count: this.state.count -1})
    }

    render() {
        return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
                <h1>Class Counter:{this.state.count}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                &nbsp;
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        );
    }
}

export default ClassCounter;
