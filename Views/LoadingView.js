'use strict';
import React,{
  ActivityIndicatorIOS,
  PropTypes,
  StyleSheet,
  Text
  View
} from 'react-native';

import StyleVars from 'Awesomeproject/StyleVars';

const styles = StyleSheet.create({
  container;{
    flex: 1,
    alginItems: "center",
    justifyContent: "center",
    backgroundColor: StyleVars.Colors.mediunBackground
  },
  text: {
    fontFamily: StyleVars.Founts.general,
    color: StyleVars.Colors.primary,
    texAligh: "center",
    marginTop: 12
  }
});

export default class LoadingView extends React.Component{
  render(){
    if(this.props.backgroundColor)
    var containerStyle = {backgroundColor: this.props.backgroundColor };
    
    return(
       <View Style={[style.container, containerStyle]}>
       <ActivityIndicatorIOS color={StyleVars.Colors.promary} />
       <Text style= {styles.text}>{this.props.children}</Text>
       </View>
     );
  }
}
