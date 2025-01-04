import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import CardComponent from './components/cardComponent'
import {Route, Routes} from  'react-router-dom'

import UserProfile from './components/Profile'
import { useAppDispatch } from './redux/store'
import { setUsers } from './redux'
 






function App() {

  const dispatch = useAppDispatch()
  useEffect(()=>{
    const handleUserData=async()=>{
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(response.status == 200){
          return dispatch(setUsers(response.data))
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    handleUserData()
  }, [dispatch])
  return (
    <Routes>
    <Route path="/" element={<CardComponent />} />
    <Route path="/user" element={<UserProfile/>} />
  </Routes>
  )
}

export default App
