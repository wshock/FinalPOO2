document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const cedula = document.getElementById("cedula").value;

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
        const respuesta = await fetch("http://localhost:3000/salchipaPa", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cedula })
        })
        if (respuesta.ok){
            window.location.href = "/salchipaPa";
        } else {
            console.log("Error en registro")
        }
    } catch (error) {

    }
})