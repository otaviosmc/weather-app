import React from "react";
import { View, Text, Image } from "react-native";
import useStyleSheet from "../utils/useStyleSheet";
import CustomButton from "../components/CustomButton";

export default function Details({ navigation }) {
  const styles = useStyleSheet();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.regular]}>
        Find<Text style={styles.bold}>Weather</Text>
      </Text>
      <CustomButton
        title="Voltar"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
