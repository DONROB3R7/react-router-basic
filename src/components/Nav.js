import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <>
       <ul>
         <li className='logo'>React Route</li>
         <li><Link to="/">Home Page</Link></li>
         <li><Link to="/mynetwork">My Network</Link></li>
         <li><Link to="/jobs">Jobs</Link></li>
         <li><Link to="/messaging">Messaging</Link></li>
         <li><Link to="/notification">Notification</Link></li>
       </ul>
    </>
  )
}