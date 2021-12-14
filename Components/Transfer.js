import React, { useState, useEffect } from 'react'
import {
    Text,
    TextInput,
    View,
    Pressable,
    ScrollView,
    StyleSheet
} from 'react-native';
import axios from 'axios';

const Transfer = () => {
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
            <ScrollView style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.headerText}>Send Money to a Friend :</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={`Enter Phone Number`}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder={`Amount`}
                        keyboardType='number-pad'
                    />
                    <Pressable onPress={() => alert('sent money')}>
                        <View style={styles.proceed}>
                            <Text style={styles.buttonText}>Proceed</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    section: {
        // backgroundColor: 'red',
        padding: 20,

    },
    sectionHeader: {
        marginBottom: 20,
        // flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    headerText: {
        fontSize: 26,
        color: 'firebrick'
    },
    container: {
        height: 400,
        // backgroundColor: 'blue',
        justifyContent: 'space-around'
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
    },
})

export default Transfer
