import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';

@Component({
  selector: 'app-transparency-detail',
  templateUrl: './transparency-detail.component.html',
  styleUrls: ['./transparency-detail.component.css']
})
export class TransparencyDetailComponent implements OnInit {

  public articles: reqArticle[]; 
  /* public detalleTransparencia: OneArticle */
  /* public id:number = +this.route.snapshot.paramMap.get('id') */
  public detalleTransparenciaAttribute: attrOneArticle
  public currentLang: string = '';
  public subPath: string = '';
  public cabecera: string = ''

  constructor( public translateService: TranslateService, private articleService: ArticleService, 
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id') 

    switch (this.translateService.currentLang) {
      case 'cat':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      case 'cas':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      default:
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
    }

    this.getdetalleTransparencia( id, this.currentLang )

    this.cabecera = `${this.subPath}transparencia_idi.webp`
    this.cabecera = `../../assets/images/cabeceras/${this.cabecera}` 

  }


  getdetalleTransparencia( currentCategory: string, currentLanguage:string ) {

      this.articleService.getArticlesEveryThing()
          .subscribe( (resp:Article) => {
           
            this.articles = resp.data
            this.articles = this.articles.filter( (item : reqArticle) => item.attributes.state === 1)
            this.articles = this.articles.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) 
            this.articles = this.articles.filter( (item : reqArticle) => item.relationships.category.data.id === `${currentCategory}`)

          } ) 
  
        }  

}
