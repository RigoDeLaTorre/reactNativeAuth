import React, { Component } from "react";
import firebase from "firebase";
import "@firebase/auth";
import { Card, Button, CardSection, Input, Text } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onButtonPress() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      })
      .catch(() => {
        this.setState({ error: "Auth Failed" });
      });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label={"Email"}
            placeholder={"user@gmail.com"}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label={"Password"}
            placeholder={"password"}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
