import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null
/* eslint-disable no-unused-vars */
  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null
/* eslint-enable no-unused-vars */
  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <>
      <div className="Cart--row">
        <div className="Cart--cell">
          <span className="Cart--Thumbnail">{variantImage}</span>
        </div>
        <div className="Cart--cell">{line_item.title}</div>
        <div className="Cart--cell">
          {line_item.variant.selectedOptions[0].value}
        </div>
        <div className="Cart--cell">{line_item.quantity}</div>
        <div className="Cart--cell">${line_item.variant.price}</div>
        <div className="Cart--cell">
          ${line_item.quantity * line_item.variant.price}
        </div>
        <div className="Cart--cell">
          <button
            className="Button"
            style={{ background: 'var(--midGrey)', color: 'var(--secondary)' }}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  )
}

export default LineItem
