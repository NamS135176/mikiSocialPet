import React, { useEffect } from 'react'
import { Box, Flex, Text, Pressable, ScrollView, Image, Center, Menu } from 'native-base'
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import SkeletonContent from 'react-native-skeleton-content';
import { Dimensions } from 'react-native';
import XDate from './xdate'
import { Alert } from 'react-native';
export default function NewsScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    const dispatch = useDispatch()
    useEffect(() => {

    }, [])


    const followPost = useSelector((state) => {
        return state.followPost;
    });


    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box flex={1} paddingTop={45} backgroundColor='white' paddingX={5}>
                {/* <Spinner visible={followPost.loading} textStyle={{ color: '#FFF' }} /> */}
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
                <ScrollView marginTop={5}>
                    <Box>
                        {
                            followPost.loading ?
                                <Box>
                                    <ScrollView horizontal={true}>
                                        <SkeletonContent
                                            containerStyle={{ width: 100 }}
                                            isLoading={true}
                                        >
                                            <Text style={{ width: 100, height: 100 }}> </Text>
                                            <Text style={{ width: 100, height: 20, marginTop: 10 }}> </Text>
                                        </SkeletonContent>
                                        <SkeletonContent
                                            containerStyle={{ width: 100 }}
                                            isLoading={true}
                                        >
                                            <Text style={{ width: 100, height: 100, marginLeft: 20 }}> </Text>
                                            <Text style={{ width: 100, height: 20, marginTop: 10, marginLeft: 20 }}> </Text>
                                        </SkeletonContent>
                                        <SkeletonContent
                                            containerStyle={{ width: 140 }}
                                            isLoading={true}
                                        >
                                            <Text style={{ width: 100, height: 100, marginLeft: 40 }}> </Text>
                                            <Text style={{ width: 100, height: 20, marginTop: 10, marginLeft: 40 }}> </Text>
                                        </SkeletonContent>
                                    </ScrollView>
                                    <Box marginTop={5} borderRadius={20} marginBottom={0} borderWidth={1} borderColor='black'>
                                        <Flex padding={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
                                            <Flex flexDirection='row' alignItems='center'>
                                                <SkeletonContent
                                                    containerStyle={{ width: 50 }}
                                                    isLoading={true}
                                                >
                                                    <Text style={{ width: 50, height: 50 }}> </Text>
                                                </SkeletonContent>

                                                <Box marginLeft={3}>
                                                    <SkeletonContent
                                                        containerStyle={{ width: 50 }}
                                                        isLoading={true}
                                                    >
                                                        <Text style={{ width: 50, height: 15 }}> </Text>
                                                    </SkeletonContent>
                                                    <SkeletonContent
                                                        containerStyle={{ width: 70 }}
                                                        isLoading={true}
                                                    >
                                                        <Text style={{ width: 70, height: 15, marginTop: 5 }}> </Text>
                                                    </SkeletonContent>
                                                </Box>
                                            </Flex>
                                            <Pressable onPress={() => { setShowModal(true) }}>
                                                <Image alt='option' width={19} height={17} source={require('../../images/PostDetail/ic_options.png')}></Image>
                                            </Pressable>
                                        </Flex>
                                        <Box backgroundColor='#f6f6f6' borderBottomWidth={0} borderWidth={1} borderRadius={20} padding={3} marginTop={0}>
                                            <SkeletonContent
                                                containerStyle={{ width: '100%' }}
                                                isLoading={true}
                                            >
                                                <Text style={{ width: '100%', height: Dimensions.get('window').width - 50 }}> </Text>
                                            </SkeletonContent>
                                            <Center marginTop={5} paddingBottom={30}>
                                                <SkeletonContent
                                                    containerStyle={{ width: '100%' }}
                                                    isLoading={true}
                                                >
                                                    <Text style={{ width: '100%', height: 20 }}> </Text>
                                                </SkeletonContent>

                                                <SkeletonContent
                                                    containerStyle={{ width: '100%' }}
                                                    isLoading={true}
                                                >
                                                    <Text style={{ width: '100%', height: 15, marginTop: 10 }}> </Text>
                                                </SkeletonContent>
                                            </Center>
                                        </Box>
                                    </Box>
                                    <Center marginTop={-4} zIndex={10} >
                                        <Box backgroundColor='white' width='70%' paddingX={5} paddingY={3} borderRadius={20} borderWidth={1}>

                                            <SkeletonContent
                                                containerStyle={{ width: '100%' }}
                                                isLoading={true}
                                            >
                                                <Text style={{ width: '100%', height: 20 }}> </Text>
                                            </SkeletonContent>
                                        </Box>
                                    </Center>
                                </Box>
                                :
                                <Box backgroundColor='white'>
                                    {
                                        followPost.listFollowPost.length == 0 ?
                                            <Center>
                                                <Text style={{ textAlign: 'center', fontFamily: 'NunitoSemi', fontSize: 20 }}>
                                                    Hãy theo dõi thêm thật nhiều bạn bè để xem được những bức ảnh thú vị về chó mèo bạn nhé!
                                                </Text></Center> :
                                            <Box >
                                                <ScrollView horizontal={true} marginBottom={5}>
                                                    {
                                                        userData.followed.map(
                                                            (item, index) => {
                                                                return (
                                                                    <Pressable key={index} marginRight={5} onPress={() => { navigation.navigate('ProfileUser', { account: item.account }) }}>
                                                                        <Box>
                                                                            <Image source={{ uri: item.avatar }} width={100} height={100} borderRadius={20} alt='ava'></Image>
                                                                            <Text style={{ textAlign: 'center', width: 100, paddingTop: 10, fontFamily: 'NunitoExBold' }}>
                                                                                {item.account}
                                                                            </Text>
                                                                        </Box>
                                                                    </Pressable>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </ScrollView>
                                                {
                                                    followPost.listFollowPost.map(
                                                        (item, index) => {
                                                            return (
                                                                <Box key={index} marginBottom={5}>
                                                                    <Box borderRadius={20} marginBottom={5} marginBottom={0} borderWidth={1} borderColor='black'>
                                                                        <Flex padding={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
                                                                            <Flex flexDirection='row' alignItems='center'>
                                                                                <Pressable onPress={() => {
                                                                                    if (item.ownerId.account == userData.account) {
                                                                                        navigation.navigate('Profile')
                                                                                    }
                                                                                    else {
                                                                                        navigation.navigate('ProfileUser', { account: item.ownerId.account })
                                                                                    }
                                                                                }}>
                                                                                    <Image alt='ad' borderRadius={10} width={50} height={50} source={{ uri: item.ownerId.avatar }}></Image>
                                                                                </Pressable>
                                                                                <Box marginLeft={3}>

                                                                                    <Text style={{ fontFamily: 'NunitoExBold' }}>
                                                                                        {item.ownerId.account}
                                                                                    </Text>
                                                                                    <Text style={{ fontFamily: 'Nunito', fontSize: 15 }}>
                                                                                        {new XDate(Date.parse(item.created_date)).toString('dd/MM/yyyy')}
                                                                                    </Text>
                                                                                </Box>
                                                                            </Flex>
                                                                            {/* <Pressable onPress={() => { setShowModal(true) }}> */}
                                                                            <Menu
                                                                                shouldOverlapWithTrigger={false} // @ts-ignore
                                                                                placement={"bottom left"}
                                                                                trigger={(triggerProps) => {
                                                                                    return (
                                                                                        <Pressable {...triggerProps}>
                                                                                            <Image alt='option' width={19} height={17} source={require('../../images/PostDetail/ic_options.png')}></Image>
                                                                                        </Pressable>
                                                                                    )
                                                                                }}
                                                                            >
                                                                                <Menu.Item onPress={() => {
                                                                                    Alert.alert('Cảm ơn bạn! Chúng tôi sẽ xem xét báo cáo của bạn.')
                                                                                    fetch('http://obnd.me/post-api/update-report', {
                                                                                        method: 'POST',
                                                                                        headers: {
                                                                                            'Content-Type': 'application/json'
                                                                                        },
                                                                                        redirect: 'follow',
                                                                                        body: JSON.stringify({
                                                                                            id: item._id,
                                                                                            account: userData.account
                                                                                        })
                                                                                    })
                                                                                }}>Báo cáo bài viết</Menu.Item>

                                                                            </Menu>

                                                                            {/* </Pressable> */}
                                                                        </Flex>
                                                                        <Box backgroundColor='#f6f6f6' borderBottomWidth={0} borderWidth={1} borderRadius={20} padding={3} marginTop={0}>
                                                                            <Image alt='anh' borderRadius={20} width='100%' height={Dimensions.get('window').width - 50} source={{ uri: item.imgUrl }}></Image>
                                                                            <Center marginTop={5} paddingBottom={30}>
                                                                                <Text style={{ fontFamily: 'NunitoSemi', fontSize: 20 }}>
                                                                                    {item.textDescription}
                                                                                </Text>
                                                                                <Text style={{ fontFamily: 'Nunito', fontSize: 15, color: '#86bdfd', textAlign: 'center' }}>
                                                                                    {item.tags.toString()}
                                                                                </Text>
                                                                            </Center>
                                                                        </Box>
                                                                    </Box>
                                                                    <Center marginTop={-7} zIndex={10} >
                                                                        <Box backgroundColor='white' width='70%' paddingX={5} paddingY={3} borderRadius={20} borderWidth={1}>
                                                                            <Flex justifyContent='space-between' alignItems='center' flexDirection='row'>
                                                                                <Flex flexDirection='row' alignItems='center'>
                                                                                    {
                                                                                        item.liked.filter(item => {
                                                                                            console.log(item);
                                                                                            return item == userData.account
                                                                                        }).length != 0 ?
                                                                                            <Pressable onPress={async () => {

                                                                                                const index = followPost.listFollowPost.indexOf(item)
                                                                                                // console.log(index);
                                                                                                const listPost = followPost.listFollowPost

                                                                                                const thisLike = listPost[index].liked.filter(item => {
                                                                                                    return item.account == userData.account
                                                                                                })[0]
                                                                                                const  i = listPost[index].liked.indexOf(thisLike)
                                                                                                listPost[index].liked.splice(i,1)
                                                                                                console.log(listPost[index]);
                                                                                                dispatch({
                                                                                                    type: "UPDATE_LIKE_VIEW",
                                                                                                    payload: {
                                                                                                        listFollowPost: listPost
                                                                                                    }
                                                                                                })

                                                                                                const data = await fetch('http://obnd.me/post-api/update-like', {
                                                                                                    method: 'POST',
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json'
                                                                                                    },
                                                                                                    body: JSON.stringify({
                                                                                                        id: item._id,
                                                                                                        account: userData.account
                                                                                                    })
                                                                                                }
                                                                                                )
                                                                                                const res = await fetch('http://obnd.me/update-like', {
                                                                                                    method: 'POST',
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json'
                                                                                                    },
                                                                                                    body: JSON.stringify({
                                                                                                        account: userData.account,
                                                                                                        idLiked: item._id,
                                                                                                    })
                                                                                                }
                                                                                                )
                                                                                            }}>
                                                                                                <Ionicons name='heart' color='red' size={30}></Ionicons>
                                                                                            </Pressable>
                                                                                            :
                                                                                            <Pressable onPress={async () => {
                                                                                                const index = followPost.listFollowPost.indexOf(item)
                                                                                                // console.log(index);
                                                                                                const listPost = followPost.listFollowPost

                                                                                                listPost[index].liked.push(userData.account)
                                                                                                console.log(listPost[index]);
                                                                                                dispatch({
                                                                                                    type: "UPDATE_LIKE_VIEW",
                                                                                                    payload: {
                                                                                                        listFollowPost: listPost
                                                                                                    }
                                                                                                })
                                                                                                const data = await fetch('http://obnd.me/post-api/update-like', {
                                                                                                    method: 'POST',
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json'
                                                                                                    },
                                                                                                    body: JSON.stringify({
                                                                                                        id: item._id,
                                                                                                        account: userData.account
                                                                                                    })
                                                                                                }
                                                                                                )
                                                                                                const res = await fetch('http://obnd.me/update-like', {
                                                                                                    method: 'POST',
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json'
                                                                                                    },
                                                                                                    body: JSON.stringify({
                                                                                                        account: userData.account,
                                                                                                        idLiked: item._id,
                                                                                                    })
                                                                                                }
                                                                                                )
                                                                                            }}>
                                                                                                <Ionicons name='heart-outline' color='black' size={30}></Ionicons>
                                                                                            </Pressable>
                                                                                    }
                                                                                    <Text style={{ fontFamily: "NunitoSemi" }}>{item.liked.length}</Text>
                                                                                </Flex>
                                                                                <Pressable onPress={() => { navigation.navigate('PostDetailSecond', { item: item._id }) }}>
                                                                                    <Flex flexDirection='row' alignItems='center'>
                                                                                        <Ionicons name='chatbox-ellipses-outline' color='black' size={30}></Ionicons>
                                                                                        <Text style={{ fontFamily: "NunitoSemi" }}>{item.comments.length}</Text>
                                                                                    </Flex>
                                                                                </Pressable>
                                                                                <Flex flexDirection='row' alignItems='center'>
                                                                                    <Ionicons name='share-social' color='black' size={30}></Ionicons>
                                                                                </Flex>
                                                                            </Flex>
                                                                        </Box>
                                                                    </Center>
                                                                </Box>
                                                            )
                                                        }
                                                    )
                                                }

                                            </Box>
                                    }
                                </Box>

                        }
                    </Box>
                </ScrollView>
            </Box>
        )
    }
}
