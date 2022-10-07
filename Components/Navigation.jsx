import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import PostsList from './PostsList';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Авторизация' }}
                />
                <Stack.Screen
                    name="PostsList"
                    component={PostsList}
                    options={{ title: 'Посты' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
