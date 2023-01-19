import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { WhoWeAreIdiComponent } from './who-we-are-idi/who-we-are-idi.component';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';
import { FederDetailComponent } from './feder-detail/feder-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HistoryServicesIdiComponent } from './history-services-idi/history-services-idi.component';
import { ServiceIdiDetailComponent } from './service-idi-detail/service-idi-detail.component';
import { AyudasSubvencionesIdiDetailComponent } from './ayudas-subvenciones-idi-detail/ayudas-subvenciones-idi-detail.component';
import { FormacionAgendaIdiComponent } from './formacion-agenda-idi/formacion-agenda-idi.component';
import { MenuHomeIdiComponent } from "./menu-home-idi/menu-home-idi-component";
import { TransparenciaIdiComponent } from './transparencia-idi/transparencia-idi.component';

import { NoticiasComponent } from './noticias/noticias.component';
import { ContentIdiComponent } from './content-idi/content-idi.component';
import { MenuFooterIdiComponent } from './menu-footer-idi/menu-footer-idi.component';
import { ContactaIdiComponent } from './contacta-idi/contacta-idi.component';
import { SearchTheWebResultListComponent } from './search-the-web-result-list/search-the-web-result-list.component';
import { SearchTheWebDetailComponent } from './search-the-web-detail/search-the-web-detail.component';
import { MenuHomeEmprendedorDetailComponent } from './menu-home-emprendedor-detail/menu-home-emprendedor-detail.component';
import { ReempresaIdiComponent } from './reempresa-idi/reempresa-idi.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { TransparencyDetailComponent } from './transparency-detail/transparency-detail.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';

const routes: Routes = [

    { path: '', title: "Institut d'Innovació Empresarial de les Illes Balears", component: HomeComponentComponent },
    { path: 'idi-who-we-are/:id', title: 'Qui som', component: WhoWeAreIdiComponent },
    { path: 'idi-history-services', title: 'Històric serveis IDI', component: HistoryServicesIdiComponent},
    { path: 'idi-service-detail/:id/:idCat', title: 'Detall serveis IDI', component: ServiceIdiDetailComponent },
    { path: 'idi-level-two/:id/:idMainCat', component: LevelTwoComponent },
    { path: 'idi-level-one/:idSubCat/:idMainCat', component:LevelOneComponent},
    { path: 'feder-detail/:id', component: FederDetailComponent },

    { path: 'idi-transparency-detail/:id', component: TransparencyDetailComponent },
    { path: 'show-article-detail-content/:id/:idCat', component: ArticleDetailComponent },

    { path: 'idi-content-detail/:id/:cat', component: ContentIdiComponent },
    { path: 'idi-search-detail/:id/:searchTerm', component: SearchTheWebDetailComponent },
    { path: 'emprendedor-empresa-idi-detail/:id', component: MenuHomeEmprendedorDetailComponent},

    { path: 'show-menu-option/:id', title: 'Detall del contingut IDI', component: MenuHomeIdiComponent },

    { path: 'reempresa-reempresa/:id/:col', component: ReempresaIdiComponent },

    { path: 'ayudas-subvenciones', component: AyudasSubvencionesIdiDetailComponent },

    { path: 'idi-list-news/:id', component: NoticiasComponent },
    { path: 'idi-detail-news/:id', component: NoticiaDetailComponent },

    { path: 'idi-result-list/:searchTerm', component: SearchTheWebResultListComponent},

    { path: 'agenda-events', component: FormacionAgendaIdiComponent },

    { path: 'idi-transparency/:id', component: TransparenciaIdiComponent },
    { path: 'idi-transparency-detail/:id', component: TransparencyDetailComponent },

    { path: 'accesibilidad/:id', component: MenuFooterIdiComponent },
    { path: 'aviso-legal/:id', component: MenuFooterIdiComponent},
    { path: 'contacta', component: ContactaIdiComponent},
    { path: 'idi/:id', component: MenuFooterIdiComponent},
    { path: 'politica-de-cookies/:id', component: MenuFooterIdiComponent},
    { path: 'politica-de-privacidad/:id', component: MenuFooterIdiComponent},
    { path: 'programas-idi/:id', component: MenuFooterIdiComponent},

    { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
