import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OneArticle } from '../model/oneArticle.model';

import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-menu-home-emprendedor-detail',
  templateUrl: './menu-home-emprendedor-detail.component.html',
  styleUrls: ['./menu-home-emprendedor-detail.component.css']
})
export class MenuHomeEmprendedorDetailComponent implements OnInit {

  public id:string = this.route.snapshot.paramMap.get('id')
  public idCat:string = this.route.snapshot.paramMap.get('idCat')

  public childArticleID: string
  public childArticleCatID: string 
  public cabecera: string = ''
  public stringMessage: string = ''

  public articleDetail: OneArticle
  public currentLang: string;
  public subPath: string = '';

  constructor( public translateService: TranslateService, private articleService: ArticleService, private messageService: MessageService, 
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    switch (this.translateService.currentLang) {
      case 'ca':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      case 'es':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
      break
      default:
        this.currentLang = 'ca-ES'
        this.subPath = this.currentLang+"/"
    }

    this.getOneArticle(this.id)
  }

  getOneArticle (id: string) {

    this.articleService.getArticle(id)
      .subscribe ( ( theChildArticle: OneArticle ) => {

        if ( theChildArticle.data.attributes.urls.urla ) {
              this.childArticleID = theChildArticle.data.attributes.urls.urla
              this.childArticleCatID = theChildArticle.data.relationships.category.data.id

              /* seleccino la cabecera a mostrar */
              switch(this.childArticleCatID) {
                case "66":
                  this.cabecera = `${this.subPath}creacion_empresa_idi.webp`
                  break;                
                case "279":
                  this.cabecera = `${this.subPath}agroalimentario_idi.webp`
                  break;  
                case "310":
                case "312":
                  this.cabecera = `${this.subPath}reempresa_idi.webp`
                  break;
                case "290":
                  this.cabecera = `${this.subPath}diseno_idi.webp`
                  break;  
                case "52":
                  this.cabecera = `${this.subPath}registrodemarca_idi.webp`
                  break;
                case "68":
                case "87":
                  this.cabecera = `${this.subPath}vivero_empresas_idi.webp`
                  break;
                case "45":
                case "49":
                  this.cabecera = `${this.subPath}internacionalizacion_idi.webp`
                  break;
                case "174":
                case "178":  
                  this.cabecera = `${this.subPath}digitalizacion_idi.webp`
                  break;
                case "70":
                case "91":
                  this.cabecera = `${this.subPath}ferias_idi.webp`
                  break;
                case "107":  
                case "275":
                  this.cabecera = `${this.subPath}nautico_idi.webp`
                  break;  
                case "72":
                case "95":
                  this.cabecera = `${this.subPath}sostenibilidad_idi.webp`
                  break;
                case "73":
                case "97":
                  this.cabecera = `${this.subPath}financiacion_idi.webp`
                  break;
                case "74":
                case "99":
                  this.cabecera = `${this.subPath}clusters_idi.webp`
                break;                       
            }
          this.cabecera = `../../assets/images/cabeceras/${this.cabecera}` 

          /* Excepciones que redireccionan a otros contenidos */
          /* IR A AYUDAS Y SUBVENCIONES */
          if ( theChildArticle.data.attributes.urls.urla === '/AYUDAS' || theChildArticle.data.attributes.urls.urla === '/AJUDES' || theChildArticle.data.attributes.urls.urla === '/idi.es/index.php/ayud_subv') {
              console.log ( "One moment, opening iframe ayudas subvenciones ..." )
              this.router.navigateByUrl ('ayudas-subvenciones', { skipLocationChange: true })
          } 
          /* IR A AGENDA IDI */
          else if ( theChildArticle.data.attributes.urls.urla === '/www.idi.es/index.php/agenda_ctrl/webinars' || theChildArticle.data.attributes.urls.urla === '/AGENDA') {
              console.log ( "One moment, opening iframe agenda IDI ..." )
              this.router.navigateByUrl ('formacion-agenda', { skipLocationChange: true })
          }
          /* IR A DIAGNÓSTICO DE MADUREZ DIGITAL EN utils.idi.es */
          else if (theChildArticle.data.attributes.urls.urla.includes("/utils.idi.es/apps/diagnostico_de_madurez_digital.php")) {
              console.log ( "One moment, redirecting to diagnóstico de madurez digital ..." )
              window.location.replace ('https://utils.idi.es/apps/diagnostico_de_madurez_digital.php')
          }
          /* MOSTRAR EL IFRAME CEDENTES DE REEMPRESA */
          else if ( theChildArticle.data.attributes.urls.urla === '/iframe_cedente' || theChildArticle.data.attributes.urls.urla.includes("detalle_iframe_cedente") ) {
              console.log ( "One moment, opening iframe cedentes ..." )
              this.router.navigateByUrl (`idi-content-detail/2170/332`, { skipLocationChange: true })
          }
          /* MOSTRAR UN DOCUMENTO PDF CARGADO EN contents.idi.es */
          else if ( theChildArticle.data.attributes.urls.urla.includes(".pdf")) {
              console.log ( "pdf" )
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) // redirecciona a un documento pdf
          }
          /* REDIRECCIONAR A 'iempren.es'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("iempren.es") ) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }
          /* REDIRECCIONAR A 'emblematicsbalears.es'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/www.emblematicsbalears.es/")) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }
          /* REDIRECCIONAR A '/rebosteriabalear.com/'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/rebosteriabalear.com/")) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }
          /* REDIRECCIONAR A '/sites.google.com/view/clusterhabitatbalears/cluster-habitat'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/sites.google.com/view/clusterhabitatbalears/cluster-habitat")) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }
          /* REDIRECCIONAR A '/www.boatshowpalma.com'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/www.boatshowpalma.com")) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }
          /* REDIRECCIONAR A '/www.balearicmarinecluster.com'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/www.balearicmarinecluster.com")) {
              window.location.replace ( `https://${theChildArticle.data.attributes.urls.urla}` ) 
          }          
          /* MOSTRAR OTRO CONTENIDO ASOCIADO A UNA ENTRADA DE MENU referenciada en 'Link A'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/www.idi.es/index.php/contenido_texto/detalle/") ) {
              console.log ( "hay que redireccionar a opción de menú ", theChildArticle.data.attributes.urls.urla.replace('/www.idi.es/index.php/contenido_texto/detalle/',''))
              const idCat = theChildArticle.data.attributes.urls.urla.replace('/www.idi.es/index.php/contenido_texto/detalle/','')
              this.router.navigateByUrl (`show-menu-option/${idCat}`, { skipLocationChange: true })
          }
          /* MOSTRAR EL DETALLE DE EL ARTÍCULO REFERENCIADO EN 'Link A'*/
          else if ( theChildArticle.data.attributes.urls.urla.includes("/www.idi.es/index.php/contenido_texto_nivel3/detalle/") ) {
              console.log ( "Nivel 3, hay que mostrar un artículo " + theChildArticle.data.attributes.urls.urla,  theChildArticle.data.attributes.urls.urla.replace('/www.idi.es/index.php/contenido_texto_nivel3/detalle/',''))
              let idArt = theChildArticle.data.attributes.urls.urla.replace('/www.idi.es/index.php/contenido_texto_nivel3/detalle/','')
              this.router.navigateByUrl (`show-article-detail-content/${idArt}`, { skipLocationChange: true })
          } else if ( theChildArticle.data.attributes.urls.urla === '/quiero_reemprender/1' || theChildArticle.data.attributes.urls.urla === '/vull_reemprendre/1' ) {
              console.log ("quiero reemprender ...")
              this.router.navigateByUrl (`reempresa-reempresa/312/1`, { skipLocationChange: true })
              /*  this.router.navigate [`reempresa-reempresa/312/1`] */
          } else if ( theChildArticle.data.attributes.urls.urla === '/quiero_reemprender/2' || theChildArticle.data.attributes.urls.urla === '/vull_reemprendre/2' ) {
              console.log ("quiero 312 2 ...")
              this.router.navigateByUrl (`reempresa-reempresa/312/2`, { skipLocationChange: true })              
          } else {
              console.log ("else")
              this.articleService.getArticle( this.childArticleID.replace("/","") )
                .subscribe( (theDetail: OneArticle) => {
                  this.articleDetail = theDetail
                  if ( this.articleDetail.data.attributes.cabecera && this.articleDetail.data.attributes.cabecera !== '{"imagefile":"","alt_text":""}' ) {
                    if ( this.articleDetail.data.attributes.cabecera.includes("#") ) {
                      console.log ("AAAAA")
                      /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato json key:value */
                      let myheader = JSON.parse(this.articleDetail.data.attributes.cabecera);
                      this.cabecera = myheader['imagefile'].split("#")[0]

                    } else if ( this.articleDetail.data.attributes.cabecera.includes("imagefile") ) {
                      console.log ("BBBBBB")
                      /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato json key:value */
                      this.cabecera = this.articleDetail.data.attributes.cabecera
                      this.cabecera = Object.values(JSON.parse(this.cabecera))[0].toString() 
                    } else {
                      console.log ("CCCCCCC")
                      /* En este caso la imagen de la cabecera está en el campo custom 'cabecera' en formato string */
                      this.cabecera = this.articleDetail.data.attributes.cabecera
                    }
                    this.cabecera = `https://contents.idi.es/${this.cabecera}`
                  }
          }) }
        } else { /* El campo 'Link A' está en blanco, lo que significa que tiene que mostrar todo el contenido de este artículo */
            console.log (`Muestra todo el contenido del artículo con id = ${this.id}`)
            this.router.navigateByUrl (`show-article-detail-content/${this.id}/${this.idCat}`, { skipLocationChange: true })
        }
  
  })
  
  }

}
