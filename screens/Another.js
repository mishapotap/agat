import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Another = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Еще</Text>
            <Text>Еще</Text>
            <Text>Еще</Text>
            <Text>Еще</Text>
            <Text>Еще</Text>
            <Button
                title='Боковое меню>'
                onPress={() => navigation.toggleDrawer()}
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

export default Another