const optionMode = document.querySelector("#option-mode")

const body = document.querySelector("body")
//se ac
optionMode.onchange = function (event){

    const {value} = event.target;
    console.log(value);
    //aca debemos validar si el value es igual a dark entonces
    //al body debem,os agregarle dara-mode=dark
    body.setAttribute("data-mode",value);
};
//la funcion matchMedia esta detecta el modo en que etsa tu dispositivo
if(
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme:dark)").matches

){
    //dark mode
    body.setAttribute("data-mode","dark");
}else{
    body.setAttribute("data-mode","light");
}
    