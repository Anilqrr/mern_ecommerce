import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/myimge.jpg'
export default function Navbar() {
  return (
    <nav className='nav'>
        <div className="logo">
            <Link to="/"><img src={Image} alt="test" /></Link>
        </div>
        <ul>
            <Link to="/"><li>Home</li></Link>
             <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="admin">
           <p><Link to='/admin'>Admin</Link></p>
        </div>
    </nav>
  )
}
