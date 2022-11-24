console.log('hola mundo')

const addMinutes = (numMinutes) =>  new Date(new Date().getTime() + 1000 * 60 * numMinutes)
const miNombre = 'Jesús'
const miApellido = 'Guerreiro'
const yoMismo = {
    nombre: miNombre,
    apellido: miApellido,
}

//sessionStorage.setItem('yoMismo',JSON.stringify(yoMismo))
//localStorage.setItem('yoMismo', JSON.stringify(yoMismo))
//document.cookie = `yoMismo=${JSON.stringify(yoMismo)};expires=${addMinutes(2).toUTCString()}`
