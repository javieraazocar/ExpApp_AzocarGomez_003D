import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService, Users } from 'src/app/services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  loginUrl = '';

  usuario = {
    email: '',
    password: ''
  }

  usuarios : Users[] = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storageService: StorageService, private toastController: ToastController) { }

  ngOnInit() {
    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'inicio';
    console.log(this.loginUrl);
  }

  onSubmit() {
    console.log('submit');
  }

  signIn(){
    this.storageService.obtenerUsuarios().then(
      (usuarios) => {
        this.usuarios = usuarios;
        // se busca email y password
        let valida = this.usuarios.find(usuario => usuario.email === this.usuario.email && usuario.password === this.usuario.password);
        

        // if para verificar si la variable valida encontró usuario y contraseña
        if(valida){
          //se cambia el estado de la autenticación a verdadera
          localStorage.setItem('authenticated','1');
          //se redirecciona a la página inicio
          this.router.navigate(['/inicio']);
          //se crea el mensajito de bienvenida
          const toast = this.toastController.create({
            position: 'top',
            color: 'light',
            duration: 4000,
            message: '¡Bienvenido ' + valida.nombre + '!',
          });
          toast.then(toast => toast.present());
        }
        else{
          const toast = this.toastController.create({
            color: 'light',
            duration: 4000,
            message: 'Ha ingresado un dato incorrecto, inténtelo nuevamente.',
          });
          toast.then(toast => toast.present());
          console.log('Login incorrecto.');
        
        }
      }
    );


    

  }
}
