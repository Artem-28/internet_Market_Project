
import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import AddCategoryInput from '../AddCategoryInput/AddCategoryInput'
import Button from '../buttons/Button/Button'
import CategoryItem from '../CategoryItem/CategoryItem'
import './ProjectFileStructure.scss'

export default function ProjectFileStructure ({list}){


    return (
        <div className = 'ProjectFileStructure'>
            {!!list
            ?Object.keys(list).map(categoryKey => {
                return (
                    <React.Fragment key = {categoryKey}>
                        <CategoryItem name = {list[categoryKey].title} path = {categoryKey} />
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
                                                                />
                                                                <div className = 'ProjectFileStructure__subcategory'>
                                                                    <div className = 'ProjectFileStructure__subcategory__button'>
                                                                        <Button
                                                                            width = {110}
                                                                            height = {20}
                                                                            fontSize ={10}
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