import React, { Component } from 'react';

class Product extends Component {
    render() {
        let { match } = this.props;
        return (
            <div>
                Product {match.params.slug}
            </div>
        );
    }
}

export default Product;