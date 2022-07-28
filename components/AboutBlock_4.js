import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { Home_2 } from "../assets/svg";
import {About4_Modal_1} from "./modal";

const AboutBlock_4 = () => {
    const [modalAbout4, setModalAbout4] = useState(false);
    return (
        <View style={styles.content}>
            <View style={styles.wrapper}>
                <Home_2/>
                <Text style={styles.title}>Цель развития отечественных <Text style={{color: COLORS.blueText}}>фундаментальных космических исследований</Text></Text>
                <Text style={styles.text}>выход российской науки на ведущие позиции в ключевых направлениях наук о космосе, а в долгосрочной перспективе - завоевание и удержание позиций одного из мировых лидеров в основных научных дисциплинах о космосе.</Text>
                <TouchableOpacity onPress={() => setModalAbout4(true)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Ценности исследований и экспериментов в космосе</Text>
                    </View>
			    </TouchableOpacity>
                <About4_Modal_1 modalVisible={modalAbout4} setModalVisible={setModalAbout4}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: 70,
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
    button: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        height: 33,
        borderWidth: 1,
        borderColor: 'rgba(0, 170, 255, 0.47)',
        borderRadius: 13,
    },
    buttonText: {
        // text
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: COLORS.white,
        opacity: 0.65,
    },
})

export default AboutBlock_4;