import React, { createRef } from 'react'
import './InputStandart.scss'

export default function InputStandart(props){
    const htmlFor = `${props.type}-${Math.random()}`
    const myRefInput = createRef()
    const myRefLabel = createRef()
    
    
    function onFocusHandler(){
        myRefLabel.current.classList.add('input--filed')
       
    }

    function onBlurHandler(){
        if(myRefInput.current.value !== ''){
            myRefLabel.current.classList.add('input--filed')
        }else {
            myRefLabel.current.classList.remove('input--filed')
        }
    }


    return (
        <div className = 'InputStandart'>
            <div className = 'InputStandart__focus' />
            <div className = 'InputStandart__border__bottom' />
            <label htmlFor = {htmlFor} ref = {myRefLabel} className = {!props.value? '':'input--filed' }  >{props.label}</label>
            <div className = 'InputStandart__insideBlock'>
                <input
                    ref = {myRefInput}
                    type = {props.type || 'text'}
                    name = {props.name}
                    value = {props.value}
                    id = {htmlFor}
                    onBlur = {onBlurHandler}
                    onFocus = {onFocusHandler}
                    onChange = {props.onChange}
                    autoComplete='on'
                />
            </div>
        </div>
    )
}