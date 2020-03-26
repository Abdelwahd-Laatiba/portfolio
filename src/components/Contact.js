import React, { Component } from 'react';
import './Contact.css';
import sent from './sent.png'

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
            <h1>Have some questions?</h1>
                <div className='container' >
                    <div className='row' >
                        <div className='col-sm-12 col-md-5 colomns'>
                            <img src={sent} alt='' />
                        </div>
                        <div className='col-sm-12 col-md-6 colomns' >
                            <input type='text' placeholder='your name' required  className='inputs' />
                            <input type='email' placeholder='your email'  required className='inputs' />
                            <textarea placeholder='drop your qustion here ....' className='inputs' ></textarea>
                            <button className='inputs'>Send</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
