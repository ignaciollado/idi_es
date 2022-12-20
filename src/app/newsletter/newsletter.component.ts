import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsLetterForm!: FormGroup;
  submitted:boolean = false;
  spinner:boolean = false;
  public message = '';

  constructor( public translateService: TranslateService, private formBuilder: FormBuilder, public messageService: MessageService, public contactService: ContactService ) { }

  createForm() {

    this.newsLetterForm = this.formBuilder.group( {
      primaryEmail: [ '', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ],
      acceptTerms: [ false, Validators.requiredTrue ]
    } )
  
  }

  get primaryEmail() {
    return this.newsLetterForm.get('primaryEmail');
  }
  get acceptTerms() {
    return this.newsLetterForm.get('acceptTerms')
  }

  ngOnInit(): void {

    this.createForm()

  }

  onSubmit(newsLetterForm: any) {
    if (newsLetterForm.valid) {
      this.spinner = true
      const contact: Contact = newsLetterForm;
      this.contactService.sendContact(contact)
      .subscribe( (result: any) => {
        console.log (result)
       /*  this.messageService.messages = result */
        /* this.message = result */
        // contactForm.reset({fullName: 'Ignacio lladó vidal', contactPhone: 555555555, primaryEmail: 'nachollv@hotmail.com', userSubject: 'El asunto del mensaje', userMessage: 'este es el mensaje que envió ...',  acceptTerms: false})
        /* contactForm.reset({fullName: '', contactPhone: null, primaryEmail: '', userSubject: '', userMessage: '',  acceptTerms: false}) */
        this.submitted = true
        this.spinner = false
      }, (err) => {
        this.messageService.messages = err.msg;
      });
    } else {

      console.error('Contact form is in an invalid state', newsLetterForm)
      this.message = 'Contact form is in an invalid state'
      this.submitted = false

    } 
  }

}
