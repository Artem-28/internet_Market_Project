import React from 'react'
import SquareButton from '../buttons/SquareButton/SquareButton'
import './ProductItem.scss'

export default function ProductItem ({name}){
    return  (
        <div className = 'ProductItem' >
            <div className = 'ProductItem__name'>
                <i className = {"fa fa-file-o fa-2x"} />
                <span>{name}</span>
            </div>
            <div className = 'ProductItem__button'>
                <SquareButton 
                    type = 'edit'
                />
                <SquareButton 
                    type = 'delete'
                />
            </div>
        </div>
    )
}