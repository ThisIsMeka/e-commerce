import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelection, removeSelection } from '../redux/reducers/products'

const Cart = () => {
  const dispatch = useDispatch()
  const selection = useSelector((store) => store.products.selection)
  const list = useSelector((store) => store.products.list)
  const cart = list.filter((el) => Object.keys(selection).includes(el.id))
  const base = useSelector((store) => store.products.base)
  const rates = useSelector((store) => store.products.rates)
  const totalPrice = list
    .reduce(
      (acc, rec) =>
        Object.keys(selection).includes(rec.id)
          ? acc + rec.price * selection[rec.id] * (rates[base] || 1)
          : acc,
      0
    )
    .toFixed(2)
  const symbols = {
    USD: '$',
    EUR: '‎€',
    CAD: 'C$'
  }
  return (
    <div className="container pt-24 mx-auto mt-20">
      <div className="text-lg font-semibold pb-4 mb-8 border-b border-gray-300">My Cart</div>
      {cart.map((item) => (
        <div className="w-full block mb-6 flex-grow lg:flex lg:items-center justify-between lg:w-auto border-b border-gray-300">
          <div className="w-full block mb-6 flex-grow lg:flex lg:w-auto">
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-24 mr-8 border rounded object-contain"
              />
            </div>
            <div className="flex items-center text-md">{item.title}</div>
          </div>
          <div className="flex md:w-1/4 ">
            <div className="text-sm lg:flex-grow">
              <button
                type="button"
                className=" border-2 rounded border-solid hover:border-gray-600 bg-color-gray-100  hover:bg-color-gray-200 border-gray-300 px-4"
                onClick={() => dispatch(removeSelection(item.id))}
              >
                -
              </button>
              <span className="px-8">{selection[item.id] || 0}</span>
              <button
                type="button"
                className=" border-2 rounded border-solid hover:border-gray-600 bg-color-gray-100  hover:bg-color-gray-200 border-gray-300 px-4"
                onClick={() => dispatch(addSelection(item.id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-right text-lg font-semibold">
        Subtotal Amount: {symbols[base]} {totalPrice}
      </div>
    </div>
  )
}

export default Cart
