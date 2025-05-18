import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.myOne}>
      <Text style={{color:'red'}}>shehzad3</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myOne: {
    color: "blue",
    backgroundColor: "#333",
    height: '100%',
  },
});
