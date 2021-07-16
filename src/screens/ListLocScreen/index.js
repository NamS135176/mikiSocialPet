import React from 'react'
import { Box, Pressable, Flex, Text, Image, Center } from 'native-base'
import { hospitals } from '../../hashData/Pet'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
export default function ListLocScreen({ route,navigation }) {
    const {type} = route.params
    console.log(type);
    return (
        <Box paddingTop={10} flex={1} backgroundColor='white'>
            <Pressable onPress={() => { navigation.goBack() }}>
                <Flex paddingX={5} flexDirection='row' alignItems='center'>
                    <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                    <Text style={{ fontSize: 25, fontFamily: 'NunitoSemi' }}>Danh sách</Text>
                </Flex>
            </Pressable>
            
            <ScrollView>
                <Center>
                    {
                        hospitals.map((item, index) => {
                            return (
                                <Pressable onPress={() => {navigation.navigate('Maps',{item: item})}} key={index} width='90%' paddingY={2}>
                                   {
                                       type == 'shop' ?  <Box overflow='hidden' backgroundColor='#d1a9ff' borderRadius={20}>
                                       <Flex flex={1} flexDirection='row'>
                         
                                           <Box flex={1} paddingY={6} paddingX={5}>

                                               <Text style={{ fontSize: 25, fontFamily: 'NunitoSemi', color: 'white' }}>{item.name}</Text>
                                               <Text style={{ fontFamily: 'NunitoSemi', color: 'white' }}>{item.address}</Text>
                                             

                                           </Box>
                                           <Box  width='30%' height={50} backgroundColor='#bf87ff' borderBottomLeftRadius={20}>
                                               <Center>
                                                   <Image alt='logo' source={require('../../images/Utilities/ic_location_pet_shop.png')} width={30} height={38}></Image>
                                               </Center>
                                               <Center marginTop={10}> 
                                                   <Ionicons name='ios-arrow-forward-circle-outline' color='white' size={70}></Ionicons>
                                               </Center>   
                                           </Box>
                                       </Flex>
                                   </Box> :  <Box overflow='hidden' backgroundColor='#fea7a7' borderRadius={20}>
                                        <Flex flex={1} flexDirection='row'>
                          
                                            <Box flex={1} paddingY={6} paddingX={5}>

                                                <Text style={{ fontSize: 25, fontFamily: 'NunitoSemi', color: 'white' }}>{item.name}</Text>
                                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white' }}>{item.address}</Text>
                                              

                                            </Box>
                                            <Box  width='30%' height={50} backgroundColor='#ff8989' borderBottomLeftRadius={20}>
                                                <Center>
                                                    <Image alt='logo' source={require('../../images/Utilities/ic_location_pet_hospital.png')} width={30} height={38}></Image>
                                                </Center>
                                                <Center marginTop={10}> 
                                                    <Ionicons name='ios-arrow-forward-circle-outline' color='white' size={70}></Ionicons>
                                                </Center>   
                                            </Box>
                                        </Flex>
                                    </Box>
                                   }
                                </Pressable>
                            )
                        })
                    }
                </Center>
            </ScrollView>
        </Box>
    )
}
