import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: £{props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="danger" clicked={props.purchasedCanceled}>CANCEL</Button>
            <Button btnType="success" clicked={props.purchasedContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;