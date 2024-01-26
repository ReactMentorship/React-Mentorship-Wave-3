import './App.css'
import User from './components/UserList';
import {useState, useEffect} from 'react';

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
  },usersObject)
  return (
    <>
      <User userProfile={usersList}></User>
    </>
  )
}

export default App
