import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private request: any = {}

  constructor() { }

  get( url: string ): HttpResponse<any> | undefined {
    return this.request[ url ]
  }

  put( url: string, response: HttpResponse<any> ): void {
    this.request[ url ] = response
  }

  invalidateUrl( url: string ): void {
    this.request[ url ] = undefined
  }

  invalidateCache(): void {
    this.request = { }
  }

}
