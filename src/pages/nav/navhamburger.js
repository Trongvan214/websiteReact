import React, {Component} from 'react';
import "./css/navhamburger.css";

export default class NavHamburger extends Component {
    render(){
        return (
            <div className="toggle-button" onClick={this.props.onClick}>
                <div className="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}