import React from 'react'
import './MenuToggle.scss'

const MenuToggle = props =>{
    return (
            <div 
                className ={props.isOpen? 'active': 'MenuToggle'}
                onClick = {props.onClick}
            >
                <div /> <div /> <div /> <div />
            </div>
    )
}
 export default MenuToggle
