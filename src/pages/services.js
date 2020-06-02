import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ServicesPage = () => (
  <Layout>
    <PageHeader
      title="shop the demo store"
      subtitle="check out the aweswome products"
      backgroundImage="../images/headless_hero.jpg"
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>
  </Layout>
)

export default ServicesPage
