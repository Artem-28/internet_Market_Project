
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
            ? Object.keys(list).map(category => {
                return (
                    <React.Fragment key = {category}>
                        <CategoryItem name = {category} path={category}/>
                        <div className = 'ProjectFileStructure__subcategory'>
                            <AddCategoryInput category = {category} />
                            {Object.keys(list[category]).map(subcategory => {
                                if(subcategory !== 'categoryName' && subcategory !== 'path'){
                                    return (
                                        <React.Fragment key = {subcategory}>
                                            <CategoryItem name ={subcategory} path = {`${category}/${subcategory}`} />
                                            <div className = 'ProjectFileStructure__subcategory'>
                                                <AddCategoryInput category = {`${category}/${subcategory}`}/>
                                                {Object.keys(list[category][subcategory]).map(subSubCategory => {
                                                    if(subSubCategory !== 'categoryName' && subSubCategory !== 'path'){
                                                        return(
                                                            <React.Fragment key = {subSubCategory}>
                                                                <CategoryItem name ={subSubCategory} path = {`${category}/${subcategory}/${subSubCategory}`} />
                                                                <div className = 'ProjectFileStructure__subcategory'>
                                                                    <div className = 'ProjectFileStructure__subcategory__button'>
                                                                        <Button
                                                                            width = {200}
                                                                            height = {25}
                                                                        >добавить товар</Button>
                                                                    </div>
                                                                    {Object.keys(list[category][subcategory][subSubCategory]).map(product => {
                                                                        if(product /* !== 'categoryName' && product !== 'path' */){
                                                                            return <ProductItem name ={product} key = {product} />
                                                                        } else { return null}
                                                                    })}
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    }else{ return null }
                                                })}
                                            </div>
                                        </React.Fragment>
                                    )
                                } else {return null}
                            })}
                        </div>
                    </React.Fragment>
                )
            })
            : <div className = 'ProjectFileStructure__loading'>Загрузка</div>
            }
        </div>
    )
}