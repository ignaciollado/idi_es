import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {

  public unaNoticia: OneArticle
  public unaNoticiaAttribute: attrOneArticle

  constructor( private getNoticia: ArticleService, private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) {  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.getUnaNotica(id)
    window.scroll(0,0)
  }

  getUnaNotica ( id:string ) {

    this.getNoticia.getArticle(id)
      .subscribe( (resp: OneArticle) => {
        this.unaNoticiaAttribute = resp.data.attributes
      })
  
    }

}
