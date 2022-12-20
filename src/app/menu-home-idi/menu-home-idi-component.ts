import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Article, reqArticle } from '../model/article.model';
import { reqCategory } from '../model/category.model';
import { OneArticle } from '../model/oneArticle.model';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-menu-home-idi',
  templateUrl: './menu-home-idi.component.html',
  styleUrls: ['./menu-home-idi.component.css']
})

export class MenuHomeIdiComponent implements OnInit {

  public id: number = +this.route.snapshot.paramMap.get('id');
  public idCat: number = +this.route.snapshot.paramMap.get('idCat');

  public cabecera: string;
  public stringMessage: string = '';

  public contenidos: reqArticle[];
  public contenidos_txt: reqArticle[];
  public contenidos_hlp: reqArticle[];

  public contenidos_hlp_detail: OneArticle;

  public categorias: reqCategory[];
  public childCat: string[] = [];
  public childCat_txt: string[] = [];
  public childCat_hlp: string[] = [];

  currentLang: string;
  subPath: string = '';

  constructor(public translateService: TranslateService, private articleService: ArticleService, private categoryService: CategoryService,
    private messageService: MessageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    switch (this.translateService.currentLang) {
      case 'ca':
        this.currentLang = 'ca-ES';
        this.subPath = this.currentLang + "/";
        break;
      case 'es':
        this.currentLang = 'es-ES';
        break;
      case 'en':
        this.currentLang = 'en-EN';
        break;
      default:
        this.currentLang = 'ca-ES';
        this.subPath = this.currentLang + "/";
    }

    switch (this.id) {
      case 66:
        this.cabecera = `${this.subPath}creacion_empresa_idi.webp`;
        break;
      case 310:
      case 312:
        this.cabecera = `${this.subPath}reempresa_idi.webp`;
        break;
      case 288:
        this.cabecera = `${this.subPath}diseno_idi.webp`;
        break;
      case 52:
        this.cabecera = `${this.subPath}registrodemarca_idi.webp`;
        break;
      case 68:
        this.cabecera = `${this.subPath}vivero_empresas_idi.webp`;
        break;
      case 45:
        this.cabecera = `${this.subPath}internacionalizacion_idi.webp`;
        break;
      case 174:
        this.cabecera = `${this.subPath}digitalizacion_idi.webp`;
        break;
      case 70:
        this.cabecera = `${this.subPath}ferias_idi.webp`;
        break;
      case 72:
        this.cabecera = `${this.subPath}sostenibilidad_idi.webp`;
        break;
      case 73:
        this.cabecera = `${this.subPath}financiacion_idi.webp`;
        break;
      case 74:
        this.cabecera = `${this.subPath}clusters_idi.webp`;
        break;
    }

    this.categoryService.getCategories()
      .subscribe(resp => {

        this.categorias = resp.data;
        this.categorias = this.categorias.filter(resp => resp.attributes.published === 1);
        this.categorias = this.categorias.filter(resp => resp.attributes.parent_id === this.id);
        this.categorias.map(item => {

          if (item.attributes.title.substring(item.attributes.title.length - 3, item.attributes.title.length) === 'txt') {
            this.childCat_txt.push(item.attributes.id.toString());
          }
          if (item.attributes.title.substring(item.attributes.title.length - 3, item.attributes.title.length) === 'hlp') {
            this.childCat_hlp.push(item.attributes.id.toString());
          }

        });

        this.getContents(this.currentLang, this.childCat_txt, this.childCat_hlp);

      });

    this.messageService.add("Cargando contenidos ...");

  }

  getContents(currentLanguage: string, childCat_txt: string[], childCat_hlp: string[]) {

    this.articleService.getArticles()
      .subscribe((resp: Article) => {

        this.contenidos = resp.data;
        this.contenidos = this.contenidos.filter((item: reqArticle) => item.attributes.state === 1);
        this.contenidos = this.contenidos.filter((item: reqArticle) => item.attributes.language === `${currentLanguage}`);
        this.contenidos_txt = this.contenidos.filter((item: reqArticle) => childCat_txt.includes(item.relationships.category.data.id));
        this.contenidos_hlp = this.contenidos.filter((item: reqArticle) => childCat_hlp.includes(item.relationships.category.data.id));
        this.stringMessage = 'show as link';

      });

  }

}
