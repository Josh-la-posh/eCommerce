import React, { Component } from 'react';
import { PRODUCTS } from '../../../files/products';
import './Blockbuster.css';

class Blockbuster extends Component {
    state = {  } 
    render() { 
        return (
            <div className="">

                <section className="blockbuster">
                    <h4>BlockBusters</h4>
                    <div className="blockbuster-content">
                        {PRODUCTS.map(item => {
                            if (item.category === 'Blockbuster') {
                                return (
                                    <a href='/product' className="blockbuster-item" key={item.id}>
                                        <img src={item.image} alt="Logo"/>
                                        <p>{item.name}</p>
                                    </a>
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
                                    <a href='/product' className="blockbuster-item" key={item.id}>
                                        <img src={item.image} alt="Logo"/>
                                        <p>{item.name}</p>
                                        <span className="off">{Math.floor(Math.random() * 10 + 2)}% OFF</span>
                                    </a>
                                )
                            }
                        })}
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Blockbuster;