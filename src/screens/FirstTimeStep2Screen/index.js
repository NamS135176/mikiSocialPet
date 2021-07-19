import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TextInput, Pressable, Modal, ActivityIndicator, StyleSheet, KeyboardAvoidingView } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import XDate from './xdate'
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default function FirstTimeStep2Screen({ route, navigation }) {
    const { petInfo, token, username } = route.params
    const [date, setDate] = useState(new Date());
    const [showPetDate, setShowPetDate] = useState(false)
    const [ownerName, setOwnerName] = useState('')
    const [hobby, setHobby] = useState('')
    const [des, setDes] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalErrVisible, setModalErrVisible] = useState(false);
    const [modalErrText, setModalErrText] = useState("");
    const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
    const dispatch = useDispatch();

    console.log(petInfo);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPetDate(!showPetDate)
        setDate(currentDate);
    };

    const handleBack = () => {
        navigation.goBack()
    }

    const handleChangeOwnerName = (text) => {
        setOwnerName(text)
    }

    const handleChangeHobby = (text) => {
        setHobby(text)
    }

    const handleChangeOwnerDes = (text) => {
        setDes(text)
    }

    const submitRegister = async () => {
        if (des == "" || ownerName == "" || hobby == "") {
            setModalErrText('Bạn quên nhập thông tin rồi kìa!')
            setModalErrVisible(true)
        }
        else if (des.length > 250) {
            setModalErrText('Chỉ nên nhập mô tả dưới 250 ký tự thôi bạn nhé!')
            setModalErrVisible(true)
        }
        else {
            setModalVisible(true)

            console.log(token);
            const res = fetch('http://obnd.me/update-account', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                redirect: 'follow',
                body: JSON.stringify({
                    account: username,
                    displayName: petInfo.displayName,
                    typePet: petInfo.petType,
                    birthDay: petInfo.dob,
                    sex: petInfo.sex,
                    owner: {
                        name: ownerName,
                        hobby: hobby,
                        description: des,
                        birthDay: new XDate(date).toString("dd/MM/yyyy")
                    },
                    avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                    coverImage: 'https://i.pinimg.com/originals/95/56/f0/9556f0d55126e028a9b63a0bd2909c7d.jpg',
                })
            })
                .then(result => result.text())
                .then(async res => {
                    setModalVisible(false)
                    await AsyncStorage.setItem('userToken', token)
                    setModalSuccessVisible(true)
                    dispatch({
                        type: "SET_USER_INFO",
                        payload: {
                            account: username,
                            displayName: petInfo.displayName,
                            typePet: petInfo.petType,
                            birthDay: petInfo.dob,
                            sex: petInfo.sex,
                            owner: {
                                name: ownerName,
                                hobby: hobby,
                                description: des,
                                birthDay: new XDate(date).toString("dd/MM/yyyy")
                            },
                            avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                            coverImage: 'https://i.pinimg.com/originals/95/56/f0/9556f0d55126e028a9b63a0bd2909c7d.jpg',
                            followMe: [],
                            followed: [],
                            liked: [],
                        }
                    })
                })
        }
    }

    return (
        // <ScrollView>
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text>Loading...</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalErrVisible}
                onRequestClose={() => {

                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MaterialIcon onPress={() => { setModalErrVisible(false) }} style={{ position: 'absolute', top: 0, right: 0, padding: 10 }} name='close' size={30} color="black" />
                        <Image style={{ width: 100, height: 100 }} source={require('../../../src/images/Login/ic_warning-01.png')}></Image>
                        <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 20 }}>{modalErrText}</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSuccessVisible}
                onRequestClose={() => {
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MaterialIcon onPress={() => {
                            setModalSuccessVisible(false)
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Main' }],
                            });
                        }} style={{ position: 'absolute', top: 0, right: 0, padding: 10 }} name='close' size={30} color="black" />
                        <Image style={{ width: 100, height: 100 }} source={require('../../../src/images/Login/ic_success.png')}></Image>
                        <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 20 }}>Cảm ơn bạn đã hoàn thành!</Text>
                    </View>
                </View>
            </Modal>
            <Image style={{ width: "100%", height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../../src/images/SignUp/bg_login.png')}></Image>
            <View style={{ marginTop: 50, position: 'relative' }}>
                <Text style={{
                    color: "#4F292C",
                    fontSize: 25,
                    textAlign: "center",
                    // fontFamily: 'UTMGodWord',

                }}>
                    Thông tin chủ nuôi
                </Text>
                <MaterialIcon onPress={handleBack} style={{ position: "absolute", top: 5, left: 0, paddingLeft: 10 }} name='arrow-back' size={30} color="black" />
            </View>
            <KeyboardAvoidingView behavior='position'>
                <View style={{ height: 60, zIndex: 10, marginTop: 150 }}>
                    <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput onChangeText={handleChangeOwnerName} style={{ marginLeft: 20, width: "80%" }} placeholder="Họ và tên"></TextInput>
                        <MaterialIcon name='person' size={30} color="#ff9a7b" />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ height: 60, zIndex: 10 }}>
                        <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginLeft: 20, width: "40%", color: '#7b7b7b' }}>Ngày sinh</Text>
                            <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
                                <Pressable onPress={() => setShowPetDate(true)}>
                                    <View style={{ paddingHorizontal: 30, paddingVertical: 10, backgroundColor: '#ff9a7b', borderRadius: 20, }}><Text style={{ color: 'white' }}>{new XDate(date).toString("dd/MM/yyyy")}</Text></View>
                                </Pressable>
                                {showPetDate ? <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                /> : <></>}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 60, zIndex: 10, marginTop: 20 }}>
                    <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput onChangeText={handleChangeHobby} style={{ marginLeft: 20, width: "80%" }} placeholder="Sở thích"></TextInput>
                        <MaterialIcon name='sports-football' size={30} color="#ff9a7b" />
                    </View>
                </View>
                <View style={{ height: 60, zIndex: 10, marginTop: 20 }}>
                    <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput onChangeText={handleChangeOwnerDes} style={{ marginLeft: 20, width: "80%" }} placeholder="Một vài từ mô tả bản thân..."></TextInput>
                        <MaterialIcon name='sticky-note-2' size={30} color="#ff9a7b" />
                    </View>
                </View>
            </KeyboardAvoidingView>

            <View style={{ width: "50%", alignSelf: 'center', backgroundColor: '#ff9a7b', height: 60, borderRadius: 50, marginTop: 30 }}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text onPress={submitRegister} style={{ color: 'white', fontSize: 25 }}>Hoàn tất</Text>
                </View>
            </View>
        </View>

    )
}
