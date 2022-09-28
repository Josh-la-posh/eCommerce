import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavSearch.css';

import {PRODUCTS} from '../../../files/products';

class Search extends Component {
    state = { 
        search: ''
     }

     onSearch = (e) => {
         this.setState({
             search: e.target.value,
         })

         console.log(e.target.value)
     }
    render() { 
        const FilterSearch = PRODUCTS.filter((item) => {
            return item.name.toLowerCase().includes(this.state.search.toLowerCase())
        });
        
        return (
            
            <div className="search">
                <div className="input">
                    <input type="text"
                            placeholder="Search products, brands adn categories"
                            onChange={this.onSearch}
                             />
                    <span className='icon'><FontAwesomeIcon icon='magnifying-glass' /></span>


                    <ul>
                        {this.state.search && FilterSearch.map(search => {
                            return (
                                <li key={search.id}>{search.name}{console.log(search)}</li>
                            )
                        })}
                    </ul>
                    
                </div>
            </div>
        );
    }
}
 
export default Search;