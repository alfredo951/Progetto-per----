import React, { useRef, useState } from 'react'
import logo from "./../logo.svg"
import { Link, useLocation } from 'react-router-dom'
export default function NavBar() {
    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    const refNav=useRef<HTMLUListElement  | null>(null)
    const location = useLocation();
   

    const HandleShowNavbar = () => {
           setShowNavbar(!showNavbar)
     if(refNav.current){ if(showNavbar ){
      refNav.current.style.width="0px";
      refNav.current.style.left="-100px";
     }else{
    
      refNav.current.style.width="400px";
      refNav.current.style.left="0px";
    
    }
    }

  }

const HandlerActiveLink=(path:String)=>{
      if(location.pathname===path){
        return true
      }
      else return false
}

  return (
    <div style={{position:"sticky", top:"0" ,width:"100%" ,background:"#FFF", 
    boxShadow:" 5px 5px 15px 5px rgba(0,0,0,0.38)",padding:"25px 0px",zIndex:"12"}}>
        <nav>
      <div className='logo'>
          <img src={logo} alt='logo'style={{width:'100px'}}/>
      </div>
      <div>
        <ul ref={refNav} className='listMenuItem'>
         <li style={HandlerActiveLink("/")?{background:"yellow"}:{}}> <Link to="/">Home</Link></li>
         <li  style={HandlerActiveLink("/about")?{background:"yellow"}:{}}> <Link to="/about">Chi siamo</Link></li>
         <li  style={HandlerActiveLink("/contatti")?{background:"yellow"}:{}}> <Link to="/contatti">contatti</Link></li>
         <li  style={HandlerActiveLink("/compila_i_tuoi_documenti")?{background:"yellow"}:{}}> <Link to="/compila_i_tuoi_documenti">compila i tuoi documenti</Link></li>


      </ul>
      



        <div className="menu-icon" onClick={HandleShowNavbar}>
        <><div className='menuicon'>
            
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            
            </div></>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
     
        </div>
      </div>
    </nav>



    </div>
  )
}
