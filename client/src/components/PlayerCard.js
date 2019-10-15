import React from 'react'

export default function PlayerCard(props) {
    const {country, id, name, searches} = props.players;
    if(id < 10){
       return (
        <div>
            <h5>{name}</h5>
            <p>{country}</p>
            <p>{searches}</p>
        </div>
    ) 
    }
    else return (
        <h1 style={{display: 'none'}}>sorry!</h1>
    )

}
