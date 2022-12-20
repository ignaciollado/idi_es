import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-transparency-detail',
  templateUrl: './transparency-detail.component.html',
  styleUrls: ['./transparency-detail.component.css']
})
export class TransparencyDetailComponent implements OnInit {

  public detalleTransparencia: OneArticle
  public detalleTransparenciaAttribute: attrOneArticle
  public currentLang: string = '';
  public subPath: string = '';
  public cabecera: string = ''

  constructor( public translateService: TranslateService, private getNoticia: ArticleService, private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')
    this.getdetalleTransparencia(id)

    switch (this.translateService.currentLang) {
      case 'ca':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      case 'es':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      default:
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
    }

    this.cabecera = `${this.subPath}transparencia_idi.webp`
    this.cabecera = `../../assets/images/cabeceras/${this.cabecera}` 

  }

  getdetalleTransparencia (id:string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.detalleTransparenciaAttribute = resp.data.attributes
      })
  
    }

}
