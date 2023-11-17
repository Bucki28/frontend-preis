import { useState } from "react";

export const useLogin = () => {
    const initialForm = {
        email: "",
        password: "",
    };

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (name, value) => {
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        const requestOptions = {
            method: "POST", // O el método HTTP que necesites
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `email=${formState.email}&password=${formState.password}`,
        };

        try {
            const response = await fetch("http://localhost:8081/auth/register", requestOptions);

            if (response.ok) {
                // Manejar la respuesta exitosa aquí
                console.log("Inicio de sesión exitoso");
            } else {
                // Manejar la respuesta de error aquí
                console.error("Error al iniciar sesión");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return {
        formState,
        onInputChange,
        handleSubmit,
    };
};
