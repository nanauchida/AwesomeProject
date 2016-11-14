'user strict';
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
  navBar:{
    backgroundColor: StyleVars.Colors.navBarBackground,
    borderBottomColor:"rgba(255,255,255,0.5)",
    borderBottomWidth:1
  }
  buttonStyle: { marginTop:13
  titleStyle;{marginTop: 10 }
  }
});

const NavigationBarRouteMapper = {
  LeftButton: function(route,navigator, index, navState){
  retun route.leftButton ? (
    <route.leftButton
    style=(styles.buttonStyle}
    navigator={navigator}
    route={route}
    />
  ): null;
  },
  Title: function (route, navigator, index, nabState){
    return route.title ?(
      <Text
      style={[styles.titleStyle, SharedStyles.navBarTitleText]}
      numberOfLines={1}
      >{route.title}</Text>
    ): null;
  },
  RightButtom: function (route, navigator, index, navState){
    return route.rightButtom ? (
      <route.rightButtom
      style={[styles.buttonStyle}
        navigator={navigator}
        route={route}
        />
      ) : null;
  }
};

export default class RootNavigator extends React.Component{
  render(){
    let navigationBar = (
      <Navigator.navigationBar
      routeMapper={}
      style={styles.navBar}
      />
    )

    return (
        <Navigator
        ref={(navigator)}=> this._setNavigatorRef(navigator)}
        initialRoute={this._getInitialRoute()}
        renderScene={(route, navigator) => this.renderScene(route, navigator)
        navigationBar={this,state.hideNavigationBar ? null : navigationBar} }
        >

    )<View />;
  }
}
