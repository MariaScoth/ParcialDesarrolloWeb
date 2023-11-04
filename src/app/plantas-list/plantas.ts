export class Plantas {
    
    nombre_comun: string;
    tipo: string;
    clima: string;
    id : number;

    public constructor(nombre_Comun: string, tipo: string, clima: string,id : number ){
        this.nombre_comun=nombre_Comun;
        this.tipo=tipo;
        this.clima=clima; 
        this.id = id;

    }
}
