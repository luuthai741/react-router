import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Product from './Product'
class Products extends Component {
    render() {
        let list = [
            {
                id: 1,
                name: "Iphone 12",
                slug: "iphone-12",
                price: 600
            },
            {
                id: 2,
                name: "Iphone 12 PRO",
                slug: "iphone-12-pro",
                price: 600
            },
            {
                id: 3,
                name: "Iphone 12 PRO MAX",
                slug: "iphone-12-pro-max",
                price: 600
            },
        ]
        let { match } = this.props;
        let { url } = match;
        let result = list.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <NavLink to={`${url}/${item.slug}`}>
                        {item.id}  - {item.name} - {item.price}
                    </NavLink>
                </li>
            )
        })
        return (
            <div className="container">
                <h1>PRODUCTS LIST</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;