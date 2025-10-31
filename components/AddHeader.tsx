import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  onBackPress?: () => void;
};

export default function AddHeader({ onBackPress }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <Text style={styles.buttonText}>← Volver</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Nuevo Reporte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    minHeight: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    position: "relative",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    left: 2,
  },
  buttonText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});
