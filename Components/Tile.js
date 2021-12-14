import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Tile = ({ source, title }) => {
    return (
        <>
            <View style={styles.TContainer}>
                <Image
                    style={styles.TIcon}
                    source={source}
                />
                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>{title}</Text>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    TContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 20,
        width: 110,
        height: 130,
        paddingHorizontal: 10,
        // margin: 7
    },
    TIcon: {
        width: 80,
        height: 80
    },
    TextContainer: {
        width: 100,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    Text: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        color: 'firebrick'
    }
})

export default Tile
