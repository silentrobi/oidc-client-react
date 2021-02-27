const configuration = {
  client_id: 'blogapp',
  client_secret: 'TYYvyjrJ4GThugsYGwnyEh2m63Tr7yyPk6YVwBb6',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile  blogapi.read blogapi.write',
  authority: 'http://localhost:5010',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;