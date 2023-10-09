import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { primaryColor } from "../utils/utils";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const PrimaryBtn = ({ onPress, title, ...rest }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text className={rest.className} style={styles.primaryBtn} {...rest}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    width: "90%",
    marginTop: -10,
  },
  primaryBtn: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: 700,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: primaryColor,
    color: "white",
    textAlign: "center",
  },
});
