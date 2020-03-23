import React from 'react';
import './Alien.css';

class AlienBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: 55,
            speed: 3,
            top: 0
        }
        this.moveDown = this.moveDown.bind(this);
    }
    componentDidMount(){
        //on component mount, initiate moveDown for every iteration of speed
        window.setInterval(this.moveDown, this.state.speed * 1000)
    }

    //move the entire block down when block completes one round of animation
    moveDown(){
        this.setState((state, props) => {
            //update top
            return {top: state.top + 10}
        });        
    }

    render(){
        return(
        <div className="alien-block" style={{animationDuration: this.state.speed+'s', top: this.state.top+'px'}}>
            <AlienRow />
            <AlienRow />
            <AlienRow />
            <AlienRow />
            <AlienRow />
        </div>
        )
    }
}

class AlienRow extends React.Component {
    render(){
        return(
        <div className="alien-row">
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
            <Alien />
        </div>
        )
    }
}

class Alien extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hit: false
        }
    }
    render(){
        return(
            <img className="alien" src="https://media1.giphy.com/media/KY2ZMhnCxP008/giphy.gif" />
        )
    }
}

export default AlienBlock;