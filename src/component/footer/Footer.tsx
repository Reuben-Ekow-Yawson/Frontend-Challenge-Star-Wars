import React from 'react'
import './footer.css'
import Logo from "../images/Logo.webp"
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className="logo">
      <Navbar.Brand>
              <img src={Logo} alt="Star-wars-logo"  className="logo" onClick={() => {
                navigate("/")
              }} / >
          </Navbar.Brand>
      </div>
      <p>&copy;Copyright 2022</p>
    </div>
  )
}

export default Footer