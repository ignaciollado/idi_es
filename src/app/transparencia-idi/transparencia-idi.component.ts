import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-transparencia-idi',
  templateUrl: './transparencia-idi.component.html',
  styleUrls: ['./transparencia-idi.component.css']
})
export class TransparenciaIdiComponent implements OnInit {
  public id:string = this.route.snapshot.paramMap.get('id')
  currentLang: string;
  public contenidos: reqArticle[]
  cabecera: string;
  
  constructor( public translateService: TranslateService, private articleService: ArticleService, 
    private messageService: MessageService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    switch ( this.translateService.currentLang ) {
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

    switch(this.id) {
      case "291": /* El contenido categorizado como 291 'Transparencia' contiene un html con los distintos apartados con el id hardcodeado*/
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
      console.log ( this.contenidos[0].attributes.cabecera)
      })

  }

}
