import React from 'react'
import { useCount } from '../hooks/useCount'

export default function PlayerCard(props) {
    const {country, id, name, searches,} = props.players;
    const [count , setCount] = useCount(parseInt(props.order))

    if( parseInt(props.order) > id ){
       return (
        <div>
            <h5><span>{id + 1}. </span>{name}</h5>
            <p>Country: {country}</p>
            <p>Number of Searches: {searches}</p>
        </div>
    ) 
    }
    else return (
        <h1 style={{display: 'none'}}>sorry!</h1>
    )

}
