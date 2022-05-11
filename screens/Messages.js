import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Messages = () => (
    <View style={styles.container}>
        <Text>Сообщения</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Messages