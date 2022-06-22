import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const Heading = ({ data: text }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 15,
		paddingVertical: 15,
		borderBottomColor: COLORS.white,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	text: {
		fontWeight: "600",
		fontSize: 20,
		lineHeight: 32,
		letterSpacing: 1,
		color: COLORS.white
	}
});

export default {
	name: "Heading",
	Component: Heading,
};
