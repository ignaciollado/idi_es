import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-formacion-agenda-idi',
  templateUrl: './formacion-agenda-idi.component.html',
  styleUrls: ['./formacion-agenda-idi.component.css']
})

export class FormacionAgendaIdiComponent implements OnInit {
  currentLang: string = this.translateService.currentLang
  obj:HTMLElement

  constructor( public translateService: TranslateService ) { }

  ngOnInit(): void {
   // resizeIframe(document.getElementById("idiAgenda-CA"))
    }
  
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}