import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/header.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/catalog'

const Header = () => {
  const cart = useSelector((store) => store.catalog.cartList)
  const dispatch = useDispatch()
  const totalQuantity = Object.keys(cart).reduce((acc, rec) => {
    return acc + cart[rec]
  }, 0)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Online Shopping Store</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <select className="rounded p-3" onChange={(e) => dispatch(setCurrency(e.target.value))}>
            <option selected="selected" value="EUR">
              EUR
            </option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div className="cart">
          <Link to="/cart">
            <button
              type="button"
              className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 lg:mt-0 ml-2"
            >
              <ion-icon className="mx-2" name="cart-outline" />
              Cart
              <span className="ml-2">{totalQuantity}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default Header
