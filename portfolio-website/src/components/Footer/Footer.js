import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ContactItems } from './ContactItems'
import './Footer.css'

class Footer extends Component {
    state = { clicked: false } 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className = 'Footer'>
                <ul className = 'footer-menu'>
                    {ContactItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <img class = "footer-icons" src = {item.icon}></img>
                                <a className = {item.className} href = {item.url} target="_blank">
                                    {item.display}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Footer