
/**
 * Llamada a los elementos del DOM
 */

const infoUsuario = document.querySelector('#infoUsuario');



/**
 * Evento
 */

document.addEventListener("click", (ev) => {
    if (ev.target.matches('#btnDatos')) {
        getApi();
    }
})



/**
 * Función que simula la api
 * La promesa resuelta devuelve un objeto con los datos del usuario
 * @returns Devuelve una promesa
 */

const api = () => {
    let isOk = true;
    const usuario = {nombre: 'Pepe', email: 'pepe@gmail.com'};
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve(usuario);
            } else {
                reject('Error: No hay datos disponibles.')
            }
        }, 2000);
    })
    return (promise);
}


/**
 * Función que resuelve la promesa
 */

const getApi = () => {
    api()
        .then((resp) => {
            //drawList();
            console.log('resolve');
        })
        .catch((error) => {
            console.log(error);
        })
}


const drawList = () => {
    // pintar lista
 }