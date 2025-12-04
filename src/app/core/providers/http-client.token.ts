import { InjectionToken } from '@angular/core';
import { IHttpClient } from '@app/core/interfaces/http-client.interface';

export const HTTP_CLIENT = new InjectionToken<IHttpClient>('HTTP_CLIENT');
