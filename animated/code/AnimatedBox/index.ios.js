import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class AnimatedBox extends Component {
  
  componentWillMount() {
    this.animatedOpacity = new Animated.Value(1);

    Animated.timing(this.animatedOpacity, {
      toValue: .2,
      duration: 1000
    }).start();
  }
  
  render() {
    const animatedStyle = { opacity: this.animatedOpacity };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('AnimatedBox', () => AnimatedBox);
