import { Observable } from 'rxjs';
import { Heroe } from '@app/features/heroes/domain/heroe-api.interface';

export interface IHeroeRepository {
    getAll(pagination: { size?: number; page?: number }): Observable<Heroe[]>;
    getById(id: number): Observable<Heroe>;
}