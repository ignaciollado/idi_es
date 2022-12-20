import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Article, reqArticle } from '../model/article.model';
import { reqCategory } from '../model/category.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sectores-idi',
  templateUrl: './sectores-idi.component.html',
  styleUrls: ['./sectores-idi.component.css']
})
export class SectoresIdiComponent implements OnInit {

  public id:number = +this.route.snapshot.paramMap.get('id')
  public cabecera: string 

  public contenidos: reqArticle[]

  public contenidos_pictos: reqArticle[]
  public contenidos_hlp: reqArticle[]
  
  public contenidos_otrosSrv: reqArticle[]

  public categorias: reqCategory[]
  public childCat: string[] = []

  public childCat_pictos: string[] = []
  public childCat_hlp: string[] = []
  public childCat_otrosSrv: string[] = []
  currentLang: string;
  subPath: string = '';
    
  constructor( public translateService: TranslateService, private articleService: ArticleService, private categoryService: CategoryService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    switch (this.translateService.currentLang) {
      case 'ca':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      case 'es':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
    }

    switch(this.id) {
      case 79:
        this.cabecera = `${this.subPath}habitat_idi.webp`
        break;
      case 80:
        this.cabecera = `${this.subPath}agroalimentario_idi.webp`
        break;
      case 75:
        this.cabecera = `${this.subPath}comercio_idi.webp`
        break;  
      case 76:
        this.cabecera = `${this.subPath}moda_idi.webp`
        break;
      case 77:
        this.cabecera = `${this.subPath}industria_idi.webp`
        break;
      case 78:
        this.cabecera = `${this.subPath}nautico_idi.webp`
        break;
      case 310:
      case 312:
        this.cabecera = `${this.subPath}reempresa_idi.webp`
        break;        
    }

    this.categoryService.getCategories()
      .subscribe( resp => {

        this.categorias = resp.data
        this.categorias = this.categorias.filter( resp => resp.attributes.published === 1 )
        this.categorias = this.categorias.filter( resp => resp.attributes.parent_id === this.id )
        this.categorias.map ( item => {
         
          if ( item.attributes.title.substring(item.attributes.title.length-6,item.attributes.title.length)==='pictos' ) {
            this.childCat_pictos.push(item.attributes.id.toString())
          }

          if ( item.attributes.title.substring(item.attributes.title.length-3,item.attributes.title.length)==='srv' ) {
            this.childCat_otrosSrv.push(item.attributes.id.toString())
          }

          if ( item.attributes.title.substring(item.attributes.title.length-3,item.attributes.title.length)==='hlp' ) {
            this.childCat_hlp.push(item.attributes.id.toString())
          }
       
        })
        this.getContents(this.currentLang, this.childCat_pictos, this.childCat_hlp, this.childCat_otrosSrv )

      })
  
  }

  getContents(currentLanguage:string, childCat_pictos: string[], childCat_hlp: string[], childCat_otrosSrv: string[] ) { 

    this.articleService.getArticles()
    .subscribe( (resp:Article) => {
      
      this.contenidos = resp.data
      this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.state === 1 )
      this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}` )

      this.contenidos_pictos = this.contenidos.filter( (item : reqArticle) => childCat_pictos.includes( item.relationships.category.data.id ) )
      this.contenidos_hlp = this.contenidos.filter( (item : reqArticle) => childCat_hlp.includes( item.relationships.category.data.id ) )
      this.contenidos_otrosSrv = this.contenidos.filter( (item : reqArticle) => childCat_otrosSrv.includes( item.relationships.category.data.id ) )
    
    } )

  }

}
