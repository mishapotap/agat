import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants';

const AboutBlock_2 = () => {
    return (
        <View style={styles.content}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Оператором <Text style={{color: COLORS.blueText}}>по подготовке и проведению</Text> космических исследований и экспериментов является АО «Организация «Агат».
                </Text>
                <Text style={styles.subtitle}>По заказу Госкорпорации «Роскосмос», «Организация «Агат» проводит работы по предварительному отбору и подготовке коммерческих целевых работ для проведения космических экспериментов на российском сегменте Международной космической станции.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width: 290,
        marginRight: 100,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    title: {
        marginBottom: 35,
        // text
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 23,
        letterSpacing: 0.05,
        color: COLORS.white,
    },
    subtitle: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.05,
        color: COLORS.white,
    }
})

export default AboutBlock_2;