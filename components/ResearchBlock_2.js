import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {COLORS, SIZES} from '../constants';
import { Research_2_icon1, Research_2_icon2, Research_2_icon3, Research_2_icon4  } from "../assets/svg";
import { Research2_Modal_1, Research2_Modal_2, Research2_Modal_3, Research2_Modal_4 } from "./modal";

const ResearchBlock_2 = () => {
    const [modalResearch1, setModalResearch1] = useState(false);
    const [modalResearch2, setModalResearch2] = useState(false);
    const [modalResearch3, setModalResearch3] = useState(false);
    const [modalResearch4, setModalResearch4] = useState(false);
    return (
        <View style={styles.content}>
            <Research2_Modal_1 modalVisible={modalResearch1} setModalVisible={setModalResearch1}/>
            <Research2_Modal_2 modalVisible={modalResearch2} setModalVisible={setModalResearch2}/>
            <Research2_Modal_3 modalVisible={modalResearch3} setModalVisible={setModalResearch3}/>
            <Research2_Modal_4 modalVisible={modalResearch4} setModalVisible={setModalResearch4}/>
            <Text style={styles.text}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых <Text style={{color: COLORS.blueText}}>направлениях наук о космосе</Text></Text>
            <View style={styles.items}>
                <TouchableOpacity onPress={() => setModalResearch1(true)}>
                    <View style={styles.item}>
                        <View style={{margin: 13}}><Research_2_icon1/></View>
                        <Text style={styles.itemText}>Научно-{"\n"}фундаментальные</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalResearch2(true)}>
                    <View style={styles.item}>
                    <View style={{margin: 13}}><Research_2_icon2/></View>
                        <Text style={styles.itemText}>Технологические</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalResearch3(true)}>
                    <View style={styles.item}>
                    <View style={{margin: 13}}><Research_2_icon3/></View>
                        <Text style={styles.itemText}>Прикладные</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalResearch4(true)}>
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