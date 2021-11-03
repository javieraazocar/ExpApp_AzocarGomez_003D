import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'document-text-outline',
      name: 'Información',
      redirecTo: '/info'
    },
    {
      icon: 'planet-outline',
      name: 'Listado de registros',
      redirecTo:'/listado'
    },
    {
      icon: 'barbell-outline',
      name: 'Ejercicios',
      redirecTo:'/salud'
    },
  ];
 
}
