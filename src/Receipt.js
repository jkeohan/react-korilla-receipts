import React, { Component } from 'react';
import './Receipt.css'

function Receipts (props) {
    let newWord = ''
    for (let i = 0; i < props.valid.length; i++) {
        newWord += props.text.person.charAt(i)
    }
    if (!props.text.paid && newWord === props.valid) {
        return (
            <div className='receipt'>
                <h1>{props.text.person}</h1>
                <span>Main: {props.text.order.main}</span><br></br>
                <span>Protein: {props.text.order.protein}</span><br></br>
                <span>Rice: {props.text.order.rice}</span><br></br>
                <span>Sauce: {props.text.order.sauce}</span><br></br>
                <span>Drink: {props.text.order.drink}</span><br></br>
                <span>Cost: {props.text.order.cost}</span>
            </div>
        )
    } else {
        return null
    }
}

export default Receipts