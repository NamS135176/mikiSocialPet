import React, { useState, useEffect } from 'react'
import { Box, Button, ScrollView, Image, Center, Flex, Text, Pressable } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts } from 'expo-font';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Dimensions } from 'react-native';
import { firebaseApp, storage } from '../../commonComponents/FirebaseConfig';
export default function Profile({ navigation }) {
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    // useEffect(() => {
    //     fetch('http://obnd-miki.herokuapp.com/get-post-follow/namnt', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => response.text())
    //         .then(result => {
    //             setListPost(JSON.parse(result))
    //         })
    //         .catch(error => console.log('error', error));
    // }, [])
    // const [listPost, setListPost] = useState([])
    const [status, setStatus] = useState(1)
    const [isImg, setIsImg] = useState(1)
    const dispatch = useDispatch()
    const [height, setHeight] = useState(null);
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    const myPost = useSelector((state) => {
        return state.myPost;
    });
    console.log(myPost);
    // console.log(userData);
    const [cover, setCover] = useState(userData.coverImage)
    const [avatar, setAvatar] = useState(userData.avatar)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.2,
        });

        console.log(result);

        if (!result.cancelled) {
            setCover(result.uri);
            let h = Dimensions.get('window').width / (result.width / result.height)
            setHeight(h)
            return (result.uri)
        }
    };
    const pickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.3,
        });

        console.log(result);

        if (!result.cancelled) {
            setAvatar(result.uri);
            let h = Dimensions.get('window').width / (result.width / result.height)
            setHeight(h)
            return (result.uri)
        }
    };
    const uploadImage = async (uri, imageName) => {
        const res = await fetch(uri);
        const blob = await res.blob();
        let ref = storage.ref().child('covers/' + imageName)
        return ref.put(blob);
    }
    const uploadAvatar = async (uri, imageName) => {
        const res = await fetch(uri);
        const blob = await res.blob();
        let ref = storage.ref().child('avatars/' + imageName)
        return ref.put(blob);
    }

    const handleUpdateAvatar = async () => {
        const uri = await pickAvatar()
        if (uri != userData.avatar) {
            const data = await uploadAvatar(uri, userData.account + "-avatar")
            const ref = storage.ref('avatars/' + userData.account + "-avatar");
            const url = await ref.getDownloadURL();
            const token = await AsyncStorage.getItem('userToken')
            fetch('http://obnd.me/update-account', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                redirect: 'follow',
                body: JSON.stringify({
                    account: userData.account,
                    avatar: url
                })
            })
                .then(result => result.text())
                .then(async res => {
                    console.log(res);
                    dispatch({
                        type: "SET_USER_INFO",
                        payload: {
                            account: userData.account,
                            displayName: userData.displayName,
                            typePet: userData.typePet,
                            birthDay: userData.birthDay,
                            sex: userData.sex,
                            owner: userData.owner,
                            avatar: url,
                            coverImage: userData.coverImage,
                            followMe: userData.followMe,
                            followed: userData.followed,
                            liked: userData.liked,
                        }
                    })
                })
            // console.log(res);

        }
    }

    const handleUpdateCover = async () => {
        const uri = await pickImage()
        if (uri != userData.coverImage) {
            const data = await uploadImage(uri, userData.account + "-cover")
            const ref = storage.ref('covers/' + userData.account + "-cover");
            const url = await ref.getDownloadURL();
            const token = await AsyncStorage.getItem('userToken')
            fetch('http://obnd.me/update-account', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                redirect: 'follow',
                body: JSON.stringify({
                    account: userData.account,
                    coverImage: url
                })
            })
                .then(result => result.text())
                .then(async res => {
                    console.log(res);
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
                            coverImage: url,
                            followMe: userData.followMe,
                            followed: userData.followed,
                            liked: userData.liked,
                        }
                    })
                })
            // console.log(res);

        }
    }

    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <ScrollView backgroundColor='white'>
                <Box backgroundColor='white' position='relative'>
                    <Pressable onPress={handleUpdateCover} zIndex={100} position='absolute' top={10} left={3}>
                        <Box>
                            <Ionicons name='image' size={30} color='white'></Ionicons>
                        </Box>
                    </Pressable>
                    <Image alt='cover' width='100%' height={250} resizeMode='cover' source={{ uri: cover }}></Image>

                    <Center marginTop={-75} zIndex={3} >
                        <Pressable onPress={handleUpdateAvatar}>
                            <Image borderRadius={75} borderWidth={10} borderColor='white' alt='cover' width={150} height={150} resizeMode='cover' source={{ uri: avatar }}></Image>
                        </Pressable>
                    </Center>

                    <Flex zIndex={1} marginTop={-75} flexDirection='row' justifyContent='space-between'>
                        <Center marginLeft={-10} flex={1} paddingTop={10}>
                            <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                                {userData.followMe.length}
                            </Text>
                            <Text style={{ fontFamily: 'Nunito', fontSize: 13 }}>
                                Theo dõi
                            </Text>
                        </Center>
                        <Center marginRight={-10} flex={1} paddingTop={10}>
                            <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                                {userData.followed.length}
                            </Text>
                            <Text style={{ fontFamily: 'Nunito', fontSize: 13 }}>
                                Đang Theo dõi
                            </Text>
                        </Center>
                    </Flex>
                    <Flex zIndex={1} flexDirection='row' justifyContent='space-between'>
                        <Center borderRightWidth={2} borderColor='#ccc' marginLeft={-10} flex={1} paddingTop={5}>
                            <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                                {userData.account}
                            </Text>

                        </Center>
                        <Center borderRightWidth={2} borderColor='#ccc' marginRight={-10} flex={1} paddingTop={5}>
                            <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                                {userData.displayName}
                            </Text>
                        </Center>
                    </Flex>
                    <Center paddingX={10} paddingTop={5} >
                        <Text style={{ textAlign: 'center' }}>{userData.owner.description}</Text>
                    </Center>
                    <Flex marginTop={3} flexDirection='row' justifyContent='center'>
                        {
                            status == 1 ? <Center width={45} height={45} marginX={3} borderRadius={25} backgroundColor='#FFA788'>
                                <Image alt='icon' width={26} height={22} source={require('../../images/Profile/ic_paw_pet_wwhite.png')}></Image>
                            </Center> :
                                <Pressable onPress={() => { setStatus(1) }}>
                                    <Center width={45} height={45} marginX={3} borderRadius={25} backgroundColor='#ddd'>
                                        <Image alt='icon' width={26} height={22} source={require('../../images/Profile/ic_paw_pet_gray.png')}></Image>
                                    </Center>
                                </Pressable>
                        }
                        {
                            status == 2 ? <Center width={45} height={45} marginX={3} borderRadius={25} backgroundColor='#FFA788'>
                                <Image alt='icon' width={18} height={22} source={require('../../images/Profile/ic_account_profile_white.png')}></Image>
                            </Center> :
                                <Pressable onPress={() => { setStatus(2) }}>
                                    <Center width={45} height={45} marginX={3} borderRadius={25} backgroundColor='#ddd'>
                                        <Image alt='icon' width={18} height={22} source={require('../../images/Profile/ic_account_profile_gray.png')}></Image>
                                    </Center>
                                </Pressable>
                        }
                        <Pressable onPress={() => {
                            navigation.navigate('Setting')
                        }}>
                            <Center width={45} height={45} marginX={3} borderRadius={25} backgroundColor='#ddd'>
                                <Image alt='icon' width={8} height={2} source={require('../../images/Profile/ic_seeting_profile.png')}></Image>
                            </Center>
                        </Pressable>

                    </Flex>
                    {
                        status == 1 ? <Box marginTop={3}>
                            <Flex paddingLeft={10} flexDirection='row'>
                                {
                                    isImg == 1 ? <Box borderBottomWidth={3} borderColor='#FFA788' paddingY={1}>
                                        <Text style={{ fontSize: 20, color: '#FFA788', fontFamily: 'NunitoExBold' }}>Ảnh</Text>
                                    </Box> : <Pressable onPress={() => { setIsImg(1) }}>
                                        <Box paddingY={1}>
                                            <Text style={{ fontSize: 20, color: '#ddd', fontFamily: 'NunitoExBold' }}>Ảnh</Text>
                                        </Box>
                                    </Pressable>
                                }
                                {
                                    isImg == 2 ? <Box marginLeft={5} borderBottomWidth={3} borderColor='#FFA788' paddingY={1}>
                                        <Text style={{ fontSize: 20, color: '#FFA788', fontFamily: 'NunitoExBold' }}>Thông tin</Text>
                                    </Box> : <Pressable onPress={() => { setIsImg(2) }}>
                                        <Box marginLeft={5} paddingY={1}>
                                            <Text style={{ fontSize: 20, color: '#ddd', fontFamily: 'NunitoExBold' }}>Thông tin</Text>
                                        </Box>
                                    </Pressable>
                                }
                            </Flex>
                            {
                                isImg == 1 ? <Box width='100%'>
                                    {myPost.listMyPost.length == 0 ? <Text style={{fontFamily:'Nunito', padding:25, fontSize:20, textAlign:'center'}}>
                                        Bạn chưa đăng gì, hãy tích cực tham gia các hoạt động nhé!
                                    </Text> :
                                        <Text>sfdfsdfsdf</Text>
                                    }
                                </Box> : <></>
                            }
                            {
                                isImg == 2 ? <Center paddingBottom={5} marginTop={5} width='100%'>
                                    <Flex alignItems='center' flexDirection='row' width='90%' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                        <Ionicons size={30} name="people-circle" color='black'></Ionicons>
                                        <Text flex={1} style={{ textAlign: 'center' }}>{userData.displayName}</Text>

                                    </Flex>
                                    <Flex marginTop={3} width='90%' flexDirection='row' justifyContent='space-around'>
                                        <Flex alignItems='center' flex={1} marginRight={1} flexDirection='row' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                            <Ionicons size={20} name="male" color='black'></Ionicons>
                                            {
                                                userData.sex ?
                                                    <Text flex={1} style={{ textAlign: 'center' }}>Đực</Text> :
                                                    <Text flex={1} style={{ textAlign: 'center' }}>Cái</Text>
                                            }

                                        </Flex>
                                        <Flex alignItems='center' flex={1} marginLeft={1} flexDirection='row' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                            <Ionicons size={20} name="calendar" color='black'></Ionicons>
                                            <Text flex={1} style={{ textAlign: 'center' }}>{userData.birthDay}</Text>

                                        </Flex>
                                    </Flex>
                                    <Flex marginTop={3} width='90%' flexDirection='row' justifyContent='space-around'>
                                        <Flex alignItems='center' flex={2} marginRight={1} flexDirection='row' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                            <Ionicons size={20} name="paw" color='black'></Ionicons>
                                            <Text flex={1} style={{ textAlign: 'center' }}>{userData.typePet}</Text>

                                        </Flex>
                                        <Flex alignItems='center' flex={1} marginLeft={1} flexDirection='row' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                            <Ionicons size={20} name="heart" color='black'></Ionicons>
                                            <Text flex={1} style={{ textAlign: 'center' }}>Độc thân</Text>

                                        </Flex>
                                    </Flex>
                                    <Flex marginTop={3} alignItems='center' flexDirection='row' width='90%' paddingX={5} paddingY={3} borderWidth={1} borderColor='black' borderRadius={10}>
                                        <Ionicons size={30} name="people-circle" color='black'></Ionicons>
                                        <Text flex={1} style={{ textAlign: 'center' }}>{userData.owner.name}</Text>

                                    </Flex>
                                </Center> : <></>
                            }
                        </Box> : <></>
                    }
                    {
                        status == 2 ?
                            <Box paddingBottom={5}>
                                <Flex marginTop={3} paddingLeft={10} flexDirection='row'>
                                    <Box borderBottomWidth={3} borderColor='#FFA788' paddingY={1}>
                                        <Text style={{ fontSize: 20, color: '#FFA788', fontFamily: 'NunitoExBold' }}>Thông tin</Text>
                                    </Box>

                                </Flex>
                                <Flex marginX={5} borderBottomWidth={1} borderColor='#ddd' paddingY={3} alignItems='center' flexDirection='row' justifyContent='space-between' >
                                    <Flex flexDirection='row' alignItems='center'>
                                        <Ionicons size={30} name="people-circle" color='#ccc'></Ionicons>
                                        <Text style={{ textAlign: 'center', paddingLeft: 10, color: '#ccc', fontFamily: 'NunitoSemi', fontSize: 18 }}>Họ tên :</Text>
                                    </Flex>
                                    <Box flex={1} paddingLeft={5}>
                                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>{userData.owner.name}</Text>
                                    </Box>
                                </Flex>
                                <Flex marginX={5} borderBottomWidth={1} borderColor='#ddd' paddingY={3} alignItems='center' flexDirection='row' justifyContent='space-between' >
                                    <Flex flexDirection='row' alignItems='center'>
                                        <Ionicons size={30} name="calendar" color='#ccc'></Ionicons>
                                        <Text style={{ textAlign: 'center', paddingLeft: 10, color: '#ccc', fontFamily: 'NunitoSemi', fontSize: 18 }}>Ngày sinh :</Text>
                                    </Flex>
                                    <Box flex={1} paddingLeft={5}>
                                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>{userData.owner.birthDay}</Text>
                                    </Box>
                                </Flex>
                                <Flex marginX={5} borderBottomWidth={1} borderColor='#ddd' paddingY={3} alignItems='center' flexDirection='row' justifyContent='space-between' >
                                    <Flex flexDirection='row' alignItems='center'>
                                        <Ionicons size={30} name="transgender" color='#ccc'></Ionicons>
                                        <Text style={{ textAlign: 'center', paddingLeft: 10, color: '#ccc', fontFamily: 'NunitoSemi', fontSize: 18 }}>Giới tính :</Text>
                                    </Flex>
                                    <Box flex={1} paddingLeft={5}>
                                        {
                                            userData.sex ? <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>Nam</Text> : <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>Nữ</Text>
                                        }
                                    </Box>
                                </Flex>
                                <Flex marginX={5} borderBottomWidth={1} borderColor='#ddd' paddingY={3} alignItems='center' flexDirection='row' justifyContent='space-between' >
                                    <Flex flexDirection='row' alignItems='center'>
                                        <Ionicons size={30} name="ios-football" color='#ccc'></Ionicons>
                                        <Text style={{ textAlign: 'center', paddingLeft: 10, color: '#ccc', fontFamily: 'NunitoSemi', fontSize: 18 }}>Sở thích :</Text>
                                    </Flex>
                                    <Box flex={1} paddingLeft={5}>
                                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>{userData.owner.hobby}</Text>
                                    </Box>
                                </Flex>
                                <Flex marginX={5} borderBottomWidth={1} borderColor='#ddd' paddingY={3} alignItems='center' flexDirection='row' justifyContent='space-between' >
                                    <Flex flexDirection='row' alignItems='center'>
                                        <Ionicons size={30} name="paw" color='#ccc'></Ionicons>
                                        <Text style={{ textAlign: 'center', paddingLeft: 10, color: '#ccc', fontFamily: 'NunitoSemi', fontSize: 18 }}>Pet :</Text>
                                    </Flex>
                                    <Box flex={1} paddingLeft={5}>
                                        <Text style={{ fontSize: 20, fontFamily: 'NunitoExBold', textAlign: 'right' }}>{userData.displayName}</Text>
                                    </Box>
                                </Flex>
                            </Box>

                            : <></>
                    }
                </Box>

                {/* <Button title='Sign Out' onPress={async () => {
                await AsyncStorage.setItem('userToken', '')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }}>sfsdfdf</Button> */}
            </ScrollView>
        )
    }
}
