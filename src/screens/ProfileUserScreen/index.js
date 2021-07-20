import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ScrollView,
  Image,
  Center,
  Flex,
  Text,
  Pressable,
  SimpleGrid,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Dimensions } from 'react-native';
import { firebaseApp, storage } from '../../commonComponents/FirebaseConfig';
import SkeletonContent from 'react-native-skeleton-content';
import { Alert } from 'react-native';
import axios from 'axios';
export default function ProfileUserScreen({ route, navigation }) {
  const { account } = route.params;
  // console.log(account);
  let [fontsLoaded] = useFonts({
    Gabriola: require('../../../assets/fonts/Gabriola.ttf'),
    Nunito: require('../../../assets/fonts/Nunito-Regular.ttf'),
    NunitoExBold: require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
    NunitoSemi: require('../../../assets/fonts/Nunito-SemiBold.ttf'),
  });
  const [user, setUser] = useState(null);
  const [listPost, setListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const u = axios.post('http://obnd.me/get-account', {
        account,
      });
      const posts = axios.get(
        `http://obnd-miki.herokuapp.com/post-api/get-post-list-by-account/${account}`
      );

      Promise.all([u, posts]).then((values) => {
        setUser(values[0].data);
        setListPost(values[1].data);
        setIsLoading(false);
      });
    };
    getData();
  }, []);
  const [status, setStatus] = useState(1);
  const [isImg, setIsImg] = useState(1);
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.userInfo;
  });

  const handleFollow = () => {
    fetch('http://obnd-miki.herokuapp.com/update-followed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account: userData.account,
        accountFollowed: account,
      }),
    });
    setUser({
      ...user,
      followMe: [...user.followMe, { account: userData.account }],
    });
    dispatch({
      type: 'SET_USER_INFO',
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
        followed: [
          ...userData.followed,
          {
            _id: user._id,
            account: user.account,
            avatar: user.avatar,
            displayName: user.displayName,
          },
        ],
        liked: userData.liked,
      },
    });
  };
  const handleUnFollow = () => {
    fetch('http://obnd-miki.herokuapp.com/update-followed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account: userData.account,
        accountFollowed: account,
      }),
    });
    const newList = user.followMe.filter((item) => {
      return item.account == userData.account;
    });
    const index = user.followMe.indexOf(newList[0]);
    const removeList = user.followMe;
    removeList.splice(index, 1);
    // console.log(removeList);
    setUser({ ...user, followMe: removeList });
    const newListCurrent = userData.followed.filter((item) => {
      return item.account == user.account;
    });
    const i = userData.followed.indexOf(newListCurrent[0]);
    const removeCurrentList = userData.followed;
    removeCurrentList.splice(i, 1);
    // console.log(removeCurrentList);
    dispatch({
      type: 'SET_USER_INFO',
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
        followed: removeCurrentList,
        liked: userData.liked,
      },
    });
  };
  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <ScrollView backgroundColor="white">
        {isLoading ? (
          <Box backgroundColor="white" position="relative">
            <SkeletonContent
              containerStyle={{ width: '100%' }}
              isLoading={true}
            >
              <Text style={{ width: '100%', height: 250 }}> </Text>
            </SkeletonContent>
            <Center marginTop={-75} zIndex={3}>
              <SkeletonContent containerStyle={{ width: 150 }} isLoading={true}>
                <Text
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    borderWidth: 10,
                    borderColor: 'white',
                  }}
                >
                  {' '}
                </Text>
              </SkeletonContent>
            </Center>

            <Flex
              zIndex={1}
              marginTop={-75}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Center marginLeft={-10} flex={1} paddingTop={10}>
                <SkeletonContent
                  containerStyle={{ width: 20 }}
                  isLoading={true}
                >
                  <Text style={{ width: 20, height: 25 }}> </Text>
                </SkeletonContent>
                <SkeletonContent
                  containerStyle={{ width: 70 }}
                  isLoading={true}
                >
                  <Text style={{ width: 70, height: 13, marginTop: 5 }}> </Text>
                </SkeletonContent>
              </Center>
              <Center marginRight={-10} flex={1} paddingTop={10}>
                <SkeletonContent
                  containerStyle={{ width: 20 }}
                  isLoading={true}
                >
                  <Text style={{ width: 20, height: 25 }}> </Text>
                </SkeletonContent>
                <SkeletonContent
                  containerStyle={{ width: 70 }}
                  isLoading={true}
                >
                  <Text style={{ width: 70, height: 13, marginTop: 5 }}> </Text>
                </SkeletonContent>
              </Center>
            </Flex>
            <Flex zIndex={1} flexDirection="row" justifyContent="space-between">
              <Center
                borderRightWidth={2}
                borderColor="#ccc"
                marginLeft={-10}
                flex={1}
                paddingTop={5}
              >
                <SkeletonContent
                  containerStyle={{ width: 50 }}
                  isLoading={true}
                >
                  <Text style={{ width: 50, height: 25 }}> </Text>
                </SkeletonContent>
              </Center>
              <Center
                borderRightWidth={2}
                borderColor="#ccc"
                marginRight={-10}
                flex={1}
                paddingTop={5}
              >
                <SkeletonContent
                  containerStyle={{ width: 50 }}
                  isLoading={true}
                >
                  <Text style={{ width: 50, height: 25 }}> </Text>
                </SkeletonContent>
              </Center>
            </Flex>
            <Center paddingX={10} paddingTop={5}>
              <SkeletonContent containerStyle={{ width: 200 }} isLoading={true}>
                <Text style={{ width: 200, height: 17 }}> </Text>
              </SkeletonContent>
            </Center>
            <Flex marginTop={3} flexDirection="row" justifyContent="center">
              <SkeletonContent containerStyle={{ width: 200 }} isLoading={true}>
                <Text style={{ width: 200, height: 60 }}> </Text>
              </SkeletonContent>
            </Flex>
            <SkeletonContent containerStyle={{ width: 200 }} isLoading={true}>
              <Text
                style={{
                  width: 200,
                  height: 60,
                  marginTop: 15,
                  marginLeft: 15,
                }}
              >
                {' '}
              </Text>
            </SkeletonContent>
            <SkeletonContent
              containerStyle={{ width: '100%' }}
              isLoading={true}
            >
              <Text style={{ width: '100%', height: 300, margin: 15 }}> </Text>
            </SkeletonContent>
          </Box>
        ) : (
          <Box backgroundColor="white" position="relative">
            <Image
              alt="cover"
              width="100%"
              height={250}
              resizeMode="cover"
              source={{ uri: user.coverImage }}
            ></Image>
            <Flex
              marginTop={-75}
              flex={1}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
            >
              {user.followMe.filter((item) => {
                return item.account == userData.account;
              }).length != 0 ? (
                <Pressable onPress={handleUnFollow}>
                  <Box
                    width={100}
                    paddingX={2}
                    borderRadius={20}
                    paddingY={1}
                    backgroundColor="#FFA788"
                  >
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: 'NunitoSemi',
                      }}
                    >
                      Hủy
                    </Text>
                  </Box>
                </Pressable>
              ) : (
                <Pressable onPress={handleFollow}>
                  <Box
                    width={100}
                    paddingX={2}
                    borderRadius={20}
                    paddingY={1}
                    backgroundColor="#FFA788"
                  >
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: 'NunitoSemi',
                      }}
                    >
                      Theo dõi
                    </Text>
                  </Box>
                </Pressable>
              )}
              <Image
                borderRadius={75}
                borderWidth={10}
                borderColor="white"
                alt="cover"
                width={150}
                height={150}
                resizeMode="cover"
                source={{ uri: user.avatar }}
              ></Image>
              <Box
                width={100}
                paddingX={2}
                borderRadius={20}
                paddingY={1}
                backgroundColor="#FFA788"
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 15,
                    fontFamily: 'NunitoSemi',
                  }}
                >
                  Báo cáo
                </Text>
              </Box>
            </Flex>
            <Flex
              zIndex={1}
              marginTop={-75}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Center marginLeft={-10} flex={1} paddingTop={10}>
                <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                  {user.followMe.length}
                </Text>
                <Text style={{ fontFamily: 'Nunito', fontSize: 13 }}>
                  Theo dõi
                </Text>
              </Center>
              <Center marginRight={-10} flex={1} paddingTop={10}>
                <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                  {user.followed.length}
                </Text>
                <Text style={{ fontFamily: 'Nunito', fontSize: 13 }}>
                  Đang Theo dõi
                </Text>
              </Center>
            </Flex>
            <Flex zIndex={1} flexDirection="row" justifyContent="space-between">
              <Center
                borderRightWidth={2}
                borderColor="#ccc"
                marginLeft={-10}
                flex={1}
                paddingTop={5}
              >
                <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                  {user.account}
                </Text>
              </Center>
              <Center
                borderRightWidth={2}
                borderColor="#ccc"
                marginRight={-10}
                flex={1}
                paddingTop={5}
              >
                <Text style={{ fontSize: 25, fontFamily: 'NunitoExBold' }}>
                  {user.displayName}
                </Text>
              </Center>
            </Flex>
            <Center paddingX={10} paddingTop={5}>
              <Text style={{ textAlign: 'center' }}>
                {user.owner.description}
              </Text>
            </Center>
            <Flex marginTop={3} flexDirection="row" justifyContent="center">
              {status == 1 ? (
                <Center
                  width={45}
                  height={45}
                  marginX={3}
                  borderRadius={25}
                  backgroundColor="#FFA788"
                >
                  <Image
                    alt="icon"
                    width={26}
                    height={22}
                    source={require('../../images/Profile/ic_paw_pet_wwhite.png')}
                  ></Image>
                </Center>
              ) : (
                <Pressable
                  onPress={() => {
                    setStatus(1);
                  }}
                >
                  <Center
                    width={45}
                    height={45}
                    marginX={3}
                    borderRadius={25}
                    backgroundColor="#ddd"
                  >
                    <Image
                      alt="icon"
                      width={26}
                      height={22}
                      source={require('../../images/Profile/ic_paw_pet_gray.png')}
                    ></Image>
                  </Center>
                </Pressable>
              )}
              {status == 2 ? (
                <Center
                  width={45}
                  height={45}
                  marginX={3}
                  borderRadius={25}
                  backgroundColor="#FFA788"
                >
                  <Image
                    alt="icon"
                    width={18}
                    height={22}
                    source={require('../../images/Profile/ic_account_profile_white.png')}
                  ></Image>
                </Center>
              ) : (
                <Pressable
                  onPress={() => {
                    setStatus(2);
                  }}
                >
                  <Center
                    width={45}
                    height={45}
                    marginX={3}
                    borderRadius={25}
                    backgroundColor="#ddd"
                  >
                    <Image
                      alt="icon"
                      width={18}
                      height={22}
                      source={require('../../images/Profile/ic_account_profile_gray.png')}
                    ></Image>
                  </Center>
                </Pressable>
              )}
              <Pressable onPress={() => {}}>
                <Center
                  width={45}
                  height={45}
                  marginX={3}
                  borderRadius={25}
                  backgroundColor="#ddd"
                >
                  <Ionicons
                    name="chatbox-ellipses-outline"
                    size={25}
                    color="#f6f6f6"
                  ></Ionicons>
                </Center>
              </Pressable>
            </Flex>

            {status == 1 ? (
              <Box marginTop={3}>
                <Flex paddingLeft={10} flexDirection="row">
                  {isImg == 1 ? (
                    <Box
                      borderBottomWidth={3}
                      borderColor="#FFA788"
                      paddingY={1}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#FFA788',
                          fontFamily: 'NunitoExBold',
                        }}
                      >
                        Ảnh
                      </Text>
                    </Box>
                  ) : (
                    <Pressable
                      onPress={() => {
                        setIsImg(1);
                      }}
                    >
                      <Box paddingY={1}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#ddd',
                            fontFamily: 'NunitoExBold',
                          }}
                        >
                          Ảnh
                        </Text>
                      </Box>
                    </Pressable>
                  )}
                  {isImg == 2 ? (
                    <Box
                      marginLeft={5}
                      borderBottomWidth={3}
                      borderColor="#FFA788"
                      paddingY={1}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#FFA788',
                          fontFamily: 'NunitoExBold',
                        }}
                      >
                        Thông tin
                      </Text>
                    </Box>
                  ) : (
                    <Pressable
                      onPress={() => {
                        setIsImg(2);
                      }}
                    >
                      <Box marginLeft={5} paddingY={1}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#ddd',
                            fontFamily: 'NunitoExBold',
                          }}
                        >
                          Thông tin
                        </Text>
                      </Box>
                    </Pressable>
                  )}
                </Flex>
                {isImg == 1 ? (
                  <Box width="100%">
                    {listPost.length == 0 ? (
                      <Text
                        style={{
                          fontFamily: 'Nunito',
                          padding: 25,
                          fontSize: 20,
                          textAlign: 'center',
                        }}
                      >
                        Bạn chưa đăng gì, hãy tích cực tham gia các hoạt động
                        nhé!
                      </Text>
                    ) : (
                      <SimpleGrid
                        marginX={8}
                        marginY={5}
                        columns={3}
                        spacing={3}
                      >
                        {listPost.map((_item, index) => {
                          return (
                            <Pressable
                              key={index}
                              onPress={() => {
                                navigation.navigate('PostDetailSecond', {
                                  item: _item._id,
                                });
                              }}
                              width={Dimensions.get('window').width / 4}
                              height={Dimensions.get('window').width / 4}
                              margin={2}
                            >
                              <Image
                                borderRadius={20}
                                alt="img"
                                width="100%"
                                height="100%"
                                source={{ uri: _item.imgUrl }}
                              ></Image>
                            </Pressable>
                          );
                        })}
                      </SimpleGrid>
                    )}
                  </Box>
                ) : (
                  <></>
                )}
                {isImg == 2 ? (
                  <Center paddingBottom={5} marginTop={5} width="100%">
                    <Flex
                      alignItems="center"
                      flexDirection="row"
                      width="90%"
                      paddingX={5}
                      paddingY={3}
                      borderWidth={1}
                      borderColor="black"
                      borderRadius={10}
                    >
                      <Ionicons
                        size={30}
                        name="people-circle"
                        color="black"
                      ></Ionicons>
                      <Text flex={1} style={{ textAlign: 'center' }}>
                        {user.displayName}
                      </Text>
                    </Flex>
                    <Flex
                      marginTop={3}
                      width="90%"
                      flexDirection="row"
                      justifyContent="space-around"
                    >
                      <Flex
                        alignItems="center"
                        flex={1}
                        marginRight={1}
                        flexDirection="row"
                        paddingX={5}
                        paddingY={3}
                        borderWidth={1}
                        borderColor="black"
                        borderRadius={10}
                      >
                        <Ionicons
                          size={20}
                          name="male"
                          color="black"
                        ></Ionicons>
                        {user.sex ? (
                          <Text flex={1} style={{ textAlign: 'center' }}>
                            Đực
                          </Text>
                        ) : (
                          <Text flex={1} style={{ textAlign: 'center' }}>
                            Cái
                          </Text>
                        )}
                      </Flex>
                      <Flex
                        alignItems="center"
                        flex={1}
                        marginLeft={1}
                        flexDirection="row"
                        paddingX={5}
                        paddingY={3}
                        borderWidth={1}
                        borderColor="black"
                        borderRadius={10}
                      >
                        <Ionicons
                          size={20}
                          name="calendar"
                          color="black"
                        ></Ionicons>
                        <Text flex={1} style={{ textAlign: 'center' }}>
                          {user.birthDay}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      marginTop={3}
                      width="90%"
                      flexDirection="row"
                      justifyContent="space-around"
                    >
                      <Flex
                        alignItems="center"
                        flex={2}
                        marginRight={1}
                        flexDirection="row"
                        paddingX={5}
                        paddingY={3}
                        borderWidth={1}
                        borderColor="black"
                        borderRadius={10}
                      >
                        <Ionicons size={20} name="paw" color="black"></Ionicons>
                        <Text flex={1} style={{ textAlign: 'center' }}>
                          {user.typePet}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        flex={1}
                        marginLeft={1}
                        flexDirection="row"
                        paddingX={5}
                        paddingY={3}
                        borderWidth={1}
                        borderColor="black"
                        borderRadius={10}
                      >
                        <Ionicons
                          size={20}
                          name="heart"
                          color="black"
                        ></Ionicons>
                        <Text flex={1} style={{ textAlign: 'center' }}>
                          Độc thân
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      marginTop={3}
                      alignItems="center"
                      flexDirection="row"
                      width="90%"
                      paddingX={5}
                      paddingY={3}
                      borderWidth={1}
                      borderColor="black"
                      borderRadius={10}
                    >
                      <Ionicons
                        size={30}
                        name="people-circle"
                        color="black"
                      ></Ionicons>
                      <Text flex={1} style={{ textAlign: 'center' }}>
                        {user.owner.name}
                      </Text>
                    </Flex>
                  </Center>
                ) : (
                  <></>
                )}
              </Box>
            ) : (
              <></>
            )}
            {status == 2 ? (
              <Box paddingBottom={5}>
                <Flex marginTop={3} paddingLeft={10} flexDirection="row">
                  <Box borderBottomWidth={3} borderColor="#FFA788" paddingY={1}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#FFA788',
                        fontFamily: 'NunitoExBold',
                      }}
                    >
                      Thông tin
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  marginX={5}
                  borderBottomWidth={1}
                  borderColor="#ddd"
                  paddingY={3}
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Ionicons
                      size={30}
                      name="people-circle"
                      color="#ccc"
                    ></Ionicons>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingLeft: 10,
                        color: '#ccc',
                        fontFamily: 'NunitoSemi',
                        fontSize: 18,
                      }}
                    >
                      Họ tên :
                    </Text>
                  </Flex>
                  <Box flex={1} paddingLeft={5}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'NunitoExBold',
                        textAlign: 'right',
                      }}
                    >
                      {user.owner.name}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  marginX={5}
                  borderBottomWidth={1}
                  borderColor="#ddd"
                  paddingY={3}
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Ionicons size={30} name="calendar" color="#ccc"></Ionicons>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingLeft: 10,
                        color: '#ccc',
                        fontFamily: 'NunitoSemi',
                        fontSize: 18,
                      }}
                    >
                      Ngày sinh :
                    </Text>
                  </Flex>
                  <Box flex={1} paddingLeft={5}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'NunitoExBold',
                        textAlign: 'right',
                      }}
                    >
                      {user.owner.birthDay}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  marginX={5}
                  borderBottomWidth={1}
                  borderColor="#ddd"
                  paddingY={3}
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Ionicons
                      size={30}
                      name="transgender"
                      color="#ccc"
                    ></Ionicons>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingLeft: 10,
                        color: '#ccc',
                        fontFamily: 'NunitoSemi',
                        fontSize: 18,
                      }}
                    >
                      Giới tính :
                    </Text>
                  </Flex>
                  <Box flex={1} paddingLeft={5}>
                    {user.sex ? (
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: 'NunitoExBold',
                          textAlign: 'right',
                        }}
                      >
                        Nam
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: 'NunitoExBold',
                          textAlign: 'right',
                        }}
                      >
                        Nữ
                      </Text>
                    )}
                  </Box>
                </Flex>
                <Flex
                  marginX={5}
                  borderBottomWidth={1}
                  borderColor="#ddd"
                  paddingY={3}
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Ionicons
                      size={30}
                      name="ios-football"
                      color="#ccc"
                    ></Ionicons>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingLeft: 10,
                        color: '#ccc',
                        fontFamily: 'NunitoSemi',
                        fontSize: 18,
                      }}
                    >
                      Sở thích :
                    </Text>
                  </Flex>
                  <Box flex={1} paddingLeft={5}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'NunitoExBold',
                        textAlign: 'right',
                      }}
                    >
                      {user.owner.hobby}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  marginX={5}
                  borderBottomWidth={1}
                  borderColor="#ddd"
                  paddingY={3}
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Ionicons size={30} name="paw" color="#ccc"></Ionicons>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingLeft: 10,
                        color: '#ccc',
                        fontFamily: 'NunitoSemi',
                        fontSize: 18,
                      }}
                    >
                      Pet :
                    </Text>
                  </Flex>
                  <Box flex={1} paddingLeft={5}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'NunitoExBold',
                        textAlign: 'right',
                      }}
                    >
                      {user.displayName}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        )}
      </ScrollView>
    );
  }
}
