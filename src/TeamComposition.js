import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default class TeamComposition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: {
        one: 'Numéro 1',
        two: 'Numéro 2',
        three: 'Numéro 3',
        four: 'Numéro 4',
        five: 'Numéro 5',
        six: 'Numéro 6',
        seven: 'Numéro 7',
        eight: 'Numéro 8',
        nine: 'Numéro 9',
        ten: 'Numéro 10',
        eleven: 'Numéro 11',
        twelve: 'Numéro 12',
        thirteen: 'Numéro 13',
        fourteen: 'Numéro 14',
        fifteen: 'Numéro 15',
        sixteen: 'Numéro 16',
        seventeen: 'Numéro 17',
        eighteen: 'Numéro 18',
        nineteen: 'Numéro 19',
        twenty: 'Numéro 20',
        twentyOne: 'Numéro 21',
        twentyTwo: 'Numéro 22',
        twentyThree: 'Numéro 23',
      }
    };
  }
  static navigationOptions = {
    title: 'HomePage',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <Button
            onPress={() =>
              navigate('LastCompositions', {
                numbers: this.state.numbers,
              })}
            title="Dernières Compositions"
            color="#841584"
          />
          <Button
            onPress={() =>
              navigate('GameConfig', {
                numbers: this.state.numbers,
              })}
            title="Étape suivante"
            color="#841584"
          />

        </View>
        <ScrollView style={{marginBottom:150}}>
        <Text>1</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.one}
        />
        <Text>2</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.two}
        />
        <Text>3</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.three}
        />
        <Text>4</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.four}
        />
        <Text>5</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.five}
        />
        <Text>6</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.six}
        />
        <Text>7</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.seven}
        />
        <Text>8</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.eight}
        />
        <Text>9</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.nine}
        />
        <Text>10</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.ten}
        />
        <Text>11</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.eleven}
        />
        <Text>12</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.twelve}
        />
        <Text>13</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.thirteen}
        />
        <Text>14</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.fourteen}
        />
        <Text>15</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.fifteen}
        />
        <Text>16</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.sixteen}
        />
        <Text>17</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.seventeen}
        />
        <Text>18</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.eighteen}
        />
        <Text>19</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.nineteen}
        />
        <Text>20</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.twenty}
        />
        <Text>21</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.twentyOne}
        />
        <Text>22</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.twentyTwo}
        />
        <Text>23</Text>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 0.25}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.numbers.twentyThree}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:100,
  },
  header:{
    // flex:1,
    paddingTop:35,
    paddingBottom:5,
    backgroundColor:'#ffb8be',
    alignItems:'center',
  },
  text: {

  }
});
