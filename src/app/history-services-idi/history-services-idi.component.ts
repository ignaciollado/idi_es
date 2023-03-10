import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';
import { Article, reqArticle } from '../model/article.model';
import { attrOneArticle, OneArticle } from '../model/oneArticle.model';

@Component({
  selector: 'app-history-services-idi',
  templateUrl: './history-services-idi.component.html',
  styleUrls: ['./history-services-idi.component.css']
})


export class HistoryServicesIdiComponent implements OnInit {
  
  public rootCategory: string = '352' /* id de la categoría raíz 'idi-web-root', el punto de entrada */
  public childCatMatrixHomeIDI: string[] = [] /* ID de Categorías hijas de 'idi-web-root' */
  public articulos: reqArticle[] /* Contenidos  */
  public categorias: reqCategory[]
  public unArticuloAttribute: attrOneArticle
  public currentLang: string
  public tagsHistoryIDI: Array<string> = []
  public occurrences: string = ''

  constructor( public translateService: TranslateService, private categoryService: CategoryService, 
    private articleService: ArticleService, private messageService: MessageService, 
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    this.messageService.add("Cargando parent matrix idi home...")
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
  
    this.getChildCategories( this.rootCategory ) /* Get child categories from 'idi-web-root' */

  }

  getChildCategories( parentCategory: string ) {

    this.categoryService.getCategories()
      .subscribe( ( categorias:Category ) => {

          this.categorias = categorias.data
          this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )

          this.categorias.map ( (item:reqCategory) => {

            if ( item.attributes.parent_id.toString() === `${parentCategory}` ) {

              this.childCatMatrixHomeIDI.push(`${item.attributes.id.toString()}`) /* Si es cat el nombre esta en 'title', si es esp el nombre está en 'note' */

            }

          })
          this.getChildChildCategories ( this.childCatMatrixHomeIDI )
      })
     
  }

  getChildChildCategories ( childCategories: string[] ) {


    this.categoryService.getCategories()
    .subscribe( ( categorias:Category ) => {

        this.categorias = categorias.data
        this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )
        //this.categorias = this.categorias.sort( (x:reqCategory, y:reqCategory) => (x.attributes.title > y.attributes.title) ? 1 : -1 )

        this.categorias.map ( item => {

          if ( childCategories.includes ( item.attributes.parent_id.toString() ) ) {

            this.childCatMatrixHomeIDI.push(`${item.attributes.id.toString()}`)

          }

        })
        this.getArticulosTags ( this.currentLang, this.childCatMatrixHomeIDI )

    })

  }

  getArticulosTags ( currentLanguage:string, childChildCategories: string[] /*  ids de categorías child child */ ) {

    this.articleService.getArticles() /* Para cada categoría nieta, buscar todos los artículos asociados */
        .subscribe( (resp:Article) => {
          this.articulos = resp.data
          this.articulos = this.articulos.filter( (item : reqArticle) => item.attributes.state === 1) /* Todos los artículos publicados */
          this.articulos = this.articulos.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) /* Todos los artículos en el idioma de la web */
          this.articulos = this.articulos.filter( (item : reqArticle) => childChildCategories.includes( item.relationships.category.data.id ) ) /* Todos los artículos cuya categoría está en el array */
          
          this.articulos.forEach ( (item:reqArticle) => this.getUnArticulo ( item.id ) )

        })

  }

  getUnArticulo (id:string) {

    let arrayTemp:string[] = []
    this.articleService.getArticle(id)
      .subscribe( (resp: OneArticle) => {
        this.unArticuloAttribute = resp.data.attributes
        Object.entries( this.unArticuloAttribute.tags ).forEach( ([key, value], index) => { 
      
          this.tagsHistoryIDI.push( `${value}` )
          this.tagsHistoryIDI.sort()
          
          this.tagsHistoryIDI.map( theTag => { /* Quito etiquetas duplicadas */
                if (!arrayTemp.includes(theTag.trim())) {
                  const theTagFirstLetterCap = theTag.charAt(0).toUpperCase() + theTag.slice(1); /* y pongo la primera letra en capitals */
                  arrayTemp.push(theTagFirstLetterCap)
                }
          })

          this.tagsHistoryIDI = arrayTemp.sort()
        })
      })
      
  }

 
}
