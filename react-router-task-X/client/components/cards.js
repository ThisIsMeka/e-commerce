import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelection, removeSelection, searchProducts } from '../redux/reducers/products'
import Pagination from './pagination'
import SortCatalog from './sort-products'
import './cards.scss'

const Cards = () => {
  const sortType = useSelector((store) => store.products.sortType)
  const currentPage = useSelector((store) => store.products.currentPage)
  const search = useSelector((store) => store.products.search)
  const list = useSelector((store) => store.products.list).slice(
    (currentPage - 1) * 20,
    currentPage * 20
  )
  const selection = useSelector((store) => store.products.selection)
  const base = useSelector((store) => store.products.base)
  const rates = useSelector((store) => store.products.rates)
  const dispatch = useDispatch()
  const symbols = {
    USD: '$',
    EUR: '‎€',
    CAD: 'C$'
  }

  const filteredList = list.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))

  const sortProducts = (listItem, type) => {
    if (type === 'price') {
      return listItem.sort((a, b) => a.price - b.price)
    }
    return listItem.sort((a, b) => a.title.localeCompare(b.title))
  }

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <SortCatalog />
        </div>
        <Pagination />
      </div>
      <div className="max-w-xl pt-10 mx-auto mb-12 border-b border-b-2 border-gray-800 py-2">
        <input
          type="text"
          placeholder="  Search... "
          onChange={(e) => dispatch(searchProducts(e.target.value))}
          className="appearance-none bg-transparent border-b opacity-75 text-gray-700 border-gray-200 bg-grey-50 w-full focus:outline-none text-black mr-3 ry-1"
        />
      </div>
      <div className="flex flex-wrap -mx-8">
        {sortProducts(filteredList, sortType).map((card) => (
          <div className="w-1/4 px-8">
            <div className="border my-5 border-solid border-gray-300 p-4">
              <div className=" flex justify-center">
                <img src={card.image} alt={card.title} className="product-card-img-wrapper" />
              </div>
              <div className="product-card">
                <div className="my-4 h-12">{card.title}</div>
                <div className="text-lg font-semibold text-gray-800">
                  {symbols[base]}
                  {(card.price * (rates[base] || 1)).toFixed(2)}
                </div>
              </div>
              <div className=" flex justify-center mt-4">
                <button
                  type="button"
                  className=" border-2 rounded border-solid hover:border-gray-600 bg-color-gray-100  hover:bg-color-gray-200 border-gray-300 px-4"
                  onClick={() => dispatch(removeSelection(card.id))}
                >
                  -
                </button>
                <span className="px-10">{selection[card.id] || 0}</span>
                <button
                  type="button"
                  className=" border-2 rounded border-solid hover:border-gray-600 bg-color-gray-100  hover:bg-color-gray-200 border-gray-300 px-4"
                  onClick={() => dispatch(addSelection(card.id))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
