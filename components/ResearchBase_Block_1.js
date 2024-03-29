import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ResearchBase_Filter } from "../assets/svg";
import {COLORS, SIZES} from '../constants';
import {ResearchBase_Modal_1} from "./modal";

const ResearchBase_Block_1 = ({items, info, setFilteredItems}) => {

    const [modalSwitch, setModalSwitch] = useState(false);

    return (
        <View style={styles.content}>
            <ResearchBase_Modal_1 modalVisible={modalSwitch} setModalVisible={setModalSwitch} items={items} setFilteredItems={setFilteredItems}/>
            <TouchableOpacity style={styles.switch} onPress={() => setModalSwitch(true)}>
                <Text style={styles.text}>Выбор направления</Text>
                <ResearchBase_Filter/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>База данных{"\n"}экспериментов</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%'}}>
                        <Text style={styles.current}>Реализуется</Text>
                        <View style={styles.hr}></View>
                        <Text style={styles.count}>{info?.CURRENT?.PUBLIC}</Text>
                    </View>
                    <View style={{width: '33%'}}>
                        <Text style={styles.current}>Завершенных</Text>
                        <View style={styles.hr}></View>
                        <Text style={styles.count}>{info?.COMPLETED?.PUBLIC}</Text>
                    </View>
                    <View style={{width: '33%'}}>
                        <Text style={styles.current}>Планируется</Text>
                        <View style={styles.hr}></View>
                        <Text style={styles.count}>{info?.PLANNED?.PUBLIC}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: 70,
        height: SIZES.height,
        flex: 1,
        justifyContent: 'flex-end',
    },
    switch: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        right: 30,
    },
    text: {
        marginRight: 5,
        // text
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 14,
        color: COLORS.white,
    },
    container: {
        width: 390,
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