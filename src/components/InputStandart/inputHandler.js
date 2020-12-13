export function focusHandler(event){
    const label = event.target.previousElementSibling
    label.classList.add('InputStandart__inside__label--focus')  
}
export function blurHandler(event){
    const label = event.target.previousElementSibling
    if(!event.target.value){
        label.classList.remove('InputStandart__inside__label--focus')
    }
}

export function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched
}