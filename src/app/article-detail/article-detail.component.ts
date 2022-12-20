import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  public unArticuloAttribute: attrOneArticle
  currentLang: string
  subPath: string = ''
  public cabecera: string = ''

  constructor( public translateService: TranslateService, private getArticulo: ArticleService, private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) {  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')
    let idCat = this.route.snapshot.paramMap.get('idCat')

console.log ( id, idCat )

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

    switch(idCat) {
      case "66":
        this.cabecera = `${this.subPath}creacion_empresa_idi.webp`
        break;
      case "310":
      case "312":
        this.cabecera = `${this.subPath}reempresa_idi.webp`
        break;
      case "288":  
      case "290":
        this.cabecera = `${this.subPath}diseno_idi.webp`
        break;  
      case "52":
        this.cabecera = `${this.subPath}registrodemarca_idi.webp`
        break;
      case "68":
      case "87":
        this.cabecera = `${this.subPath}vivero_empresas_idi.webp`
        break;
      case "45":
      case "49":
        this.cabecera = `${this.subPath}internacionalizacion_idi.webp`
        break;
      case "174":
      case "178":  
        this.cabecera = `${this.subPath}digitalizacion_idi.webp`
        break;
      case "70":
      case "91":
        this.cabecera = `${this.subPath}ferias_idi.webp`
        break;
      case "109":
        this.cabecera = `${this.subPath}habitat_idi.webp`
        break;        
      case "271":
        this.cabecera = `${this.subPath}moda_idi.webp`
        break;
      case "273":
        this.cabecera = `${this.subPath}comercio_idi.webp`
        break;               
      case "275":
        this.cabecera = `${this.subPath}nautico_idi.webp`
        break;
      case "279":
      case "111":
        this.cabecera = `${this.subPath}agroalimentario_idi.webp`
        break;        
      case "72":
      case "95":
        this.cabecera = `${this.subPath}sostenibilidad_idi.webp`
        break;
      case "73":
      case "97":
        this.cabecera = `${this.subPath}financiacion_idi.webp`
        break;
      case "74":
      case "99":
        this.cabecera = `${this.subPath}clusters_idi.webp`
      break;                       
  }
  
  this.cabecera = `../../assets/images/cabeceras/${this.cabecera}` 
    this.getUnaNotica(id)
  }

  getUnaNotica (id:string) {

    this.getArticulo.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.unArticuloAttribute = resp.data.attributes
        /* Comprobar si hay una cabecera 'custom' en el campo 'cabecera' */
        if (this.unArticuloAttribute.cabecera && this.unArticuloAttribute.cabecera !== '{"imagefile":"","alt_text":""}') {
          console.log (this.unArticuloAttribute.cabecera)
          this.cabecera = this.unArticuloAttribute.cabecera
          if (this.cabecera.includes("imagefile")) {
            this.cabecera = Object.values(JSON.parse(this.cabecera))[0].toString() 
          }
          this.cabecera = `https://contents.idi.es/${ this.cabecera}`
        }
      })
  
    }

}
