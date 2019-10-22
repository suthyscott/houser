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

const ADD_STEP_ONE = 'ADD_STEP_ONE'

const ADD_STEP_TWO = 'ADD_STEP_TWO'

const ADD_STEP_THREE = 'ADD_STEP_THREE'

const COMPLETE = 'COMPLETE'

const CANCEL = 'CANCEL'

export const addStepOne = (name, address, city, state, zipcode) => {
    return {
        type: ADD_STEP_ONE,
        payload: {
            name,
            address,
            city,
            state,
            zipcode
        }
    }
} 

export const addStepTwo = (img) => {
    return {
        type: ADD_STEP_TWO,
        payload: {
            img
        } 
    }
}

export const addStepThree = (mortgage, rent) => {
    return {
        type: ADD_STEP_THREE,
        payload: {
            mortgage,
            rent
        }
    }
}

export const complete = () => {
    console.log('hit')
    return {
        type: COMPLETE,
        payload: initialState
    }
} 

export const cancel = () => {
    console.log('hit')
    return {
        type: COMPLETE,
        payload: initialState
    }
} 

export default function (reduxState = initialState, action){
    const {type, payload}= action
    switch(type){
        case ADD_STEP_ONE:
            const {name, address, city, state, zipcode} = payload
            return  {
                name: name,
                address: address,
                city: city,
                state: state,
                zipcode: zipcode,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            }
        case ADD_STEP_TWO:
            console.log(payload)
            const {img} = payload
            return {
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode,
                img: img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            }
        case ADD_STEP_THREE:
            console.log(payload.img)
            const {mortgage, rent} = payload
            return {
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode,
                img: reduxState.img,
                mortgage: mortgage,
                rent: rent
            }
        case COMPLETE:
            return {payload}
        case CANCEL:
            return {payload}
        
        default:
            return reduxState
    }
}