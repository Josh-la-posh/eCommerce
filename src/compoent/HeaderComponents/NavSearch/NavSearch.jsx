import React, { Component } from 'react';
import './NavSearch.css';
import Search from './Search';

class NavSearch extends Component {
    state = {  } 
    render() { 
        return (
            <div className="nav-search">
                <Search />
            </div>
        );
    }
}
 
export default NavSearch;