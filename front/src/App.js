import React from "react"
import { Routes, Route } from "react-router-dom"
import Admin from './routes/Admin'
import Users from './routes/Users'
import Auth from './routes/Auth'
import Website from "./pages/website/Website"

const App = () => {

  return (
    <Routes>
      <Route path="/*" element={<Users />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/users/*" element={<Users />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/customer-space/" element={<Website />} />
    </Routes>
  )
}
export default App
