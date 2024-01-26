import './App.css'
import UserList from './components/UserList';
import {useState, useEffect, createContext} from 'react';

export const UsersContext = createContext(null);

function App() {
  const usersObject = [
    { name: 'Alfonso Hernandez', email: 'alfonsohernandez@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' },
    { name: 'Pepito', email: 'pepito_soy@example.com', phone: 5511343444, address: '542 jamaica st, Mty NL, CP64323'}
  ]
  const [usersList, setUsersList] = useState([]);
  useEffect(()=>{
    if(Object.keys(usersList).length == 0){
      setUsersList(usersObject);
    }
  },usersObject);

  return (
    <>
      <UsersContext.Provider value={{ usersList, setUsersList }}>
        <UserList></UserList>
      </UsersContext.Provider>
    </>
  )
}

export default App
