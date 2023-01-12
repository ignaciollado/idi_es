import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { Category, reqCategory } from '../model/category.model';
import { OneArticle } from '../model/oneArticle.model';
import { OneCategory } from '../model/oneCategory.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-proyectos-idi',
  templateUrl: './proyectos-idi.component.html',
  styleUrls: ['./proyectos-idi.component.css']
})
export class ProyectosIdiComponent implements OnInit {

  public rootCategory: string = '369' /* id de la subcategoría 'Projectes IDI', el punto de entrada */
  //public subCategoryDetails: OneCategory[] = []
  //public childCatMatrixHomeIDI: string[] = [] /* ID de Categorías hijas de 'idi-qui-som' */
  public currentLang: string
  //public categorias: reqCategory[]
  public noticias: reqArticle[]; 

  public articulos: OneArticle[] = []

  constructor( public translateService: TranslateService, private categoryService: CategoryService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

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

    /* this.getCategoryDetail( this.rootCategory ) */
    /* this.getChildCategories( this.rootCategory ) // Get child categories from 'projectes-idi'  */
    this.getNoticias( this.currentLang, this.rootCategory )
    console.log ( "noticias relacionadas: ", this.noticias )
  }

/*   getChildCategories( parentCategory: string ) {

    this.categoryService.getCategories()
      .subscribe( ( categorias:Category ) => {

          this.categorias = categorias.data
          this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )
          this.categorias = this.categorias.sort( (x:reqCategory, y:reqCategory) => (x.attributes.title > y.attributes.title) ? 1 : -1 )
          this.categorias = this.categorias.filter ( ( item : reqCategory ) => item.attributes.parent_id.toString() === parentCategory )

          this.categorias.map ( item => {
            
              this.childCatMatrixHomeIDI.push(`${item.attributes.id.toString()}`) 

          })

          this.childCatMatrixHomeIDI.forEach ( ( catID:string ) => {
            this.getCategoryDetail( catID ) 
         })

      })
     
  } */

/*   getCategoryDetail( catID: string ) {
    this.categoryService.getCategory(catID)
      .subscribe( (category:OneCategory) => {

        this.subCategoryDetails.push ( category )
      
      })
  } */

  getNoticias(currentLanguage:string, desiredCategory: string) {
    console.log ( currentLanguage, desiredCategory )

    this.articleService.getArticles()
        .subscribe( (resp:Article) => {

          this.noticias = resp.data
          this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.state === 1)
          this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) 
          this.noticias = this.noticias.filter( (item : reqArticle) => item.relationships.category.data.id === `${desiredCategory}`)
          console.log ("->>>", this.noticias)
        } ) 
        
      }

}
