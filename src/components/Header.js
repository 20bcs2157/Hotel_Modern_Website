import React from 'react'
import './Header.css'
import Logo from "../assets/logo.png.png"
import { Button } from '@material-ui/core'

const Header = () => {
  return (
    <div className='header__center'>
        <img className='header__logo' alt='' src={Logo
        }/>
        <div className='header'>
            <div className='center__button'>Home</div>
            <div className='center__button'>Rooms & Suits</div>
            <div className='center__button'>Offers</div>
            <div className='center__button'>My bookings</div>
            <div className='center__button'>profile</div>
        </div>
        <div className='header__right'>
            <div className='headercontainer'>
                <Button className='header__button'>Sign up</Button>
            </div>
        </div>
    </div>
  )
}

export default Header