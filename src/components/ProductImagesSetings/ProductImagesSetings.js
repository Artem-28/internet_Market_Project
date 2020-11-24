import React, { useState } from 'react'
import AddImageButton from '../buttons/AddImageButton/AddImageButton'
import ProductImageCard from '../ProductImageCard/ProductImageCard'
import './ProductImagesSetings.scss'

export default function ProductImagesSetings(){
    const [imagesCards, setImagesCards] = useState([])

    function addImage(){
        
        imagesCards.push('click')
        setImagesCards([...imagesCards])
        console.log(imagesCards)
    }

    function getFormData (){
        console.log('klisc')
        const imagesList = document.forms.imagesSetings.imagesProduct 
        for (var item of imagesList) {
            console.log(item.getBoundingClientRect())
          }
        
        
    }
    console.log('return')
    return(
        <div className = 'ProductImagesSetings'>
            <div className = 'isideBlock'>
                <form name = 'imagesSetings'>
                    {imagesCards.map(elem => (<div>{elem}</div>))}
                    
                </form>
                <AddImageButton 
                    onClick = {addImage}
                />
                <button onClick = {getFormData}>Click</button>
            </div>
        </div>
    )
}