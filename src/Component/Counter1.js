import React ,{ useContext } from 'react'
import CounterContext from '../store/context/CounterContext';

function Counter1() {

    const counterContext = useContext(CounterContext)
    return (
        <div className ='counterDiv'>
            <h3>This is first counter component</h3>
            <h5>Use Context</h5>
            <h1>{counterContext[0]}</h1>
            <button onClick={() =>{counterContext[1](++counterContext[0])}}>Increment</button>
            <button onClick={() =>{counterContext[1](--counterContext[0])}}>decrement</button>

        </div>
    )
}
export default Counter1;