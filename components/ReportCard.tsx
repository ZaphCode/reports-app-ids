import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Report } from "../data";
import { Image } from "expo-image";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{"👤"}</Text>
          </View>
          <View>
            <Text style={styles.username}>{report.username}</Text>
            <Text style={styles.location}>{report.location}</Text>
          </View>
        </View>
        <Text style={styles.date}>{report.date}</Text>
      </View>

      <View style={styles.imageBox}>
        {report.imgUrl ? (
          <Image
            source={{
              uri: report.imgUrl,
            }}
            style={{ width: "100%", height: "100%", borderRadius: 12 }}
            contentFit="cover"
          />
        ) : (
          <>
            <Text style={styles.emoji}>{"📷"}</Text>
            <Text style={styles.imageText}>Imagen del reporte</Text>
          </>
        )}
      </View>

      <Text style={styles.desc}>{report.desc}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>👍 Me gusta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>💬 Comentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>📤 Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#CDCDCDFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D8E4FAFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    fontSize: 18,
    color: "#6b7280",
    fontWeight: "600",
  },
  username: {
    fontWeight: "600",
    color: "#1f2937",
  },
  location: {
    fontSize: 12,
    maxWidth: 200,
    color: "#6b7280",
  },
  date: {
    fontSize: 12,
    color: "#9ca3af",
  },
  imageBox: {
    height: 160,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  emoji: {
    fontSize: 36,
  },
  imageText: {
    marginTop: 4,
    fontSize: 12,
    color: "#9ca3af",
  },
  desc: {
    marginTop: 10,
    color: "#374151",
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 10,
  },
  actionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#F3F3F3FF",
    borderRadius: 20,
    alignItems: "center",
  },
  actionText: {
    color: "#6b7280",
    fontSize: 14,
  },
});

export default ReportCard;
