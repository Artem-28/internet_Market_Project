import React, {useState} from 'react'
import Button from '../buttons/Button/Button'
import CreateNewProductStep1 from '../stepsCreateNewProduct/CreateNewProductStep1/CreateNewProductStep1'
import StepsOfExecution from '../StepsOfExecution/StepsOfExecution'
import {ContextFormControlAddProductCard} from '../../context/context'
import './AddProductCard.scss'



export default function AddProductCard(props){
    const initialState = {
            titleProduct: {
                value: '',
                name: 'titleProduct',
                label: 'Название товара',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            modelProduct: {
                value: '',
                name: 'modelProduct',
                label: 'Название модели',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        
    }
    const [formsControl, setFormsControl] = useState(initialState)
    const [successStep, setSuccessStep] = useState(0)

    function validateControl(value, validation){
        if(!validation) return true
        let isValid = true
        if(validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.minLength) {
            isValid = value.lenght >= validation.minLength && isValid
        }
        return isValid
    }

    function onChangeForm(value, controlName) {
        const control = formsControl[controlName]
        control.value = value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
        setFormsControl({...formsControl})
    }

    function toggleCheckedHandler(event, controlName) {
        const control = formsControl[controlName]
        control.valid = event.target.checked
        if(event.target.checked){
            control.validation = !event.target.checked
        } else {
            formsControl[controlName] = initialState[controlName]
        }
        
        setFormsControl({...formsControl})
    }
    
    return (
        <ContextFormControlAddProductCard.Provider value = {{
            forms: formsControl, 
            onChangeForm, 
            toggleCheckedHandler
            }}>
            <div className = 'AddProductCard'>
                <div className = 'AddProductCard__label'>
                    <span>Создание карточки товара</span>
                </div>
                <div className = 'AddProductCard__inside'>
                    <div className = 'AddProductCard__inside__steps'>
                        <StepsOfExecution 
                            steps = {5} 
                            success = {successStep}
                        />
                    </div>
                    <div className = 'AddProductCard__inside__context'>
                        <div className ='AddProductCard__inside__context__label'>
                            <span>{`Шаг ${successStep+1} из ${5}`} </span>
                        </div>
                        <div className = 'AddProductCard__inside__context__pathInfo'>
                            <p><span>Добавление товара:</span>{` ${props.path.pathTitle}`}</p>
                        </div>
                        <CreateNewProductStep1 />
                    </div>
                    <div className = 'AddProductCard__inside__buttons'>
                        <div className = 'AddProductCard__inside__buttons__conteiner'>
                            <Button
                                type = 'reset'
                                height = {30}
                                onClick = {()=>props.cancel()}
                            >
                                отмена
                            </Button>
                        </div>
                        <div className = 'AddProductCard__inside__buttons__conteiner'>
                            <Button
                                height = {30}
                                onClick = {()=>setSuccessStep(successStep -1)}
                                disabled = {successStep === 0}
                            >
                                назад
                            </Button>
                            {5-1 === successStep
                            ?   <Button
                                    height = {30}
                                
                                >
                                    сохранить
                                </Button>
                            :   <Button
                                    height = {30}
                                    disabled = {!(formsControl.titleProduct.valid && formsControl.modelProduct.valid)}
                                    onClick = {()=>setSuccessStep(successStep +1)}
                                >
                                далее
                                </Button>
                            }    
                        </div>  
                    </div> 
                </div> 
            </div>
        </ContextFormControlAddProductCard.Provider>
    )
}