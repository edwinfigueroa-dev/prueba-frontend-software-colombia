import { Observable } from 'rxjs';
import { ResponseHeroeApi, Heroe } from '@app/features/heroes/domain/heroe-api.interface';

export interface IHeroeRepository {
    getAll(pagination: { size: number; page: number }): Observable<ResponseHeroeApi[]>;
    getById(id: number): Observable<Heroe>;
}