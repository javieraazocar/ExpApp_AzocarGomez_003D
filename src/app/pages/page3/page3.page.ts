import { Component, OnInit } from '@angular/core';
import { StorageService, Users } from 'src/app/services/storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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


  loginUrl = '';

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

  usuarios : Users[] = [];

  constructor(private storageService: StorageService,  private router: Router, private toastController: ToastController) { }

  ngOnInit() {  
  }

  onSubmit(){
    // se toman los datos del formulario y se llevan a las variables para subirlo a la bd
    this.newUser.id = Date.now();
    this.newUser.nombre = this.usuario.nombre;
    this.newUser.apellido = this.usuario.apellido;
    this.newUser.metapasos = this.usuario.metapasos;
    this.newUser.email = this.usuario.email;
    this.newUser.password = this.usuario.password;
    this.newUser.fechanacimiento = this.usuario.fechanacimiento;
    this.newUser.modified = Date.now();
  
    this.storageService.obtenerUsuarios().then(
      (usuarios) => {
        this.usuarios = usuarios;
      // se busca email para evitar repetir correo electrónico
      let valida = this.usuarios.find(usuario => usuario.email === this.usuario.email);
    
      if(valida){
        //mensaje de error en caso de correo electrónico ya existente
        const toast = this.toastController.create({
          position: 'top',
          color: 'light',
          duration: 4000,
          message: 'El correo electrónico que ha ingresado, ya está registrado. Inténtelo nuevamente.',
        });
        toast.then(toast => toast.present());
      }
      else{
        // se suben los datos a la base de datos
        this.storageService.crearUsuario(this.newUser);

        console.log(this.newUser);


        // se cambia el estado de authenticated a verdadero
        localStorage.setItem('authenticated','1');
        // se redirige a la página de inicio
        this.router.navigate(['/inicio']);

        // se muestra un mensaje de bienvenida
        const toast = this.toastController.create({
          position: 'top',
          color: 'light',
          duration: 4000,
          message: '¡Bienvenido ' + this.newUser.nombre + '!',
        });
        toast.then(toast => toast.present());
      }

    

  }
  
  );
}
}