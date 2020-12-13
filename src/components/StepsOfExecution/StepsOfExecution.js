import React from 'react'
import './StepsOfExecution.scss'

export default function StepsOfExecution(props){
    const steps = [...Array(props.steps).keys(),]
    return (
        <div className = 'StepsOfExecution'>
            <div className = 'StepsOfExecution__tracker'>
            <div 
                className = 'StepsOfExecution__tracker--success'
                style = {{width: props.success * 100/(props.steps - 1) + '%'}}
            />
                {steps.map(step => {
                    const cls = ['StepsOfExecution__tracker__step']
                    if(step < props.success) cls.push('success')
                    if(step === props.success) cls.push('current')
                    return (
                        <div 
                            className = {cls.join(' ')} 
                            key = {step+ Math.random()}>
                            <div className = 'StepsOfExecution__tracker__step__inside'>
                                {step < props.success 
                                    ? <i className="fa fa-check fa-2x" />
                                    : <span>{step + 1}</span> }
                            </div> 
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
}