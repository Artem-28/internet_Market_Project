import React, {useState, useEffect, useReducer} from 'react'
import Button from '../buttons/Button/Button'
import './CategoryListSeting.scss'
import ProjectFileStructure from '../ProjectFileStructure/ProjectFileStructure'
import categoryListReduser from '../../reduser/categoriesListReduser'
import { addNewCategory, getProductsList } from '../../action/actionCategoriesListReduser'
import InputStandart from '../InputStandart/InputStandart'



export default function CategoryListSeting(){

    const [newCategoryName, setNewCategoryName] = useState('')
    const [categoryList, dispatch] = useReducer(categoryListReduser, null)

    function clearInput(){
        setNewCategoryName('')
    }

    useEffect(() => {
        getProductsList(dispatch)
    }, [])
    
    return (
        <div className = 'CategoryListSeting'>
            <div className = 'CategoryListSeting__label'>
                <span>Управлене списком категорий</span>
            </div>
            <div className = 'CategoryListSeting__addCategory__conteiner'>
                <InputStandart 
                    type = 'text'
                    name = 'createNewCategory'
                    label = 'Название категории'
                    value = {newCategoryName}
                    onChange = {(event)=>setNewCategoryName(event.target.value)}
                />
                <div className = 'CategoryListSeting__addCategory__conteiner__button'>
                    <Button 
                        width = {200}
                        disabled = {!newCategoryName ?true :null}
                        onClick = {()=>addNewCategory('', newCategoryName, clearInput)}
                    >Добавить категорию</Button>
                </div>
            </div>
            <div className = 'CategoryListSeting__list'>
                <ProjectFileStructure list = {categoryList?categoryList.category:null} />
            </div>
        </div>

    )
}