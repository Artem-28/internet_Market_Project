import React from 'react'
import './EditInput.scss'

export default function EditInput({value, onChange, id}){
    return (
        <div className = 'EditInput'>
            <input 
                className = 'EditInput__input'
                autoFocus = {true}
                value = {value}
                onChange = {onChange}
                />
            <div className = 'EditInput__bottom' />
        </div>
    )
}