import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import { useEffect } from 'react'

function Card2() {
    const {theam} = useContext(UserContext)
    const [backgroundColor, setbackgroundColor] = useState("#000")
    useEffect(() => {
      
    setbackgroundColor(theam == "dark" ? "#000" : "#fff") 

    }, [theam])
    
  return (
    <div style={{backgroundColor:backgroundColor}}> theam  is {theam}</div>
  )
}

export default Card2