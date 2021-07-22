import React from 'react'
import { View, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function () {

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 0.6,
        });
        console.log(result);
        const datas = new FormData();
        datas.append('images', {
            name: result.uri.substr(result.uri.lastIndexOf('/') + 1),
            type: result.type,
            uri: result.uri
        });
        try {
            const res = await fetch('http://obnd.me/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    account: 'ok',
                    password: '12345678'
                })
            })
            let text = await res.text()
            console.log(text);
            // let res = await fetch('https://microcode.cc/react/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': '"multipart/form-data'
            //     },
            //     body: datas
            // })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={handlePickImage} title="open picker"></Button>
        </View>
    )
}
