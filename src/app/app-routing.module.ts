import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { WhoWeAreIdiComponent } from './who-we-are-idi/who-we-are-idi.component';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';
import { FederDetailComponent } from './feder-detail/feder-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* import { FeaturedIdiDetailComponent } from './featured-idi-detail/featured-idi-detail.component'; */
import { HistoryServicesIdiComponent } from './history-services-idi/history-services-idi.component';
import { ServiceIdiDetailComponent } from './service-idi-detail/service-idi-detail.component';
import { AyudasSubvencionesIdiDetailComponent } from './ayudas-subvenciones-idi-detail/ayudas-subvenciones-idi-detail.component';
import { FormacionAgendaIdiComponent } from './formacion-agenda-idi/formacion-agenda-idi.component';
/* import { FormacionWebinarsIdiComponent } from './formacion-webinars-idi/formacion-webinars-idi.component'; */
import { MenuHomeIdiComponent } from "./menu-home-idi/menu-home-idi-component";
import { TransparenciaIdiComponent } from './transparencia-idi/transparencia-idi.component';

/* import { SectoresIdiComponent } from './sectores-idi/sectores-idi.component'; */

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

const routes: Routes = [

    { path: '', title: "Institut d'Innovació Empresarial de les Illes Balears", component: HomeComponentComponent },
  /*   { path: 'home', title: "Institut d'Innovació Empresarial de les Illes Balears", component: HomeComponentComponent }, */

    { path: 'idi-who-we-are/:id', title: 'Qui som', component: WhoWeAreIdiComponent },
   /*  { path: 'idi-featured-detail/:id', title: 'Destacats IDI', component: FeaturedIdiDetailComponent }, */
    { path: 'idi-history-services', title: 'Històric serveis IDI', component: HistoryServicesIdiComponent},
    { path: 'idi-service-detail/:id/:idCat', title: 'Detall serveis IDI', component: ServiceIdiDetailComponent },
    { path: 'idi-detail/:id', component: NoticiaDetailComponent },
    { path: 'idi-level-one/:id/:idCat', component:LevelOneComponent},
    { path: 'feder-detail/:id', component: FederDetailComponent },

    { path: 'idi-transparency-detail/:id', component: TransparencyDetailComponent },
    { path: 'show-article-detail-content/:id/:idCat', component: ArticleDetailComponent },

    { path: 'idi-content-detail/:id/:cat', component: ContentIdiComponent },
    { path: 'idi-search-detail/:id/:searchTerm', component: SearchTheWebDetailComponent },
    { path: 'emprendedor-empresa-idi-detail/:id', component: MenuHomeEmprendedorDetailComponent},

    { path: 'show-menu-option/:id', title: 'Detall del contingut IDI', component: MenuHomeIdiComponent },

/*     { path: 'emprendedor-creacion-empresa/:id', component: MenuHomeIdiComponent },
    { path: 'emprendedor-disenyo/:id', component: MenuHomeIdiComponent },
    { path: 'emprendedor-registro-marca-producto/:id', component: MenuHomeIdiComponent },
    { path: 'emprendedor-reempresa/:id', component: MenuHomeIdiComponent },
    { path: 'emprendedor-vivero-coworking/:id', component: MenuHomeIdiComponent }, */

/*     { path: 'empresa-internacionalizacion/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-reempresa/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-registro-marca-producto/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-digitalizacion/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-ferias/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-sostenibilidad/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-financiacion/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-clusters/:id', component: MenuHomeIdiComponent },
    { path: 'empresa-disenyo/:id', component: MenuHomeIdiComponent }, */

/*     { path: 'sectores-comercio/:id', component: SectoresIdiComponent },
    { path: 'sectores-moda/:id', component: SectoresIdiComponent },
    { path: 'sectores-nautica/:id', component: SectoresIdiComponent },
    { path: 'sectores-habitat/:id', component: SectoresIdiComponent },
    { path: 'sectores-agroalimentario/:id', component: SectoresIdiComponent },
    { path: 'sectores-industria/:id', component: SectoresIdiComponent }, */

/*     { path: 'sectors-idi-hlp-detail/:id/:idCat', component: MenuHomeEmprendedorDetailComponent },
    { path: 'sectors-idi-srv-detail/:id/:idCat', component: MenuHomeEmprendedorDetailComponent }, */

    { path: 'reempresa-reempresa/:id/:col', component: ReempresaIdiComponent },

    { path: 'ayudas-subvenciones', component: AyudasSubvencionesIdiDetailComponent },

    { path: 'idi-list-news/:id', component: NoticiasComponent },

    { path: 'idi-result-list/:searchTerm', component: SearchTheWebResultListComponent},

    { path: 'agenda-events', component: FormacionAgendaIdiComponent },

    /* { path: 'formacion-webinars', component: FormacionWebinarsIdiComponent }, */

    { path: 'transparencia/:id', component: TransparenciaIdiComponent },

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
