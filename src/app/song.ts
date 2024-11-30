export interface ApiResponse {
    message: string;
    data: Song[];
}


export interface Song{
    id: number;
    nombre: string;
    album: string;
    autor: string;
}
  