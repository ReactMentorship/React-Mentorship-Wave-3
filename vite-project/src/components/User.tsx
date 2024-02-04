import './User.css'
import UserList from  './UserList'

function User() { 

  const userData = [
    { name: 'Amador Santiago', 
      email: 'amador@example.com', 
      phone: 81123456789, 
      address: '21 Main Street, Monterrey Nuevo León, CP65343'
    }
  ]

  return (
    <>  
      <UserList userData = {userData}/>
    </>
  )
}

export default User