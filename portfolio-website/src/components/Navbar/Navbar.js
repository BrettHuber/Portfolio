import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import ReactDOM from 'react-dom'
import './Navbar.css'
import { Button } from "../Button/Button"

//ReactDOM.render(element, document.body)

class Navbar extends Component {
    state = { clicked: false } 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className = 'NavbarItems'>
                <img src = ''></img>
                <h1 className = 'navbar-logo'>Brett Huber</h1>
                <div className = 'menu-icon' onClick = {this.handleClick}>
                    <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                                <a className = {item.className} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar
