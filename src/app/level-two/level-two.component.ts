import { Component, OnInit } from '@angular/core';
import { OneArticle, attrOneArticle, Category } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { OneCategory } from '../model/oneCategory.model';


@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.css']
})
export class LevelTwoComponent implements OnInit {

  public contents: reqArticle[]; 
  public oneContentAttributes: attrOneArticle
  public unaCategoria: string
  public currentLang: string
  public mainCategoryAttributes: OneCategory;

  constructor(  public translateService: TranslateService, private getContent: ArticleService,
    private getCategory: CategoryService,
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let id:string = this.route.snapshot.paramMap.get('id')
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

    window.scroll(0,0)
    this.getUnContenido (id)
    this.getMainCategoryDetail (idMainCat)
    /* console.log ("atributos: ",this.mainCategoryAttributes.data.attributes.title)  */
  }

  getUnContenido (id:string) {

    this.getContent.getArticle(id)

      .subscribe( (resp: OneArticle) => {
        this.oneContentAttributes = resp.data.attributes
      })
  
  }

  getMainCategoryDetail( catID: string ) {

    this.getCategory.getCategory(catID)
    .subscribe( (category:OneCategory) => {
        console.log ( "detalle: ", category.data.attributes.title, category.data.attributes.note )
        this.mainCategoryAttributes = category
        console.log ( "detalle detalle: ", this.mainCategoryAttributes.data.attributes.title, this.mainCategoryAttributes.data.attributes.note )     
          })
   
          
}

}
