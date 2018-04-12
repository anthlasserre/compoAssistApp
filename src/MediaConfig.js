import React from "react";
import {Button, Text, TextInput, View} from "react-native";


export default class MediaConfig extends React.Component {
  static navigationOptions = {
    title: 'Configuration Media',
  };
  constructor(props) {
    super(props);
    this.state = {
      media: {
        background: 'http://webcoastagency.com/api/composition/ustyrosse/background.jpg',
        website: 'www.ustyrosse.com',
      }
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const numbers = this.props.navigation.state.params.numbers;
    const game = this.props.navigation.state.params.game;
    return (
      <View>
        <Button
          onPress={() =>
            navigate('Compose', {
              numbers: numbers,
              game: game,
              media: this.state.media,
            })}
          title="Étape suivante"
          color="#841584"
        />
        <Text>Background</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.media.background}
        />
      </View>

    );
  }
}