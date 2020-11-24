import React from 'react'
import './Blackout.scss'

export default function Blackout(props){
    return (
        <div className = 'Blackout' 
        style = {{
            width: `${props.width || 100}%`,
            height: `${props.height || 100}%`
            }}
        >
            {props.children}
        </div>
    )
}