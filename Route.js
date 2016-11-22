'use strict';
import Home from 'Awesomeproject/Screens/Home';
import Login from 'Awesomeproject/Screens/Login';
import LogoutButton from 'Awesomeproject/Views/LogoutButton';
import PostButton from 'Awesomeproject/Views/LogoutButton';

class Routes {
  get(route, args){
    if("underfined" == typeof this[route]){
      console.warn("No route found with name: " + route);
      return false;
    }else{
      return this[route].call(this, args);
    }
  }

  home(){
   return {
    name: "home",
    title: "Tuts + Awesomeproject",
    Component: Home,
    leftButton: LogoutButton,
    rightButtom: post,
    hideNavigationBar: false,
    StatusBarStyle: "Light-content"
   }
  }

  login() {
    return {
      name: "home",
      title: "Tuts+ Awesomeproject",
      componet: Home,
      leftButton: LogoutButton,
      rightButtom: PostButton,
      hideNavigationBar: false,
      StatusBarStyle: "Light-content"
    }
  }

  login(){
    return{}
  }
}

export default new Routes()
