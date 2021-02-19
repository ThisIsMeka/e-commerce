import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../redux/reducers/products'

const Pagination = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.products.list)
  const pages = new Array(Math.ceil(list.length / 20)).fill(0).map((el, index) => index + 1)
  return (
    <ul className="pagination flex justify-end">
      {pages.map((item) => (
        <li className="inline-block outline-none text-sm leading-none border rounded text-black border-black hover:text-teal-500 hover:bg-white mt-3 lg:mt-0 ml-2">
          <button
            type="button"
            className="outline-none p-2 focus:shadow-outline focus:bg-teal-100"
            onClick={() => dispatch(setCurrentPage(item))}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
