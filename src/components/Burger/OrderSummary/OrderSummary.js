import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import styled from 'styled-components'

const StyledButton = styled.div`
	background-color: transparent;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;
	color: ${props => props.primary? '#5C9210' : '#944317'}
`

const StyledButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[Order Summary] Will Update')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (
                <li key={igKey}>
                 <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
               </li>
        )
        }) 

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout</p>
                <StyledButtonsBox>
                    <StyledButton primary onClick={this.props.purchaseCancelled}>CANCEL</StyledButton>
                    <StyledButton onClick={this.props.purchaseContinued}>CONTINUE</StyledButton>
                </StyledButtonsBox>
            </Aux>
        )
    }
}

export default OrderSummary
