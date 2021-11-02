import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService, Users } from 'src/app/services/storage.service';

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
  
  usuarios : Users[] = [];

  usuario = {
    email: '',
    password: '',
  }

  constructor(private menuController: MenuController, private router: Router, private storageService: StorageService) { }

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
