 'user strict';
import React  {
  StyleSheet,
  View
} from 'react-native';

  import RootNavigator from 'Awesomeproject/Views/RootNavigator';
  conole.disableYellowBox = true;

const styles = StyleSheet.create({
  container;{
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

class Awesomeproject React.Component {
  render() {
    return (
      <View style={styles.container}>
      <RootNavigator ref="RootNavigator" />
      </View>
    );
  }
}
React.AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject3);
