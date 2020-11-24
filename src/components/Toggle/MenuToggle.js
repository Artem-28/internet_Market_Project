import React from 'react'
import './MenuToggle.scss'

export default function MenuToggle({isOpen, onClick}){
  
    return (
        <div 
            className ={isOpen? 'active': 'MenuToggle'}
            onClick = {onClick}
        >
            <div /> <div /> <div /> <div />
        </div>
    )
}

