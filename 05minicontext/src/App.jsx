import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
