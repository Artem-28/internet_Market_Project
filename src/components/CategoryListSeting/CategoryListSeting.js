import { TextField } from '@material-ui/core'
import React, {useState} from 'react'
import Button from '../buttons/Button/Button'
import './CategoryListSeting.scss'

export default function CategoryListSeting(){

    const [newCategoryName, setNewCategoryName] = useState('')

  
    return (
        <div className = 'CategoryListSeting'>
            <div className = 'CategoryListSeting__label'>
                <span>Управлене списком категорий</span>
            </div>
            <div className = 'CategoryListSeting__addCategory__conteiner'>
                <TextField 
                    id='outlined-basic' 
                    label='Название категории' 
                    variant='outlined'
                    fullWidth = {true}
                    value = {newCategoryName}
                    onChange = {(event)=>setNewCategoryName(event.target.value)}
                />
                <div className = 'CategoryListSeting__addCategory__conteiner__button'>
                    <Button 
                        width = {200}
                    >Добавить категорию</Button>
                </div>
            </div>
            <div className = 'CategoryListSeting__list'>
                list
            </div>
        </div>
    )
}