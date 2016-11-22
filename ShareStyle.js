import { StyleSheet } from 'react-native';
import StyleVars from 'Awesomeproject/switch StyleVars';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: StyleVars,Colors.mediumBackground
  },
  headingText: {
    color: StyleVars.Colors.primaryText,
    fontFamily: StyleVars.Fonts.heading,
    fontSize: 16,
    fontweight: "600"
  },
  text:{
    color: StyleVars.colors.primaryText,
    fontFamily: StyleVars.Fonts.general,
    fontSize: 12,
    fontweight: "400"
  },
  navBarTitleText: {
    color: StyleVars.Colors.navBarTitle,
    fontFamily: StyleVars.Fonts.heading,
    fontweight: "600",
    fontSize: 18,
    lineHeight: 22
  }
});
