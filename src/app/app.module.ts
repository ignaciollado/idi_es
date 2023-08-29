import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { AgendaIdiComponent } from './agenda-idi/agenda-idi.component';

import { ServiceIdiDetailComponent } from './service-idi-detail/service-idi-detail.component';
import { AyudasSubvencionesIdiDetailComponent } from './ayudas-subvenciones-idi-detail/ayudas-subvenciones-idi-detail.component';

import { FormacionAgendaIdiComponent } from './formacion-agenda-idi/formacion-agenda-idi.component';
import { MenuHomeIdiComponent } from "./menu-home-idi/menu-home-idi-component";
import { TransparenciaIdiComponent } from './transparencia-idi/transparencia-idi.component';

import { ContentIdiComponent } from './content-idi/content-idi.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { MenuFooterIdiComponent } from './menu-footer-idi/menu-footer-idi.component';
import { ContactaIdiComponent } from './contacta-idi/contacta-idi.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SearchTheWebComponent } from './search-the-web/search-the-web.component';

import { FilterPipe } from './utils/filter.pipe';
import { SearchTheWebResultListComponent } from './search-the-web-result-list/search-the-web-result-list.component';
import { HighlightSearchTermPipe } from './utils/highlight-search-term.pipe';
import { SearchTheWebDetailComponent } from './search-the-web-detail/search-the-web-detail.component';

import { CategoryIdPipe } from './utils/category-id.pipe';
import { ReempresaIdiComponent } from './reempresa-idi/reempresa-idi.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { reqArticle } from './model/article.model';
import { ArticleService } from './services/article.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { TransparencyDetailComponent } from './transparency-detail/transparency-detail.component';
import { FederDetailComponent } from './feder-detail/feder-detail.component';
import { ExploreIdiComponent } from './explore-idi/explore-idi.component';
import { ContactIdiHomeComponent } from './contact-idi-home/contact-idi-home.component';
import { MatrixIdiHomeComponent } from './matrix-idi-home/matrix-idi-home.component';
import { CategoryTitlePipe } from './utils/category-title.pipe';
import { MatrixIdiHomeChildComponent } from './matrix-idi-home-child/matrix-idi-home-child.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { WhoWeAreIdiComponent } from './who-we-are-idi/who-we-are-idi.component';
import { WhoWeAreIdiChildComponent } from './who-we-are-idi-child/who-we-are-idi-child.component';
import { ProyectosIdiComponent } from './proyectos-idi/proyectos-idi.component';
import { WellFormattedLinkPipe } from './utils/well-formatted-link.pipe';
import { HistoryServicesIdiComponent } from './history-services-idi/history-services-idi.component';
import { ProyectosIdiChildComponent } from './proyectos-idi-child/proyectos-idi-child.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { GetAliasPipe } from './Pipes/get-alias.pipe';
import { TranslateModule } from "@ngx-translate/core";
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NoticiasComponent,
        NoticiaDetailComponent,
        MessagesComponent,
        PageNotFoundComponent,
        HomeComponentComponent,
        AgendaIdiComponent,
        ServiceIdiDetailComponent,
        AyudasSubvencionesIdiDetailComponent,
        FormacionAgendaIdiComponent,
        MenuHomeIdiComponent,
        TransparenciaIdiComponent,
        ContentIdiComponent,
        SelectLanguageComponent,
        MenuFooterIdiComponent,
        ContactaIdiComponent,
        NewsletterComponent,
        SearchTheWebComponent,
        FilterPipe,
        SearchTheWebResultListComponent,
        HighlightSearchTermPipe,
        SearchTheWebDetailComponent,
        CategoryIdPipe,
        ReempresaIdiComponent,
        ArticleDetailComponent,
        TransparencyDetailComponent,
        FederDetailComponent,
        ExploreIdiComponent,
        ContactIdiHomeComponent,
        MatrixIdiHomeComponent,
        CategoryTitlePipe,
        MatrixIdiHomeChildComponent,
        LevelOneComponent,
        WhoWeAreIdiComponent,
        WhoWeAreIdiChildComponent,
        ProyectosIdiComponent,
        WellFormattedLinkPipe,
        HistoryServicesIdiComponent,
        ProyectosIdiChildComponent,
        LevelTwoComponent,
        GetAliasPipe,
        ModalComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        I18nModule,
        TranslateModule
    ]
})
export class AppModule { 
  public allIDIContents: reqArticle[]
  constructor( private contentService: ArticleService ) { }

}