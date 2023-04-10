// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos

export type registrarUsuario = {
    name: string;
    email: string;
    registered: true;
}

export type usuarioPublico = {
    name: string;
    registered: false;
}

export type Usuario = registrarUsuario  | usuarioPublico;

function test(usuario: Usuario) {
    if(usuario.registered) {
        usuario.email
    } else {
        usuario
    }
}