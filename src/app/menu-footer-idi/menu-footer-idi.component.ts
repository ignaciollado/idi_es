
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-menu-footer-idi',
  templateUrl: './menu-footer-idi.component.html',
  styleUrls: ['./menu-footer-idi.component.css']
})
export class MenuFooterIdiComponent implements OnInit {
  
  public id:string = this.route.snapshot.paramMap.get('id')
  currentLang: string;
  public contenidos: reqArticle[]
  cabecera: string;

  constructor( public translateService: TranslateService, private articleService: ArticleService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

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

    switch(this.id) {
      case "171":
        if (this.currentLang === 'ca-ES') {
          this.cabecera = "/ca-ES/programas_idi.webp"
        } else { this.cabecera = "programas_idi.webp" }
        break;
      case "283":
        this.cabecera = "idi_idi.webp"
        break;
      case "348":
        this.cabecera = "accesibilidad_idi.webp"
        break;
      case "349":
        this.cabecera = "politica_de_cookies_idi.webp"
        break;  
      case "350":
        this.cabecera = "aviso_legal_idi.webp"
        break;
      case "351":
        this.cabecera = "politica_de_privacidad_idi.webp"
        break;        
    }
    
    this.articleService.getArticlesEveryThing()
        .subscribe(
          (resp:Article) => {
           this.contenidos = resp.data
           this.contenidos = this.contenidos.filter( item => item.attributes.state === 1 )
           this.contenidos = this.contenidos.filter( item => item.attributes.language === this.currentLang )
           this.contenidos = this.contenidos.filter( item => item.relationships.category.data.id === this.id)
/*            console.log (this.currentLang, this.id, this.contenidos) */
        })

        window.scroll(0,0)
  }

}
