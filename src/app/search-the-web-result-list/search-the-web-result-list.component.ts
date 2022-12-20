import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { reqArticle } from '../model/article.model';
import { MessageService } from '../services/message.service';
import { SearchTheWebService } from '../services/search-the-web.service';


@Component({
  selector: 'app-search-the-web-result-list',
  templateUrl: './search-the-web-result-list.component.html',
  styleUrls: ['./search-the-web-result-list.component.css']
})
export class SearchTheWebResultListComponent implements OnInit {

  public searchTerm:string
  public contenidos: reqArticle[]
  currentLang: string;
  
  constructor( private route: ActivatedRoute,
    private router: Router, public translateService: TranslateService,
    public messageService: MessageService, 
    public searchService: SearchTheWebService ) { }

  ngOnInit(): void {

    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm')
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

    this.searchService.getArticles()
      .subscribe( (result: any) => {

        this.contenidos = result.data
        this.contenidos = result.data.filter( (item : reqArticle) => item.attributes.language === `${this.currentLang}`) 
        this.contenidos = this.contenidos.filter( item => item.attributes.text.toUpperCase().includes(this.searchTerm.trim().toUpperCase()) )

        console.log(this.contenidos)


      }, (err) => {
        this.messageService.messages = err.msg;
      })
  }

}
