import React, {useState} from 'react'
import CategoryListSeting from '../CategoryListSeting/CategoryListSeting'
import './SetingContentProject.scss'
import {ContextSetingContentProject} from '../../context/context'
import Blackout from '../Blackout/Blackout'
import AddProductCard from '../AddProsuctCard/AddProductCard'

export default function SetingContentProject(){
    const [pathNewProduct, setPathNewProduct] = useState({path: '', pathTitle: ''})
    function startAddNewProduct(path, pathTitle){
        pathNewProduct.path = path
        pathNewProduct.pathTitle = pathTitle
        setPathNewProduct({...pathNewProduct})
    }

    function cancelAddNewProduct(){
        pathNewProduct.path = ''
        pathNewProduct.pathTitle = ''
        setPathNewProduct({...pathNewProduct})
    }
    return (
        <ContextSetingContentProject.Provider value = {{startAddNewProduct}}>
            <div className = 'SetingContentProject'>
                <div className = 'SetingContentProject__CategoryListSeting'>
                    <CategoryListSeting 
                
                    />
                </div>
            </div>
            {!!pathNewProduct.path
                ?   <Blackout>
                        <AddProductCard 
                            path = {pathNewProduct}
                            cancel = {cancelAddNewProduct}
                        />
                    </Blackout>
                :   null}
            
           
        </ContextSetingContentProject.Provider>    
    )
}