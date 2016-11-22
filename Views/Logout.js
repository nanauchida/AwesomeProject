'use strict'
import React,{
  Text,
  TouchableOpacity
}from 'react-native';

export default class LogoutButton extends React.Coponent{
  render(){
    let style = { marginLeft: 10, color: "white"};

    return (
      <TouchableOpacity style={this.props.style}
      style={this.props.style}
      activeOpacity={0.5}
      onPress= {() => this.onPress()}
      >
      <Text style={style}>Logout</Text>
      </TouchableOpacity>
    );
  }

  onPress(){
    //TODO; Log user out of the application, and redirect to login screen
  }
}
