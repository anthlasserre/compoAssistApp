import React from "react";
import {Button, Image, ImageBackground, Text, TextInput, View} from "react-native";
export default class Compose extends React.Component {
  static navigationOptions = {
    title: 'Composition',
  };

  render() {
    const { navigate } = this.props.navigation;
    const numbers = this.props.navigation.state.params.numbers;
    const game = this.props.navigation.state.params.game;
    const media = this.props.navigation.state.params.media;


    return (
      <View
      style={{flex:1}}
      >
        <ImageBackground
        source={{uri: "https://webcoastagency.com/api/composition/ustyrosse/background.jpg"}}
        style={{height:'100%',width:'100%'}}>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            height:60,
            }}>
            <View style={{width: 50, height: 50,}}>
              <Image
                source={{uri: "https://scorenco.com/media/club_pictures/2017/09/30/us-tyrosse-9d5cf1c1ae944f409dccb06c039fc9e8.jpg"}}
                style={{height:70,width:undefined,resizeMode:'center'}} />
            </View>

            <View style={{width: 50, height: 50,}}>
            <Image
              source={{uri: "https://scorenco.com/media/club_pictures/2017/10/19/anglet-olympique-110aadd2081b4194ad708338fba7487a"}}
              style={{height:70,width:undefined,resizeMode:'center'}} />
            </View>
            <View style={{width: 100, height: 100,paddingTop:25}}>
              <Text style={{color:'white',fontWeight:'bold'}}>FÉDÉRALE 1</Text>
            </View>
            <View style={{flex:1,flexDirection:'column',width: 100, height: 200,}}>
              <Text style={{color:'white',fontSize:10}}>La composition présentée par</Text>
              <Image
                source={{uri: "http://prosportconcept.com/wp-content/uploads/2015/11/logo_laformation.jpg"}}
                style={{height:40,width:undefined,resizeMode:'center'}} />
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            paddingLeft:20,
            paddingRight:20,
          }}>
            <View style={{width: 50, height: 50,marginTop:10}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Chasseur.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>14</Text>
            </View>
            <View style={{width: 50, height: 50,marginTop:20}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Ducom.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>13</Text>
            </View>
            <View style={{width: 50, height: 50,}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Durquet.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>15</Text>
            </View>
            <View style={{width: 50, height: 50,marginTop:20}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Descazaux.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>12</Text>
            </View>
            <View style={{width: 50, height: 50,marginTop:10}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Sarthou.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>11</Text>
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            paddingTop:30,
            paddingLeft:100,
            paddingRight:100,
          }}>
            <View style={{width: 50, height: 50,marginTop:10}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Argel.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>10</Text>
            </View>
            <View style={{width: 50, height: 50,marginTop:20}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Dubert.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>9</Text>
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            paddingTop:10,
            paddingLeft:30,
            paddingRight:30,
          }}>
            <View style={{width: 50, height: 50,marginTop:10}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Lafitte.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>7</Text>
            </View>
            <View style={{width: 50, height: 50,}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Lesbats.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>8</Text>
            </View>
            <View style={{width: 50, height: 50,marginTop:10}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Visensang_T.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>6</Text>
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            // paddingTop:30,
            paddingLeft:100,
            paddingRight:100,
          }}>
            <View style={{width: 50, height: 50}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Lemes_Vieira.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>5</Text>
            </View>
            <View style={{width: 50, height: 50}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Kahn_K.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>4</Text>
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            paddingTop:10,
            paddingLeft:30,
            paddingRight:30,
          }}>
            <View style={{width: 50, height: 50}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Lagain.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>3</Text>
            </View>
            <View style={{width: 50, height: 50,}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Brissot.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>2</Text>
            </View>
            <View style={{width: 50, height: 50}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Hontebeyrie.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>1</Text>
            </View>
          </View>

          <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop:30,
            paddingLeft:10,
            paddingRight:10,
          }}>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Belestin_M.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>16</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Georgiades.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>17</Text>
            </View>
            <View style={{width: 40, height: 40,}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Montois.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>18</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Fabre.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>19</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Visensang_M.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>20</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Barbe.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>21</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Lasserre.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>22</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                source={{uri: "http://www.ustyrosse.com/images/Equipes/2017_2018/Seniors/Fed1/Van_Staden.jpg"}}
                style={{height:80,width:undefined,resizeMode:'center'}}
              />
              <Text style={{color:'white',textAlign:'center'}}>23</Text>
            </View>
          </View>

          <View style={{paddingTop:80,paddingLeft:20}}>
            <Text style={{color:'white'}}>Dimanche 8 Avril | 15h30</Text>
            <Text style={{color:'white'}}>Domicile</Text>
            <Text style={{color:'white'}}>www.ustyrosse.com</Text>
            <Text style={{color:'white'}}>Stade de la Fougère - St Vincent de Tyrosse</Text>
          </View>

        </ImageBackground>
      </View>

    );
  }
}