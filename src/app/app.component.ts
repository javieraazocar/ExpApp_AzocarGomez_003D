import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
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
      redirectTo: '/info'
    },
    {
      icon: 'clipboard-outline',
      name: 'Formulario',
      redirectTo:'/page3'
    },
  ];
 
}
