import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const PrimaryBtn = ({ onPress, title, ...rest }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text className={rest.className} style={styles.primaryBtn} {...rest}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primaryBtn: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 15,
    fontSize: 20,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
});
