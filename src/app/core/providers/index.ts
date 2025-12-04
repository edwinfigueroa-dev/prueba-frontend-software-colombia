// Tokens
import { HTTP_CLIENT } from "@app/core/providers/http-client.token";
import { HEROE_REPOSITORY } from "@app/core/providers/heroe.token";

// Services and Repositories
import { HttpClientService } from "@app/core/services/http-client.service";
import { HeroeRepository } from "@app/features/heroes/repositories/heroe.repository";

export {
    HTTP_CLIENT,
    HEROE_REPOSITORY,
};

export const CONFIG_APP_PROVIDERS = [
    { provide: HTTP_CLIENT, useClass: HttpClientService },
    { provide: HEROE_REPOSITORY, useClass: HeroeRepository }
]