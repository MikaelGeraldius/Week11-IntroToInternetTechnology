import React from 'react'
import { useState } from 'react'
import './App.css'
import SignInForm from './pages/login'
import Home from './pages/home'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignIn = (data) => {
    setUserData(data);
    setIsSignedIn(true);
  }

  return (
    <div>
      {isSignedIn ? (
        <Home user={userData} />
      ) : (
        <SignInForm onSignIn={handleSignIn} />
      )}
    </div>
  )
}

export default App
