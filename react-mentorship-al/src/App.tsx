import './App.css'
import UserList from './components/UserList';
import UserProfile from './components/UserProfile.tsx'
import axios from 'axios';
import {useState, useEffect, createContext} from 'react';
import { Route, Routes } from "react-router-dom";
export const UsersContext = createContext(null);

const baseURL = "https://randomuser.me/api?results=10";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      const apiResponse = response.data.results;
      let count = 1;
      let usersObject = [];
      
      apiResponse.map((user) => {
        usersObject.push({
          id: count,
          name: user.name.first +' ' + user.name.last,
          email: user.email,
          phone: user.phone,
          address: user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state + ', ' + user.location.postcode + ', ' + user.location.country
        });
        count++;
      });
      setUsersList(usersObject);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<UsersContext.Provider value={{ usersList, setCurrentUser }}><UserList></UserList></UsersContext.Provider>}/>
        <Route path="/user/:id" element={<UsersContext.Provider value={{ usersList, currentUser, setCurrentUser }}><UserProfile></UserProfile></UsersContext.Provider>} />
      </Routes>
    </>
  )
}

export default App;