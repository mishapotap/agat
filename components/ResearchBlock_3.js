import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {COLORS, SIZES} from '../constants';
import {Research3_Modal_1, Research3_Modal_2, Research3_Modal_3, Research3_Modal_4} from "./modal";
import { Research_3_icon1, Research_3_icon2, Research_3_icon3, Research_3_icon4 } from "../assets/svg";

const ResearchBlock_3 = () => {
    const [modalResearch1, setModalResearch1] = useState(false);
    const [modalResearch2, setModalResearch2] = useState(false);
    const [modalResearch3, setModalResearch3] = useState(false);
    const [modalResearch4, setModalResearch4] = useState(false);
    return (
        <View style={styles.content}>
            <Research3_Modal_1 modalVisible={modalResearch1} setModalVisible={setModalResearch1}/>
            <Research3_Modal_2 modalVisible={modalResearch2} setModalVisible={setModalResearch2}/>
            <Research3_Modal_3 modalVisible={modalResearch3} setModalVisible={setModalResearch3}/>
            <Research3_Modal_4 modalVisible={modalResearch4} setModalVisible={setModalResearch4}/>

            <TouchableOpacity onPress={() => setModalResearch1(true)}>
                <LinearGradient style={styles.item} colors={['90deg, rgba(100, 162, 255, 0.23) 0%', 'rgba(26, 67, 129, 0.23) 91.45%']}>
                    <View style={styles.icon}>
                        <Research_3_icon1/>
                    </View>
                    <Text style={styles.text}>Порядок проведения космических экспериментов на РС МКС</Text>
                    <Text style={styles.more}>Подробнее</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalResearch2(true)}>
                <LinearGradient style={styles.item} colors={['90deg, rgba(190, 91, 237, 0.26) 0%', 'rgba(99, 44, 132, 0.26) 91.45%']}>
                    <View style={styles.icon}>
                        <Research_3_icon2/>
                    </View>
                    <Text style={styles.text}>Этапы жизненного цикла космических исследований</Text>
                    <Text style={styles.more}>Подробнее</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalResearch3(true)}>
                <LinearGradient style={styles.item} colors={['90deg, rgba(106, 235, 204, 0.26) 0%', 'rgba(51, 129, 110, 0.26) 91.45%']}>
                    <View style={styles.icon}>
                        <Research_3_icon3/>
                    </View>
                    <Text style={styles.text}>Участники реализации космических исследований</Text>
                    <Text style={styles.more}>Подробнее</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalResearch4(true)}>
                <LinearGradient style={styles.item} colors={['90deg, rgba(59, 129, 233, 0.26) 0%', 'rgba(3, 44, 92, 0.26) 91.45%']}>
                    <View style={styles.icon}>
                        <Research_3_icon4/>
                    </View>
                    <Text style={styles.text}>Основные роли и функции участников исследований</Text>
                    <Text style={styles.more}>Подробнее</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    item: {
        width: 470,
        height: 92,
        marginBottom: 20,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'rgba(76, 160, 212, 0.21)',
    },
    text: {
        flex: 3,
        paddingLeft: 20,
        alignSelf: 'center',
        // text
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 18,
        color: COLORS.white,
    },
    more: {
        flex: 1,
        paddingBottom: 10,
        alignSelf: 'flex-end',
        // text
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 18,
        color: COLORS.white,
        opacity: 0.13,
    },
})

export default ResearchBlock_3;