import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes : Componente[] = [
    {
      icon: 'document-text-outline',
      name: 'Información',
      redirecTo: '/info'
    },
    {
      icon: 'clipboard-outline',
      name: 'Formulario',
      redirecTo: '/page3'
    },
  
   ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  
  
}
