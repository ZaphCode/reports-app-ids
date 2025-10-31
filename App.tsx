import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import FeedHeader from "./components/FeedHeader";
import ReportList from "./components/ReportList";
import AddReport from "./components/AddReport";
import AddHeader from "./components/AddHeader";

export default function App() {
  const [uiScreen, setUiScreen] = useState<"feed" | "add">("feed");

  if (uiScreen === "add") {
    return (
      <View style={styles.container}>
        <AddHeader onBackPress={() => setUiScreen("feed")} />
        <AddReport />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FeedHeader onAddPress={() => setUiScreen("add")} />
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
