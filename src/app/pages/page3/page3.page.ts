import { Component, OnInit } from '@angular/core';
import { StorageService, Users } from 'src/app/services/storage.service';
import {Platform} from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {


  newUser: Users = <Users>{};

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
  usuario = {
    id: '',
    nombre: '',
    apellido: '',
    metapasos: 0,
    email:'',
    password:'',
    fechanacimiento: 0,
    modified: ''
  }

  constructor(private StorageService: StorageService) { }

  ngOnInit() {  
  }

  onSubmit(){
    this.newUser.id = Date.now();
    this.newUser.nombre = this.usuario.nombre;
    this.newUser.apellido = this.usuario.apellido;
    this.newUser.metapasos = this.usuario.metapasos;
    this.newUser.email = this.usuario.email;
    this.newUser.password = this.usuario.password;
    this.newUser.fechanacimiento = this.usuario.fechanacimiento;
    this.newUser.modified = Date.now();

  }
  
}
