import React, {useContext} from 'react'
import InputStandart from '../../InputStandart/InputStandart'
import './CreateNewProductStep1.scss'
import {ContextFormControlAddProductCard} from '../../../context/context'
import { FormControlLabel } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';


export default function CreateNewProductStep1(){
    const {forms, onChangeForm, toggleCheckedHandler} = useContext(ContextFormControlAddProductCard)
    return (
        <div className = 'CreateNewProductStep1'>
            <div className = 'CreateNewProductStep1__conteiner'>
                <InputStandart 
                    label = {forms.titleProduct.label}
                    name = {forms.titleProduct.name}
                    value = {forms.titleProduct.value}
                    valid = {forms.titleProduct.valid}
                    touched = {forms.titleProduct.touched}
                    shouldValidate = {!!forms.titleProduct.validation}
                    onChange = {event => onChangeForm(event.target.value, forms.titleProduct.name)}
                />
                <div className = 'CreateNewProductStep1__conteiner__wrapper'>
                    <InputStandart 
                        label = {forms.modelProduct.label}
                        name = {forms.modelProduct.name}
                        value = {forms.modelProduct.value}
                        valid = {forms.modelProduct.valid}
                        touched = {forms.modelProduct.touched}
                        disabled = {!forms.modelProduct.validation}
                        shouldValidate = {!!forms.modelProduct.validation}
                        onChange = {event => onChangeForm(event.target.value, forms.modelProduct.name)}
                    />
                    <FormControlLabel
                        control={<Switch 
                                    size = 'small' 
                                    checked={!forms.modelProduct.validation} 
                                    onChange={event => toggleCheckedHandler(event, forms.modelProduct.name)} 
                                    name={forms.modelProduct.name}
                                />}
                        label="Нет модели"
                    />
                </div>
            </div>
        </div>
    )
}