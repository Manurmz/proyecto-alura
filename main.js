const b_encriptar = document.getElementById("boton_encriptar");
const b_desencriptar = document.getElementById("boton_desencriptar");
const text_area = document.getElementById("text_area");



//boton encriptador
b_encriptar.addEventListener("click",()=>{
    let texto = "";   
    texto = encriptacion(text_area.value);
    insertar(texto);
    text_area.value = "";
})

//todo lo refenrente a enciptar
function encriptacion(texto){
    desglosado = [...texto];
    desglosado.forEach((letra,i) => {
        if(reglas[letra]){
            desglosado[i] = reglas[letra];
        }  
    });
    encriptado = desglosado.join("");
    return encriptado;
}

const reglas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat" 
}

//ya teniendo el texto encriptado se soloca en el HTML
const nueva_etiqueta = document.createElement('p');
const area_insertar = document.getElementsByClassName('lista_encriptados')[0];
const zona_click = document.getElementsByClassName('textos_encriptados')[0];

function insertar(texto_encriptado){
    nueva_etiqueta.textContent = texto_encriptado;
    nueva_etiqueta.classList.add('tarjeta');
    area_insertar.appendChild(nueva_etiqueta);

}

zona_click.addEventListener('click',async ()=>{
    if(nueva_etiqueta.textContent){
        await navigator.clipboard.writeText(nueva_etiqueta.textContent);
    }
});


//desencriptador
function desencriptar(texto_encriptado){
    let vocales = Object.keys(reglas);
    vocales.forEach(x=>{
        while(texto_encriptado.indexOf(reglas[x]) !== -1){
            texto_encriptado = texto_encriptado.replace(reglas[x],x);
            //console.log(texto_encriptado);
        }
    });
    //console.log(texto_encriptado);
    return texto_encriptado;
}

//boton desenvriptador
b_desencriptar.addEventListener('click',()=>{
    let texto = "";   
    texto = desencriptar(text_area.value);
    insertar(texto);
    text_area.value = "";
});


//background de la caja de textos encriptados

