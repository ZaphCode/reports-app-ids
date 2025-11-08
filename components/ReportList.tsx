import { View, FlatList } from "react-native";
import ReportCard from "./ReportCard";
import { useReportCtx } from "./ReportContext";

export default function ReportList() {
  const { reports } = useReportCtx();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={reports}
        renderItem={({ item }) => <ReportCard report={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
