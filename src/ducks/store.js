import {createStore, applyMiddleware, combineReducers} from 'redux';
import axios from 'axios';

export const GET_STATE = 'GET_STATE'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

export const getState = () => {
    let replaceMe = axios.get('/api/houselist')
    .then(res => res.data)
    console.log(initialState)
    return {
        type: GET_STATE,
        payload: replaceMe
    }
}

function reducer (state = initialState, action) {
    const {type, payload} = action
    switch(type){   
        case GET_STATE:
        return {
            name: payload.name,
            address: payload.address,
            city: payload.city,
            state: payload.state,
            zipcode: payload.zipcode,
            img: '',
            mortgage: 0,
            rent: 0
        }
        default:
            return state
    }
}

export default  createStore(reducer, initialState)