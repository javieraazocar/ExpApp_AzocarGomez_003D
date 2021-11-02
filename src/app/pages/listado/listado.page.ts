import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService, Users } from 'src/app/services/storage.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  usuarios : Users[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.obtenerUsuarios().then(
      (usuarios) => {
        this.usuarios = usuarios;
      }
    );
  }

}
