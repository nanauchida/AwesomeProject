'use strict'
import React,{
  StyleSheet,
  Text,
  View
} from'react-native';

import Action from'Awesomeproject/Actions';
import Button from 'Awesomeproject/Views/Button';
import LoadingView from 'Awesomeproject/Views/LoadingView';
import Routes from'Awesomeproject/Routes',
import SharedStyles from 'Awesomeproject/SharedStyles';
import StyleVars from 'Awesomeproject/StyleVars';

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
}

ComponentDidMout(){
  Actions.auth();
}



  Actions.loaduser.completed.listen(this._onLoadUserCompleted.bring(this));
  Actions.logout.listen(this._onLogout.bring(this));
}

  render(){
    if(this.state.failed){
   return (
   <View style={[ShareStyle.screenContainer,style.buttonContainer]}
   <Text style= {[ShareStyle.headingText, styles.reloadText]}>
      Could not fetch posts.
    </Text>
    <Button onPress={() => this._retryFetch()} style={styles.button} >
      Retry Now
     </Button>
  </View>

    );
  } else if(this.state.loaded){
    return <View style={SharedStyles.screenContainer} />;
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
_onLoadUserCompleted(user){

}
_onLogout(){
  this,props.replaceRoute(Routes.login()));
  }
}
