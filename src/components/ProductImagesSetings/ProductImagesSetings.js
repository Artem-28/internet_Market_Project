import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AddImageButton from '../buttons/AddImageButton/AddImageButton'
import Button from '../buttons/Button/Button'
import CloseButton from '../buttons/CloseButton/CloseButton'
import ProductImageCard from '../ProductImageCard/ProductImageCard'
import './ProductImagesSetings.scss'

export default function ProductImagesSetings(){
    const [imagesCards, setImagesCards] = useState([])
    const [formValid, setFormValid] = useState(false)

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

    useEffect(()=>{
        const conteiner = document.getElementById('ProductImagesSetings-contextBlock')
        const conteinerWidth = conteiner.getBoundingClientRect().width
        const insideBlockWidth = conteiner.firstElementChild.getBoundingClientRect().width
        conteinerWidth > insideBlockWidth 
            ? conteiner.style.justifyContent = 'center' 
            : conteiner.style.justifyContent = 'flex-start'
    })

    useEffect(()=>{
        let isValid = imagesCards.length !== 0 ? true : false
        imagesCards.map(imageData => {
            return isValid = imageData.url && isValid
        })
        setFormValid(isValid)
    }, [imagesCards])
    
    
    return(
        <div className = 'ProductImagesSetings'>
            <div className = 'isideBlock'>
                <div className = 'contextBlock' id='ProductImagesSetings-contextBlock'>
                   <div className = 'imagesConteiner'>
                       <TransitionGroup component = {null}>
                       {imagesCards.map(imageData => (
                            <CSSTransition 
                                key = {imageData.id}
                                timeout={{
                                    enter: 1000,
                                    exit: 500
                                }}
                                unmountOnExit
                                mountOnEnter
                            >
                                <ProductImageCard 
                                    imageData = {imageData}
                                    onChange = {addFile}
                                    resizeHandler = {resizeHandler}
                                    savePositionImage = {savePositionImage}
                                    deleteImage = {deleteImage}
                                />
                             </CSSTransition>
                        ))}
                       </TransitionGroup>
                        <div className = 'conteinerButton'>
                            <AddImageButton 
                                onClick = {addImage}
                            />
                        </div>
                    </div>
                </div> 
                <div className = 'conteinerButtonSave'>
                    <Button 
                        width = {230}
                        disabled = {!formValid}
                    >
                        сохранить изображения
                        </Button> 
                </div> 
                <div className = 'conteinerCloseButton'>
                    <CloseButton />
                </div>
            </div>
        </div>
    )
}