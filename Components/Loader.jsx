import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#004300" />
  </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 30,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});