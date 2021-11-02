import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


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
      icon: 'planet-outline',
      name: 'Listado de registros',
      redirecTo: '/listado'
    },

   ]

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  
  logout(){
    localStorage.setItem('authenticated', '0');
    this.router.navigateByUrl('/');
  }
}
