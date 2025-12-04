import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./views/heroes").then(c => c.Heroes),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
