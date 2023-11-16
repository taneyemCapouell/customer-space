import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'

const Auth = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Login />} />
        </Routes>
    )
}

export default Auth