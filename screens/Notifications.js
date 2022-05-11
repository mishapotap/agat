import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Notifications = ({navigation}) => {


    return (
        <View style={styles.container}>
            <Text>Уведомления</Text>
            <Text>Уведомления</Text>
            <Text>Уведомления</Text>
            <Text>Уведомления</Text>
            <Text>Уведомления</Text>
            <Button
                title='Комментарии'
                onPress={() => navigation.navigate('Комментарии')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Notifications