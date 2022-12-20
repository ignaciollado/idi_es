import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from '../model/contact.model';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class ContactService {


  private apiBaseUrlOne = 'https://tramits.idi.es/public/assets/utils/enviaCorreoElectronicoANGULAR.php'
 
  constructor( private http: HttpClient, private messagesService: MessageService ) { }
  
  sendContact(contact: any) {

  const fullName: string = contact.value.fullName
  const destMail: string = contact.value.primaryEmail
  const contactPhone: string = contact.value.contactPhone
  const subject: string = contact.value.userSubject
  const message: string = contact.value.userMessage

    this.messagesService.add('ContactService: send a contact message')
    return this.http.get( `${this.apiBaseUrlOne}?${destMail}/${fullName}/${contactPhone}/${subject}/${message}`)/* .pipe(
        map(
          (response) => {
            if (response) {
              console.log (JSON.stringify(response))
              return JSON.stringify(response)
            }
          },
          (error: any) => {
            console.log ("error: "+ error)
            return error;
          }
        )
    ) */

  }

/** GET article by id. Return `undefined` when id not found */
getArticleNo404<Data>(id: string): Observable<Contact> {
  const url = `${this.apiBaseUrlOne}/${id}`
  return this.http.get<Contact[]>(url)
    .pipe(
      map(articles => articles[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.messagesService.add(`${outcome} article id=${id}`);
      }),
      catchError(this.handleError<Contact>(`getArticle id=${id}`))
    );
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