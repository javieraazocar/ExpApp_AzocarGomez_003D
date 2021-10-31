import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('authenticated', '0');
    this.router.navigateByUrl('/');
  }
}
