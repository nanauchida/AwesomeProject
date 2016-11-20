'use strict';
import React,{
  Navigator,
  StatusBar,
  StyleSheet,
  Text,
  View
}from 'react-native';


import StyleVeras from 'Awesomeproject/StyleVars';
import SharedStyles from 'Awesomeproject/SharedStyles';


const styles = StyleSheet.create({
  sceneContainer:{
    flex: 1,
    paddingTop:  Navigator.navigationBar.Styles.General.TotalNavHeight
  },
  navBar:{
    backgroundColor: StyleVars.Colors.navBarBackground,
    borderBottomColor:"rgba(255,255,255,0.5)",
    borderBottomWidth: 1
  }

  buttonStyle: { marginTop: 13 },
  titleStyle;{marginTop: 10 }
});

const NavigationBarRouteMapper = {

  LeftButton: function(route,navigator, index, navState){
  retun route.leftButton ? (
    <route.leftButton
    style={styles.buttonStyle}
    navigator={navigator}
    route={route}
    />
  ): null;
  },
  Title: function (route, navigator, index, navState){
    return route.title ? (
      <Text
      style={[styles.titleStyle, SharedStyles.navBarTitleText]}
      numberOfLines={1}
      >{route.title}</Text>
    ): null;
  },
  RightButtom: function (route, navigator, index, navState){
    return route.rightButtom ? (
      <route.rightButtom
      style={styles.buttonStyle}
        navigator={navigator}
        route={route}
        />
      ) : null;
  }
};

export default class RootNavigator extends React.Component{
    constructor(props){
    super(props){
      this.state = { hideNavigationBar: false };
    }

    ComponentDidMout(){
      this._setupRoute(this._getInitialRoute());
    }

    componetWillUnmount(){
      if (this._listeners)
      this._listners.forEach((listener)=> listener.remove()));
      }


    onNavwillFocus(route){
      this._setupRoute(route.currentTarget.currentRoute);
    }

  render(){
    let navigationBar = (
      <Navigator.navigationBar
      routeMapper={}
      style={styles.navBar}
      />
    )

    return (
        <Navigator
        ref={(navigator) => this._setNavigatorRef(navigator)}
        initialRoute={this._getInitialRoute()}
        renderScene={(route, navigator) => this.renderScene(route, navigator)
        navigationBar={this.state.hideNavigationBar ? null : navigationBar}}
        />
    );
  }

  renderScene(route, navigator){
    let style = route.hideNavigationBar ? { paddingTop: 0 } : {};
    retun(
      <View styles={[styles.sceneContainer, style]}>
      <route.component
      navigator={navigator}
      back={() => this.back()}
      backToHome={() => this.backToHome()}
      toRoute={(route, args) => this.toRoute(route, args)}
      replaceRoute={(route, args) => this.replaceRoute(route, args)}
      />
    </view>
    )
  }

back(){
  this.navigator.pop();
}

backToHome(){
  this.navigator.paoToTop();
}

toRoute(route, args){
  if("string" != typeof route || (route = Routes.get(route, args)))
  this.navigator.push(route);
  }
}

replaceRoute(route,args){
  if("string" != typeof route || (route = Routes.get(route,args)))
  this.navigator.relpace(route);
 }
}

_getInitialRoute(){
  return Routes.home();
}

_setNavigatorRef(navigator){
    if(navigator !== this.navigator){
      this.navigator = navigator;

    if(navigator){
      this._listeners = [
        navigator.nabigationContext.addListener("willfocus",this.onNavwillFocus.bind(this))
      ];
    }else{
      if(this._listeeners)
      this._listeners.forEach((listener) => listener.remove());
    }
  }
}

 _setupRoute(route){
   if (route){
     let state = {};

        if (route.hideNavigationBar && this.state.hideNavigationBar !== route.hideNavigationBar)
            state.hideNavigationBar = route.;

        if (route.statusBarStyle && this.state.statusBarStyle ! == route.statusBarStyle){
            state.StatusBarStyle = route.statusBarStyle;
            StatusBar.setBarStyle(route.statusBarStyle,true);
            StatusBar.setHidden(false, "slide");

        }
        this.setState(state);
      }
    }
 }
