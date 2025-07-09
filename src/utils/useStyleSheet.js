import React from "react";
import { StyleSheet } from "react-native";

export default function useStyleSheet () {
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
        regular: {fontFamily: "Overpass-Regular"}
      });

      return styles;
}