import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Article, reqArticle } from '../model/article.model';
import { reqCategory } from '../model/category.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-reempresa-idi',
  templateUrl: './reempresa-idi.component.html',
  styleUrls: ['./reempresa-idi.component.css']
})
export class ReempresaIdiComponent implements OnInit {

  public id:number = +this.route.snapshot.paramMap.get('id')
  public col:number = +this.route.snapshot.paramMap.get('col')
  
  public cabecera: string 

  public contenidos: reqArticle[]

  public contenidos_pictos: reqArticle[]
  public contenidos_txt: reqArticle[]
  public contenidos_otrosSrv: reqArticle[]

  public categorias: reqCategory[]

  public childCat: string[] = []

  public childCat_pictos: string[] = []
  public childCat_txt: string[] = []
  public childCat_otrosSrv: string[] = []
  currentLang: string;
  subPath: string = '';
  subCategoryPICTOS: number;
  subCategoryTXT: number;
  subCategorySRV: number;

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

    switch(this.col) {
      case 1:
        this.cabecera = `${this.subPath}reempresa_cedentes.webp`
        break;
      case 2:
        this.cabecera = `${this.subPath}reempresa_idi.webp`
        break;        
    }

    this.categoryService.getCategories()
    .subscribe( resp => {

      this.categorias = resp.data
     
      this.categorias = this.categorias.filter ( resp => resp.attributes.alias.includes(`reempresa-hlp-col-${this.col}-`) )

      this.categorias.map ( item => {
       
        if ( item.attributes.title.substring(item.attributes.title.length-6,item.attributes.title.length)==='pictos' ) {
          this.childCat_pictos.push(item.attributes.id.toString())
        }

        if ( item.attributes.title.substring(item.attributes.title.length-3,item.attributes.title.length)==='srv' ) {
          this.childCat_otrosSrv.push(item.attributes.id.toString())
        }
        if ( item.attributes.title.substring(item.attributes.title.length-3,item.attributes.title.length)==='txt' ) {
          this.childCat_txt.push(item.attributes.id.toString())
        }
     
      })
      console.log ( this.categorias, this.childCat_pictos, this.childCat_txt, this.childCat_otrosSrv )
      this.getContents(this.currentLang, this.childCat_pictos, this.childCat_txt, this.childCat_otrosSrv )

    })  

  }

  getContents(currentLanguage:string, childCat_pictos: string[], childCat_txt: string[], childCat_otrosSrv: string[] ) { 

    this.articleService.getArticles()
    .subscribe( (resp:Article) => {
      
      this.contenidos = resp.data
      this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.state === 1 )
      this.contenidos = this.contenidos.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}` )

      this.contenidos_pictos = this.contenidos.filter( (item : reqArticle) => childCat_pictos.includes( item.relationships.category.data.id ) )
      this.contenidos_txt = this.contenidos.filter( (item : reqArticle) => childCat_txt.includes( item.relationships.category.data.id ) )
      this.contenidos_otrosSrv = this.contenidos.filter( (item : reqArticle) => childCat_otrosSrv.includes( item.relationships.category.data.id ) )

    } )

  }

}
