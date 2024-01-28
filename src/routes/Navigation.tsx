import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from '../assets/react.svg'
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage"

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : ''}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="home" element={ <ShoppingPage />} />
                    <Route path="users" element={<h1>USers Page</h1>} />

                    <Route path="/*" element={ <Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}