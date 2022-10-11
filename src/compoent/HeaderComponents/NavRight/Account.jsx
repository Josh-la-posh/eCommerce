import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Account = () => {
    return (
        <a href='/' className="menu">
            <span className='icon icon-left'><FontAwesomeIcon icon='user' /></span>
                Account
            <span className='icon'><FontAwesomeIcon icon='chevron-down' /></span>
        </a>
    )
}