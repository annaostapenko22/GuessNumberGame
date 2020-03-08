import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Color from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/images/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber} </Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber} </Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 160,
    borderWidth: 3,
    borderColor: "black",
    width: 320,
    maxWidth: "80%",
    height: 320,
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Color.primary,
    fontWeight: "bold"
  },
  resultContainer: {
    width: "80%",
    marginHorizontal: 10,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});

export default GameOverScreen;
