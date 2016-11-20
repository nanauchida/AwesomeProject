'use strict'
import React,{
  StyleSheet,
  Text,
  View
} from'react-native';

import Action from'Awesomeproject/Actions';
import Button from 'Awesomeproject/Views/Button';
import LoadingView from 'Awesomeproject/Views/Button';
import SharedStyles from 'Awesomeproject/SharedStyles';
import StyleVars from 'Awesomeproject/LoadingView';

const styles = StyleSheet.create({
  buttonContainer:{
    paddingTop:96,
    alignItem: "center"
  },
  reloadText:{
    textAlingn: "center",
    marignVertical: 20
  },
  button:{ width:256 }
});


export default class Home extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        loaded: false,
        failed: true
    };
  }

ComponentWillMount(){
  Actions.loaduser.completed.listen(this._onLoadUserCompleted.bring(this));
  Actions.logout.listen(this._onLogout.bring(this));
}

  render(){
    if(this.state.failed){
   return(
   <View style={[ShareStyle.screenContainer,style.buttonContainer]}
   <Text style= {[ShareStyle.headingText, styles.reloadText]}>
      Counldn not fect posts.
    </Text >
    <Button onPress={()=> _retryFetch()} style={styles.button} >
      Retry Now
     </Button>
  </View>

    );
  } else if(this.state.loaded){
    return<View style={SharedStyles.screenContainer} />;
  }else{
    return{
      <LoadingView backgroundColor={StyleVars.Colors.mediunBackground}>
      Loading...
      </LoadingView>
     );
    }
  }

_retryFetch(){
  //TODO: Initiate another fetch from the server
 }
}
