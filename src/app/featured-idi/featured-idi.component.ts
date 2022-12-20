import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Article, attrArticle, reqArticle } from '../model/article.model';

import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-featured-idi',
  templateUrl: './featured-idi.component.html',
  styleUrls: [ 'featured-idi.component.css' ]
})
export class FeaturedIdiComponent implements OnInit {

  public featuretsIDI: reqArticle[]; 
  public featuretsIDIAttributes: attrArticle
  public currentLang: string
  
  constructor( public translateService: TranslateService, private featuredService: ArticleService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.messageService.add("Cargando destacado IDI...")
    
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
    
    this.getFeaturedIDI(this.currentLang) 

  }

 getFeaturedIDI(currentLanguage:string) {
  
    this.featuredService.getArticles()
                        .subscribe(
                          (resp : Article) => {

                            this.featuretsIDI = resp.data
                            /* Filtra los artículos del idioma, que están publicados y marcados como 'Featured'  */
                            this.featuretsIDI = this.featuretsIDI.filter( (item : reqArticle) => (item.attributes.state === 1 && item.attributes.language === `${currentLanguage}` && item.attributes.featured === 1))
                            this.featuretsIDI = this.featuretsIDI.slice(0,this.featuretsIDI.length)

                          }
                        )
  
  }

}
