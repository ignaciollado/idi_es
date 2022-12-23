import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Article, attrArticle, reqArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';

@Component({
  selector: 'app-who-we-are-idi-child',
  templateUrl: './who-we-are-idi-child.component.html',
  styleUrls: ['./who-we-are-idi-child.component.css']
})
export class WhoWeAreIdiChildComponent implements OnInit {

  @Input() childCategory:string; // decorate the property with @Input() with the 'idi-qui-som' child categories

  public childChildCategory: reqCategory[]
  public childChildCatMatrixHomeIDI: string[] = [] /* ID de Categorías nietas de ''idi-qui-som' */

  public articulos: reqArticle[] /* Contenidos  */
  public categorias: reqCategory[]

  public ArticulosAttributes: attrArticle
  public currentLang: string

  constructor( public translateService: TranslateService, private categoryService: CategoryService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    switch (this.translateService.currentLang) {
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
    }
    
    //this.getChildChildCategories( this.childCategory ) /* The child categories from child ''idi-qui-som' */

    this.getArticulos( this.currentLang, this.childCategory )

  }

  getChildChildCategories ( parentCategory: string ) {

    this.categoryService.getCategories() 
      .subscribe( ( item:Category ) => {

        this.childChildCategory = item.data
        this.childChildCategory = this.childChildCategory.filter( ( item : reqCategory ) => item.attributes.published === 1 )

        this.childChildCategory.map ( item => {
          console.log ( `Parent: ${item.attributes.parent_id.toString()}`, `Parent: ${parentCategory}` )
          if ( item.attributes.parent_id.toString() === `${parentCategory}`) {

            this.childChildCatMatrixHomeIDI.push(item.attributes.id.toString())
          
          }
        
        })

      } )

  }

  getArticulos( currentLanguage:string, childChildCategories: string /* ids de categorías child child */ ) {

    this.articleService.getArticles() /* Para cada categoría nieta, buscar todos los artículos asociados */
        .subscribe( (resp:Article) => {
          this.articulos = resp.data
          this.articulos = this.articulos.filter( (item : reqArticle) => item.attributes.state === 1) /* Todos los artículos publicados */
          this.articulos = this.articulos.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) /* Todos los artículos en el idioma de la web */
          this.articulos = this.articulos.filter( (item : reqArticle) => childChildCategories.includes( item.relationships.category.data.id ) ) /* Todos los artículos cuya categoría está en el array */
          this.articulos = this.articulos.sort((a,b) => {return +a.attributes.title - +b.attributes.title} ) /* Todos los artículos ordenados*/
        } ) 

  }

}
