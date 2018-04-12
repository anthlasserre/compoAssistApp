import React from "react";
import {Button, Text, TextInput, View} from "react-native";

export default class LastCompositions extends React.Component {
  static navigationOptions = {
    title: 'Dernières Compositions',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Background</Text>
      </View>

    );
  }
}