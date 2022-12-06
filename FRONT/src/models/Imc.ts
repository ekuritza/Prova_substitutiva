import { Usuario } from "./Usuario";

export interface Imc{
    imcId?: number;
    altura: number;
    peso: number;
    usuarioId: number;
    usuario?: Usuario;
}