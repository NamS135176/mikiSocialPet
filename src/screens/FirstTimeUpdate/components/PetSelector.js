import React, { useState } from 'react'
import { View, Image, Text, Pressable, Modal, Dimensions } from 'react-native'

export default function PetSelector(props) {
    const w = Dimensions.get('window').width
    const h = Dimensions.get('window').height
    return (
        props.isSelect ?

            <View style={{ padding: 30, borderRadius: 20, backgroundColor: '#ff9a7b' }}>
                <View style={{ padding: 20, borderColor: '#ff9a7b', borderRadius: 20, borderWidth: 1, backgroundColor: 'white', marginTop: -80 }}>
                    {
                        props.isDog ? <Image source={require('../../../images/SignUp/ic_dog_default.png')} style={{ width: 60, height: 60 }} ></Image> :
                            <Image source={require('../../../images/SignUp/ic_cat_default.png')} style={{ width: 60, height: 60 }} ></Image>
                    }
                </View>

                <Text onPress={props.changeStatus} style={{ textAlign: 'center', color: 'white', fontSize: 20, marginVertical: 10 }}>{props.isDog ? 'Chó' : 'Mèo'}</Text>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: 'white', borderRadius: 20 }}>
                   {props.isDog ? <Text onPress={props.openDogModal} style={{ textAlign: 'center', color: '#ff9a7b', fontSize: 15 }}>{props.petType}</Text> : 
                   <Text onPress={props.openCatModal} style={{ textAlign: 'center', color: '#ff9a7b', fontSize: 15 }}>{props.petType}</Text>}
                </View>
            </View> :

            <View style={{ padding: 30, borderRadius: 20, backgroundColor: '#f6f6f6' }}>

                <View style={{ padding: 20, borderColor: '#f6f6f6', borderRadius: 20, borderWidth: 1, backgroundColor: 'white', marginTop: -80 }}>
                    {
                        props.isDog ? <Image source={require('../../../images/SignUp/ic_dog_default.png')} style={{ width: 60, height: 60 }} ></Image> :
                            <Image source={require('../../../images/SignUp/ic_cat_default.png')} style={{ width: 60, height: 60 }} ></Image>
                    }
                </View>

                <Text onPress={props.changeStatus} style={{ textAlign: 'center', color: '#bdbdbd', fontSize: 20, marginVertical: 10 }}>{props.isDog ? 'Chó' : 'Mèo'}</Text>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: 'white', borderRadius: 20 }}>
                    <Text style={{ textAlign: 'center', color: '#ff9a7b', fontSize: 15 }}>chọn loại</Text>
                </View>
            </View>


    )
}
