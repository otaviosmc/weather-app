import React, { useState } from "react";
import {View,Text,Button,StyleSheet,ActivityIndicator,Image} from "react-native";
import { useOverpass } from "./src/utils/useOverpass";
import CustomButton from "./src/components/CustomButton";
export default function App() {
  const fontsLoaded = useOverpass();
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando fontes...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/nuvem.png")} style ={{width: 222, height:214}} />
      <Text style={styles.title}>Descubra o Clima na Sua Cidade</Text>
      <Text style={styles.text}>
        Com o <Text style={styles.bold}>FindWeather</Text> nunca ficou tão fácil
        ter a previsão do tempo na palma da sua mão
      </Text>
      <CustomButton title="Iniciar" onPress={() => alert("Clique")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1D22",
    padding: 30,
  },
  title: {
    fontSize: 33,
    color: "#FFF",
    textAlign: "center",
    padding: 20,
    fontFamily: "Overpass-SemiBold",
    maxWidth: 304,
  },
  text: {
    font: "SemiBold",
    fontSize: 22,
    color: "#AFAFAF",
    textAlign: "center",
  },
  bold: { fontFamily: "Overpass-Bold" },
});
