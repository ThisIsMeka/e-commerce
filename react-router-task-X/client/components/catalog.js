import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/reducers/catalog'
import SortCatalog from './sort-products'

const Catalog = () => {
  const catalog = useSelector((s) => s.catalog.catalogList)
  const cart = useSelector((store) => store.catalog.cartList)
  const currency = useSelector((store) => store.catalog.currency)
  const prefix = useSelector((store) => store.catalog.prefix)
  const sortType = useSelector((store) => store.catalog.sortType)
  const dispatch = useDispatch()

  const sortProducts = (list, type) => {
    if (type === 'price') {
      return list.sort((a, b) => a.price - b.price)
    }
    return list.sort((a, b) => a.title.localeCompare(b.title))
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full border">
        <SortCatalog />
      </div>
      {sortProducts(catalog, sortType).map((el) => (
        <div className="w-1/4">
          <div className="square">
            <img className="landscape" src={el.image} alt="" />
          </div>
          <div>{el.title}</div>
          <div>
            {' '}
            Price: {prefix} {(el.price * currency).toFixed(2)}
          </div>
          <div>
            <button
              type="button"
              onClick={() => dispatch(deleteFromCart(cart, el.id))}
              className="mr-5 inline-block text-sm px-4 py-2 leading-none border rounded text-teal-600 border-teal-600 hover:border-transparent hover:text-teal-300 hover:bg-teal-200 mt-4 lg:mt-0"
            >
              <Link to="">-</Link>
            </button>
            <span>{cart[el.id]}</span>
            <button
              type="button"
              onClick={() => dispatch(addToCart(cart, el.id))}
              className="ml-5  inline-block text-sm px-4 py-2 leading-none border rounded text-teal-600 border-teal-600 hover:border-transparent hover:text-teal-300 hover:bg-teal-200 mt-4 lg:mt-0"
            >
              <Link to="#">+</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

Catalog.propTypes = {}

export default Catalog
