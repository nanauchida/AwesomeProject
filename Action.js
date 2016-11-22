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
  return AccessToken.get()
     .then((token)=> actions.login(token))
     .catch ((err) => actions.logout());


});

actions.unauth.listen(function(){
  AccessToken.clear();

});

export default actions;
