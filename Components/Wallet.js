import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    Pressable
} from 'react-native';
import axios from 'axios';

const Wallet = () => {
    const [data, setData] = useState();

    const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=bitcoin+stock+forex+nasdaq&apiKey=9ca2e6793b3241518e1a85525696088d',
        // params: {
        // },
        headers: {
            'x-rapidapi-host': 'financelayer.p.rapidapi.com',
            'x-rapidapi-key': '8a793738femshb73db9775c76c67p14ea09jsne23934abc92d'
        }
    };
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
                // console.log(news.articles)
                // console.log(news.articles.length)
            }).catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <ScrollView>
                <View style={styles.section}>
                    <View style={styles.heading}>
                        <Text style={styles.headingTxt}>Account Balance and History</Text>
                    </View>
                    <View style={styles.subHeading}>
                        <Text style={styles.subHeadingTxt}>Accounts</Text>
                    </View>
                    <View>
                        <View style={styles.tab}>
                            <View style={styles.tabImage}>
                                <Image style={styles.image} source={require('../assets/images/wallet.png')} />
                            </View>
                            <View style={styles.tabTxtContainer}>
                                <View >
                                    <Text style={styles.txtHeader}>PeYTM Balance: </Text>
                                </View>
                                <View >
                                    <Text style={styles.txtPrice}>2,54,632 /-</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subHeading}>
                        <Text style={styles.subHeadingTxt}>Add Money to Wallet</Text>
                    </View>
                    <View style={styles.addMoney}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={`Amount`}
                            keyboardType='number-pad'
                        />
                        <Pressable onPress={() => alert('Successfully Added Money')}>
                            <View style={styles.proceed}>
                                <Text style={styles.buttonText}>Proceed</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 20,
        marginHorizontal: 20,
        // backgroundColor: 'green'
    },
    heading: {
        marginTop: 20
    },
    subHeading: {
        marginTop: 20,
        marginBottom: 20,
    },
    headingTxt: {
        fontSize: 26,
        fontWeight: '500',
        color: 'black'
    },
    subHeadingTxt: {
        fontSize: 22,
        fontWeight: '500',
        color: 'darkslategrey'
    },
    tab: {
        // backgroundColor: 'red',
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
    },
    image: {
        width: 50,
        height: 50
    },
    tabTxtContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        width: '80%'
    },
    txtHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    txtPrice: {
        fontWeight: '600',
        color: 'firebrick'
    },
    inputBox: {
        fontSize: 18,
        width: 350,
        borderBottomWidth: 2,
        borderColor: 'firebrick',
        padding: 10,
        paddingLeft: 0,
        marginBottom: 20,
        alignItems: 'center'
    },
    proceed: {
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: 'firebrick',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Wallet
