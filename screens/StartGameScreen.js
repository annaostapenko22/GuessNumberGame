import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Input from "../components/Input";
import Card from "../components/Card";
import Color from "../constants/colors";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.nativeEvent.text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "desctructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText style={styles.text}>Select a Number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChange={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Color.accent}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Color.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: "90%",
    maxWidth: "95%",
    alignItems: "center",
    shadowColor: "black"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "96%",
    justifyContent: "space-around"
  },
  // button: {
  //   width: Dimensions.get("window").width / 4
  // },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});
export default StartGameScreen;
