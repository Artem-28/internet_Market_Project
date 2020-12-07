import { TextField } from '@material-ui/core'
import React, {useState, useEffect, useReducer} from 'react'
import Button from '../buttons/Button/Button'
import './CategoryListSeting.scss'
import ProjectFileStructure from '../ProjectFileStructure/ProjectFileStructure'
import categoryListReduser from '../../reduser/categoriesListReduser'
import { addNewCategory, getProductsList } from '../../action/actionCategoriesListReduser'



export default function CategoryListSeting(){

    const [newCategoryName, setNewCategoryName] = useState('')
    const [categoryList, dispatch] = useReducer(categoryListReduser, null)

    useEffect(() => {
        getProductsList(dispatch)
    }, [])
    
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
                        onClick = {()=>addNewCategory('', newCategoryName, dispatch)}
                    >Добавить категорию</Button>
                </div>
            </div>
            <div className = 'CategoryListSeting__list'>
                <ProjectFileStructure list = {categoryList?categoryList.category:null} />
            </div>
        </div>

    )
}