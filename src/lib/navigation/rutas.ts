type item = {
    nombre: string,
    icono?: string,
    ruta: string
    children?: item[]
}

const menu : item[]= [
    {
        nombre:'Inicio',
        ruta:'/home'
    },
    {
        nombre: 'Acerca de mi',
        ruta:'/home/about'
    }
]

export default menu