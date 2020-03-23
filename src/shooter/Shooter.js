import React from 'react';
import './Shooter.css';

class Shooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: 150
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress)
    }
    handleKeyPress(e){
        if(e.key === 'ArrowLeft' && this.state.position != 0){
            this.setState((state, props) => {
                return {position: this.state.position - 10}
            })
        }else if(e.key === 'ArrowRight' && this.state.position < 350){
            this.setState((state, props) => {
                return {position: this.state.position + 10}
            })

        }else if(e.key === ' '){
            console.log('shoot');

        }
    }
    render(){
        return(
            <div className="shooter" style={{left: this.state.position + 'px'}}>
                <img src="https://media.giphy.com/media/sWQTD782yREzK/giphy.gif" />
            </div>
        )
    }
}

export default Shooter;