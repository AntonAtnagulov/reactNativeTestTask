import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header({ navigation, width }) {
    const toLogin = () => {
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/logo.png')}
                    />
                </View>
                {width > 430 ? <Text style={styles.companyName}>Каналсервис</Text> : <></>}
            </View>
            <View style={{ width: 70 }}>
                <TouchableOpacity onPress={toLogin}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/logout.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    flexContainer: {
        width: 260,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#B1B3BF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    companyName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
