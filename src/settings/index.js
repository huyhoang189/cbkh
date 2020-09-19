export default {
  apiUrl: 'http://134.122.31.31:9000/secured/ws/rest/v1'
};
const siteConfig = {
  siteName: 'DB CBKH',
  siteIcon: 'ion-flash',
  footerText: 'Designed by hhoangg.it 2020'
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault'
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};
const Auth0Config = {
  domain: '',
  clientID: '',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      redirect: true,
      redirectUrl: 'http://localhost:3000/auth0loginCallback'
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo'
    },
    theme: {
      labeledSubmitButton: true,
      logo: '',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000'
        }
      }
    }
  }
};
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
const googleConfig = {
  apiKey: '' //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: []
};
const youtubeSearchApi = '';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi
};
