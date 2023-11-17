import { useState } from "react";

export const useLogin = () => {
    const initialForm = {
        name: "",
        lastname: "",
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
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `name=${formState.name}&lastname=${formState.lastname}&email=${formState.email}&password=${formState.password}`,
        };

        try {
            const response = await fetch("http://localhost:8080/login", requestOptions);

            if (response.ok) {
                console.log("Inicio de sesión exitoso");
                window.location.replace("http://localhost:5173/register");
            } else {
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
