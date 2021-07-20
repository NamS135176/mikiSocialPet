import React,{useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import userInfo from '../../reducers/userInfo';
import { Ionicons } from '@expo/vector-icons';
import { Box, Image } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UtilitiesScreen from '../UtilitiesScreen';
import Profile from '../Profile';
import PostScreen from '../PostScreen';
import NotificationScreen from '../NotificationScreen';
import { useDispatch, useSelector } from 'react-redux';
import NewsScreen from '../NewsScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
    const dispatch = useDispatch()
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    useEffect(() => {
        dispatch({
            type:'GET_MY_POST',
            payload: userData.account
        })
        dispatch({
            type: "GET_FOLLOW_POST",
            payload: userData.account
        })
    })
    return (
        <Tab.Navigator
            labeled={false}
            initialRouteName=""
            tabBarOptions={{
                activeTintColor: '#FFA788',
            }}>
            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel:"News",
                    tabBarIcon: ({ color, size }) => {
                      
                            return (
                                <Ionicons name='newspaper' color={color} size={30}></Ionicons>
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
                              
                            );
                        
                    },
                }}
            />
            <Tab.Screen
                name="Noti"
                component={NotificationScreen}
                options={{
                    tabBarLabel:"Thông báo",
                    tabBarIcon: ({ color, size }) => {
                      
                            return (
                                <Ionicons name='heart' color={color} size={30}></Ionicons>
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
                            );
                      
                    },
                }}
            />
        </Tab.Navigator>
    )
}
