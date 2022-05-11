import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Comments = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Комментарии</Text>
            <Text>Комментарии</Text>
            <Text>Комментарии</Text>
            <Text>Комментарии</Text>
            <Text>Комментарии</Text>
            <Text>Комментарии</Text>
            <Button
                title='Перейти в уведомления'
                onPress={() => navigation.navigate('Уведомления')}
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

export default Comments