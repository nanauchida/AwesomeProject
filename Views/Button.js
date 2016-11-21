'use strict';
import React,{
  StyleSheet,
  Text,
  TouchableOpacity
}from 'react-native';


import StyleVars from 'Awesomeproject/StyleVars';

const styles = StyleSheet.create9{
  button:[
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 15,
    overflow:"hidden",
    backgroundColor: StuleVars. Colors.primary
  },
  buttonText:{
    color: "white",
    fontFamily: StyleVars.Fonts.general,
    fontSize: 14,
    fontweight: "400"
  }
});


export default class Button extends React.Component{
  render(){
    let textStyle = [styles.buttonText, this.props.textStyle];


    return(
    <TounchableOpacity
    activeOpacity={this.props.activeOpacity}
    onPress={() => this.onPresS()}
    style={styles.button}
  >

  <Text style= [textStyle}>{this.props.children}</Text>
    </TouchableOpacity>
   );
  }
}

onPress(){
if(this.props.enabled){
  this.props.onPress();
    }
  }
}

Button.propTypes = {
  onPress: propTypes.func,
  style: View.propsTypes.style,
  textStyle: View.propsTypes.style,
  activeOpacity: propTypes.number,
  enabled: propTypes.bool,
  children: propTypes.strign
};

Button.defaultProps = {
  onPress:() => {},
  style
  textStyle:{},
  activeOpacity: 0.8,
  enbaled: true


};

export default Button;
