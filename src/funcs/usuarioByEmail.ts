import * as grpc from '@grpc/grpc-js';
import type { RequestUsuarioByEmail, RequestVoid } from '../types/requests.ts';
import type { UsuarioResponse } from '../types/responses.ts';
import { UsuairoListaData } from '../data_fake/usuarios.ts';

export const usuarioByEmail = (
    call: grpc.ServerUnaryCall<RequestUsuarioByEmail, UsuarioResponse>,
    callback: grpc.sendUnaryData<UsuarioResponse>
) => {

    const emailBySearch = call.request.email;
    if (!emailBySearch){

        callback(
            new Error('No hay parametros de busqueda'),
            null,
        );
        return;
    }

    const data = UsuairoListaData;
    const usuarioByEmail = data.find(u => u.email === emailBySearch);
    if (!usuarioByEmail){

        callback(
            new Error('No se ha encontrado el usuario por correo'),
            null
        );
        return;
    }

    callback(
        null,
        usuarioByEmail
    );
}