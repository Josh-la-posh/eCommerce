import React from 'react';
import { Navbar } from 'reactstrap';
import Logo from './NavLeft/Logo';
import NavRight from './NavRight/NavRight';
import './HeaderLayout.css';
import NavSearch from './NavSearch/NavSearch';

function HeaderLayout () {
    return(
        <React.Fragment>
            <Navbar expand='md' light id='nav'>
                <div id="header-nav" className=''>
                    <Logo />
                    <NavSearch />
                    <NavRight />
                </div>
                
            </Navbar>            
        </React.Fragment>
    )
}

export default HeaderLayout;