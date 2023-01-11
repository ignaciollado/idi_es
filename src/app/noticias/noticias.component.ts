import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Article, attrArticle, reqArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'last-news',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

  public noticias: reqArticle[]; 
  public noticiasAttributes: attrArticle
  public currentLang: string
  public id:number = +this.route.snapshot.paramMap.get('id')


  constructor( public translateService: TranslateService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   
    this.messageService.add("Cargando noticias...")
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
    this.getNoticias(this.currentLang, '11')
  }

  getNoticias(currentLanguage:string, currentCategory: string) {
 
    this.articleService.getArticles()
        .subscribe( (resp:Article) => {

          this.noticias = resp.data
          this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.state === 1)
          this.noticias = this.noticias.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) 
          this.noticias = this.noticias.filter( (item : reqArticle) => item.relationships.category.data.id === `${currentCategory}`)
          if (this.id !=9999) {
            this.noticias = this.noticias.slice(0,4) /* Last four news published */
          }
        
        } ) 

      }
}
