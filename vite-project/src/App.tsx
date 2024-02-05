import './App.css'
import UserList from './components/UserList';
import {useState, useEffect, createContext} from 'react';

export const UsersContext = createContext();

export default function App() {
  
  const list = [
    { name: 'Amador Santiago', 
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
      <UserList></UserList>
    </UsersContext.Provider>
  )
}