import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './User.css'
import UserAvatar from './UserAvatar'
import UserCard from './UserCard'

function User() { 
  const userProfile = { name: 'Amador Santiago', 
    email: 'amador@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo León, CP65343' }

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UserAvatar/>
          </Grid>
          <Grid item xs={12}>
           <h1 className="name">{userProfile.name}</h1>
          </Grid>
          <Grid item xs={12}>
            <UserCard user={userProfile} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default User