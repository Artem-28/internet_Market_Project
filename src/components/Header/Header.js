import React, { useState } from 'react'
import MenuToggle from '../Toggle/MenuToggle'

import './Header.scss'

const Header = () =>{
    const [isOpenMenu, setisOpenMenu] = useState(false)
   
    return (
        <header className='Header'>
            <div className = 'toggleConteiner'>
                <MenuToggle
                    isOpen = {isOpenMenu}
                    onClick = {()=>setisOpenMenu(!isOpenMenu)} 
                />
            </div>
        </header>
    )
}

export default Header