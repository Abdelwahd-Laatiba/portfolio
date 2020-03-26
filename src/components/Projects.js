import React, { Component } from 'react';
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div className='projects'>
            <h1>Projects</h1>
                <div className='container'>
                    <div className='row' >
                        <div className='col-sm-12 col-md 6 pad' >
                            <h3>Project title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, praesentium quisquam. Rerum soluta iusto iste fugit culpa magni molestiae at quisquam laboriosam cum. Numquam totam minus hic voluptates debitis quasi!s</p>
                            <button>See live</button>
                            <a href="www.google.com" target='_blank'>Source code</a>
                        </div>
                        <div className='col-sm-12 col-md 6 pad' >
                            <img src='https://via.placeholder.com/250' alt='' />
                        </div>
                    </div>
                    <div className='row' >
                        <div className='col col-sm-12 col-md 6 pad' >
                            <img src='https://via.placeholder.com/250' alt='' />
                        </div>
                        <div className='col-sm-12 col-md 6 pad' >
                            <h3>Project title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, praesentium quisquam. Rerum soluta iusto iste fugit culpa magni molestiae at quisquam laboriosam cum. Numquam totam minus hic voluptates debitis quasi!s</p>
                            <button>See live</button>
                            <a href="www.google.com" target='_blank'>Source code</a>
                        </div>
                    </div>
                    <div className='row' >
                        <div className='col-sm-12 col-md 6 pad' >
                            <h3>Project title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, praesentium quisquam. Rerum soluta iusto iste fugit culpa magni molestiae at quisquam laboriosam cum. Numquam totam minus hic voluptates debitis quasi!s</p>
                            <button>See live</button>
                            <a href="www.google.com" target='_blank'>Source code</a>
                        </div>
                        <div className='col-sm-12 col-md 6 pad' >
                            <img src='https://via.placeholder.com/250' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
