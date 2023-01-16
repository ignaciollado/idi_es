import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';
import { OneCategory } from '../model/oneCategory.model';

@Component({
  selector: 'app-matrix-idi-home-child',
  templateUrl: './matrix-idi-home-child.component.html',
  styleUrls: ['./matrix-idi-home-child.component.css']
})
export class MatrixIdiHomeChildComponent implements OnInit {

  @Input() childCategory:string; // have decorated the property with @Input() with the idi-web-root child categories

  public childCat_exploraIDI: string[] = []
  public childChildCategory: reqCategory[]
  public childChildCatMatrixHomeIDI: string[] = [] /* ID de Categorías nietas de 'idi-web-root' */

  public categorias: reqCategory[]
  public categoria: OneCategory[] = []

  public currentLang: string

  constructor( public translateService: TranslateService, private categoryService: CategoryService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    this.messageService.add("Cargando child matrix idi home...")

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
    
    this.getChildChildCategories( this.childCategory ) /* Get the child child categories from 'idi-web-root' */

  }

  getChildChildCategories( childCategory: string ) {  /* Obtaining the child-child categories from 'idi-web-root' */

    this.categoryService.getCategories()

      .subscribe( ( item:Category ) => {

        this.childChildCategory = item.data
        this.childChildCategory = this.childChildCategory.filter( ( item : reqCategory ) => item.attributes.published === 1 )
        this.childChildCategory = this.childChildCategory.sort( (x:reqCategory, y:reqCategory)=> (x.attributes.title > y.attributes.title) ? 1 : -1 ) 
        this.childChildCategory.map ( item => {

          if ( item.attributes.parent_id.toString() === `${childCategory}`) {

            this.childChildCatMatrixHomeIDI.push(item.attributes.id.toString())

          }
        
        })

        this.childChildCatMatrixHomeIDI.forEach ( ( catID:string ) => {
          this.getCategoryDetail( catID ) 
       })

      } )

  }

  getCategoryDetail( catID: string ) {

    this.categoryService.getCategory(catID)
    .subscribe( (category:OneCategory) => {

        this.categoria.push ( category )
             
          })
        //this.categoria = this.categoria.sort( (x:OneCategory, y:OneCategory) => (x > y) ? 1 : -1 )
  }

}
