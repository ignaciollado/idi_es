import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { reqCategory } from '../model/category.model';
import { attrOneArticle, OneArticle } from '../model/oneArticle.model';
import { OneCategory } from '../model/oneCategory.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-service-idi-detail',
  templateUrl: './service-idi-detail.component.html',
  styleUrls: ['./service-idi-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServiceIdiDetailComponent implements OnInit {

  public cabecera:string =""
  public unaNoticia: OneArticle
  public unaNoticiaAttribute: attrOneArticle
  
  public contenidos: reqArticle[]
  public contenidos_txt: reqArticle[]
  public contenidos_hlp: reqArticle[]

  public parentCat: number
  public asociatedCategories: reqCategory[]
  public asociatedIdCategories: number[] = []
  currentLang: string;
  subPath: string = '';


  constructor( public translateService: TranslateService, private getNoticia: ArticleService, private getCategory: CategoryService, 
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id:string = this.route.snapshot.paramMap.get('id')
    let idCat:string = this.route.snapshot.paramMap.get('idCat')

    switch (this.translateService.currentLang) {
      case 'cat':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      case 'cas':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
    }

    switch(idCat) {
      case "258":
        this.cabecera = `${this.subPath}creacion_empresa_idi.webp`
        break;
      case "259":
        this.cabecera = `${this.subPath}internacionalizacion_idi.webp`
        break;  
      case "260":
        this.cabecera = `${this.subPath}digitalizacion_idi.webp`
        break;
      case "347":
        this.cabecera = `${this.subPath}registrodemarca_idi.webp`
        break;
      case "262":
          this.cabecera = `${this.subPath}vivero_empresas_idi.webp`
        break;  
      case "265":
        this.cabecera = `${this.subPath}ayudas_y_subvenciones.webp`
        break;        
    }

    this.getContenido(id, this.currentLang)
 
  }

  getContenido (id:string, currentLanguage: string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {

        this.unaNoticia = resp
        if ( this.unaNoticia.data.attributes.urls.urla === '/AYUDAS' || this.unaNoticia.data.attributes.urls.urla === '/AJUDES' || this.unaNoticia.data.attributes.urls.urla === '/idi.es/index.php/ayud_subv') {
          this.router.navigateByUrl ('ayudas-subvenciones', { skipLocationChange: true })
          return
        } 
        let catID: string = this.unaNoticia.data.relationships.category.data.id
        this.getCategory.getCategory(catID).subscribe( (resp: OneCategory) => 
          {

            this.parentCat = resp.data.attributes.parent_id
            this.getCategories( currentLanguage, this.parentCat )
          
          })
          
      })
  
    }
  
  getCategories(currentLanguage:string, parentCat:number) {

   this.getCategory.getCategories()
      .subscribe(
         item => {
          
          this.asociatedCategories=item.data.filter( item => (item.attributes.parent_id===parentCat) && (item.attributes.title.includes('txt') || item.attributes.title.includes('hlp')) )
          this.asociatedCategories.map( item => {this.asociatedIdCategories.push(item.attributes.id)} )
          this.getNoticia.getArticles().subscribe( (resp: Article) =>
          { 
           this.contenidos = resp.data
           this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.state === 1 )
           this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}` )
           this.contenidos_txt = this.contenidos.filter( (item : reqArticle) => item.relationships.category.data.id === this.asociatedIdCategories[0].toString() ) 
           this.contenidos_hlp = this.contenidos.filter( (item : reqArticle) => item.relationships.category.data.id === this.asociatedIdCategories[1].toString() )
          } )

         })

  }
}
