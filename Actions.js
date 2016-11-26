import Reflux from 'refulx';

import AccessToken from'Awesomeproject/AccessToken';

let actions = Reflux.createActions([
  "auth",
  "unauth",
  { login:{ asynResult: true} },
  "logout",
  {signup: { asynResult: true} },
  loadUser: { asyncResault: true} }
]);

actions.auth.listen(function(){
   return AccessToken.get();
   .then(token)=.
});

actions.unauth.listen(function (){
  AccessToken.clear();
});

export default actions;
