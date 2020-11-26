import React, { useState } from 'react'
import AddImageButton from '../buttons/AddImageButton/AddImageButton'
import ProductImageCard from '../ProductImageCard/ProductImageCard'
import './ProductImagesSetings.scss'

export default function ProductImagesSetings(){
    const [imagesCards, setImagesCards] = useState([])

    function resizeHandler(value, id){
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
            url: false,
            left: 0,
            top: 0,
            width: 0
        }
        imagesCards.push(imageData)
        setImagesCards([...imagesCards]) 
    }

    function addFile(event, id){
        let file =  event.target.files[0]
        const reader =  new FileReader()
        let fileData ={}
        reader.onload = () =>{
          fileData.src =  reader.result
        }
        reader.readAsDataURL(file)
       
        imagesCards.map(imageData => {
            if(imageData.id === id){
                imageData.url = file
            }
            return null
        })
        setImagesCards([...imagesCards])
      }

    function savePositionImage(left, top, id){
        imagesCards.map(imageData => {
            if(imageData.id === id){
                imageData.left = left
                imageData.top = top
            }
            return null
        })
        setImagesCards([...imagesCards])
    }

    function deleteImage (id) {
        imagesCards.map((imageData, index) => {
            if(imageData.id === id){
                imagesCards.splice(index, 1)
            }
            return null
        })
        setImagesCards([...imagesCards])
    }
    
    /* function getFormData (){
       
    } */
    
    
    return(
        <div className = 'ProductImagesSetings'>
            <div className = 'isideBlock'>
                <div className = 'imagesConteiner'>
                    {imagesCards.map(imageData => (
                        <ProductImageCard 
                            key = {imageData.id}
                            imageData = {imageData}
                            onChange = {addFile}
                            resizeHandler = {resizeHandler}
                            savePositionImage = {savePositionImage}
                            deleteImage = {deleteImage}
                        />
                    ))}
                </div>
               
                <AddImageButton 
                    onClick = {addImage}
                />
                {/* <button onClick = {getFormData}>Click</button> */}
            </div>
        </div>
    )
}