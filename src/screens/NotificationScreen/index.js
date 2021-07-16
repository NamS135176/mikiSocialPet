import React from 'react'
import { Box, ScrollView, Text, Flex, Image } from 'native-base'
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
export default function NotificationScreen() {

    const userData = useSelector((state) => {
        return state.userInfo;
    });
    console.log(userData.followed);
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <ScrollView backgroundColor='white'>
                <Box padding={30}>
                    <Text style={{ paddingTop: 20, fontSize: 35, fontFamily: 'NunitoExBold' }}>Hoạt động</Text>
                </Box>
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Theo dõi</Text>
                </Box>
                {
                    userData.followed.map((item, index) => {
                        return (
                            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                                <Image alt='ava' width={50} height={50} borderRadius={25} source={{ uri: userData.avatar }}></Image>
                                <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'NunitoSemi' }}>{userData.account} đã follow {item.account}</Text>
                            </Flex>
                        )
                    })
                }
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Hoạt động</Text>
                </Box>
                {
                    userData.followed.map((item, index) => {
                        return (
                            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                                <Image alt='ava' width={50} height={50} borderRadius={25} source={{ uri: item.avatar }}></Image>
                                <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'NunitoSemi' }}>{item.account} đã follow bạn</Text>
                            </Flex>
                        )
                    })
                }
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Lượt thích</Text>
                </Box>
            </ScrollView>
        )
    }

}
