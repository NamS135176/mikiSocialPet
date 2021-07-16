import * as React from 'react';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { Box, Text, Center, Flex, Image } from 'native-base';
import { StyleSheet, Dimensions, Pressable ,LogBox} from 'react-native';

LogBox.ignoreAllLogs()
export default function MapsScreen({ route, navigation }) {
    const { item } = route.params
    return (
        <Box style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: item.location.latitude,
                longitude: item.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <Marker coordinate={{ latitude: item.location.latitude, longitude: item.location.longitude }}>
                </Marker>
            </MapView>
            
                <Box position='absolute' top={20} left={5}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                    <Image alt='back' source={require('../../images/Utilities/ic_back_circle.png')} width={45} height={45}></Image>
                    </Pressable>
                </Box>
           
            <Box paddingX={5} bottom={10} left={0} width='100%' position="absolute">
                <Flex justifyContent="flex-start" alignItems='center' flexDirection='row' backgroundColor='white' flex={1} borderRadius={15} padding={5}>
                    <Box padding={3} backgroundColor='yellow' borderRadius={10}>
                        <Image alt='loc' width={41} height={51} source={require('../../images/Utilities/ic_location_pet_shop.png')}></Image>
                    </Box>
                    <Box paddingLeft={5}>
                        <Text style={{ width: 250 }}>{item.name}</Text>
                        <Text style={{ fontSize: 13, width: 250 }}>{item.address}</Text>
                        <Text style={{ fontSize: 13, width: 250 }}>{item.link}</Text>
                        <Text style={{ fontSize: 13, width: 250 }}>{item.phone}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
