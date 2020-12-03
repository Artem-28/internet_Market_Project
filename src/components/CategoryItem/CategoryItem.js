import React from 'react'
import { removeCategory } from '../../action/actionCategoriesListReduser'
import SquareButton from '../buttons/SquareButton/SquareButton'
import './CategoryItem.scss'

export default function CategoryItem ({name, path}){
    function dropCategory (){
        const elem = document.getElementById(name)
        elem.nextElementSibling.classList.toggle('ProjectFileStructure__subcategory-drop')
        elem.firstElementChild.firstElementChild.classList.toggle('fa-folder')
        elem.firstElementChild.firstElementChild.classList.toggle('fa-folder-open')
    }
    
    return  (
        <div 
            className = 'CategoryItem' 
            id = {name}
            onClick = {() => dropCategory()}

        >
            <div className = 'CategoryItem__name'>
                <i className = {"fa fa-folder fa-2x"} />
                <span>{name}</span>
            </div>
            
            <div className = 'CategoryItem__button'>
                <SquareButton 
                    type = 'edit'
                />
                <SquareButton 
                    type = 'delete'
                    onClick = {()=>removeCategory(path)}
                />
            </div>
        </div>
    )
}