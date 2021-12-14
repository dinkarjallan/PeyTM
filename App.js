import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElecBill from './Components/ElecBill';
import WaterBill from './Components/WaterBill';
import MobBill from './Components/MobBill';
import Navbar from './Components/Navbar';



const App = () => {
    return (
        <View style={styles.background}>
            <Navbar />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // backgroundColor: "red"
    }
})

export default App;
