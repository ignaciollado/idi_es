import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'app-featured-idi-detail',
  templateUrl: './featured-idi-detail.component.html',
  styleUrls: ['./featured-idi-detail.component.css']
})
export class FeaturedIdiDetailComponent implements OnInit {

  public unaNoticia: OneArticle
  public unaNoticiaAttribute: attrOneArticle

  constructor( private getNoticia: ArticleService, private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.getUnaNotica(id)
  }

  getUnaNotica (id:string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.unaNoticiaAttribute = resp.data.attributes
        /* Si hay valor en 'Link A Text' hay que redirigir hacia este link */
        if (this.unaNoticiaAttribute.urls.urlatext) {
          if ( this.unaNoticiaAttribute.urls.urlatext.includes('https://www.idi.es/index.php/reempresa_inicio/detalle') ) {
            this.router.navigateByUrl (`emprendedor-reempresa/310`, { skipLocationChange: true })
            return
          } else if ( this.unaNoticiaAttribute.urls.urlatext.includes("/www.idi.es/index.php/contenido_texto_nivel3/detalle/") ) {
            let idArt =  this.unaNoticiaAttribute.urls.urlatext.replace('https://www.idi.es/index.php/contenido_texto_nivel3/detalle/','')
            console.log ( ">>Nivel 3, hay que mostrar un artículo " +  this.unaNoticiaAttribute.urls.urlatext, this.unaNoticiaAttribute.urls.urlatext.replace('https://www.idi.es/index.php/contenido_texto_nivel3/detalle/',''), idArt)
            this.router.navigateByUrl (`show-article-detail-content/${idArt}`, { skipLocationChange: true })
            return
          } else if ( this.unaNoticiaAttribute.urls.urlatext === '/AYUDAS' || this.unaNoticiaAttribute.urls.urlatext === '/AJUDES' || this.unaNoticiaAttribute.urls.urlatext === '/idi.es/index.php/ayud_subv') {
            console.log ( "One moment, opening iframe ayudas subvenciones ..." )
            this.router.navigateByUrl ('ayudas-subvenciones', { skipLocationChange: true })
            return
          } 
          if ( !this.unaNoticiaAttribute.urls.urlatext.includes('https://idi.es/index.php/noticia/detalle') ) {
            window.location.replace ( this.unaNoticiaAttribute.urls.urlatext )
          }
        } 
      })
  
    }
}
