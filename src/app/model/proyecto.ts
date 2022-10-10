export class Proyecto {
    id?: number;
    proyecto?: string;
    descripcion?: string;
    fecha: string;
    img: string;

    constructor(proyecto:string, descripcion:string, fecha:string, img:string) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.img = img;
    }


}
