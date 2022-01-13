import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../../firebase";
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
  }

  signOutHandler = () =>{
      auth.signOut().then(x=>this.props.navigation.navigate("Login")).catch(error=>{
          console.log(error.message);
      });
  }

  render() {
    return (
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text>Tab 3 </Text>
        
        <TouchableOpacity onPress={this.signOutHandler}>
            <Text>Çıkış Yap</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
