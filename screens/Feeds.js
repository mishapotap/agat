import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Feeds = () => (
    <View style={styles.container}>
        <Text>Новости</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Feeds