import { Component, OnInit } from '@angular/core';
import { SaludService } from 'src/app/services/salud.service';
import { Results } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {

  ejercicio: Results[] = []

  constructor(private saludService: SaludService) { }

  ngOnInit() {
    this.saludService.getEjercicioInfo().subscribe(
      resp=>{
        console.log('ejercicio', resp);

        this.ejercicio.push(...resp.results);
      });
  }

}
