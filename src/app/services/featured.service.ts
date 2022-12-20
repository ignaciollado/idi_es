import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Article } from '../model/article.model';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  private jToken = 'c2hhMjU2OjkwNzpjZjRkMmYwOTkxMGYyZTFiMWY2NGFjYThjZWVjM2VlNmI4ZGRlNGU1OTBjNzNiODA0NzM2NDdhYjUwN2M4NTdm'
  /* private apiBaseUrl = 'https://contents.idi.es/api/index.php/v1/content/articles' */
  private apiBaseUrl = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=1700'

  headers = new HttpHeaders()
    .set( 'Content-Type', 'application/vnd.api+json' ) 
    .set(  'X-Joomla-Token', this.jToken  )
    
  constructor( private http: HttpClient, private messageServices: MessageService ) { }

  getFeaturedIDI() {

    this.messageServices.add('ArticleService: fetched articles')
    return this.http.get<Article>( this.apiBaseUrl, { headers: this.headers } )
    
  }
}
