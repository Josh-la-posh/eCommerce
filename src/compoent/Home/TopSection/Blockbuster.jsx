import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCTS } from '../../../files/products';
import './Blockbuster.css';
import {checkProduct} from '../../../Redux/action'
import { Link } from 'react-router-dom';

function Blockbuster() {
    const items = useSelector(state => state.items)

    return (
        <div className="">

            <section className="blockbuster">
                <h4>BlockBusters</h4>
                <div className="blockbuster-content">
                    {items.map(item => {
                        if (item.category === 'Blockbuster') {
                            return (
                                <div key={item.id}>
                                    <Link to={`/product/${item.id}`} className="blockbuster-item">
                                        <img src={item.image} alt="Logo"/>
                                        <p>{item.name}</p>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>



            <section className='blockbuster'>
                <h4>Flash Sales</h4>
                <div className="blockbuster-content">

                    {PRODUCTS.map((item) => {
                        if (item.category === 'Flash Sales') {
                            return (
                                <div key={item.id}>
                                    <Link to={`/product/${item.id}`} className="blockbuster-item">
                                        <img src={item.image} alt="Logo"/>
                                        <p>{item.name}</p>
                                        <span className="off">{Math.floor(Math.random() * 10 + 2)}% OFF</span>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
        </div>
    );
}
 
export default Blockbuster;