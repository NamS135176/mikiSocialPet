import React, { useState, useEffect } from 'react'
import { Box, Pressable, Flex, Text, Image, ScrollView, TextArea, Modal } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseApp, storage } from '../../commonComponents/FirebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay'
export default function PostScreen({ navigation }) {

    

    const userData = useSelector((state) => {
        return state.userInfo;
    });
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const [tags, setTags] = useState([])
    const [displayTag, setDisplayTag] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const [textContent, setTextContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const listTag = [
        '#motngaydeptroi',
        '#chuyenchomeo',
        '#vuice',
        '#meovodich',
        '#chotungtang',
        '#thattuyetvoi',
        '#chamsoc',
        '#chiase',
        '#tips',
        '#canhbao'
    ]
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.3,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            return (result.uri)
        }
    };

    const uploadImage = async (uri, imageName) => {
        const res = await fetch(uri);
        const blob = await res.blob();
        let ref = storage.ref().child('posts/'+imageName)
        return ref.put(blob);
    }

    const handleCreatePost = async () => {

        if (image == null) {
            setModalContent('Bạn quên chọn một bức ảnh rồi này!')
            setShowModal(true)
        }
        else if (tags.length == 0) {
            setModalContent('Hãy chọn cho mình những thẻ thú vị để mọi người dễ dàng theo dõi hơn nhé!')
            setShowModal(true)
        }
        else {
            const gen = Date.now()
            console.log(gen);
            setIsLoading(true)
            const data = await uploadImage(image, userData.account + "-post-" + gen)
            const ref = storage.ref('posts/' + userData.account + "-post-" + gen);
            const url = await ref.getDownloadURL();
            const res = await fetch('https://obnd-miki.herokuapp.com/post-api/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account: userData.account,
                    image: url,
                    textDescription: textContent,
                    tags: tags
                })
            })
            setIsLoading(false)
            dispatch({
                type: 'GET_MY_POST',
                payload: userData.account
            })
            navigation.reset({
                index: 0,
                routes: [{ name: 'Main' }],
            });
        }
    }

    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box flex={1} backgroundColor='white' paddingTop={45}>
                <Spinner visible={isLoading} textStyle={{ color: '#FFF' }} />
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="80%">
                        <Text style={{ fontSize: 20 }}>Ôi bạn ơi!</Text>
                        <Text style={{ paddingRight: 30, paddingTop: 20, paddingBottom: 35 }}>
                            {modalContent}
                        </Text>
                        <Text
                            onPress={() => {
                                setShowModal(false);
                            }}
                            style={{
                                textAlign: 'right',
                                paddingHorizontal: 15,
                                paddingVertical: 20,
                                color: '#2097f3',
                            }}>
                            OK
                        </Text>
                    </Modal.Content>
                </Modal>
                <Flex paddingX={5} flexDirection='row' alignItems='center' justifyContent='space-between'>

                    <Text style={{ fontSize: 20, fontFamily: 'NunitoSemi', flex: 1, textAlign: 'left' }}>Bài viết mới</Text>
                    <Text onPress={handleCreatePost} style={{ fontSize: 20, fontFamily: 'NunitoSemi', flex: 1, textAlign: 'right', color: 'blue' }}>Chia sẻ</Text>
                </Flex>
                <Box paddingX={5} paddingY={5}>
                    <Text style={{ fontFamily: 'Nunito' }}>
                        Chọn ảnh
                    </Text>
                    <Box paddingY={3}>
                        {image == null ? <Pressable onPress={pickImage}>
                            <Ionicons name='add-circle-outline' color='black' size={70} />
                        </Pressable> :
                            <Flex flexDirection='row' alignItems='center'>
                                <Image alt='post' source={{ uri: image }} width={100} height={100} borderRadius={10}></Image>
                                <Pressable marginLeft={5} onPress={() => { setImage(null) }}>
                                    <Ionicons name='backspace' color='black' size={50} />
                                </Pressable>
                            </Flex>
                        }
                    </Box>
                </Box>
                <ScrollView flex={1}>
                    <Box marginX={5} >
                        <TextArea onChangeText={(txt) => { setTextContent(txt) }} borderBottomWidth={0} borderTopLeftRadius={20} borderTopRightRadius={20} h={300} borderRadius={0} placeholder="Hãy chia sẻ với mọi người nhé!" />
                        <Box paddingY={5} paddingX={3} borderWidth={1} borderColor='#ccc' borderBottomLeftRadius={20} borderBottomRightRadius={20}>
                            <Text style={{ fontFamily: 'Nunito' }}>{
                                displayTag
                            }</Text>
                        </Box>
                    </Box>
                    <ScrollView padding={5} horizontal={true}>
                        {
                            listTag.map(item => {
                                return (
                                    <Pressable onPress={() => {
                                        console.log('dfssdf');
                                        if (!tags.includes(item)) {
                                            setTags([...tags, item])
                                            setDisplayTag(`${displayTag} ${item}`)
                                        }
                                    }}>
                                        <Box marginRight={2} paddingY={2} paddingX={3} borderRadius={10} backgroundColor='#ddd'>
                                            <Text style={{ fontFamily: 'Nunito' }}>{item}</Text>
                                        </Box>
                                    </Pressable>
                                )
                            })
                        }

                    </ScrollView>

                </ScrollView>
            </Box>
        )
    }

}
