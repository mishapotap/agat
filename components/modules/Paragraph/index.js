import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const Paragraph = ({ data: text }) => {
	return (
		<View style={{marginBottom: 15}}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		// text
		fontWeight: "400",
		fontSize: 13,
		lineHeight: 21,
		letterSpacing: 0.9,
		color: COLORS.white
	}
});

export default {
	name: "Paragraph",
	Component: Paragraph,
};
