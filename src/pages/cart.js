import React from 'react'


import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

import Cart from '../components/Cart'

const CartPage = () => (
  <Layout>
  <PageHeader title="Cart" subtitle="" />
    <section className="section">
      <div className="container">
        <h1>Cart</h1>
        <Cart />
      </div>
    </section>
  </Layout>
)

export default CartPage
