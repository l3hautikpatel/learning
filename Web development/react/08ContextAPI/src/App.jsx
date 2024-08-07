import { React , useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Card from './components/Card'
import UserContext from './context/UserContext'
import { useContext } from 'react'
import Card2 from './components/Card2'

function App() {
  
  return (
    <UserContextProvider>
      <Card/>
      <Card2/>
    </UserContextProvider>
  )
}

export default App
