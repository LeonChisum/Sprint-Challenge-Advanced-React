import React, {useState} from 'react'
import { useCount } from '../hooks/useCount'

export default function Selector(props) {
    
    const [count , setCount] = useCount(parseInt(props.order))
    console.log(props.setOrder)

    const handleChange = e => {
        e.preventDefault();
        props.setOrder(e.target.value);
        setCount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setOrder(e.target.value);
        
    }

    return (
        
        <div>
            <h1>Top Women Searches Athletes</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Select top # of Searches!
                </label> {' '}
                <select value={count} onChange={handleChange}>
                    <option
                    value='30'>30</option>
                    <option
                    value="15">15</option>
                    <option
                    value="10">10</option>
                    <option
                    value="5">5</option>
                    <option
                    value="1">1</option>
                </select>
            </form>
        </div>
    )
}
