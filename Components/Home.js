import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Pressable,
} from 'react-native';
import axios from 'axios';
import Tile from './Tile';

const Home = ({ navigation }) => {

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
                // console.log(data.articles)
                // console.log(news.articles.length)
            }).catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <ScrollView >
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.headerText}>Payment Options :</Text>
                    </View>
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate('Send Money')}>
                            <Tile title={'Send Money'} source={require('../assets/images/creditCard.png')} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('PeYTM Wallet')}>
                            <Tile title={'Wallet'} source={require('../assets/images/wallet.png')} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Transaction History')}>
                            <Tile title={'Transaction History'} source={require('../assets/images/bankHistory.png')} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.headerText}>Pay Bills :</Text>
                    </View>
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate('Electricity Bill')}>
                            <Tile title={'Electricity Bill'} source={require('../assets/images/elecBill.png')} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Water Bill')}>
                            <Tile title={'Water Bill'} source={require('../assets/images/waterBill.png')} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Mobile Recharge')}>
                            <Tile title={'Mobile Recharge'} source={require('../assets/images/mobileRecharge.png')} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.headerText}>Stock Market :</Text>
                    </View>
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate('Stocks')}>
                            <Tile title={'News'} source={require('../assets/images/elecBill.png')} />
                        </Pressable>
                        {/* <Pressable onPress={() => navigation.navigate('Water Bill')}>
                            <Tile title={'Water Bill'} source={require('../assets/images/waterBill.png')} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Mobile Recharge')}>
                            <Tile title={'Mobile Recharge'} source={require('../assets/images/mobileRecharge.png')} />
                        </Pressable> */}
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderRadius: 20,
        borderColor: 'firebrick'
    },
    sectionHeader: {
        // backgroundColor: 'red',
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '500',
        color: 'black'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 200,
        // width: 300,
        // backgroundColor: 'red',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    // tile: {
    //     minWidth: 200,
    //     backgroundColor: 'firebrick',
    //     borderRadius: 20,
    //     // borderWidth: 2,
    //     // borderColor: 'firebrick',
    //     padding: 30
    // },
    // tileText: {
    //     textAlign: 'center',
    //     fontWeight: "bold",
    //     fontSize: 18,
    //     color: 'white'
    // }
})

export default Home
