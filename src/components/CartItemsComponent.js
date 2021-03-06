import React from 'react';

const CartItem = ({cartItemsList}) => {
    return cartItemsList.map(item => {
        return(
            <div className="list-group-item">
                <div class="collection-item">
                    <div class="row">
                        <div class="col-md-8">{item.product.name}</div>
                        <div class="col-md-2">{item.product.priceInCents}</div>
                        <div class="col-md-2">{item.quantity}</div>
                    </div>
                </div>
            </div>)
    });
}

export default CartItem;