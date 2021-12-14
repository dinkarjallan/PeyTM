import React, { useState, useEffect, useCallback } from 'react'
import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    RefreshControl,
    ScrollView
} from 'react-native';
import axios from 'axios';

// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }

const StockPage = () => {
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=bitcoin+stock+forex+nasdaq&apiKey=9ca2e6793b3241518e1a85525696088d',
        // params: {
        // },
        headers: {
            // 'x-rapidapi-host': 'financelayer.p.rapidapi.com',
            // 'x-rapidapi-key': '8a793738femshb73db9775c76c67p14ea09jsne23934abc92d'
        }
    };
    useEffect(() => {
        // const fetchData = async () => {}
        axios.request(options)
            .then((response) => {
                // console.log('response.data =>', response.data.articles);
                setData(response.data.articles);
                // console.log('data from inside axios =>', data)
            }).catch((error) => {
                console.error(error);
            });
        // fetchData();
        // console.log('data from inside useEffect =>', data)
    }, [])

    console.log(data)
    // alert(JSON.stringify(data))
    return (
        <>

            <ScrollView
                contentContainerStyle={styles.page}
            >
                <Text style={styles.pageTitle}>Stock News:</Text>
                {data.map((item, index) => {
                    return <View key={index} style={styles.newsTab}>
                        <View>
                            <Text style={styles.newsHeading}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.newsDescription}>{item.description}</Text>
                        </View>
                    </View>
                })}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
    pageTitle: {
        fontSize: 38,
        fontWeight: '700',
        borderBottomWidth: 1,
        borderColor: 'firebrick',
        color: 'firebrick',
        marginBottom: 20
    },
    newsTab: {
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20
    },
    newsHeading: {
        fontSize: 24,
        fontWeight: '600',
        color: 'firebrick'
    },
    newsDescription: {
        marginBottom: 10,
        color: 'darkslategrey'
    }
})

export default StockPage
