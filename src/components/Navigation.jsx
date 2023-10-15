import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"

const Navigation = () => {
  const items = useSelector((state)=>state.cart)
  return (<>
    <div className = "nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      <span>Cart Items : {items.length}</span>
    </div>
    </> )
}

export default Navigation
