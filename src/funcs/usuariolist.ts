import * as grpc from '@grpc/grpc-js';
import type { RequestVoid } from '../types/requests.ts';
import type { UsuarioResponse } from '../types/responses.ts';

const usuarios = [
  {
    nombre: "Juan",
    apellido: "García Pérez",
    direccion: "Calle Mayor 123, Madrid",
    email: "juan.garcia@email.com"
  },
  {
    nombre: "María",
    apellido: "López Martínez",
    direccion: "Av. Diagonal 456, Barcelona",
    email: "maria.lopez@email.com"
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez González",
    direccion: "Calle San Juan 789, Valencia",
    email: "carlos.rodriguez@email.com"
  },
  {
    nombre: "Ana",
    apellido: "Fernández Sánchez",
    direccion: "Plaza Mayor 234, Sevilla",
    email: "ana.fernandez@email.com"
  },
  {
    nombre: "David",
    apellido: "Martín Ruiz",
    direccion: "Calle Gran Vía 567, Bilbao",
    email: "david.martin@email.com"
  },
];

export const usuariolist = (
    call: grpc.ServerUnaryCall<RequestVoid, UsuarioResponse>,
    callback: grpc.sendUnaryData<UsuarioResponse>
) => {

    callback(null, {
      usuarios
    });
}