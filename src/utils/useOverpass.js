import { useFonts } from "expo-font";

export function useOverpass() {
  const [fontsLoaded] = useFonts({
    "Overpass-Regular": require("../theme/fonts/Overpass/Overpass-Regular.ttf"),
    "Overpass-Bold": require("../theme/fonts/Overpass/Overpass-Bold.ttf"),
    "Overpass-SemiBold": require("../theme/fonts/Overpass/Overpass-SemiBold.ttf"), // <- essa é ESSENCIAL
  });

  return fontsLoaded;
}