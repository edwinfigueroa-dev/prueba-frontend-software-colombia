import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./features").then(c => c.Features),
        children: [
            {
                path: 'heroes',
                loadChildren: () => import('./heroes/heroe.routes').then(r => r.routes),
            },
            {
                path: '**',
                redirectTo: 'heroes',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
