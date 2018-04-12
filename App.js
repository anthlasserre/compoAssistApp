import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Pages
import TeamComposition from "./src/TeamComposition";
import GameConfig from "./src/GameConfig";
import MediaConfig from "./src/MediaConfig";
import Compose from "./src/process/Compose";
import LastCompositions from "./src/LastCompositions";

const Navigator = StackNavigator({
      TeamComposition: { screen: TeamComposition,
        navigationOptions: {
          title: 'Composition Assistant'
        }
      },
      GameConfig: { screen: GameConfig },
      MediaConfig: { screen: MediaConfig },
      Compose: { screen: Compose },
      LastCompositions: { screen: LastCompositions}
});

class App extends React.Component {
  render(){
    return(
        <Navigator/>
    )
  }
}

export default App;