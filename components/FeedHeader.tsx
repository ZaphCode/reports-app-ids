import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useReportCtx } from "./ReportContext";

export default function FeedHeader() {
  const { setUiScreen } = useReportCtx();

  const onAddPress = () => setUiScreen("add");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed de Reportes</Text>
      <TouchableOpacity onPress={onAddPress} style={styles.button}>
        <Text style={styles.buttonText}>+ Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    minHeight: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#58A9FFFF",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
