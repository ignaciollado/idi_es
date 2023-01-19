import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { Category, reqCategory } from '../model/category.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-transparencia-idi',
  templateUrl: './transparencia-idi.component.html',
  styleUrls: ['./transparencia-idi.component.css']
})
export class TransparenciaIdiComponent implements OnInit {

  public rootCategory: string = '291' /* id de la categoría raíz 'transparencia', el punto de entrada */
  public childCatMatrixHomeIDI: string[] = [] /* ID de Categorías hijas de 'transparencia' */

  public id:string = this.route.snapshot.paramMap.get('id')
  currentLang: string;
  public contenidos: reqArticle[]
  public categorias: reqCategory[]
  cabecera: string;
  
  constructor( public translateService: TranslateService, private articleService: ArticleService, 
    private categoryService: CategoryService,
    private messageService: MessageService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    switch ( this.translateService.currentLang ) {
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

    switch(this.id) {
      case "291": /* El contenido categorizado como 291 'Transparencia' contiene un html con los distintos sub-apartados con el id hardcodeado*/
        if (this.currentLang === 'ca-ES') {
          this.cabecera = "/ca-ES/transparencia_idi.webp"
        } else { this.cabecera = "transparencia_idi.webp" }
        break;
    }

    this.articleService.getArticlesEveryThing()
    .subscribe( (resp:Article) => {

       this.contenidos = resp.data
       this.contenidos = this.contenidos.filter( item => item.attributes.state === 1 )
       this.contenidos = this.contenidos.filter( item => item.attributes.language === this.currentLang )
       this.contenidos = this.contenidos.filter( item => item.relationships.category.data.id === this.id)
      
      })

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
