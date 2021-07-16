import React, { useState } from 'react';
import { Button, StyleSheet, ActivityIndicator, View, Text, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView, CheckBox, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SvgUri from 'react-native-svg-uri';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

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


export default function ForgotPassScreen({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    const [accountName, setAccountName] = useState('')
    const [pass, setPass] = useState('')
    const [cfPass, setCfPass] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalErrVisible, setModalErrVisible] = useState(false);
    const [modalErrText, setModalErrText] = useState("");
    const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



    const handleChangeAccountName = (text) => {
        setAccountName(text)
    }

    const handleChangePass = (text) => {
        setPass(text)
    }

    const handleChangeCfPass = (text) => {
        setCfPass(text)
    }

    const handleBack = () => {
        navigation.goBack()
    }

    const handleChangeNewPass = () => {
        if (accountName == "" || pass == "" || cfPass == "") {
            setModalErrText('Không được để trống thông tin tài khoản')
            setModalErrVisible(true)
        }
        else if (accountName.includes(' ')) {
            setModalErrText("Tên đăng nhập không được chứa khoảng trống")
            setModalErrVisible(true)
        }
        else if (pass.length < 6) {
            setModalErrText('Mật khẩu phải có tối thiểu 6 ký tự')
            setModalErrVisible(true)
        }
        else if (cfPass != pass) {
            setModalErrText('Mật khẩu xác nhận không khớp')
            setModalErrVisible(true)
        }
        else {
            setModalVisible(true)
            fetch('https://obnd-miki.herokuapp.com/update-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    password: pass,
                    account: accountName
                })
            })
                .then(res => res.text())
                .then(result => {
                    console.log(result);
                    setModalVisible(false)
                    if (result == 'we sent to your e-mail') {
                        setModalSuccessVisible(true)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
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
                            <MaterialIcon onPress={() => { setModalSuccessVisible(false); navigation.navigate('Login') }} style={{ position: 'absolute', top: 0, right: 0, padding: 10 }} name='close' size={30} color="black" />
                            <Image style={{ width: 100, height: 100 }} source={require('../../../src/images/Login/ic_success.png')}></Image>
                            <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 20 }}>Xác nhận email để hoàn tất thay đổi mật khẩu!</Text>
                        </View>
                    </View>
                </Modal>
                <Image style={{ width: "100%", height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../../src/images/SignUp/bg_login.png')}></Image>
                <KeyboardAvoidingView behavior="position">
                    <View style={{ marginTop: 50, position: 'relative' }}>
                        <Text style={{
                            color: "#4F292C",
                            fontSize: 25,
                            textAlign: "center",
                            // fontFamily: 'UTMGodWord',

                        }}>
                            Quên mật khẩu
                        </Text>
                        <MaterialIcon onPress={handleBack} style={{ position: "absolute", top: 5, left: 0, paddingLeft: 10 }} name='arrow-back' size={30} color="black" />
                    </View>
                    <View style={{ marginTop: 145 }}>
                        <View style={{ height: 60, marginTop: 20 }}>
                            <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "80%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcon name='person' size={30} color="#ff9a7b" />
                                <TextInput onChangeText={handleChangeAccountName} style={{ marginLeft: 20, width: "100%" }} placeholder="Tên đăng nhập"></TextInput>
                            </View>
                        </View>
                        <View style={{ height: 60, marginTop: 20 }}>
                            <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "80%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcon name='lock' size={30} color="#ff9a7b" />
                                <TextInput onChangeText={handleChangePass} secureTextEntry={true} style={{ marginLeft: 20, width: "100%" }} placeholder="Nhập mật khẩu mới"></TextInput>
                            </View>
                        </View>
                        <View style={{ height: 60, marginTop: 20 }}>
                            <View style={{ paddingHorizontal: 20, backgroundColor: "#e1e1e1", alignSelf: "center", borderRadius: 50, width: "80%", flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcon name='lock' size={30} color="#ff9a7b" />
                                <TextInput onChangeText={handleChangeCfPass} secureTextEntry={true} style={{ marginLeft: 20, width: "100%" }} placeholder="Xác nhận mật khẩu mới"></TextInput>
                            </View>
                        </View>


                    </View>
                    <View style={{ width: "70%", alignSelf: 'center', backgroundColor: '#ff9a7b', height: 60, borderRadius: 50, marginTop: 30 }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text onPress={handleChangeNewPass} style={{ color: 'white', fontSize: 25 }}>Thay đổi mật khẩu</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#7B7B7B' }}>Quay trở lại <Text onPress={handleBack} style={{ color: '#FFA788', textDecorationLine: 'underline' }}>Đăng nhập</Text></Text>
                    </View>
                    <View style={{ marginTop: 0 }}></View>
                </KeyboardAvoidingView>
            </View>
        )
    }

}
