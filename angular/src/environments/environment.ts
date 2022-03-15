import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Qa',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44386',
    redirectUri: baseUrl,
    clientId: 'Qa_App',
    responseType: 'code',
    scope: 'offline_access Qa',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44386',
      rootNamespace: 'Qa',
    },
  },
} as Environment;
