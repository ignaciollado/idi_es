import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { MessageService } from '../services/message.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { OneCategory } from '../model/oneCategory.model';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';


@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

  public contents: reqArticle[]; 
  public mainCategoryAttributes: OneCategory
  public subCategoryAttributes: OneCategory

  public unaCategoria: string
  public currentLang: string

  constructor(  public translateService: TranslateService, private getContent: ArticleService, 
    private getCategory: CategoryService,
    private messageNoticia: MessageService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {

    let idSubCat:string = this.route.snapshot.paramMap.get('idSubCat')
    let idMainCat:string = this.route.snapshot.paramMap.get('idMainCat')

    switch (this.translateService.currentLang) {
      case 'cat':
        this.currentLang = 'ca-ES'
      break
      case 'cas':
        this.currentLang = 'es-ES'      
      break
      case 'en':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
    }
   
    this.getTheAsignedProjects (idSubCat, this.currentLang)
    this.getMainCategoryDetail (idMainCat, this.currentLang)
    this.getSubCategoryDetail (idSubCat, this.currentLang)
    
    window.scroll(0,0)

  }

  getTheAsignedProjects (currentCategory:string, currentLanguage: string) {
      
      this.getContent.getArticles ()
  
        .subscribe( (resp: Article) => {
          
          this.contents = resp.data
          this.contents = this.contents.filter( (item : reqArticle) => item.attributes.state === 1)
          this.contents = this.contents.filter( (item : reqArticle) => item.attributes.language === `${currentLanguage}`) 
          this.contents = this.contents.filter( (item : reqArticle) => item.relationships.category.data.id === `${currentCategory}`)

        })
      
  }

  getMainCategoryDetail( catID: string, currentLanguage: string ) {

        this.getCategory.getCategory(catID)
        .subscribe( (category:OneCategory) => {

            this.mainCategoryAttributes = category
                 
              })
       
  }

  getSubCategoryDetail( catID: string, currentLanguage: string ) {

    this.getCategory.getCategory(catID)
    .subscribe( (category:OneCategory) => {

        this.subCategoryAttributes = category
             
          })
   
}

}
