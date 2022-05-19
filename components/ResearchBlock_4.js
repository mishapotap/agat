import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import {COLORS, SIZES} from '../constants';
import { research_4_pointer } from "../constants/icons";

const ResearchBlock_4 = () => {
    return (
        <View style={styles.content}>
                <View style={styles.block}>
                    <Text style={styles.text}>Космические исследования и эксперименты проводятся на Российском сегменте Международной космической станции</Text>
                    <Pressable>
                        <Image source={research_4_pointer}/>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    block: {
        marginBottom: 40,
        width: 470,
        height: 90,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: 'rgba(185, 185, 185, 0.2)',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    text: {
        width: 300,
        // text
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 18,
        color: COLORS.white,
    },
})

export default ResearchBlock_4;