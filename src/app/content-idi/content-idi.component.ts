import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Router } from '@angular/router';
import { OneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-content-idi',
  templateUrl: './content-idi.component.html',
  styleUrls: ['./content-idi.component.css']
})

export class ContentIdiComponent implements OnInit {

  public id:string = this.route.snapshot.paramMap.get('id')
  public cat:string = this.route.snapshot.paramMap.get('cat')

  public cabecera: string = ''
  public stringMessage: string = 'Getting content from IDI ...'

  public contenidos: OneArticle
  currentLang: string = 'ca-ES';
  subPath: string = '';

  constructor( public translateService: TranslateService, private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

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

console.log ( this.cat )

    switch(this.cat) {
      case '111':
        this.cabecera = `../../assets/images/cabeceras/${this.subPath}agroalimentario_idi.webp`
        break
      case '325':
      case '331':  
        this.cabecera = `../../assets/images/cabeceras/${this.subPath}reempresa_cedentes.webp`
        break;
      case '326':
      case '332':
        this.cabecera = `../../assets/images/cabeceras/${this.subPath}reempresa_idi.webp`
        break;
    }

    this.articleService.getArticle(this.id)
      .subscribe( item =>
        {
         /* Obteniendo el contenido hijo del contenido con id=this.id y en función del valor del campo 'Link A' */
         let childID:string

        if ( !item.data.attributes.urls.urla ) { 
          this.contenidos = item
        } else {
          if ( item.data.attributes.urls.urla === '/AGENDA' ) {
              this.stringMessage = "One moment, opening iframe agenda ..."
              return
            }

          if ( (item.data.attributes.urls.urla === '/AYUDAS' || item.data.attributes.urls.urla === '/AJUDES') ) {
              this.stringMessage = "One moment, opening iframe ayudas subvenciones ..."
              return
            }
          
          if ( item.data.attributes.urls.urla === '/iframe_cedente' ) {
            console.log ("cedente", item.data.attributes.urls.urla)
            this.stringMessage = "One moment, opening iframe cedentes ..." // redirecciona al ifrema de reempresa
            return
          }

          if ( item.data.attributes.urls.urla === '/iframe_reemprendedor' ) {
            console.log ("reemprendedor", item.data.attributes.urls.urla)
            this.stringMessage = "One moment, opening iframe reemprendedor ..." // redirecciona al ifrema de reempresa
            return
          }

          if ( item.data.attributes.urls.urla.includes("idi.es/index.php/contenido_texto_nivel3/detalle/") ) {
              if ( item.data.attributes.urls.urla.substring(0, 53) === "/www.idi.es/index.php/contenido_texto_nivel3/detalle/" ) {
              childID = item.data.attributes.urls.urla.replace("/www.idi.es/index.php/contenido_texto_nivel3/detalle/","")  //Reemplazo www.idi.es ...
              }
              if ( item.data.attributes.urls.urla.substring(0, 49) === "/idi.es/index.php/contenido_texto_nivel3/detalle/" ) {
              childID = item.data.attributes.urls.urla.replace("/idi.es/index.php/contenido_texto_nivel3/detalle/","")      // o Reemplazo idi.es ...   porque no sé cual ha puesto.
              }
              
              childID = childID.substring(0, childID.indexOf("/"))  
              this.stringMessage = "One moment, getting the content you requested ..."
              
            } else {
              let externalURL:string = item.data.attributes.urls.urla.substring(1, item.data.attributes.urls.urla.length)
              this.stringMessage = "One moment, redirecting to https://"+externalURL+" ..."
              window.location.replace(  `https://${externalURL}` )
              return
            }
            this.articleService.getArticle(childID).subscribe( theContent => {
              this.contenidos = theContent
              if ( this.contenidos.data.attributes.cabecera ) {
                if ( this.contenidos.data.attributes.cabecera.includes("#") ) {
                  /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato json key:value */
                  let myheader = JSON.parse(this.contenidos.data.attributes.cabecera);
                  this.cabecera = myheader['imagefile'].split("#")[0]
                } else if ( this.contenidos.data.attributes.cabecera.includes("imagefile") ) {
                  /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato json key:value */
                  this.cabecera = this.contenidos.data.attributes.cabecera
                  this.cabecera = Object.values(JSON.parse(this.cabecera))[0].toString() 
     
                } else {
                  /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato string */
                  this.cabecera = this.contenidos.data.attributes.cabecera
                }
                this.cabecera = `https://contents.idi.es/${this.cabecera}`
              }

            } )
          }
          
        }
      )

  }

}
