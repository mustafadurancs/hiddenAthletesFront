import React from "react";
import StripeCheckout from "./stripePayment";

const Checkout = () => {
    return (
        <div className="main-banner" >

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6">

                                <div>
                                    <span></span>
                                    <StripeCheckout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Checkout;