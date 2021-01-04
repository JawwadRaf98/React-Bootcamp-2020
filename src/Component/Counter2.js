import React, { useReducer } from 'react'
import CounterReducer from '../store/reducer/CounterReducer';

function Counter2() {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    return (
        <div className ='counterDiv'>
            <h3>This is second counter component</h3>
            <h5>Use Reducer</h5>
            <h1>{state}</h1>
            <button onClick={() =>{dispatch('INCREMENT')}}>Increment</button>
            <button onClick={() =>{dispatch('DECREMENT')}}>decrement</button>
        </div>
    )
}
export default Counter2;