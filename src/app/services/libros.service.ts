import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anio: number;
}

@Injectable({ providedIn: 'root' })
export class LibrosService {
  private http = inject(HttpClient);
  private url = 'https://www.mockachino.com/83256e5d-642a-4a/libros';

  getLibros(): Observable<Libro[]> {
    return this.http
      .get<{ libros: Libro[] }>(this.url)
      .pipe(map((respuesta) => respuesta.libros));
  }
}