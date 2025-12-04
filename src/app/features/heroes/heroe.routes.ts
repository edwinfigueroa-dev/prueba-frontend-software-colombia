import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./views/heroes-list/heroes-list").then(c => c.HeroesList),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
