import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/menu.css";
import { NavLink } from "react-router-dom";



export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };
    const menuAnimation = isOpen
        ? {
            x: 0,
            transition: { duration: 0.8, delay: 0.1, ease: "easeInOut" },
        }
        : {
            x: "-100%",
            transition: { duration: 0.8, delay: 0.1, ease: "easeInOut" },
        };

    return (
        <>
            <motion.div className={`menu-container ${isOpen ? "open" : "close"}`}>
                <motion.div
                    className={`menu ${isOpen ? "open" : "close"}`}
                    variants={menuVariants}
                    initial="closed"
                    animate={menuAnimation}
                >
                    <nav className="menu-items">
                        <NavLink to="/" className="menu-item">
                            <p>Inicio</p>
                        </NavLink>
                        <NavLink to="/login" className="menu-item">
                            <p>Login</p>
                        </NavLink>
                        <NavLink to="/perfil" className="menu-item">
                            <p>Perfil</p>
                        </NavLink>
                        <NavLink to="/" className="menu-item">
                            <p>Contacto</p>
                        </NavLink>
                    </nav>
                </motion.div>
            </motion.div>
            <button className="menu-button" onClick={toggleMenu}>
                {isOpen ? "Cerrar" : "Abrir"} menú
            </button>
        </>

    );
};
