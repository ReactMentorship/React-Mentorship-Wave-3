import './App.css'
import ProfileCard from './components/profilecard'

function App() {
  const userProfile = { name: 'Alfonso Hernandez', email: 'alfonsohernandez@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' }

  return (
    <>
      <ProfileCard name={userProfile.name} email={userProfile.email} phone={userProfile.phone} address={userProfile.address}></ProfileCard>
    </>
  )
}

export default App
