import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { ListaCapitulosComponent } from './pages/capitulos/lista-capitulos/lista-capitulos.component';
import { Cap1Component } from './pages/capitulos/cap1/cap1.component';
import { Cap2Component } from './pages/capitulos/cap2/cap2.component';
import { Cap3Component } from './pages/capitulos/cap3/cap3.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';



const appRoutes: Routes = [
    { path: 'introduccion',         component: IntroduccionComponent,       data: { breadcrumb: 'Introduccion' }},
    { path: 'capitulos',            component: CapitulosComponent,          data: { breadcrumb: 'Capitulos' },
        children: [
            { path: '', component: ListaCapitulosComponent, data: { breadcrumb: 'Lista'} },
            { path: 'lista', component: ListaCapitulosComponent, data: { breadcrumb: 'Lista'} },
            { path: 'cap1',  component: Cap1Component, data: { breadcrumb: 'capitulo 1'} },
            { path: 'cap2',  component: Cap2Component, data: { breadcrumb: 'capitulo 2'} },
            { path: 'cap3',  component: Cap3Component, data: { breadcrumb: 'capitulo 3'} }
        ]
    },
    { path: 'actividades',          component: ActividadesComponent,        data: { breadcrumb: 'Actividades' }},
    { path: 'retroalimentacion',    component: RetroalimentacionComponent,  data: { breadcrumb: 'Retroalimentacion' }},
    { path: 'ayuda',                component: AyudaComponent,              data: { breadcrumb: 'Ayuda' }},
    { path: '',                     redirectTo: '/introduccion',            pathMatch: 'full' },
    { path: '**',                   component: IntroduccionComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
