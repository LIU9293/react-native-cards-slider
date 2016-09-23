import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
const window = Dimensions.get('window');

class CardSilder extends Component{
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
        style={[styles.scroll, this.props.style]}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
        contentOffset={{x: 0, y: 0}}
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
    marginLeft: 15,
    marginRight: 15,
    overflow: 'visible',
  },
  card: {
    width: window.width - 40,
    marginLeft: 5,
    marginRight: 5,
  }
})

module.exports = CardSilder
