import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

export default class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }

    fetch("https://api.darksky.net/forecast/5a7b049e69faff605d4906744cbee929/45.523220,-122.668752")
      .then((res) => res.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.section}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={require("./sleet.png")} style={styles.image}/>
          <Text style={styles.header}>{this.state.data.currently.summary}</Text>
        </View>
        <View style={[styles.section, styles.lowerSection]}>
          <Text style={styles.itemText}>Temperature: {this.state.data.currently.temperature}</Text>
          <Text style={styles.itemText}>Humidity: {this.state.data.currently.humidity}</Text>
          <Text style={styles.itemText}>Wind Speed: {this.state.data.currently.windSpeed}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },
  image: {
    width: 200,
    height: 200,
  },  
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerSection: {
    flex: 2,
    justifyContent: "flex-start"
  },
  header: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold"
  },
  itemText: {
    color: "#FFF",
    fontSize: 18,
    marginVertical: 10,
  }
})

AppRegistry.registerComponent('AnimatedBox', () => Forecast);
