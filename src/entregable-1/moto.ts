import { Vehiculo } from "./vehiculo"

export class Moto extends Vehiculo {
    private _centimetrosCubicos : number;
    constructor(matricula : string, marca : string, modelo : string, cilindrada: number, potencia : number, centimetrosCubicos: number) {
        super(matricula, marca, modelo, cilindrada, potencia);
        this._centimetrosCubicos = centimetrosCubicos;
    }
    set centimetrosCubicos(centimetrosCubicos : number) {
        this._centimetrosCubicos = centimetrosCubicos;
    }
    /**
     * 
     * @returns El número de centimetros cúbicos
     */
    get centimetrosCubicos() {
        return this._centimetrosCubicos;
    }
    
    /**
     * 
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y los centimetros cúbicos de la moto en ese orden 
     */
    getData(): string {
        return super.matricula + " " + super.marca + " " + super.modelo + " " + super.cilindrada + " " + super.potencia + " " + this._centimetrosCubicos;
    }
}