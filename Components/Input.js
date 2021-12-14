import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import axios from 'axios';

const Input = () => {
    const [data, setData] = useState();
    const [text, setText] = useState('')
    const [list, setList] = useState([])

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

    const addToList = () => {
        if (text !== '') {
            setList([...list, text])
        }
        setText('')
        // console.log(list)
    }

    const handleChange = (value) => {
        setText(value)
    }
    return (
        <>
            <View >
                <TextInput
                    style={styles.input}
                    placeholder="what do you want to do?"
                    value={text}
                    onChangeText={value => handleChange(value)}
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => { addToList() }}
                >
                    <Text style={{ color: "white", fontSize: 18, fontFamily: "OpenSans-Bold", textTransform: "capitalize" }}>Add to List</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={[styles.list, styles.listBackground]}>
                {list.length == 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50 }}><Image style={styles.image} source={require('../assets/images/add-file.png')} /></View> : list.map((item, index) => { return <Todo key={index} index={index} content={item} /> })
                }
            </ScrollView>
        </>

    )
}





const styles = StyleSheet.create({
    button: {
        backgroundColor: 'cadetblue',
        // height: 40,
        alignItems: "center",
        padding: 10
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 60,
        backgroundColor: 'white',
        borderColor: 'grey',
        fontSize: 18,
        borderWidth: 2,
        padding: 20
    },
    list: {
        marginTop: 20,
    },
    // listBackground: {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    // transform: translate('-50 %', 0)
    // }
});



export default Input
