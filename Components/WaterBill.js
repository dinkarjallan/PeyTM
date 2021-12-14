import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';


const WaterBill = () => {
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
                    <Text style={styles.pickerHeading}>Select Board:</Text>
                    <RNPickerSelect
                        onValueChange={(value) => { }}
                        items={[
                            { label: 'PSWCL', value: 'PSWCL' },
                            { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                            { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                            { label: 'Kolkata waters', value: 'Kolkata waters' },
                            { label: 'PSWCL', value: 'PSWCL' },
                            { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                            { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                            { label: 'Kolkata waters', value: 'Kolkata waters' },
                            { label: 'PSWCL', value: 'PSWCL' },
                            { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                            { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                            { label: 'Kolkata waters', value: 'Kolkata waters' },
                        ]}
                    />
                </View>
                {/* <RNPickerSelect
                    onValueChange={(value) => { }}
                    items={[
                        { label: 'PSWCL', value: 'PSWCL' },
                        { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                        { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                        { label: 'Kolkata waters', value: 'Kolkata waters' },
                        { label: 'PSWCL', value: 'PSWCL' },
                        { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                        { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                        { label: 'Kolkata waters', value: 'Kolkata waters' },
                        { label: 'PSWCL', value: 'PSWCL' },
                        { label: 'Delhi Water Board', value: 'Delhi Water Board' },
                        { label: 'Punjab Hydro Power', value: 'Punjab Hydro Power' },
                        { label: 'Kolkata waters', value: 'Kolkata waters' },
                    ]}
                /> */}
                <TextInput
                    style={styles.inputBox}
                    placeholder='Service Type/ULB Code' />
                <TextInput
                    style={styles.inputBox}
                    keyboardType={'number-pad'}
                    placeholder='K Number' />
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
    // inputAndroid: {
    //     backgroundColor: 'red',
    //     fontSize: 16,
    //     paddingHorizontal: 10,
    //     paddingVertical: 8,
    //     borderWidth: 0.5,
    //     borderColor: 'purple',
    //     borderRadius: 8,
    //     color: 'black',
    //     paddingRight: 30,
    // },
    pageContainer: {
        // flex: 1,
        height: 450,
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
        alignItems: 'center',
        // backgroundColor: "red"
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


export default WaterBill
