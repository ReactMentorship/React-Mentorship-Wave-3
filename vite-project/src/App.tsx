//import { useState } from 'react'
import './App.css'
import ProfileCard from './components/User'

function App() {
  //const [count, setCount] = useState(0)
  const userProfile = { name: 'Lupita Vazquez', email: 'lupita@example.com', phone: 81123456789, address: '742 Evergreen Terrace', hasMeetings: false }
  return (
    <>
      <ProfileCard 
        name={userProfile.name} 
        email={userProfile.email} 
        phone={userProfile.phone} 
        address={userProfile.address} 
        openCalendar={userProfile.hasMeetings} 
        >
      </ProfileCard>
    </>
  )
}

export default App
