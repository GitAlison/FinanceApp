import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'

export default class CardHeader extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}> Vendas  </Text>
                <Text style={styles.value}> $9,222.11 </Text>
                <View style={styles.number}>
                    <Text style={styles.numberCard}> •••• •••• •••• •••• </Text>
                </View>
                <ImageBackground style={styles.backgroundImg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThx8gNu155kAYHCgfOMJucsPlDEEu8iu30EogOmpgixF5gwotr&s' }}>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginRight: 22,
        width: 300,
        padding: 10,
        marginTop: 22,
        marginBottom: 22,
        marginLeft: 22,
        borderRadius: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    backgroundImg: {
        opacity: 0.5,
        resizeMode: 'cover', // or 'stretch'
    },
    title: {
        marginLeft: 9,
        fontSize: 12,
        color: '#3e3bee',
    },
    number: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    numberCard: {
        marginLeft: 9,
        fontSize: 26,
        color: '#3e3bee',
    },
    value: {
        marginLeft: 4,
        fontSize: 24,
        color: '#3e3bee',
        fontWeight: 'bold',
    },
})
