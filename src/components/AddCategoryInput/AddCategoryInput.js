import { TextField } from '@material-ui/core'
import React, {useState} from 'react'
import './AddCategoryInput.scss'
import SquareButton from '../buttons/SquareButton/SquareButton'

export default function AddCategoryInput({category, onClick}){
    const [newCategoryName, setNewCategoryName] = useState('')
    return (
        <div className = 'AddCategoryInput'>
            <TextField 
                id={'standard-basic'+Math.random()} 
                label="Название подкатегории" 
                size= "small" 
                value = {newCategoryName}
                onChange = {(event)=>setNewCategoryName(event.target.value)}
            />
            <div className = 'AddCategoryInput__button'>
                <SquareButton 
                    type = 'add' 
                    onClick = {() => onClick(`${category}/${newCategoryName}`,newCategoryName )}
                />
            </div>
        </div>
    )
}