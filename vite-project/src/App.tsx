import './App.css'
import User from './components/User';

function App() {
  let isLoggedIn = true
  return (
    <>
      {isLoggedIn ? (
        <User/>
      ) : (
        <div className="login">Login Here!</div>
      )}
    </>
  )
}

export default App
