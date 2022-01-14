import React from 'react'
import {logo,title} from '../styles/style'
import useHover from '../Hooks/useHover'

const Logo = () => {
    
    const[hover,mouseOver,mouseOut] = useHover()
    // const logoImage = "./logo192.png"
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            
            <h3 style={title}>Logo</h3>
            {/* <img src={logoImage} width="100" alt="logo"/> */}
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoImage.url} width="100" alt="logo"/>
            {
                hover ? <h3>Logo</h3> : null
            }
        </div>
    )
}

export default Logo
