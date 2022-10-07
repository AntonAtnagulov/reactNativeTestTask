import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Dimensions } from 'react-native';
import LoginBtn from './LoginBtn';
// import axios from 'axios';
// import Constants from 'expo-constants';

// const { manifest } = Constants;
// const url = `http://${manifest.debuggerHost.split(':').shift()}:3100`;

const width = Dimensions.get('window').width;

export default function Login({ navigation }) {
    const [inputs, setInputs] = useState({});
    const [alert, setAlert] = useState(false);

    const isMobile =
        width > 430 ? styles.inputContainer : styles.mobileInputContainer;

    const inputChangeHandler = (text, name) => {
        setInputs((prev) => ({ ...prev, [name]: text }));
    };

    const submitHandler = async () => {
        // const res = await axios.post(url, inputs)
        if (inputs.login === '123' && inputs.password === '123') {
            setInputs({});
            navigation.navigate('PostsList', { width });
        } else {
            setInputs({});
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 1500);
        }
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View >
                    <Text style={{ fontSize: 26, color: '#ffffff' }}>
                        Authorization
                    </Text>
                </View>
                <View style={isMobile}>
                    <View style={{ width: 150 }}>
                        <Text style={styles.lableText}>login</Text>
                    </View>
                    <TextInput
                        onChangeText={(text) =>
                            inputChangeHandler(text, 'login')
                        }
                        value={inputs.login || ''}
                        style={styles.input}
                    />
                </View>
                <View style={isMobile}>
                    <View style={{ width: 150 }}>
                        <Text style={styles.lableText}>password</Text>
                    </View>
                    <TextInput
                        onChangeText={(text) =>
                            inputChangeHandler(text, 'password')
                        }
                        value={inputs?.password || ''}
                        style={styles.input}
                    />
                </View>
                <View style={{ width: 400, alignItems: 'center' }}>
                    <LoginBtn submitHandler={submitHandler} />
                    {alert ? (
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>
                            wrong password
                        </Text>
                    ) : (
                        <></>
                    )}
                </View>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#171926',
    },
    loginBox: {
        height: 400,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#42434B',
        borderRadius: 10,
    },
    lableText: {
        fontSize: 20,
        color: '#ffffff',
    },
    mobileInputContainer: {
        alignItems: 'center',
        height: 80,
        width: '95%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 80,
        width: '90%',
    },
    input: {
        fontSize: 20,
        width: '60%',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
        padding: 10,
    },
});
