import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./views/heroes-list/heroes-list").then(c => c.HeroesList),
    },
    {
        path: 'detail',
        loadComponent: () => import("./views/heroes-detail/heroes-detail").then(c => c.HeroesDetail),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
