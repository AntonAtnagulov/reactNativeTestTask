import React, { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { loadMore } from '../functions/functions';
import Header from './Header';
import Loader from './Loader';

export default function PostsList({ route, navigation }) {
    const { width } = route.params;
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const isMobile = width > 430 ? false : true;

    useBackHandler(() => {
        return true;
    });

    useEffect(() => {
        loadMore(true, page, 6, setPosts);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <Image
                    style={styles.img}
                    source={{ uri: `${item.photo.url}.png` }}
                />
                <View>
                    <Text style={styles.text}>Autor: {item.userId.name}</Text>
                    <Text style={styles.text}>
                        Company: {item.userId.company.name}
                    </Text>
                    <Text style={styles.text}>{item.body}</Text>
                </View>
            </View>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#171926',
            }}
        >
            {isMobile ? <View style={{ height: 40 }} /> : <></>}
            <View
                style={{ flex: 1, width: '100%', backgroundColor: '#42434B' }}
            >
                <Header navigation={navigation} width={width} />
            </View>
            <View
                style={
                    isMobile
                        ? styles.mobileScrollContainer
                        : styles.scrollContainer
                }
            >
                <FlatList
                    numColumns={isMobile ? 1 : 2}
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id + item.body + 1}
                    ListFooterComponent={Loader}
                    onEndReached={() => {
                        setPage((prev) => (prev += 1));
                        loadMore(false, page, 4, setPosts);
                    }}
                    onEndReachedThreshold={0}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        alignItems: 'stretch',
        flex: 8,
        width: '100%',
    },
    mobileScrollContainer: {
        alignItems: 'center',
        flex: 8,
        width: '100%',
    },
    text: {
        margin: 12,
        fontSize: 18,
        color: '#E4E5EA',
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        width: 300,
        margin: 6,
        backgroundColor: '#42434B',
        borderRadius: 12,
    },
    img: {
        width: 300,
        height: 300,
        marginVertical: 16,
    },
});
