import React from 'react';
import {
  Box,
  Pressable,
  Flex,
  Image,
  Text,
  ScrollView,
  Center,
} from 'native-base';
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Gabriola: require('../../../assets/fonts/Gabriola.ttf'),
    Nunito: require('../../../assets/fonts/Nunito-Regular.ttf'),
    NunitoExBold: require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
    NunitoSemi: require('../../../assets/fonts/Nunito-SemiBold.ttf'),
  });

  const handleSignOut = async () => {
    await AsyncStorage.setItem('userToken', '');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  const userData = useSelector((state) => {
    return state.userInfo;
  });

  const handleToUpdate = async () => {
    const token = await AsyncStorage.getItem('userToken');
    navigation.navigate('Step1', { token: token, username: userData.account });
  };

  const handleToForgot = () => {
    navigation.navigate('ForgotPass');
  };

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <ScrollView backgroundColor="white">
        <Box paddingTop={45} paddingBottom={5}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Flex paddingX={5} flexDirection="row" alignItems="center">
              <Image
                alt="back"
                source={require('../../images/Utilities/ic_back_circle.png')}
                width={45}
                height={45}
              ></Image>
            </Flex>
          </Pressable>
          <Center>
            <Image
              borderRadius={75}
              alt="ava"
              width={150}
              height={150}
              source={{ uri: userData.avatar }}
            ></Image>
            <Text
              style={{
                paddingTop: 20,
                fontSize: 30,
                fontFamily: 'NunitoExBold',
              }}
            >
              {userData.account}
            </Text>
          </Center>
          <Box paddingLeft={10} paddingTop={2}>
            <Text
              style={{ fontFamily: 'NunitoSemi', fontSize: 20, color: '#aaa' }}
            >
              Giao diện
            </Text>
            <Flex
              marginTop={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box padding={3} backgroundColor="black" borderRadius={30}>
                <Ionicons name="moon" size={23} color="white"></Ionicons>
              </Box>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'NunitoSemi',
                  marginLeft: 20,
                }}
              >
                Giao diện tối
              </Text>
            </Flex>
          </Box>
          <Box paddingLeft={10} paddingTop={2}>
            <Text
              style={{ fontFamily: 'NunitoSemi', fontSize: 20, color: '#aaa' }}
            >
              Tài khoản
            </Text>
            <Pressable onPress={handleToUpdate}>
              <Flex
                marginTop={2}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box padding={3} backgroundColor="#6bbeff" borderRadius={35}>
                  <Ionicons name="people" size={23} color="white"></Ionicons>
                </Box>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'NunitoSemi',
                    marginLeft: 20,
                  }}
                >
                  Chỉnh sửa thông tin
                </Text>
              </Flex>
            </Pressable>
            <Pressable onPress={handleToForgot}>
              <Flex
                marginTop={2}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box padding={3} backgroundColor="#ff8989" borderRadius={35}>
                  <Ionicons name="key" size={23} color="white"></Ionicons>
                </Box>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'NunitoSemi',
                    marginLeft: 20,
                  }}
                >
                  Đổi mật khẩu
                </Text>
              </Flex>
            </Pressable>
          </Box>
          <Box paddingLeft={10} paddingTop={2}>
            <Text
              style={{ fontFamily: 'NunitoSemi', fontSize: 20, color: '#aaa' }}
            >
              Khác
            </Text>
            <Flex
              marginTop={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                paddingY={3}
                paddingX={5}
                backgroundColor="#48be8b"
                borderRadius={35}
              >
                <Ionicons
                  name="help-outline"
                  size={23}
                  color="white"
                ></Ionicons>
              </Box>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'NunitoSemi',
                  marginLeft: 20,
                }}
              >
                Trợ giúp
              </Text>
            </Flex>
            <Flex
              marginTop={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box padding={3} backgroundColor="#bf87ff" borderRadius={35}>
                <Ionicons name="book" size={23} color="white"></Ionicons>
              </Box>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'NunitoSemi',
                  marginLeft: 20,
                }}
              >
                Chính sách
              </Text>
            </Flex>
            <Flex
              marginTop={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                paddingY={3}
                paddingX={5}
                backgroundColor="#32b6cf"
                borderRadius={35}
              >
                <Image
                  width={1}
                  height={5}
                  source={require('../../images/Setting/ic_version.png')}
                ></Image>
              </Box>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'NunitoSemi',
                  marginLeft: 20,
                }}
              >
                Trợ giúp
              </Text>
            </Flex>
            <Pressable onPress={handleSignOut}>
              <Flex
                marginTop={2}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box padding={3} backgroundColor="#2e75c6" borderRadius={35}>
                  <Image
                    width={23}
                    height={23}
                    source={require('../../images/Setting/ic_logout.png')}
                  ></Image>
                </Box>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'NunitoSemi',
                    marginLeft: 20,
                  }}
                >
                  Đăng xuất
                </Text>
              </Flex>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    );
  }
}
