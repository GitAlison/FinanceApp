import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import AvatarUser from '../components/AvatarUser';

export default class CardUser extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.header}>
                    <Image style={styles.avatar}
                        source={{ uri: 'https://pbs.twimg.com/profile_images/882658676900802561/I98JM9OX.jpg' }}
                    ></Image>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.title}> Alison Aguiar </Text>
                    <Text style={styles.subtitle}> Alison Aguiar </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: 110,
        height: 120,
        padding: 6,
        marginTop: 4,
        marginBottom: 22,
        marginLeft: 22,
        borderRadius: 10,
        backgroundColor: "#4b62ef",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 4,
    },
    avatar: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 40,
        height: 70,
        width: 70,
    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 10,
        color: '#fff'
    },
    header: {

    },

    footer: {

    }
})
