import React from 'react'
import { blurHandler, focusHandler } from './inputHandler'
import './InputStandart.scss'


export default function InputStandart(props){
    const htmlFor = `${props.type}-${Math.random()}`
    
    return (
        <div className = 'InputStandart__wrapper'>
            <div className = 'InputStandart error'>
                <div className = 'InputStandart__inside'>
                    <label 
                        className = 'InputStandart__inside__label--blur'
                        htmlFor = {htmlFor}>
                        {props.label}
                    </label>
                    <input 
                        id = {htmlFor}
                        name = {props.name}
                        type = {props.type || 'text'}
                        value = {props.value}
                        onFocus = {(event) => focusHandler(event)}
                        onBlur = {(event) => blurHandler(event)}
                        onChange = {props.onChange}
                    />
                    <div className = 'InputStandart__inside__hidden' />
                </div>
                <div className = 'InputStandart__bottom'/>
                <div className = 'InputStandart__errorMessage'>
                    {props.errorMessage || 'поле не должно быть пустым'}
                </div>
            </div>
        </div>
    )
}