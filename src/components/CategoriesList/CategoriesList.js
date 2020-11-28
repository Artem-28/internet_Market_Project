import React from 'react'
import { CSSTransition } from 'react-transition-group'
/* import { CSSTransition } from 'react-transition-group' */


import './CategoriesList.scss'

export  function CategoriesList({isOpen}){
    return (
        <CSSTransition
            in={isOpen}
            timeout={{
                enter: 1000,
                exit: 500
            }}
            unmountOnExit
            mountOnEnter
        >
       
            <div className = 'CategoriesList'>
                <div className = 'insideBlock'>
                    <h1>CategoriesList</h1>
                </div>
            </div>
        </CSSTransition>  
    )
}
