import React from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './header'

const Cart = () => {
  const cart = useSelector((store) => store.catalog.cartList)
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-1/4">
            {Object.keys(cart).map((item) => (
              <div>
                {item}:{cart[item]} <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
