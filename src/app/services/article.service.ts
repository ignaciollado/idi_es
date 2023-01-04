import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from '../model/article.model';
import { OneArticle } from '../model/oneArticle.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private jToken = 'c2hhMjU2OjkwNzpjZjRkMmYwOTkxMGYyZTFiMWY2NGFjYThjZWVjM2VlNmI4ZGRlNGU1OTBjNzNiODA0NzM2NDdhYjUwN2M4NTdm'
  private apiBaseUrlOne = 'https://contents.idi.es/api/index.php/v1/content/articles'
  private apiBaseUrl = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=100' /* Chapuza para mostrar todo ya que no veo como pasar query parameters */
  private apiBaseUrlEverything = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=1800' /* Chapuza para mostrar todo ya que no veo como pasar query parameters */

  private apiBaseUrlLastContent = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=20' /* Offset 0 y tamaño de página a 20 artículos */

  headers = new HttpHeaders()
    .set( 'Content-Type', 'application/vnd.api+json' ) 
    .set(  'X-Joomla-Token', this.jToken  )
 
  constructor( private http: HttpClient, private messagesService: MessageService ) { }
  
getArticles() {
  
  this.messagesService.add('ArticleService: fetched ALL articles')
  return this.http.get<Article>( this.apiBaseUrl, { headers: this.headers } )

}

getArticlesEveryThing() {
  
  this.messagesService.add('ArticleService: fetched ALL articles')
  return this.http.get<Article>( this.apiBaseUrlEverything, { headers: this.headers } )

}

getLastArticles() {

  this.messagesService.add('ArticleService: fetched ALL articles')
  return this.http.get<Article>( this.apiBaseUrlLastContent, { headers: this.headers } )

}

/** GET article by id. Return `undefined` when id not found */
getArticleNo404<Data>(id: string): Observable<Article> {

  const url = `${this.apiBaseUrl}/${id}`
  return this.http.get<Article[]>(url)
    .pipe(
      map(articles => articles[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.messagesService.add(`${outcome} article id=${id}`);
      }),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );

}

/** GET article by id. Will 404 if id not found */
getArticle(id: string): Observable<OneArticle> {
  const url = `${this.apiBaseUrlOne}/${id}`;
  
  return this.http.get<OneArticle>( url, { headers: this.headers } )

}

/**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.messagesService.add(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };

}

}