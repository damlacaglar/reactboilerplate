import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Tab2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text>Tab 2</Text>
      </View>
    );
  }
}
