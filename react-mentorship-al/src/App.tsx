import './App.css'
import User from './components/User';

function App() {
  const userProfile = [{ name: 'Alfonso Hernandez', email: 'alfonsohernandez@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' }]

  return (
    <>
      <User userProfile={userProfile[0]}></User>
    </>
  )
}

export default App
