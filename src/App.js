import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
// import firebase from "@firebase/app";
// import "@firebase/auth";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDIQId2kGhyGZJ6HJt8EbqTh4gNX6a9bW4",
      authDomain: "authentication-8bb0c.firebaseapp.com",
      databaseURL: "https://authentication-8bb0c.firebaseio.com",
      projectId: "authentication-8bb0c",
      storageBucket: "authentication-8bb0c.appspot.com",
      messagingSenderId: "71756351351"
    });
    // if user will have an object if they are signed inspect.
    // if user signs out, this will return undefined or null
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
    //
  }

  signUserOut = () => {
    firebase.auth().signOut();
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Text onPress={this.signUserOut}>Log Out</Text>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
