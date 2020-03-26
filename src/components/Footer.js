import React, { Component } from 'react';
import './Footer.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import github from './github.png';
import arrow from './up-arrow.png';

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
            <a href='#top' alt=''><img src={arrow} alt='' /> </a>
                <div className='container' >
                    <div className='row images'>
                        <div className='col-sm-12 col-md-6'>
                            <a href='#' target='_blank' ><img src={facebook} alt='' /></a>
                            <a href='#' target='_blank' ><img src={instagram} alt='' /></a>
                            <a href='#' target='_blank' ><img src={github} alt='' /></a>
                        </div>
                    </div>
                    <div className='row'>
                        <p>Develped by <a href=''>Abdelwahd Laatiba</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
