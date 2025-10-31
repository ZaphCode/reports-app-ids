import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

export default function AddReport() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>📍 Ubicación</Text>
        <TouchableOpacity style={styles.locationBtn}>
          <Text style={styles.btnText}>Actualizar ubicación</Text>
        </TouchableOpacity>
        <Text style={styles.locationPlaceholder}>
          San Francisco, California. St-104
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>📸 Imagen</Text>
        <TouchableOpacity style={styles.imageBtn}>
          <Text style={{ fontSize: 42 }}>📷</Text>
          <Text style={{ fontSize: 16, color: "#818181FF" }}>
            Toca para agregar una imagen
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>📝 Descripción</Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Escribe una descripción del reporte..."
          style={styles.descriptionInput}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.btnText}>Enviar Reporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 20,
    backgroundColor: "#EFEFEFFF",
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationBtn: {
    backgroundColor: "#3091FFFF",
    color: "white",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  locationPlaceholder: {
    color: "#818181FF",
    fontSize: 14,
  },
  imageBtn: {
    backgroundColor: "#E1E1E1FF",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#CFCFCFFF",

    gap: 10,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#CFCFCFFF",
    borderRadius: 10,
    padding: 12,
    height: 100,
    backgroundColor: "white",
  },
  submitBtn: {
    backgroundColor: "#28A745FF",
    color: "white",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
