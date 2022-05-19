import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { research_1_icon_1, research_1_icon_2, research_1_icon_3, research_1_icon_4, research_1_icon_5, research_1_icon_6 } from "../constants/icons";
import {COLORS, SIZES} from '../constants';

const ResearchBlock_1 = () => {
    return (
        <View style={styles.content}>
            <Image style={{position: 'absolute', top: SIZES.height * 0.5, left: SIZES.width * 0.175}} source={research_1_icon_1}/>
            <Image style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.21}} source={research_1_icon_2}/>
            <Image style={{position: 'absolute', top: SIZES.height * 0.35, left: SIZES.width * 0.28}} source={research_1_icon_3}/>
            <Image style={{position: 'absolute', top: SIZES.height * 0.15, left: SIZES.width * 0.67}} source={research_1_icon_4}/>
            <Image style={{position: 'absolute', top: SIZES.height * 0.67, left: SIZES.width * 0.69}} source={research_1_icon_5}/>
            <Image style={{position: 'absolute', top: SIZES.height * 0.45, left: SIZES.width * 0.83}} source={research_1_icon_6}/>
            <View style={styles.container}>
                <Text style={styles.title}>Исследования{'\n'}в космосе</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: SIZES.width * 0.11,
        height: SIZES.height,
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
		padding: 40,
        // text
		fontWeight: "800",
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: COLORS.white,
	}
})

export default ResearchBlock_1;