import React from 'react'
import { Box, Center, Flex, Text, Image, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native';
export default function UltiItem(props) {
    const navigation = useNavigation()
    return (
        <Pressable flex={1} onPress={() => {navigation.navigate(props.handleTo)}}>
            <Box overflow='hidden' flex={1} backgroundColor={props.bgColor} borderRadius={20}>
                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                    <Center flex={1}>
                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>{props.title}</Text>
                    </Center>
                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor={props.bgImg}>
                        <Center flex={1} >
                            <Image alt='search' source={props.img} width='50%' height="50%"></Image>
                        </Center>
                    </Box>
                </Flex>
                <Text onPress={() => { navigation.navigate('Tips') }} style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                    {props.des}
                </Text>
            </Box>
        </Pressable>
    )
}
