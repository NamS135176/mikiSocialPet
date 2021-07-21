import React, { useState } from 'react'
import { Box, Input, Flex, Text, Pressable, Image, HStack } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { listTag } from '../../hashData/Tags';
export default function SearchScreen({ navigation }) {
    const [account, setAccount] = useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Box >
                <Flex paddingX={5} flexDirection='row' alignItems='center' justifyContent='space-between'>

                    <Pressable onPress={() => { navigation.goBack() }}>
                        <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                    </Pressable>
                    <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'left' }}>Tìm kiếm</Text>

                    <Box opacity={0}>
                        <Ionicons name='checkmark' color='black' size={40}></Ionicons>

                    </Box>

                </Flex>
                <Box paddingX={5} marginTop={5}>
                    <Input
                        onChangeText={txt => setAccount(txt)}
                        placeholder='Nhập tên người dùng bạn cần tìm...'
                        InputRightElement={
                            <Box paddingRight={3} paddingY={3}>
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('ProfileUser', { account: account })
                                    }}>
                                    <Ionicons name="search" color="black" size={30} />
                                </Pressable>
                            </Box>
                        }
                    ></Input>
                </Box>
                <ScrollView>
                    <Box paddingX={5} marginTop={5} paddingBottom={150}>
                        <Flex flexWrap='wrap' flexDirection='row'>
                            {
                                listTag.map((item, index) => {
                                    return <Pressable onPress={() => {
                                        navigation.navigate('NewsTag', { tag: item })
                                    }}>
                                        <Box key={index} marginRight={3} marginBottom={3} paddingX={3} paddingY={2} backgroundColor='#ccc' borderRadius={10} key={index}>
                                            <Text>{item}</Text>
                                        </Box>
                                    </Pressable>
                                })
                            }
                        </Flex>
                    </Box>
                </ScrollView>
            </Box>
        </SafeAreaView>
    )
}
