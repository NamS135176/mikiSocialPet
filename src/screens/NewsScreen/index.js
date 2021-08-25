import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import moment from "moment";
import "moment/locale/vi";
import {
  Box,
  Center,
  Flex,
  Image,
  Menu,
  Pressable,
  ScrollView,
  Text,
  Button,
  Spinner,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Dimensions, Share } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { useDispatch, useSelector } from "react-redux";
export default function NewsScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Gabriola: require("../../../assets/fonts/Gabriola.ttf"),
    Nunito: require("../../../assets/fonts/Nunito-Regular.ttf"),
    NunitoExBold: require("../../../assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoSemi: require("../../../assets/fonts/Nunito-SemiBold.ttf"),
  });
  const userData = useSelector((state) => {
    return state.userInfo;
  });
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [count, setCount] = useState(10);
  const [loadmore, setLoadmore] = useState(false);
  const followPost = useSelector((state) => {
    return state.followPost;
  });
  useEffect(() => {
    if (followPost.listFollowPost.length <= 10) {
      setList(followPost.listFollowPost);
    } else {
      setList(followPost.listFollowPost.slice(0, count));
    }
  }, []);
  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <Box flex={1} paddingTop={45} backgroundColor="white" paddingX={5}>
        {/* <Spinner visible={followPost.loading} textStyle={{ color: '#FFF' }} /> */}
        <Flex
          height={50}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text style={{ fontSize: 35, fontFamily: "Gabriola" }}>Miki</Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Ionicons name="search" size={30} color="black"></Ionicons>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("ListChat");
              }}
              marginLeft={5}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={30}
                color="black"
              ></Ionicons>
            </Pressable>
          </Flex>
        </Flex>
        <ScrollView marginTop={5}>
          <Box>
            {followPost.loading ? (
              <Box>
                <ScrollView horizontal={true}>
                  <SkeletonContent
                    containerStyle={{ width: 100 }}
                    isLoading={true}
                  >
                    <Text style={{ width: 100, height: 100 }}> </Text>
                    <Text style={{ width: 100, height: 20, marginTop: 10 }}>
                      {" "}
                    </Text>
                  </SkeletonContent>
                  <SkeletonContent
                    containerStyle={{ width: 100 }}
                    isLoading={true}
                  >
                    <Text style={{ width: 100, height: 100, marginLeft: 20 }}>
                      {" "}
                    </Text>
                    <Text
                      style={{
                        width: 100,
                        height: 20,
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      {" "}
                    </Text>
                  </SkeletonContent>
                  <SkeletonContent
                    containerStyle={{ width: 140 }}
                    isLoading={true}
                  >
                    <Text style={{ width: 100, height: 100, marginLeft: 40 }}>
                      {" "}
                    </Text>
                    <Text
                      style={{
                        width: 100,
                        height: 20,
                        marginTop: 10,
                        marginLeft: 40,
                      }}
                    >
                      {" "}
                    </Text>
                  </SkeletonContent>
                </ScrollView>
                <Box
                  marginTop={5}
                  borderRadius={20}
                  marginBottom={0}
                  borderWidth={1}
                  borderColor="black"
                >
                  <Flex
                    padding={3}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Flex flexDirection="row" alignItems="center">
                      <SkeletonContent
                        containerStyle={{ width: 50 }}
                        isLoading={true}
                      >
                        <Text style={{ width: 50, height: 50 }}> </Text>
                      </SkeletonContent>

                      <Box marginLeft={3}>
                        <SkeletonContent
                          containerStyle={{ width: 50 }}
                          isLoading={true}
                        >
                          <Text style={{ width: 50, height: 15 }}> </Text>
                        </SkeletonContent>
                        <SkeletonContent
                          containerStyle={{ width: 70 }}
                          isLoading={true}
                        >
                          <Text style={{ width: 70, height: 15, marginTop: 5 }}>
                            {" "}
                          </Text>
                        </SkeletonContent>
                      </Box>
                    </Flex>
                    <Pressable
                      onPress={() => {
                        setShowModal(true);
                      }}
                    >
                      <Image
                        alt="option"
                        width={19}
                        height={17}
                        source={require("../../images/PostDetail/ic_options.png")}
                      ></Image>
                    </Pressable>
                  </Flex>
                  <Box
                    backgroundColor="#f6f6f6"
                    borderBottomWidth={0}
                    borderWidth={1}
                    borderRadius={20}
                    padding={3}
                    marginTop={0}
                  >
                    <SkeletonContent
                      containerStyle={{ width: "100%" }}
                      isLoading={true}
                    >
                      <Text
                        style={{
                          width: "100%",
                          height: Dimensions.get("window").width - 50,
                        }}
                      >
                        {" "}
                      </Text>
                    </SkeletonContent>
                    <Center marginTop={5} paddingBottom={30}>
                      <SkeletonContent
                        containerStyle={{ width: "100%" }}
                        isLoading={true}
                      >
                        <Text style={{ width: "100%", height: 20 }}> </Text>
                      </SkeletonContent>

                      <SkeletonContent
                        containerStyle={{ width: "100%" }}
                        isLoading={true}
                      >
                        <Text
                          style={{ width: "100%", height: 15, marginTop: 10 }}
                        >
                          {" "}
                        </Text>
                      </SkeletonContent>
                    </Center>
                  </Box>
                </Box>
                <Center marginTop={-4} zIndex={10}>
                  <Box
                    backgroundColor="white"
                    width="70%"
                    paddingX={5}
                    paddingY={3}
                    borderRadius={20}
                    borderWidth={1}
                  >
                    <SkeletonContent
                      containerStyle={{ width: "100%" }}
                      isLoading={true}
                    >
                      <Text style={{ width: "100%", height: 20 }}> </Text>
                    </SkeletonContent>
                  </Box>
                </Center>
              </Box>
            ) : (
              <Box backgroundColor="white">
                {followPost.listFollowPost.length == 0 ? (
                  <Center>
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "NunitoSemi",
                        fontSize: 20,
                      }}
                    >
                      Hãy theo dõi thêm thật nhiều bạn bè để xem được những bức
                      ảnh thú vị về chó mèo bạn nhé!
                    </Text>
                  </Center>
                ) : (
                  <Box>
                    <ScrollView horizontal={true} marginBottom={5}>
                      {userData.followed.map((item, index) => {
                        return (
                          <Pressable
                            key={index}
                            marginRight={5}
                            onPress={() => {
                              navigation.navigate("ProfileUser", {
                                account: item.account,
                              });
                            }}
                          >
                            <Box>
                              <Image
                                source={{ uri: item.avatar }}
                                width={100}
                                height={100}
                                borderRadius={20}
                                alt="ava"
                              ></Image>
                              <Text
                                style={{
                                  textAlign: "center",
                                  width: 100,
                                  paddingTop: 10,
                                  fontFamily: "NunitoExBold",
                                }}
                              >
                                {item.account}
                              </Text>
                            </Box>
                          </Pressable>
                        );
                      })}
                    </ScrollView>
                    {list.map((item, index) => {
                      return (
                        <Box key={index} marginBottom={5}>
                          <Box
                            borderRadius={20}
                            marginBottom={5}
                            marginBottom={0}
                            borderWidth={1}
                            borderColor="black"
                          >
                            <Flex
                              padding={3}
                              flexDirection="row"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Flex flexDirection="row" alignItems="center">
                                <Pressable
                                  onPress={() => {
                                    if (
                                      item.ownerId.account == userData.account
                                    ) {
                                      navigation.navigate("Profile");
                                    } else {
                                      navigation.navigate("ProfileUser", {
                                        account: item.ownerId.account,
                                      });
                                    }
                                  }}
                                >
                                  <Image
                                    alt="ad"
                                    borderRadius={10}
                                    width={50}
                                    height={50}
                                    source={{ uri: item.ownerId.avatar }}
                                  ></Image>
                                </Pressable>
                                <Box marginLeft={3}>
                                  <Text style={{ fontFamily: "NunitoExBold" }}>
                                    {item.ownerId.account}
                                  </Text>
                                  <Text
                                    style={{
                                      fontFamily: "Nunito",
                                      fontSize: 15,
                                    }}
                                  >
                                    {/* {new XDate(Date.parse(item.created_date)).toString('dd/MM/yyyy')} */}
                                    {moment(
                                      Date.parse(item.created_date)
                                    ).fromNow()}
                                  </Text>
                                </Box>
                              </Flex>
                              {/* <Pressable onPress={() => { setShowModal(true) }}> */}
                              <Menu
                                shouldOverlapWithTrigger={false} // @ts-ignore
                                placement={"bottom left"}
                                trigger={(triggerProps) => {
                                  return (
                                    <Pressable {...triggerProps}>
                                      <Image
                                        alt="option"
                                        width={19}
                                        height={17}
                                        source={require("../../images/PostDetail/ic_options.png")}
                                      ></Image>
                                    </Pressable>
                                  );
                                }}
                              >
                                <Menu.Item
                                  onPress={() => {
                                    Alert.alert(
                                      "Cảm ơn bạn! Chúng tôi sẽ xem xét báo cáo của bạn."
                                    );
                                    fetch(
                                      "http://obnd.me/post-api/update-report",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        redirect: "follow",
                                        body: JSON.stringify({
                                          id: item._id,
                                          account: userData.account,
                                        }),
                                      }
                                    );
                                  }}
                                >
                                  Báo cáo bài viết
                                </Menu.Item>
                              </Menu>

                              {/* </Pressable> */}
                            </Flex>
                            <Box
                              backgroundColor="#f6f6f6"
                              borderBottomWidth={0}
                              borderWidth={1}
                              borderRadius={20}
                              padding={3}
                              marginTop={0}
                            >
                              <Image
                                alt="anh"
                                borderRadius={20}
                                width="100%"
                                height={Dimensions.get("window").width - 50}
                                source={{ uri: item.imgUrl }}
                              ></Image>
                              <Center marginTop={5} paddingBottom={30}>
                                <Text
                                  style={{
                                    fontFamily: "NunitoSemi",
                                    fontSize: 20,
                                  }}
                                >
                                  {item.textDescription}
                                </Text>
                                <Text
                                  style={{
                                    fontFamily: "Nunito",
                                    fontSize: 15,
                                    color: "#86bdfd",
                                    textAlign: "center",
                                  }}
                                >
                                  {item.tags.toString()}
                                </Text>
                              </Center>
                            </Box>
                          </Box>
                          <Center marginTop={-7} zIndex={10}>
                            <Box
                              backgroundColor="white"
                              width="70%"
                              paddingX={5}
                              paddingY={3}
                              borderRadius={20}
                              borderWidth={1}
                            >
                              <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                flexDirection="row"
                              >
                                <Flex flexDirection="row" alignItems="center">
                                  {item.liked.filter((item) => {
                                    return item == userData.account;
                                  }).length != 0 ? (
                                    <Pressable
                                      onPress={async () => {
                                        const index =
                                          followPost.listFollowPost.indexOf(
                                            item
                                          );
                                        const listPost =
                                          followPost.listFollowPost;

                                        const thisLike = listPost[
                                          index
                                        ].liked.filter((item) => {
                                          return (
                                            item.account == userData.account
                                          );
                                        })[0];
                                        const i =
                                          listPost[index].liked.indexOf(
                                            thisLike
                                          );
                                        listPost[index].liked.splice(i, 1);
                                        dispatch({
                                          type: "UPDATE_LIKE_VIEW",
                                          payload: {
                                            listFollowPost: listPost,
                                          },
                                        });

                                        const data = await fetch(
                                          "http://obnd.me/post-api/update-like",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              id: item._id,
                                              account: userData.account,
                                            }),
                                          }
                                        );
                                        const res = await fetch(
                                          "http://obnd.me/update-like",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              account: userData.account,
                                              idLiked: item._id,
                                            }),
                                          }
                                        );
                                      }}
                                    >
                                      <Ionicons
                                        name="heart"
                                        color="red"
                                        size={30}
                                      ></Ionicons>
                                    </Pressable>
                                  ) : (
                                    <Pressable
                                      onPress={async () => {
                                        const index =
                                          followPost.listFollowPost.indexOf(
                                            item
                                          );
                                        const listPost =
                                          followPost.listFollowPost;

                                        listPost[index].liked.push(
                                          userData.account
                                        );
                                        dispatch({
                                          type: "UPDATE_LIKE_VIEW",
                                          payload: {
                                            listFollowPost: listPost,
                                          },
                                        });
                                        const data = await fetch(
                                          "http://obnd.me/post-api/update-like",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              id: item._id,
                                              account: userData.account,
                                            }),
                                          }
                                        );
                                        const res = await fetch(
                                          "http://obnd.me/update-like",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              account: userData.account,
                                              idLiked: item._id,
                                            }),
                                          }
                                        );
                                      }}
                                    >
                                      <Ionicons
                                        name="heart-outline"
                                        color="black"
                                        size={30}
                                      ></Ionicons>
                                    </Pressable>
                                  )}
                                  <Text style={{ fontFamily: "NunitoSemi" }}>
                                    {item.liked.length}
                                  </Text>
                                </Flex>
                                <Pressable
                                  onPress={() => {
                                    navigation.navigate("PostDetailSecond", {
                                      item: item._id,
                                    });
                                  }}
                                >
                                  <Flex flexDirection="row" alignItems="center">
                                    <Ionicons
                                      name="chatbox-ellipses-outline"
                                      color="black"
                                      size={30}
                                    ></Ionicons>
                                    <Text style={{ fontFamily: "NunitoSemi" }}>
                                      {item.comments.length}
                                    </Text>
                                  </Flex>
                                </Pressable>
                                <Pressable
                                  onPress={async () => {
                                    try {
                                      const result = await Share.share({
                                        message: item.textDescription,
                                      });
                                      if (
                                        result.action === Share.sharedAction
                                      ) {
                                        if (result.activityType) {
                                          // shared with activity type of result.activityType
                                        } else {
                                          // shared
                                        }
                                      } else if (
                                        result.action === Share.dismissedAction
                                      ) {
                                        // dismissed
                                      }
                                    } catch (error) {
                                      alert(error.message);
                                    }
                                  }}
                                >
                                  <Flex flexDirection="row" alignItems="center">
                                    <Ionicons
                                      name="share-social"
                                      color="black"
                                      size={30}
                                    ></Ionicons>
                                  </Flex>
                                </Pressable>
                              </Flex>
                            </Box>
                          </Center>
                        </Box>
                      );
                    })}
                    <Button
                      style={{ marginBottom: 20 }}
                      onPress={() => {
                        if (followPost.listFollowPost.length - count <= 10) {
                          // Alert.alert('sdfsdf')
                          setLoadmore(true)
                          setTimeout(() => {
                            setLoadmore(false)
                            setList(
                              followPost.listFollowPost.slice(
                                0,
                                count + (followPost.listFollowPost.length - count)
                              )
                            );
                            setCount(followPost.listFollowPost.length);
                          },300)
                         
                        } else {
                         setLoadmore(true)
                         setTimeout(() => {
                           setLoadmore(false)
                          setList(
                            followPost.listFollowPost.slice(0, count + 10)
                          );
                          setCount(count + 10);
                         },300)
                        }
                      }}
                    >
                      {loadmore ? (
                        <Spinner size="sm" accessibilityLabel="Loading posts" />
                      ) : (
                        <Text style={{ color: "white" }}>
                          Tải thêm bài viết
                        </Text>
                      )}
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </ScrollView>
      </Box>
    );
  }
}
