import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import {COLORS, SIZES} from '../constants';
import { research_2_icon_1, research_2_icon_2, research_2_icon_3, research_2_icon_4 } from "../constants/icons";

const ResearchBlock_2 = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых <Text style={{color: COLORS.blueText}}>направлениях наук о космосе</Text></Text>
            <View style={styles.items}>
                <Pressable>
                    <View style={styles.item}>
                        <Image style={styles.image} source={research_2_icon_1}/>
                        <Text style={styles.itemText}>Научно-{"\n"}фундаментальные</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.item}>
                        <Image style={styles.image} source={research_2_icon_2}/>
                        <Text style={styles.itemText}>Технологические</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.item}>
                        <Image style={styles.image} source={research_2_icon_3}/>
                        <Text style={styles.itemText}>Прикладные</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.item}>
                        <Image style={styles.image} source={research_2_icon_4}/>
                        <Text style={styles.itemText}>Образовательные</Text>
                    </View>
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
    image: {
        margin: 13,
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