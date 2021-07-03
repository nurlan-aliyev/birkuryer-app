import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    fontSize: 26,
    paddingBottom: 10,
    color: "#212529",
  },
  signInPar: {
    fontSize: 16,
    color: "#646f79",
    marginBottom: 15,
    textAlign: "center",
  },
  textField: {
    width: deviceWidth - 100,
    borderColor: "#707070",
    borderWidth: 1,
    margin: 10,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    borderRadius: 20,
  },
  succesBtn: {
    backgroundColor: "#21C87A",
    width: deviceWidth - 100,
    margin: 10,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
  cardContainer: {
    width: deviceWidth / 2 - deviceWidth * 0.11,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 4,
  },
  iconContainer: {
    position: "relative",
    left: 0,
    margin: 5,
  },
  iconText: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "500",
  },
  powerContainer: {
    flexDirection: "row",
    position: "relative",
    bottom: 5,
    justifyContent: "space-between",
    marginTop: 10,
  },
  onIndicatorContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  multiCardContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "white",
  },
  singleCardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  testContainer: {
    height: 175,
  },
});

export { styles };
