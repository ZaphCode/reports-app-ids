import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FeedHeader from "./components/FeedHeader";
import ReportList from "./components/ReportList";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedHeader />
      <ReportList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 48,
  },
});
