import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userProfile = { name: 'Amador Santiago', 
    email: 'amador@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' }

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="avatar"><Avatar sx={{ width: 150, height: 150, fontSize: '50px' }}>AS</Avatar></div>
          </Grid>
          <Grid item xs={12}>
           <h1 className="name">{userProfile.name}</h1>
          </Grid>
          <Grid item xs={12}>
            <div className="card-container">
              <Card sx={{ width: 700}}>
                <CardContent>
                  <Typography sx={{ fontSize: 32, }}gutterBottom>
                    Information
                  </Typography>
                  <section className="Information">
                    <Typography sx={{ fontSize: 24 }}gutterBottom>
                      Email: {userProfile.email}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }}gutterBottom>
                      Phone: {userProfile.phone}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }}gutterBottom>
                      Addres: {userProfile.address}
                    </Typography>                                     
                  </section>                               
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
