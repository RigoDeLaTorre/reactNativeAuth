import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Card, Button, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Auth Failed" });
          });
      });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
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
