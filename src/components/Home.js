import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Home.css';

export default class Home extends Component {
    componentDidMount(){
        let typeSpeed = 30;
        let text = "My name Trong, I'm a Self-taught web enthuse";  
        let ele = this.refs.typer;
        let i = 0;
        let typeWriter = () => {
            if (i < text.length) {
                ele.innerHTML += text[i];
                i++;
                typeSpeed*=1.03;
                setTimeout(typeWriter, typeSpeed);
            }
        }
        setTimeout(typeWriter, 1500);
    }
    render(){
        return (
            <section id="home" key="content">
                <div className="intro">
                    <h1>Welcome to my Website</h1>
                    <h2 ref="typer">{null}</h2>
                </div>
                <Link to="/about">Learn More</Link>
            </section>
        );
    }
}