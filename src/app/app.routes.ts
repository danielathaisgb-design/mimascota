import { Routes } from '@angular/router';
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';

export const routes: Routes = [
    {path: '', redirectTo: 'nosotros', pathMatch: 'full'},
    {path: 'nosotros', component:Nosotros},
    {path: 'servicios', component:Servicios},
];
