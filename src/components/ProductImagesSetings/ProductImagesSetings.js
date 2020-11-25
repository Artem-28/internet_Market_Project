import React, { useState } from 'react'
import AddImageButton from '../buttons/AddImageButton/AddImageButton'
import ProductImageCard from '../ProductImageCard/ProductImageCard'
import './ProductImagesSetings.scss'

export default function ProductImagesSetings(){
    const [imagesCards, setImagesCards] = useState([])

    const  resizeHandler = (value, id) =>{
        imagesCards.map(imageData => {
            if(imageData.id === id){
                imageData.width = value   
            }
            return null
        })
        setImagesCards([...imagesCards])
    }

    function addImage(){
        const imageData = {
            id: `images${Math.random()}`,
            url: null,
            left: 0,
            top: 0,
            width: 0
        }
        imagesCards.push(imageData)
        setImagesCards([...imagesCards]) 
    }

    const addFile = (event, id)=>{
        let file =  event.target.files[0]
        const reader =  new FileReader()
        let fileData ={}
        reader.onload = () =>{
          fileData.src =  reader.result
        }
        reader.readAsDataURL(file)
        
        imagesCards.map(imageData => {
            if(imageData.id === id){
                imageData.url = URL.createObjectURL(file)   
            }
            return null
        })
        setImagesCards([...imagesCards])
      }
    
    function getFormData (){
        const imagesList = document.forms.imagesSetings.imagesProduct 
        for (var item of imagesList) {
            item.getBoundingClientRect()
          }
    }
    
    return(
        <div className = 'ProductImagesSetings'>
            <div className = 'isideBlock'>
                <div className = 'imagesConteiner'>
                    {imagesCards.map(image => (
                        <ProductImageCard 
                            key = {image.id}
                            image = {image}
                            onChange = {addFile}
                            resizeHandler = {resizeHandler}
                        />
                    ))}
                </div>
               
                <AddImageButton 
                    onClick = {addImage}
                />
                <button onClick = {getFormData}>Click</button>
            </div>
        </div>
    )
}