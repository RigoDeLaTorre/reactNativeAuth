import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      // Initialize Firebase

      apiKey: "AIzaSyDIQId2kGhyGZJ6HJt8EbqTh4gNX6a9bW4",
      authDomain: "authentication-8bb0c.firebaseapp.com",
      databaseURL: "https://authentication-8bb0c.firebaseio.com",
      projectId: "authentication-8bb0c",
      storageBucket: "authentication-8bb0c.appspot.com",
      messagingSenderId: "71756351351"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
