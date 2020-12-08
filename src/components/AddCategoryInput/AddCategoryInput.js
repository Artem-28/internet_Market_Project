import React, {useState} from 'react'
import './AddCategoryInput.scss'
import SquareButton from '../buttons/SquareButton/SquareButton'
import { addNewCategory } from '../../action/actionCategoriesListReduser'
import InputStandart from '../InputStandart/InputStandart'


export default function AddCategoryInput({path}){
    const [newCategoryName, setNewCategoryName] = useState('')
    function clearInput(){
        setNewCategoryName('')
    }

    return (
        <div className = 'AddCategoryInput'>
            <InputStandart 
                type = 'text'
                name = 'createNewCategory'
                label = 'Название подкатегории'
                value = {newCategoryName}
                onChange = {(event)=>setNewCategoryName(event.target.value)}
            />
            <div className = 'AddCategoryInput__button'>
                <SquareButton 
                    type = 'add' 
                    onClick = {() =>addNewCategory(`${path}/`,newCategoryName, clearInput)}
                />
            </div>
        </div>
    )
}