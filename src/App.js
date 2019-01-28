import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
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
        <Header headerText={"Authentication"} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
