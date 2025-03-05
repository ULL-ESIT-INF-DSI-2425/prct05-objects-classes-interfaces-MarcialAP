import { Coche } from "./coche";
import { Moto } from "./moto";

type coche_hora = {coche: Coche, fecha: number, hora: number};
type moto_hora = {moto: Moto, fecha: number, hora: number};

export class Parking {
    private _plazasCoche : number;
    private _plazasMoto : number;
    private _cochesAparcados : coche_hora[];
    private _motosAparcadas : moto_hora[];
    
    constructor (plazasCoche : number, plazasMoto: number) {
        this._plazasCoche = plazasCoche;
        this._plazasMoto = plazasMoto;
    }

    listadoCoches() : Coche [] {
        let resultado : Coche[] = [ ];
        this._cochesAparcados.forEach(coche => {
            resultado.push(coche.coche);
        })
        return resultado;
    }
    listadoMotos() : Moto[] {
        let resultado : Moto[] = [ ];
        this._motosAparcadas.forEach(moto => {
            resultado.push(moto.moto);
        })
        return resultado;
    }
    insertarCoche(Coche, fecha, hora) {
        if (this._plazasCoche - 1 > this._cochesAparcados.length) {
            this._cochesAparcados.push(Coche, fecha, hora)
        }
    }
    insertarMoto(Moto, fecha, hora) {
        if (this._plazasMoto - 1 > this._motosAparcadas.length) {
            this._motosAparcadas.push(Moto, fecha, hora)
        }
    }
}