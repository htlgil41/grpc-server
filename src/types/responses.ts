export interface ServerStatusResponse {
    act: boolean;
    message: string;
}

export interface UsuarioListResponse {
    usuarios: UsuarioResponse[];
}

export interface UsuarioResponse {
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
}