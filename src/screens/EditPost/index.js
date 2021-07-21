import React, { useEffect, useState } from 'react'
import { ScrollView, Flex, Box, Text, Image, Center, Modal, Input } from 'native-base'
import { Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useSelector, useDispatch } from 'react-redux'
import { Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import XDate from './xdate'
import { Ionicons } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import SkeletonContent from 'react-native-skeleton-content';
import { width } from 'styled-system';
import profileStyles from './profileStyle';

export default function EditPostScreen({ route, navigation }) {
    const w = Dimensions.get('window').width;
    const [isLoading, setIsLoading] = useState(false)
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });

    const dispatch = useDispatch()
    const { currentPost } = route.params
    const [textDes, setTextDes] = useState(currentPost.currentPost.textDescription)
    console.log(currentPost);
    const [commentText, setCommentText] = useState('')



    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box flex={1} backgroundColor='white'>
                <Spinner
                    visible={isLoading}
                    textStyle={{ color: '#FFF' }}
                />
                <ScrollView backgroundColor='white' paddingTop={45}  >
                    <Flex paddingX={5} flexDirection='row' alignItems='center' justifyContent='space-between'>

                        <Pressable onPress={() => { navigation.goBack() }}>
                            <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                        </Pressable>
                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'left' }}>Sửa bài viết</Text>

                        <Pressable padding={3} onPress={async () => {
                            setIsLoading(true)
                            console.log('sdfsdfsdf');
                             fetch('http://obnd.me/post-api/update-post', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                redirect: 'follow',
                                body: JSON.stringify({
                                    id: currentPost.currentPost._id,
                                    imgUrl:currentPost.currentPost.imgUrl,
                                    textDescription: textDes,
                                    tags: currentPost.currentPost.tags
                                })
                            })
                            .then(res => res.text())
                            .then(res => {
                                setIsLoading(false)
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Main' }],
                                })
                            })
                            
                        }}>
                            <Ionicons name='checkmark' color='black' size={40}></Ionicons>
                        </Pressable>
                    </Flex>
                    <Box borderRadius={20} margin={5} marginBottom={0} borderWidth={1} borderColor='black'>
                        <Flex padding={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
                            <Flex flexDirection='row' alignItems='center'>
                                {
                                    currentPost.loading ? <SkeletonContent
                                        containerStyle={{ width: 50 }}
                                        isLoading={true}
                                    >
                                        <Text style={{ width: 50, height: 50 }}> </Text>
                                    </SkeletonContent> :
                                        <Pressable >
                                            <Image alt='ad' borderRadius={10} width={50} height={50} source={{ uri: currentPost.currentPost.ownerId.avatar }}></Image>
                                        </Pressable>
                                }

                                <Box marginLeft={3}>
                                    {
                                        currentPost.loading ? <SkeletonContent
                                            containerStyle={{ width: 50 }}
                                            isLoading={true}
                                        >
                                            <Text style={{ width: 50, height: 15 }}> </Text>
                                        </SkeletonContent> :
                                            <Text style={{ fontFamily: 'NunitoExBold' }}>
                                                {currentPost.currentPost.ownerId.account}
                                            </Text>
                                    }
                                    {
                                        currentPost.loading ? <SkeletonContent
                                            containerStyle={{ width: 70 }}
                                            isLoading={true}
                                        >
                                            <Text style={{ width: 70, height: 15, marginTop: 5 }}> </Text>
                                        </SkeletonContent> :
                                            <Text style={{ fontFamily: 'Nunito', fontSize: 15 }}>
                                                {new XDate(Date.parse(currentPost.currentPost.created_date)).toString('dd/MM/yyyy')}
                                            </Text>
                                    }

                                </Box>
                            </Flex>
                        </Flex>
                        <Box backgroundColor='#f6f6f6' borderBottomWidth={0} borderWidth={1} borderRadius={20} padding={3} marginTop={0}>
                            {
                                currentPost.loading ? <SkeletonContent
                                    containerStyle={{ width: '100%' }}
                                    isLoading={true}
                                >
                                    <Text style={{ width: '100%', height: Dimensions.get('window').width - 50 }}> </Text>
                                </SkeletonContent> :
                                    <Image alt='anh' borderRadius={20} width='100%' height={Dimensions.get('window').width - 50} source={{ uri: currentPost.currentPost.imgUrl }}></Image>
                            }

                            <Center marginTop={5} paddingBottom={30}>
                                {
                                    currentPost.loading ? <SkeletonContent
                                        containerStyle={{ width: '100%' }}
                                        isLoading={true}
                                    >
                                        <Text style={{ width: '100%', height: 20 }}> </Text>
                                    </SkeletonContent> :
                                        <Box>
                                            <Input onChangeText={txt => setTextDes(txt)} value={textDes}></Input>
                                        </Box>
                                }

                                {
                                    currentPost.loading ? <SkeletonContent
                                        containerStyle={{ width: '100%' }}
                                        isLoading={true}
                                    >
                                        <Text style={{ width: '100%', height: 15, marginTop: 10 }}> </Text>
                                    </SkeletonContent> :
                                        <Text style={{ fontFamily: 'Nunito', fontSize: 15, color: '#86bdfd', textAlign: 'center' }}>
                                            {currentPost.currentPost.tags.toString()}
                                        </Text>
                                }

                            </Center>
                        </Box>
                    </Box>

                </ScrollView>
            </Box>
        )
    }

}