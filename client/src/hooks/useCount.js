import { useState, useEffect } from 'react'

export function useCount(value) {
    const [count, setCount] = useState(value)
    
    useEffect(() => {
        count < 8 ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white';
    },[count])

    return [count, setCount]
}
