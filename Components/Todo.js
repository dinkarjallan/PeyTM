import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DisplayMode from 'react-native/Libraries/ReactNative/DisplayMode';


const Todo = (props) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                fillColor="cadetblue"
                unfillColor="#FFFFFF"
                text={`${props.content}`}
                iconStyle={{ borderColor: "cadetblue" }}
                textStyle={styles.text}
            />

            {/* <Text style={styles.text}></Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkslategrey',
        padding: 20,
        marginTop: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
})

export default Todo
