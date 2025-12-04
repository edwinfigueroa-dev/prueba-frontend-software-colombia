import { Component, inject } from '@angular/core';
import { HeroeService } from '@app/features/heroes/services/heroe.service';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  private _heroeService = inject(HeroeService);

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._heroeService.getAll().subscribe({
      next: (response) => {
        console.log(response);
        // this.structureTable.data = funds;
        // this.isLoadingTable.set(false);
      },
      error: (error) => {
        console.log(error);
        // this.isLoadingTable.set(false);
      }
    });
  }
}
