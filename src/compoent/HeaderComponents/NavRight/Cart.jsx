import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

export const Cart = () => {
    const totalItem = useSelector(state => state.totalItem);
    return (
        <a href='' className="menu">
            <span className='icon icon-left'><FontAwesomeIcon icon='cart-shopping' />
                <span className='badge bg-secondary icon-badge'>{totalItem > 0 && totalItem}</span>
            </span>
            Cart
        </a>
    )
}