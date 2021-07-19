import React from 'react'
import { Box, Flex, Text, Pressable, ScrollView, Image } from 'native-base'
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

export default function NewsScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box paddingTop={45} flex={1} backgroundColor='white' paddingX={5}>
                <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Text style={{ fontSize: 35, fontFamily: "Gabriola" }}>Miki</Text>
                    <Flex flexDirection='row' alignItems='center' justifyContent='flex-end'>
                        <Pressable>
                            <Ionicons name='search' size={30} color='black'></Ionicons>
                        </Pressable>
                        <Pressable marginLeft={5}>
                            <Ionicons name='chatbox-ellipses-outline' size={30} color='black'></Ionicons>
                        </Pressable>
                    </Flex>
                </Flex>
                <ScrollView horizontal={true}>
                    {
                        userData.followed.map(
                            (item, index) => {
                                return (
                                    <Pressable onPress={() => {navigation.navigate('ProfileUser',{account: item.account})}}>
                                        <Box>
                                            <Image source={{uri: item.avatar}} width={100} height={100} borderRadius={20} alt='ava'></Image>
                                            <Text style={{textAlign:'center', width:100, flexShrink:1, paddingTop:10, fontFamily:'NunitoExBold'}}>
                                                {item.account}
                                            </Text>
                                        </Box>
                                    </Pressable>
                                )
                            }
                        )
                    }
                </ScrollView>
            </Box>
        )
    }
}
