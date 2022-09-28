import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./HeaderComponents/HeaderLayout";
import Home from "./Home/HomeLayout";
import '../App.css';
import FooterHeader from "./FooterComponents/FooterHeader";
import Product from "./ProductComponents/Product";

class MainComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div className="App">
                <HeaderLayout />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/product' element={<Product />}/>
                </Routes>
                <FooterHeader />
            </div>
        );
    }
}
 
export default MainComponent;