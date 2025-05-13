const oktaConfig = {
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID as string,
  issuer: `https://${import.meta.env.VITE_OKTA_DOMAIN}.okta.com/oauth2/default`,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

export default oktaConfig;
