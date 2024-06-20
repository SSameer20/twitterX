import React from 'react'
import "../styles/menu.css"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
  }
  return (
    <div className='home-menu'>
      <ul>
        <li><Link to="/application">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/profile">Search</Link></li>
        <li><Link to="/" onClick={(e)=>navigate("/")}>logout</Link></li>
      </ul>
    </div>
  )
}
