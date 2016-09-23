# A simple cards slider like airbnb has

## usage

    npm i react-native-cards-slider --save

example:

    import CardSilder from 'react-native-cards-slider';

    class example extends Component{
      render(){
        return(
          <CardSilder>
            <Image style={{flex:1}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{flex:1}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{flex:1}} source={{url : 'YOU_IMAGE_URL'}} />
            <Image style={{flex:1}} source={{url : 'YOU_IMAGE_URL'}} />
          </CardSilder>
        )
      }
    }

CardSilder it self will set it's width to the device width,
So make sure you have enough space for it.

Pull request welcome
