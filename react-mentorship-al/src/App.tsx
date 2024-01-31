import './App.css'
import UserList from './components/UserList';
import UserProfile from './components/UserProfile.tsx'
import {useState, useEffect, createContext} from 'react';
import { Route, Routes } from "react-router-dom";
export const UsersContext = createContext(null);

function App() {
  const usersObject = [
    { id: 1, name: 'Alfonso Hernandez', email: 'alfonsohernandez@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' },
    { id: 2, name: 'Pepito', email: 'pepito_soy@example.com', phone: 5511343444, address: '542 jamaica st, Mty NL, CP64323'}
  ]
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{
    if(Object.keys(usersList).length == 0){
      setUsersList(usersObject);
    }
  }, usersObject);

  return (
    <>
      <Routes>
        <Route path="/" element={<UsersContext.Provider value={{ usersList, setCurrentUser }}><UserList></UserList></UsersContext.Provider>}/>
        <Route path="/user/:id" element={<UsersContext.Provider value={{ currentUser }}><UserProfile></UserProfile></UsersContext.Provider>} />
      </Routes>
    </>
  )
}

export default App;