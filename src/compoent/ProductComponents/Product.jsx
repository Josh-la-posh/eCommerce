import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';

class Product extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <div className="product">

                    <div className="img-display">
                        <div className="img-display-content">
                            <img src="../../images/product/iphone14.jpg" alt="" />
                        </div>
                    </div>

                    <div className="information display">
                        <div className="information-display-content">
                            <h2>Brand Name</h2>
                            <p>Brand: <a href="">Apple</a> | <a href="">Similar Productws from Apple</a></p>

                            <hr />
                            
                            <h1>N450,000</h1>

                            <button className='addToCart'><FontAwesomeIcon className='icon' icon='cart-plus' />ADD TO CART</button>

                            <div className="delivery">
                                <div className="pay">
                                    <div className="">Icon</div>
                                    <p>Pay on Delivery</p>
                                </div>
                                <div className="pay">
                                    <div className="">Icon</div>
                                    <p>Free Delivery</p>
                                </div>
                                <div className="pay">
                                    <div className="">Icon</div>
                                    <p>7 Days Replacement</p>
                                </div>
                                <div className="pay">
                                    <div className="">Icon</div>
                                    <p>PoshStore Delivered</p>
                                </div>
                            </div>

                            <hr />

                            <div className="product-details">
                                <p>Colour: <span>Black</span></p>
                                <p><span>Brand</span> Redmi</p>
                                <p><span>Model Name</span> Rdmi A1</p>
                                <p><span>Cellular</span> Redmi</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;