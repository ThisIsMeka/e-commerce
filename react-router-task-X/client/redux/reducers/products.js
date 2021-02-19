const GET_PRODUCTS = '@@GET_PRODUCTS'
const GET_RATES = '@@GET_RATES'
const SET_BASE  = 'SET_BASE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const ADD_TO_SELECTION = 'ADD_TO_SELECTION'
const REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION'
const SET_SORT_TYPE = 'SET_SORT_TYPE'
const SET_SEARCH = 'SET_SEARCH'

const initialState = {
    list: [],
    selection: {},
    rates: {},
    base: 'EUR',
    currentPage: 1,
    sortType: 'a-z',
    search: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                list: action.list
            }
        case GET_RATES:
            return {
                ...state,
                rates: action.rates.rates
            }
        case SET_BASE:
            return {
                ...state,
                base: action.base,
                oldBase: action.oldBase
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_SORT_TYPE: {
            return {
                ...state,
                sortType: action.newType
            }
        }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case ADD_TO_SELECTION:
            return {
                ...state,
                selection: {...state.selection, [action.id]: (state.selection[action.id] || 0) + 1}
            }
        case REMOVE_FROM_SELECTION: {
            const newSelection = {
                ...state.selection,
                [action.id]: (state.selection[action.id] || 0) - 1
            }
            if (newSelection[action.id] <= 0) {
                delete newSelection[action.id]
            }
            return {
                ...state,
                selection: newSelection
            }
        }
        default:
            return state
    }
}

export function getProducts() {
    return (dispatch) => {
        fetch('/api/v1/products')
            .then((res) => res.json())
            .then((list) => {
                dispatch({type: GET_PRODUCTS, list})
            })
    }
}

export function addSelection(id) {
    return {type: ADD_TO_SELECTION, id}
}

export function removeSelection(id) {
    return {type: REMOVE_FROM_SELECTION, id}
}

export function getRates() {
    return (dispatch) => {
        fetch('/api/v1/rates').then((res) => res.json()).then((rates) => {
            dispatch({type: GET_RATES, rates})
        })
    }
}

export function setBase(base, oldBase) {
   return { type: SET_BASE, base, oldBase}
}

export function setCurrentPage(page) {
   return { type: SET_CURRENT_PAGE, page}
}

export function searchProducts(search) {
    return { type: SET_SEARCH, search }
}
