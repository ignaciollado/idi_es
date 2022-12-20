import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { SearchTheWebService } from '../services/search-the-web.service';
import { reqArticle } from '../model/article.model';

@Component({
  selector: 'app-search-the-web',
  templateUrl: './search-the-web.component.html',
  styleUrls: ['./search-the-web.component.css']
})

export class SearchTheWebComponent implements OnInit {

  searchTheWebForm!: FormGroup;
  submitted:boolean = false;
  spinner:boolean = false;
  public message = '';
  totalFound: number;
  public contenidos: reqArticle[]
  currentLang: string;
  
  constructor( public translateService: TranslateService, private formBuilder: FormBuilder, 
    public messageService: MessageService, 
    public searchService: SearchTheWebService ) { }

  createForm() {

    this.searchTheWebForm = this.formBuilder.group( {
      searchTerm: [ '', [Validators.required ] ]
      /* acceptTerms: [ false, Validators.requiredTrue ] */
    } )
  
  }

  get searchTerm() {
    return this.searchTheWebForm.get('searchTerm');
  }

  ngOnInit(): void {
    this.createForm()
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
  }

  onSubmit(searchTheWebForm: any) {
    if (searchTheWebForm.valid) {
      this.spinner = true
      const searchTerm: string = searchTheWebForm.value.searchTerm;

      this.searchService.getArticles()
      .subscribe( (result: any) => {

        this.contenidos = result.data
        this.contenidos = result.data.filter( (item : reqArticle) => item.attributes.language === `${this.currentLang}`) 
        this.contenidos = this.contenidos.filter( item => item.attributes.text.toUpperCase().includes(searchTerm.trim().toUpperCase()) )
        this.totalFound = this.contenidos.length 
        console.log(this.contenidos)
        /*  this.router.navigate( ['/searchResults']) */
        this.spinner = false
        this.submitted = true
      }, (err) => {
        this.messageService.messages = err.msg;
      });

    } else {
      console.error('Contact form is in an invalid state', searchTheWebForm)
      this.message = 'Contact form is in an invalid state'
      this.submitted = false
    } 
  }

  showListResults(searchTerm: string) {
    console.log (searchTerm)
  }

}
