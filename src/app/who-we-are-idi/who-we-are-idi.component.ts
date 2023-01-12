import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { Category, reqCategory } from '../model/category.model'
import { OneCategory } from '../model/oneCategory.model'
import { ArticleService } from '../services/article.service'
import { CategoryService } from '../services/category.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-who-we-are-idi',
  templateUrl: './who-we-are-idi.component.html',
  styleUrls: ['./who-we-are-idi.component.css']
})
export class WhoWeAreIdiComponent implements OnInit {

  public rootCategory: string = '367' /* id de la categoría raíz 'idi-qui-som', el punto de entrada */
  public rootCategoryDetails: OneCategory
  public childCatMatrixHomeIDI: string[] = [] /* ID de Categorías hijas de 'idi-qui-som' */
  public currentLang: string
  public categorias: reqCategory[]

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
    
    this.getCategoryDetail( this.rootCategory )
    this.getChildCategories( this.rootCategory ) /* Get child categories from 'idi-qui-som' */
    
  }

  getChildCategories( parentCategory: string ) {

    this.categoryService.getCategories()
      .subscribe( ( categorias:Category ) => {

          this.categorias = categorias.data
          this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )
          //this.categorias = this.categorias.filter( ( item : reqCategory ) => item.id != '369' ) /* quito la cat 'Projectes IDI' */
          //this.categorias = this.categorias.sort( (x:reqCategory, y:reqCategory) => (x.attributes.title > y.attributes.title) ? -1 : 1 )

          this.categorias.map ( item => {

            if ( item.attributes.parent_id.toString() === `${parentCategory}` ) {

              this.childCatMatrixHomeIDI.push(`${item.attributes.id.toString()}#${item.attributes.title}#${item.attributes.note}`) /* Si es cat el nombre esta en 'title', si es esp el nombre está en 'note' */

            }
         
          })

      })
     
  }

  getCategoryDetail( catID: string ) {
    this.categoryService.getCategory(catID)
      .subscribe( (category:OneCategory) => {

        this.rootCategoryDetails = category
        /* console.log (`Category details: ${this.rootCategoryDetails}`) */
      })
  }

}
