import React from 'react'
import './AddImageButton.scss'

export default function AddImageButton (props){
    return (
        <div 
            className='AddImageButton'
            onClick = {props.onClick} 
            >
            <i className='fa fa-file-image-o fa-5x' />
            <span>Добавить изображение</span>
        </div>
    )
}