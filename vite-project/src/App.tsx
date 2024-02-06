import './App.css'
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import {useState, useEffect, createContext} from 'react';
import { Routes, Route } from "react-router-dom"


export const UsersContext = createContext();

export default function App() {
  
  const list = [
    { 
      id:23,
      name: 'Amador Santiago', 
      email: 'amador@example.com', 
      phone: 81123456789, 
      address: '21 Main Street, Monterrey Nuevo León, CP65343'
    }
  ]

  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
      setUsers(list);
  },[]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <Routes>
        <Route path="/" element={ <UserList/> } />
        <Route path="home" element={ <UserList/> } />
        <Route path="user/:userId" element={ <UserDetail/> } />
      </Routes>
    </UsersContext.Provider>
  )
}