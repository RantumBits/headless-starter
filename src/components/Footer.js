import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          ⚒ by{' '}
          <a href="https://ecomloop.com" target="_blank" rel="noopener noreferrer">
            ecomloop
          </a>{' '}
          in 🥑 california
          <br />© Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
