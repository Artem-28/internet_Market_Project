import React from 'react'
import './CloseButton.scss'

export default function CloseButton(){
    return (
        <div className = 'CloseButton'>
            <div className = 'insideBlock'>
                <i className = 'fa fa-times fa-2x'/>
            </div>
        </div>
    )
}