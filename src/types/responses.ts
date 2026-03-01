export interface ServerStatusResponse {
    act: boolean;
    message: string;
}

export interface UsuarioResponse {
    usuarios: {
        nombre: string;
        apellido: string;
        direccion: string;
        email: string;
    }[];
}