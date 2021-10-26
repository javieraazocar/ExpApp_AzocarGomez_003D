import { Component, OnInit } from '@angular/core';
import { StorageService, User } from 'src/app/services/storage.service';
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

  usuarios: User[] = [];

  newUser: User = <User>{};

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
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
    // this.StorageService.crearUsuario(this.newUser).then(user => {
    //   this.newUser = <User>{};
    // });
  }
  
}
