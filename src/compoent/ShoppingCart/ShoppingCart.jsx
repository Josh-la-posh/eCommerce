import React from 'react';

function ShoppingCart () {
    return(
        <div className="shopping-cart">
            <div className="shopping-cart__content">
                <div className="cart-left">
                    <h4>Shopping Cart</h4>
                    <p className="text-right">Price</p>
                    <hr />
                    <div className="cart-left-items">
                        <div className="item-img">Image</div>
                        <div className="item-details">
                            <div className="name">NAME</div>
                            <div className="button">
                                <div className="remove"></div>
                                <div className="item-change">
                                    {/* <button onClick={()=>{onDecrease(item)}} >-</button>
                                    <span>{totalItem}</span>
                                    <button onClick={()=>{onIncrease(item)}} >+</button> */}
                                </div>
                            </div>
                        </div>
                        <h4></h4>
                    </div>
                    <hr />
                    <div className="text-right">Subtotal ( item): <h4></h4></div>
                </div>

                <div className="cart-right"></div>
            </div>
        </div>
    )
}

export default ShoppingCart;