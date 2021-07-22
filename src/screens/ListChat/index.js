import React, { useState, useEffect } from 'react';
import { Box, Text, ScrollView, Flex, Image } from 'native-base';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
export default function Index({ navigation, route }) {
  const dataUser = useSelector((state) => state.userInfo);
  const [lChat, setLChat] = useState([]);
  useEffect(() => {
    const getR = async () => {
      const arr = [];
      const rooms = await axios.post(`http:obnd.me/get-list-room`, {
        account: dataUser.account,
      });

      const result = await Promise.all(
        rooms.data.map((item) =>
          axios.post(`http:obnd.me/get-account`, {
            account: item,
            getRoom: true,
          })
        )
      );
      result.forEach((i) => arr.push(i.data));
      setLChat(arr);
    };
    getR();
  }, []);
  return (
    <Box flex={1} paddingTop={5} backgroundColor='white'>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Flex px={5} py={10} direction="row" justify="space-between">
          <Ionicons name="chevron-back-outline" color="black" size={30} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Chat</Text>
          <Text style={{ opacity: 0 }}>0</Text>
        </Flex>
      </Pressable>
      <ScrollView flex={1} marginTop={5}>
        {lChat.map((item, index) => {
          return (
            <TouchableOpacity
              // style={listChat.itemChat}
              key={index}
              onPress={() => {
                navigation.navigate('ScreenChat', { user: item.account });
              }}
            >
              <Flex
                py={3}
                style={listChat.itemChat}
                direction="row"
                justify="space-between"
              >
                <Box>
                  <Image
                    size={50}
                    resizeMode={'contain'}
                    borderRadius={1000}
                    source={{
                      uri: item.avatar,
                    }}
                    alt="Alternate Text"
                  />
                </Box>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.account}
                </Text>
                <Ionicons
                  name="arrow-forward-outline"
                  color="black"
                  size={30}
                />
              </Flex>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Box>
  );
}
const listChat = StyleSheet.create({
  itemChat: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
