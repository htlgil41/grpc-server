import * as grpc from '@grpc/grpc-js';
import type { RequestUsuarioByEmail } from '../types/requests.ts';
import type { UsuarioResponse } from '../types/responses.ts';

export const usuarioStream = async (
    call: grpc.ServerDuplexStream<RequestUsuarioByEmail, UsuarioResponse>
) => {

    call.on('data', async (d: RequestUsuarioByEmail) =>{
        call.write({
            nombre: '',
            apellido: '',
            direccion: '',
            email: d.email,
        });
    });
    
    call.on('end', async () =>{
        
        console.log("End");
        call.write({
            nombre: '',
            apellido: '',
            direccion: '',
            email: 'Dato end',
        });

        call.end();
    });
}