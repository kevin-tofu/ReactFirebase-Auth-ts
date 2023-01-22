// import React from 'react'

import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { 
  Signup, PrivateRoute, 
  UpdateProfile, ForgotPassword, 
  Login, Dashboard, NoMatch } from '../Index'
import 'bootstrap/dist/css/bootstrap.min.css';
// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

function AppLogin() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/'
                element={<PrivateRoute><Dashboard/></PrivateRoute>}
              />
              <Route path='/update-profile'
                element={<PrivateRoute><UpdateProfile/></PrivateRoute>}
              />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/forgot-password' element={<ForgotPassword/>} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default AppLogin
