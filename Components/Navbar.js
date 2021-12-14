import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ElecBill from './ElecBill';
import WaterBill from './WaterBill';
import MobBill from './MobBill';
import StockPage from './StockPage';
import Home from './Home';
import History from './History';
import Transfer from './Transfer';
import Wallet from './Wallet';

const Stack = createNativeStackNavigator();

const Navbar = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ title: 'PeYTM' }} />
                    <Stack.Screen name="Electricity Bill" component={ElecBill} />
                    <Stack.Screen name="Water Bill" component={WaterBill} />
                    <Stack.Screen name="Mobile Recharge" component={MobBill} />
                    <Stack.Screen name="Transaction History" component={History} />
                    <Stack.Screen name="Send Money" component={Transfer} />
                    <Stack.Screen name="PeYTM Wallet" component={Wallet} />
                    <Stack.Screen name="Stocks" component={StockPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navbar
