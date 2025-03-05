import { Vehiculo } from "./vehiculo"

export class Coche extends Vehiculo {
    private _numPuertas : number;
    constructor(matricula : string, marca : string, modelo : string, cilindrada: number, potencia : number, numPuertas: number) {
        super(matricula, marca, modelo, cilindrada, potencia);
        this._numPuertas = numPuertas;
    }
    set numPuertas(numPuertas : number) {
        this._numPuertas = numPuertas;
    }
    /**
     * 
     * @returns El número de puertas
     */
    get numPuertas() {
        return this._numPuertas;
    }
    
    /**
     * 
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y el número de puertas del coche en ese orden 
     */
    getData() {
        return super.matricula + " " + super.marca + " " + super.modelo + " " + super.cilindrada + " " + super.potencia + " " + this._numPuertas;
    }
}