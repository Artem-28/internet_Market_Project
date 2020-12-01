import { TextField } from '@material-ui/core'
import React, {useState} from 'react'
import AddButton from '../buttons/AddButton/AddButton'

export default function AddCategoryInput({category, onClick}){
    const [newCategoryName, setNewCategoryName] = useState('')
    return (
        <React.Fragment>
            <TextField 
                id={'standard-basic'+Math.random()} 
                label="Название подкатегории" 
                size= "small" 
                value = {newCategoryName}
                onChange = {(event)=>setNewCategoryName(event.target.value)}
            />
            <AddButton onClick = {() => onClick(`${category}/${newCategoryName}`,newCategoryName )}/>
        </React.Fragment>
    )
}