import React from 'react'
import { useDispatch } from 'react-redux'

const SortCatalog = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <select
        className="inline-block text-md px-4 mx-2 py-2 focus-none leading-none text-black hover:text-teal-500 hover:bg-white mt-3 lg:mt-0 ml-2"
        onChange={(e) => dispatch({ type: 'SET_SORT_TYPE', newType: e.target.value })}
      >
        <option selected="selected">Sort By</option>
        <option value="a-z"> Alphabetically, A-Z</option>
        <option value="price">Price, low to high</option>
      </select>
    </div>
  )
}

SortCatalog.propTypes = {}

export default SortCatalog
