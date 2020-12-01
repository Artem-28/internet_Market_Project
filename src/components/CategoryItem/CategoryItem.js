import React from 'react'
import './CategoryItem.scss'

export default function CategoryItem ({name}){
    function dropCategory (event){
        event.target.nextElementSibling.classList.toggle('ProjectFileStructure__subcategory-drop')
    }
    return (
        <div className = 'CategoryItem' onClick = {(event) => dropCategory(event)}>
            <i className = {"fa fa-folder fa-2x"} />
            <span>{name}</span>
        </div>
    )
}