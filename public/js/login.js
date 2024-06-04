document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    // Validar que se haya ingresado un usuario
    if (!user.trim()) {
        alert("Por favor ingresa tu nombre de usuario");
        return;
    }

    // Validar que se haya ingresado una contraseña
    if (!password.trim()) {
        alert("Por favor ingresa tu contraseña");
        return;
    }



    try {
        const respuesta = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password  })
        })
        if (respuesta.ok){
            window.location.href = "/registrar";
        } else {
            console.log("Error en validación")
        }
    } catch (error) {

    }
})