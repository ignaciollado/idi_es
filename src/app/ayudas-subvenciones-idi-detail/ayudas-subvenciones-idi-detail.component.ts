import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ayudas-subvenciones-idi-detail',
  templateUrl: './ayudas-subvenciones-idi-detail.component.html',
  styleUrls: ['./ayudas-subvenciones-idi-detail.component.css']
})
export class AyudasSubvencionesIdiDetailComponent implements OnInit {

  currentLang: string = this.translateService.currentLang;

  constructor( public translateService: TranslateService ) { }

  ngOnInit(): void {
  }

}
