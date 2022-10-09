export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    logo: string;
    periodo: string;

    constructor(nombreE: string, descripcionE: string, logo: string, periodo: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.logo= logo;
        this.periodo = periodo;
    }
}
