import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
		    config: {
		      url: 'https://keycloak.radixfs.com/auth',
		      realm: 'development',
		      clientId: 'portal-ui'
		      }
		    initOptions: {
		      onLoad: 'login-required'
		    }
		 });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}