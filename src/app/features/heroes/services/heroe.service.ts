import { Injectable, Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroeRepository } from '@app/features/heroes/domain/heroe-repository.interface';
import { HEROE_REPOSITORY } from '@app/core/providers';
import { Heroe } from '../domain/heroe-api.interface';

@Injectable({ providedIn: 'root' })
export class HeroeService {
    private _heroeRepository: IHeroeRepository = inject(HEROE_REPOSITORY);

    getAll(query = { size: 10, page: 1 }) {
        return this._heroeRepository.getAll(query);
    }

    getById(id: number) {
        return this._heroeRepository.getById(id);
    }
}
