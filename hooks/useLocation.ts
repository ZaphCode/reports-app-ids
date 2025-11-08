import { useMemo, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default function useLocation() {
  const [locationAddress, setLocationAddr] =
    useState<Location.LocationGeocodedAddress | null>(null);

  const address = useMemo(() => {
    return locationAddress ? formatAddress(locationAddress) : null;
  }, [locationAddress]);

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      return Alert.alert(
        "Permiso denegado",
        "Se necesita permiso para acceder a la ubicación."
      );
    }

    const { coords } = await Location.getCurrentPositionAsync({});

    const geocoded = await Location.reverseGeocodeAsync({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });

    setLocationAddr(geocoded[0] || null);
  }

  return { address, getCurrentLocation };
}

function formatAddress(address: Location.LocationGeocodedAddress): string {
  return `${address.street || ""}${address.city ? ", " + address.city : ""}${
    address.region ? ", " + address.region : ""
  } ${address.postalCode ? " " + address.postalCode : ""}`.replace(/^, /, "");
}
