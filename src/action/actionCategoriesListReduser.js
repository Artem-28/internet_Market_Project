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

export function addNewCategory(path, name, clearInput){
    let newCategory = firebase.database().ref(`products/category/`+path).push().key
    firebase.database().ref(`products/category/${path}`+newCategory).set({
        title: name,
        key: newCategory
    }).then(()=>{
        clearInput()
    })
}

export function removeCategory(path){
    firebase.database().ref('products/category/' + path).set(null).then()
}
