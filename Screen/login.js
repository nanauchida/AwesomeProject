import React,{
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

const style = StyleSheet.create({});

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
