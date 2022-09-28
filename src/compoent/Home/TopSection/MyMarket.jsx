import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyMarket.css';

class MyMarket extends Component {
    state = {  } 
    render() { 
        return (
            <section className="carousel row">
                <div className="left-content col-lg-2 col-md-3">
                    <ul>
                        <li><a href="">Health & Beauty</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='mobile' /><a href="">Phones & Tablets</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='laptop' /><a href="">Computing</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='car-side' /><a href="">Electronics</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='shirt' /><a href="">Fashion</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='gamepad' /><a href="">Gaming</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='volleyball' /><a href="">Sporting Goods</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='ellipsis' /><a href="">Other categories</a></li><br />

                    </ul>
                </div>
                <div className="main-content col-lg-3 col-md-3">

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="../../images/product/fogg.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="../../images/product/nivea.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                {/* <div className="right-content col-lg-3">
                    <div className="top-box">
                        <div className="content">
                            TOP BOX
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="content">
                            BOTTOM BOX
                        </div>
                    </div>
                </div> */}
            </section>
        );
    }
}
 
export default MyMarket;