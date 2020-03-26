import React, { Component } from 'react';
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div className='nav'>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Conatct me</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
