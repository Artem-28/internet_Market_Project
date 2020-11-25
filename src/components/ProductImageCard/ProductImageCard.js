import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import './ProductImageCard.scss'

export default function ProductImageCard({image, onChange, resizeHandler}){
    function valueLabelFormat(image) {
      return `${image}%`
    }

    const handleChange = (event, newValue) => {
      resizeHandler(newValue, image.id)
    };

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
          {image.url
          ?<ThemeProvider theme = {theme}>
            <Typography id="non-linear-slider" gutterBottom>
              Размер изображения
            </Typography>
            <div className = 'sliderConteiner'>
              <i 
                className='fa fa-minus-circle fa-2x'
                onClick = {image.width > 0 ?()=>resizeHandler(image.width -1, image.id) :null} 
              />
              <Slider
                value = {image.width}
                min={0}
                step={1}
                max={100}
                getAriaValueText={()=>valueLabelFormat(image.width)}
                valueLabelFormat={()=>valueLabelFormat(image.width)}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <i 
                className='fa fa-plus-circle fa-2x' 
                onClick = {image.width < 100 ?()=>resizeHandler(image.width +1, image.id) :null} 
              />
            </div>
          </ThemeProvider>
          : null }
        </div>
        <div className = 'conteiner'>
          {image.url
          ?<div className = 'imageConteiner'>
            <img 
              src={image.url}
              name = 'imagesProduct'
              alt = 'no file' 
              style = {{width: `${250+(250/100*image.width)}px`, position: 'absolute', left: 0, top: 0}}
            />
          </div>
          :<div className = 'inputConteiner'>
            <i className = 'fa fa-ban fa-5x' />
            <span>Изображение отсутствует!<br/>Нажмите чтобы выбрать</span>
            <input 
              type = 'file'
              accept = 'image/*'
              onChange = {(event)=>onChange(event, image.id)}  
            />
          </div>
          }
        </div>
        <button>Click</button>
      </div>
        
    )
}