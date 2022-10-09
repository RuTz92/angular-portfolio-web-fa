export class Experiencia {
    id?: number;
    nombreE: string;
    puesto:string;
    descripcionE: string;
    logo:string;
    periodo: string;

    constructor(nombreE: string,puesto: string, descripcionE: string, logo: string, periodo: string) {
        this.nombreE = nombreE;
        this.puesto = puesto;
        this.descripcionE = descripcionE;
        this.logo = logo;
        this.periodo = periodo;
    }
}
