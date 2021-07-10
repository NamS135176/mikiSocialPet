import React from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import userInfo from '../../reducers/userInfo';

export default function MainScreen({ navigation }) {
    const userInfo = useSelector((state) => {
        return state.userInfo
    })
    console.log(userInfo);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Main</Text>
            <Button title='Sign Out' onPress={async () => {
                await AsyncStorage.setItem('userToken', '')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }}></Button>
        </View>
    )
}
