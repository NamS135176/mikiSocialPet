import React, { useState } from 'react'
import { Box, Text, Flex, Image, Center, Pressable } from 'native-base'
import { useFonts } from 'expo-font';
export default function TipsScreen({ navigation }) {
    const [isDog, setIsDog] = useState(false)
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
            <Box paddingTop={10} flex={1} backgroundColor='white'>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <Flex paddingX={5} flexDirection='row' alignItems='center'>
                        <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                        <Text style={{ fontSize: 25, fontFamily: 'NunitoSemi' }}>Cẩm nang</Text>
                    </Flex>
                </Pressable>
                {
                    isDog ? <Center width='100%' paddingTop={15}>
                        <Flex overflow='hidden' alignItems='center' borderRadius={10} borderWidth={1} borderColor='#ccc' width='70%' flexDirection='row' justifyContent='space-around'>
                            <Flex paddingY={3} alignItems='center' flex={1} flexDirection='row' justifyContent='space-around' backgroundColor='#FFA788'>
                                <Box padding={1} backgroundColor='white' borderRadius={5}>
                                    <Image alt='dog' width={8} height={7} source={require('../../images/Utilities/ic_dog_hand_book.png')}></Image>
                                </Box>
                                <Text style={{ fontSize: 20, fontFamily: 'Nunito', color: 'white' }}>
                                    chó
                                </Text>
                            </Flex>
                            <Pressable onPress={() => { setIsDog(false) }}  flex={1}>
                                <Flex paddingX={3} alignItems='center' paddingY={3} flex={1} flexDirection='row' justifyContent='space-around'>
                                    <Box padding={1} backgroundColor='#eee' borderRadius={5}>
                                        <Image alt='dog' width={8} height={7} source={require('../../images/Utilities/ic_cat_hand_book.png')}></Image>
                                    </Box>
                                    <Text style={{ fontSize: 20, fontFamily: 'Nunito' }}>
                                        mèo
                                    </Text>
                                </Flex>
                            </Pressable>
                        </Flex>
                    </Center> :  <Center width='100%' paddingTop={15}>
                        <Flex overflow='hidden' alignItems='center' borderRadius={10} borderWidth={1} borderColor='#ccc' width='70%' flexDirection='row' justifyContent='space-around'>
                        <Pressable onPress={() => { setIsDog(true) }} flex={1}>
                            <Flex paddingY={3} alignItems='center' flex={1} flexDirection='row' justifyContent='space-around' backgroundColor='white'>
                                <Box padding={1} backgroundColor='#eee' borderRadius={5}>
                                    <Image alt='dog' width={8} height={7} source={require('../../images/Utilities/ic_dog_hand_book.png')}></Image>
                                </Box>
                                <Text style={{ fontSize: 20, fontFamily: 'Nunito' }}>
                                    chó
                                </Text>
                            </Flex>
                            </Pressable>  
                            <Flex paddingY={3} alignItems='center' flex={1} flexDirection='row' justifyContent='space-around' backgroundColor='#FFA788'>
                                <Box padding={1} backgroundColor='white' borderRadius={5}>
                                    <Image alt='dog' width={8} height={7} source={require('../../images/Utilities/ic_cat_hand_book.png')}></Image>
                                </Box>
                                <Text style={{ fontSize: 20, fontFamily: 'Nunito', color:'white' }}>
                                   mèo
                                </Text>
                            </Flex>
                           
                        </Flex>
                    </Center> 
                }
            </Box>
        )
    }

}
