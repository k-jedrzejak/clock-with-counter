import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {counter: 0}
    }

    add(){
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }     
        })
    }

    subtract(){
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }     
        })
    }

    reset(){
        this.setState({
            counter: 0 
        })
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <h1>{this.state.counter}</h1>
                <button onClick={this.subtract.bind(this)}>-</button>
                <button onClick={this.add.bind(this)}>+</button>
                <div>
                <button onClick={this.reset.bind(this)}>RESET</button>
                </div>

            </div>
        )
    }

}

export default Counter;