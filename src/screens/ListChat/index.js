import React from 'react';
import { Box, Text, ScrollView, Flex, Image } from 'native-base';
import { StyleSheet } from 'react-native';
export default function Index() {
  return (
    <ScrollView flex={1} marginTop={5}>
      <Flex style={listChat.itemChat} direction="row" justify="flex-start">
        <Box>
          <Image
            size={50}
            resizeMode={'contain'}
            borderRadius={1000}
            source={{
              uri: 'https://robohash.org/1',
            }}
            alt="Alternate Text"
          />
        </Box>
        <Flex alignItems="center" px={10}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            My name is someone
          </Text>
          <Text style={{ fontSize: 12 }}>My name is something</Text>
        </Flex>
      </Flex>
    </ScrollView>
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
