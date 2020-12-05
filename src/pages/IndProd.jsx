import React from 'react'
import {StoreData} from '../Store-data'
import { useParams } from 'react-router-dom'
import { NavbarM } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const IndProd = () => {
    let {id} = useParams();
    console.log(id);
    return (
        <>
        <NavbarM/>
        <br/>
        <div className = "Ind-Item">
            <img src={StoreData[id].img} alt="" height = "200px" width = "200px" />
            <h3>{StoreData[id].name}</h3>
            <p>{StoreData[id].desc}</p>
        </div>
        <br/>
        <Footer />
        </>
    )
}
