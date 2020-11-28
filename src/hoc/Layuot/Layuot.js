import React, { Fragment, useState } from 'react'
import Blackout from '../../components/Blackout/Blackout'
import {CategoriesList} from '../../components/CategoriesList/CategoriesList'
import SetingContentProject from '../../components/SetingContentProject/SetingContentProject'
import MenuToggle from '../../components/Toggle/MenuToggle'
import './Layuot.scss'

export function Layuot(props){
    const [isOpenMenu, setisOpenMenu] = useState(false)
    return (
        <Fragment>
             <Blackout>
                <SetingContentProject />
             </Blackout>
            <div className='Layuot'>
                <header>
                    <div className = 'conteiner'>
                        <div className = 'label'>
                            <h1>Internet Market</h1>
                        </div>
                        <div className = 'menuToggle'>
                            <MenuToggle
                                isOpen = {isOpenMenu}
                                onClick = {() => setisOpenMenu(!isOpenMenu)} 
                            />
                        </div>
                    </div>
                </header>
                {isOpenMenu? <Blackout height = {80} />:null}
                <CategoriesList 
                    isOpen = {isOpenMenu}
                />
                <main>
                    {props.children}
                </main>
            </div>
        </Fragment>
    )
}

