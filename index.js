import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
const window = Dimensions.get('window');

class CardSilder extends Component{
  constructor(props){
    super(props);
    this.state = {
      numOfCards: this.props.children.length,
      position: 1,
    }
    this.next = this.next.bind(this);
    this.scroll = this.scroll.bind(this);
    this.canAutoMove = true;
    this.t = null;
  }
  componentWillMount(){
    if(this.props.autoplay){
      this.t = setInterval(()=>{
        this.next()
      }, this.props.interval || 3000)
    }
  }
  componentWillUnmount(){
    if(this.t){
      clearInterval(this.t);
    }
  }
  next(){
    if(this.canAutoMove){
      this.slider.scrollTo({x: (window.width - 30) * this.state.position})
    }
  }
  scroll(e){
    this.canAutoMove = false;
    let offsetX = e.contentOffset.x;
    let page = parseInt(offsetX/(window.width-30));
    if(page == this.state.numOfCards - 1){
      this.setState({position: 0})
    } else {
      this.setState({position: page + 1})
    }
    setTimeout(()=>{
      this.canAutoMove = true;
    }, 1000)
  }
  render(){
    let cards;
    if(this.props.children.length > 1){
      cards = this.props.children.map((item, ii)=>{
        return(
          <View style={styles.card} key={ii}>
            {item}
          </View>
        )
      })
    } else {
      cards = <View style={styles.card}>
                {this.props.children}
              </View>
    }
    return(
      <ScrollView
        {...this.props}
        ref={slider => this.slider = slider}
        style={[styles.scroll, this.props.style]}
        onScroll={e => this.scroll(e.nativeEvent)}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={20}
      >
        {cards}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: window.width - 30,
    marginHorizontal: 15,
    overflow: 'visible',
  },
  card: {
    width: window.width - 40,
    marginHorizontal: 5,
  }
})

module.exports = CardSilder
