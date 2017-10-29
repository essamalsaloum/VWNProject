import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../new_app.css';
import Observ from './obs'
import CompList from './complist'

export default class Buttons extends Component {

    componentDidMount(){
        
    }

    goDown(){
        const item= document.getElementById('down');
        item.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        console.log('done george');
    }

    render() {
        
        return (
            <div className='top'>
                <div className="bod">
                    <div>
                        <button
                            className="but"
                            id='1'
                            onClick={this.props.setKind}> 
                            I'm Newcommer
                        </button>
                    </div>
                    <div>
                        <button
                            className='but'
                            id='2'
                            onClick={this.props.setKind}>
                            I'm Provider
                            </button>
                    </div>
                    <div>
                        <button
                        onClick={()=>this.goDown()}
                        >I'm New Provider</button>
                    </div>
                </div>
            </div>
        )
    }
}