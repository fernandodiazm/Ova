import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { ListaCapitulosComponent } from './pages/capitulos/lista-capitulos/lista-capitulos.component';

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
    ListaCapitulosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
