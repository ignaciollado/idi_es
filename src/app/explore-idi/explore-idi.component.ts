import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';
import { OneCategory } from '../model/oneCategory.model';

@Component({
  selector: 'app-explore-idi',
  templateUrl: './explore-idi.component.html',
  styleUrls: ['./explore-idi.component.css']
})
export class ExploreIdiComponent implements OnInit {

  public childCat_exploraIDI: string[] = []
  public categorias: reqCategory[]  
  public categoria: OneCategory[] = []
  public currentLang: string
  public rootCategory: string = '352' /* ID de la categoría raíz 'idi-web-root', el punto de entrada a la web */

  constructor( public translateService: TranslateService, private categoryService: CategoryService, 
     private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
   
      this.messageService.add("Cargando explore idi home...")
      
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

      this.getChildCategories( this.rootCategory )

      console.log ( this.categoria )
      
    }

  getChildCategories( parentCategory: string ) {

      this.categoryService.getCategories()
        .subscribe( ( categorias:Category ) => {

            this.categorias = categorias.data
            this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )
            this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.parent_id.toString() === `${parentCategory}` )

            this.categorias.map ( item => {

              if ( item.attributes.parent_id.toString() === `${parentCategory}` ) {
                this.childCat_exploraIDI.push(item.attributes.id.toString())
              }
           
            })

            this.childCat_exploraIDI.forEach ( ( catID:string ) => {
               this.getCategoryDetail( catID ) 
            })

            this.categoria = this.categoria.sort( /* (x:OneCategory, y:OneCategory) => (x.data.id > y.data.id) ? 1 : -1  */)

        })
  }

  getCategoryDetail( catID: string ) {

        this.categoryService.getCategory(catID)
        .subscribe( (category:OneCategory) => {

            this.categoria.push ( category )
                 
              })
       
  }


}
