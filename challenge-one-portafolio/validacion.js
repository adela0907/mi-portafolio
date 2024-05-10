const campoDeFormulario= document.querySelectorAll("[required]");
const error = document.querySelector('#error')


function copyText() {
    const inputText = document.getElementById("myInput");

    inputText.select();
    inputText.setSelectionRange(0,99999);
    
    navigator.clipboard.writeText(inputText.value)
}

//recorremos los campos con forEach que recibe una funcion flecha por parametro 
campoDeFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificarCampo(campo))
})
function mensajeError() { 
    console.log("Error.");
    error.textContent = "Complete todos los campos"
 } 
function verificarCampo(campo){
    if(campo.name=== campo.value.length <= 2){
        campo.style.borderColor = "red";
        mensajeError()
    }
    else{
        error.remove('mensajeError')
    };

  
    console.log("verifica", campo.name);

}


