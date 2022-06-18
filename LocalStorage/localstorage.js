const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function(event){
    event.preventDefault();
 const inputs = document.querySelectorAll("input");
//vamos aguardar el correo y password en elocalstorage
// con setItem guardamos los valores en el local estorage

inputs.forEach((input)=>{
   localStorage.setItem(input.name ,input.value)});
};

//vamos a obtener datso desde el local storage

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    FormData.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");

if  (email 1== null && password !== null){
    //el ususario ya esta loquedo
    //voy a  ocultar el form(section)
}else{
    usuarioSection.style.display = "none";
}

btnCerrarSesion.onclick = function
}
