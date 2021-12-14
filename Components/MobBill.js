import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';



const MobBill = () => {
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
            <Text style={styles.header}>Enter Details</Text>
            <View style={styles.pageContainer}>

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerHeading}>Select operator:</Text>
                    <RNPickerSelect
                        onValueChange={(value) => { }}
                        items={[
                            { label: 'Vodafone-Idea', value: 'Vodafone-Idea' },
                            { label: 'Airtel', value: 'Airtel' },
                            { label: 'Jio', value: 'Jio' },
                            { label: 'BSNL Mobile', value: 'Kolkata waters' },
                            { label: 'Aircel', value: 'Aircel' },
                            { label: 'Reliance Communications', value: 'Reliance Communications' },
                            { label: 'Telenor India', value: 'Telenor India' },
                            { label: 'Tata Docomo', value: 'Tata Docomo' },
                            { label: 'MTS India', value: 'PSWCL' },
                            { label: 'MTNL', value: 'MTNL' },
                        ]}
                    />
                </View>
                <TextInput
                    style={styles.inputBox}
                    keyboardType={'number-pad'}
                    placeholder='Mobile Number' />
                {/* <RNPickerSelect
                    // style={{ backgroundColor: 'red' }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Vodafone-Idea', value: 'Vodafone-Idea' },
                        { label: 'Airtel', value: 'Airtel' },
                        { label: 'Jio', value: 'Jio' },
                        { label: 'BSNL Mobile', value: 'Kolkata waters' },
                        { label: 'Aircel', value: 'Aircel' },
                        { label: 'Reliance Communications', value: 'Reliance Communications' },
                        { label: 'Telenor India', value: 'Telenor India' },
                        { label: 'Tata Docomo', value: 'Tata Docomo' },
                        { label: 'MTS India', value: 'PSWCL' },
                        { label: 'MTNL', value: 'MTNL' },
                    ]}
                /> */}
                <TextInput
                    style={styles.inputBox}
                    keyboardType={'number-pad'}
                    placeholder='Recharge Value' />
                <TouchableWithoutFeedback>
                    <View style={styles.proceed}>
                        <Text style={styles.buttonText}>Proceed</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    header: {
        fontSize: 36,
        padding: 20,
        // paddingBottom: 0,
        fontWeight: 'bold',
        color: 'darkslategrey'
    },
    inputBox: {
        fontSize: 18,
        width: 350,
        borderBottomWidth: 2,
        borderColor: 'firebrick',
        padding: 10,
        paddingLeft: 0,
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
    pickerContainer: {
        width: 350,
        // backgroundColor: 'red'
    },
    pickerHeading: {
        fontSize: 18
    }
});

export default MobBill
