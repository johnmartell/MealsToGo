import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={{padding: 16, backgroundColor:"green"}}>
          <Text>Search</Text>
        </View>
        <ScrollView style={{flex: 1, padding: 16, backgroundColor: "blue"}}>
          <Text>List goes here</Text>
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
