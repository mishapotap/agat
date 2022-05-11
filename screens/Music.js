import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Music = ({navigation}) => {


    return (
        <View style={styles.container}>
            <Text>Музыка</Text>
            <Text>Музыка</Text>
            <Text>Музыка</Text>
            <Text>Музыка</Text>
            <Text>Музыка</Text>
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

export default Music