import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {COLORS, SIZES, dummyData} from '../constants';
import { Research2_Modal } from "./modal";

const ResearchBlock_2 = () => {
    const [modalResearch, setModalResearch] = useState(false);
    const [itemContent, setItemContent] = useState("");
    return (
        <View style={styles.content}>
            <Research2_Modal modalVisible={modalResearch} content={itemContent} setModalVisible={setModalResearch}/>
            <Text style={styles.text}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых <Text style={{color: COLORS.blueText}}>направлениях наук о космосе</Text></Text>
            <View style={styles.items}>
                {dummyData.research2.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => {
                        setItemContent(item.content);
                        setModalResearch(true);
                    }}>
                        <View style={styles.item}>
                            <View style={{margin: 13}}>{item.icon}</View>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
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