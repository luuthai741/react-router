import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Menus = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "About",
        to: "/about",
        exact: false
    },
    {
        name: "Contact",
        to: "/contact",
        exact: false
    },
    {
        name: "Products",
        to: "/products",
        exact: false
    },
    {
        name: "Login",
        to: "/login",
        exact: false
    },
    {
        name: "Logout",
        to: "/logout",
        exact: false
    },
];

class Nav extends Component {
    onLogout = () => {
        localStorage.removeItem("ADMIN")
        return <Redirect to="/login" />
    }
    showMenus = menus => {
        let isLoggin = localStorage.getItem("ADMIN");
        let result = null;
        if (menus.length > 0) {
            if (isLoggin !== null) {
                result = menus.map((item, index) => {
                    if (item.name !== "Logout") {
                        return (<li className="nav-item" key={index}>
                            <NavLink className="nav-link" to={item.to} exact={item.exact} activeClassName="selected">{item.name}</NavLink>
                        </li>)
                    } else if (item.name === "Logout") {
                        return (<li className="nav-item" key={index}>
                            <NavLink className="nav-link" to={item.to} exact={item.exact} activeClassName="selected" onClick={() => this.onLogout()}>{item.name}</NavLink>
                        </li>)
                    } else if (item.name === "Login") {
                        return "";
                    }
                })
            } else if (isLoggin === null) {
                result = menus.map((item, index) => {
                    if (item.name !== "Logout") {
                        return (<li className="nav-item" key={index}>
                            <NavLink className="nav-link" to={item.to} exact={item.exact} activeClassName="selected">{item.name}</NavLink>
                        </li>)
                    }
                })
            }
        }
        return result;
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/" >Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClassName="selected"> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact activeClassName="selected"> About</NavLink>
                        </li> */}
                        {this.showMenus(Menus)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;