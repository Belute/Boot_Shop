import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Cart from './svg/cart-shopping-solid.svg'
import Close from './svg/xmark-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'


export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {

        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt='' width='20' />
                </div>
                <div className="logo">
                    <h1> <Link to='/'>Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login/Register</Link></li>
                        <li className='close' onClick={this.menuToggle}>
                            <img src={Close} alt='' width='20' />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <Link to="/cart">
                            <span>{cart.length}</span>
                            <img src={Cart} alt='' width='20' />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header