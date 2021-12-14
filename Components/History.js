import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import axios from 'axios';

const History = () => {
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
                    <View style={styles.transactList}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTxt}>All Transactions</Text>
                        </View>
                        <View style={styles.banner}>
                            <Image style={styles.bannerImage} source={require('../assets/images/creditCard.png')} />
                            <Text style={styles.bannerTxt}>No Transactions Yet!!</Text>
                        </View>
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
        marginBottom: 20
    },
    subHeading: {
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
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10
    },
    tabImage: {

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
    transactList: {
        // backgroundColor: 'red',
        // borderWidth: 1,
        // borderColor: 'green',
        paddingVertical: 20
        // height: '100%'
    },
    banner: {
        // flex: 1
        // borderColor: 'red',
        // borderWidth: 1,
        // width: '40%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bannerImage: {
        width: 100,
        height: 100
    },
    bannerTxt: {
        fontSize: 16,
        color: 'firebrick'
    }
})

export default History
