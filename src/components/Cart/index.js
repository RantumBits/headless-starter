import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import './Cart.css'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div>
      <div className="Cart--table">
        <div className="Cart--row">
          <div className="Cart--cell">
            <b>Image</b>
          </div>
          <div className="Cart--cell">
            <b>Product</b>
          </div>
          <div className="Cart--cell">
            <b>Variant</b>
          </div>
          <div className="Cart--cell">
            <b>Quantity</b>
          </div>
          <div className="Cart--cell">
            <b>Price</b>
          </div>
          <div className="Cart--cell">
            <b>Amount</b>
          </div>
          <div className="Cart--cell">&nbsp;</div>
        </div>
        {line_items}

        <div className="Cart--row">
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">
            <h2>Subtotal</h2>
          </div>
          <div className="Cart--cell">${checkout.subtotalPrice}</div>
          <div className="Cart--cell">&nbsp;</div>
        </div>

        <div className="Cart--row">
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">&nbsp;</div>
          <div className="Cart--cell">
            <h2>Total</h2>
          </div>
          <div className="Cart--cell">${checkout.totalPrice}</div>
          <div className="Cart--cell">&nbsp;</div>
        </div>
      </div>

      <button
        className="Button Cart--Checkout"
        style={{ background: 'var(--secondary)' }}
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>
    </div>
  )
}

export default Cart
