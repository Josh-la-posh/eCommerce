import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./HeaderComponents/HeaderLayout";
import Home from "./Home/HomeLayout";
import '../App.css';
import FooterHeader from "./FooterComponents/FooterHeader";
import Product from "./ProductComponents/Product";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "@remix-run/router";
import { checkProduct } from "../Redux/action";
import { useParams } from "react-router-dom";

function MainComponent() {
    const items = useSelector(state => state.items);

    const ProductId = () => {
        const id = useParams();
        const item=items.filter(item => item.id === parseInt(id.id))
        return (
            <Product item={item[0]} />
        )
    }

    return (
        <div className="App">
            <HeaderLayout />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route exact path='/product/:id' element={<ProductId  />}/>}
            </Routes>
            <FooterHeader />
        </div>
    );
}
 
export default MainComponent;