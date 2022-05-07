import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/login";
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}