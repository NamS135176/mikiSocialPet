import React from 'react'
import { Box, Text, Image, Center, Flex, Spacer, ScrollView, Pressable } from 'native-base'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import UltiItem from './components/UltiItem';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default function UtilitiesScreen({ navigation }) {

    const handleToTips = () => { navigation.navigate('Tips') }

    let [fontsLoaded] = useFonts({
        'Gabriola': require('../../../assets/fonts/Gabriola.ttf'),
        'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf'),
        'NunitoExBold': require('../../../assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSemi': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    });
    if (!fontsLoaded) {
        return <></>
    }
    else {
        return (
            <Box flex={1} backgroundColor='white' padding={30}>
                <Text style={{ paddingTop: 20, fontSize: 35, fontFamily: 'NunitoExBold' }}>Mở rộng</Text>
                <Box style={styles.boxShadow } overflow='hidden' width='100%' height='25%' marginY={8} backgroundColor='#ffa788' borderRadius={20}>
                    <Flex flex={1} flexDirection='row'>
                        <Box width='35%' height='80%' backgroundColor='#ff8f6d' borderBottomRightRadius={20}>
                            <Center flex={1}>
                                <Image alt='logo' source={{ uri: 'https://lh3.googleusercontent.com/XgZHy1nLsAvL9lcVBni_jYhwrXGdb8Y_7tQSLr4k4ciMAewZD_7M_ZR4LdLV2mBYdgyKXRm7Ok6CA20g-oSaCzWgHb1LiV22Az1KMzKxRlcG56NLVworHKe2jFS4_plmE7RlEF2qt5qkGM14u43TpuDqYNuwlLksjzFUXc5sAjQZ-NftgBjUSDcWXW69XWnk7mH0hkdIfkp3EbahwyvVUdNyd3JRcjKHF_eGWyPxZUf6mTZpkxaMwURzPFmG4M7gL4qaHL7wFZNJVsET7TpAopEVwJ7qlC8zEvCQDjkC3Wb07ZL6OC5CVY6agpDoWoQRNHVT8aZbm-3aQwry68wKuLKADZQBB39XXK52brQsw818S7lJYT6BVVqmEzSlIJ9QQa-nECnCH4kg_BCUTmPy3tGtbM9Q_z4_WnB0DxVvn6JvaOheZN_Dq5Au2ZZ8I83VumiSuQnr57J_zYnmSv7L-TACPRGmjteCHvjuRCj2n67RUClXa3OejcLvKtAL3EyDCClNcbHLqxO_U5Rm_us2X8-nWOH5rnDcfpBwtWC3n73ucUIqX4n00zF6iyJcdlLA_hMQfLHUEmbLAX4gPmXd5XpzpxEKn6Nw0HCenbZxRTaLM8jxKLr1fwCDy0AXCrg9zXXLCFLvoCrX5PqKZB8vzR45sWM1uAoy_NlSoRT7MTYMpWG1O_331FvHiF145yioKp8AxgZVIr2RdSb2EX16VCwS=s937-no?authuser=1' }} width='80%' height="60%"></Image>
                            </Center>
                        </Box>
                        <Box flex={1}>
                            <Center >
                                <Text style={{ fontSize: 30, fontFamily: 'Gabriola', color: 'white' }}>Miki</Text>
                                <Text style={{ fontFamily: 'NunitoSemi', color: 'white', paddingHorizontal: 10 }}>Mang lại những tiện ích, mở rộng giúp bạn dễ dàng chăm sóc thú cưng của mình hơn</Text>
                            </Center>
                        </Box>
                    </Flex>
                </Box>
                <Box width='100%' height='27%' marginBottom={8}>
                    <Flex flex={1} flexDirection='row'>
                        <Box style={styles.boxShadow } overflow='hidden' flex={1} backgroundColor='#fea7a7' marginRight={3} borderRadius={20}>
                            <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                <Center flex={1}>
                                    <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Tìm pet</Text>
                                </Center>
                                <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#ff8989'>
                                    <Center flex={1}>
                                        <Image alt='search' source={{ uri: 'https://lh3.googleusercontent.com/kJdQpoMwyio9-K4fytCG-4vYsSRVnK0ikaZU294oJbMf-IPtAa4mxB9i_luGbU_efkkM2AZD2e4v1UO-vqe8gicIfoK60cD-Zng6HABI-DEPKJHWQPUDxBT8yEmuO9GH16I_Pr3rKuDozA4rh1E9SiwRwHTfeVmby3HC4hp3CAIZgqMm2RYLOiqEBheW3Q5T1scfbx9OTzZegBvFhiQBkgCTRhZEjUkDdPxsdDY05eUaE3bdpLvM08qMjmyMST9SucAoz8XRoIQu4u7JFIGCPGXFH1e5mui3-2p8vhEQS1vkLXJs6QWuvZxWPJPOfWsao6pQx3M1hZMt54kIOqklOZU62o6pF0vgi1v8M8egxtXQXrP8L-qto55NwrePDzKmg-rQwSXulndrM6017UKT-WXbmUZ607pp4Wrmlqvw5N_DF1Ipnz9GUk9zSbmdptcHVAYA2SzvjFgo5Ikq95lw95-e6AOFlrvuuMyQcfOTHQUjGALvRld0CdQ2PVCeomaSuXGw27gvbCzwIWuTullCqpngeOOmhbNxJFm5pndf_5fUiqHN14MhmKVbo60PC0afsua7TfEiCSAG5zZRuQPOToSf4U_-SW1z4Fpyee4i3xeJOpWofnnMJNT57M5xgyiGOhD9Kmc3JD5mKrFD11ezAWA7eDfIjmJtotcDlE39WOJxTq1bEmKbMwI3xIX5J4nGul21Z52KeyVlp7p8jj8wyDB8=w937-h938-no?authuser=1' }} width='60%' height="50%"></Image>
                                    </Center>
                                </Box>
                            </Flex>
                            <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                Bảng tin danh sách thú cưng đi lạc, giúp cộng động giúp đỡ nhau tìm pet
                            </Text>
                        </Box>
                        <Pressable flex={1} onPress={() => { navigation.navigate('ListLoc', { type: 'hosp' }) }}>
                            <Box style={styles.boxShadow } flex={1} overflow='hidden' backgroundColor='#99d2ff' marginLeft={3} borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Thú y</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#6bbeff'>
                                        <Center flex={1}>
                                            <Image alt='search' source={{ uri: 'https://lh3.googleusercontent.com/Ijlm5qJerWP6s5Z5cULTWEPTTTjnDMVBsFoU8yu05I65C09GJ6IOjaekJoD3P9g1oDKjR9HK22s9MMWmqCv30VAEhm-pwM3YSeXy3ntHzQS6JPvOXLnfYLXQ4TKAelOgPg1mmu-1a9LrcfahnlJKYe7HGzNy4r8Ew5E6iZMJF_t1-MK2ugqEVz3lyws31IfDomYq2jCtjfD2zwJda54FosBBNNIJBqw1U-wht9UD8JcTkNDm6M_rl9Zh6qqnHAoSC9ik1Dry1kVQ7nJA60nYDsvrj7_2-Wb48ArkCX82PS45NooHofF4XOt7x0R-l_Y90m5NvHHHHLitHFjW2jIgSenBibob0NNg6v-kiQNJ8-5ymIR2Th6Ttpr96Jej7OPUirqGv63gbf9Ha-qVxJkBVbHNJS64R2Of_3-G8YI606aTQSOeVQtWY41t85eu3W_422eyVOS4lWvo4pjDdztYuZMjGvDX3WwlM1Dl5yBIciweA8SS_h_v0UGKsjMOmDlqkwUG1Zo6p5_bbAAX0atUUKHYuZwzz3l7lkyzg_1wlgZv74sqjDoD6_p2bHIDL3g2oPYw-K5IQT0a6YvFjq_H3tv1Db4f8Vd5MZ1sOLrtgM9uzqg7XzocuPF6txGNzR5F1730ohEaTMHkbz6diRbN3vVfUkOg_4UhVjR1sBMFXn72nZAyy_nRV-aSXp1_G3jnRUZ61Dft8A4aSU6NWT2OfKVv=w808-h937-no?authuser=1' }} width='60%' height="60%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Danh sách các cơ sở thú y giúp bạn thuận tiện khám chữa bệnh cho pet
                                </Text>
                            </Box>
                        </Pressable>
                    </Flex>
                </Box>
                <Box width='100%' height='27%' >
                    <Flex flex={1} flexDirection='row'>
                        <Pressable flex={1} marginRight={3} onPress={() => { navigation.navigate('ListLoc', { type: 'shop' }) }}>
                            <Box style={styles.boxShadow } overflow='hidden' flex={1} backgroundColor='#d1a9ff' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Cửa hàng</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#bf87ff'>
                                        <Center flex={1}>
                                            <Image alt='search' source={{ uri: 'https://lh3.googleusercontent.com/L7iK9aMJMx3_jHugzpIit9n7QxI949mkRmXRLFfDVccSYafDVcgGxboO0HEnupWYbPcQt7xc9q6nnyhLRCQlQ_Z8I54TWy9cFCn04aF4RbmffRfFnyOMEvCxRa_wsRpjto_iBj3t9wWTY7vr4PFUaU65zqAdnmVBGfFt4i8CbP3BnMz7uPGqwrKokbSqGcZSAACLfooKcHhkZLoHbC65JXLjt9dAhtX3xx2fvwm6S3W-48rAa-4avbI6r-dDwzLWjKJUvgSM54Nsq0oiYbgc1xqsB4TaYMyl07x_F8Ggy53WjcdyFaT04USTWP9YzzasMu0_kM6dEf4tQ6CzHMAO-PrVccp3Ja2My8ybOVy8r6u-ltGz0aDqx1DNWKzsJBupVlFimThojPi-XMVhslu29Vc0HvZqeQqfKqIwecIDIA8UYlL7iOf2Ycicn7AXbXvAwySjKB04H4nrAXv2ldamPenFC3XKlP4MbUp1xhDntZKsbp4-FqLnrJezBQPj7SSqTT6dbbsKfiTcUO-N_8Tean0KCGsHdH00xwKpcLZ2q5dOGxU-Jg8zUL0FgM4wXUvGyeWR9ftqrtOdrbZ4q8i0hlwdHXEqo-Rz4JJP2-rE7W_OKVjw2iug_8eT4mlOHkjo3R_X24_OnD4ivSfTYH8anuHZ_vbPK2OjeBkJAFQp1pb43FnbW18ruyvzudCy72pW_AH4cYmhqkYBGMY5Dh4q2Cpk=w1111-h937-no?authuser=1' }} width='60%' height="40%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Danh sách các cửa hàng thú cưng giúp bạn thuận tiện sắm đồ cho pet
                                </Text>
                            </Box>
                        </Pressable>
                        <Pressable flex={1} onPress={handleToTips} marginLeft={3}>
                            <Box style={styles.boxShadow } overflow='hidden' flex={1} backgroundColor='#48d699' borderRadius={20}>
                                <Flex width='100%' height='40%' flexDirection='row' justifyContent='space-between'>
                                    <Center flex={1}>
                                        <Text style={{ color: 'white', fontFamily: "NunitoSemi", fontSize: 15 }}>Cẩm nang</Text>
                                    </Center>
                                    <Box borderBottomLeftRadius={20} width='40%' height='100%' backgroundColor='#48be8b'>
                                        <Center flex={1} >
                                            <Image alt='search' source={{ uri: 'https://lh3.googleusercontent.com/mfcXQ_BcR-XFU6Khy_rc3FmesEBleDHu9xTsAqbgb5mxRZgZMzu0lE7VHSZDZtjvM2Wm64UygN0mHoDosDIzeoqc2I7xDl-uKfIrGBpqsThsYjvF1yMbzwqnRzD2V12ePHbpNa0sLTneRTluxcHD4L0b5m8iHiSG-9aYuW3Tv3xaAO_SxqKIhfCEgk_7O_vr-AaTQfL3B79wcotmnZ8h43owsS8MrlzwLIeqboCP2lTMjHmGbuXUBFb5gksBtu251MPntTATPhOIU1BzvD-pYD0Nc92WB0c91BkPSI3D9d8u20Mm-TI0-3vjBJd9LEk8NhGZJ1wLaXsuKdwATyUS4USL0arvSB7kJ_44hkZDTFwmxqju9fh2fRlCtMKuqSHw1HBBj2P07g_dz_00EIsmwRqcvslBCVOj7sf2Q6CDVnvkKhM7ia5OfauJaPPQ8L9qXlnx2GW5mg9Wl7URclLN8K7-AP52-i6PMO9-36JqMNQPDCt2rqm3CYPC5WIVScL73nvvd6bnzTXOsW2LzoEV5-o6Jl4Ehrnbj5zRypy5tzkn4b163yDhCfpPvM_8_IfC7IJDSvxstu6Bt_mxhrT_3rjfvI5ORtloP0PHgtAqwhA3uKFeJIsNSS8s2mwHWHAXneegv1y0OPTaHR4D-huH_XWVNSoSLEQFb7GZ217FYGiDKeJl62Yf6M9JKZ6l-NSpYFgclRRbYYio1b1dv632xpNb=w824-h937-no?authuser=1' }} width='60%' height="50%"></Image>
                                        </Center>
                                    </Box>
                                </Flex>
                                <Text style={{ paddingHorizontal: 10, fontSize: 13, paddingTop: 10, color: 'white', fontFamily: 'Nunito' }}>
                                    Đưa ra những thông tin hữu ích, các bệnh thường gặp giúp bạn chăm sóc pet tốt hơn
                                </Text>
                            </Box>
                        </Pressable>

                    </Flex>
                </Box>
            </Box>

        )
    }
}
