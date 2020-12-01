
import React from 'react'
import AddCategoryInput from '../AddCategoryInput/AddCategoryInput'
import CategoryItem from '../CategoryItem/CategoryItem'
import './ProjectFileStructure.scss'

export default function ProjectFileStructure ({list, onClick}){
    console.log(list)

    return (
        <div className = 'ProjectFileStructure'>
            {list
            ? Object.keys(list).map(category => {
                return (
                    <React.Fragment  key = {category}>
                        <CategoryItem name = {category} />
                        <div className = 'ProjectFileStructure__subcategory'>
                            <div className = 'ProjectFileStructure__subcategory__inputConteiner'>
                                <AddCategoryInput 
                                    category = {category}
                                    onClick = {onClick}
                                    />
                            </div>
                            {Object.keys(list[category]).map(subcategory => {
                                if (subcategory !== 'categoryName' && subcategory !== 'path' ){
                                    return (
                                        <React.Fragment key = {subcategory}>
                                            <CategoryItem name = {subcategory} />
                                            <div className = 'ProjectFileStructure__subcategory'>
                                                <div className = 'ProjectFileStructure__subcategory__inputConteiner'>
                                                    <AddCategoryInput 
                                                        category = {subcategory}
                                                        onClick = {onClick}
                                                    />
                                                </div>
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
            : <div className = 'ProjectFileStructure__loading'>Загрузка</div>
        }
            
        </div>
    )
}