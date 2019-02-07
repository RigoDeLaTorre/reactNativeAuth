import React from "react";
import { Text, View } from "react-native";
// import { BoxShadow } from "react-native-shadow";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text onPress={() => console.log("header")} style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
