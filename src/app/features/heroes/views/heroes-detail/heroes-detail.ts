import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '@app/features/heroes/services/heroe.service';
import { Spinner } from '@app/shared/components/spinner/spinner';
import { AngularModule } from '@app/shared/modules';
import { Heroe } from '../../domain/heroe-api.interface';

// Material
import { MatIconModule } from '@angular/material/icon';

interface PaginatorState { pageIndex: number; pageSize: number; length: number, previousPageIndex: number; }

@Component({
  selector: 'app-heroes-detail',
  imports: [AngularModule, Spinner, MatIconModule],
  templateUrl: './heroes-detail.html',
  styleUrl: './heroes-detail.scss',
})
export class HeroesDetail {
  private _activatedRoute = inject(ActivatedRoute);
  private _heroeService = inject(HeroeService);
  private _router = inject(Router);

  isLoading = signal(true);
  existError = signal(false);
  heroe: Heroe | null = null;

  public powerStatsArray: { name: string, value: number }[] = [];
  private paginatorState: PaginatorState | null = null; 

  ngOnInit() {
    if(history.state?.paginatorState) {
      this.paginatorState = history.state?.paginatorState ?? null;
      history.replaceState({}, '');
    }
    this._activatedRoute.queryParams.subscribe(params => {
      const id: number = Number(params['id']);
      if (id) this.getHeroeById(id);
    });
  }

  getHeroeById(id: number) {
    this._heroeService.getById(id).subscribe({
      next: (response) => {
        this.heroe = response && Object.keys(response).length > 0 ? response : null;
        if (this.heroe?.powerstats) {
          // Usa Object.entries() para convertir el objeto en un array de arrays [[clave, valor], ...]
          this.powerStatsArray = Object.entries(this.heroe.powerstats).map(([key, value]) => ({
            name: key,
            value: value! // El '!' asume que el valor es un número y no nulo/undefined
          }));
        }
        this.existError.set(false);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.log(error);
        this.existError.set(false);
        this.isLoading.set(false);
      }
    });
  }

  goBack() {
    this._router.navigate(["heroes"], {
      state: { paginatorState: { ...this.paginatorState } }
    });
  }
}
