import React from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import userInfo from '../../reducers/userInfo';
import { Ionicons } from '@expo/vector-icons';
import { Box, Image } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UtilitiesScreen from '../UtilitiesScreen';

const Tab = createBottomTabNavigator();
function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => {navigation.navigate('Tips')}}>Home!</Text>
        </View>
    );
}

function PostScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Sign Out' onPress={async () => {
                await AsyncStorage.setItem('userToken', '')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }}></Button>
        </View>
    );
}

export default function MainScreen({ navigation }) {
    return (
        <Tab.Navigator
            labeled={false}
            initialRouteName=""
            tabBarOptions={{
                activeTintColor: '#FFA788',
            }}>
            <Tab.Screen
                name="News"
                component={HomeScreen}
                options={{
                    tabBarLabel:"News",
                    tabBarIcon: ({ color, size }) => {
                      
                            return (
                                <Ionicons name='newspaper' color={color} size={30}></Ionicons>
                                // <Image
                                //     alt="slide1"
                                //     style={{ width: 25, height: 25 }}
                                //     source={require('../../images/BottomNavigation/ic_news_feeds_orange.png')}
                                // />
                            );
                       
                    },
                }}
            />
            <Tab.Screen
                name="Utilities"
                component={UtilitiesScreen}
                options={{
                    tabBarLabel:'Tiện ích',
                    tabBarIcon: ({ color, size }) => {
                      
                            return (
                                <Ionicons name='grid' color={color} size={30}></Ionicons>
                                // <Image
                                //     alt="slide1"
                                //     style={{ width: 25, height: 25 }}
                                //     source={require('../../images/BottomNavigation/ic_utilities_orange.png')}
                                // />
                            );
                       
                    },
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon: ({ color, size }) => {
       
                            return (
                                <Ionicons name='add-circle' color={color} size={65}></Ionicons>
                                // <Image
                                //     alt="slide1"
                                //     style={{ width: 50, height:50 }}
                                //     source={require('../../images/BottomNavigation/ic_add_gray.png')}
                                // />
                            );
                        
                    },
                }}
            />
            <Tab.Screen
                name="Noti"
                component={Notifications}
                options={{
                    tabBarLabel:"Thông báo",
                    tabBarIcon: ({ color, size }) => {
                      
                            return (
                                <Ionicons name='heart' color={color} size={30}></Ionicons>
                                // <Image
                                //     alt="slide1"
                                //     style={{ width: 28, height: 25 }}
                                //     source={require('../../images/BottomNavigation/ic_love_notification_orange.png')}
                                // />
                            );
                    
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:"Profile",
                    tabBarIcon: ({ color, size }) => {
                       
                            return (
                                <Ionicons name='paw' color={color} size={30}></Ionicons>
                                // <Image
                                //     alt="slide1"
                                //     style={{ width: 30, height: 25 }}
                                //     source={require('../../images/BottomNavigation/ic_paw_pet_account_orange.png')}
                                // />
                            );
                      
                    },
                }}
            />
        </Tab.Navigator>
    )
}
