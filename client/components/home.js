import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Route from 'react-router-dom/es/Route'
import Header from './header'
import { getProducts, getRates } from '../redux/reducers/products'
import Cart from './cart'
import Main from './main'
import Logs from './logs'
import { getLogs } from '../redux/reducers/logs'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
    dispatch(getLogs())
  }, [dispatch])
  return (
    <div>
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <Route exact path="/cart" component={() => <Cart />} />
      <Route exact path="/logs" component={() => <Logs />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
