import { RouterModule, Routes } from '@angular/router';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';


const appRoutes: Routes = [
    { path: 'introduccion',         component: IntroduccionComponent,       data: { breadcrumb: 'Introduccion' }},
    { path: 'capitulos',            component: CapitulosComponent,          data: { breadcrumb: 'Capitulos' }},
    { path: 'actividades',          component: ActividadesComponent,        data: { breadcrumb: 'Actividades' }},
    { path: 'retroalimentacion',    component: RetroalimentacionComponent,  data: { breadcrumb: 'Retroalimentacion' }},
    { path: 'ayuda',                component: AyudaComponent,              data: { breadcrumb: 'Ayuda' }},
    { path: '',                     redirectTo: '/introduccion',            pathMatch: 'full' },
    { path: '**',                   component: IntroduccionComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
