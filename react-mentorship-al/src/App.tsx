import './App.css'
import User from './components/UserList';

function App() {
  const userProfile = [
    { name: 'Alfonso Hernandez', email: 'alfonsohernandez@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' },
    { name: 'Pepito', email: 'pepito_soy@example.com', phone: 5511343444, address: '542 jamaica st, Mty NL, CP64323'}
  ]

  return (
    <>
      <User userProfile={userProfile}></User>
    </>
  )
}

export default App
