import { TextField } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import Button from '../buttons/Button/Button'
import './CategoryListSeting.scss'
import ProjectFileStructure from '../ProjectFileStructure/ProjectFileStructure'
/* import categoryListReduser from '../../reduser/categoriesListReduser' */

export default function CategoryListSeting(){

    const [newCategoryName, setNewCategoryName] = useState('')
    const [categoryList, setList] = useState({})

    /* const [categoryList, dispatch] = useReducer(categoryListReduser, {}) */

    function addNewCategory(path, name){
        firebase.database().ref('products/category/' + path).set({
            categoryName: name,
            path: 'level-1'
        }).then(()=>{
           getProductsList()
        })
    }

    

    function getProductsList(){
        firebase.database().ref('products/').once('value').then(category => { 
            setList({...category.val()})
        })
    }


    useEffect(() => {
        getProductsList()
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
                        onClick = {()=>addNewCategory(newCategoryName, newCategoryName)}
                    >Добавить категорию</Button>
                </div>
            </div>
            <div className = 'CategoryListSeting__list'>
               <ProjectFileStructure 
                    list = {categoryList.category}
                    onClick = {addNewCategory}
               />
            </div>
        </div>
    )
}