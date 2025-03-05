export abstract class Vehiculo {
    private _matricula : string;
    private _marca : string;
    private _modelo : string;
    private _cilindrada : number;
    private _potencia : number;
    
    constructor(matricula : string, marca : string, modelo : string, cilindrada : number, potencia : number) {
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
        this._cilindrada = cilindrada;
        this._potencia = potencia;
    }

    set matricula(matricula : string) {
        this._matricula = matricula;
    }
    /**
     * 
     * @returns La matrícula del vehículo
     */
    get matricula() {
        return this._matricula;
    }

    set marca(marca : string) {
        this._marca = marca;
    }
    /**
     * 
     * @returns La marca del vehículo
     */
    get marca() {
        return this._marca;
    }

    set modelo(modelo : string) {
        this._modelo = modelo;
    }
    /**
     * 
     * @returns El modelo del vehículo
     */
    get modelo() {
        return this._modelo;
    }

    set cilindrada(cilindrada : number) {
        this._cilindrada = cilindrada;
    }
    /**
     * 
     * @returns La cilindrada del vehículo
     */
    get cilindrada() {
        return this._cilindrada;
    }

    set potencia(potencia : number) {
        this._potencia = potencia;
    }
    /**
     * 
     * @returns La potencia del vehículo
     */
    get potencia() {
        return this._potencia;
    }
    abstract getData() : string;
}