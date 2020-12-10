import React from 'react'
import './SquareButton.scss'

export default function SquareButton({onClick, type, disabled}){
    let label = ''
    const cls = [`SquareButton ${type}`]
    if(type === 'edit') label = 'fa-pencil'
    if(type === 'add') label = 'fa-plus'
    if(type === 'delete') label = 'fa-trash'
    if(type === 'save') label = 'fa-floppy-o'
    if(type === 'cancel') label = 'fa-ban'
    if (disabled) cls.push('disabled')

    return (
        <div 
            className = {cls.join(' ')} 
            onClick={!disabled? onClick : null}>
            <div className = 'SquareButton__insideBlack'>
                <i className={`fa ${label} fa-1x`}/>
            </div>
        </div>
    )
}
