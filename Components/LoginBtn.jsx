import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function LoginBtn({ submitHandler }) {
    return (
        <TouchableOpacity onPress={submitHandler}>
            <View
                style={styles.btnBody}
            >
                <Text
                    style={styles.btnText}
                >
                    login
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        padding: 7,
        width: 150,
        fontSize: 26,
        alignItems: 'center',
        backgroundColor: '#3D61B4',
        borderRadius: 6,
    },
    btnText: {
      fontSize: 22,
      fontWeight: '600',
      color: '#ffffff',
    },
});
