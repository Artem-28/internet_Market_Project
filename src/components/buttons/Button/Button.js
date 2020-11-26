import React from 'react'
import './Button.scss'

export default function Button(props){
    return (
        <button 
            className = 'Button'
            style = {{
                width:`${props.width +4}px`, 
                height:`${props.height +4}px`, 
            }}
            disabled = {props.disabled}
            type = {props.type}
            onClick = {props.onClick}
        >
            <div 
                className = 'insideBlock'
                style = {{
                    width:`${props.width}px`, 
                    height:`${props.height}px`,
                    fontSize:`${props.fontSize}px`
                }}
            >
                {props.children}
            </div>
        </button>
    )
}