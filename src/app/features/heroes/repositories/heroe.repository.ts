import { Injectable, Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpClient } from '@app/core/interfaces/http-client.interface';
import { HTTP_CLIENT } from '@app/core/providers';
import { ResponseHeroeApi, Heroe } from '@app/features/heroes/domain/heroe-api.interface';
import { IHeroeRepository } from '@app/features/heroes/domain/heroe-repository.interface';
import { environment } from '@environments/environment';

@Injectable()
export class HeroeRepository implements IHeroeRepository {
  private _httpClient: IHttpClient = inject(HTTP_CLIENT);

  getAll({ size, page }: { size: number, page: number }): Observable<ResponseHeroeApi> {
    return this._httpClient.get<ResponseHeroeApi>(`${environment.API_URL}/heroes?size=${size}&page=${page}`);
  }

  getById(id: number): Observable<Heroe> {
    return this._httpClient.get<Heroe>(`${environment.API_URL}/hero?id=${id}`);
  }
}
