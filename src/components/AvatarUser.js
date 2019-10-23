import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class AvatarUser extends Component {
    render() {
        return (

            <Image style={styles.avatar}
                source={{ uri: 'https://pbs.twimg.com/profile_images/882658676900802561/I98JM9OX.jpg' }}
            ></Image>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        marginTop: 0,
        marginRight: 'auto',
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 12,
    },
})
