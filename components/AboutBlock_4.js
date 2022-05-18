import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { Home_2 } from "../constants/svg";
import ModalWhite from "./ModalWhite";

const AboutBlock_4 = () => {
    return (
        <View style={styles.content}>
            <View style={styles.wrapper}>
                <Home_2/>
                <Text style={styles.title}>Цель развития отечественных <Text style={{color: COLORS.blueText}}>фундаментальных космических исследований</Text></Text>
                <Text style={styles.text}>выход российской науки на ведущие позиции в ключевых направлениях наук о космосе, а в долгосрочной перспективе - завоевание и удержание позиций одного из мировых лидеров в основных научных дисциплинах о космосе.</Text>
                <ModalWhite/>
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
        alignItems: 'center',
    },
    wrapper: {
        width: 460,
        alignItems: 'center',
    },
    title: {
        marginVertical: 25,
        textAlign: 'center',
        // text
        fontWeight: "800",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: 0.5,
        color: COLORS.white,
    },
    text: {
        textAlign: 'center',
        // text
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: COLORS.white
    },
})

export default AboutBlock_4;