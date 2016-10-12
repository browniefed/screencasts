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
    this.boxAnimation = new Animated.Value(1);

    setTimeout(() => this.boxAnimation.setValue(.2), 1000);
  }
  
  render() {
    const animationStyles = { opacity: this.boxAnimation };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animationStyles]} />
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
    height: 100,
  }
});

AppRegistry.registerComponent('AnimatedBox', () => AnimatedBox);
