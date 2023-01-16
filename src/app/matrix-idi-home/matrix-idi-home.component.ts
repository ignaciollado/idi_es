import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';

@Component({
  selector: 'app-matrix-idi-home',
  templateUrl: './matrix-idi-home.component.html',
  styleUrls: ['./matrix-idi-home.component.css']
})

export class MatrixIdiHomeComponent implements OnInit {

  public rootCategory: string = '352' /* id de la categoría raíz 'idi-web-root', el punto de entrada */
  public childCatMatrixHomeIDI: string[] = [] /* ID de Categorías hijas de 'idi-web-root' */

  public childChildCategory: reqCategory[]

  public categorias: reqCategory[]

  public currentLang: string

  constructor( public translateService: TranslateService, private categoryService: CategoryService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

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
          this.categorias = this.categorias.sort( (x:reqCategory, y:reqCategory) => (x.attributes.title > y.attributes.title) ? 1 : -1 )

          this.categorias.map ( item => {

            if ( item.attributes.parent_id.toString() === `${parentCategory}` ) {

              this.childCatMatrixHomeIDI.push(`${item.attributes.id.toString()}#${item.attributes.title}#${item.attributes.note}`) /* Si es cat el nombre esta en 'title', si es esp el nombre está en 'note' */
              this.childCatMatrixHomeIDI = this.childCatMatrixHomeIDI.sort( (x:string, y:string) => (x > y) ? 1 : -1 )
            }
         
          })

      })
     
  }

}