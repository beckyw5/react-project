import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js';

// changing to a class component, so we can add life cycle hooks, so we can see when this is updates
class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: £{this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="danger" clicked={this.props.purchasedCanceled}>CANCEL</Button>
                <Button btnType="success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;