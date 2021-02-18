import React from 'react'
import { useDispatch } from 'react-redux'

const SortCatalog = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <select
        className="p-3 border-none"
        onChange={(e) => dispatch({ type: 'SET_SORT_TYPE', newType: e.target.value })}
      >
        Sort
        <option selected="selected" value="a-z">
          {' '}
          Alphabetically, A-Z
        </option>
        <option value="price">Price, low to high</option>
      </select>
    </div>
  )
}

SortCatalog.propTypes = {}

export default SortCatalog
