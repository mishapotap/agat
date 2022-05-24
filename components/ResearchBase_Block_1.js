import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ResearchBase_Filter } from "../assets/svg";
import {COLORS, SIZES} from '../constants';
import {ResearchBase_Modal_1} from "./modal";

const ResearchBase_Block_1 = ({items, setFilteredItems}) => {

    const [modalSwitch, setModalSwitch] = useState(false);

    return (
        <View style={styles.content}>
            <ResearchBase_Modal_1 modalVisible={modalSwitch} setModalVisible={setModalSwitch} items={items} setFilteredItems={setFilteredItems}/>
            <View style={styles.switch}>
                <Text style={styles.text}>Выбор направления</Text>
                <TouchableOpacity onPress={() => setModalSwitch(true)}>
                    <ResearchBase_Filter/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>База данных{"\n"}экспериментов</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                        <Text style={styles.current}>Текущие</Text>
                        <View style={styles.hr}></View>
                        <Text style={styles.count}>123</Text>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={styles.current}>Завершенные</Text>
                        <View style={styles.hr}></View>
                        <Text style={styles.count}>456</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
        justifyContent: 'flex-end',
    },
    switch: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        position: 'absolute',
        top: 30,
        right: 30,
    },
    text: {
        // text
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 14,
        color: COLORS.white,
    },
    container: {
        width: 300,
        margin: 60,
    },
    title: {
        marginBottom: 30,
        // text
        fontWeight: '800',
        fontSize: 26,
        lineHeight: 33,
        letterSpacing: 1,
        color: COLORS.white,
    },
    current: {
        // text
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: 1,
        color: '#8F8F8F',
    },
    hr: {
        marginVertical: 10,
        height: 1,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    count: {
        // text
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 31,
        letterSpacing: 2,
        color: COLORS.white,
    },
})

export default ResearchBase_Block_1;