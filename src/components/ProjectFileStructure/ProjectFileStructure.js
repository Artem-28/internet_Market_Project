import React, {useContext} from 'react'
import ProductItem from '../ProductItem/ProductItem'
import AddCategoryInput from '../AddCategoryInput/AddCategoryInput'
import Button from '../buttons/Button/Button'
import CategoryItem from '../CategoryItem/CategoryItem'
import './ProjectFileStructure.scss'
import {ContextSetingContentProject} from '../../context/context'

export default function ProjectFileStructure ({list}){
    const {startAddNewProduct} = useContext(ContextSetingContentProject)

    return (
        <div className = 'ProjectFileStructure'>
            {!!list
            ?Object.keys(list).map(categoryKey => {
                return (
                    <React.Fragment key = {categoryKey}>
                        <CategoryItem 
                            name = {list[categoryKey].title} 
                            path = {categoryKey} 
                            id = {categoryKey}
                        />
                        <div className = 'ProjectFileStructure__subcategory'>
                            <AddCategoryInput path = {categoryKey} />
                            {Object.keys(list[categoryKey]).map(subcategoryKey => {
                                const subcategoryList = list[categoryKey][subcategoryKey]
                                if(!!subcategoryList.title){
                                    return (
                                        <React.Fragment key = {subcategoryKey}>
                                            <CategoryItem 
                                                name = {subcategoryList.title}
                                                path = {`${categoryKey}/${subcategoryKey}`}
                                                id = {subcategoryKey}
                                            />
                                            <div className = 'ProjectFileStructure__subcategory'>
                                                <AddCategoryInput path = {`${categoryKey}/${subcategoryKey}`} />
                                                {Object.keys(subcategoryList).map(subSubCategoryKey => {
                                                    const subSubCategoryList = subcategoryList[subSubCategoryKey]
                                                    if(!!subSubCategoryList.title){
                                                        return (
                                                            <React.Fragment key = {subSubCategoryKey}>
                                                                <CategoryItem
                                                                    name = {subSubCategoryList.title}
                                                                    path = {`${categoryKey}/${subcategoryKey}/${subSubCategoryKey}`}
                                                                    id = {subSubCategoryKey}
                                                                />
                                                                <div className = 'ProjectFileStructure__subcategory'>
                                                                    <div className = 'ProjectFileStructure__subcategory__button'>
                                                                        <Button
                                                                            width = {110}
                                                                            height = {20}
                                                                            fontSize ={10}
                                                                            onClick = {()=>startAddNewProduct(
                                                                                `${categoryKey}/${subcategoryKey}/${subSubCategoryKey}`,
                                                                                `${list[categoryKey].title}/${subcategoryList.title}/${subSubCategoryList.title}/`
                                                                                )}
                                                                        >добавить товар</Button>
                                                                    </div>
                                                                    {Object.keys(subSubCategoryList).map(productKey => {
                                                                        const product = subSubCategoryList[productKey]
                                                                        if(!!product.title){
                                                                            return (
                                                                                <ProductItem name = {product} key = {productKey} />
                                                                            )
                                                                        }else{return null}
                                                                    })}
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    }else {return null}
                                                })}
                                            </div>
                                        </React.Fragment>
                                        
                                    )
                                }else {
                                    return null
                                }
                                
                            })}
                        </div>
                    </React.Fragment>
                   
                )
            })
            : null
            }
        </div>
    )
}