import React from 'react'
import './AddButton.scss'

export default function AddButton({onClick}){
    return (
        <div className = 'AddButton' onClick={onClick}>
            <div className = 'AddButton__insideBlack'>
                <i className={'fa fa-plus fa-1x'}/>
            </div>
        </div>
    )
}
