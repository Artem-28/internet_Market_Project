import React from 'react'
import './SquareButton.scss'

export default function SquareButton({onClick, type}){
    let label = ''
    if(type === 'edit') label = 'fa-pencil'
    if(type === 'add') label = 'fa-plus'
    if(type === 'delete') label = 'fa-trash'
    return (
        <div className = {`SquareButton ${type}`} onClick={onClick}>
            <div className = 'SquareButton__insideBlack'>
                <i className={`fa ${label} fa-1x`}/>
            </div>
        </div>
    )
}
