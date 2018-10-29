import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { ListaCapitulosComponent } from './pages/capitulos/lista-capitulos/lista-capitulos.component';
import { Cap1Component } from './pages/capitulos/cap1/cap1.component';
import { Cap2Component } from './pages/capitulos/cap2/cap2.component';
import { Cap3Component } from './pages/capitulos/cap3/cap3.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    IntroduccionComponent,
    CapitulosComponent,
    ActividadesComponent,
    RetroalimentacionComponent,
    AyudaComponent,
    ListaCapitulosComponent,
    Cap1Component,
    Cap2Component,
    Cap3Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
