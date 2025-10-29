import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { REPORTS } from "../data";
import ReportCard from "./ReportCard";

export default function ReportList() {
  const [reports, _] = useState(REPORTS);

  return (
    <View>
      <FlatList
        data={reports}
        renderItem={({ item }) => <ReportCard report={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
