import React, { useState } from "react";
import {View,Text,ActivityIndicator,Image} from "react-native";
import { useOverpass } from "../utils/useOverpass";
import CustomButton from "../components/CustomButton";
import useStyleSheet from "../utils/useStyleSheet";
export default function HomeScreen({ navigation }) {
  const fontsLoaded = useOverpass();
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando fontes...</Text>
      </View>
    );
  }
  const styles = useStyleSheet();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/nuvem.png")} style ={{width: 222, height:214}} />
      <Text style={styles.title}>Descubra o Clima na Sua Cidade</Text>
      <Text style={styles.text}>
        Com o <Text style={styles.bold}>FindWeather</Text> nunca ficou tão fácil
        ter a previsão do tempo na palma da sua mão
      </Text>
      <CustomButton title="Iniciar" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
