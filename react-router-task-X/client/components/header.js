import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setBase } from '../redux/reducers/products'
import './cart.css'

const Header = () => {
  const cart = useSelector((store) => store.products.selection)
  const base = useSelector((store) => store.products.base)
  const dispatch = useDispatch()
  const totalQuantity = Object.keys(cart).reduce((acc, rec) => {
    return acc + cart[rec]
  }, 0)
  return (
    <nav className="flex fixed w-full z-30 top-0 bg-gray-100 items-center justify-between flex-wrap border-b solid p-6">
      <div className="flex items-center flex-shrink-0 text-black">
        <span className="font-semibold text-xl">
          <Link
            to="/"
            type="button"
            className="inline-block text-xl px-4 mx-2 py-2 focus-none leading-none hover:text-teal-500 mt-3 lg:mt-0 ml-2"
          >
            Online Grocery Shop
          </Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {['USD', 'EUR', 'CAD'].map((el) => (
            <button
              type="button"
              className="text-sm mx-2 px-4 py-2 leading-none border rounded border-black text-black hover:text-teal-500 mt-4 lg:mt-0"
              onClick={() => dispatch(setBase(el, base))}
            >
              {el}
            </button>
          ))}
        </div>
        <div className="cart">
          <Link to="/cart">
            <ion-icon name="cart-outline" />({totalQuantity})
          </Link>
        </div>
        <div className="logs mx-4">
          <Link to="/logs">
            <ion-icon name="time-outline" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
