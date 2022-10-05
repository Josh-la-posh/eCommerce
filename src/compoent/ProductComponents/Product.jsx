import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkProduct, increaseCart, decreaseCart } from '../../Redux/action';

function Product({item}) {

    // const quantity = useSelector(state => state.quantity);

    const dispatch = useDispatch();
    const onIncrease = (item) => {dispatch(increaseCart(item))};
    const onDecrease = (item) => {dispatch(decreaseCart(item))};

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
                            <p>Brand: <a href="">{item.brand}</a> | <a href="">Similar Products from {item.brand}</a></p>

                            <hr />
                            
                            <h1>#{item.price}</h1>

                            {item.quantity ?
                            <div className="cart-button">
                                <button onClick={()=>{onDecrease(item)}} >-</button>
                                <span>{item.quantity}</span>
                                <button onClick={()=>{onIncrease(item)}} >+</button>
                                <span>({item.quantity} item(s) added)</span>
                            </div>
                            :
                            <button onClick={()=>{onIncrease(item)}} className='addToCart'><FontAwesomeIcon className='icon' icon='cart-plus' />ADD TO CART</button>}

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
                                <div>Pattern name: <h6>{item.name} {item.model}</h6></div>
                                {item.color && <div><h6>Colour:</h6>{item.color}</div>}
                                {item.brand ? <div><h6>Brand:</h6> {item.brand}</div> : <div><h6>Brand:</h6> {item.name}</div>}
                                {item.model && <div><h6>Model</h6>{item.name} {item.model}</div>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
 
export default Product;