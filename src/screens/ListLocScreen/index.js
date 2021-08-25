import { Ionicons } from "@expo/vector-icons";
import { Box, Center, Flex, Image, Pressable, Text } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import { hospitals } from "../../hashData/Pet";
export default function ListLocScreen({ route, navigation }) {
  const { type } = route.params;
  return (
    <Box paddingTop={10} flex={1} backgroundColor="white">
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Flex paddingX={5} flexDirection="row" alignItems="center">
          <Image
            alt="back"
            source={require("../../images/Utilities/ic_back_circle.png")}
            width={45}
            height={45}
          ></Image>
          <Text style={{ fontSize: 25, fontFamily: "NunitoSemi" }}>
            Danh sách
          </Text>
        </Flex>
      </Pressable>

      <ScrollView>
        <Center>
          {hospitals.map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("Maps", { item: item });
                }}
                key={index}
                width="90%"
                paddingY={2}
              >
                {type == "shop" ? (
                    <Pressable
                    onPress={() => {
                      navigation.navigate("Maps", { item: item });
                    }}
                  >
                    <Flex
                      alignItems="center"
                      flexDirection="row"
                      padding={5}
                      backgroundColor="#d1a9ff"
                      borderRadius={20}
                    >
                      <Box flex={1} paddingRight={3}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: "NunitoExBold",
                            fontSize: 18,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{ color: "white", fontFamily: "NunitoSemi" }}
                        >
                          {item.address}
                        </Text>
                      </Box>
                      <Ionicons
                        name="chevron-forward-circle-sharp"
                        size={50}
                        color="white"
                      ></Ionicons>
                    </Flex>
                  </Pressable>
                
                ) : (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Maps", { item: item });
                    }}
                  >
                    <Flex
                      alignItems="center"
                      flexDirection="row"
                      padding={5}
                      backgroundColor="#FFA788"
                      borderRadius={20}
                    >
                      <Box flex={1} paddingRight={3}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: "NunitoExBold",
                            fontSize: 18,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{ color: "white", fontFamily: "NunitoSemi" }}
                        >
                          {item.address}
                        </Text>
                      </Box>
                      <Ionicons
                        name="chevron-forward-circle-sharp"
                        size={50}
                        color="white"
                      ></Ionicons>
                    </Flex>
                  </Pressable>
                )}
              </Pressable>
            );
          })}
        </Center>
      </ScrollView>
    </Box>
  );
}
