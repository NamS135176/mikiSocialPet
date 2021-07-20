import React, { useState } from 'react';
import { Button, StyleSheet, ActivityIndicator, View, Text, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView, CheckBox, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SvgUri from 'react-native-svg-uri';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import PetSelector from './components/PetSelector';
import ModalSelector from 'react-native-modal-selector'
import DateTimePicker from '@react-native-community/datetimepicker';
import XDate from './xdate'
import { useSelector } from 'react-redux';

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

const dogs = [{ label: 'Husky' }, { label: 'Chihuahua' }, { label: 'Shiba' }, { label: 'Bagle' }, { label: 'Bully' }, { label: 'Doberman' }, { label: 'Pitbull' }, { label: 'Pug' },]
const cats = [{ label: 'Anh lông ngắn' }, { label: 'Anh lông dài' }, { label: 'ALD' }, { label: 'Scotish Fold' }, { label: 'Scotish Straight' }, { label: 'Golden' }, { label: 'Munchkin' }, { label: 'Sphynx' },]
export default function UpdateStep1({ route, navigation }) {
    const userData = useSelector((state) => {
        return state.userInfo;
    });
    const [displayName, setDisplayName] = useState(userData.displayName)
    const [isDogSelect, setIsDogSelect] = useState(true)
    const [visibleDogPick, setVisibleDogPick] = useState(false)
    const [visibleCatPick, setVisibleCatPick] = useState(false)
    const [typeDog, setTypeDog] = useState('chọn loại')
    const [typeCat, setTypeCat] = useState('chọn loại')
    const [sex, setSex] = useState(userData.sex)
    const [date, setDate] = useState(new Date());
    const [showPetDate, setShowPetDate] = useState(false)
    const [modalErrVisible, setModalErrVisible] = useState(false);
    const [modalErrText, setModalErrText] = useState("");

    const { token , username} = route.params
    // console.log(token);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPetDate(!showPetDate)
        setDate(currentDate);
    };

    const handleChangeDisplayName = (text) => {
        setDisplayName(text)
    }

    const setSelectDog = () => {
        setIsDogSelect(!isDogSelect)
    }

    const openDogPick = () => {
        setVisibleDogPick(true)
    }

    const openCatPick = () => {
        setVisibleCatPick(true)
    }

    const handleNext = () => {
        // console.log(isDogSelect);
        if (displayName == '') {
            setModalErrVisible(true)
            setModalErrText("Bạn quên nhập tên cho pet rồi kìa!")
        }
        else {
            if (isDogSelect) {
                if (typeDog == 'chọn loại') {
                    setModalErrVisible(true)
                    setModalErrText("Bạn quên chọn loại cho pet rồi kìa!")
                }
                else {
                    navigation.navigate('Step2', {
                        petInfo: {
                            displayName: displayName,
                            petType: typeDog,
                            sex: sex,
                            dob: new XDate(date).toString('dd/MM/yyyy')
                        },
                        token: token,
                        username: username
                    })
                }

            }
            else {
                if (typeCat == 'chọn loại') {
                    setModalErrVisible(true)
                    setModalErrText("Bạn quên chọn loại cho pet rồi kìa!")
                }
                else {
                    navigation.navigate('Step2', {
                        petInfo: {
                            displayName: displayName,
                            petType: typeCat,
                            sex: sex,
                            dob: new XDate(date).toString('dd/MM/yyyy')
                        },
                        token: token,
                        username: username
                    })
                }

            }
        }
    }

    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'UTMGodWord': require('../../../assets/fonts/UTMGodWord.ttf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: "100%", height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../../src/images/SignUp/bg_login.png')}></Image>
                    <View style={{ marginTop: 50, position: 'relative' }}>
                        <Text style={{
                            color: "#4F292C",
                            fontSize: 25,
                            textAlign: "center",
                            // fontFamily: 'UTMGodWord',

                        }}>
                            Hoàn thiện đăng ký
                        </Text>
                        {/* <MaterialIcon onPress={handleBack} style={{ position: "absolute", top: 5, left: 0, paddingLeft: 10 }} name='arrow-back' size={30} color="black" /> */}
                    </View>
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
                    <ModalSelector
                        style={{ position: 'absolute', top: -5000, left: 0, zIndex: 10000 }}
                        data={dogs}
                        keyExtractor={item => item.label}
                        visible={visibleDogPick}
                        onModalClose={(item) => {
                            setVisibleDogPick(false)
                            setTypeDog(item.label)
                        }} />
                    <ModalSelector
                        style={{ position: 'absolute', top: -5000, left: 0, zIndex: 10000 }}
                        data={cats}
                        keyExtractor={item => item.label}
                        visible={visibleCatPick}
                        onModalClose={(item) => {
                            setVisibleCatPick(false)
                            setTypeCat(item.label)
                        }} />
                    <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 145 }}>
                        <PetSelector isSelect={isDogSelect} isDog={true} petType={typeDog} changeStatus={setSelectDog} openDogModal={openDogPick} />
                        <PetSelector isSelect={!isDogSelect} isDog={false} petType={typeCat} changeStatus={setSelectDog} openCatModal={openCatPick} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ height: 60, zIndex: 10 }}>
                            <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput onChangeText={handleChangeDisplayName} style={{ marginLeft: 20, width: "80%" }} placeholder="Nhập tên thú cưng"></TextInput>
                                <Image source={require('../../images/SignUp/ic_paw.png')} style={{ width: 35, height: 30 }}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ height: 60, zIndex: 10 }}>
                            <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "90%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ marginLeft: 20, width: "40%", color: '#7b7b7b' }}>Giới tính</Text>
                                {
                                    sex ? <View style={{ justifyContent: 'space-around', flexDirection: 'row', flex: 1 }}>
                                        <View style={{ paddingHorizontal: 30, paddingVertical: 10, backgroundColor: '#ff9a7b', borderRadius: 20 }}><Ionicons name='male' size={15} color="white" /></View>
                                        <Pressable onPress={() => setSex(!sex)}>
                                            <View style={{ paddingHorizontal: 30, paddingVertical: 10, backgroundColor: 'white', borderRadius: 20 }}><Ionicons name='female' size={15} color="gray" /></View>
                                        </Pressable>

                                    </View> :
                                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', flex: 1 }}>
                                            <Pressable onPress={() => setSex(!sex)}>
                                                <View style={{ paddingHorizontal: 30, paddingVertical: 10, backgroundColor: 'white', borderRadius: 20 }}><Ionicons name='male' size={15} color="gray" /></View>
                                            </Pressable>
                                            <View style={{ paddingHorizontal: 30, paddingVertical: 10, backgroundColor: '#ff9a7b', borderRadius: 20 }}><Ionicons name='female' size={15} color="white" /></View>
                                        </View>
                                }
                            </View>
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

                    <View style={{ width: "50%", alignSelf: 'center', backgroundColor: '#ff9a7b', height: 60, borderRadius: 50, marginTop: 30 }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text onPress={handleNext} style={{ color: 'white', fontSize: 25 }}>Tiếp theo</Text>
                        </View>
                    </View>
                    {/* </KeyboardAvoidingView> */}
                </View>
            </ScrollView>
        )
    }

}
