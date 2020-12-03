import firebase from 'firebase/app'
import 'firebase/database'
import { GET_GATEGORIES_LIST } from "./actionType"



export function getProductsList(dispatch){
    firebase.database().ref('products/').on('value', category => { 
        dispatch({
            type: GET_GATEGORIES_LIST,
            payload: category.val()
        }) 
    })
}

export function addNewCategory(path, name, dispatch){
    firebase.database().ref('products/category/' + path).set({
        categoryName: name,
        path: path
    }).then()
}

export function removeCategory(path, dispatch){
    firebase.database().ref('products/category/' + path).set(null).then()
}