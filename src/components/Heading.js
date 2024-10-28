
import React, { useState } from 'react'

export default function Heading() {
    const [count, setCount] = useState(0)
    // count=90;//wrong method


    const handleDecrement = () => {
        setCount((preState) => preState - 1);
    }
    const handleIncrement = () => {
        setCount((preState) => preState + 1);
    }
    return (
        <div>
            <h1 className='text-center my-4'>My Counter Game</h1>
            <div className="container d-flex justify-content-center my-4">
                <button className="btn btn-success mx-2" onClick={handleDecrement} >Decrement</button>
                <button className='btn btn-primary mx-2'>{count}</button>
                <button className="btn btn-success mx-2" onClick={handleIncrement} >Increment</button>
            </div>
        </div>
    )
}
