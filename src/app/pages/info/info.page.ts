import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'document-text-outline',
      name: 'Información',
      redirecTo: '../info'
    },
    {
      icon: 'clipboard-outline',
      name: 'Formulario',
      redirecTo: '../page3'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
