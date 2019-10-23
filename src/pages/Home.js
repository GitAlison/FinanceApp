import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native'
import CardHeader from '../components/CardHeader';
import Carduser from '../components/CardUser';
import AvatarUser from '../components/AvatarUser';

export default class Home extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.left} >
                            <Text style={styles.title}> Dashboard </Text>
                            <Text style={styles.subtitle}> Alison Aguiar </Text>
                        </View>
                        <View style={styles.right} >
                            <AvatarUser />
                        </View>
                    </View>
                    <View style={styles.dash} >
                        <View style={{ marginLeft: -8 }} >
                            <Text style={styles.subtitle}> Wallet Balance </Text>
                            <Text style={styles.value}> $9,222,11 </Text>
                        </View>
                        <View>
                            <Text style={styles.subtitle}> Cards Active </Text>
                            <Text style={styles.value}> 3 </Text>
                        </View>
                        <TouchableOpacity style={styles.btn} title="Edit Id" >
                            <Text>
                                Edit ID
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <CardHeader />
                            <CardHeader />
                            <CardHeader />
                            <CardHeader />
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.launch}>
                    <TouchableOpacity>
                        <Text style={styles.launchText}>
                            Launch Value
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.launchSubtitle}>
                        Launch click here
                        </Text>
                </View>
                <ScrollView style={styles.users}>
                    <View style={styles.usersCards} >


                        <Carduser />
                        <Carduser />
                        <Carduser />
                        <Carduser />
                        <Carduser />
                        <Carduser />
                        <Carduser />
                        <Carduser />


                    </View>
                </ScrollView>
            </ScrollView >

        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: '#fefefd',
        fontWeight: 'bold',
    },
    subtitle: {
        marginLeft: 4,
        fontSize: 12,
        color: '#fefefd',
    },
    value: {
        marginLeft: 4,
        fontSize: 24,
        color: '#fefefd',
        fontWeight: 'bold',
    },

    btn: {
        backgroundColor: '#f6f7f9',
        color: '#4b62ef',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 10,
        borderRadius: 5
    },
    dash: {
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderBottomColor: '#fff',
        borderTopColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    container: {
        paddingTop: 20,
        height: 335,
        backgroundColor: '#4b62e0',
    },
    header: {
        marginLeft: 18,
        marginBottom: 28,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    cards: {
        flex: 1,
    },

    // Launch Button
    launch: {
        padding: 4,
        backgroundColor: '#fff',
        margin: 22,
        borderRadius: 13,
        shadowColor: "#3d39ee",
        shadowOffset: {
            width: 0,
            height: .4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    launchText: {
        paddingTop: 8,
        textAlign: 'center',
        color: '#4b62ef',
        fontSize: 24,
        fontWeight: 'bold',

    },
    launchSubtitle: {
        textAlign: 'center',
        color: '#4b62ef',
        fontSize: 13,
        paddingBottom: 10,
    },
    // Users
    users: {
        flexDirection: 'column',
    },
    usersCards: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

})
