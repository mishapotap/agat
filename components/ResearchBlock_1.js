import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {COLORS, SIZES, dummyData} from '../constants';
import { Research1_Modal} from "./modal";

const ResearchBlock_1 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemContent, setItemContent] = useState("0");

    return (
        <View style={styles.content}>
            <Research1_Modal modalVisible={modalVisible} itemContent={itemContent} setModalVisible={setModalVisible}/>
            {dummyData.research1.map((item) => (
                 <TouchableOpacity key={item.id} onPressOut={() => {setItemContent(item.id - 1); setModalVisible(true)}}>
                    <View style={{position: item.position, top: item.top, left: item.left}}>
                        {item.icon}
                    </View>
                </TouchableOpacity>
            ))}
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