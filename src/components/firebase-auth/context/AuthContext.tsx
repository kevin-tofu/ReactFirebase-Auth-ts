import React, { useContext, useState, useEffect, ReactComponentElement } from 'react'
// import { analytics } from '../firebase';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
         signOut, onAuthStateChanged, updateEmail, updatePassword, sendPasswordResetEmail,
} from 'firebase/auth';
// import { getAuth, Auth } from 'firebase/auth';
// import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { auth } from '../../../db'
interface Props {
  // children: string | JSX.Element | JSX.Element[] | () => JSX.Element
  children: string | JSX.Element | JSX.Element[]
}


const AuthContext: React.Context<any> = React.createContext('light')

function useAuth() {
  return useContext(AuthContext)
}

// function AuthProvider(children) {
function AuthProvider({ children } : Props){
  const [currentUser, setCurrentUser] = useState<User | any>()
  const [loading, setLoading] = useState<boolean>(true)

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEmail_(email: string) {
    return updateEmail(currentUser, email)
  }

  function updatePassword_(password: string) {
    return updatePassword(currentUser, password)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail_,
    updatePassword_
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export { AuthProvider, useAuth }