import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {COLORS, SIZES} from '../constants';
import {Research1_Modal_1, Research1_Modal_2, Research1_Modal_3, Research1_Modal_4, Research1_Modal_5, Research1_Modal_6} from "./modal";
import { Research_1_Icon1, Research_1_Icon1_big, Research_1_Icon2, Research_1_Icon2_big, Research_1_Icon3, Research_1_Icon3_big, Research_1_Icon4, Research_1_Icon4_big, Research_1_Icon5, Research_1_Icon5_big, Research_1_Icon6, Research_1_Icon6_big } from "../assets/svg";

const ResearchBlock_1 = () => {
    const [modalResearch1, setModalResearch1] = useState(false);
    const [modalResearch2, setModalResearch2] = useState(false);
    const [modalResearch3, setModalResearch3] = useState(false);
    const [modalResearch4, setModalResearch4] = useState(false);
    const [modalResearch5, setModalResearch5] = useState(false);
    const [modalResearch6, setModalResearch6] = useState(false);
    return (
        <View style={styles.content}>
            <Research1_Modal_1 modalVisible={modalResearch1} setModalVisible={setModalResearch1}/>
            <Research1_Modal_2 modalVisible={modalResearch2} setModalVisible={setModalResearch2}/>
            <Research1_Modal_3 modalVisible={modalResearch3} setModalVisible={setModalResearch3}/>
            <Research1_Modal_4 modalVisible={modalResearch4} setModalVisible={setModalResearch4}/>
            <Research1_Modal_5 modalVisible={modalResearch5} setModalVisible={setModalResearch5}/>
            <Research1_Modal_6 modalVisible={modalResearch6} setModalVisible={setModalResearch6}/>
            <TouchableOpacity onPressOut={() => setModalResearch1(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.5, left: SIZES.width * 0.055}}>
                    <Research_1_Icon1_big />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => setModalResearch2(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.09}}>
                    <Research_1_Icon2_big />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => setModalResearch3(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.35, left: SIZES.width * 0.175}}>
                    <Research_1_Icon3_big />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => setModalResearch4(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.56}}>
                    <Research_1_Icon4_big />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => setModalResearch5(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.67, left: SIZES.width * 0.58}}>
                    <Research_1_Icon5_big />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => setModalResearch6(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.45, left: SIZES.width * 0.715}}>
                    <Research_1_Icon6_big />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>Исследования{'\n'}в космосе</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
    },
    title: {
        position: 'absolute',
        left: SIZES.width * 0.11 + 20,
        bottom: 20,
        // text
		fontWeight: "800",
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: COLORS.white,
	}
})

export default ResearchBlock_1;