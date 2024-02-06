import './App.css'
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import {useState, useEffect, createContext} from 'react';
import { Routes, Route } from "react-router-dom"


export const UsersContext = createContext();

export default function App() {
  
  let list = []

  const [users, setUsers] = useState([]);

  const API_URL = 'https://randomuser.me/api/?results=10'
  
  useEffect(() => {

    fetch(API_URL)
      .then(response => response.json())
      .then(data =>  {
        list = data.results;
        console.log(list)
        setUsers(list);
      })
      .catch(error => console.error(error));
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