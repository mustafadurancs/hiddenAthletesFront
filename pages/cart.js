import React from 'react'

import PageBanner from '@/components/Common/PageBanner'
import CartContent from '@/components/Cart/CartContent'
 
const Cart = () => {
    return (
        <>
            <h1>ADMIN DASHBOARD </h1>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <CartContent />
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Cart;