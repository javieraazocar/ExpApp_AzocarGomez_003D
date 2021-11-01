import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService, Users } from 'src/app/services/storage.service';


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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'inicio';
    console.log(this.loginUrl);
    console.log(this.storageService.obtenerUsuarios());
  }

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }

  signIn(){
    localStorage.setItem('authenticated','1');
    this.router.navigateByUrl(this.loginUrl);

  }
}
