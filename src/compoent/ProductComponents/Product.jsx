import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkProduct } from '../../Redux/action';

function Product({item}) {
    const items = useSelector(state => state.items);

    return (
        <div className="product">
            <div className="container">
                <div className="product-content">
                    <div className="img-display">
                        <div className="img-display-content">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="img-nothing-content"></div>
                    </div>

                    <div className="information display">
                        <div className="information-display-content">
                            <h2>{item.name} {item.model} {item.description} {item.memory && <>({item.memory}GB) - {item.color}</>}</h2>
                            <p>Brand: <a href="">Apple</a> | <a href="">Similar Products from Apple</a></p>

                            <hr />
                            
                            <h1>#{item.price}</h1>

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
                                <p>Pattern name: <h6>{item.name} {item.model}</h6></p>
                                {item.color && <p><h6>Colour:</h6>{item.color}</p>}
                                {item.brand ? <p><h6>Brand:</h6> {item.brand}</p> : <p><h6>Brand:</h6> {item.name}</p>}
                                {item.model && <p><h6>Model</h6>{item.name} {item.model}</p>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
 
export default Product;