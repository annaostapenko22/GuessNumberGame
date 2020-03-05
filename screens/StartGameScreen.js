
      </View>
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
      width: 300,
      maxWidth: "80%",
      alignItems: "center",
      shadowColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});
export default StartGameScreen;
