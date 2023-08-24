import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import logo from './logo.png'
import {HashLink} from 'react-router-hash-link'

function Header() {

    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click);
    }

    const [color,setColor]=useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
<div className={color ? "header header-bg" : "header"}>
        <HashLink to='#hero'>
        <a className='logoFix'>
                  <img src={logo} height="250"  alt="logo"/>
              </a>
        </HashLink>
        <ul className={click ? "nav-menu active":"nav-menu"} style={{cursor:"pointer"}}>
            <HashLink to='#hero' style={{textDecoration:'none'}}>
            <li className='mt-1' onClick={handleClick}>
                <a className='text-white'> Home </a>
            </li>
            </HashLink>
            <HashLink to='#aboutus' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> About </a>
            </li>
            </HashLink>
            <HashLink to='#problems' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Problems </a>
            </li>
            </HashLink>
            <HashLink to='#prizes' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Prizes </a>
            </li>
            </HashLink>
            <HashLink to='#sponsors' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Sponsors </a>
            </li>
            </HashLink>
            <HashLink to='#guidelines' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Guidelines </a>
            </li>
            </HashLink>
            <HashLink to='#gallery' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Gallery </a>
            </li>
            </HashLink>
            <HashLink to='#faq' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> FAQ </a>
            </li>
            </HashLink>
            <HashLink to='#contact' style={{textDecoration:'none'}} onClick={handleClick}>
            <li className='mt-1'>
                <a className='text-white'> Contact </a>
            </li>
            </HashLink>
         
        </ul>
        <div className="ham" onClick={handleClick} style={{cursor:'pointer'}}>
            {click ? (<CloseIcon fontSize='large' size={25} style={{color: "white"}}/>) : (<MenuIcon fontSize='large'  style={{color: "white"}}/>)}
        </div>
    </div>
  )
}

export default Header