import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {COLORS, SIZES} from '../constants';
import { Research_2_icon1, Research_2_icon2, Research_2_icon3, Research_2_icon4  } from "../assets/svg";

const ResearchBlock_2 = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых <Text style={{color: COLORS.blueText}}>направлениях наук о космосе</Text></Text>
            <View style={styles.items}>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <View style={{margin: 13}}><Research_2_icon1/></View>
                        <Text style={styles.itemText}>Научно-{"\n"}фундаментальные</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.item}>
                    <View style={{margin: 13}}><Research_2_icon2/></View>
                        <Text style={styles.itemText}>Технологические</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.item}>
                    <View style={{margin: 13}}><Research_2_icon3/></View>
                        <Text style={styles.itemText}>Прикладные</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <View style={{margin: 13}}><Research_2_icon4/></View>
                        <Text style={styles.itemText}>Образовательные</Text>
                    </View>
                </TouchableOpacity>
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
        justifyContent: 'center',
    },
    text: {
        width: 320,
        marginBottom: 30,
        // text
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.9,
        color: COLORS.white,
    },
    items: {
        flexDirection: "row",
    },
    item: {
        width: 115,
        height: 100,
        borderRadius: 16,
        backgroundColor: 'rgba(68, 68, 68, 0.23)',
        margin: 4,
    },
    itemText: {
        marginTop: 5,
        alignSelf: 'center',
        // text
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 13,
        color: COLORS.white,
    },
})

export default ResearchBlock_2;