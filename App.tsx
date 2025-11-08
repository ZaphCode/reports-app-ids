import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import ReportCtxProvider, { useReportCtx } from "./components/ReportContext";
import FeedHeader from "./components/FeedHeader";
import ReportList from "./components/ReportList";
import AddReport from "./components/AddReport";
import AddHeader from "./components/AddHeader";

function App() {
  const { uiScreen } = useReportCtx();

  if (uiScreen === "add")
    return (
      <View style={styles.container}>
        <AddHeader />
        <AddReport />
      </View>
    );

  return (
    <View style={styles.container}>
      <FeedHeader />
      <ReportList />
    </View>
  );
}

export default function AppWrapped() {
  return (
    <ReportCtxProvider>
      <App />
      <StatusBar style="auto" backgroundColor="#fff" />
    </ReportCtxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 48,
    flex: 1,
  },
});
