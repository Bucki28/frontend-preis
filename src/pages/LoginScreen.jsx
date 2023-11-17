import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cardLogin.css';
import googleLogo from '../img/google.png';

import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLoginForm';
import { handleGoogleLogin } from '../hooks/useGoogleLogin';

import { NavLink } from 'react-router-dom';

export const LoginScreen = () => {
    const initialForm = {
        email: '',
        password: '',
    };
    const { formState, onInputChange, handleSubmit } = useLogin(initialForm);
    const [emailError, setEmailError] = useState('');

    // Función para validar el correo electrónico con regex
    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return regex.test(email);
    };

    // Manejar cambios en el campo de correo electrónico
    const handleEmailChange = (e) => {
        const email = e.target.value;
        onInputChange('email', email);

        if (!validateEmail(email)) {
            setEmailError('Correo electrónico no válido');
        } else {
            setEmailError('');
        }
    };

    return (
        <div className="container">
            <motion.div
                animate={{ y: 50, padding: 50 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="card h-100 w-100"
                id="login-card"
            >
                <motion.div animate={{ y: -70 }} className="card-body">
                    <h5 className="card-title mt-5">Iniciar sesión en Preis</h5>
                    <form onSubmit={handleSubmit}>
                        <motion.div animate={{ y: 40 }}>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formState.email}
                                    onChange={handleEmailChange}
                                />
                                {emailError && <p className="text-danger">{emailError}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={formState.password}
                                    onChange={(e) => onInputChange('password', e.target.value)}
                                    autoComplete='username'
                                />
                            </div>
                        </motion.div>

                        <motion.div animate={{ y: 100 }} className="d-flex justify-content-end mb-3">
                            <motion.button
                                type='submit'
                                className="btn btn-success"
                            >
                                Iniciar sesión
                            </motion.button>
                        </motion.div>
                    </form>
                    <motion.div animate={{ y: 140 }} className="text-center">
                        <NavLink to='/register' style={{ color: '#FFFC1E' }}>
                            <p style={{ margin: 0, padding: 0, width: '100px' }} />REGÍSTRATE
                        </NavLink> O INICIA SESIÓN CON
                    </motion.div>

                    <div className="d-flex justify-content-center">
                        <motion.button animate={{ y: 160, x: "0%" }} className="btn btn-primary" onClick={handleGoogleLogin} style={{ position: 'relative' }}>
                            <motion.img src={googleLogo} alt="Google Logo" style={{ height: '50px', margin: '-50px', backgroundColor: '#fff' }} />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
