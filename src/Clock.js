import React from "react";

class Clock extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date()}
    }

    componentDidMount(){
        this.time = setInterval(() => {
            this.tick()
        },1000)

    }

    componentWillMount(){
        clearInterval(this.time)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    dayTime() {
        let hours = this.state.date.getHours();
        let timeOfDay;
        if(hours < 12) {
            timeOfDay = "morning";
        }
        else if (hours >=12 && hours < 17) {
            timeOfDay = "afternoon";
        }
        else {
            timeOfDay = "evening";
        }

        return(
            timeOfDay
        )
    }






    render() {
        return(
            <div style={{textAlign: 'center', marginBottom: '50px'}}>
                <h1>Good {this.dayTime()}!</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
            
        )
    }

}

export default Clock;