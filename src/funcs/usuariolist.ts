import * as grpc from '@grpc/grpc-js';
import type { RequestVoid } from '../types/requests.ts';
import type { UsuarioListResponse } from '../types/responses.ts';
import { UsuairoListaData } from '../data_fake/usuarios.ts';

export const usuariolist = (
    call: grpc.ServerUnaryCall<RequestVoid, UsuarioListResponse>,
    callback: grpc.sendUnaryData<UsuarioListResponse>
) => {

    callback(null, {
      usuarios: UsuairoListaData
    });
}