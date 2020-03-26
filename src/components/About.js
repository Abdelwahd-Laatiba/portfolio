import React, { Component } from 'react';
import './About.css'

export class About extends Component {
    render() {
        return (
            <div className='about' id='about'>
                <div className="container">
                <h1>About Me</h1>
                    <div className="row ">
                    <div className="col-sm-12 col-md-6 pad">
                        <img src="https://via.placeholder.com/250" alt='' />
                        <h3>Your Name</h3>
                        <h4>Web develper</h4>
                    </div>
                    <div className="ccol-sm-12 col-md-6 pad">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo mollitia fuga tempora repudiandae dolore, cupiditate vitae omnis eum quaerat repellendus! Ratione quis, vero pariatur nostrum architecto in vel voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo mollitia fuga tempora repudiandae dolore, cupiditate vitae omnis eum quaerat repellendus! Ratione quis, vero pariatur nostrum architecto in vel voluptas!
                        </p>
                        <button>View resume</button>
                    </div>
                    </div>
            </div>
            </div>
            
        )
    }
}

export default About;
