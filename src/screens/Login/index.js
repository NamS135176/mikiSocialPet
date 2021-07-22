import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [modalErrVisible, setModalErrVisible] = useState(false);
  const [modalErrText, setModalErrText] = useState('');
  const [accountName, setAccountName] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  const checkToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('userToken');
    setIsloading(false);
    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    }
  });

  useEffect(() => {
    setIsloading(true);
    checkToken();
  }, []);

  const handleToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleToForgotPass = () => {
    navigation.navigate('ForgotPass');
  };

  const handleChangeAccountName = (text) => {
    setAccountName(text);
  };

  const handleChangePass = (text) => {
    setPass(text);
  };

  const handleSignIn = () => {
    if (accountName == '' || pass == '') {
      setModalErrText('Không được để trống thông tin tài khoản');
      setModalErrVisible(true);
    } else {
      setModalVisible(true);
      fetch('http://obnd.me/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify({
          account: accountName,
          password: pass,
        }),
      })
        .then((res) => res.text())
        .then(async (result) => {
          setModalVisible(false);
          const data = JSON.parse(result);
          if (data.statas) {
            Alert.alert(
              'Tài khoản của bạn đã bị khóa! Vui lòng liên hệ quản trị viên.'
            );
          }
          if (data.user.displayName == '') {
            // await AsyncStorage.setItem('userToken',data.token)
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'FirstTimeUpdate' }],
            // });
            navigation.navigate('FirstTimeUpdate', {
              token: data.token,
              username: data.user.account,
            });
          } else {
            const user = data.user;
            await AsyncStorage.setItem('userToken', data.token);
            dispatch({
              type: 'SET_USER_INFO',
              payload: {
                account: user.account,
                displayName: user.displayName,
                typePet: user.typePet,
                birthDay: user.birthDay,
                sex: user.sex,
                owner: user.owner,
                avatar: user.avatar,
                coverImage: user.coverImage,
                followMe: user.followMe,
                followed: user.followed,
                liked: user.liked,
                time: user.time,
                roomChat: user.roomChat,
              },
            });
            navigation.reset({
              index: 0,
              routes: [{ name: 'Main' }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let [fontsLoaded] = useFonts({
    Gabriola: require('../../../assets/fonts/Gabriola.ttf'),
    UTMGodWord: require('../../../assets/fonts/UTMGodWord.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={isLoading} textStyle={{ color: '#FFF' }} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}
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
          onRequestClose={() => {}}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MaterialIcon
                onPress={() => {
                  setModalErrVisible(false);
                }}
                style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}
                name="close"
                size={30}
                color="black"
              />
              <Image
                style={{ width: 100, height: 100 }}
                source={require('../../../src/images/Login/ic_warning-01.png')}
              ></Image>
              <Text
                style={{ fontSize: 20, textAlign: 'center', paddingTop: 20 }}
              >
                {modalErrText}
              </Text>
            </View>
          </View>
        </Modal>
        <Image
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          source={require('../../../src/images/Login/bg_login.png')}
        ></Image>
        <KeyboardAvoidingView behavior="position">
          <Image
            style={{
              width: '25%',
              height: 100,
              alignSelf: 'center',
              marginTop: 40,
            }}
            source={require('../../../src/images/Login/logo.png')}
          ></Image>
          <Text
            style={{
              color: '#4F292C',
              fontSize: 30,
              textAlign: 'center',
              fontFamily: 'Gabriola',
            }}
          >
            Miki
          </Text>
          <Text
            style={{
              color: '#4F292C',
              fontSize: 13,
              textAlign: 'center',
              fontFamily: 'UTMGodWord',
              marginTop: -15,
            }}
          >
            Tận hưởng thế giới thú cưng của bạn!
          </Text>
          <View style={{ marginTop: 145 }}>
            <View style={{ height: 60, zIndex: 10 }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  backgroundColor: '#e1e1e1',
                  alignSelf: 'center',
                  borderRadius: 50,
                  width: '80%',
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialIcon name="person" size={30} color="#ff9a7b" />
                <TextInput
                  onChangeText={handleChangeAccountName}
                  style={{ marginLeft: 20, width: '100%' }}
                  placeholder="Nhập tài khoản"
                ></TextInput>
              </View>
            </View>
            <View style={{ height: 60, marginTop: 20 }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  backgroundColor: '#e1e1e1',
                  alignSelf: 'center',
                  borderRadius: 50,
                  width: '80%',
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialIcon name="lock" size={30} color="#ff9a7b" />
                <TextInput
                  onChangeText={handleChangePass}
                  secureTextEntry={true}
                  style={{ marginLeft: 20, width: '100%' }}
                  placeholder="Nhập tài khoản"
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={{ width: '90%', marginTop: 10 }}>
            <Text
              onPress={handleToForgotPass}
              style={{ textAlign: 'right', color: '#7B7B7B' }}
            >
              Quên mật khẩu?
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              alignSelf: 'center',
              backgroundColor: '#ff9a7b',
              height: 60,
              borderRadius: 50,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text
                onPress={handleSignIn}
                style={{ color: 'white', fontSize: 25 }}
              >
                Bắt Đầu
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ textAlign: 'center', color: '#7B7B7B' }}>
              Nếu chưa có tài khoản hãy{' '}
              <Text
                onPress={handleToSignUp}
                style={{ color: '#FFA788', textDecorationLine: 'underline' }}
              >
                Đăng ký
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 0 }}></View>
        </KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                width: '40%',
                alignSelf: 'center',
                borderColor: '#597CC4',
                borderWidth: 1,
                height: 60,
                borderRadius: 50,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <MaterialIcon name="facebook" size={30} color="#597CC4" />
                <Text style={{ color: '#597CC4', fontSize: 15 }}>Facebook</Text>
              </View>
            </View>
            <View
              style={{
                width: '40%',
                alignSelf: 'center',
                borderColor: '#DC4E41',
                borderWidth: 1,
                height: 60,
                borderRadius: 50,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <Image
                  style={{ width: 28, height: 28 }}
                  source={require('../../../src/images/Login/ic_google.png')}
                ></Image>
                <Text style={{ color: '#DC4E41', fontSize: 15 }}>Google</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
