import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle, Category } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { OneCategory } from '../model/oneCategory.model';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';


@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.css']
})
export class LevelTwoComponent implements OnInit {

  public contents: reqArticle[]; 
  public unaNoticiaAttribute: attrOneArticle
  public unaCategoria: string
  public currentLang: string

  constructor(  public translateService: TranslateService, private getContent: ArticleService, private getCategory: CategoryService, 
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let idSubCat:string = this.route.snapshot.paramMap.get('idSubCat')
    let idMainCat:string = this.route.snapshot.paramMap.get('idMainCat')

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
    console.log (idSubCat, idMainCat )
    /* this.getUnContenido(idSubCat) */

    this.getTheAsignedContents (idSubCat, this.currentLang)

    window.scroll(0,0)

  }

/*   getUnContenido (id:string) {

    this.getNoticia.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.unaNoticiaAttribute = resp.data.attributes
      })
  
    } */

    getTheAsignedContents (currentCategory:string, currentLanguage: string) {
      
      console.log (currentCategory, currentLanguage)
      
      this.getContent.getArticles ()
  
        .subscribe( (resp: Article) => {
          
          this.contents = resp.data
          this.contents = this.contents.filter( (item : reqArticle) => item.attributes.state === 1)
          this.contents = this.contents.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) 
          this.contents = this.contents.filter( (item : reqArticle) => item.relationships.category.data.id === `${currentCategory}`)

        })
      
      console.log ( this.contents )
      }

}
