import React, { Component } from 'react';
import './Cover.css'

export class Cover extends Component {
    render() {
        return (
            <div className="cover" id='top'>
                <div><h1>Hi, my name is <span>Your Name</span></h1></div>
                <div><h1>I am a full stack develper</h1></div>    
                <div><a href='#about' alt='' ><button>Want to know more</button></a></div>    
            </div>
        )
    }
}


export default Cover;
