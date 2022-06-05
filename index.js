/*

Study kasus membuat input biodata dan menampilkan biodata yang telah diinputkan

*/

const redux = require('redux')
const createStore = redux.createStore;

// initial state
const initialState = {
    name: '',
    age: 0,
    address: '',
}

// Reducer
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_NAME':
        return {
            ...state,
            name: action.name,
        };
        case 'ADD_AGE':
        return {
            ...state,
            age: action.age,
        };
        case 'ADD_ADDRESS':
        return {
            ...state,
            address: action.address,
        };

        default:
        return state;
    }
}

// Store
const store = createStore(reducer);

// subscribe to changes
const unsubscribe = store.subscribe(() => console.log(store.getState()) )


// dispatch action
store.dispatch({type: 'ADD_NAME', name: 'Rizki Darmawan'})
store.dispatch({type: 'ADD_NAME', name: 'Rizki Farmawan'})
store.dispatch({type: 'ADD_AGE', age: 21})
store.dispatch({type: 'ADD_ADDRESS', address: 'Semarang'})

// unsubscribe
unsubscribe()