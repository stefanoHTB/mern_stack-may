import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'
import AdminLogin from './features/auth/AdminLogin'

import User from './components/User'


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>


        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminLogin />} />


        {/* user routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="user" element={<User />} />
        </Route>

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>

       
        

      </Route>
    </Routes>
  )
}

export default App;
