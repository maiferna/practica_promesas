
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
    const user = { name: 'Pepe', email: 'pepe@gmail.com' };
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isOk) {
                resolve(user);
            } else {
                reject('Error: No hay datos disponibles.')
            }
        }, 2000);
    })
    return (promise);
}


/**
 * Función que resuelve la promesa
 * .then() gestiona el resolve
 * .catch() gestiona el reject
 */

const getApi = () => {
    api()
        .then((resp) => {
            drawList(resp);
        })
        .catch((error) => {
            console.log(error);
        })
}


/**
 * Función para pintar la lista
 * @param {Object} user Objeto que devuelve el resolve
 */

const drawList = (user) => {
    infoUsuario.innerHTML = '';
    const listContainer = document.createElement("DIV");
    const listBox = document.createElement("UL");
    const listName = document.createElement("LI");
    listName.textContent = `Nombre: ${user.name}`;
    const listEmail = document.createElement("LI");
    listEmail.textContent = `Email: ${user.email}`;

    listBox.append(listName, listEmail);
    listContainer.append(listBox);
    infoUsuario.append(listContainer);
}