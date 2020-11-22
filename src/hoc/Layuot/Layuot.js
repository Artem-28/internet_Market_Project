import React from 'react'
import  Header from '../../components/Header/Header'

const Layuot = props => {
    return (
        <div className='Layuot'>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layuot