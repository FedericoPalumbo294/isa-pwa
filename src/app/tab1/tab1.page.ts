import { Component, OnInit, inject, signal } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonNote, IonSpinner,
} from '@ionic/angular';
import { Libro, LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNote, IonSpinner],
})
export class Tab1Page implements OnInit {
  private librosService = inject(LibrosService);

  libros = signal<Libro[]>([]);
  cargando = signal(true);
  error = signal('');

  ngOnInit() {
    this.librosService.getLibros().subscribe({
      next: (data) => {
        this.libros.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar la lista de libros.');
        this.cargando.set(false);
      },
    });
  }
}