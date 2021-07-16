import React, { useState } from 'react'
import { Box, ScrollView, Pressable, Flex, Image, Text, Center } from 'native-base'
import { useFonts } from 'expo-font';
import { shadowStyles } from '../../commonComponents/shadowStyles';
export default function TipsDetailScreen({ route, navigation }) {
    const { item } = route.params
    const [selection, setSelection] = useState(1)
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
            <Box paddingTop={45} flex={1} backgroundColor='#FFA788'>
                <Pressable  zIndex={100} position='absolute' top={10} left={5} onPress={() => { navigation.goBack() }}>
                    <Image style={shadowStyles.boxShadow} alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                </Pressable>
                <Center height='35%' width='100%' zIndex={10}>
                    {/* <Box flex={1}> */}
                    <Image borderRadius={30} borderWidth={20} borderColor='#FFA788' alt='pet' height='100%' width='65%' source={{ uri: item.image }}></Image>
                    {/* </Box> */}
                </Center>
                <Box flex={1} paddingTop='18%' borderTopLeftRadius={30} borderTopRightRadius={30} backgroundColor={'white'} marginTop={-50}>
                    <Center>
                        <Text style={{ fontFamily: 'NunitoExBold', fontSize: 25 }}>{item.type}</Text>
                    </Center>
                    <Flex marginY={3} flexDirection='row' justifyContent='space-around'>
                        {
                            selection == 1 ? <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#FFA788'>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', fontSize: 13 }}>Đặc điểm</Text>
                            </Box> :
                                <Pressable onPress={() => { setSelection(1) }}>
                                    <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#ddd'>
                                        <Text style={{ fontFamily: 'NunitoSemi', color: '#bbb', fontSize: 13 }}>Đặc điểm</Text>
                                    </Box>
                                </Pressable>
                        }
                        {
                            selection == 2 ? <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#FFA788'>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', fontSize: 13 }}>Cách nuôi</Text>
                            </Box> :
                                <Pressable onPress={() => { setSelection(2) }}>
                                    <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#ddd'>
                                        <Text style={{ fontFamily: 'NunitoSemi', color: '#bbb', fontSize: 13 }}>Cách nuôi</Text>
                                    </Box>
                                </Pressable>
                        }
                        {
                            selection == 3 ? <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#FFA788'>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', fontSize: 13 }}>Dinh dưỡng</Text>
                            </Box> :
                                <Pressable onPress={() => { setSelection(3) }}>
                                    <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#ddd'>
                                        <Text style={{ fontFamily: 'NunitoSemi', color: '#bbb', fontSize: 13 }}>Dinh dưỡng</Text>
                                    </Box>
                                </Pressable>
                        }
                        {
                            selection == 4 ? <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#FFA788'>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', fontSize: 13 }}>Bệnh lý</Text>
                            </Box> :
                                <Pressable onPress={() => { setSelection(4) }}>
                                    <Box paddingX={3} paddingY={2} borderRadius={15} backgroundColor='#ddd'>
                                        <Text style={{ fontFamily: 'NunitoSemi', color: '#bbb', fontSize: 13 }}>Bệnh lý</Text>
                                    </Box>
                                </Pressable>
                        }
                    </Flex>
                    <Box flex={1}>
                        {
                            selection == 1 ? <ScrollView>
                                <Text padding={5}>
                                    {item.char}
                                </Text>
                            </ScrollView> : <></>
                        }
                        {
                            selection == 2 ? <ScrollView>
                                <Text padding={5}>
                                    {item.tame}
                                </Text>
                            </ScrollView> : <></>
                        }
                        {
                            selection == 3 ? <ScrollView>
                                <Text padding={5}>
                                    {item.nutri}
                                </Text>
                            </ScrollView> : <></>
                        }
                        {
                            selection == 4 ? <ScrollView>
                                <Box padding={5}>
                                    {
                                        item.sick.map((item, index) => {
                                            return (
                                                <Box>
                                                    <Text>
                                                        {item.name}
                                                    </Text>
                                                    <Text>
                                                        {item.sym}
                                                    </Text>
                                                    <Text>
                                                        {item.treat}
                                                    </Text>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </ScrollView> : <></>
                        }
                    </Box>
                </Box>
            </Box>
        )
    }

}
