import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-the-web-detail',
  templateUrl: './search-the-web-detail.component.html',
  styleUrls: ['./search-the-web-detail.component.css']
})
export class SearchTheWebDetailComponent implements OnInit {

  public searchTerm: string
  public unContenidoAttribute: attrOneArticle

  constructor( private getNoticia: ArticleService, private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm')

    this.getUnaNotica(id)

  }

  getUnaNotica (id:string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.unContenidoAttribute = resp.data.attributes
      })
  
    }

}
