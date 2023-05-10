import React from 'react'
import "./Footer.css";
import Logo from "../assets/logo.png.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer__top'>
        <div  className='footer'>
            <div className='footer__left'>
            <Link to="/" style={{textDecoration: 'none'}}>
            <img className='logo__header__footer' src={Logo} alt=''/>
            </Link>
                <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",width:"300px"}}>
                    <img src='https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png' alt=''/>
                    <img src='https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png' alt=''/>
                    <img src='https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png' alt=''/>
                    <img src='https://img.icons8.com/ios-filled/24/ffffff/linkedin.png' alt=''/>
                </div>
            </div>
            <div className='footer__right'>
                <div style={{display:'flex',alignItems:'center',padding:"10px"}} className='address__footer'>
                    <img src='https://img.icons8.com/material-outlined/24/ffffff/marker.png' alt='' style={{marginLeft:"34px",width:'19px'}}/>
                    Shop No.99/26A, Delhi Agrasen Marg, UV Block, Assam Bagh, Orisa, 114665
                </div>
                <div style={{display:'flex',alignItems:'center',padding:"10px"}}>
                    <img src='https://img.icons8.com/material-outlined/24/ffffff/new-post.png' alt ='' style={{marginLeft:"34px",width:'19px'}} />
                    sonusaini6280@gmail.com
                </div>
                <div style={{display:'flex',alignItems:'center',padding:"10px"}}>
                    <img src='https://img.icons8.com/material-outlined/24/ffffff/phone.png' alt='' style={{marginLeft:"34px",width:'19px'}}/>
                    +917896768956
                </div>
            </div>
        </div>
        <div>
            <p>copyright @2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer