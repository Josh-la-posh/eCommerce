import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {increaseCart, decreaseCart, removeItem} from '../../Redux/ActionCreator';
import './ShoppingCart.css';

function ShoppingCart () {


    const items = useSelector(state => state.reducer.items);
    const totalItem = useSelector(state => state.reducer.totalItem);

    const dispatch = useDispatch();
    const onIncrease = (item) => {dispatch(increaseCart(item))};
    const onDecrease = (item) => {dispatch(decreaseCart(item))};
    const onDelete = (item) => {dispatch(removeItem(item))};

    const keys = Object.keys(localStorage);

    for (var i in (keys && items)) {
        console.log(keys === items[i].id.toString())
        // console.log(keys[i].toString())
        // console.log(items[i].id.toString())     
        
    }

    return(
        <div className="shopping-cart">
            <div className="shopping-cart__content">
                <div className="cart-left">
                    <h3>Shopping Cart</h3>
                    <p className="text-right">Price</p>
                                        
                    <hr />

                    {items.map(item => {
                        for (var i=0; i<keys.length; i++) {
                            if (parseInt(keys[i]) === item.id) {
                                
                                <div className="cart-left-content" key={item.id}>
                                    <div className="cart-left-items">
                                        <div className="item-img"><img src={item.image} alt="Logo" /></div>
                                        <div className="item-details">
                                            <div className="name">{item.name} {item.model} - {item.color}</div>
                                            <h4>#{item.price}</h4>
                                            <h6>POSH <span>EXPRESS</span></h6>
                                            <p>Posh Express item in your order will be delivered for free (Lagos, Abuja and Anambra only excluding large items)</p>
                                        </div>
                                        <h4></h4>
                                    </div>
                                    <div className="cart-account">
    
                                        <div className="button">
                                            <div className="remove">
                                                <button onClick={()=>{onDelete(item)}}><span><FontAwesomeIcon icon='trash' /></span>Remove</button>                                    
                                            </div>                                        
                                            <div className="cart-button">
                                                <button onClick={()=>{onDecrease(item)}} >-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={()=>{onIncrease(item)}} >+</button>
                                            </div>
                                        </div>
                                        <hr />
                                        {item.quantity ? <div className="text-right">Subtotal (item): <h4>{item.quantity * item.price}</h4></div> : <div></div>}
                                    </div>
                                </div>
                            }
                        }
                    })}           
                </div>

                <div className="cart-right"></div>
            </div>
        </div>
    )
}

export default ShoppingCart;