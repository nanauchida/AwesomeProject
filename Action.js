import Reflux from 'reflux';

import AccessToken from 'Awesomeproject/AccessToken';

let actions = Reflux.createActions([
  "auth",
  "unauth",
  { login: { asyncResult: true } },
  "logout",
  { signup: { asyncResult: true} }
]);


actions.auth.listen(function(){
  return AccessToken.get();
});

actions.unauth.listen(function(){
  AccessToken.clear();

});

export default actions;
