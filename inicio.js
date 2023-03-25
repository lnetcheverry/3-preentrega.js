//CREAMOS UN INICIO DE SESIÓN 

const botonUno = document.getElementById("botonUno"); 

const usuarioAutorizado = "Piu";
const passwordAutorizado = "1234";


botonUno.addEventListener("click", ()=> {
    Swal.fire({
        title: "Iniciar Sesión",
        html: `<input type="text" id="usuario" class="swal2-input" placeholder="Usuario">
        <input type="text" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            //Si quiero enviarte a otra página: 
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                window.location.href = "/carrito.html";
            }
        }
    })
})

