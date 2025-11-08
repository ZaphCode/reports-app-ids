import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import * as Location from "expo-location";
import CameraModal from "./CameraModal";
import { Image } from "expo-image";
import { useReportCtx } from "./ReportContext";
import useLocation from "../hooks/useLocation";

export default function AddReport() {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [description, setDescription] = useState("");
  const { addReport } = useReportCtx();
  const { address, getCurrentLocation } = useLocation();
  const { setUiScreen } = useReportCtx();

  function handleSubmit() {
    if (!address || !photoUri || !description) {
      return Alert.alert(
        "Faltan datos",
        "Por favor completa todos los campos antes de enviar el reporte."
      );
    }

    addReport({
      username: "Tú",
      location: address,
      imgUrl: photoUri,
      desc: description,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    });

    Alert.alert("Reporte enviado ✅", "Tu reporte ha sido enviado con éxito.");
    setUiScreen("feed");
  }

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
      >
        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.title}>📍 Ubicación</Text>
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={getCurrentLocation}
          >
            <Text style={styles.btnText}>Actualizar ubicación</Text>
          </TouchableOpacity>
          <Text style={styles.locationPlaceholder}>
            {address || "Ubicación desconocida"}
          </Text>
        </View>

        {/* Image Section */}
        <View style={styles.section}>
          <Text style={styles.title}>📸 Imagen</Text>
          <TouchableOpacity
            style={styles.imageBtn}
            onPress={() => setShowCamera(true)}
          >
            {photoUri ? (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: photoUri }}
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: 12,
                    marginBottom: 8,
                  }}
                />
                <Text style={{ fontSize: 16, color: "#3091FF" }}>
                  Toca para cambiar la imagen
                </Text>
              </View>
            ) : (
              <>
                <Text style={{ fontSize: 42 }}>📷</Text>
                <Text style={{ fontSize: 16, color: "#818181FF" }}>
                  Toca para agregar una imagen
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.title}>📝 Descripción</Text>
          <TextInput
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            placeholder="Escribe una descripción del reporte..."
            style={styles.descriptionInput}
          />
        </View>

        {/* Submitting Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Enviar Reporte</Text>
          </TouchableOpacity>
        </View>

        <CameraModal
          visible={showCamera}
          onClose={() => setShowCamera(false)}
          onPhotoTaken={(uri) => setPhotoUri(uri)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function formatAddress(address: Location.LocationGeocodedAddress): string {
  return `${address.street || ""}${address.city ? ", " + address.city : ""}${
    address.region ? ", " + address.region : ""
  } ${address.postalCode ? " " + address.postalCode : ""}`.replace(/^, /, "");
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#EFEFEFFF",
    flex: 1,
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
    marginBottom: 100,
  },
});
