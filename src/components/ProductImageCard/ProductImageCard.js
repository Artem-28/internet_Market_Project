import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import './ProductImageCard.scss'
import Button from '../buttons/Button/Button';

export default function ProductImageCard({imageData, onChange, resizeHandler, savePositionImage, deleteImage}){
  function valueLabelFormat(image) {
    return `${image}%`
  }

  function handleChange(event, newValue){
    resizeHandler(newValue, imageData.id)
  };

  function moveImage(event){
    const image = event.target
    const conteiner = event.target.parentElement.getBoundingClientRect()
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;
    
    moveAt(event.pageX, event.pageY);
   
    function moveAt(pageX, pageY) {
      image.style.left = pageX -conteiner.left - shiftX + 'px';
      image.style.top = pageY - conteiner.top - shiftY + 'px';
      
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
        
    document.addEventListener('mousemove', onMouseMove);
        
    image.onmouseup = function() {
      savePositionImage(image.style.left, image.style.top, imageData.id)
      document.removeEventListener('mousemove', onMouseMove);
      image.onmouseup = null;
    }

    image.ondragstart = function() {
    return false;
    }
  }  

  const theme = createMuiTheme({
    overrides: {
      MuiTypography: {
        root: { color: '#BC9CFF' },
        body1: { lineHeight: 'none' },
        gutterBottom: { marginBottom: '0px' }
      },
      MuiSlider: {
        root: { width: '170px' },
        rail: { color: '#BC9CFF', height: '3px' },
        track: { background: 'linear-gradient(90deg, #BC9CFF 0%, #8BA4F9 100%)', height: '3px' },
        valueLabel: { color: '#8BA4F9'},
        thumb: { color: '#8BA4F9'}
      },
    },
  });

    return(
      <div className ='ProductImageCard'>
        <div className = 'sliderWrapper'>
          {imageData.url
          ?<ThemeProvider theme = {theme}>
            <Typography id="non-linear-slider" gutterBottom>
              Размер изображения
            </Typography>
            <div className = 'sliderConteiner'>
              <i 
                className='fa fa-minus-circle fa-2x'
                onClick = {imageData.width > 0 ?()=>resizeHandler(imageData.width -1, imageData.id) :null} 
              />
              <Slider
                value = {imageData.width}
                min={0}
                step={1}
                max={100}
                getAriaValueText={()=>valueLabelFormat(imageData.width)}
                valueLabelFormat={()=>valueLabelFormat(imageData.width)}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <i 
                className='fa fa-plus-circle fa-2x' 
                onClick = {imageData.width < 100 ?()=>resizeHandler(imageData.width +1, imageData.id) :null} 
              />
            </div>
          </ThemeProvider>
          : null }
        </div>
        <div className = 'conteiner'>
          {imageData.url
          ?<div className = 'imageConteiner'>
            <div className = 'imageWrapper'>
              <img 
                src={URL.createObjectURL(imageData.url)}
                name = 'imagesProduct'
                alt = 'no file' 
                onMouseDown = {moveImage}
                style = {{width: `${250+(250/100*imageData.width)}px`, position: 'absolute', left: 0, top: 0}}
              />
            </div>
          </div>
          :<div className = 'inputConteiner'>
            <i className = 'fa fa-ban fa-5x' />
            <span>Изображение отсутствует!<br/>Нажмите чтобы выбрать</span>
            <input 
              type = 'file'
              accept = 'image/*'
              onChange = {(event)=>onChange(event, imageData.id)}  
            />
          </div>
          }
        </div>
          <div className = 'buttonConteiner'>
            <Button
             type = 'reset'
             onClick = {() => deleteImage(imageData.id)}
            >удалить</Button>
          </div>
      </div>
        
    )
}