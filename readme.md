# A simple cards slider like airbnb has

![preview.gif](https://github.com/LIU9293/react-native-cards-slider/blob/master/preview.gif)

## Autoplay (new)

    <CardSilder autoplay interval={4000}>
      {YOUR_AWESOME_CHILDREN}
    </CardSilder>

## Usage

    npm i react-native-cards-slider --save

example:

    import CardSilder from 'react-native-cards-slider';

    class example extends Component{
      render(){
        return(
          <CardSilder>
            <Image style={{height: 170}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{height: 170}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{height: 170}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{height: 170}} source={{url : 'YOU_IMAGE_URL'}} />
          </CardSilder>
        )
      }
    }

complete example in preview gif:

    import React, { Component } from 'react';
    import { Image, AppRegistry, Text, View } from 'react-native';
    import CardSilder from 'react-native-cards-slider';

    class App extends Component{
      render(){
        return(
          <View>
            <Text style={{fontSize: 30, color: '#000', marginTop:50, marginLeft:20, fontWeight:'bold'}}>
              Images
            </Text>
            <CardSilder style={{marginTop: 30}}>
              <Image style={{height: 170}} source={{url : 'YOUR_IMAGE'}} />
              <Image style={{height: 170}} source={{url : 'YOUR_IMAGE'}} />
              <Image style={{height: 170}} source={{url : 'YOUR_IMAGE'}} />
              <Image style={{height: 170}} source={{url : 'YOUR_IMAGE'}} />
            </CardSilder>
            <Text style={{fontSize: 30, color: '#000', marginTop:40, marginLeft:20, fontWeight:'bold'}}>
              Block with Text
            </Text>
            <CardSilder style={{marginTop: 30}}>
              <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                  悉尼
                </Text>
              </View>
              <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                  纽约
                </Text>
              </View>
              <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                  东京
                </Text>
              </View>
              <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                  上海
                </Text>
              </View>
            </CardSilder>
          </View>
        )
      }
    }

    AppRegistry.registerComponent('YOUR_APP_NAME', () => App);

CardSilder itself will set it's width to the device width.

So make sure you have enough space for it, and DO set a height for the children components.

Pull request welcome.
