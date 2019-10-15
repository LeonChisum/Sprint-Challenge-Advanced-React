import React from 'react'
import { useCount } from '../hooks/useCount'

export default function Selector() {
    const [count , setCount] = useCount(9)

    return (
        <div>
            <h1>Top { count } Women Searches Athletes</h1>
            <label>
            Select top # of Searches!
            </label> {' '}
            <select >
                <option
                value="9">10</option>
                <option
                value="8">9</option>
                <option
                value="7">8</option>
                <option
                value="6">7</option>
                <option
                value="5">6</option>
                <option
                value="4">5</option>
                <option
                value="3">4</option>
                <option
                value="2">3</option>
                <option
                value="1">2</option>
                <option
                value="0">1</option>
            </select>
        </div>
    )
}
