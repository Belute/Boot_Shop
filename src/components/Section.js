import React, { Component } from 'react'
import { Products } from './section/Products'
import Details from './section/Details'
import Cart from './section/Cart'
import Payment from './section/Payment'

import { Routes, Route } from "react-router-dom"



export class Section extends React.Component {
    render() {
        return (
            <section>

                <Routes>
                    <Route path="/product" element={<Products />} exact />
                    <Route path='/product/:id' element={<Details />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/payment' element={<Payment />} />

                </Routes>
            </section>
        )
    }
}

export default Section