import { InjectionToken } from '@angular/core';
import { IHeroeRepository } from '@app/features/heroes/domain/heroe-repository.interface';

export const HEROE_REPOSITORY = new InjectionToken<IHeroeRepository>('HEROE_REPOSITORY');
