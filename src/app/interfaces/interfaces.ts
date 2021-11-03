export interface RespuestaEjercicios {
    count: number;
    next: string;
    previous: string;
    results: Results[];
}

export interface Results {
    id: number;
    uuid: string;
    exercise_base: number;
    image: string;
    status: number;
    style: number;
    
}

