import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import React from "react"
import STRIPE_KEY from '../private/StripeKey';

const StripeContainer = () => {

    const STRIPE_PUBLIC_KEY = STRIPE_KEY

    const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY)

    return (
        <div>

        <Elements stripe={stripeTestPromise}>

            <PaymentForm/>

        </Elements>

        </div>
    )

}
export default StripeContainer