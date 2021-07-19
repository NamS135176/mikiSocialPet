import React, { useEffect, useState } from 'react'
import { ScrollView, Flex, Box, Text, Image, Center, Input, Modal } from 'native-base'
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

export default function PostDetailSecondScreen({ route, navigation }) {
    const w = Dimensions.get('window').width;
    const [isLoading, setIsLoading] = useState(false)
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    const [showModal, setShowModal] = useState(false)
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    // console.log(userData);
    const dispatch = useDispatch()
    const { item } = route.params
    console.log(item);
    const [currentPost, setCurrentPost] = useState({
        loading: true,
        currentPost: {}
    })
    useEffect(() => {
        fetch(`http://obnd-miki.herokuapp.com/post-api/get-post/${item}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.text())
            .then(data => {
                setCurrentPost({
                    loading: false,
                    currentPost: JSON.parse(data)
                })
            })
    }, [])
    // const currentPost = useSelector((state) => {
    //     return state.currentPost;
    // });
    console.log(currentPost);

    const [commentText, setCommentText] = useState('')
    const handleChangeComment = txt => setCommentText(txt)
    const handlePostComment = async () => {
        if (commentText != "") {
            setIsLoading(true)
            fetch('http://obnd-miki.herokuapp.com/post-api/update-comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    id: currentPost.currentPost._id,
                    account: userData.account,
                    text: commentText
                })
            }
            )
                .then(res => res.text())
                .then((result) => {
                    setIsLoading(false)
                    fetch(`http://obnd-miki.herokuapp.com/post-api/get-post/${item}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.text())
                        .then(data => {
                            setCurrentPost({
                                loading: false,
                                currentPost: JSON.parse(data)
                            })
                        })
                })
        }
    }

    const handleToProfile = () => {
        if (currentPost.currentPost.ownerId.account == userData.account) {
            navigation.navigate('Profile')
        }
        else{
            navigation.navigate('ProfileUser', { account: currentPost.currentPost.ownerId.account })
        }
    }

    const handleReport = () => {
        setShowModal(false)
        Alert.alert('Cảm ơn bạn! Chúng tôi sẽ xem xét báo cáo của bạn.')
        fetch('http://obnd-miki.herokuapp.com/post-api/update-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify({
                id: currentPost.currentPost._id,
                account: userData.account
            })
        })
    }

    const handleLike = async () => {
        dispatch({
            type: "SET_USER_INFO",
            payload: {
                account: userData.account,
                displayName: userData.displayName,
                typePet: userData.typePet,
                birthDay: userData.birthDay,
                sex: userData.sex,
                owner: userData.owner,
                avatar: userData.avatar,
                coverImage: userData.coverImage,
                followMe: userData.followMe,
                followed: userData.followed,
                liked: [...userData.liked, currentPost.currentPost._id],
            }
        })

        setCurrentPost({...currentPost,currentPost: {...currentPost.currentPost,liked: [...currentPost.currentPost.liked, userData.account]}})
        const data = await fetch('http://obnd-miki.herokuapp.com/post-api/update-like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: currentPost.currentPost._id,
                account: userData.account
            })
        }
        )
        const res = await fetch('http://obnd-miki.herokuapp.com/update-like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: userData.account,
                idLiked: currentPost.currentPost._id,
            })
        }
        )
    }
    const handleDislike = async () => {
        const newLiked = userData.liked
        newLiked.pop()
        dispatch({
            type: "SET_USER_INFO",
            payload: {
                account: userData.account,
                displayName: userData.displayName,
                typePet: userData.typePet,
                birthDay: userData.birthDay,
                sex: userData.sex,
                owner: userData.owner,
                avatar: userData.avatar,
                coverImage: userData.coverImage,
                followMe: userData.followMe,
                followed: userData.followed,
                liked: newLiked
            }
        })
        const newLikedPost = currentPost.currentPost.liked
        newLikedPost.pop()
        setCurrentPost({...currentPost,currentPost: {...currentPost.currentPost,liked: newLikedPost}})
        // dispatch({
        //     type: "UPDATE_LIKE",
        //     payload: {
        //         post: { ...currentPost.currentPost, liked: newLikedPost }
        //     }
        // })
        const data = await fetch('http://obnd-miki.herokuapp.com/post-api/update-like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: currentPost.currentPost._id,
                account: userData.account
            })
        }
        )
        const res = await fetch('http://obnd-miki.herokuapp.com/update-like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: userData.account,
                idLiked: currentPost.currentPost._id,
            })
        }
        )
    }
    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box>
                <Spinner
                    visible={isLoading}
                    textStyle={{ color: '#FFF' }}
                />
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Box
                        paddingBottom={5}
                        borderBottomWidth={1}
                        borderColor="#ccc"
                        width={w}
                        position="absolute"
                        bottom={0}
                        left={0}
                        backgroundColor="white">

                        <Box borderColor="#ccc">
                            <Text onPress={handleReport} style={{ padding: 10, fontFamily: "NunitoSemi" }}>Báo cáo bài viết</Text>
                        </Box>
                    </Box>
                </Modal>
                <ScrollView backgroundColor='white' paddingTop={45}  >
                    <Flex paddingX={5} flexDirection='row' alignItems='center' justifyContent='space-between'>

                        <Pressable onPress={() => { navigation.goBack() }}>
                            <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                        </Pressable>
                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'left' }}>Bình luận thật bùng nổ nhé!</Text>

                        <Image alt='back' style={{ opacity: 0 }} source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
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
                                        <Pressable onPress={handleToProfile}>
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
                            <Pressable onPress={() => { setShowModal(true) }}>
                                <Image alt='option' width={19} height={17} source={require('../../images/PostDetail/ic_options.png')}></Image>
                            </Pressable>
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
                                        <Text style={{ fontFamily: 'NunitoSemi', fontSize: 20 }}>
                                            {currentPost.currentPost.textDescription}
                                        </Text>
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
                    <Center marginTop={-4} zIndex={10} >
                        <Box backgroundColor='white' width='70%' paddingX={5} paddingY={3} borderRadius={20} borderWidth={1}>
                            {
                                currentPost.loading ?
                                    <SkeletonContent
                                        containerStyle={{ width: '100%' }}
                                        isLoading={true}
                                    >
                                        <Text style={{ width: '100%', height: 20 }}> </Text>
                                    </SkeletonContent>
                                    :
                                    <Flex justifyContent='space-between' alignItems='center' flexDirection='row'>
                                        <Flex flexDirection='row' alignItems='center'>
                                            {
                                                userData.liked.includes(currentPost.currentPost._id) ?
                                                    <Pressable onPress={handleDislike}>
                                                        <Ionicons name='heart' color='red' size={30}></Ionicons>
                                                    </Pressable>
                                                    :
                                                    <Pressable onPress={handleLike}>
                                                        <Ionicons name='heart-outline' color='black' size={30}></Ionicons>
                                                    </Pressable>
                                            }
                                            <Text style={{ fontFamily: "NunitoSemi" }}>{currentPost.currentPost.liked.length}</Text>
                                        </Flex>
                                        <Flex flexDirection='row' alignItems='center'>
                                            <Ionicons name='chatbox-ellipses-outline' color='black' size={30}></Ionicons>
                                            <Text style={{ fontFamily: "NunitoSemi" }}>{currentPost.currentPost.comments.length}</Text>
                                        </Flex>
                                        <Flex flexDirection='row' alignItems='center'>
                                            <Ionicons name='share-social' color='black' size={30}></Ionicons>
                                        </Flex>
                                    </Flex>
                            }
                        </Box>
                    </Center>
                    {
                        currentPost.loading ?
                            <Box marginX={5} marginTop={-4} paddingBottom={150}></Box> :
                            <Box marginX={5} marginTop={-4} paddingBottom={150}>
                                {currentPost.currentPost.comments.map((item, index) => {
                                    if (index == 0) {
                                        return (
                                            <Box key={index} backgroundColor='white' zIndex={currentPost.currentPost.comments.length - index} borderRadius={20} borderWidth={1} paddingTop={5} paddingBottom={3} paddingX={3}>
                                                <Flex flexDirection='row' >
                                                    <Pressable onPress={() => {
                                                        if (item.idUser.account == userData.account) {
                                                            navigation.navigate('Profile')
                                                        }
                                                        else {
                                                            navigation.navigate('ProfileUser', { account: item.idUser.account })
                                                        }
                                                    }}>
                                                        <Image marginTop={1} alt='ad' borderRadius={10} width={50} height={50} source={{ uri: item.idUser.avatar }}></Image>
                                                    </Pressable>
                                                    <Box marginLeft={3} paddingRight={10}>
                                                        <Text style={{ fontFamily: 'NunitoExBold' }}>
                                                            {item.idUser.account}
                                                        </Text>
                                                        <Text style={{ fontFamily: 'Nunito', fontSize: 15 }}>
                                                            {item.text}
                                                        </Text>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        )
                                    }
                                    else if (index % 2 == 1) {
                                        return (
                                            <Box key={index} zIndex={currentPost.currentPost.comments.length - index} backgroundColor='#f6f6f6' marginTop={-9} borderRadius={20} borderWidth={1} paddingTop={10} paddingBottom={3} paddingX={3}>
                                                <Flex flexDirection='row' >
                                                    <Pressable onPress={() => {
                                                        if (item.idUser.account == userData.account) {
                                                            navigation.navigate('Profile')
                                                        }
                                                        else {
                                                            navigation.navigate('ProfileUser', { account: item.idUser.account })
                                                        }
                                                    }}>
                                                        <Image marginTop={1} alt='ad' borderRadius={10} width={50} height={50} source={{ uri: item.idUser.avatar }}></Image>
                                                    </Pressable>
                                                    <Box marginLeft={3} paddingRight={10}>
                                                        <Text style={{ fontFamily: 'NunitoExBold' }}>
                                                            {item.idUser.account}
                                                        </Text>
                                                        <Text style={{ fontFamily: 'Nunito', fontSize: 15 }}>
                                                            {item.text}
                                                        </Text>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        )
                                    }
                                    else {
                                        return (
                                            <Box key={index} zIndex={currentPost.currentPost.comments.length - index} backgroundColor='white' marginTop={-9} borderRadius={20} borderWidth={1} paddingTop={10} paddingBottom={3} paddingX={3}>
                                                <Flex flexDirection='row' >
                                                    <Pressable onPress={() => {
                                                        if (item.idUser.account == userData.account) {
                                                            navigation.navigate('Profile')
                                                        }
                                                        else {
                                                            navigation.navigate('ProfileUser', { account: item.idUser.account })
                                                        }
                                                    }}>
                                                        <Image marginTop={1} alt='ad' borderRadius={10} width={50} height={50} source={{ uri: item.idUser.avatar }}></Image>
                                                    </Pressable>
                                                    <Box marginLeft={3} paddingRight={10}>
                                                        <Text style={{ fontFamily: 'NunitoExBold' }}>
                                                            {item.idUser.account}
                                                        </Text>
                                                        <Text style={{ fontFamily: 'Nunito', fontSize: 15 }}>
                                                            {item.text}
                                                        </Text>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        )
                                    }
                                })}

                            </Box>
                    }
                </ScrollView>
                <Box backgroundColor='white' paddingY={3} paddingX={5} width='100%' position='absolute' bottom={0} left={0}>
                    <Input

                        _focus={{
                            borderColor: 'blue',
                        }}
                        onChangeText={handleChangeComment}
                        borderWidth={2}
                        backgroundColor={'#f5f5f5'}
                        borderColor="#f5f5f5"
                        InputRightElement={
                            <Pressable onPress={handlePostComment}>
                                <Box paddingRight={3} paddingY={3}>
                                    <Ionicons name="send" color="#4F8EF7" size={30} />
                                </Box>
                            </Pressable>
                        }
                        placeholder="Hãy viết gì đó nhé!"
                        placeholderTextColor={'black'}
                    />
                </Box>
            </Box>
        )
    }

}
