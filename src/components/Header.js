import { useState } from 'react';
import './Header.css'
import Logo from "../assets/logo.png.png"
import { Button, Input } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { auth,db } from '../firebase';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from "@material-ui/core";
import { useEffect } from 'react';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "background.paper",
    border: "2px solid gray",
    boxShadow: 24,
    p: 4,
  },
}));

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const [modelStyle] = useState(getModalStyle);
  const [openSigin, setOpenSigin] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
const unsubscribe = auth.onAuthStateChanged((authUser) => {
  if(authUser)
  {
    setUser(authUser);
  }
  else{
    setUser(null);
  }
})
  }, [user,email])

  const signup = async (Event) =>{
    Event.preventDefault();
    try{
      const authUser = await auth.createUserWithEmailAndPassword(email,password)
      db.collection("user").doc(authUser.email).set({
        owner_uis:authUser.uid,
        email:authUser.email,
      })
    }
    catch(error){
      alert(error.message)
    }
    setOpen(false);
  }

  const sigin = async (Event) =>{
    Event.preventDefault();
    try{
      await auth.siginWithEmailAndPassword(email,password)
      setOpenSigin(false);
    }
    catch(error){
      alert(error.message)
    }
    setOpen(false);
  }

  return (
    <div className='header'>
      <Modal className='modal' open={open} onClose={() => setOpen(false)}>
        <div style={modelStyle} className={classes.paper}>
          <form className='app__signup' style={{padding:"50px"}}>
            <Input placeholder='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type='submit' onClick={signup} style={{backgroundColor:'gray'}}>
              Sign up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal  open={openSigin} onClose={() => setOpenSigin(false)}>
        <div style={modelStyle} className={classes.paper}>
          <form className='app__signup' style={{padding:"50px"}}>
            <input placeholder='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type='submit' onClick={sigin} style={{backgroundColor:'gray'}}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <Link to="/" style={{textDecoration: 'none'}}>
        <img  className='header__logo' alt='' src={Logo}/> 
        </Link>
        <div className='header__right'>
            {user ? (
              <div className='headercontainer'>
              <Button className='header__button' onClick={() => auth.signOut()
              }>Log Out</Button>
          </div>
            ): (
            <>
            <div className='headercontainer'>
              <Button className='header__button' onClick={() => setOpen(true)}>Sign up</Button>
            </div>
            <div className='headercontainer'>
              <Button className='header__button' onClick={() => setOpenSigin(true)}>Log In</Button>
            </div>
              </>
            )}
        </div>
    </div>
  )
}

export default Header