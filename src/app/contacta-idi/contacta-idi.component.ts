import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contacta-idi',
  templateUrl: './contacta-idi.component.html',
  styleUrls: ['./contacta-idi.component.css'],
  providers: [MessageService]
})
export class ContactaIdiComponent implements OnInit {
  
  contactForm!: FormGroup;
  submitted:boolean = false;
  spinner:boolean = false;
  public message = '';

  constructor( public translateService: TranslateService, private formBuilder: FormBuilder, public messageService: MessageService, public contactService: ContactService ) { }
  
  createForm() {

    this.contactForm = this.formBuilder.group( {
      fullName: [ '', [Validators.required, Validators.min(3)] ],
      contactPhone: [ '', [ Validators.minLength(9), Validators.maxLength(9) ] ],
      userSubject: ['', Validators.required],
      userMessage: ['', Validators.required],
      primaryEmail: [ '', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ],
      acceptTerms: [ false, Validators.requiredTrue ]
    } )
  
  }

  get fullName() {
    return this.contactForm.get('fullName');
  }
  get contactPhone() {
    return this.contactForm.get('contactPhone');
  }
  get userSubject() {
    return this.contactForm.get('userSubject');
  }
  get userMessage() {
    return this.contactForm.get('userMessage');
  }
  get primaryEmail() {
    return this.contactForm.get('primaryEmail');
  }
  get acceptTerms() {
    return this.contactForm.get('acceptTerms')
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  ngOnInit(): void {

    window.scroll(0,0)
    this.createForm()
    
  }

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      const contact: Contact = contactForm;
      this.spinner = true
      this.contactService.sendContact(contact)
      .subscribe( (result: any) => {
        console.log (result)
        this.messageService.messages = result
        this.message = result
        // contactForm.reset({fullName: 'Ignacio lladó vidal', contactPhone: 555555555, primaryEmail: 'nachollv@hotmail.com', userSubject: 'El asunto del mensaje', userMessage: 'este es el mensaje que envió ...',  acceptTerms: false})
        /* contactForm.reset({fullName: '', contactPhone: null, primaryEmail: '', userSubject: '', userMessage: '',  acceptTerms: false}) */
        this.submitted = true
        this.spinner = false
      }, (err) => {
        this.messageService.messages = err.msg;
      });
    } else {

      console.error('Contact form is in an invalid state', contactForm)
      this.message = 'Contact form is in an invalid state'
      this.submitted = false

    } 
  }

  onReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }

}
