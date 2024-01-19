import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import { useState } from 'react'

function User() {
  const data = {
      name: 'Guillermo Lam',
      email: 'guillermo@example.com',
      phone: 8181818181,
      address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }
  const [counter, setCounter] = useState(0);

  function increaseCount() {
    setCounter(counter + 1);
  }
  
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea sx={{ padding: 3 }}>
              <h3>Information</h3>
              <div>Email: {data.email} </div>
              <div>Phone: {data.phone}</div>
              <div>Address: {data.address}</div>
          </CardActionArea>
        </Card>
        <button onClick={increaseCount}>Increase</button>
        <div>{`counter: ${counter}`}</div>
        <div>{counter % 2 === 0 ? 'even' : 'odd'}</div>
      </div>
    </>
  )
}

export default User
