import React from 'react'
import { Box, Text, Image, Center, Flex, Spacer, ScrollView, Pressable } from 'native-base'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import UltiItem from './components/UltiItem';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default function UtilitiesScreen({ navigation }) {

    const handleToTips = () => { navigation.navigate('Tips') }

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
            <Box flex={1} backgroundColor='white' padding={30}>
                <Text style={{ paddingTop: 20, fontSize: 35, fontFamily: 'NunitoExBold' }}>Mở rộng</Text>
                <Box style={styles.boxShadow} overflow='hidden' width='100%' height='25%' marginY={8} backgroundColor='#ffa788' borderRadius={20}>
                    <Flex flex={1} flexDirection='row'>
                        <Box width='35%' height='80%' backgroundColor='#ff8f6d' borderBottomRightRadius={20}>
                            <Center flex={1}>
                                <Image alt='logo' source={require('../../images/Login/logo.png')} width='80%' height="60%"></Image>
                            </Center>
                        </Box>
                        <Box flex={1}>
                            <Center >
                                <Text style={{ fontSize: 30, fontFamily: 'Gabriola', color: 'white' }}>Miki</Text>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', paddingHorizontal: 10 }}>Mang lại những tiện ích, mở rộng giúp bạn dễ dàng chăm sóc thú cưng của mình hơn</Text>
                            </Center>
                        </Box>
                    </Flex>
                </Box>
                <Box width='100%' height='27%' marginBottom={4}>
                    <Flex flex={1} flexDirection='row'>
                        <Pressable flex={1} marginRight={3} onPress={() => { navigation.navigate('NewsTag', { tag: '#timpet' }) }}>
                            <Box style={styles.boxShadow} overflow='hidden' flex={1} backgroundColor='#fea7a7' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Tìm pet</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#ff8989'>
                                        <Center flex={1}>
                                            <Image alt='search' source={require('../../images/Utilities/ic_find_pet.png')} width='60%' height="48%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Bảng tin danh sách thú cưng đi lạc, giúp cộng động giúp đỡ nhau tìm pet
                                </Text>
                            </Box>
                        </Pressable>
                        <Pressable flex={1} onPress={() => {navigation.navigate('ListLoc', { type: 'hosp' }) }} marginLeft={3}>
                            <Box style={styles.boxShadow} overflow='hidden' flex={1} backgroundColor='#99d2ff' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Thú y</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#bf87ff'>
                                        <Center flex={1} >
                                            <Image alt='search' source={require('../../images/Utilities/ic_location_pet_hospital.png')} width='47%' height="50%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                Danh sách các cơ sở thú y giúp bạn thuận tiện khám chữa bệnh cho pet
                                </Text>
                            </Box>
                        </Pressable>

                    </Flex>
                    {/* <Flex flex={1} flexDirection='row'>
                        <Box style={styles.boxShadow } overflow='hidden' flex={1} backgroundColor='#fea7a7' marginRight={3} borderRadius={20}>
                            <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                <Center flex={1}>
                                    <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Tìm pet</Text>
                                </Center>
                                <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#ff8989'>
                                    <Center flex={1}>
                                        <Image alt='search' source={require('../../images/Utilities/ic_find_pet.png')} width='60%' height="50%"></Image>
                                    </Center>
                                </Box>
                            </Flex>
                            <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                Bảng tin danh sách thú cưng đi lạc, giúp cộng động giúp đỡ nhau tìm pet
                            </Text>
                        </Box>
                        <Pressable flex={1} onPress={() => { navigation.navigate('ListLoc', { type: 'hosp' }) }}>
                            <Box style={styles.boxShadow } flex={1} overflow='hidden' backgroundColor='#99d2ff' marginLeft={3} borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Thú y</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#99d2ff'>
                                        <Center flex={1}>
                                            <Image alt='search' source={require('../../images/Utilities/ic_location_pet_hospital.png')} width='60%' height="60%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Danh sách các cơ sở thú y giúp bạn thuận tiện khám chữa bệnh cho pet
                                </Text>
                            </Box>
                        </Pressable>
                    </Flex> */}
                </Box>
                <Box width='100%' height='27%' >
                    <Flex flex={1} flexDirection='row'>
                        <Pressable flex={1} marginRight={3} onPress={() => { navigation.navigate('ListLoc', { type: 'shop' }) }}>
                            <Box style={styles.boxShadow} overflow='hidden' flex={1} backgroundColor='#d1a9ff' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Cửa hàng</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#bf87ff'>
                                        <Center flex={1}>
                                            <Image alt='search' source={require('../../images/Utilities/ic_location_pet_shop.png')} width='60%' height="62%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Danh sách các cửa hàng thú cưng giúp bạn thuận tiện sắm đồ cho pet
                                </Text>
                            </Box>
                        </Pressable>
                        <Pressable flex={1} onPress={handleToTips} marginLeft={3}>
                            <Box style={styles.boxShadow} overflow='hidden' flex={1} backgroundColor='#48d699' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Cẩm nang</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#48be8b'>
                                        <Center flex={1} >
                                            <Image alt='search' source={require('../../images/Utilities/ic_hand_book.png')} width='60%' height="50%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Đưa ra những thông tin hữu ích, các bệnh thường gặp giúp bạn chăm sóc pet tốt hơn
                                </Text>
                            </Box>
                        </Pressable>

                    </Flex>
                </Box>
            </Box>

        )
    }
}
