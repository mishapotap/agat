import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {COLORS, SIZES} from '../constants';
import {Research1_Modal_1, Research1_Modal_2, Research1_Modal_3, Research1_Modal_4, Research1_Modal_5, Research1_Modal_6} from "./modal";
import { Research_1_Icon1, Research_1_Icon2, Research_1_Icon3, Research_1_Icon4, Research_1_Icon5, Research_1_Icon6 } from "../assets/svg";

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
            <Pressable onPress={() => setModalResearch1(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.5, left: SIZES.width * 0.07}}>
                    <Research_1_Icon1 />
                </View>
            </Pressable>
            <Pressable onPress={() => setModalResearch2(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.1}}>
                    <Research_1_Icon2 />
                </View>
            </Pressable>
            <Pressable onPress={() => setModalResearch3(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.35, left: SIZES.width * 0.175}}>
                    <Research_1_Icon3 />
                </View>
            </Pressable>
            <Pressable onPress={() => setModalResearch4(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.56}}>
                    <Research_1_Icon4 />
                </View>
            </Pressable>
            <Pressable onPress={() => setModalResearch5(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.67, left: SIZES.width * 0.59}}>
                    <Research_1_Icon5 />
                </View>
            </Pressable>
            <Pressable onPress={() => setModalResearch6(true)}>
                <View style={{position: 'absolute', top: SIZES.height * 0.45, left: SIZES.width * 0.725}}>
                    <Research_1_Icon6 />
                </View>
            </Pressable>
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