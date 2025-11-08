import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

type Props = {
  visible: boolean;
  onClose: () => void;
  onPhotoTaken: (uri: string) => void;
};

export default function CameraModal({ visible, onClose, onPhotoTaken }: Props) {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [loading, setLoading] = useState(false);

  if (!permission) return null;

  async function handleTakePhoto() {
    if (!cameraRef.current) return;
    try {
      setLoading(true);
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri) onPhotoTaken(photo.uri);
    } catch (err) {
      console.warn("Error al tomar foto:", err);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  const toggleFacing = () => setFacing((p) => (p == "back" ? "front" : "back"));

  if (!permission.granted) {
    return (
      <Modal visible={visible} animationType="slide" transparent={false}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>
            Se necesita permiso para usar la cámara
          </Text>
          <TouchableOpacity style={styles.permBtn} onPress={requestPermission}>
            <Text style={styles.btnText}>Dar permiso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          mode="picture"
          ratio="4:3"
          zoom={0.05}
          ref={cameraRef}
        />

        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}

        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlBtn} onPress={onClose}>
            <Text style={styles.btnText}>✖️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.captureBtn} onPress={handleTakePhoto}>
            <Text style={styles.btnText}>📸</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlBtn} onPress={toggleFacing}>
            <Text style={styles.btnText}>🔁</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  controls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlBtn: {
    backgroundColor: "#00000088",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  captureBtn: {
    backgroundColor: "#ffffff33",
    borderWidth: 3,
    borderColor: "white",
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "white", fontSize: 20 },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  permissionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  permBtn: {
    backgroundColor: "#3091FF",
    padding: 12,
    borderRadius: 10,
  },
  cancelBtn: {
    marginTop: 10,
    backgroundColor: "#555",
    padding: 12,
    borderRadius: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
  },
});
