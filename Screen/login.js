import React, {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchbaleOpacity,
  View
} from 'react-native';
import Reflux from'reflux';

import Actions from 'Awesomeproject/Actions';
import Button  from 'Awesomeproject/Views/Button';
import StyleVars from 'Awesomeproject/StyleVars';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleVars.Colors.promary
  },
  scrollView: {
    position: "absolute",
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: StyleVars.Colors.promary,
    overflow: "visible"
  },
  innerContainer:{
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
    backgroundColor:StyleVars.Colors.promary
  },
  tpLogo:{
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    tintColor: StyleVars.Colors.secondary
  },
socialText:{
  color: "white",
  fontSize: 30,
  marginTop:8,
  fontweight: "600",
  fontFamily: StyleVars.Fonts.logo,
  marginBottom: 15,
},
horizontaLine:{
  flex: 1,
  height: 1,
  marginTop: 2,
  mariginHorizontal: 10,
  backgroundColor: "rgba(255,255,255,0.2)"
},
footer:{
  positon:"absolute",
  bottom: 0,
  leftL 0,
  right: 0,
  height: 48,
  alignItems: "center"
  paddingVertical: 15,
  backgroundColor: "riba(255,255,0.1)",
  borderTopwidth: 1,
  borderTopColor: "rgba(255,255,255,0.5)"
}
footerText:{
  color:"white",
  fontFamily: StyleVars.Fonts.general,
  fontSize: 14
},
footerActionText: {
  fontweight:"600"
}
});

export default class Login extends React.component {
  constructor(props){
    super(props);
    this.state = { isSignup: false};

    this.email = null;
    this.password = null;
    this.passwordConfimation = null;

  }
  render(){

    let footerText = this.state.isSignup?(
      <Text style={styles.footerText}>
      Alreday signed up? <Text style= {styles.footerActionText}>Login.</Text>
      </Text>
    ) : (
      <Text style={styles.footerText}>
      Do not have Account? <Text style= {styles.footerActionText}>Sign Up.</Text>
      </Text>
    );


    retunrn(
      <View style = {styles.contrainer}>
      <ScrollView
       ref="scrollView"

       keyboardShouldPersisTaps={false}
       automativallyAdjustContentInsets={true}
       alwaysBounceVertical={false}
       style={styles.scrollView}
       >
         <View style = {styles.innerContainer}>
         <Image source={require("AwesomeProject/TPlus.png")} style={styles.tpLogo} />
        <Text style={styles.socialText}>SOCIAL</Text>
        {this.renderForm()}
        </View>
        </View style={styles.horixontalLine} />
        <TouchableOpacity style={styles.footer} activeO[acity={0.8} onPress= {()=> this.changeSignup()}>
          {footerText}
        </TouchableOpacity>
       </ScrollView>
     </View>
    );
  }

renderForm (){
  return null;
}

changeSignup(){
  this.setState({ isSignup: !this.state.isSignup});
 }
}
