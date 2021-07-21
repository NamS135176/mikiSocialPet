import React from 'react'
import { Box, ScrollView, Text, Flex, Image, Menu } from 'native-base'
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import { Pressable } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
export default function NotificationScreen({ navigation }) {

    const userData = useSelector((state) => {
        return state.currentUser;
    });
    // console.log(userData.followed);
    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    if (!fontsLoaded || userData.loading) {
        return <ScrollView backgroundColor='white' flex={1}>
            <Box padding={30}>
                <Text style={{ paddingTop: 20, fontSize: 35, fontFamily: 'NunitoExBold' }}>Hoạt động</Text>
            </Box>
            <Box paddingX={30}>
                <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Theo dõi</Text>
            </Box>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Box paddingX={30}>
                <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Hoạt động</Text>
            </Box>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Box paddingX={30}>
                <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Lượt thích</Text>
            </Box>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                    <Text style={{ width: 50, height: 50, borderRadius:25}}> </Text>
                </SkeletonContent>
                <SkeletonContent
                    containerStyle={{ width: 50 }}
                    isLoading={true}
                >
                   <Text style={{height:20, width:250, marginLeft:10 }}></Text>
                </SkeletonContent>
                
            </Flex>
            <Box paddingBottom={10}>

            </Box>
        </ScrollView>
    }
    else {
        return (
            <ScrollView backgroundColor='white' flex={1}>
                <Box padding={30}>
                    <Text style={{ paddingTop: 20, fontSize: 35, fontFamily: 'NunitoExBold' }}>Hoạt động</Text>
                </Box>
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Theo dõi</Text>
                </Box>
                {
                    userData.currentUser.followed.map((item, index) => {
                        return (
                            <Pressable key={index} onPress={() => {
                                navigation.navigate('ProfileUser', { account: item.account })
                            }}>
                                <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                                    <Image alt='ava' width={50} height={50} borderRadius={25} source={{ uri: item.avatar }}></Image>
                                    <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'NunitoSemi' }}>Bạn đã follow {item.account}</Text>
                                </Flex>
                            </Pressable>
                        )
                    })
                }
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Hoạt động</Text>
                </Box>
                {
                    userData.currentUser.followMe.map((item, index) => {
                        return (
                            <Pressable key={index} onPress={() => {
                                navigation.navigate('ProfileUser', { account: item.account })
                            }}>
                                <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                                    <Image alt='ava' width={50} height={50} borderRadius={25} source={{ uri: item.avatar }}></Image>
                                    <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'NunitoSemi' }}>{item.account} đã follow bạn</Text>
                                </Flex>
                            </Pressable>

                        )
                    })
                }
                <Box paddingX={30}>
                    <Text style={{ paddingTop: 20, fontSize: 25, fontFamily: 'NunitoSemi' }}>Lượt thích</Text>
                </Box>
                {
                    userData.currentUser.liked.map((item, index) => {
                        return (
                            <Pressable key={index} onPress={() => {
                                navigation.navigate('PostDetailSecond', { item: item })
                            }}>
                                <Flex alignItems='center' flexDirection='row' paddingX={30} marginTop={30}>
                                    <Image alt='ava' width={50} height={50} borderRadius={25} source={{ uri: userData.currentUser.avatar }}></Image>
                                    <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'NunitoSemi' }}>Bạn đã like 1 bài viết</Text>
                                </Flex>
                            </Pressable>
                        )
                    })
                }
                <Box paddingBottom={10}>

                </Box>
            </ScrollView>
        )
    }

}
