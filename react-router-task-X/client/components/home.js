import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Cart from './cart'
import Main from './main'
import DummyView from './dummy-view'
import Header from './header'
import { setCatalog } from '../redux/reducers/catalog'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCatalog())
    }, [dispatch])
    return ( < div >
        <
        Header / >
        <
        div className = "container mx-auto pt-12 pb-8" >
        <
        Route exact path = "/"
        component = {
            () => < Main / >
        }
        /> <Route exact path = "/cart
        "
        component = {
            () => < Cart / >
        }
        /> <Route exact path = "/logs
        "
        component = {
            () => < DummyView / >
        }
        /> </div > < /div>
    )
}

Home.propTypes = {}

export default Home