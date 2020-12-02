import React from 'react'
import './CategoryItem.scss'

export default function CategoryItem ({name}){
    function dropCategory (event){
        const elem = document.getElementById(name)
        elem.nextElementSibling.classList.toggle('ProjectFileStructure__subcategory-drop')
        elem.firstElementChild.classList.toggle('fa-folder')
        elem.firstElementChild.classList.toggle('fa-folder-open')
    }
    
    return  (
        <div 
            className = 'CategoryItem' 
            id = {name}
            onClick = {(event) => dropCategory(event)}

        >
            <i className = {"fa fa-folder fa-2x"} />
            <span>{name}</span>
        </div>
    )
}