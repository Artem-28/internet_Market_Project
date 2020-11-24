import React, { useState } from 'react'
import './ProductImageCard.scss'

export default function ProductImageCard(props){
    const [imageUrl, setImageUrl] = useState(null)
    console.log(props.arr)
    const addFile = (event)=>{
        let file =  event.target.files[0]
        const reader =  new FileReader()
        let fileData ={}
        reader.onload = () =>{
          fileData.src =  reader.result
        }
        reader.readAsDataURL(file)
        let newfileUrl = URL.createObjectURL(file)

        setImageUrl(newfileUrl)
      }

    return(
            <div className ='ProductImageCard'>
            <img 
                src={imageUrl}
                name = 'imagesProduct'
                alt = 'no file' 
                style = {{width: '250px', position: 'absolute', left: 0, top: 0}}
            />
            <input 
                type = 'file'
                accept = 'image/*'
                onChange = {(event)=>addFile(event)}  
               />
        </div>
        
    )
}