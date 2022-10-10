export class Persona{
    id?:number;
    nombre:string;
    apellido:string;
    img:string;
    titulo1:string;
    titulo2:string;
    descripcion:string;

    constructor(nombre: string, apellido: string, img: string, titulo1: string, titulo2: string, descripcion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo1= titulo1;
        this.titulo2= titulo2;
        this.descripcion = descripcion;
    }
}