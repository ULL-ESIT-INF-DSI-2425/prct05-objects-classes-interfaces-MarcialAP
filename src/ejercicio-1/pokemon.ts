export class Pokemon {
    private _nombre : string;
    private _peso : number;
    private _altura : number;
    private _tipo : string;

    constructor(nombre : string, peso : number, altura : number, tipo : string) {
        this._nombre = nombre;
        this._peso = peso;
        this._altura = altura;
        this._tipo = tipo;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre : string) {
        this._nombre = nombre;
    }

    get peso() {
        return this._peso;
    }
    set peso(peso : number) {
        this._peso = peso;
    }

    get altura() {
        return this._altura;
    }
    set altura(altura : number) {
        this._altura = altura;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(tipo : string) {
        this._tipo = tipo;
    }
}
