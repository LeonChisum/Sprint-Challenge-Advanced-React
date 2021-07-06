import { useState, useEffect } from 'react'

export function useCount(value) {
    const [count, setCount] = useState(value)
    
    useEffect(() => {
        count < 8 ? document.body.style.backgroundColor = 'yellow'  : document.body.style.backgroundColor = 'pink';
    },[count])

    const setNewCount = newValue => {
        setCount(newValue)
    }

    return [count, setNewCount]
}
