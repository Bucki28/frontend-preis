export const handleGoogleLogin = async () => {
    try {
        const response = await fetch("http://localhost:8081/auth/login")

        console.log(response)
        window.location.href = url;
    } catch (error) {
        console.error("Error de red:", error);
    }
};


/*
try {
    // const originURL = window.location.href;
    // const redirectURL = `http://localhost:8080/auth/login?originURL=${encodeURIComponent(originURL)}`;

    // Redirige al usuario al backend
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "GET",
        credentials: "omit"
    });


    const data = await response.json();

    const token = data.access_token;

    if (token) {
        localStorage.setItem("access_token", token);
        window.location.href = "/home"; // Redirige al usuario a la ruta deseada
    } else {
        console.error("No se encontró el token de acceso en la respuesta del backend");
    }
} catch (error) {
    console.error("Error de red:", error);
}*/