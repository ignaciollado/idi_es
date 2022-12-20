import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-agenda-idi',
  templateUrl: './agenda-idi.component.html',
  styleUrls: ['./agenda-idi.component.css']
})
export class AgendaIdiComponent implements OnInit {
  currentLang: string = this.translateService.currentLang

  constructor( public translateService: TranslateService ) { 

/*     switch ( this.translateService.currentLang ) {
      case 'ca':
        this.currentLang = 'ca-ES'
      break
      case 'es':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
    } */
  
  }

  ngOnInit(): void {
  }


}
