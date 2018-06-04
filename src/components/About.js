import React, {Component} from 'react';
import './css/About.css';

export default class About extends Component {
    render(){
        return (
            <section id="about" key="about">
                <div className="about-info">
                    <h1>About Me</h1>
                    <p>  My passion for coding started when I first took a 
                    programming class back in high school. I fell 
                    in love with it, and I've been coding ever since.
                    I make things from basics games to web apps with javascript.
                    I love to learn and experiences new things with coding.
                    At the moment, I am obsess with javascript because of the amazing things
                    you can do with just javascript and its frameworks. Also, I'm currently 
                    pursuing a bachalor degree in computer science.
                    </p>
                </div>
            </section>
        )
    }
}