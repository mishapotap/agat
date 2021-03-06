import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Home_1, Home_2 } from "../assets/svg";
import { COLORS, SIZES } from "../constants";

const HomeBlock_1 = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>
                Национальный {"\n"} орбитальный исследовательский центр
            </Text>
            <View style={styles.logos}>
                <Home_1 />
                <Home_2 />
            </View>
            <Text style={styles.title}>Космос</Text>
            <Text style={styles.subtitle}>Пространство инноваций</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
		paddingLeft: SIZES.width * 0.11,
		flex: 1,
		alignItems: 'center',
	},
	text: {
		textAlign: "center",
		paddingVertical: 20,
		// text
		fontWeight: "600",
		fontSize: 10,
		lineHeight: 15,
		textTransform: "uppercase",
		color: COLORS.white,
	},
	logos: {
		width: 300,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		paddingTop: 30,
		// text
		fontWeight: "700",
		fontSize: 80,
		lineHeight: 95,
		letterSpacing: 4,
		textTransform: "uppercase",
		color: COLORS.white,
	},
	subtitle: {
		width: 400,
		textAlign: "right",
		// text
		fontWeight: "700",
		fontSize: 14,
		lineHeight: 17,
		letterSpacing: 2,
		textTransform: "uppercase",
		color: COLORS.white,
	},
})

export default HomeBlock_1;