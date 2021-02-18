import axios from 'axios'

const initialState = {
    catalogList: [],
    cartList: {},
    currency: 1,
    prefix: 'EUR',
    sortType: 'a-z',
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATALOG': {
            return {
                ...state,
                catalogList: action.catalog
            }
        }
        case 'UPDATE_CART': {
            return {
                ...state,
                cartList: action.cart
            }
        }
        case 'SET_CURRENCY': {
            return {
                ...state,
                currency: action.currency, prefix: action.prefix
            }
        }
        case 'SET_SORT_TYPE': {
            return {
                ...state,
                 sortType: action.newType
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                error: true
            }
        }
        default:
            return state
    }
}

export function setCatalog() {
    return (dispatch) => {
        axios('/api/v1/catalog')
            .then(({data}) => dispatch({type: 'SET_CATALOG', catalog: data}))
    }
}

export function setCurrency(type) {
    return (dispatch) => {
        axios(`/api/v1/currency/${type}`)
            .then(({data}) => dispatch({type: 'SET_CURRENCY', currency: data.value, prefix: data.prefix}))
            .catch(() => dispatch({type: 'SET_ERROR'}))
    }
}

export function addToCart(cart, id) {
    if (cart[id] === undefined) {
        return {type: 'UPDATE_CART', cart: {...cart, [id]: 1}}
    }
    return {type: 'UPDATE_CART', cart: {...cart, [id]: cart[id] + 1}}
}

export function deleteFromCart(cart, id) {
    if (cart[id] === undefined) {
        return {type: 'UPDATE_CART', cart}
    }
    if (cart[id] === 1) {
        const newCart = Object.keys(cart).reduce((acc, rec) => {
            if (rec === id) {
                return acc
            }
            return {...acc, [rec]: cart[rec]}
        }, {})
        return {type: 'UPDATE_CART', cart: newCart}
    }
    return {type: 'UPDATE_CART', cart: {...cart, [id]: cart[id] - 1}}
}

// export function updateSortType(type) {
//     return {type: 'SET_SORT_TYPE', newType: e.target.value }
// }