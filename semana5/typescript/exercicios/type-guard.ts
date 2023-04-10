export interface GuestUser {
    type: 'guest';
    name: string;
}

export interface AuthenticatedUser {
    type: 'user';
    id: string;
    name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Crie uma função de type-guard que sirva para afunilar o tipo específico de User

export function ehUsuarioPublico(user: User): user is GuestUser {
    return user.type === "guest";
}

export function ehUsuarioAutenticado(user: User): user is AuthenticatedUser {
    return user.type === "user";
}

function testGuard(user: User) {
    if(ehUsuarioPublico(user)) {

    } else {
        
    }
}
