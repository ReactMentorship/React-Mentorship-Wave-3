import { useState } from 'react'
import './App.css'
import ProfileCard from './components/User'

export interface InitialUserProfile {
  name: string;
  email: string;
  phone: number;
  address: string;
  hasMeetings: boolean;
}

const initialUserProfile: InitialUserProfile = { name: 'Lupita Vazquez', email: 'lupita@example.com', phone: 81123456789, address: '742 Evergreen Terrace', hasMeetings: false }


function App() {
  const [userProfile, setUserProfile] = useState(initialUserProfile)

  return (
    <>
      <ProfileCard
        name={userProfile.name}
        email={userProfile.email}
        phone={userProfile.phone}
        address={userProfile.address}
        openCalendar={userProfile.hasMeetings}
        setUserProfile={setUserProfile}
      >
      </ProfileCard>
    </>
  )
}

export default App
