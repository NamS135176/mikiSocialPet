import React, { useEffect, useState } from 'react'
import { Box, ScrollView, Flex, Image, Text, Pressable, Center, Menu } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SkeletonContent from 'react-native-skeleton-content';
import { Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Share } from 'react-native';
export default function NewsTagScreen({ route, navigation }) {
    const { tag } = route.params
    console.log(tag);
    const [listPost, setListPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: 'GET_POST_TAG',
            payload: tag.split('#')[1]
        })
        // setIsLoading(true)
        // console.log(tag.split('#')[1]);
        // fetch('http://obnd.me/post-api/get-post-by-tag/' + tag.split('#')[1], {
        //     method: 'GET'
        // }
        // )
        //     .then(res => res.text())
        //     .then(res => {
        //         setIsLoading(false)
        //         console.log(JSON.parse(res).length);
        //         setListPost(JSON.parse(res))
        //     })
    }, [])

    const postTag = useSelector((state) => {
        return state.postTag;
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView paddingX={5}>
<Flex marginBottom={5} paddingX={5} flexDirection='row' alignItems='center' justifyContent='space-between'>

    <Pressable onPress={() => { navigation.goBack() }}>
        <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
    </Pressable>
    <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'left' }}>{tag}</Text>

    <Pressable onPress={() => {
        dispatch({
            type: 'GET_POST_TAG',
            payload: tag.split('#')[1]
        })
    }}>
        <Ionicons name='reload' color='black' size={30}></Ionicons>
    </Pressable>
</Flex>
{
    postTag.loading ?
        <Box>
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
        </Box> :
        <Box backgroundColor='white'>
            {
                postTag.postTag.length == 0 ?
                    <Center>
                        <Text style={{ textAlign: 'center', fontFamily: 'NunitoSemi', fontSize: 20 }}>
                            Chưa có bài viết nào sử dụng thẻ này. Hãy là người đầu tiên nhé!
                        </Text></Center> :
                    <Box >

                        {
                            postTag.postTag.map(
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
                                                                {/* {new XDate(Date.parse(item.created_date)).toString('dd/MM/yyyy')} */}
                                                                {
                                                                    moment(Date.parse(item.created_date)).fromNow()
                                                                }
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
                                                                        console.log('sdfsdfhrtyh'); const index = postTag.postTag.indexOf(item)
                                                                        console.log(index);
                                                                        const listPost = postTag.postTag

                                                                        const thisLike = listPost[index].liked.filter(item => {
                                                                            return item.account == userData.account
                                                                        })[0]
                                                                        const i = listPost[index].liked.indexOf(thisLike)
                                                                        listPost[index].liked.splice(i, 1)
                                                                        console.log(listPost[index]);
                                                                        dispatch({
                                                                            type: "UPDATE_LIKE_VIEW_TAG",
                                                                            payload: {
                                                                                postTag: listPost
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
                                                                        console.log('sdfsdfhrtyh');
                                                                        const index = postTag.postTag.indexOf(item)
                                                                        // console.log(index);
                                                                        const list = postTag.postTag

                                                                        list[index].liked.push(userData.account)
                                                                        console.log(list[index]);
                                                                        dispatch({
                                                                            type: "UPDATE_LIKE_VIEW_TAG",
                                                                            payload: {
                                                                                postTag: list
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
                                                        <Pressable >
                                                            <Flex flexDirection='row' alignItems='center'>
                                                                <Ionicons name='share-social' color='black' size={30}></Ionicons>
                                                            </Flex>
                                                        </Pressable>

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
</ScrollView>
        </SafeAreaView>
    )
}
