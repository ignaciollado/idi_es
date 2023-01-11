
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Article, attrArticle, reqArticle } from '../model/article.model';
import { attrCategory, reqCategory } from '../model/category.model';

import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-services-idi',
  templateUrl: './services-idi.component.html',
  styleUrls: ['./services-idi.component.css']
})
export class ServicesIdiComponent implements OnInit {

  public categoriesSRV: reqCategory[]
  public categoriesSRVAttributes: attrCategory

  public idiServices: reqArticle[]
  public idiServicesAttributes: attrArticle
  public id_IDIServices: string[] /* Los id de las categorías que son 'los servicios IDI' a mostrar */
  currentLang: string;
  constructor( public translateService: TranslateService, private contentService: ArticleService, private categoryService: CategoryService, private messageService: MessageService ) { }

  ngOnInit(): void {
    
    this.messageService.add("Cargando servicios destacados del IDI...")
    
    switch (this.translateService.currentLang) {
      case 'cat':
        this.currentLang = 'ca-ES'
      break
      case 'cas':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
    }

    this.getServices(this.currentLang, 'featured') /* Selecciona todas las categorías cuyo 'alias' acaba con la cadena 'featured' */

  }

  getServices(currentLanguage:string, currentExtension: string) {
    this.categoryService.getCategories()
        .subscribe( (item:any) => {
  
          this.categoriesSRV = item.data
          this.categoriesSRV = this.categoriesSRV.filter( (item: reqCategory) => item.attributes.language === "*")
          this.categoriesSRV = this.categoriesSRV.filter( (item: reqCategory) => item.attributes.published === 1)
          this.categoriesSRV = this.categoriesSRV.filter( (item: reqCategory) => item.attributes.alias.endsWith(currentExtension))
          this.id_IDIServices = this.categoriesSRV.map( (item: reqCategory) => item.id)

        },
        () => {
          console.log('... something whent wrong!');
      },
      
      () => {

        this.contentService.getArticles()
          .subscribe( (resp:Article) => {

            this.idiServices = resp.data
            this.idiServices = this.idiServices.filter ( (item: reqArticle) => item.attributes.state === 1 )
            this.idiServices = this.idiServices.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`)
            this.idiServices = this.idiServices.filter( (item : reqArticle) => ( this.id_IDIServices.includes ( item.relationships.category.data.id ) ) ) 

          })

      })
  }
}