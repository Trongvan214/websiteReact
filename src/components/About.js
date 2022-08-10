import React, {Component} from 'react';
import './css/About.css';

export default class About extends Component {
    render(){
        return (
            <section id="about" key="about">
                <div className="about-info">
                    <h1>About Me</h1>
                    <p className="indent">Hi my name is Trong and I'm currently 
                    pursuing a bachalor degree in computer science. My passion for coding started when I first took a 
                    programming class back in high school. I fell 
                    in love with it, and I've been coding ever since.
                    I make things from basics games to web apps with javascript.
                    I like learning new languages and tools to makes coding easier. 
                    At the moment, Javascript is my favorite because of it's flexibility and adaptability. </p>
                </div>
            </section>
        )
    }
}