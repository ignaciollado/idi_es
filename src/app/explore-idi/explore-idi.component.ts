import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Article, attrArticle, reqArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { Category, reqCategory } from '../model/category.model';

@Component({
  selector: 'app-explore-idi',
  templateUrl: './explore-idi.component.html',
  styleUrls: ['./explore-idi.component.css']
})
export class ExploreIdiComponent implements OnInit {

  public exploraIDI: reqArticle[]
  public childCat_exploraIDI: string[] = []
  public noticias: reqArticle[]
  public categorias: reqCategory[]
  public noticiasAttributes: attrArticle
  public currentLang: string
  public rootCategory: string = '352' /* id de la categoría raíz 'idi-web-root', el punto de entrada */

  constructor( public translateService: TranslateService, private categoryService: CategoryService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
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
      
    }

  getChildCategories( parentCategory: string ) {

      this.categoryService.getCategories()
        .subscribe( ( categorias:Category ) => {

            this.categorias = categorias.data
            this.categorias = this.categorias.filter( ( item : reqCategory ) => item.attributes.published === 1 )

            this.categorias.map ( item => {

              if ( item.attributes.parent_id.toString() === `${parentCategory}` ) {
                this.childCat_exploraIDI.push(item.attributes.id.toString())
              }
           
            })

            this.getNoticias( this.currentLang, this.childCat_exploraIDI )

        })
  }

  getNoticias( currentLanguage:string, childCategories: string[] ) {

      this.articleService.getArticles()
          .subscribe( (resp:Article) => {
  
            this.noticias = resp.data
            this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.state === 1)
            this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`)
    
            this.exploraIDI = this.noticias.filter( (item : reqArticle) => childCategories.includes( item.relationships.category.data.id ) )
            this.exploraIDI = this.exploraIDI.sort( (x:reqArticle,y:reqArticle) => (x.attributes.title > y.attributes.title) ? 1 : -1 ) /* Todos los artículos ordenados*/
          
          } ) 
  
        }

}
