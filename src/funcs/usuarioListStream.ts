import * as grpc from '@grpc/grpc-js';
import type { RequestVoid } from '../types/requests.ts';
import { UsuairoListaData } from '../data_fake/usuarios.ts';
import type { UsuarioResponse } from '../types/responses.ts';

export const usuarioListStream = async (
    call: grpc.ServerWritableStream<RequestVoid, UsuarioResponse>
) => {

    for (let usuario of UsuairoListaData){
        if (call.cancelled) break;
        await new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);   
            }, 2000);
        });
        call.write(usuario);
    }
    call.end();
}