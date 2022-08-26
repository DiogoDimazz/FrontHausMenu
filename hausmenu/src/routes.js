
import Main from './Pages/Main/Main'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    )
}