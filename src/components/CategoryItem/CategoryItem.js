import React, {useState} from 'react'
import { removeCategory, uppdateCategory } from '../../action/actionCategoriesListReduser'
import SquareButton from '../buttons/SquareButton/SquareButton'
import EditInput from '../EditInput/EditInput'
import './CategoryItem.scss'

export default function CategoryItem ({name, path}){
    const initialState = {
        isEdit: false,
        name: name,
    }
    const [edit, setEdit] = useState(initialState)

    function editHandler(){
        edit.isEdit = !edit.isEdit
        setEdit({...edit})
    }

    function changeEditHandler(newName){
        edit.name = newName
        setEdit({...edit})
    }

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
                <span>
                    {edit.isEdit 
                    ? <EditInput 
                        value = {edit.name}
                        onChange = {event => changeEditHandler(event.target.value)}
                        />
                    : name}
                </span>
            </div>
            
            <div className = 'CategoryItem__button'>
                <SquareButton 
                    type = {edit.isEdit ? 'save' : 'edit'}
                    onClick = {
                        edit.isEdit 
                        ? () => uppdateCategory(path, edit.name, editHandler) 
                        : editHandler
                    }
                    disabled = {!edit.name}
                />
                <SquareButton 
                    type = {edit.isEdit ? 'cancel' : 'delete'}
                    onClick = {
                        edit.isEdit 
                        ? editHandler 
                        : ()=>removeCategory(path)
                    }
                />
            </div>
            
        </div>
    )
}