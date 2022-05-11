import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Groups = ({navigation}) => {


    return (
        <View style={styles.container}>
            <Text>Группы</Text>
            <Text>Группы</Text>
            <Text>Группы</Text>
            <Text>Группы</Text>
            <Text>Группы</Text>
            <Text>Группы</Text>
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

export default Groups