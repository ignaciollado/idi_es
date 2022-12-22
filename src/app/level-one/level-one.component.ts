import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle, Category } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { OneCategory } from '../model/oneCategory.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

  public unaNoticia: OneArticle
  public unaNoticiaAttribute: attrOneArticle
  public unaCategoria: string
  public currentLang: string

  constructor(  public translateService: TranslateService, private getNoticia: ArticleService, private getCategory: CategoryService, 
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id:string = this.route.snapshot.paramMap.get('id')
    let idCat:string = this.route.snapshot.paramMap.get('idCat')

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

    this.getUnContenido(id)

    this.getTheCategory(idCat, this.currentLang)

    window.scroll(0,0)

  }

  getUnContenido (id:string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.unaNoticiaAttribute = resp.data.attributes
      })
  
    }

    getTheCategory (idCat:string, lang: string) {

      this.getCategory.getCategory (idCat)
  
        .subscribe( (resp: OneCategory) => {
          
          if ( lang === 'es-ES' ) {
            this.unaCategoria = resp.data.attributes.note /* El nombre en español de la categoría está en el campo 'note' */
          } else {
            this.unaCategoria = resp.data.attributes.title /* El nombre en catalán de la categoría está en el campo 'title' */
          }

        })
    
      }

}
