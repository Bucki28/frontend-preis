import React from 'react'
import { Navigate, Route, Routes, } from "react-router-dom"
import { RegisterScreen } from '../pages/RegisterScreen'
import { LoginScreen } from '../pages/LoginScreen'
import { ProductsProvider } from '../context/ProductsProvider'
import { HomeScreen } from '../pages/HomeScreen'
import { NavBar } from '../components/Menu'
import { SearchBar } from '../components/SearchBar'


export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<><LoginScreen /></>}></Route>
                <Route path="/register" element={<><RegisterScreen /></>}></Route>
                {/* Para rutas no definidas */}
                <Route path="/*" element={<Navigate to='/' />}></Route>
            </Routes >
            <ProductsProvider>
                <Routes>
                    <Route path="/" element={<><NavBar /><SearchBar /><HomeScreen /></>} />
                </Routes>
            </ProductsProvider>
        </>
    )
}
