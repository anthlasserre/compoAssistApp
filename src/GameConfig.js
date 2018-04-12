import React from "react";
import {Button, Text, TextInput, View} from "react-native";


export default class GameConfig extends React.Component {
  static navigationOptions = {
    title: 'Configuration Match',
  };
  constructor(props) {
    super(props);
    this.state = {
      game: {
        homeTeam: 'US Tyrosse',
        visitTeam: 'Anglet',
        competition: 'Fédérale 1',
        gameSponsor: 'Pro Sport Concept',
        date: 'Dimanche 8 Avril | 15h30',
        location: 'Stade de La Fougère - St Vincent de Tyrosse'
      }
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const numbers = this.props.navigation.state.params.numbers;
    return (
      <View>
        <Button
          onPress={() =>
            navigate('MediaConfig', {
              numbers: numbers,
              game: this.state.game,
            })}
          title="Étape suivante"
          color="#841584"
        />
        <Text>Équipe Domicile</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.homeTeam}
        />
        <Text>Équipe Extérieure</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.visitTeam}
        />
        <Text>Compétition</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.competition}
        />
        <Text>Sponsor du Match</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.gameSponsor}
        />
        <Text>Date du Match</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.date}
        />
        <Text>Localisation du Match</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.game.location}
        />
      </View>

    );
  }
}